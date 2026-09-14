# AI Engineer Portfolio

Premium personal portfolio website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion

## Features

- Scroll-forward premium homepage with animated narrative sections
- Case-study projects page with category filter
- About and Contact pages
- Structured content model in `content/*.ts`
- SEO metadata + Open Graph + `robots.txt` + `sitemap.xml`
- Reduced-motion support for accessibility

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Content Updates

Update these files to change portfolio content without editing page components:

- `content/profile.ts`
- `content/projects.ts`

## Project Structure

- `app/` routes and page-level metadata
- `components/sections/` page sections
- `components/motion/` reusable animation wrappers
- `components/ui/` reusable UI primitives
- `lib/seo.ts` site metadata configuration

## Deployment

Provider-agnostic deployment instructions are in `DEPLOYMENT.md`.

## Recent Updates
- **Yuri.WG Portfolio Replication**: Completely replaced the homepage with a minimalist, monochrome, grid-based design inspired by yuri-wg-portfolio.pages.dev. Implemented light/dark mode, electric blue accents, floating system tags, interactive decorative symbols, and a new grid-based project list.

- **Hero Section Optimization**: Integrated the "Calm Cosmos" interactive elements into the Yuri.WG design. The main title is now composed of interactive particles that scatter on hover. Added a Debussy-style interactive soundscape, ambient background depth elements, and minimalist floating system status tags.

- **Visual Effects Updates**: 
  - Updated `HeroParticleTitle` to match the dot-matrix style from Yuri.WG, where particles are rendered as distinct dots with electric blue accents.
  - Created `TextReveal` component and integrated it into `SectionList` to provide the character-scrambling reveal effect on hover.

- **Hero Marquee (landonorris.com style)**:
  - Two continuous full-width tracks (lime row scrolls right→left, white row scrolls left→right) live OUTSIDE the scaling stage, painted directly on the section's black backdrop.
  - The shrinking hero stage (rounded card, `scale: 1 → 0.7`) sits in front and acts as the cut-out — exactly like the Lando portrait card. Only the marquee fragments on the side margins remain visible, scrolling past the central card.
  - `marqueeOpacity` is scroll-linked for immediate reveal (`progress 0.0 → 0.08` mapped to opacity `0 → 1`), so side text appears as soon as scrolling starts.
  - Stage motion was tuned for a faster collapse and a smaller final mask: `stageScale: [0, 0.2, 0.42, 1] → [1, 0.9, 0.62, 0.62]`, with the final mask anchored around viewport center (`stageY` returns to `0`) for a centered Lando-style composition.
  - Added first-layer corner-collapse during scroll (`baseLayerClip` with `clipPath: inset(...)`) so the base visual retracts from four corners toward the center as the wheel-scroll narrative advances.

- **Top Bar Lando-style Controls**:
  - Removed the `Store` action and kept a single top-right compact menu button.
  - Moved the previously removed nav items (`Home`, `AI Library`, `Knowledge Base`, `Data Viz`) into a dropdown panel opened by that menu button.
  - Added outside-click / Escape close behavior and retained scroll-reactive compact scaling for the floating top-right control.

- **Dark-only + Hero UI Cleanup**:
  - Forced dark mode globally via `ThemeProvider` (`defaultTheme="dark"`, `forcedTheme="dark"`, `enableSystem={false}`) and applied `dark` at the root html class.
  - Removed hero overlay/status UI elements highlighted in review: top-left lock chip, top-right sound badge, center subtitle line (`Exploring...`), and lower lock hint pill.

- **Hero First Layer (Uiverse style)**:
  - Replaced `HeroBaseLayer` with the provided Uiverse gradient+grid style (`kencode7/perfect-puma-86`): top white fade over cyan→purple horizontal gradient, plus 50px vertical line pattern with bottom mask fade.

- **Marquee Backdrop Pattern Update**:
  - Replaced the outer Hero backdrop (visible around side/bottom areas during horizontal marquee reveal) with the provided Uiverse checker gradient pattern (`uiverse-astronaut`) using 60px/offset tiles.

- **Hero Frame Color Matching**:
  - Replaced the shrunken stage's black base fill with a palette-matched cyan→purple + white haze gradient, so the exposed frame area blends with the first layer instead of appearing as a hard black block.

- **Halo Backdrop + Outer Layer Cleanup**:
  - Removed the high-contrast outer checker layer and replaced the Hero outer backdrop with a soft palette-matched gradient.
  - Updated `HeroRevealLayer` from dark navy tones to the same cyan→purple family, so the halo/reveal area blends naturally with the base visual.
  - Removed the extra large outer stage fill layer (the tinted rounded rectangle behind the main inner panel) by making the scaling stage background transparent.
  - Restored the outermost Hero backdrop to the Uiverse checker pattern per latest feedback, while keeping the extra tinted outer stage layer removed.

- **Hero First Layer (NlghtM4re Rings)**:
  - Replaced the prior first-layer gradient/grid with the provided Uiverse ring-field animation (`NlghtM4re`): stacked circular neon rings using 3D tilt (`rotateX(70deg)`), staggered delays via CSS variable `--i`, and continuous vertical motion/hue shift keyframes.
  - Fused in the `csemszepp` radial tile background pattern beneath the rings, with palette remapped to the hero's cyan/purple post-scale background tones for color consistency.

- **Hero Title Removal**:
  - Removed the center `YURI.WG` particle title block from Hero and cleaned up now-unused title/sound hook imports in `Hero.tsx`.

- **Hero First Layer (Airplane Logo Flight)**:
  - Replaced the first-layer ring visual with an airplane logo motif and trail.
  - Wired airplane motion to scroll progress so it descends in early/mid scroll, then climbs up and flies out near the end.
  - Increased airplane visibility and motion amplitude: larger icon size, brighter contrast/glow halo, and stronger down-then-up flight path to make the movement obvious during scroll.
  - Added an `ilkhoeri`-style 3D rotating card ring behind the airplane and remapped card colors to the hero cyan/purple palette for post-scale background matching.

- **Hero Center Card (abrahamcalsin style)**:
  - Replaced center content with the provided `card-client` profile card style (avatar, name, social row, tooltip interactions) adapted into `Hero.tsx`.
  - Updated card timing/size to be immediately visible on first render and significantly larger for stronger visual presence.

- **Section Background Consistency**:
  - Updated the homepage content area behind `SectionList` and `ProjectList` to use the same checker gradient background as the first-screen style for visual continuity.
