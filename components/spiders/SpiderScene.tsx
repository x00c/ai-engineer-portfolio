"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { createSpider } from "./createSpider";
import type { SpiderVariant } from "@/content/spiders";

export type SceneControls = {
  walking: boolean;
  effects: boolean;
  reducedMotion: boolean;
  rotation: number;
  scroll: number;
};

type Props = {
  variant: SpiderVariant;
  controls: MutableRefObject<SceneControls>;
  onReady: () => void;
  onError: () => void;
};

export default function SpiderScene({ variant, controls, onReady, onError }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const characterRef = useRef<ReturnType<typeof createSpider> | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const variantRef = useRef(variant);
  const callbacks = useRef({ onReady, onError });

  useEffect(() => { callbacks.current = { onReady, onError }; }, [onReady, onError]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch { callbacks.current.onError(); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.55;
    room.dispose(); pmrem.dispose();
    const ambient = new THREE.HemisphereLight("#e3e9ff", "#1f1720", 1.5);
    scene.add(ambient);
    const key = new THREE.DirectionalLight("#fff1e9", 2.5);
    key.position.set(-3, 6, 5); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -5; key.shadow.camera.right = 5;
    key.shadow.camera.top = 5; key.shadow.camera.bottom = -5;
    key.shadow.normalBias = 0.025;
    scene.add(key);
    const rim = new THREE.PointLight(variantRef.current.secondary, 18, 12, 2);
    rim.position.set(-1, 2, -3);
    scene.add(rim);
    const fill = new THREE.PointLight(variantRef.current.color, 8, 10, 2);
    fill.position.set(3, 2, 2); scene.add(fill);

    const floorGeometry = new THREE.PlaneGeometry(30, 30);
    const floorMaterial = new THREE.ShadowMaterial({ color: "#000000", opacity: 0.42 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
    scene.add(floor);
    const ringGeometry = new THREE.RingGeometry(2.76, 2.767, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: variantRef.current.color, transparent: true, opacity: 0.13, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.012;
    scene.add(ring);

    const firstCharacter = createSpider(variantRef.current);
    characterRef.current = firstCharacter;
    scene.add(firstCharacter.root);
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      const distance = camera.aspect < 0.85 ? 1.28 : 1;
      camera.position.set(3.1 * distance, 3.25 * distance, 7.5 * distance);
      camera.lookAt(0, 0.78, 0);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas); resize();
    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibility.observe(canvas);
    let frame = 0;
    let previous = performance.now();
    let time = 0;
    let hasRendered = false;
    let contextLost = false;
    const contextLoss = (event: Event) => { event.preventDefault(); contextLost = true; callbacks.current.onError(); };
    canvas.addEventListener("webglcontextlost", contextLoss);
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (!visible || document.hidden || contextLost) return;
      const state = controls.current;
      const moving = state.walking && !state.reducedMotion;
      if (moving) time += delta;
      const character = characterRef.current;
      if (character) {
        character.update(time, moving, state.effects && !state.reducedMotion);
        // A small forward/reverse route keeps all eight feet inside the stage.
        const travel = moving ? Math.sin(time * 0.42) * 0.52 : character.root.position.x;
        character.root.position.x = travel;
        const desiredYaw = state.rotation + (moving ? Math.sin(time * 0.42 + 0.7) * 0.2 : 0) - state.scroll * 0.65;
        character.root.rotation.y = THREE.MathUtils.damp(character.root.rotation.y, desiredYaw, 6, delta);
        rim.color.set(variantRef.current.secondary);
        fill.color.set(variantRef.current.color);
        ringMaterial.color.set(variantRef.current.color);
      }
      renderer.render(scene, camera);
      if (!hasRendered) { hasRendered = true; callbacks.current.onReady(); }
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); visibility.disconnect();
      canvas.removeEventListener("webglcontextlost", contextLoss);
      characterRef.current?.dispose(); characterRef.current = null;
      sceneRef.current = null;
      floorGeometry.dispose(); floorMaterial.dispose(); ringGeometry.dispose(); ringMaterial.dispose();
      environment.dispose(); renderer.dispose();
    };
  }, [controls]);

  useEffect(() => {
    variantRef.current = variant;
    const scene = sceneRef.current;
    if (!scene || characterRef.current?.root.name === `spider-${variant.id}`) return;
    const previous = characterRef.current;
    if (previous) { scene.remove(previous.root); previous.dispose(); }
    const next = createSpider(variant);
    characterRef.current = next;
    scene.add(next.root);
  }, [variant]);

  return <canvas ref={canvasRef} className="spider-canvas" aria-label={`${variant.label}蜘蛛：可拖曳旋轉的 3D 行走模型`} role="img" />;
}
