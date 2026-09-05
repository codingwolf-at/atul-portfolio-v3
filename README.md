# atul.dev — Frontend Engineer Portfolio

Personal portfolio of **Atul Tameshwari**, Software Development Engineer (Frontend) at Plane. Light-minimal, motion-rich, built with React, TypeScript, Tailwind, Framer Motion, and Lenis.

Live: https://atul-portfolio-v3.vercel.app/

## Features

- **Hero** — parallax intro, magnetic CTAs, copy-email chip, stats, skills marquee
- **About** — bio + Clean Code / UI-UX / Performance cards
- **Experience** — timeline with current Plane role (Propel design system, @plane/blocks, community/core consolidation), inFeedo.ai history
- **Work** — featured + secondary projects (HireTrack, ReviewUI, Notes Keep, Crescent UI)
- **Stack** — Frontend / Styling / Toolbox groups
- **Contact** — inverted CTA card with direct email + socials
- **Command palette** — `⌘K` / `/` to jump sections, open projects, `ESC` to close
- **Chrome** — floating nav with active section, scroll progress bar, single back-to-top FAB, grid + aurora background, dark/light themes with view transitions

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui + Radix
- Framer Motion (reveals, parallax), Lenis (smooth scroll), cmdk (palette)
- Lucide icons, next-themes

## Develop

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run lint` currently fails on a pre-existing ESLint 9 / @typescript-eslint config mismatch, unrelated to app code. Build (`npm run build`) passes.

## Structure

```
src/
  pages/Index.tsx            # Lenis + section composition
  components/
    navigation.tsx           # floating pill nav + palette trigger
    command-palette.tsx      # ⌘K search
    scroll-progress.tsx      # top progress bar
    scroll-to-top.tsx        # single FAB
    background.tsx           # grid + aurora
    motion/reveal.tsx        # scroll reveal + section heading
    motion/magnetic.tsx      # magnetic hover wrapper
    sections/                # hero, about, experience, projects, skills, contact
    theme-*.tsx              # dark/light provider + toggle
  lib/constants.tsx          # nav, stats, skills, projects, experience content
```

## Content edits

All copy lives in `src/lib/constants.tsx` — roles, bullets, tags, projects, skills, socials. Sections render from that file, so updating the resume = editing one file.

## License

MIT — feel free to fork for your own portfolio. If you spot a bug, open an issue.
