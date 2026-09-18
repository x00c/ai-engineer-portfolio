"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type KeyboardSceneSkill = {
  code: string;
  label: string;
  accent: string;
  iconPath: string;
  iconHex: string;
};

type Props = {
  skills: readonly KeyboardSceneSkill[];
  activeIndex: number;
  pressedIndex: number | null;
  onActivate: (index: number) => void;
  onHover: (index: number | null) => void;
};

const COLS = 5;
const ROWS = 3;
const KEYCAP_SIZE = 0.42;
const KEYCAP_HEIGHT = 0.28;
const KEYCAP_TOP_SCALE = 0.78;
const COL_SPACING = 0.46;
const ROW_SPACING = 0.43;
const BASE_WIDTH = 2.55;
const BASE_DEPTH = 1.62;
const BASE_HEIGHT = 0.25;
const PRESS_DEPTH = 0.14;

function makeRoundedRectShape(width: number, depth: number, radius: number) {
  const shape = new THREE.Shape();
  const halfWidth = width / 2;
  const halfDepth = depth / 2;
  const r = Math.min(radius, halfWidth, halfDepth);
  shape.moveTo(-halfWidth + r, -halfDepth);
  shape.lineTo(halfWidth - r, -halfDepth);
  shape.quadraticCurveTo(halfWidth, -halfDepth, halfWidth, -halfDepth + r);
  shape.lineTo(halfWidth, halfDepth - r);
  shape.quadraticCurveTo(halfWidth, halfDepth, halfWidth - r, halfDepth);
  shape.lineTo(-halfWidth + r, halfDepth);
  shape.quadraticCurveTo(-halfWidth, halfDepth, -halfWidth, halfDepth - r);
  shape.lineTo(-halfWidth, -halfDepth + r);
  shape.quadraticCurveTo(-halfWidth, -halfDepth, -halfWidth + r, -halfDepth);
  return shape;
}

