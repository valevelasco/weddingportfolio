# Valeria Velasco Photography — Homepage

Wedding photography landing page, implemented from the Claude Design export
(`Homepage.dc.html`) as a Vite + React 18 + TypeScript app with Tailwind CSS,
built with Atomic Design.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # serve the dist/ build locally
npm run lint      # ESLint
npm run format    # Prettier --write
```

## Folder structure

```
public/
  favicon.svg          # brand monogram
  image-1.jpg          # placeholder — hero background / poster
  image-2.jpg          # placeholder — secondary photo
  robots.txt
  sitemap.xml
src/
  components/
    atoms/              Button, Logo, Eyebrow, SectionTitle, TextLink,
                         TextureBlock, Reveal
    molecules/           FormField, LanguageSwitcher, MobileMenu,
                         StoryCard, TestimonialCard, ExperiencePhaseCard
    organisms/           Navbar, Hero, AboutSection, PortfolioSection,
                         PhilosophySection, ExperienceSection,
                         TestimonialsSection, ContactSection, Footer
    templates/
      LandingTemplate/   composes all organisms in order
  pages/
    HomePage/            renders LandingTemplate
  hooks/
    useScrollProgress.ts   scroll position / "scrolled past threshold"
    usePingPongVideo.ts    forward→reverse (rAF, never negative
                           playbackRate) video loop, falls back to a
                           static image on error or prefers-reduced-motion
    useInViewReveal.ts     IntersectionObserver fade-up trigger
  data/
    navigation.ts         nav links, languages, socials
    content.ts             stories, experience phases, testimonials
  styles/
    index.css              Tailwind layers, global resets, texture utilities
  App.tsx, main.tsx, vite-env.d.ts
tailwind.config.ts        design tokens (colors, type scale, tracking, screens)
```

## Notes on the source design

- The design's placeholder photo blocks (diagonal-stripe pattern + small
  caption like "VERTICAL PORTRAIT — PHOTOGRAPHER, NATURAL LIGHT") are kept
  as-is per the fidelity requirement — no real photography assets were part
  of the design export, so `TextureBlock` renders them faithfully as
  placeholders. Swap `TextureBlock` usages for real `<img>`s once photos are
  available.
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
  once a real domain is available.
- `html lang="en"` (not `es`) because all page copy in the design is in
  English — the `lang` attribute must match actual content for AA
  accessibility/SEO.
- The contact form's grid is `1fr` on mobile and `1fr 1fr` from the `sm`
  breakpoint up. The source design fixed it at two columns unconditionally,
  which breaks unusably on narrow phones — this is the one intentional
  deviation from literal fidelity, made to satisfy the mobile-first
  requirement.

## Before deploying

- Replace `image-1.jpg`, `image-2.jpg`, add `transition.mp4`, and swap the
  remaining `TextureBlock` placeholders for real photography.
- Update the canonical domain in `index.html` (`og:url`, `twitter:image`,
  JSON-LD) and in `public/robots.txt` / `public/sitemap.xml`.
- Wire the contact form's `handleSubmit` to a real backend/email endpoint —
  it currently only validates client-side and shows a success state.
