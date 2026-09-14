import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { InfoCard } from "@/components/ui/InfoCard";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, education, and technical skills — Chan Jeun Yu.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-zinc-300">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-4 max-w-3xl text-zinc-300">{profile.tagline}</p>
          <p className="mt-3 max-w-3xl text-sm text-zinc-400">{profile.intro}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard className="md:col-span-2">
            <h2 className="text-xl font-medium text-white">{profile.about.title}</h2>
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "mt-4 text-zinc-300" : "mt-3 text-zinc-300"}>
                {paragraph}
              </p>
            ))}
          </InfoCard>

          <InfoCard>
            <h2 className="text-xl font-medium text-white">Operating principles</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {profile.about.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.metrics.map((metric) => (
            <InfoCard key={metric.label}>
              <p className="text-xs uppercase tracking-wider text-cyan-300">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
            </InfoCard>
          ))}
        </div>
      </section>

      <ExperienceTimeline />

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Academic background
          </h2>
        </header>
        <div className="space-y-4">
          {profile.education.map((item) => (
            <InfoCard key={`${item.period}-${item.school}`}>
              <p className="text-xs uppercase tracking-wider text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-lg font-medium text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-zinc-300">
                {item.school} · {item.location}
              </p>
            </InfoCard>
          ))}
        </div>
      </section>

      <SkillsMatrix />

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Awards</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Recognition
          </h2>
        </header>
        <div className="space-y-4">
          {profile.awards.map((award) => (
            <InfoCard key={`${award.year}-${award.title}`}>
              <p className="text-xs uppercase tracking-wider text-cyan-300">{award.year}</p>
              <h3 className="mt-2 text-lg font-medium text-white">{award.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{award.issuer}</p>
            </InfoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
