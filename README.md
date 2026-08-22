# Valeria Velasco Photography

Wedding photography site, implemented from the Claude Design export
(`Homepage.dc.html`, `About.dc.html`, `Approach.dc.html`, `Stories.dc.html`,
`Story.dc.html`) as a Vite + React 18 + TypeScript app with Tailwind CSS,
built with Atomic Design, client-side routing (react-router-dom), a custom
EN/FR/DE i18n layer, and a [Sanity](https://www.sanity.io) CMS (`studio/`)
so wedding stories can be added without touching code.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # serve the dist/ build locally
npm run lint      # ESLint
npm run format    # Prettier --write
```

Wedding stories won't load until Sanity is configured — copy `.env.example`
to `.env` and see `studio/README.md` for the one-time setup (creating a free
Sanity project). Non-technical day-to-day editing: `GUIA-DE-CONTENIDO.md`
(in Spanish).

## Routes

| Route              | Page          | Source                |
| ------------------- | ------------- | ---------------------- |
| `/`                 | HomePage      | `Homepage.dc.html`     |
| `/about`            | AboutPage     | `About.dc.html`        |
| `/approach`         | ApproachPage  | `Approach.dc.html`     |
| `/stories`          | StoriesPage   | `Stories.dc.html`      |
| `/stories/:slug`    | StoryPage     | `Story.dc.html`        |
| anything else       | NotFoundPage  | —                       |

`/#experience` and `/#contact` are in-page anchors on the homepage; links to
them from other pages land on `/` and auto-scroll via `ScrollToHash`.

**Deploying to a static host**: this is a client-side-routed SPA, so the host
needs to rewrite unknown paths to `index.html` (otherwise a direct load of
`/about` 404s). `public/_redirects` covers Netlify; Vercel/Cloudflare Pages/etc.
need an equivalent rewrite rule configured on the host.

## Content management (Sanity)

Wedding stories (the homepage teaser, the `/stories` collection, and every
`/stories/:slug` detail page) are **not** hardcoded — they're fetched at
runtime from a Sanity dataset, so the photographer can publish a new story
from a web editor without a code change or a deploy.

- `studio/` — the Sanity Studio (a separate app, own `package.json`, own
  React version). See `studio/README.md` for one-time setup (creating the
  free Sanity project, env vars, CORS, deploying the Studio online) and
  `studio/schemaTypes/story.ts` for the content model.
- `src/lib/sanity.ts` — the read-only client (`sanityClient`) and
  `urlFor()` image URL builder. `isSanityConfigured` is `false` until
  `VITE_SANITY_PROJECT_ID` is set, so the app degrades gracefully (empty
  state, not a crash) before the CMS is wired up.
- `src/types/story.ts` — the `SanityStory` type + GROQ projection shared by
  both fetching hooks.
- `src/hooks/useStories.ts` / `useStory.ts` — fetch the full collection
  (newest first) / a single story by slug, each with `loading`/`error`
  state.
- Every image field is optional — a story can be published with just text,
  and any missing photo shows a "coming soon" placeholder
  (`TextureBlock`/`TextureBanner`) instead of breaking the layout.
- **Content strategy**: story content (couple names, location, intro,
  notes) is written **once**, not per-language — it displays as-is
  regardless of the visitor's selected site language. Only the site's fixed
  chrome (nav, buttons, form labels, SEO copy — everything in `src/i18n/`)
  is professionally translated into EN/FR/DE. This was a deliberate
  simplification: translating every story into 3 languages isn't realistic
  for a single photographer maintaining her own content, whereas the
  chrome rarely changes and was worth translating once, carefully. If
  per-language story content is wanted later, the schema and fetching
  layer would need per-locale fields (documented as a possible extension
  in `studio/README.md`).
- The homepage teaser is simply the two most recently published stories —
  no manual "featured" flag to manage.

## Internationalization (EN / FR / DE)

The language switcher in the header (homepage `Navbar` and the subpages'
`PageHeader`) is fully functional — it drives a `LanguageProvider`
(`src/i18n/LanguageContext.tsx`) that holds the active language in React
context, persists it to `localStorage` (`vvp-language`), and keeps
`<html lang>` in sync.

- `src/i18n/types.ts` — the `Dictionary` interface: every piece of *fixed
  chrome* copy on the site (nav labels, section text, form labels/errors,
  approach principles, per-page SEO title/description) as a typed shape.
  Wedding story content is not part of this — see "Content management"
  above.
- `src/i18n/dictionaries/{en,fr,de}.ts` — one full implementation of
  `Dictionary` per language.
- Components call `const { t } = useLanguage()` and read straight off `t`
  (e.g. `t.hero.titleLine1`, `t.home.contact.labels.email`) — no key
  lookups or fallback strings scattered through JSX.
- `src/data/navigation.ts` holds only the **structural**, language-independent
  nav data (hrefs/routes, keyed by a stable `id`); the visible label always
  comes from `t.nav[id]`.
- `useDocumentMeta` re-runs whenever the derived title/description changes,
  so the tab title and meta description update immediately on language
  switch, and per-route (title changes even though the URL doesn't).

**Adding a fourth language**: add the code to `Language` in
`src/i18n/types.ts`, create `src/i18n/dictionaries/xx.ts` implementing
`Dictionary` (copy `en.ts` as a starting point — TypeScript will flag any
missing field), register it in the `dictionaries` map in
`LanguageContext.tsx`, and add the code to `languageCodes` in
`src/data/navigation.ts`.

## Folder structure

```
studio/                  Sanity Studio (content editor) — see studio/README.md
GUIA-DE-CONTENIDO.md      non-technical "how to add a story" guide, in Spanish
public/
  favicon.svg          # brand monogram
  robots.txt, sitemap.xml, _redirects
src/
  i18n/
    types.ts              Language type + Dictionary interface
    LanguageContext.tsx    LanguageProvider + useLanguage() hook
    dictionaries/
      en.ts, fr.ts, de.ts  one full Dictionary implementation per language
  lib/
    sanity.ts              read-only Sanity client + urlFor() image builder
  types/
    story.ts                SanityStory type + shared GROQ projection
  components/
    atoms/              Button, Logo, Eyebrow, SectionTitle, TextLink,
                         TextureBlock, Reveal, ScrollToHash
    molecules/           FormField, LanguageSwitcher, MobileMenu,
                         StoryCard, TestimonialCard, ExperiencePhaseCard,
                         TextureBanner
    organisms/           Navbar, Hero, AboutSection, PortfolioSection,
                         PhilosophySection, ExperienceSection,
                         TestimonialsSection, ContactSection, Footer,
                         — subpages —
                         PageHeader, StoryHeader, SimpleFooter, ClosingCTA,
                         AboutHero, AboutStory,
                         ApproachHero, ApproachStory, ApproachPrinciples,
                         StoriesGrid,
                         StoryIntro, StoryImageGrid, StoryNoteSection
    templates/
      LandingTemplate/   composes the homepage's organisms in order
  pages/
    HomePage/, AboutPage/, ApproachPage/, StoriesPage/, StoryPage/,
    NotFoundPage/
  hooks/
    useScrollProgress.ts   scroll position / "scrolled past threshold"
    useInViewReveal.ts     IntersectionObserver fade-up trigger
    useDocumentMeta.ts     sets document.title + meta description per route
    useStories.ts, useStory.ts   fetch wedding stories from Sanity
  data/
    navigation.ts          structural-only nav data (hrefs/routes by id);
                           labels come from the active Dictionary
  styles/
    index.css              Tailwind layers, global resets, texture utilities
  App.tsx, main.tsx, vite-env.d.ts
tailwind.config.ts        design tokens (colors, type scale, tracking, screens)
```

## Notes on the source design

- The design's placeholder photo blocks (diagonal-stripe pattern + small
  caption like "VERTICAL PORTRAIT — PHOTOGRAPHER, NATURAL LIGHT") are kept
  as-is per the fidelity requirement — no real photography assets were part
  of the design export, so `TextureBlock`/`TextureBanner` render them
  faithfully as placeholders. Swap them for real `<img>`s once photos exist.
- The hero originally had a ping-pong background video hook per the stack
  spec, but no video asset ever existed in the source design (or since) —
  it only ever showed the static poster. The video path and hook were
  removed; the hero now renders `/images/home/hero/cover-desktop.jpg`
  (`cover-mobile.jpg` under 768px via `<picture>`) directly.
- The JSON-LD in `index.html` is typed for this business (a Switzerland-based
  wedding photographer) rather than the generic "reformas en Madrid"
  LocalBusiness boilerplate — update the `url`, `email` and `address` fields
  once a real domain is available. It's static English and only covers the
  homepage document, since this is a CSR-only SPA (no SSR/prerendering) —
  true per-route, per-language OG/JSON-LD would need a prerender step, out
  of scope for the current stack.
- `<html lang>` is set dynamically by `LanguageProvider` to match whichever
  language is active (defaults to `en`), rather than a static value in
  `index.html` — necessary now that content is genuinely multilingual.
- The contact form's grid is `1fr` on mobile and `1fr 1fr` from the `sm`
  breakpoint up. The source design fixed it at two columns unconditionally,
  which breaks unusably on narrow phones — this is an intentional deviation
  from literal fidelity, made to satisfy the mobile-first requirement.
- **Story content is dynamic** (see "Content management" above) — the
  source design's example stories (Anna & Elias, Sofia & Marco, Léa &
  Julian) were placeholders for the layout, not real content to preserve.
  Real stories are published through the Sanity Studio.
