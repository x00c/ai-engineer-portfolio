"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroAmbientBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,51,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(0,51,255,0.03),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-12%] h-[42vh] w-[42vh] rounded-full bg-[#0033FF]/5 blur-[100px]"
        animate={{ x: [0, 38, 0], y: [0, 22, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[25%] h-[46vh] w-[46vh] rounded-full bg-[#0033FF]/3 blur-[120px]"
        animate={{ x: [0, -34, 0], y: [0, -26, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[36%] top-[55%] h-[26vh] w-[26vh] rounded-full bg-[#0033FF]/4 blur-[90px]"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
