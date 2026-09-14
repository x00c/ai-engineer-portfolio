import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/content/profile";

export function ExperienceTimeline() {
  return (
    <SectionShell
      id="experience"
      kicker="Timeline"
      title="Professional experience"
      description="Roles across government statistics, AI product development, computer vision, and full-stack delivery."
    >
      <StaggerGroup className="space-y-4">
        {profile.timeline.map((item) => (
          <StaggerItem key={`${item.period}-${item.company}`}>
            <article className="rounded-2xl border border-white/10 bg-zinc-900/65 p-6">
              <p className="text-xs uppercase tracking-wider text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-lg font-medium text-white">
                {item.role} · {item.company}
              </h3>
              <p className="mt-3 text-sm text-zinc-300">{item.summary}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
