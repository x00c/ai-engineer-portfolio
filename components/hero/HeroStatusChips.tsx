"use client";

import { motion, useReducedMotion } from "framer-motion";

const CHIPS = [
  { label: "SYS.READY", pos: "top-[20%] left-[10%]", delay: 0, duration: 6, hasDot: true },
  { label: "[DATA.STREAM]", pos: "top-[30%] right-[15%]", delay: 1, duration: 8 },
  { label: "VIBE_CODING_", pos: "bottom-[30%] left-[15%]", delay: 2, duration: 7 },
];

export function HeroStatusChips() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {CHIPS.map((chip, index) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.pos} hidden md:flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10 pointer-events-none`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, index % 2 === 0 ? -15 : 20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: chip.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: chip.delay,
                }
          }
        >
          {chip.hasDot && (
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          )}
          {chip.label}
        </motion.div>
      ))}
    </>
  );
}
