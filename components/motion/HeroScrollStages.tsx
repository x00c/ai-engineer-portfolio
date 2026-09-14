"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CursorRevealHero } from "./CursorRevealHero";
import { MarqueeBigText } from "./MarqueeBigText";
import { SignatureStroke } from "./SignatureStroke";

export function HeroScrollStages() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.32]);
  const portraitY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);
  const subjectOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const cornersOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  const darkBgOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const marqueeOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.55, 0.7, 0.85],
    [0, 1, 1, 0],
  );
  const quoteOpacity = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);
  const signatureProgress = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  const wordmarkLines = profile.role.split(" ");
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-zinc-100 text-zinc-900">
        <div className="hero-wave pointer-events-none absolute inset-0" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-zinc-950"
          style={{ opacity: reduceMotion ? 0 : darkBgOpacity }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ opacity: reduceMotion ? 0 : marqueeOpacity }}
        >
          <MarqueeBigText
            phrases={["WE DID IT ALL", "BRITISH GP WE REMEMBER"]}
            highlight={["DID", "REMEMBER"]}
          />
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ opacity: reduceMotion ? 0 : marqueeOpacity }}
        >
          <div className="h-48 w-[70%] max-w-3xl md:h-64">
            <SignatureStroke progress={signatureProgress} />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 mx-auto flex h-full w-full max-w-7xl flex-col px-6 py-10 md:px-10"
          style={{ opacity: reduceMotion ? 1 : cornersOpacity }}
        >
          <div className="grid grid-cols-3 items-start gap-4">
            <div>
              <p className="text-xs font-semibold uppercase leading-[1.1] tracking-[0.2em] text-zinc-900 md:text-sm">
                {wordmarkLines[0]}
                {wordmarkLines[1] ? (
                  <>
                    <br />
                    {wordmarkLines.slice(1).join(" ")}
                  </>
                ) : null}
              </p>
            </div>

            <div className="text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 bg-white/70 text-sm font-bold tracking-widest text-zinc-900 backdrop-blur">
                {initials}
              </span>
            </div>

            <div className="flex justify-end">
              <ButtonLink href="/contact">Hire Me</ButtonLink>
            </div>
          </div>

          <div className="flex-1" />

          <div className="grid items-end gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-5 backdrop-blur md:max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Now Building
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">{profile.tagline}</p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">{profile.intro}</p>
            </div>

            <div className="flex justify-end">
              <div className="text-right text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-700">
                <p>Vertical Drive</p>
                <p className="mt-1 text-zinc-500">Scroll ↓</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={
            reduceMotion
              ? undefined
              : { scale: portraitScale, y: portraitY, opacity: subjectOpacity }
          }
        >
          <CursorRevealHero />
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 md:px-10"
          style={{ opacity: reduceMotion ? 0 : quoteOpacity }}
        >
          <p className="max-w-5xl text-center text-3xl font-bold uppercase leading-[1.05] tracking-tight text-zinc-100 md:text-6xl">
            <span className="text-lime-400">Redefining</span> limits, fighting for{" "}
            <span className="text-lime-400">wins</span>, bringing it all in all ways.
            Defining a <span className="text-lime-400">legacy</span> in production AI on and off the track.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
