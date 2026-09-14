"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type SignatureStrokeProps = {
  progress: MotionValue<number>;
  className?: string;
};

export function SignatureStroke({ progress, className }: SignatureStrokeProps) {
  const pathLength = useTransform(progress, [0, 1], [0, 1]);

  return (
    <svg
      viewBox="0 0 600 240"
      className={`h-full w-full ${className ?? ""}`}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        d="M40 130 C 130 30, 230 200, 340 110 S 500 50, 580 150"
        stroke="#bef264"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
      <motion.path
        d="M120 190 C 190 130, 270 230, 360 160 S 470 100, 540 180"
        stroke="#bef264"
        strokeOpacity="0.55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
    </svg>
  );
}
