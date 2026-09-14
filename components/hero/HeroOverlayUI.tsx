"use client";

import { motion } from "framer-motion";
import { HeroStatusChips } from "@/components/hero/HeroStatusChips";

type HeroOverlayUIProps = {
  locked: boolean;
  audioEnabled: boolean;
  onToggleLock: () => void;
};

export function HeroOverlayUI({ locked, audioEnabled, onToggleLock }: HeroOverlayUIProps) {
  return (
    <>
      <HeroStatusChips />

      <div className="pointer-events-none absolute left-6 top-24 z-30 hidden items-start gap-3 md:flex">
        <motion.button
          type="button"
          onClick={onToggleLock}
          whileTap={{ scale: 0.98 }}
          className="pointer-events-auto rounded-full border border-white/20 bg-black/45 px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-zinc-200 backdrop-blur"
        >
          {locked ? "Back To Scroll" : "Tap To Lock"}
        </motion.button>
      </div>

      <div className="pointer-events-none absolute right-6 top-24 z-30 hidden rounded-full border border-white/15 bg-black/35 px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-zinc-300 backdrop-blur md:block">
        Sound: {audioEnabled ? "Enabled" : "Awaiting First Click"}
      </div>
    </>
  );
}
