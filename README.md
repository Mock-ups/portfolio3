# Form & Field — Interior Design Studio Portfolio

A modern, animated portfolio for an interior-design studio. The site is built
around a **"drawing set"** concept: a hairline sheet frame, dimension-line
dividers, a title block, and a numbered project register — the language of an
architect's construction documents.

> All studio name, copy, projects and imagery are **placeholders**. See
> _Swapping in real content_ below.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with a custom token system
- **Motion** (Framer Motion) for animation
- Images via **next/image** (currently Unsplash placeholders)

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Design system

- **Palette** (monochrome + one accent): paper `#f6f5f1`, ink `#19191a`,
  graphite `#6e6e66`, hairline `#d7d6cf`, redline accent `#c24a2e`.
- **Type**: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (data/labels).
- Tokens live in [`src/app/globals.css`](src/app/globals.css) (`:root` + `@theme`).

## Project structure

```
src/
  app/
    layout.tsx           # fonts, frame, header, footer
    page.tsx             # home
    work/page.tsx        # project index
    work/[slug]/page.tsx # project detail (static-generated)
    about/page.tsx
    contact/page.tsx
  components/
    Header / Footer / Frame / Marquee / ProjectCard / ContactForm / DimensionDivider
    motion/              # Reveal, AnimatedHeading, Magnetic, Counter, ParallaxImage
  lib/
    site.ts              # ← studio name, contact, socials (single source of truth)
    projects.ts          # ← project register + image URLs
    utils.ts
```

## Swapping in real content

1. **Studio details** (name, email, phone, address, socials, founded year):
   edit [`src/lib/site.ts`](src/lib/site.ts).
2. **Projects** (titles, copy, locations, areas, images): edit
   [`src/lib/projects.ts`](src/lib/projects.ts). Each project's `cover` and
   `gallery` are image URLs — replace with the studio's real photos.
3. **Local images**: drop files in `public/` and reference them as
   `/your-image.jpg` (no `next.config` change needed). To allow another remote
   image host, add it to `images.remotePatterns` in
   [`next.config.ts`](next.config.ts).
4. **Principal bio / process / recognition**: edit
   [`src/app/about/page.tsx`](src/app/about/page.tsx) (marked `PLACEHOLDER`).

## Notes

- The contact form has **no backend** yet — on submit it opens the visitor's
  mail client (`mailto:`). Wire it to a form service (Resend, Formspree, a route
  handler, etc.) when ready.
- All animations respect `prefers-reduced-motion`.
