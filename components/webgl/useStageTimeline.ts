"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useStageTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.32]);
  const portraitY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);
  const subjectOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const cornersOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  const darkBgOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.3, 0.55, 0.7, 0.85], [0, 1, 1, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);
  const signatureProgress = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return {
    ref,
    scrollYProgress,
    portraitScale,
    portraitY,
    subjectOpacity,
    cornersOpacity,
    darkBgOpacity,
    marqueeOpacity,
    quoteOpacity,
    signatureProgress,
  };
}
