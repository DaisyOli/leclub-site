<p align="right"><strong>English</strong> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português</a></p>

# LeCLUB Fitness & Wellness

Marketing site for LeCLUB Fitness & Wellness, a boutique fitness and wellness studio in Alto de Pinheiros, São Paulo. Built to present the brand and convert visitors into leads for the studio's annual-plan presale via WhatsApp.

## Overview

LeCLUB is a small-capacity training space combining strength coaching with clinical and recovery services (physician consultations, body composition assessment, ice bath, compression therapy). The site's job is narrow and specific: communicate that positioning clearly and get qualified visitors to a WhatsApp conversation.

## Design process

The interface was fully designed and prototyped in Figma before any code was written — typography scale, spacing, color values, and image framing were all decided at the design stage. Implementation followed the prototype closely rather than improvising layout in the browser, so the shipped site matches the original mockups section by section.

## Design system & positioning

LeCLUB's positioning — a small, curated studio rather than a high-volume gym — shaped concrete product decisions, not just visual style:

- **Visual language**: an editorial pairing of serif headlines (Cormorant Garamond) and a sans-serif body (Manrope), over an earth-tone palette (`#0D2B25` dark green, `#BA753D` copper, sand neutrals) instead of a typical high-energy gym look.
- **Content structure**: sections are organized around care, technique, and continuity ("Sobre", "Local", "Planos") rather than promotions or class schedules.
- **Offer structure**: a single, detailed annual plan instead of a tiered pricing table, matching a limited-capacity service model.

| Token | Value | Usage |
|---|---|---|
| `--dark-green` | `#0D2B25` | Primary background, dark sections |
| `--copper` | `#BA753D` | Accent, CTA highlights |
| `--light-sand` / `--dark-sand` | `#E3DED4` / `#CDC7BC` | Light section backgrounds |
| `--white-typo` / `--text-dark` | `#E4E2DB` / `#0D2B25` | Typography on dark / light backgrounds |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- `next/font` (Cormorant Garamond, Manrope) and `next/image` for optimized web fonts and images
- [lucide-react](https://lucide.dev) for iconography

## Features

- Mobile-first layout with dedicated mobile/desktop component variants per section (`HeroMobile`/`HeroDesktop`, etc.) for precise control at each breakpoint, rather than relying solely on responsive utility classes
- Light/dark navbar variants driven by the underlying section's background
- Anchor-based navigation (`#sobre`, `#local`, `#planos`) with smooth scrolling
- Scroll-aware floating WhatsApp CTA, isolated as a Client Component so the rest of the page can stay server-rendered
- Data/presentation separation for the pricing card (`plans.data.ts` feeds `PlanCard`, `PlanBenefit`, `PlanPriceBox`, `PlanCTA`), so plan details can change without touching layout code
- Basic SEO via the Next.js Metadata API

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx           # Section composition
  globals.css         # Design tokens (CSS custom properties)
components/
  Hero.tsx, Sobre.tsx, Local.tsx
  plans/               # Pricing card and its data
  Navbar.tsx, Footer.tsx, FloatingWhatsAppDesktop.tsx
  Container.tsx, MediaFrame.tsx, SectionIntro.tsx  # Shared layout primitives
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint     # ESLint
```

## Roadmap

- [ ] Blog (`/blog`, MDX-based posts)
- [ ] Advanced SEO (OpenGraph, structured metadata) and image compression pass
- [ ] Analytics

## Author

Built end-to-end by [Daisy Oliani](https://www.linkedin.com/in/daisy-oliani).

## License

MIT
