"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";
import { InfoCard } from "@/components/ui/InfoCard";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export function ProjectsCatalog() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo<Project[]>(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === category
                ? "border-cyan-300 bg-cyan-300 text-zinc-950"
                : "border-white/20 bg-white/5 text-zinc-200 hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <div key={project.slug} id={project.slug} className="scroll-mt-24">
            <InfoCard>
              <p className="text-xs uppercase tracking-wider text-cyan-300">{project.category}</p>
              <h3 className="mt-2 text-xl font-medium text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{project.summary}</p>
              <p className="mt-3 text-sm font-medium text-white">{project.impact}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                <p>
                  <span className="font-medium text-white">Challenge:</span> {project.detail.challenge}
                </p>
                <p>
                  <span className="font-medium text-white">Architecture:</span>{" "}
                  {project.detail.architecture}
                </p>
                <p>
                  <span className="font-medium text-white">Result:</span> {project.detail.result}
                </p>
              </div>
            </InfoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
