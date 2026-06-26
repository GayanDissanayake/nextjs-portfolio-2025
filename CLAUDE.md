# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page portfolio (Next.js 15, React 19, TypeScript, Tailwind CSS 4). The main entry point is `src/app/page.tsx`, which is a client component that owns all scroll state.

**Scroll-driven layout:**
- `page.tsx` tracks `activeSection` and `showMainContent` via a scroll listener
- The desktop `Sidebar` (`src/components/Sidebar.tsx`) is hidden off-screen (`-translate-x-full`) until the user scrolls past the intro section, then slides in
- The main content area shifts right (`lg:ml-80`) when the sidebar appears
- Mobile uses a fixed top nav bar with a hamburger dropdown instead

**Section flow** (each has an `id` matching `sections[]` in `page.tsx`):
`intro` → `about` → `technical` → `experience` → `projects` → `contact`
All live in `src/components/sections/`.

**Additional pages** (separate routes, not part of the scroll flow):
- `/school-journey` — linked from the sidebar footer
- `/travel-map` — uses Leaflet (`LeafletTravelWrapper` + `LeafletMapComponent`, dynamic-imported to avoid SSR issues with `window`)
- `/enhanced-3d-about-me`, `/3d-immersive-scene`, `/advanced-3d` — Three.js scenes via `@react-three/fiber` + `@react-three/drei`; components live in `src/components/3d-about-me/`

**Theme tokens** (Tailwind custom colors, also as CSS classes in `globals.css`):
- `navy` / `bg-navy` → `#0f172a` (dark background)
- `navy-light` / `bg-navy-light` → `#1e293b`
- `beige` / `text-beige` → `#fef7ed` (primary text)
- `beige-accent` / `text-beige-accent` → `#fbbf24` (amber, CTAs and highlights)
- `green-luminous` / `text-green-luminous` → `#4ade80` (code highlights)

**Fonts:** Montserrat (`font-sans`, `--font-montserrat`) and JetBrains Mono (`font-mono`, `--font-jetbrains-mono`) loaded via `next/font/google` in `layout.tsx`.

**Utilities:**
- `src/lib/utils.ts` exports `cn()` — a `clsx` + `tailwind-merge` helper for conditional class names
- `src/components/ScrollAnimation.tsx` and `StaggeredAnimation.tsx` wrap Framer Motion for scroll-triggered reveals
- `src/components/SpotlightCursor.tsx` renders the mouse-following spotlight effect on the main page

**Static assets:** Resume/CV lives at `public/documents/cv.pdf` (linked from the Sidebar as both view and download).
