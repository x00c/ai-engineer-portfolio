"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import {
  siApacheairflow,
  siDocker,
  siGit,
  siLangchain,
  siNextdotjs,
  siNvidia,
  siOpenaigym,
  siPostgresql,
  siPytorch,
  siPython,
  siReact,
  siSqlite,
  siSupabase,
  siTypescript,
  siYolo,
} from "simple-icons";
import KeyboardScene, { type KeyboardSceneSkill } from "./KeyboardScene";

export type KeyboardSkill = KeyboardSceneSkill & {
  category: string;
  blurb: string;
};

const iconFields = (brand: { path: string; hex: string }) => ({
  iconPath: brand.path,
  iconHex: brand.hex,
});

export const KEYBOARD_SKILLS: KeyboardSkill[] = [
  { code: "Q", label: "PYTHON", category: "LANGUAGE", blurb: "The language I use to turn a messy idea into a dependable system.", accent: "#f0b36e", ...iconFields(siPython) },
  { code: "W", label: "RAG", category: "LLM / NLP", blurb: "Grounded retrieval, hybrid search, and answers that can show their work.", accent: "#ee7891", ...iconFields(siLangchain) },
  { code: "E", label: "OPENAI", category: "LLM / NLP", blurb: "Conversational products with clear fallbacks and human handoff paths.", accent: "#8fdac8", ...iconFields(siOpenaigym) },
  { code: "R", label: "PYTORCH", category: "AI FRAMEWORK", blurb: "Practical modelling from training data through a production endpoint.", accent: "#ff9274", ...iconFields(siPytorch) },
  { code: "T", label: "YOLO", category: "COMPUTER VISION", blurb: "Fast visual detection for robotics and real-world camera feeds.", accent: "#b89cf8", ...iconFields(siYolo) },
  { code: "A", label: "REACT", category: "FRONTEND", blurb: "Interactive interfaces that keep motion useful and the next action obvious.", accent: "#81c8ff", ...iconFields(siReact) },
  { code: "S", label: "NEXT.JS", category: "FULL STACK", blurb: "Server and client boundaries shaped around speed, clarity, and SEO.", accent: "#e8e5de", ...iconFields(siNextdotjs) },
  { code: "D", label: "TYPESCRIPT", category: "LANGUAGE", blurb: "Types that make refactors safer and collaboration easier to review.", accent: "#6da7ff", ...iconFields(siTypescript) },
  { code: "F", label: "SUPABASE", category: "DATABASE / CLOUD", blurb: "A fast path from relational data to a useful product surface.", accent: "#83d9a0", ...iconFields(siSupabase) },
  { code: "G", label: "POSTGRES", category: "DATABASE / CLOUD", blurb: "Validated relational data, vector search, and durable reporting workflows.", accent: "#85b7ed", ...iconFields(siPostgresql) },
  { code: "Z", label: "DOCKER", category: "INFRASTRUCTURE", blurb: "Repeatable environments that keep the handoff calm.", accent: "#73d4ef", ...iconFields(siDocker) },
  { code: "X", label: "SQL", category: "DATA", blurb: "The shortest route from a question to evidence you can inspect.", accent: "#f2ca7e", ...iconFields(siSqlite) },
  { code: "C", label: "ETL", category: "DATA", blurb: "Automated movement, calibration, and validation for high-stakes reporting.", accent: "#d995e7", ...iconFields(siApacheairflow) },
  { code: "V", label: "DEEPSTREAM", category: "COMPUTER VISION", blurb: "Efficient video inference for detection at the edge.", accent: "#f2968d", ...iconFields(siNvidia) },
  { code: "B", label: "GIT", category: "WORKFLOW", blurb: "Small, reviewable changes that keep an experiment shippable.", accent: "#d9b18d", ...iconFields(siGit) },
];

function isEditableTarget(target: EventTarget | null) {
  const element = target as HTMLElement | null;
  if (!element) return false;
  return element.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName);
}

export function KeyboardSkills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  const activate = useCallback((index: number) => {
    setActiveIndex(index);
    setFocusedIndex(index);
    setPressedIndex(index);
    window.setTimeout(() => setPressedIndex((current) => current === index ? null : current), 170);
  }, []);

  const handleHover = useCallback((index: number | null) => {
    if (index === null) return;
    setFocusedIndex(index);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) return;
      const key = event.key.toUpperCase();
      const directIndex = KEYBOARD_SKILLS.findIndex((skill) => skill.code === key);
      if (directIndex >= 0) {
        event.preventDefault();
        activate(directIndex);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const direction = event.key === "ArrowLeft" ? -1 : 1;
        activate((focusedIndex + direction + KEYBOARD_SKILLS.length) % KEYBOARD_SKILLS.length);
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate(focusedIndex);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activate, focusedIndex]);

  const active = KEYBOARD_SKILLS[activeIndex];
  const style = { "--active-key-color": active.accent } as CSSProperties;

  return (
    <div className="keyboard-skills" style={style}>
      <div className="keyboard-skill-heading">
        <div>
          <span className="section-index">06 / TOOLS OF THE TRADE</span>
          <h2>Press a key.<br /><em>Find a signal.</em></h2>
        </div>
        <p>My stack is a small instrument.<br />Use Q–B, the arrows, or click a key.</p>
      </div>

      <div className="keyboard-skill-layout">
        <div className="keyboard-deck-wrap">
          <div className="keyboard-deck" role="group" aria-label="Interactive skill keyboard">
            <KeyboardScene
              skills={KEYBOARD_SKILLS}
              activeIndex={activeIndex}
              pressedIndex={pressedIndex}
              onActivate={activate}
              onHover={handleHover}
            />
            <div className="keyboard-a11y-list" aria-label="Skill shortcuts">
              {KEYBOARD_SKILLS.map((skill, index) => (
                <button
                  type="button"
                  key={skill.code}
                  className="keyboard-a11y-button"
                  style={{ "--key-color": skill.accent } as CSSProperties}
                  aria-pressed={activeIndex === index}
                  aria-label={`${skill.label}, ${skill.category}. Press ${skill.code}`}
                  onClick={() => activate(index)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  <span>{skill.code}</span>
                  <span>{skill.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="keyboard-footnote"><span>KEYBOARD MODE / ACTIVE</span><span>Q W E R T&nbsp;&nbsp; A S D F G&nbsp;&nbsp; Z X C V B</span></div>
        </div>

        <div className="keyboard-skill-callout" aria-live="polite">
          <span className="keyboard-callout-line" aria-hidden="true" />
          <span className="tiny-label">ACTIVE SKILL / {active.code}</span>
          <h3>{active.label}</h3>
          <span className="keyboard-category">{active.category}</span>
          <p>{active.blurb}</p>
          <div className="keyboard-hint"><span>← →</span> move focus <span>ENTER</span> activate</div>
        </div>
      </div>
    </div>
  );
}
