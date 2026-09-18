import * as THREE from "three";
import type { SpiderVariant } from "@/content/spiders";

type LegRig = {
  hip: THREE.Vector3;
  knee: THREE.Vector3;
  foot: THREE.Vector3;
  upper: THREE.Mesh;
  lower: THREE.Mesh;
  joint: THREE.Mesh;
  ankle: THREE.Mesh;
  phase: number;
};

const up = new THREE.Vector3(0, 1, 0);
const direction = new THREE.Vector3();

function placeSegment(mesh: THREE.Mesh, a: THREE.Vector3, b: THREE.Vector3) {
  direction.subVectors(b, a);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.scale.y = direction.length();
  mesh.quaternion.setFromUnitVectors(up, direction.normalize());
}

/** A fully volumetric character. The source drawing is projected onto both
 * sides of the ellipsoid, so the hand-drawn markings survive rotation. */
export function createSpider(variant: SpiderVariant) {
  const root = new THREE.Group();
  root.name = `spider-${variant.id}`;
  const torso = new THREE.Group();
  root.add(torso);
  let disposed = false;
  const textures = new Set<THREE.Texture>();
  const materials = new Set<THREE.Material>();
  const geometries = new Set<THREE.BufferGeometry>();
  const legs: LegRig[] = [];
  const orbiters: THREE.Mesh[] = [];
  const ripples: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>[] = [];

  const material = (props: THREE.MeshPhysicalMaterialParameters) => {
    const value = new THREE.MeshPhysicalMaterial(props);
    materials.add(value);
    return value;
  };
  const shell = material({ color: variant.body, roughness: 0.46, metalness: 0.08, clearcoat: 0.75, clearcoatRoughness: 0.26 });
  const headMaterial = shell.clone();
  materials.add(headMaterial);
  const legMaterial = material({ color: variant.legs, roughness: 0.32, metalness: 0.35, clearcoat: 0.8 });
  const accentMaterial = material({ color: variant.secondary, roughness: 0.3, metalness: 0.25, emissive: variant.secondary, emissiveIntensity: 0.15 });
  const jointMaterial = material({ color: variant.color, roughness: 0.38, metalness: 0.28 });
  const eyeMaterial = material({ color: "#100e17", roughness: 0.12, clearcoat: 1 });
  const whiteMaterial = material({ color: "#f6eff0", emissive: "#ffffff", emissiveIntensity: 0.2, roughness: 0.25 });

  const sphere = (parent: THREE.Group, name: string, position: number[], scale: number[], mat: THREE.Material, detail = 32) => {
    const geometry = new THREE.SphereGeometry(1, detail, detail);
    geometries.add(geometry);
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.name = name;
    mesh.position.set(position[0], position[1], position[2]);
    mesh.scale.set(scale[0], scale[1], scale[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  const abdomen = sphere(torso, "painted-abdomen", [-0.62, 1.06, 0], [1.02, 0.74, 0.76], shell, 64);
  abdomen.rotation.z = -0.1;
  const head = sphere(torso, "painted-cephalothorax", [0.66, 0.83, 0], [0.5, 0.35, 0.4], headMaterial, 48);

  const projectDrawing = (mesh: THREE.Mesh, centerX: number, centerY: number, radiusX: number, radiusY: number) => {
    const positions = mesh.geometry.getAttribute("position");
    const uv = mesh.geometry.getAttribute("uv");
    for (let i = 0; i < positions.count; i++) {
      uv.setXY(i, centerX + positions.getX(i) * radiusX, 1 - centerY + positions.getY(i) * radiusY);
    }
    uv.needsUpdate = true;
  };
  projectDrawing(abdomen, 0.439, 0.589, 0.088, 0.073);
  projectDrawing(head, 0.555, 0.622, 0.031, 0.026);

  const texture = new THREE.TextureLoader().load(`/spiders/${variant.id}.png`, (loaded) => {
    if (disposed) { loaded.dispose(); return; }
    loaded.colorSpace = THREE.SRGBColorSpace;
    loaded.anisotropy = 4;
    for (const mat of [shell, headMaterial]) {
      mat.map = loaded;
      mat.color.set("#ffffff");
      mat.needsUpdate = true;
    }
  });
  textures.add(texture);

  // Four independently articulated legs on each side, with alternating gait.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const hip = new THREE.Vector3(0.05 + i * 0.23, 0.82, side * 0.25);
      const knee = new THREE.Vector3([-0.83, 0.02, 0.94, 1.52][i], [1.23, 1.5, 1.45, 1.23][i], side * [0.98, 1.25, 1.16, 0.83][i]);
      const foot = new THREE.Vector3([-1.55, -0.5, 1.21, 2.12][i], 0.045, side * [1.31, 1.72, 1.56, 1.06][i]);
      const upperGeo = new THREE.CylinderGeometry(0.035, 0.057, 1, 10);
      const lowerGeo = new THREE.CylinderGeometry(0.006, 0.038, 1, 10);
      geometries.add(upperGeo); geometries.add(lowerGeo);
      const upper = new THREE.Mesh(upperGeo, i % 2 === 0 ? legMaterial : accentMaterial);
      const lower = new THREE.Mesh(lowerGeo, legMaterial);
      upper.name = `leg-${side}-${i}-upper`;
      lower.name = `leg-${side}-${i}-lower`;
      upper.castShadow = lower.castShadow = true;
      root.add(upper, lower);
      const joint = sphere(root, `joint-${side}-${i}`, knee.toArray(), [0.075, 0.075, 0.075], jointMaterial, 12);
      const ankle = sphere(root, `foot-${side}-${i}`, foot.toArray(), [0.026, 0.022, 0.026], accentMaterial, 10);
      legs.push({ hip, knee, foot, upper, lower, joint, ankle, phase: (i % 2 === 0 ? 0 : Math.PI) + (side === -1 ? Math.PI : 0) });
    }
  }

  for (const side of [-1, 1]) {
    sphere(torso, "eye", [1.03, 0.99, side * 0.19], [0.115, 0.12, 0.1], eyeMaterial, 24);
    sphere(torso, "eye-highlight", [1.096, 1.035, side * 0.213], [0.031, 0.032, 0.028], whiteMaterial, 12);
    sphere(torso, "small-eye", [1.112, 0.92, side * 0.075], [0.045, 0.045, 0.046], eyeMaterial, 12);
    const fang = sphere(torso, "palp", [1.1, 0.67, side * 0.13], [0.18, 0.055, 0.045], legMaterial, 20);
    fang.rotation.z = -0.45;
  }

  if (variant.effect === "hologram") {
    const geo = new THREE.SphereGeometry(1, 32, 20);
    geometries.add(geo);
    const wire = new THREE.MeshBasicMaterial({ color: variant.color, wireframe: true, transparent: true, opacity: 0.22 });
    materials.add(wire);
    const cage = new THREE.Mesh(geo, wire);
    cage.position.copy(abdomen.position); cage.scale.copy(abdomen.scale).multiplyScalar(1.013);
    cage.rotation.copy(abdomen.rotation);
    torso.add(cage);
  }
  if (variant.effect === "bubbles") {
    const bubbleMaterial = material({ color: variant.color, metalness: 0.1, roughness: 0.1, transparent: true, opacity: 0.33, iridescence: 1, side: THREE.DoubleSide });
    for (let i = 0; i < 7; i++) {
      const bubble = sphere(root, "floating-pearl", [0, 1, 0], [0.11 + i * 0.025, 0.11 + i * 0.025, 0.11 + i * 0.025], bubbleMaterial, 20);
      orbiters.push(bubble);
    }
  }
  if (variant.effect === "wave") {
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.TorusGeometry(1.75 + i * 0.2, 0.012 + i * 0.005, 6, 100);
      const mat = new THREE.MeshBasicMaterial({ color: i % 2 ? variant.secondary : variant.color, transparent: true, opacity: 0.3, depthWrite: false });
      geometries.add(geometry); materials.add(mat);
      const ripple = new THREE.Mesh(geometry, mat);
      ripple.rotation.x = Math.PI / 2;
      ripple.position.y = 0.07 + i * 0.055;
      root.add(ripple); ripples.push(ripple);
    }
  }

  const pointsGeometry = new THREE.BufferGeometry();
  const points = new Float32Array(100 * 3);
  for (let i = 0; i < 100; i++) {
    const angle = i * 2.39996;
    const radius = 1.3 + (i % 17) / 11;
    points[i * 3] = Math.cos(angle) * radius;
    points[i * 3 + 1] = 0.15 + (i % 13) / 6;
    points[i * 3 + 2] = Math.sin(angle) * radius;
  }
  pointsGeometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
  geometries.add(pointsGeometry);
  const dustMaterial = new THREE.PointsMaterial({ color: variant.color, size: 0.018, transparent: true, opacity: 0.55, depthWrite: false });
  materials.add(dustMaterial);
  const dust = new THREE.Points(pointsGeometry, dustMaterial);
  root.add(dust);

  const animatedHip = new THREE.Vector3();
  const animatedKnee = new THREE.Vector3();
  const animatedFoot = new THREE.Vector3();
  function update(time: number, walking: boolean, effects: boolean) {
    const bob = walking ? Math.sin(time * 5.4) * 0.027 : 0;
    torso.position.y = bob;
    torso.rotation.x = walking ? Math.sin(time * 2.7) * 0.018 : 0;
    for (const leg of legs) {
      const phase = time * 5.4 + leg.phase;
      const step = walking ? Math.sin(phase) : 0;
      const lift = walking ? Math.max(0, Math.cos(phase)) * 0.24 : 0;
      animatedHip.copy(leg.hip); animatedHip.y += bob;
      animatedKnee.copy(leg.knee); animatedKnee.x += step * 0.13; animatedKnee.y += lift * 0.45;
      animatedFoot.copy(leg.foot); animatedFoot.x += step * 0.27; animatedFoot.y += lift;
      placeSegment(leg.upper, animatedHip, animatedKnee);
      placeSegment(leg.lower, animatedKnee, animatedFoot);
      leg.joint.position.copy(animatedKnee); leg.ankle.position.copy(animatedFoot);
    }
    orbiters.forEach((bubble, i) => {
      bubble.visible = effects;
      const phase = (effects ? time * 0.32 : 0) + i * 0.92;
      bubble.position.set(Math.cos(phase) * 1.65 - 0.35, 1.55 + Math.sin(phase * 1.3) * 0.85, Math.sin(phase) * 1.25);
    });
    ripples.forEach((ripple, i) => {
      ripple.visible = effects;
      const wave = Math.sin(time * 1.2 + i * 0.8);
      ripple.scale.set(1 + wave * 0.11, 0.8 + wave * 0.06, 1);
      ripple.position.y = 0.1 + (wave + 1) * 0.18;
      ripple.material.opacity = 0.12 + (wave + 1) * 0.08;
    });
    dust.visible = effects;
    dust.rotation.y = time * 0.04;
    dustMaterial.opacity = effects ? 0.22 + (Math.sin(time * 3) + 1) * 0.15 : 0;
    accentMaterial.emissiveIntensity = effects ? 0.1 + (Math.sin(time * 3) + 1) * 0.15 : 0.05;
  }
  update(0, false, false);

  return {
    root,
    update,
    dispose() {
      disposed = true;
      textures.forEach((value) => value.dispose());
      geometries.forEach((value) => value.dispose());
      materials.forEach((value) => value.dispose());
    },
  };
}
