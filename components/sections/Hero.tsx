"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { HeroAmbientBackground } from "@/components/hero/HeroAmbientBackground";
import { HeroBaseLayer, HeroRevealLayer } from "@/components/hero/HeroVisualLayers";
import { HeroMaskReveal } from "@/components/hero/HeroMaskReveal";
import { useHeroRevealState } from "@/components/hero/useHeroRevealState";
import { profile } from "@/content/profile";
import { siteContent } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { pointer, active, locked, updatePointer, leavePointer } = useHeroRevealState();

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 92, damping: 22, mass: 0.42 });
  // Faster collapse: complete most shrink early, then hold.
  const stageScale = useTransform(smoothProgress, [0, 0.2, 0.42, 1], [1, 0.9, 0.62, 0.62]);
  // Keep the central mask anchored around viewport center.
  const stageY = useTransform(smoothProgress, [0, 0.42, 1], [0, -18, 0]);
  const stageRadius = useTransform(smoothProgress, [0, 0.42], [0, 40]);
  const stageOpacity = useTransform(smoothProgress, [0, 0.96, 1], [1, 1, 0.84]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -118]);
  const firstLayerPlaneY = useTransform(smoothProgress, [0, 0.6, 1], [-120, 190, -520]);
  const firstLayerPlaneRotate = useTransform(smoothProgress, [0, 0.6, 1], [16, 2, -30]);
  // Start showing side marquees immediately after scroll begins.
  const marqueeOpacity = useTransform(smoothProgress, [0, 0.02, 0.08], [0, 0.72, 1]);
  const baseLayerClip = useTransform(
    smoothProgress,
    [0, 0.18, 0.42, 1],
    [
      "inset(0% 0% 0% 0% round 0px)",
      "inset(2% 2% 2% 2% round 10px)",
      "inset(10% 12% 10% 12% round 24px)",
      "inset(12% 16% 12% 16% round 28px)",
    ],
  );

  return (
    <section
      ref={stageRef}
      className="portfolio-grid-surface relative h-[220vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Marquees live OUTSIDE the scaling stage, on the section's black backdrop.
            They stay full-screen while the stage shrinks, so the stage card visually
            crops them in the centre and lets fragments scroll on the side margins. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 flex flex-col items-stretch justify-center gap-2"
          style={{ opacity: reduceMotion ? 0 : marqueeOpacity }}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max whitespace-nowrap text-5xl font-bold uppercase tracking-tight text-lime-300/90 md:text-7xl"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }}
            >
              <span className="pr-12">{siteContent.hero.topTrackText}</span>
              <span className="pr-12">{siteContent.hero.topTrackText}</span>
              <span className="pr-12">{siteContent.hero.topTrackText}</span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max whitespace-nowrap text-5xl font-bold uppercase tracking-tight text-white md:text-7xl"
              animate={reduceMotion ? undefined : { x: ["-50%", "0%"] }}
              transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <span className="pr-12">{siteContent.hero.bottomTrackText}</span>
              <span className="pr-12">{siteContent.hero.bottomTrackText}</span>
              <span className="pr-12">{siteContent.hero.bottomTrackText}</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 h-screen w-full overflow-hidden"
          style={{
            scale: reduceMotion ? 1 : stageScale,
            y: reduceMotion ? 0 : stageY,
            borderRadius: reduceMotion ? 0 : stageRadius,
            opacity: stageOpacity,
            background: "transparent",
          }}
          onPointerMove={(event) => {
            if (locked) return;
            const rect = event.currentTarget.getBoundingClientRect();
            updatePointer({
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            });
          }}
          onPointerLeave={leavePointer}
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              clipPath: reduceMotion ? "inset(0% 0% 0% 0% round 0px)" : baseLayerClip,
            }}
          >
            <HeroBaseLayer
              planeY={reduceMotion ? 0 : firstLayerPlaneY}
              planeRotate={reduceMotion ? 0 : firstLayerPlaneRotate}
            />
          </motion.div>
          <HeroAmbientBackground />
          <HeroMaskReveal
            x={pointer.x}
            y={pointer.y}
            visible={active}
            locked={locked}
            reduceMotion={Boolean(reduceMotion)}
          >
            <HeroRevealLayer />
          </HeroMaskReveal>

          <motion.div
            className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 md:px-10"
            style={{ y: reduceMotion ? 0 : contentY }}
          >
            <motion.div className="card-client mx-auto self-center">
              <div className="user-picture" aria-hidden>
                <svg viewBox="0 0 24 24" role="img" aria-label="User icon">
                  <path d="M12 12.2a5.1 5.1 0 1 0-5.1-5.1 5.1 5.1 0 0 0 5.1 5.1Zm0 2.3c-4 0-7.7 2.2-9.4 5.7a1 1 0 0 0 .9 1.4h17a1 1 0 0 0 .9-1.4C19.7 16.7 16 14.5 12 14.5Z" />
                </svg>
              </div>
              <p className="name-client">
                {profile.name}
                <span className="role-title">{profile.role}</span>
              </p>
              <p className="meta-client">{profile.location}</p>
              <div className="social-media">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <SocialIcon social={social} className="h-6 w-6" />
                    <span className="tooltip-social">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.2 }}
            className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 rounded-full border border-cyan-200/30 bg-slate-950/55 px-4 py-1.5 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100 shadow-lg shadow-black/20 backdrop-blur-md">
              <span className="text-cyan-300">&gt;</span>
              <span>{siteContent.hero.scrollPrompt}</span>
            </div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-0.5 bg-gradient-to-b from-accent to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .card-client {
          background: #2cb5a0;
          width: clamp(18rem, 26vw, 22rem);
          padding: 30px 24px;
          border: 4px solid #7cdacc;
          box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
          border-radius: 10px;
          text-align: center;
          color: #fff;
          font-family: var(--font-geist-sans), sans-serif;
          transition: all 0.3s ease;
        }

        .card-client:hover {
          transform: translateY(-10px);
        }

        .user-picture {
          overflow: hidden;
          object-fit: cover;
          width: 6.5rem;
          height: 6.5rem;
          border: 4px solid #ffffff;
          border-radius: 999px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
        }

        .user-picture svg {
          width: 3rem;
          fill: currentColor;
        }

        .name-client {
          margin: 20px 0 0;
          font-weight: 600;
          font-size: 22px;
          text-align: center;
          width: 100%;
        }

        .name-client span {
          display: block;
          font-weight: 200;
          font-size: 18px;
        }

        .meta-client {
          margin: 8px 0 0;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .role-title {
          font-family: var(--font-source-sans-pro), var(--font-geist-sans), sans-serif;
        }

        .social-media:before {
          content: " ";
          display: block;
          width: 100%;
          height: 2px;
          margin: 20px 0;
          background: #7cdacc;
        }

        .social-media a {
          position: relative;
          margin-right: 15px;
          text-decoration: none;
          color: inherit;
          display: inline-block;
        }

        .social-media a:last-child {
          margin-right: 0;
        }

        .social-media a svg {
          width: 1.1rem;
          fill: currentColor;
        }

        .tooltip-social {
          background: #262626;
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          padding: 0.5rem 0.4rem;
          border-radius: 5px;
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, -90%);
          transition: all 0.2s ease;
          z-index: 1;
          white-space: nowrap;
        }

        .tooltip-social:after {
          content: " ";
          position: absolute;
          bottom: 1px;
          left: 50%;
          border: solid;
          border-width: 10px 10px 0 10px;
          border-color: transparent;
          transform: translate(-50%, 100%);
        }

        .social-media a .tooltip-social:after {
          border-top-color: #262626;
        }

        .social-media a:hover .tooltip-social {
          opacity: 1;
          transform: translate(-50%, -130%);
        }
      `}</style>
    </section>
  );
}
