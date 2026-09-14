import type { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
  className?: string;
};

export function InfoCard({ children, className = "" }: InfoCardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur-sm ${className}`.trim()}
    >
      {children}
    </article>
  );
}
