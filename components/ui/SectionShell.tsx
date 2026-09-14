import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({ id, kicker, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <header className="mb-10">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{kicker}</p>
        ) : null}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 max-w-3xl text-zinc-300">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
