"use client";

type HeroMaskRevealProps = {
  x: number;
  y: number;
  visible: boolean;
  locked: boolean;
  reduceMotion?: boolean;
  children: React.ReactNode;
};

export function HeroMaskReveal({
  x,
  y,
  visible,
  locked,
  reduceMotion = false,
  children,
}: HeroMaskRevealProps) {
  if (reduceMotion) {
    return <div className="absolute inset-0 opacity-35">{children}</div>;
  }

  const radius = locked ? 240 : 185;
  const revealOpacity = visible || locked ? 1 : 0;
  const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 66%, rgba(0,0,0,0) 83%)`;
  const ring = `radial-gradient(circle ${radius + 42}px at ${x}px ${y}px, rgba(0,51,255,0) 0%, rgba(0,51,255,0) 55%, rgba(0,51,255,0.24) 68%, rgba(56,189,248,0.18) 76%, rgba(56,189,248,0) 88%)`;

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: revealOpacity * 0.9,
          backgroundImage: ring,
          filter: "blur(0.4px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: revealOpacity,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {children}
      </div>
    </>
  );
}
