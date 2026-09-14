# Architecture Guide

This project is a personal website built with Next.js App Router. The site is organized around a small shared content layer so the same profile, project, and navigation data can power multiple pages.

## Structure

- `app/`
  App Router routes. The main entry points are `page.tsx`, `about/page.tsx`, `projects/page.tsx`, and `contact/page.tsx`.
- `components/`
  Reusable UI and page sections. `components/sections` assembles major homepage and route-level content, while `components/hero`, `components/motion`, and `components/webgl` handle the visual system.
- `content/`
  The editable content source for the site.
- `lib/`
  Shared helpers such as `seo.ts`, animation helpers, and class name utilities.

## Content Model

- `content/profile.ts`
  Central person-level content: name, role, location, intro, email, socials, about copy, metrics, skill groups, and timeline.
- `content/projects.ts`
  Project case studies. Use `featured: true` to surface a project on the homepage.
- `content/site.ts`
  Site-level structure and copy: hero marquee text, top-level navigation, homepage preview sections, and footer text.

## Rendering Flow

- `app/layout.tsx`
  Defines global fonts, theme provider, shared document metadata, and the shared site shell (`Navbar` + `Footer`).
- `app/page.tsx`
  Composes the homepage content from `Hero`, `SectionList`, and `ProjectList`.
- `components/sections/Hero.tsx`
  Pulls profile identity and hero copy from `content/`.
- `components/sections/SectionList.tsx`
  Uses `content/site.ts` to preview the main destinations of the site.
- `components/sections/ProjectList.tsx`
  Uses featured entries from `content/projects.ts`.
- `components/sections/Footer.tsx`
  Reuses the shared contact and social data from `content/profile.ts`.

## Best Edit Points

- Change your public identity, links, and contact email in `content/profile.ts`.
- Change homepage section labels or footer messaging in `content/site.ts`.
- Add, remove, or reorder project case studies in `content/projects.ts`.
- Update metadata defaults in `lib/seo.ts` if your site title or deployment URL changes.
