# Spider portfolio

The home page is now composed by `components/spiders/SpiderPortfolio.tsx`.
Existing `/about`, `/projects`, and `/contact` routes and their shared content remain available.

## Eight characters

| Original drawing | Character | Treatment |
| --- | --- | --- |
| 未命名作品-2.png | AMBER / 琥珀 | Gold and ember particles |
| 未命名作品-3.png | SPECTRA / 幻光 | Blue shell and holographic wireframe |
| 未命名作品-4.png | CRIMSON / 緋紅 | Red shell with the original web markings |
| 未命名作品-5.png | PEARL / 珍珠 | Pearl shell, pink legs, floating bubbles |
| 未命名作品-6.png | TIDAL / 潮汐 | Violet shell and animated ripples |
| 未命名作品-7.png | PULSE / 脈動 | Scarlet, white, and blue markings |
| 未命名作品-8.png | NOIR / 墨影 | Original ink and scarlet strokes |
| 未命名作品-9.png | ROYAL / 靛藍 | Cobalt, vermilion, and white markings |

The provided files -10 and -11 are retained as additional effect references,
not counted as extra characters. The GIF is retained as a walking reference.
No source drawing is overwritten. Character names are editable display labels.

## Implementation

- `content/spiders.ts`: source mapping, names, color palettes, and effect selection.
- `createSpider.ts`: volumetric ellipsoid bodies, source-art UV projection, eight articulated two-segment legs, eyes, and effects. This is an artistic 3D interpretation of the drawings, not a recovered original sculpt or an animated image billboard.
- `SpiderScene.tsx`: Three.js lighting, shadows, movement, drag rotation, resize handling, visibility pause, and disposal of GPU resources.
- `OpeningSequence.tsx`: the supplied walking-spider GIF and layered `hello` typing treatment appear together, followed by an Ayush Sanj-style top/bottom split-curtain reveal on exit. All eight color palettes cycle on first visit with restrained chromatic flicker. Replay uses the selected spider's palette.
- `KeyboardSkills.tsx`: a 3 × 5 interactive skill keyboard inspired by the tactile keyboard mode in [Txemalon's 3D portfolio](https://github.com/Txemalon/3d-portfolio). Each key has a real shortcut (Q–B), a Simple Icons skill mark rendered onto its keycap, click/focus states, press depth, and an accent-matched detail callout.
- `spiders.css`: responsive layout and reduced-motion rules.

Walking and FX can be paused independently. The OS reduced-motion preference disables autonomous movement and flicker. Devices without WebGL show the original drawing. The scene remains with the About section on desktop and stays inside the hero on mobile.

## References

- Opening composition/timing: [Ayush Sanj](https://ayushsanj.com/), [source](https://github.com/Ayushsanjdev/my-portfolio-2026).
- Overall one-page structure and 3D character presentation: [Supratim Nath portfolio](https://github.com/supratim-nath/Portfolio-Website).
- Keyboard interaction reference: [Txemalon 3D portfolio](https://github.com/Txemalon/3d-portfolio). The skill board is an original CSS/React implementation using this project's content and visual language.
- This implementation uses the workspace's Next.js, Three.js, and Framer Motion stack. It does not load the reference author's humanoid, encrypted model, contact details, or analytics.

Two previously empty shader modules in the existing WebGL implementation were completed to restore a successful whole-project TypeScript build.

## Verification

Run `npm run build` and `npx eslint components/spiders components/ui/SiteChrome.tsx content/spiders.ts app/page.tsx app/layout.tsx components/webgl/shaders`.
Browser QA artifacts are in `output/playwright/`. Checks cover all eight selections, WebGL rendering, pause/FX toggles, rotation, scroll layout, project navigation, gallery return, intro replay, mobile navigation, and reduced motion.
