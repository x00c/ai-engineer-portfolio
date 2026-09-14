"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  ClampToEdgeWrapping,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  UnsignedByteType,
  Vector2,
  WebGLRenderTarget,
  type Texture,
  type WebGLRenderer,
} from "three";
import { trailPassFragmentShader, trailPassVertexShader } from "./shaders/trailPassShader";

type UsePingPongTrailArgs = {
  gl: WebGLRenderer;
  width: number;
  height: number;
  getPointerUv: () => { x: number; y: number };
  isPointerActive: () => boolean;
  decay?: number;
  brushRadius?: number;
  brushStrength?: number;
};

export function usePingPongTrail({
  gl,
  width,
  height,
  getPointerUv,
  isPointerActive,
  decay = 0.88,
  brushRadius = 0.062,
  brushStrength = 0.96,
}: UsePingPongTrailArgs) {
  const readRef = useRef<WebGLRenderTarget | null>(null);
  const writeRef = useRef<WebGLRenderTarget | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<OrthographicCamera | null>(null);
  const planeRef = useRef<Mesh | null>(null);

  const fallbackTexture = useMemo(() => {
    const target = new WebGLRenderTarget(1, 1, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat,
      type: UnsignedByteType,
      depthBuffer: false,
      stencilBuffer: false,
      wrapS: ClampToEdgeWrapping,
      wrapT: ClampToEdgeWrapping,
    });
    return target;
  }, []);

  useEffect(() => {
    const rtWidth = Math.max(64, Math.floor(width * 0.5));
    const rtHeight = Math.max(64, Math.floor(height * 0.5));

    const makeTarget = () =>
      new WebGLRenderTarget(rtWidth, rtHeight, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        type: UnsignedByteType,
        depthBuffer: false,
        stencilBuffer: false,
        wrapS: ClampToEdgeWrapping,
        wrapT: ClampToEdgeWrapping,
      });

    const read = makeTarget();
    const write = makeTarget();

    const trailUniforms = {
      uPrevTrail: { value: read.texture as Texture },
      uPointerUv: { value: new Vector2(0.5, 0.5) },
      uBrushRadius: { value: brushRadius },
      uBrushStrength: { value: brushStrength },
      uDecay: { value: decay },
      uActive: { value: 0 },
      uTime: { value: 0 },
    };

    const material = new ShaderMaterial({
      uniforms: trailUniforms,
      vertexShader: trailPassVertexShader,
      fragmentShader: trailPassFragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new Mesh(new PlaneGeometry(2, 2), material);
    scene.add(quad);

    const prevTarget = gl.getRenderTarget();
    gl.setRenderTarget(read);
    gl.clear(true, true, true);
    gl.setRenderTarget(write);
    gl.clear(true, true, true);
    gl.setRenderTarget(prevTarget);

    readRef.current = read;
    writeRef.current = write;
    materialRef.current = material;
    sceneRef.current = scene;
    cameraRef.current = camera;
    planeRef.current = quad;

    return () => {
      if (planeRef.current) {
        planeRef.current.geometry.dispose();
      }
      material.dispose();
      read.dispose();
      write.dispose();
      readRef.current = null;
      writeRef.current = null;
      materialRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      planeRef.current = null;
    };
  }, [gl, width, height, decay, brushRadius, brushStrength]);

  useEffect(() => {
    return () => {
      fallbackTexture.dispose();
    };
  }, [fallbackTexture]);

  const updateTrail = (elapsedTime: number) => {
    const read = readRef.current;
    const write = writeRef.current;
    const material = materialRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    if (!read || !write || !material || !scene || !camera) return;

    const pointer = getPointerUv();
    material.uniforms.uPointerUv.value.set(pointer.x, pointer.y);
    material.uniforms.uTime.value = elapsedTime;
    material.uniforms.uActive.value = isPointerActive() ? 1 : 0;
    material.uniforms.uPrevTrail.value = read.texture;

    const prevTarget = gl.getRenderTarget();
    gl.setRenderTarget(write);
    gl.render(scene, camera);
    gl.setRenderTarget(prevTarget);

    readRef.current = write;
    writeRef.current = read;
  };

  const getTrailTexture = () => readRef.current?.texture ?? fallbackTexture.texture;

  return { updateTrail, getTrailTexture };
}