function createExtrudedBox(
  width: number,
  depth: number,
  height: number,
  radius: number,
  bevelSize: number,
  topScale = 1,
) {
  const geometry = new THREE.ExtrudeGeometry(makeRoundedRectShape(width, depth, radius), {
    depth: Math.max(0.001, height - 2 * bevelSize),
    bevelEnabled: bevelSize > 0,
    bevelThickness: bevelSize,
    bevelSize,
    bevelSegments: 3,
    steps: 1,
    curveSegments: 14,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, -height / 2 + bevelSize, 0);

  if (topScale !== 1) {
    const position = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < position.count; i += 1) {
      const t = (position.getY(i) + height / 2) / height;
      const scale = THREE.MathUtils.lerp(1, topScale, t);
      position.setX(i, position.getX(i) * scale);
      position.setZ(i, position.getZ(i) * scale);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  return geometry;
}

function makeKeyTexture(skill: KeyboardSceneSkill) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  context.clearRect(0, 0, 256, 256);
  context.fillStyle = "rgba(255,255,255,.025)";
  context.fillRect(12, 12, 232, 232);
  context.fillStyle = skill.accent;
  context.font = "600 25px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.fillText(skill.code, 27, 47);
  try {
    const icon = new Path2D(skill.iconPath);
    const iconScale = 3.6;
    context.save();
    context.translate(128, 122);
    context.scale(iconScale, iconScale);
    context.translate(-12, -12);
    context.fillStyle = `#${skill.iconHex}`;
    context.fill(icon);
    context.restore();
  } catch {
    // Keep the key legible if a browser cannot parse a particular SVG path.
    context.fillStyle = skill.accent;
    context.font = "700 68px ui-monospace, SFMono-Regular, Menlo, monospace";
    context.textAlign = "center";
    context.fillText(skill.code, 128, 139);
    context.textAlign = "start";
  }
  context.fillStyle = "rgba(238,240,246,.95)";
  context.font = "600 15px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.fillText(skill.label.slice(0, 12), 27, 215);
  context.fillStyle = "rgba(255,255,255,.18)";
  context.fillRect(27, 63, 202, 1);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

type KeyNode = {
  index: number;
  root: THREE.Group;
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhysicalMaterial>;
  material: THREE.MeshPhysicalMaterial;
  texture: THREE.CanvasTexture;
  restY: number;
  accent: THREE.Color;
};

export default function KeyboardScene({
  skills,
  activeIndex,
  pressedIndex,
  onActivate,
  onHover,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(activeIndex);
  const pressedRef = useRef(pressedIndex);
  const hoveredRef = useRef<number | null>(null);
  const pointerDownRef = useRef(false);
  const callbacksRef = useRef({ onActivate, onHover });

  useEffect(() => {
    activeRef.current = activeIndex;
    pressedRef.current = pressedIndex;
  }, [activeIndex, pressedIndex]);

  useEffect(() => {
    callbacksRef.current = { onActivate, onHover };
  }, [onActivate, onHover]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(27, 1, 0.1, 50);
    camera.position.set(0.18, 3.25, 7.9);
    camera.lookAt(0, 0.06, 0);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.42;
    room.dispose();
    pmrem.dispose();

    const ambient = new THREE.HemisphereLight("#f4f1ff", "#080a12", 1.15);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight("#fff7f0", 3.25);
    keyLight.position.set(-4, 7, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.left = -4;
    keyLight.shadow.camera.right = 4;
    keyLight.shadow.camera.top = 4;
    keyLight.shadow.camera.bottom = -4;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const stage = new THREE.Group();
    stage.rotation.order = "YXZ";
    stage.rotation.set(0.31, -0.36, -0.045);
    stage.position.set(0, -0.02, 0);
    stage.scale.setScalar(1.18);
    scene.add(stage);

    const baseGeometry = createExtrudedBox(BASE_WIDTH, BASE_DEPTH, BASE_HEIGHT, 0.14, 0.022);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: "#171b24",
      roughness: 0.52,
      metalness: 0.16,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.castShadow = true;
    base.receiveShadow = true;
    stage.add(base);

    const plateGeometry = createExtrudedBox(BASE_WIDTH * 0.96, BASE_DEPTH * 0.93, 0.075, 0.11, 0.012);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: "#0d1016",
      roughness: 0.68,
      metalness: 0.08,
    });
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.position.y = BASE_HEIGHT / 2 + 0.027;
    plate.castShadow = true;
    plate.receiveShadow = true;
    stage.add(plate);

    const keycapGeometry = createExtrudedBox(
      KEYCAP_SIZE,
      KEYCAP_SIZE,
      KEYCAP_HEIGHT,
      0.052,
      0.014,
      KEYCAP_TOP_SCALE,
    );
    const keycapY = BASE_HEIGHT / 2 + 0.075 + KEYCAP_HEIGHT / 2 + 0.014;
    const keyNodes: KeyNode[] = [];
    const raycastMeshes: THREE.Object3D[] = [];

    skills.slice(0, ROWS * COLS).forEach((skill, index) => {
      const row = Math.floor(index / COLS);
      const column = index % COLS;
      const root = new THREE.Group();
      const x = (column - (COLS - 1) / 2) * COL_SPACING;
      const z = (row - (ROWS - 1) / 2) * ROW_SPACING;
      root.position.set(x, keycapY, z);

      const material = new THREE.MeshPhysicalMaterial({
        color: "#b8bdc8",
        roughness: 0.3,
        metalness: 0.08,
        clearcoat: 0.55,
        clearcoatRoughness: 0.16,
        emissive: "#05060a",
        emissiveIntensity: 0.12,
      });
      const mesh = new THREE.Mesh(keycapGeometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.index = index;
      root.add(mesh);

      const texture = makeKeyTexture(skill);
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(KEYCAP_SIZE * KEYCAP_TOP_SCALE * 0.82, KEYCAP_SIZE * KEYCAP_TOP_SCALE * 0.82),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          toneMapped: false,
        }),
      );
      label.position.y = KEYCAP_HEIGHT / 2 + 0.002;
      label.rotation.x = -Math.PI / 2;
      label.raycast = () => null;
      root.add(label);

      keyNodes.push({
        index,
        root,
        mesh,
        material,
        texture,
        restY: keycapY,
        accent: new THREE.Color(skill.accent),
      });
      raycastMeshes.push(mesh);
      stage.add(root);
    });

    const spaceGeometry = createExtrudedBox(1.14, 0.26, 0.12, 0.05, 0.012);
    const spaceMaterial = new THREE.MeshStandardMaterial({ color: "#20242e", roughness: 0.48, metalness: 0.12 });
    const spacebar = new THREE.Mesh(spaceGeometry, spaceMaterial);
    spacebar.position.set(0, keycapY - 0.015, 0.72);
    spacebar.castShadow = true;
    stage.add(spacebar);

    const spaceLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(0.74, 0.13),
      new THREE.MeshBasicMaterial({ color: "#696d78", transparent: true, opacity: 0.7, toneMapped: false }),
    );
    spaceLabel.position.set(0, keycapY + 0.05, 0.72);
    spaceLabel.rotation.x = -Math.PI / 2;
    stage.add(spaceLabel);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(2.25, 64),
      new THREE.ShadowMaterial({ color: "#000000", opacity: 0.46 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.2;
    floor.scale.set(1.35, 0.52, 1);
    floor.receiveShadow = true;
    scene.add(floor);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(1.65, 1.68, 96),
      new THREE.MeshBasicMaterial({ color: "#ee7891", transparent: true, opacity: 0.13, side: THREE.DoubleSide, toneMapped: false }),
    );
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = -0.185;
    scene.add(halo);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const getHitIndex = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(raycastMeshes, false)[0];
      return typeof hit?.object.userData.index === "number" ? hit.object.userData.index : null;
    };
    const updateHover = (event: PointerEvent) => {
      const index = getHitIndex(event);
      if (index === hoveredRef.current) return index;
      hoveredRef.current = index;
      callbacksRef.current.onHover(index);
      return index;
    };
    const pointerMove = (event: PointerEvent) => { updateHover(event); };
    const pointerDown = (event: PointerEvent) => {
      const index = updateHover(event);
      if (index === null) return;
      pointerDownRef.current = true;
      pressedRef.current = index;
      callbacksRef.current.onActivate(index);
      canvas.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    };
    const pointerUp = (event: PointerEvent) => {
      pointerDownRef.current = false;
      pressedRef.current = null;
      canvas.releasePointerCapture?.(event.pointerId);
    };
    const pointerLeave = () => {
      if (!pointerDownRef.current) {
        hoveredRef.current = null;
        callbacksRef.current.onHover(null);
      }
    };
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerdown", pointerDown);
    canvas.addEventListener("pointerup", pointerUp);
    canvas.addEventListener("pointercancel", pointerUp);
    canvas.addEventListener("pointerleave", pointerLeave);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.set(width < 520 ? 0.08 : 0.18, width < 520 ? 3.15 : 3.25, width < 520 ? 8.25 : 7.9);
      camera.lookAt(0, 0.06, 0);
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibility.observe(canvas);
    let frame = 0;
    let previous = performance.now();
    let elapsed = 0;
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (!visible || document.hidden) return;
      elapsed += delta;

      const active = activeRef.current;
      const pressed = pressedRef.current;
      for (const node of keyNodes) {
        const isPressed = node.index === pressed || (node.index === hoveredRef.current && pointerDownRef.current);
        const targetY = node.restY + (isPressed ? -PRESS_DEPTH : node.index === active ? 0.014 : 0);
        node.root.position.y = THREE.MathUtils.damp(node.root.position.y, targetY, 15, delta);
        const isActive = node.index === active;
        const glow = isActive ? 0.82 : node.index === hoveredRef.current ? 0.3 : 0.1;
        node.material.emissive.copy(node.accent);
        node.material.emissiveIntensity = THREE.MathUtils.damp(node.material.emissiveIntensity, glow, 9, delta);
        const targetColor = isActive ? node.accent.clone().lerp(new THREE.Color("#ffffff"), 0.55) : new THREE.Color("#aeb4c0");
        node.material.color.lerp(targetColor, 1 - Math.pow(0.001, delta));
      }
      stage.rotation.y = -0.36 + Math.sin(elapsed * 0.38) * 0.035;
      stage.rotation.x = 0.31 + Math.sin(elapsed * 0.27) * 0.018;
      stage.position.y = -0.02 + Math.sin(elapsed * 0.62) * 0.025;
      halo.material.opacity = 0.1 + (Math.sin(elapsed * 1.4) + 1) * 0.025;
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerdown", pointerDown);
      canvas.removeEventListener("pointerup", pointerUp);
      canvas.removeEventListener("pointercancel", pointerUp);
      canvas.removeEventListener("pointerleave", pointerLeave);
      for (const node of keyNodes) {
        node.texture.dispose();
        node.material.dispose();
      }
      keycapGeometry.dispose();
      baseGeometry.dispose();
      plateGeometry.dispose();
      spaceGeometry.dispose();
      spaceMaterial.dispose();
      baseMaterial.dispose();
      plateMaterial.dispose();
      (spaceLabel.material as THREE.Material).dispose();
      (halo.material as THREE.Material).dispose();
      (floor.material as THREE.Material).dispose();
      floor.geometry.dispose();
      halo.geometry.dispose();
      environment.dispose();
      renderer.dispose();
    };
  }, [skills]);

  return <canvas ref={canvasRef} className="keyboard-scene-canvas" aria-label="3D interactive skill keyboard" role="img" />;
}
