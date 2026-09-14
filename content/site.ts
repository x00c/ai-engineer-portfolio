import { profile } from "@/content/profile";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type HomeSection = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
};

export const siteContent = {
  hero: {
    topTrackText: "PERSONAL SITE • AI SYSTEMS • CASE STUDIES • ",
    bottomTrackText: "INTERACTIVE WORK • WRITING • CONTACT • ",
    scrollPrompt: "initiate_scroll()",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies SiteNavItem[],
  homeSections: [
    {
      id: "about-preview",
      number: "01",
      title: "About & approach",
      description: "Background, operating principles, and the way I turn ideas into dependable systems.",
      href: "/about",
    },
    {
      id: "project-preview",
      number: "02",
      title: "Selected projects",
      description: "Case studies focused on challenge framing, architecture choices, and measurable impact.",
      href: "/projects",
    },
    {
      id: "contact-preview",
      number: "03",
      title: "Contact & collaboration",
      description: "Ways to reach out for consulting, product work, or experimental creative builds.",
      href: "/contact",
    },
  ] satisfies HomeSection[],
  footer: {
    heading: "CONNECT.",
    description:
      "Interested in collaboration, AI workflows, or data visualization? Reach out through social channels.",
    contactLabel: "Primary contact",
    copyright: `${profile.name}. All rights reserved.`,
    note: "Built as a motion-forward personal website with a shared content layer.",
  },
} as const;
