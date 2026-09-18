"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type PointerEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Copy, Menu, Pause, Play, RotateCcw, Sparkles, X } from "lucide-react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { spiders, type SpiderVariant } from "@/content/spiders";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { KeyboardSkills } from "./KeyboardSkills";
import { OpeningSequence } from "./OpeningSequence";
import type { SceneControls } from "./SpiderScene";
import "./spiders.css";

const SpiderScene = dynamic(() => import("./SpiderScene"), { ssr: false });
const nav = [{ name: "About", id: "about" }, { name: "Work", id: "work" }, { name: "Spiders", id: "spiders" }, { name: "Contact", id: "contact" }];

function subscribeMotionPreference(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const readMotionPreference = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverMotionPreference = () => false;
function useMotionPreference() {
  // The server snapshot also runs during hydration, keeping the intro text
  // identical before the client's accessibility preference is applied.
  return useSyncExternalStore(subscribeMotionPreference, readMotionPreference, serverMotionPreference);
}

function Artwork({ spider, className = "" }: { spider: SpiderVariant; className?: string }) {
  return (
    <svg className={`spider-artwork ${className}`} viewBox="770 945 1340 590" role="img" aria-label={`${spider.label}蜘蛛原畫`}>
      <image href={`/spiders/${spider.id}.png`} width="2732" height="2048" />
    </svg>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useMotionPreference();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.65 }} className={className}>{children}</motion.div>;
}

