# The Stralis — Homepage

Marketing site for **The Stralis**, an IT engineering studio (software dev, SaaS,
MVPs, AI/ML). Built with Next.js (App Router), TypeScript, Tailwind v4, and
Framer Motion.

Brand posture: serious, direct, minimal, values-led — Swiss-design discipline
applied to a software studio. Anchor tagline:
**"Engineering, accelerated by AI. Judgment, not automated."**

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Typefaces

- **Geist** (Vercel) — display + body, self-hosted via the `geist` package.
  Headings use semibold (600).
- **Geist Mono** — eyebrows, labels, stats, code.

Both are wired through tokens (`--font-sans` / `--font-mono` in
[`src/app/globals.css`](src/app/globals.css)), so swapping the brand face later
is a one-line change.

## Brand tokens

All colors, type scale, and motion easing live as tokens in
[`src/app/globals.css`](src/app/globals.css) (`@theme`). Components reference
tokens, never raw hex. Orange (`--color-orange`) is the only accent and is used
sparingly: CTAs, links, active state, and at most one emphasized word per
headline.

## Structure

```
src/
  app/            routes (home + placeholder pages) + layout + tokens
  components/
    layout/       Header, Footer, MobileMenu
    sections/     homepage sections (Hero, Services, …)
    ui/           Button, Reveal, Counter, icons, layout primitives
    forms/        ContactForm
  lib/            motion + content data
public/brand/     logo-white.png (white wordmark)
```

## Notes / TODO

- The "faster delivery on AI-assisted builds" stat is a **placeholder** — it is
  marked `TODO` in code and must not go live with a fabricated number.
- The compact "S" icon mark (favicon, mobile) is **not** included — the brief
  says do not fabricate one. Drop the real asset into `public/brand/` when ready.
- Project images in the Work section are intentional dark placeholders.
- Service/work links are placeholders pending those pages.
