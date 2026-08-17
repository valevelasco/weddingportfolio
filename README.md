# Valeria Velasco Photography

Wedding photography site, implemented from the Claude Design export
(`Homepage.dc.html`, `About.dc.html`, `Approach.dc.html`, `Stories.dc.html`,
`Story.dc.html`) as a Vite + React 18 + TypeScript app with Tailwind CSS,
built with Atomic Design and client-side routing (react-router-dom).

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

## Folder structure

```
public/
  favicon.svg          # brand monogram
  image-1.jpg           # placeholder — hero background / poster
  image-2.jpg           # placeholder — secondary photo
  robots.txt, sitemap.xml, _redirects
src/
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
    navigation.ts          navLinks (homepage in-page anchors), siteNavLinks
                           (cross-page routes for subpages), languages, socials
    content.ts              stories, storyDetails, experience phases,
                           testimonials, approach principles
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
  once a real domain is available. It only covers the homepage document,
  since this is a CSR-only SPA (no SSR/prerendering) — per-route OG/JSON-LD
  for `/about` etc. would need a prerender step, which is out of scope for
  the current stack.
- `html lang="en"` (not `es`) because all page copy in the design is in
  English — the `lang` attribute must match actual content for AA
  accessibility/SEO.
- The contact form's grid is `1fr` on mobile and `1fr 1fr` from the `sm`
  breakpoint up. The source design fixed it at two columns unconditionally,
  which breaks unusably on narrow phones — this is an intentional deviation
  from literal fidelity, made to satisfy the mobile-first requirement.
- **Story detail content**: `Story.dc.html` in the source is a single static
  page (Anna & Elias, Lauterbrunnen) — every "VIEW STORY" link across the
  whole site (homepage teaser, the full Stories collection) points to that
  same file; there's no per-story detail content for Sofia & Marco or
  Léa & Julian in the export. `StoryPage` is built to be properly
  data-driven per slug (`storyDetails` in `src/data/content.ts`), but only
  `anna-elias` has content — any other slug falls back to it, which
  reproduces the source design's actual behavior exactly while leaving the
  route structure ready for when the other two stories are written.
- Subpages use their own `PageHeader` (static, not fixed/scroll-aware) and
  `SimpleFooter` (copyright line only), matching the source design's simpler
  chrome on About/Approach/Stories/Story versus the homepage's animated,
  fixed `Navbar` and full `Footer`.
- A few of the source design's inline `@media (min-width: 760px)` /
  `860px` / `620px` breakpoints (About/Approach/Stories/Story grids) don't
  match the homepage's single 1080px nav breakpoint — rather than force them
  onto one shared token, they're reproduced faithfully with Tailwind
  arbitrary variants (`min-[760px]:`, etc.) so each page's actual responsive
  behavior from the export is preserved.

## Before deploying

- Replace `image-1.jpg`, `image-2.jpg`, add `transition.mp4`, and swap the
  remaining `TextureBlock`/`TextureBanner` placeholders for real photography.
- Write real detail content for the Sofia & Marco and Léa & Julian stories
  (add entries to `storyDetails` in `src/data/content.ts`).
- Update the canonical domain in `index.html` (`og:url`, `twitter:image`,
  JSON-LD) and in `public/robots.txt` / `public/sitemap.xml`.
- Configure your static host's SPA rewrite (see Routes above).
- Wire the contact form's `handleSubmit` to a real backend/email endpoint —
  it currently only validates client-side and shows a success state.
