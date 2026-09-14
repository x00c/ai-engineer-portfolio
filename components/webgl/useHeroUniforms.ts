"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  CanvasTexture,
  DataTexture,
  LinearFilter,
  RGBAFormat,
  SRGBColorSpace,
  UnsignedByteType,
  type Texture,
} from "three";

type PointerPos = { x: number; y: number };

function makePortraitTexture(withHelmet: boolean) {
  if (typeof document === "undefined") {
    const color = withHelmet ? [180, 188, 120, 255] : [80, 80, 86, 255];
    const data = new Uint8Array(color);
    const texture = new DataTexture(data, 1, 1, RGBAFormat, UnsignedByteType);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Unable to create portrait texture context");

  ctx.fillStyle = "#f4f4f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#27272a";
  ctx.beginPath();
  ctx.moveTo(120, 620);
  ctx.quadraticCurveTo(256, 380, 392, 620);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#3f3f46";
  ctx.beginPath();
  ctx.ellipse(256, 300, 92, 128, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#18181b";
  ctx.beginPath();
  ctx.moveTo(168, 186);
  ctx.quadraticCurveTo(256, 96, 344, 186);
  ctx.lineTo(344, 252);
  ctx.lineTo(168, 252);
  ctx.closePath();
  ctx.fill();

  if (withHelmet) {
    ctx.fillStyle = "rgba(244,244,245,0.24)";
    ctx.strokeStyle = "rgba(15,23,42,0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(130, 250);
    ctx.quadraticCurveTo(256, 120, 382, 250);
    ctx.lineTo(382, 320);
    ctx.lineTo(130, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    const grad = ctx.createLinearGradient(130, 0, 382, 0);
    grad.addColorStop(0, "#fde047");
    grad.addColorStop(0.45, "#facc15");
    grad.addColorStop(1, "#a3e635");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(150, 285, 212, 62, 28);
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.beginPath();
    ctx.ellipse(256, 306, 90, 18, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new CanvasTexture(canvas);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function useHeroUniforms() {
  const target = useRef<PointerPos>({ x: 0.5, y: 0.5 });
  const active = useRef(false);
  const reveal = useRef(0);

  const baseTexture = useMemo(() => makePortraitTexture(false), []);
  const helmetTexture = useMemo(() => makePortraitTexture(true), []);
  const trailFallback = useMemo(() => {
    const data = new Uint8Array([0, 0, 0, 255]);
    const texture = new DataTexture(data, 1, 1, RGBAFormat, UnsignedByteType);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uReveal: { value: 0 },
      uBaseTex: { value: baseTexture },
      uHelmetTex: { value: helmetTexture },
      uTrailTex: { value: trailFallback as Texture },
    }),
    [baseTexture, helmetTexture, trailFallback],
  );

  useEffect(() => {
    return () => {
      baseTexture.dispose();
      helmetTexture.dispose();
      trailFallback.dispose();
    };
  }, [baseTexture, helmetTexture, trailFallback]);

  const onPointerEnter = () => {
    active.current = true;
  };

  const onPointerLeave = () => {
    active.current = false;
  };

  const onPointerMoveUv = (u: number, v: number) => {
    active.current = true;
    target.current.x = Math.min(Math.max(u, 0), 1);
    target.current.y = Math.min(Math.max(v, 0), 1);
  };

  const update = (elapsedTime: number, progress: number) => {
    uniforms.uTime.value = elapsedTime;
    uniforms.uProgress.value = progress;

    reveal.current += ((active.current ? 1 : 0) - reveal.current) * 0.14;
    uniforms.uReveal.value = reveal.current;
  };

  const setTrailTexture = (texture: Texture) => {
    uniforms.uTrailTex.value = texture;
  };

  const getPointerUv = () => target.current;
  const isPointerActive = () => active.current;

  return {
    uniforms,
    onPointerMoveUv,
    onPointerEnter,
    onPointerLeave,
    update,
    setTrailTexture,
    getPointerUv,
    isPointerActive,
  };
}
