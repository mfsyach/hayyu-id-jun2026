# Hayyu Skin Clinic — ISST Page

Standalone **Next.js 14 (App Router) + Tailwind** build of the **ISST
(International Smart Skin Technology)** page for Hayyu Skin Clinic.

The page is built to look and behave like a native `hayyu.id` page. All visual
styling (color, type, navbar, footer) was derived from the **live site**, not
from the attached reference HTML.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Design tokens (extracted from hayyu.id — not the spec's guess)

The live site is **deep teal/green + neutral grays on white** — NOT the
burgundy/gold the build spec guessed. Verified from the live CSS variables
(`--primary: hsl(179 100% 20%)`), arbitrary color classes and the rendered hero.

| Token (`tailwind.config.ts`) | Value | Use |
|---|---|---|
| `primary` | `#006462` | brand teal — buttons, logo, accents, bands |
| `primary-50` | `#E6F0EF` | soft teal section tint |
| `primary-500` | `#02746F` | hover / gradient stop |
| `primary-800` | `#013F3C` | deepest teal (pull-quote band) |
| `ink` | `#111827` | headings |
| `body` | `#6D6F78` | paragraph text |
| `muted` | `#7A7A7A` | captions |
| `surface` | `#F4F4F5` | alt section bg |

**Font:** a single proprietary humanist sans, **Contax Sans** (the live site's
only font — there is no serif). The real `.woff2` weights (300–700 + italics)
were pulled from hayyu.id and are self-hosted in `public/fonts`, loaded via
`next/font/local` and exposed as `--font-contax-sans` (the same variable name
the live site uses), with an `Arial, Helvetica, sans-serif` fallback.

## Structure

```
app/
  layout.tsx              # metadata (title + ID meta description), font, <html lang="id">
  page.tsx                # the 9 ISST sections (4.1–4.9), verbatim Indonesian copy
  globals.css             # base styles, .eyebrow / .accent / .btn-primary tokens
  fonts.ts                # Contax Sans (next/font/local)
  components/
    Navbar.tsx            # utility strip + sticky nav, dropdowns, search, CTA, mobile drawer
    Footer.tsx            # 4 columns, social, app badges, copyright
    ImagePlaceholder.tsx  # swappable, accessible image placeholder
    siteData.ts           # all nav/footer links (mirrors live site)
public/
  fonts/                  # ContaxSans-*.woff2 (self-hosted, from hayyu.id)
  images/                 # hayyu-logo*.png, footer-bg.png
```

## Swapping in real photography

Three placeholders carry the intended filename + Indonesian `alt`:

| Section | `data-filename` |
|---|---|
| 4.1 Hero | `hero-konsultasi-kulit.jpg` |
| 4.2 What is ISST | `isst-tinjau-analisis-layar.jpg` |
| 4.5 QuantifiCare | `quantificare-lifeviz-3d.jpg` |

Drop the file into `public/images/` and replace the `<ImagePlaceholder .../>`
with:

```tsx
import Image from "next/image";
<Image src="/images/hero-konsultasi-kulit.jpg" alt="…" fill className="object-cover rounded-2xl" />
```

## Notes on navbar/footer vs the spec

Inspecting the live site corrected two spec assumptions:

- **Both** logo assets (`hayyu-logo.png`, `hayyu-logo-hd.png`) are **teal** — the
  "-hd" one is just high-resolution, not a white logo. `footer-bg.png` is a
  **light** panel, not a dark brand band. So the live site is light throughout
  with a teal logo; there is no dark/white logo swap. The navbar is therefore
  reproduced as the real site behaves: a teal utility strip that collapses on
  scroll + a white bar that gains a shadow on scroll, with the teal logo.

## Integrating into the real Hayyu repo

Since the live site is also Next.js + Tailwind: drop `app/page.tsx` in as the
ISST route, replace this project's `Navbar`/`Footer` imports with the repo's
existing components, and move the `primary`/font tokens into the repo's Tailwind
theme (or delete them if equivalents already exist).
