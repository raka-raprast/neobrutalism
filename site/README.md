# SLAB — A Neobrutalism Design Study

A proof-of-concept exploring neobrutalist web design: hard offset shadows, halftone print
texture, flat color blocking, sticker-collage layout, and cards that spill past their own
edges. Grounded in research on four live neobrutalist sites (Feastables, Gumroad, GT Maru,
Design Thinkers) and shipped as a real, working build — not a static comp.

This is a research artifact, not a real studio. No fake clients, no invented testimonials,
no fabricated business metrics. Every product/UI image in the gallery and craft sections was
generated and art-directed for this build; every stat on the page is a true fact about the
build itself.

## Stack

- **React 19** + **TypeScript**, built with **Vite 8**
- **Tailwind CSS v4** (CSS-first `@theme` tokens, no config file)
- **GSAP** (`ScrollTrigger`, `Flip`, `useGSAP`) for scroll reveals, the work-filter reflow,
  and reduced-motion-aware entrances
- **Phosphor Icons** for all iconography (no emoji, no icon-font)
- Imagery generated via [wan.video](https://wan.video)'s `text2image`, resized/converted
  with `ffmpeg` + `cwebp`

## Structure

| Section | What it is |
|---|---|
| Hero | Headline + a burst-stamp asset breaking the clean two-column grid |
| Marquee | Style keywords actually demonstrated on the page |
| Services | Six real facts about what this build contains |
| Research | True stats about the build (images generated, anti-patterns fixed, etc.) |
| Gallery | Six generated style studies (product/UI mockups), filterable by discipline |
| Craft | A study of Gumroad's "cards that spill past their edge" technique |
| Process | The four real steps used to build this: Research → System → Build → Verify |
| References | Citations of the four real reference sites, not fake testimonials |
| Colophon | A closing statement — no fake contact form or fake booking claim |

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

`npx oxlint` and `tsc -b --noEmit` are run as part of verification; no test suite (marketing
site, no business logic to unit test).
