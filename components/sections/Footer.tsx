"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { siteContent } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0033FF_1px,transparent_1px),linear-gradient(to_bottom,#0033FF_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white">
                {siteContent.footer.heading.replace(".", "")}
                <span className="text-accent">.</span>
              </h3>
              <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-md">
                {siteContent.footer.description}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-400 mb-6">
                Social
              </h4>
              <ul className="space-y-4">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                    >
                      <SocialIcon social={social} className="h-4 w-4" />
                      {social.label}
                      <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-400 mb-6">
                {siteContent.footer.contactLabel}
              </h4>
              <a href={`mailto:${profile.email}`} className="text-xl font-medium hover:text-accent transition-colors border-b border-black dark:border-white hover:border-accent pb-1">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 font-mono">
          <p>{siteContent.footer.copyright}</p>
          <p>{siteContent.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
