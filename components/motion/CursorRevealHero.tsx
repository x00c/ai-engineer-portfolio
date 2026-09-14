"use client";

import { motion, useMotionTemplate, useReducedMotion, useSpring } from "framer-motion";
import { useRef, useState } from "react";

type CursorRevealHeroProps = {
  className?: string;
};

const SPRING_LAYERS = [
  { stiffness: 700, damping: 28, radius: 130, hard: 42, soft: 78 },
  { stiffness: 280, damping: 26, radius: 110, hard: 38, soft: 80 },
  { stiffness: 130, damping: 24, radius: 90, hard: 32, soft: 82 },
  { stiffness: 70, damping: 22, radius: 70, hard: 28, soft: 86 },
  { stiffness: 38, damping: 20, radius: 55, hard: 24, soft: 90 },
] as const;

function SubjectBase() {
  return (
    <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="jacketGradBase" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <path
        d="M120 130 C 130 70 270 70 280 130 L 280 210 L 120 210 Z"
        fill="#18181b"
      />
      <ellipse cx="200" cy="220" rx="82" ry="104" fill="#3f3f46" />
      <rect x="172" y="304" width="56" height="42" fill="#27272a" />
      <path
        d="M60 520 C 60 376 138 336 200 336 C 262 336 340 376 340 520 Z"
        fill="url(#jacketGradBase)"
      />
    </svg>
  );
}

function SubjectWithHelmet() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="jacketGradHelmet" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>
        <path
          d="M120 130 C 130 70 270 70 280 130 L 280 210 L 120 210 Z"
          fill="#18181b"
        />
        <ellipse cx="200" cy="220" rx="82" ry="104" fill="#3f3f46" />
        <rect x="172" y="304" width="56" height="42" fill="#27272a" />
        <path
          d="M60 520 C 60 376 138 336 200 336 C 262 336 340 376 340 520 Z"
          fill="url(#jacketGradHelmet)"
        />
        <path
          d="M96 220 C 96 110 304 110 304 220 L 304 280 L 96 280 Z"
          fill="rgba(244,244,245,0.18)"
          stroke="rgba(15,23,42,0.35)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="absolute left-1/2 top-[34%] z-20 h-12 w-[60%] -translate-x-1/2 rounded-[26px] border border-zinc-200/70 bg-white/40 shadow-[0_14px_28px_-12px_rgba(0,0,0,0.4)] backdrop-blur-sm" />

      <div className="absolute left-1/2 top-[44%] z-10 h-14 w-[56%] -translate-x-1/2 overflow-hidden rounded-[28px] shadow-[0_18px_32px_-14px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fde047,#facc15,#a3e635)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-900">
          Drive
        </div>
      </div>
    </div>
  );
}

export function CursorRevealHero({ className }: CursorRevealHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  const x1 = useSpring(0, SPRING_LAYERS[0]);
  const y1 = useSpring(0, SPRING_LAYERS[0]);
  const x2 = useSpring(0, SPRING_LAYERS[1]);
  const y2 = useSpring(0, SPRING_LAYERS[1]);
  const x3 = useSpring(0, SPRING_LAYERS[2]);
  const y3 = useSpring(0, SPRING_LAYERS[2]);
  const x4 = useSpring(0, SPRING_LAYERS[3]);
  const y4 = useSpring(0, SPRING_LAYERS[3]);
  const x5 = useSpring(0, SPRING_LAYERS[4]);
  const y5 = useSpring(0, SPRING_LAYERS[4]);

  const xs = [x1, x2, x3, x4, x5];
  const ys = [y1, y2, y3, y4, y5];

  const maskTemplate = useMotionTemplate`radial-gradient(circle ${SPRING_LAYERS[0].radius}px at ${x1}px ${y1}px, black ${SPRING_LAYERS[0].hard}%, transparent ${SPRING_LAYERS[0].soft}%), radial-gradient(circle ${SPRING_LAYERS[1].radius}px at ${x2}px ${y2}px, black ${SPRING_LAYERS[1].hard}%, transparent ${SPRING_LAYERS[1].soft}%), radial-gradient(circle ${SPRING_LAYERS[2].radius}px at ${x3}px ${y3}px, black ${SPRING_LAYERS[2].hard}%, transparent ${SPRING_LAYERS[2].soft}%), radial-gradient(circle ${SPRING_LAYERS[3].radius}px at ${x4}px ${y4}px, black ${SPRING_LAYERS[3].hard}%, transparent ${SPRING_LAYERS[3].soft}%), radial-gradient(circle ${SPRING_LAYERS[4].radius}px at ${x5}px ${y5}px, black ${SPRING_LAYERS[4].hard}%, transparent ${SPRING_LAYERS[4].soft}%)`;

  const setAll = (x: number, y: number, snap: boolean) => {
    for (let i = 0; i < xs.length; i += 1) {
      if (snap) {
        xs[i].jump(x);
        ys[i].jump(y);
      } else {
        xs[i].set(x);
        ys[i].set(y);
      }
    }
  };

  const handleEnter = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setAll(event.clientX - rect.left, event.clientY - rect.top, true);
    setActive(true);
  };

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setAll(event.clientX - rect.left, event.clientY - rect.top, false);
  };

  const handleLeave = () => {
    setActive(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative h-[60vh] w-full max-w-md select-none ${className ?? ""}`}
    >
      <div className="absolute inset-0">
        <SubjectBase />
      </div>

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={
          reduceMotion
            ? { opacity: 1 }
            : {
                opacity: active ? 1 : 0,
                transition: "opacity 220ms ease-out",
                WebkitMaskImage: maskTemplate,
                maskImage: maskTemplate,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                filter: "url(#cursor-reveal-goo)",
              }
        }
      >
        <SubjectWithHelmet />
      </motion.div>

      <svg
        aria-hidden
        width="0"
        height="0"
        className="absolute"
        style={{ position: "absolute" }}
      >
        <defs>
          <filter id="cursor-reveal-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
