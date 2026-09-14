import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/sections/ProjectsCatalog";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case-study portfolio across RAG systems, LLM platforms, and production AI operations.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Production AI case studies
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Each project is documented by challenge, architecture choices, and measurable result.
        </p>
      </header>

      <ProjectsCatalog />
    </section>
  );
}
