"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useRenderQuality() {
  const reduceMotion = useReducedMotion();
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const update = () => {
      const ratio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      setDpr(Math.min(ratio, 1.5));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { dpr, reduceMotion };
}
