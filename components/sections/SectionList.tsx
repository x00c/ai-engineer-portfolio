"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteContent } from "@/content/site";

export function SectionList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 gap-0 border-t border-neutral-200 dark:border-neutral-800">
        {siteContent.homeSections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredId(section.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12 cursor-pointer overflow-hidden"
          >
            <Link href={section.href} className="relative z-10 block">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between relative z-10 gap-6 md:gap-0">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
                  <span className="font-mono text-xs md:text-sm text-neutral-400 group-hover:text-accent transition-colors duration-300">
                    {section.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white group-hover:text-accent transition-colors duration-300 mb-2 tracking-tighter">
                      <TextReveal
                        text={section.title}
                        trigger={hoveredId === section.id}
                        duration={400}
                        characters="!<>-_\\/[]{}—=+*^?#________"
                      />
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-base max-w-md group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300 font-light">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <motion.div
              className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900/50 z-0 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredId === section.id ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
