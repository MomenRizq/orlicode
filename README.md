# Nexus Software — Premium Portfolio (Next.js)

A bilingual (English/Arabic, RTL-ready), animation-forward portfolio site for a
software engineering studio, built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, GSAP and Lenis smooth scrolling.

This was built as an **original implementation inspired by the structure and
motion language** of the reference site (themejunction.net/gerold), not a
copy of its code — different tech stack, different components, your own
brand system throughout.

---

## Reference-site analysis (summary)

The reference is a single-page personal-portfolio template with:

- **Sticky/hiding nav** that reappears on scroll-up, a burger menu on mobile.
- **Hero** with a large serif/sans display headline, floating character
  illustration, and a horizontal marquee strip of skill tags running beneath
  the fold — used here as the "Development / Mobile Apps / AI Solutions…"
  marquee.
- **Recent Works** presented as full-bleed alternating image/text rows with a
  hover-reveal treatment, opening into a **modal project detail view** with a
  small image gallery, meta list (category/client/date/designer) and
  prev/next project navigation.
- **Services** as a 4-up icon-card grid, plus a secondary modal with a
  services breakdown and a numbered "process" list.
- **Animated counters** (years of experience / projects / clients) that count
  up on scroll into view, and **skill progress bars** with animated percentage
  fills.
- **Resume/timeline** as two parallel columns (education / experience) with
  year labels.
- **Testimonial slider** with client logo + avatar + quote, auto-advancing.
- **Accordion FAQ**, and a minimal **contact** closing section before the
  footer.
- Motion throughout favors soft ease-out entrances on scroll (fade + slight
  y-translate), staggered children, and marquee-based ambient motion rather
  than aggressive parallax — smooth and understated rather than showy.

This build adapts that structure into a company/studio narrative (rather than
a personal designer bio) and swaps the single flat "Recent Works" list for a
**categorized, filterable project grid** — the most important divergence,
since your brief calls for projects organized by discipline (Mobile, Web,
Dashboards, ERP, AI, Custom) rather than mixed together.

---

## What's implemented

- `/en` and `/ar` routes with automatic locale detection middleware, a
  language switcher, and full `dir="rtl"` layout mirroring (spacing, borders,
  timeline, icons all flip correctly — nothing is hardcoded left/right).
- Real English **and** Arabic copy in `src/i18n/dictionaries/*.json` — not
  placeholder text — so both language versions read naturally.
- Sections: Hero, About, Services, **categorized/filterable Projects**,
  Process (scroll-progress timeline), Technologies (dual-direction marquee),
  Testimonials (slider), FAQ (accordion), Contact, Navbar, Footer.
- Motion: staggered hero text reveal, scroll-triggered fades via
  `whileInView`, animated counters, a `layoutId`-based sliding pill on the
  project filter tabs, magnetic-hover buttons, Lenis smooth scroll wired to
  GSAP's ticker, and `prefers-reduced-motion` support baked into globals.css.
- Fully typed dummy data in `src/data/*.ts` — swap in real projects,
  testimonials, tech stack and stats without touching component code.
- Tailwind theme tokens (`tailwind.config.ts`) derived from your logo: a deep
  navy background with a violet → indigo brand gradient.

## What's intentionally left for a next pass

Given the size of the full brief, this first build prioritizes a strong,
production-quality **foundation** over covering every listed micro-interaction.
Not yet built: the project detail modal/gallery, a dedicated resume/skills
page, cursor-follower effects, and GSAP ScrollTrigger pin/parallax sequences
beyond what Framer Motion's `whileInView` covers. The architecture (typed
data, reusable cards, section components) is set up so these are additive,
not restructuring work.

---

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it will redirect to `/en` (or `/ar` if your
browser is set to Arabic).

```bash
npm run build && npm run start   # production build
```

### Fonts

`src/app/[locale]/layout.tsx` uses `next/font/google` (Space Grotesk, Inter,
IBM Plex Sans Arabic), which self-hosts the fonts at build time — this
requires network access during `next build`. If you're building in a
network-restricted CI/sandbox, switch to `next/font/local` with `.woff2`
files placed in `public/fonts` instead.

### Replacing dummy content

- Projects: `src/data/projects.ts`
- Testimonials: `src/data/testimonials.ts`
- Tech stack: `src/data/technologies.ts`
- Stats: `src/data/stats.ts`
- All UI copy (English + Arabic): `src/i18n/dictionaries/en.json` /
  `ar.json`
- Brand colors: `tailwind.config.ts` → `theme.extend.colors`

### Folder structure

```
src/
  app/[locale]/        route + layout (html lang/dir, fonts)
  components/
    layout/             Navbar, Footer, LanguageSwitcher, SmoothScrollProvider
    ui/                 Container, SectionTitle, AnimatedButton, Statistic, TechBadge
    cards/               ServiceCard, ProjectCard
    sections/            Hero, About, Services, Projects, Process, Technologies,
                         Testimonials, FAQ, Contact
  data/                  dummy content (typed)
  i18n/                  locale config + en/ar dictionaries + loader
  types/                 shared TS interfaces
middleware.ts            locale detection + redirect
```
