# Architecture & Site Documentation

## Overview

**Alfredes Astro** is a bilingual (Spanish/English) cabin rental website built with Astro 5, React islands, and Tailwind CSS. It provides an informational landing page, image gallery, and contact/booking form.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | ^5.2.5 |
| UI Layer | React (islands) | ^19.0.0 |
| Styling | Tailwind CSS | ^4.0.6 |
| UI Components | shadcn/ui + Radix UI | various |
| Forms | React Hook Form + Zod | ^7.54, ^3.24 |
| Date Picker | react-day-picker + date-fns | 9.5.1, ^4.1.0 |
| Carousel | embla-carousel-react | ^8.5.2 |
| Icons | lucide-react | ^0.475.0 |
| Testing | Playwright | ^1.50.1 |
| Language | TypeScript | ^5.7.3 |

---

## Project Structure

```
alfredes-astro/
├── src/
│   ├── assets/
│   │   └── gallery/
│   │       ├── exterior/   # 12 exterior photos (JPG + WebP)
│   │       └── interior/   # 9 interior photos (JPG + WebP)
│   ├── components/
│   │   ├── ui/             # shadcn/ui components (button, calendar, card, etc.)
│   │   ├── Navbar.astro
│   │   ├── LanguagePicker.astro
│   │   ├── about.astro
│   │   ├── Card.astro
│   │   ├── image-gallery.astro
│   │   ├── cabin-rental.tsx   # unused/commented out
│   │   └── contact-form.tsx
│   ├── i18n/
│   │   ├── ui.ts           # translation strings (en + es)
│   │   └── utils.ts        # getLangFromUrl, useTranslations helpers
│   ├── layouts/
│   │   └── Layout.astro    # main layout wrapper
│   ├── lib/
│   │   └── utils.ts        # cn() Tailwind merge utility
│   ├── pages/
│   │   ├── index.astro     # Spanish home (/)
│   │   ├── gallery.astro   # Spanish gallery (/gallery)
│   │   ├── contact.astro   # Spanish contact (/contact)
│   │   └── en/
│   │       ├── index.astro   # English home (/en/)
│   │       ├── gallery.astro # English gallery (/en/gallery)
│   │       └── contact.astro # English contact (/en/contact)
│   ├── styles/
│   │   └── global.css      # Tailwind directives + CSS variables
│   └── env.d.ts
├── public/
│   ├── favicon.svg
│   └── manifes.json        # empty, typo in filename
├── tests/
│   └── example.spec.ts     # single Playwright E2E test
└── .github/workflows/
    └── playwright.yml      # CI test workflow
```

---

## Routes

| URL | File | Language |
|-----|------|----------|
| `/` | `src/pages/index.astro` | Spanish |
| `/gallery` | `src/pages/gallery.astro` | Spanish |
| `/contact` | `src/pages/contact.astro` | Spanish |
| `/en/` | `src/pages/en/index.astro` | English |
| `/en/gallery` | `src/pages/en/gallery.astro` | English |
| `/en/contact` | `src/pages/en/contact.astro` | English |

Default locale is Spanish (no URL prefix). English uses `/en/` prefix. Astro's built-in i18n routing is configured but routing rules are commented out.

---

## i18n Architecture

Translations live in `src/i18n/ui.ts` as a static object keyed by locale (`"en"` / `"es"`). Two helpers in `src/i18n/utils.ts` are used at the page level:

- `getLangFromUrl(url)` — reads the locale from the URL path
- `useTranslations(lang)` — returns a typed `t(key)` function

Translated keys cover navigation labels and the About section paragraphs.

---

## Component Architecture

The site follows Astro's **islands architecture**: static Astro components for layout/content, React components only where interactivity is needed.

| Component | Type | Notes |
|-----------|------|-------|
| `Layout.astro` | Astro | HTML shell, Navbar, global CSS |
| `Navbar.astro` | Astro | Responsive nav with mobile menu |
| `LanguagePicker.astro` | Astro | Switches between `/` and `/en/` |
| `about.astro` | Astro | Translated about text |
| `image-gallery.astro` | Astro + inline script | Grid + modal via native `<dialog>` |
| `contact-form.tsx` | React island | React Hook Form + Zod + date range picker |
| `cabin-rental.tsx` | React island | Currently unused (commented out) |
| `ui/*` | React | shadcn/ui primitives (Radix-based) |

