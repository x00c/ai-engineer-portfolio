"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  size: number;
  density: number;
  color: string;
};

type HeroParticleTitleProps = {
  text: string;
  className?: string;
  onInteract?: (xNorm: number, yNorm: number) => void;
};

export function HeroParticleTitle({ text, className, onInteract }: HeroParticleTitleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false, radius: 60 });
  const rafRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    const setup = () => {
      const rect = wrap.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      offscreen.width = Math.max(1, Math.floor(rect.width));
      offscreen.height = Math.max(1, Math.floor(rect.height));
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

      const isDark = resolvedTheme === "dark";
      
      let fontSize = Math.min(rect.width / 4.2, 220);
      offCtx.font = `800 ${fontSize}px 'Inter', 'Futura', monospace`;
      let textWidth = offCtx.measureText(text).width;
      if (textWidth > rect.width * 0.9) {
        fontSize = fontSize * ((rect.width * 0.9) / textWidth);
        offCtx.font = `800 ${fontSize}px 'Inter', 'Futura', monospace`;
      }
      
      offCtx.textAlign = "center";
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = "#ffffff";
      
      const metrics = offCtx.measureText(text);
      const verticalCenterOffset = (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
      offCtx.fillText(text, offscreen.width / 2, offscreen.height / 2 + verticalCenterOffset);

      const image = offCtx.getImageData(0, 0, offscreen.width, offscreen.height).data;
      const points: Particle[] = [];
      
      const sampling = Math.max(Math.floor(offscreen.width / 200), 4);
      
      for (let y = 0; y < offscreen.height; y += sampling) {
        for (let x = 0; x < offscreen.width; x += sampling) {
          const alpha = image[(y * offscreen.width + x) * 4 + 3];
          if (alpha > 128) {
            points.push({ 
              x: x + (Math.random() - 0.5) * 5, 
              y: y + (Math.random() - 0.5) * 5, 
              ox: x, 
              oy: y, 
              vx: 0, 
              vy: 0,
              size: Math.random() * 1.5 + 1.0, // slightly larger dots
              density: Math.random() * 30 + 1,
              color: Math.random() > 0.80 // more blue dots
                ? "#0033FF" // Electric blue accent
                : (isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)")
            });
          }
        }
      }
      particlesRef.current = points;
    };

    const draw = () => {
      const rect = wrap.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const pointer = pointerRef.current;

      for (const p of particlesRef.current) {
        if (!reduceMotion && pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = pointer.radius * pointer.radius;
          
          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (pointer.radius - dist) / pointer.radius;
            const forceX = (dx / dist) * force * p.density;
            const forceY = (dy / dist) * force * p.density;
            p.x -= forceX;
            p.y -= forceY;
          } else {
            if (Math.abs(p.x - p.ox) > 0.1) {
              p.x -= (p.x - p.ox) / 10;
            }
            if (Math.abs(p.y - p.oy) > 0.1) {
              p.y -= (p.y - p.oy) / 10;
            }
          }
        } else {
          if (Math.abs(p.x - p.ox) > 0.1) {
            p.x -= (p.x - p.ox) / 10;
          }
          if (Math.abs(p.y - p.oy) > 0.1) {
            p.y -= (p.y - p.oy) / 10;
          }
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    setup();
    draw();
    
    const resizeObserver = new ResizeObserver(() => {
      setup();
    });
    resizeObserver.observe(wrap);

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion, text, resolvedTheme]);

  return (
    <div
      ref={wrapRef}
      className={`relative h-[40vh] min-h-[250px] max-h-[450px] w-full ${className ?? ""}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerRef.current.x = event.clientX - rect.left;
        pointerRef.current.y = event.clientY - rect.top;
        pointerRef.current.active = true;
        onInteract?.(
          Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
          Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
        );
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
        pointerRef.current.x = -1000;
        pointerRef.current.y = -1000;
      }}
      aria-label={text}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <span className="sr-only">{text}</span>
    </div>
  );
}
