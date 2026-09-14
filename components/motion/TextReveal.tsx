"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  characters?: string;
  trigger?: boolean;
}

export function TextReveal({
  text,
  duration = 1200,
  delay = 0,
  className = "",
  characters = "01",
  trigger,
}: TextRevealProps) {
  const [displayText, setDisplayText] = useState(trigger === undefined ? "" : text);
  const prevTrigger = useRef(trigger);

  useEffect(() => {
    let timeoutId: number;
    let intervalId: number;

    const startAnimation = () => {
      const startTime = Date.now();
      const length = text.length;

      intervalId = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const revealedCount = Math.floor(progress * length);

        let newText = "";
        for (let i = 0; i < length; i++) {
          if (i < revealedCount) {
            newText += text[i];
          } else if (text[i] === " ") {
            newText += " ";
          } else {
            newText += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayText(newText);

        if (progress === 1) {
          window.clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 30);
    };

    if (trigger === undefined) {
      timeoutId = window.setTimeout(startAnimation, delay);
    } else if (trigger && !prevTrigger.current) {
      startAnimation();
    }

    prevTrigger.current = trigger;

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text, duration, delay, characters, trigger]);

  return <span className={cn(className)}>{displayText || " "}</span>;
}