---

## Styling

- **Tailwind CSS v4** with `applyBaseStyles: false` (custom base styles in `global.css`)
- **Dark mode** via class strategy (`class`)
- **CSS custom properties** (HSL) for the full color palette — light and dark themes defined
- **tailwindcss-animate** for transitions
- **tailwind-merge + clsx** via `cn()` utility for dynamic class composition

---

## Form & Booking Flow

The contact form (`contact-form.tsx`) uses:

1. `react-hook-form` for state management
2. `zod` schema for validation (name, email, phone, date range, message)
3. `react-day-picker` inside a Radix Popover for date range selection

**Current state:** Submission handler is a stub — it `console.log`s values and shows a browser `alert`. No backend or email service is connected.

---

## Images

42 images total (21 JPG + 21 WebP) split into `exterior/` and `interior/` sets. All are imported statically in `image-gallery.astro` and served through Astro's asset pipeline.

---

## Testing

- Single Playwright spec at `tests/example.spec.ts` — only checks the page title
- `playwright.config.ts` has `webServer` config commented out (tests require manually running dev server)
- GitHub Actions CI runs Playwright on push (`playwright.yml`)

---

---

## TODO List

### 🔴 Critical — Fix These

- [ ] **Broken English gallery import** — `src/pages/en/gallery.astro` uses a named import `{ ImageGallery }` but `image-gallery.astro` has no named export. This causes a runtime error on `/en/gallery`. Change to a default import matching the Spanish gallery page.

- [ ] **Contact form has no backend** — Form submission only `console.log`s and shows an `alert`. Needs a real endpoint (e.g. a serverless function, Resend, Formspree, or similar) to actually send booking inquiries.

- [ ] **Remove debug `console.log` statements** — Two left in production code:
  - `src/components/about.astro:11`
  - `src/components/contact-form.tsx:60`

---

### 🟡 Important — Should Fix Soon

- [ ] **Manifest file typo** — `public/manifes.json` should be `public/manifest.json`. File is also empty; populate it or remove it entirely.

- [ ] **Add SEO meta tags** — `Layout.astro` is missing `<title>`, `<meta name="description">`, Open Graph tags, and a canonical URL. These are important for search visibility.

- [ ] **Fix Playwright config** — Uncomment `webServer` in `playwright.config.ts` so tests can run in CI without a pre-running dev server.

- [ ] **Accessibility improvements**:
  - The native `<dialog>` in `image-gallery.astro` needs focus trapping and proper ARIA attributes
  - Mobile hamburger button should have `aria-expanded` / `aria-controls`
  - Form inputs need explicit `<label>` associations

- [ ] **Add a sitemap** — Use `@astrojs/sitemap` integration to auto-generate `/sitemap.xml` for SEO.

---

### 🟢 Nice to Have — Improvements

- [ ] **Wire up i18n routing** — The routing config in `astro.config.mjs` is commented out. Enabling it would add proper redirect/fallback behaviour for missing locale pages.

- [ ] **Remove or activate `cabin-rental.tsx`** — The component is imported but commented out on both index pages. Either remove it or integrate it into the page.

- [ ] **Remove `index_NOT.astro`** — Dead file, should be deleted.

- [ ] **Clean up commented-out code** — Various blocks commented out across components and config files; remove them or document why they exist.

- [ ] **Expand E2E tests** — Add Playwright tests for gallery modal, language switching, and form validation.

- [ ] **Add a 404 page** — Create `src/pages/404.astro` for a proper not-found experience.

- [ ] **Add error boundaries** — React error boundaries around interactive islands to prevent blank pages on component errors.

- [ ] **Environment configuration** — No `.env` support set up. Needed once the contact form has a backend API key.

- [ ] **OG / social preview images** — Add Open Graph image for link previews on social media.

- [ ] **Analytics** — Add privacy-friendly analytics (e.g. Plausible, Fathom) if traffic tracking is desired.

- [ ] **README** — Replace the default Astro template README with actual project documentation.
