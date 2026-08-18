# Valeria Velasco Photography

Wedding photography site, implemented from the Claude Design export
(`Homepage.dc.html`, `About.dc.html`, `Approach.dc.html`, `Stories.dc.html`,
`Story.dc.html`) as a Vite + React 18 + TypeScript app with Tailwind CSS,
built with Atomic Design, client-side routing (react-router-dom), and a
custom EN/FR/DE i18n layer.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # serve the dist/ build locally
npm run lint      # ESLint
npm run format    # Prettier --write
```

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

## Internationalization (EN / FR / DE)

The language switcher in the header (homepage `Navbar` and the subpages'
`PageHeader`) is fully functional — it drives a `LanguageProvider`
(`src/i18n/LanguageContext.tsx`) that holds the active language in React
context, persists it to `localStorage` (`vvp-language`), and keeps
`<html lang>` in sync.

- `src/i18n/types.ts` — the `Dictionary` interface: every piece of copy on
  the site (nav labels, section text, form labels/errors, the three stories,
  the one full story narrative, approach principles, per-page SEO
  title/description) as a typed shape.
- `src/i18n/dictionaries/{en,fr,de}.ts` — one full implementation of
  `Dictionary` per language. These are self-contained (structural fields
  like `slug`/`texture`/`aspect` are duplicated across languages rather than
  cross-referenced) so each file is simple to read and edit independently.
- Components call `const { t } = useLanguage()` and read straight off `t`
  (e.g. `t.hero.titleLine1`, `t.stories`, `t.storyDetails['anna-elias']`) —
  no key lookups or fallback strings scattered through JSX.
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

**Known limitation**: only the `anna-elias` story has full narrative content
in any language (see "Story detail content" below) — that's a property of
the source design, not of the translation layer, and applies identically in
all three languages.

## Folder structure

```
public/
  favicon.svg          # brand monogram
  image-1.jpg           # placeholder — hero background / poster
  image-2.jpg           # placeholder — secondary photo
  robots.txt, sitemap.xml, _redirects
src/
  i18n/
    types.ts              Language type + Dictionary interface
    LanguageContext.tsx    LanguageProvider + useLanguage() hook
    dictionaries/
      en.ts, fr.ts, de.ts  one full Dictionary implementation per language
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
    usePingPongVideo.ts    forward→reverse (rAF, never negative
                           playbackRate) video loop, falls back to a
                           static image on error or prefers-reduced-motion
    useInViewReveal.ts     IntersectionObserver fade-up trigger
    useDocumentMeta.ts     sets document.title + meta description per route
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
- `image-1.jpg` / `image-2.jpg` are generated placeholder JPGs (not real
  photography) so the app runs and the LCP hero image has something to
  render. Replace them with real photos before shipping.
- `transition.mp4` is **not included** — no video asset existed in the
  design. Drop a real ping-pong-ready MP4 at `public/transition.mp4` and the
  hero will pick it up automatically; until then, `usePingPongVideo` detects
  the missing/broken source and falls back to the static poster image, exactly
  per the ping-pong hook spec.
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
- **Story detail content**: `Story.dc.html` in the source is a single static
  page (Anna & Elias, Lauterbrunnen) — every "VIEW STORY" link across the
  whole site (homepage teaser, the full Stories collection) points to that
  same file; there's no per-story detail content for Sofia & Marco or
  Léa & Julian in the export. `StoryPage` is built to be properly
  data-driven per slug (`t.storyDetails` in each language dictionary), but
  only `anna-elias` has content — any other slug falls back to it, which
  reproduces the source design's actual behavior exactly while leaving the
  route structure ready for when the other two stories are written.
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

- Replace `image-1.jpg`, `image-2.jpg`, add `transition.mp4`, and swap the
  remaining `TextureBlock`/`TextureBanner` placeholders for real photography.
- Write real detail content for the Sofia & Marco and Léa & Julian stories,
  in all three languages (add entries to `storyDetails` in each of
  `src/i18n/dictionaries/{en,fr,de}.ts`).
- Update the canonical domain in `index.html` (`og:url`, `twitter:image`,
  JSON-LD) and in `public/robots.txt` / `public/sitemap.xml`.
- Configure your static host's SPA rewrite (see Routes above).
- Wire the contact form's `handleSubmit` to a real backend/email endpoint —
  it currently only validates client-side and shows a success state.