export function SpiderPortfolio() {
  const [selected, setSelected] = useState(2);
  const [intro, setIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [walking, setWalking] = useState(true);
  const [effects, setEffects] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneError, setSceneError] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [angle, setAngle] = useState(-0.28);
  const reducedMotion = useMotionPreference();
  const spider = spiders[selected];
  const storyRef = useRef<HTMLDivElement>(null);
  const sceneControls = useRef<SceneControls>({ walking: true, effects: true, reducedMotion: false, rotation: -0.28, scroll: 0 });
  const pointerStart = useRef<{ x: number; rotation: number } | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end start"] });
  const sceneX = useTransform(scrollYProgress, [0, 0.5, 1], ["0vw", "-24vw", "-24vw"]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.8]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 1, 0]);
  const sceneVisibility = useTransform(scrollYProgress, (v) => v >= 0.995 ? "hidden" : "visible");
  const finishIntro = useCallback(() => setIntro(false), []);
  const onReady = useCallback(() => setSceneReady(true), []);
  const onError = useCallback(() => setSceneError(true), []);

  useEffect(() => {
    sceneControls.current.walking = walking && !intro;
    sceneControls.current.effects = effects;
    sceneControls.current.reducedMotion = Boolean(reducedMotion);
    sceneControls.current.rotation = angle;
  }, [walking, effects, reducedMotion, angle, intro]);
  useEffect(() => scrollYProgress.on("change", (value) => { sceneControls.current.scroll = value; }), [scrollYProgress]);
  useEffect(() => {
    const pointer = (event: globalThis.PointerEvent) => {
      if (!cursorRef.current || event.pointerType === "touch") return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursorRef.current.style.opacity = "1";
    };
    const hide = () => { if (cursorRef.current) cursorRef.current.style.opacity = "0"; };
    window.addEventListener("pointermove", pointer);
    document.addEventListener("pointerleave", hide);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-20% 0px -55% 0px" });
    document.querySelectorAll(".spider-portfolio section[id]").forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("pointermove", pointer); document.removeEventListener("pointerleave", hide); observer.disconnect(); if (copyTimeout.current) clearTimeout(copyTimeout.current); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menuOpen]);

  function chooseSpider(index: number, returnToStage = false) {
    setSelected(index);
    if (returnToStage) document.getElementById("home")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  }
  function dragStart(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = { x: event.clientX, rotation: sceneControls.current.rotation };
  }
  function dragMove(event: PointerEvent<HTMLDivElement>) {
    if (!pointerStart.current) return;
    const next = pointerStart.current.rotation + (event.clientX - pointerStart.current.x) * 0.008;
    sceneControls.current.rotation = next;
    setAngle(next);
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2200);
    } catch { window.location.href = `mailto:${profile.email}`; }
  }
  const project = projects[projectIndex];
  const style = { "--spider-accent": spider.color, "--spider-secondary": spider.secondary } as CSSProperties;

  return (
    <div className={`spider-portfolio ${effects && !reducedMotion ? "effects-on" : ""} ${intro ? "intro-active" : ""}`} style={style}>
      <a href="#about" className="spider-skip-link">Skip to content</a>
      <div ref={cursorRef} className="spider-cursor" aria-hidden="true" />
      {intro && <OpeningSequence key={introKey} variant={spider} cycle={introKey === 0} effects={effects} reducedMotion={Boolean(reducedMotion)} onComplete={finishIntro} />}
      <div inert={intro}>
        <header className="spider-header">
          <a className="spider-wordmark" href="#home" aria-label="Chan Jeun Yu — home">cjy<span>✳</span></a>
          <a className="header-location" href={`mailto:${profile.email}`}><span className="status-dot" /> BASED IN HONG KONG</a>
          <nav className={menuOpen ? "is-open" : ""} aria-label="Main navigation" id="spider-navigation">
            {nav.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} aria-current={activeSection === item.id ? "location" : undefined}>{item.name}<span>↗</span></a>)}
          </nav>
          <button ref={menuButton} className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="spider-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </header>

        <div ref={storyRef} className="spider-story">
          <motion.div className="spider-stage" style={{ x: reducedMotion ? 0 : sceneX, scale: reducedMotion ? 1 : sceneScale, opacity: sceneOpacity, visibility: sceneVisibility }}>
            <div className="stage-halo" aria-hidden="true" />
            <div className="stage-viewport" onPointerDown={dragStart} onPointerMove={dragMove} onPointerUp={() => { pointerStart.current = null; }} onPointerCancel={() => { pointerStart.current = null; }}>
              {!sceneError && <SpiderScene variant={spider} controls={sceneControls} onReady={onReady} onError={onError} />}
              {(!sceneReady || sceneError) && <div className="stage-fallback"><Artwork spider={spider} /><span>{sceneError ? "Original artwork · 3D unavailable on this device" : "Bringing a little world to life…"}</span></div>}
            </div>
          </motion.div>

          <section className="spider-hero" id="home" aria-label="Introduction">
            <div className="hero-eyebrow"><span>PERSONAL PORTFOLIO / 2026</span><span>ART MEETS ALGORITHM</span></div>
            <div className="hero-watermark" aria-hidden="true">STAY CURIOUS.</div>
            <div className="hero-introduction">
              <p className="spider-overline">Hello, I’m</p>
              <h1>CHAN<br />JEUN YU<span>.</span></h1>
              <p className="hero-role">Data, code &<br />a little imagination.</p>
              <a className="text-link" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-side-note">
              <span className="tiny-label">CONNECTING THE DOTS</span>
              <h2>Applied AI.<br />Human curiosity.</h2>
              <p>I turn complex ideas into thoughtful, useful digital experiences.</p>
              <div className="hero-socials">{profile.socials.map((social) => <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}><SocialIcon social={social} className="h-[18px] w-[18px]" /></a>)}</div>
            </div>

            <div className="companion-panel">
              <div className="companion-caption"><span>MEET YOUR COMPANION</span><span aria-live="polite"><i style={{ background: spider.color }} /> {spider.name} <small> / 0{selected + 1}</small></span></div>
              <div className="companion-picker" role="group" aria-label="Choose one of eight spiders">
                {spiders.map((item, index) => <button key={item.id} className={index === selected ? "is-selected" : ""} style={{ "--swatch": item.color } as CSSProperties} onClick={() => chooseSpider(index)} aria-label={`選擇${item.label}蜘蛛 ${item.name}`} aria-pressed={index === selected}><Artwork spider={item} /><span><b>0{index + 1}</b>{item.name}</span></button>)}
              </div>
              <div className="stage-toolbar">
                <span className="drag-hint">↔ DRAG TO ROTATE</span>
                <button onClick={() => setAngle(angle - Math.PI / 4)} aria-label="Rotate spider left"><ChevronLeft size={14} /></button>
                <button onClick={() => setAngle(angle + Math.PI / 4)} aria-label="Rotate spider right"><ChevronRight size={14} /></button>
                <div className="toolbar-divider" />
                <button onClick={() => setWalking(!walking)} aria-pressed={walking && !reducedMotion} disabled={Boolean(reducedMotion)}>{walking && !reducedMotion ? <Pause size={13} /> : <Play size={13} />}<span>{reducedMotion ? "STILL" : walking ? "WALKING" : "PAUSED"}</span></button>
                <button onClick={() => setEffects(!effects)} aria-pressed={effects && !reducedMotion} disabled={Boolean(reducedMotion)}><Sparkles size={13} /><span>FX {effects && !reducedMotion ? "ON" : "OFF"}</span></button>
              </div>
            </div>
            <div className="hero-bottom"><span>EIGHT LEGS. ENDLESS POSSIBILITIES.</span><a href="#about" aria-label="Scroll to about"><ArrowDown size={18} /></a><button onClick={() => { setIntroKey(introKey + 1); setIntro(true); }}><RotateCcw size={13} /> REPLAY INTRO</button></div>
          </section>

          <section className="spider-about section-shell" id="about">
            <div className="about-side"><span className="section-index">01 / A LITTLE ABOUT ME</span><span className="about-companion">{spider.name}<br /><small>{spider.detail}</small></span></div>
            <Reveal className="about-copy"><h2>Curiosity,<br />with a <em>purpose.</em></h2><p className="large-copy">I connect data, intelligence, and people.</p><p>{profile.intro}</p><p>{profile.about.paragraphs[0]}</p><Link className="text-link" href="/about">More about me <ArrowUpRight size={18} /></Link></Reveal>
          </section>
        </div>

        <section className="spider-capabilities section-shell" id="capabilities">
          <Reveal className="section-heading"><span className="section-index">02 / WHAT I DO</span><h2>Ideas into<br /><em>real things.</em></h2></Reveal>
          <div className="capability-list">{[{ title: "Intelligent systems", text: "Context-aware agents and grounded conversations, built around real needs.", tags: ["RAG", "AI agents", "LLMs", "Python"] }, { title: "Digital experiences", text: "From the first interaction to the data behind it. Products that work together.", tags: ["Next.js", "React", "TypeScript", "Supabase"] }, { title: "Data that makes sense", text: "Reliable pipelines, clear insights, and automation for the details that matter.", tags: ["SQL", "ETL", "Analytics", "Computer vision"] }].map((item, i) => <Reveal key={item.title}><details className="capability" open={i === 0}><summary><span>0{i + 1}</span><h3>{item.title}</h3><span className="capability-toggle">+</span></summary><div><p>{item.text}</p><div className="spider-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></details></Reveal>)}</div>
        </section>

        <section className="spider-experience section-shell" id="experience">
          <Reveal className="section-heading"><span className="section-index">03 / ALONG THE WAY</span><h2>Always<br /><em>evolving.</em></h2></Reveal>
          <div className="experience-list">{profile.timeline.map((item, i) => <Reveal key={item.company}><article><div className="experience-period"><span className={i === 0 ? "status-dot" : "timeline-dot"} />{item.period}</div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p></article></Reveal>)}</div>
        </section>

        <section className="spider-work section-shell" id="work">
          <Reveal className="work-header"><div><span className="section-index">04 / SELECTED WORK</span><h2>Built with<br /><em>intention.</em></h2></div><Link className="text-link" href="/projects">All projects <ArrowUpRight size={18} /></Link></Reveal>
          <div className="project-showcase">
            <div className={`project-art project-art-${projectIndex}`} aria-hidden="true"><div className="project-orbit orbit-one" /><div className="project-orbit orbit-two" /><div className="project-orbit orbit-three" /><div className="project-node node-one" /><div className="project-node node-two" /><div className="project-core">{["AI", "RAG", "WMS"][projectIndex]}<span>{["CONVERSATION, CONNECTED", "KNOWLEDGE, CONNECTED", "OPERATIONS, CONNECTED"][projectIndex]}</span></div><span className="project-art-corner">SYSTEM / 00{projectIndex + 1}</span></div>
            <div className="project-information" aria-live="polite"><span className="tiny-label">0{projectIndex + 1} / {project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="spider-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><details className="project-detail"><summary>Inside the project <ArrowUpRight size={16} /></summary><p>{project.detail.architecture}</p><p>{project.detail.result}</p></details><div className="project-navigation"><span>0{projectIndex + 1} <i>/ 0{projects.length}</i></span><div><button aria-label="Previous project" onClick={() => setProjectIndex((projectIndex + projects.length - 1) % projects.length)}><ArrowLeft size={19} /></button><button aria-label="Next project" onClick={() => setProjectIndex((projectIndex + 1) % projects.length)}><ArrowRight size={19} /></button></div></div></div>
          </div>
        </section>

        <section className="spider-collection section-shell" id="spiders">
          <Reveal className="collection-heading"><div><span className="section-index">05 / THE LITTLE UNIVERSE</span><h2>Eight different<br />ways to <em>be.</em></h2></div><p>From a hand-drawn idea to a living companion.<br />Pick a personality. Watch it come alive.</p></Reveal>
          <div className="spider-gallery">{spiders.map((item, index) => <Reveal key={item.id}><button className={`collection-card ${selected === index ? "is-selected" : ""}`} style={{ "--card-accent": item.color } as CSSProperties} onClick={() => chooseSpider(index, true)} aria-label={`在 3D 舞台查看${item.label}蜘蛛`}><div className="collection-card-top"><span>0{index + 1} / {item.label}</span><ArrowUpRight size={18} /></div><Artwork spider={item} /><div className="collection-card-bottom"><h3>{item.name}</h3><span>{item.detail}</span></div></button></Reveal>)}</div>
        </section>

        <section className="spider-stack section-shell" id="stack"><KeyboardSkills /></section>

        <section className="spider-contact section-shell" id="contact">
          <Reveal><span className="section-index">07 / THE NEXT CONNECTION</span><h2>Something in mind?<br />Let’s <em>make it real.</em><a href={`mailto:${profile.email}`} aria-label="Send an email"><ArrowUpRight /></a></h2><div className="contact-bottom"><div><span className="tiny-label">SAY HELLO</span><div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>{copied ? <Check size={18} /> : <Copy size={18} />}</button><span role="status">{copied ? "Copied!" : ""}</span></div></div><div className="contact-socials">{profile.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={16} /></a>)}</div></div></Reveal>
          <footer><span>© 2026 {profile.name}</span><span>MADE OF CURIOSITY & A FEW SPIDERS</span><a href="#home">BACK TO TOP ↑</a></footer>
        </section>
      </div>
    </div>
  );
}
