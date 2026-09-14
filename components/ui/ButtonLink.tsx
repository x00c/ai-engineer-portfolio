import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
  const style =
    variant === "primary"
      ? "bg-cyan-300 text-zinc-950 hover:bg-cyan-200"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";
  const isExternal = !href.startsWith("/");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${style} ${className}`.trim()}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${style} ${className}`.trim()}>
      {children}
    </Link>
  );
}
