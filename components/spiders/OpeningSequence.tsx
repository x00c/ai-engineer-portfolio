"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { spiders, type SpiderVariant } from "@/content/spiders";

type Props = { variant: SpiderVariant; cycle: boolean; reducedMotion: boolean; effects: boolean; onComplete: () => void };

export function OpeningSequence({ variant, cycle, reducedMotion, effects, onComplete }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const finishAt = reducedMotion ? 350 : 3100;
    const leave = window.setTimeout(() => setLeaving(true), finishAt);
    const finish = window.setTimeout(onComplete, finishAt + (reducedMotion ? 10 : 800));
    const interval = cycle && !reducedMotion ? window.setInterval(() => setColorIndex((value) => (value + 1) % spiders.length), 355) : undefined;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(leave); clearTimeout(finish); clearInterval(interval);
      document.body.style.overflow = overflow;
    };
  }, [cycle, reducedMotion, onComplete]);
  const current = cycle && !reducedMotion ? spiders[colorIndex] : variant;
  return (
    <div className={`spider-intro ${leaving ? "is-leaving" : ""} ${effects && !reducedMotion ? "has-flicker" : ""}`} style={{ "--intro-color": current.color, "--intro-secondary": current.secondary } as CSSProperties}>
      <div className="intro-gif-layer" aria-hidden="true">
        <Image
          className="intro-gif"
          src={reducedMotion ? "/spiders/amber.png" : "/spiders/walk-reference.gif"}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="intro-curtain intro-curtain-top" aria-hidden="true" />
      <div className="intro-curtain intro-curtain-bottom" aria-hidden="true" />
      <div className="intro-word" aria-label="Hello">
        <span className="intro-bracket">&lt;</span><span className="intro-hello">hello</span><span className="intro-bracket">/&gt;</span><i />
      </div>
      <div className="intro-bottom"><span>ONE WORLD. EIGHT PERSONALITIES.</span><span>WALKING STUDY <b>●</b></span></div>
      <button className="intro-skip" onClick={onComplete}>Skip intro ↗</button>
    </div>
  );
}