- Subpages use their own `PageHeader` (static, not fixed/scroll-aware) and
  `SimpleFooter` (copyright line only), matching the source design's simpler
  chrome on About/Approach/Stories/Story versus the homepage's animated,
  fixed `Navbar` and full `Footer`. `PageHeader` also carries the language
  switcher (the source design only put it on the homepage; without it there
  a visitor who leaves `/` would have no way to change language, so it's
  reused there in the same style rather than treated as a homepage-only
  feature).
- A few of the source design's inline `@media (min-width: 760px)` /
  `860px` / `620px` breakpoints (About/Approach/Stories/Story grids) don't
  match the homepage's single 1080px nav breakpoint — rather than force them
  onto one shared token, they're reproduced faithfully with Tailwind
  arbitrary variants (`min-[760px]:`, etc.) so each page's actual responsive
  behavior from the export is preserved.

## Before deploying

- Create the Sanity project and publish real wedding stories (`studio/README.md`,
  `GUIA-DE-CONTENIDO.md`) — without it, story sections show a "coming soon"
  message instead of crashing, but there's nothing to show visitors yet.
- Set `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` in the hosting
  provider's environment variables (not just a local `.env`), and add the
  production domain to Sanity's CORS origins.
- Update the canonical domain in `index.html` (`og:url`, `og:image`,
  `twitter:image`, JSON-LD) and in `public/robots.txt` / `public/sitemap.xml`.
- Configure your static host's SPA rewrite (see Routes above).
- Wire the contact form's `handleSubmit` to a real backend/email endpoint —
  it currently only validates client-side and shows a success state.
