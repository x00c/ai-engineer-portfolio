"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxBandProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export function ParallaxBand({ children, offset = 70, className }: ParallaxBandProps) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
