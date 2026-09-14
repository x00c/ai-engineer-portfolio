import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for AI engineering consulting, product build-outs, or technical advisory.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Let&apos;s build your next AI product
        </h1>
        <p className="mt-4 text-zinc-300">
          I work with teams that need production-grade AI systems with clear quality and performance
          targets.
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 md:p-8">
        <p className="text-sm text-zinc-300">Primary contact</p>
        <a href={`mailto:${profile.email}`} className="mt-2 block text-2xl font-medium text-cyan-300">
          {profile.email}
        </a>
        {profile.phone ? (
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-2 block text-lg text-zinc-300">
            {profile.phone}
          </a>
        ) : null}

        <form className="mt-8 grid gap-4" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Name</span>
            <input
              required
              name="name"
              type="text"
              className="rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none ring-cyan-300/50 transition focus:ring-2"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Email</span>
            <input
              required
              name="email"
              type="email"
              className="rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none ring-cyan-300/50 transition focus:ring-2"
              placeholder="your@email.com"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Project brief</span>
            <textarea
              required
              name="message"
              rows={5}
              className="rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none ring-cyan-300/50 transition focus:ring-2"
              placeholder="Tell me what you are building and your timeline."
            />
          </label>
          <button
            type="submit"
            className="mt-1 inline-flex w-fit items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Send inquiry
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <ButtonLink key={social.label} href={social.href} variant="ghost">
              {social.label}
            </ButtonLink>
          ))}
          <ButtonLink href="/" variant="ghost">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
