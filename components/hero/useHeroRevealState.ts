"use client";

import { useCallback, useState } from "react";

type Point = { x: number; y: number };

export function useHeroRevealState() {
  const [pointer, setPointer] = useState<Point>({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [locked, setLocked] = useState(false);

  const updatePointer = useCallback((next: Point) => {
    setPointer(next);
    setActive(true);
  }, []);

  const leavePointer = useCallback(() => {
    if (!locked) {
      setActive(false);
    }
  }, [locked]);

  const toggleLock = useCallback(() => {
    setLocked((prev) => {
      const next = !prev;
      if (next) {
        setActive(true);
      }
      return next;
    });
  }, []);

  return {
    pointer,
    active,
    locked,
    updatePointer,
    leavePointer,
    toggleLock,
  };
}
