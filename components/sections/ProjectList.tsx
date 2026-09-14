"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/content/projects";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function ProjectList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-white transition-colors duration-300 relative overflow-hidden"
          >
            <div className="p-6 flex-grow flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-8">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <Link
                  href={`/projects#${project.slug}`}
                  className="text-neutral-400 group-hover:text-accent transition-colors duration-300"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 flex-grow">
                {project.summary}
              </p>
              <p className="text-sm font-medium text-black dark:text-white mb-4">{project.impact}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
