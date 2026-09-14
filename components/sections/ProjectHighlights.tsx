import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/content/projects";

export function ProjectHighlights() {
  const featured = projects.slice(0, 3);

  return (
    <SectionShell
      id="featured-projects"
      kicker="Selected Work"
      title="Case studies with measurable outcomes"
      description="From retrieval-heavy systems to model quality pipelines, these projects show architecture, constraints, and outcomes."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <article className="group h-full rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-cyan-300/40">
              <p className="text-xs uppercase tracking-wider text-cyan-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-medium text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{project.summary}</p>
              <p className="mt-4 text-sm font-medium text-white">{project.impact}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link href="/projects" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">
          Explore all projects →
        </Link>
      </Reveal>
    </SectionShell>
  );
}
