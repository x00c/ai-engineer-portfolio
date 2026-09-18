"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion, type MotionValue } from "framer-motion";
import { Plane } from "lucide-react";

type HeroBaseLayerProps = {
  planeY?: MotionValue<number> | number;
  planeRotate?: MotionValue<number> | number;
};

export function HeroBaseLayer({ planeY = 0, planeRotate = 0 }: HeroBaseLayerProps) {
  const cards = [-2, -1, 0, 1, 2];

  return (
    <>
      <div className="hero-base-layer absolute inset-0 overflow-hidden">
        <div className="hero-base-layer__sky-glow" />
        <div className="hero-base-layer__wrapper" aria-hidden>
          <div className="hero-base-layer__inner">
            {cards.map((idx) => (
              <div
                key={idx}
                className="hero-base-layer__card"
                style={
                  {
                    "--index": idx + 2,
                  } as CSSProperties
                }
                data-pos={idx}
              >
                <div className="hero-base-layer__img" />
                {idx === 0 ? <div className="hero-base-layer__card-core" /> : null}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="hero-base-layer__plane-wrap"
          style={{ y: planeY, rotate: planeRotate }}
        >
          <div className="hero-base-layer__plane-glow" />
          <Plane className="hero-base-layer__plane-icon" />
        </motion.div>
        <div className="hero-base-layer__trail" />
      </div>

      <style jsx>{`
        .hero-base-layer {
          background: linear-gradient(
              165deg,
              rgba(13, 35, 44, 0.88) 0%,
              rgba(18, 58, 63, 0.86) 48%,
              rgba(23, 40, 61, 0.88) 100%
            ),
            radial-gradient(circle at 22% 18%, rgba(102, 224, 207, 0.2), transparent 44%);
        }

        .hero-base-layer__sky-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 24% 30%, rgba(82, 196, 181, 0.18), transparent 45%),
            radial-gradient(circle at 72% 70%, rgba(67, 85, 143, 0.2), transparent 54%);
        }

        .hero-base-layer__wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-base-layer__inner {
          --w: clamp(48px, 5.3vw, 84px);
          --h: clamp(116px, 16.4vw, 198px);
          position: absolute;
          top: 23%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 2.2vw, 34px);
          z-index: 2;
          transform-style: preserve-3d;
          transform: translateX(-50%) perspective(1100px) rotateX(6deg);
          animation: hero-phone-carousel 9.8s ease-in-out infinite;
          opacity: 0.92;
          filter: saturate(0.82);
        }

        .hero-base-layer__card {
          position: absolute;
          width: var(--w);
          height: var(--h);
          border: 1px solid rgba(183, 244, 233, 0.28);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.32), inset 0 0 0 1px rgba(158, 239, 226, 0.1);
          animation: hero-phone-float 5.2s ease-in-out infinite;
          animation-delay: calc(var(--index) * 0.28s);
        }

        .hero-base-layer__card[data-pos="-2"] {
          transform: translate3d(calc(var(--w) * -2.7), 10px, -92px) rotateY(20deg) scale(0.8);
          opacity: 0.68;
        }

        .hero-base-layer__card[data-pos="-1"] {
          transform: translate3d(calc(var(--w) * -1.35), 4px, -34px) rotateY(12deg) scale(0.92);
          opacity: 0.84;
        }

        .hero-base-layer__card[data-pos="0"] {
          transform: translate3d(0, 0, 24px) rotateY(0deg) scale(1.05);
          border-color: rgba(189, 249, 237, 0.42);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(168, 245, 231, 0.16);
        }

        .hero-base-layer__card[data-pos="1"] {
          transform: translate3d(calc(var(--w) * 1.35), 4px, -34px) rotateY(-12deg) scale(0.92);
          opacity: 0.84;
        }

        .hero-base-layer__card[data-pos="2"] {
          transform: translate3d(calc(var(--w) * 2.7), 10px, -92px) rotateY(-20deg) scale(0.8);
          opacity: 0.68;
        }

        .hero-base-layer__img {
          width: 100%;
          height: 100%;
          background: linear-gradient(
              170deg,
              rgba(34, 74, 79, 0.42) 0%,
              rgba(68, 145, 145, 0.48) 62%,
              rgba(40, 52, 87, 0.44) 100%
            ),
            radial-gradient(circle at 50% 46%, rgba(189, 250, 239, 0.2) 0%, rgba(255, 255, 255, 0) 56%);
        }

        .hero-base-layer__card-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(26px, 3vw, 44px);
          height: clamp(26px, 3vw, 44px);
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(224, 255, 248, 0.78) 0%, rgba(117, 224, 207, 0.22) 66%, rgba(117, 224, 207, 0) 100%);
          filter: blur(0.35px);
          pointer-events: none;
        }

        .hero-base-layer__plane-wrap {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translateX(-50%);
          transform-origin: center;
          z-index: 3;
          color: rgba(255, 255, 255, 0.96);
          filter: drop-shadow(0 12px 26px rgba(95, 41, 199, 0.46))
            drop-shadow(0 0 22px rgba(108, 231, 221, 0.62));
        }

        .hero-base-layer__plane-icon {
          position: relative;
          z-index: 2;
          width: clamp(140px, 17vw, 250px);
          height: clamp(140px, 17vw, 250px);
          stroke-width: 2.9;
        }

        .hero-base-layer__plane-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 1;
          width: clamp(120px, 14vw, 220px);
          height: clamp(120px, 14vw, 220px);
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.56) 0%, rgba(108, 231, 221, 0.22) 48%, rgba(95, 41, 199, 0.14) 72%, rgba(95, 41, 199, 0) 100%);
          filter: blur(8px);
        }

        .hero-base-layer__trail {
          position: absolute;
          left: 50%;
          top: 12%;
          width: min(2px, 0.2vw);
          height: 58%;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.72),
            rgba(255, 255, 255, 0.08) 72%,
            rgba(255, 255, 255, 0)
          );
          filter: blur(0.25px);
          opacity: 0.65;
        }

        @keyframes hero-phone-carousel {
          0%,
          100% {
            transform: translateX(-50%) perspective(1100px) rotateX(6deg) rotateY(0deg);
          }
          30% {
            transform: translateX(-50%) perspective(1100px) rotateX(6deg) rotateY(-7deg);
          }
          68% {
            transform: translateX(-50%) perspective(1100px) rotateX(6deg) rotateY(7deg);
          }
        }

        @keyframes hero-phone-float {
          0%,
          100% {
            margin-top: 0;
          }
          50% {
            margin-top: -8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-base-layer__inner {
            animation: none;
          }
          .hero-base-layer__card {
            animation: none;
          }
          .hero-base-layer__trail {
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}

export function HeroRevealLayer() {
  const reduceMotion = useReducedMotion();

  const revealBaseStyle = {
    background:
      "linear-gradient(160deg, rgba(13,38,47,0.86) 0%, rgba(20,70,70,0.82) 52%, rgba(31,49,78,0.84) 100%), radial-gradient(circle at 14% 18%, rgba(95,224,205,0.18), transparent 46%)",
    border: "1px solid rgba(183,244,233,0.28)",
    boxShadow: "inset 0 1px 0 rgba(183,244,233,0.16)",
  } as const;

  if (reduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden" style={revealBaseStyle}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(106,232,211,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(74,174,173,0.18),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_80%,rgba(86,109,181,0.18),transparent_48%)]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={revealBaseStyle}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(106,232,211,0.16),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(74,174,173,0.18),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_80%,rgba(86,109,181,0.18),transparent_48%)]" />

      <motion.div
        className="absolute -left-[10%] top-[8%] h-[34vh] w-[62vw] rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-[2px]"
        style={{
          borderColor: "rgba(183,244,233,0.28)",
          background: "linear-gradient(160deg, rgba(46,111,109,0.24), rgba(26,69,76,0.18))",
        }}
        animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-[20%] h-[40vh] w-[26vw] rounded-[28px] border border-cyan-200/25 bg-cyan-200/10"
        style={{
          borderColor: "rgba(183,244,233,0.28)",
          background: "linear-gradient(165deg, rgba(54,130,126,0.24), rgba(36,56,91,0.2))",
        }}
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] bottom-[10%] h-[22vh] w-[40vw] rounded-[22px] border border-violet-200/20 bg-violet-200/10"
        style={{
          borderColor: "rgba(183,244,233,0.28)",
          background: "linear-gradient(150deg, rgba(52,71,114,0.24), rgba(43,100,99,0.18))",
        }}
        animate={{ x: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
