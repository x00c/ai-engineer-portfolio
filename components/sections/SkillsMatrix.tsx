import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/content/profile";

export function SkillsMatrix() {
  return (
    <SectionShell
      id="skills"
      kicker="Core Capability"
      title="AI engineering stack for product delivery"
      description="I optimize for systems that are observable, testable, and deployable under real user load."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {profile.skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
              <h3 className="text-lg font-medium text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
