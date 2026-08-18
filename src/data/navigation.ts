/**
 * Structural nav data only — hrefs/routes are language-independent.
 * Labels come from the active Dictionary (src/i18n) via `id`.
 */
export type NavId = 'home' | 'portfolio' | 'about' | 'experience' | 'contact';

/** In-page anchors, used by the homepage's own Navbar/Footer/MobileMenu. */
export const navHrefs: { id: NavId; href: string }[] = [
  { id: 'home', href: '#home' },
  { id: 'portfolio', href: '#portfolio' },
  { id: 'about', href: '#about' },
  { id: 'experience', href: '#experience' },
  { id: 'contact', href: '#contact' },
];

export interface SiteNavRoute {
  id: NavId;
  to: string;
  /** Matched against the current pathname to underline the active link. */
  matchPath?: string;
}

/** Cross-page routes, used by PageHeader on About/Approach/Stories/Story. */
export const siteNavRoutes: SiteNavRoute[] = [
  { id: 'home', to: '/', matchPath: '/' },
  { id: 'portfolio', to: '/stories', matchPath: '/stories' },
  { id: 'about', to: '/about', matchPath: '/about' },
  { id: 'experience', to: '/#experience' },
  { id: 'contact', to: '/#contact' },
];

export type LanguageCode = 'EN' | 'FR' | 'DE';

export const languageCodes: LanguageCode[] = ['EN', 'FR', 'DE'];

export type SocialId = 'instagram' | 'pinterest' | 'email';

export const socialHrefs: { id: SocialId; href: string }[] = [
  { id: 'instagram', href: '#' },
  { id: 'pinterest', href: '#' },
  { id: 'email', href: 'mailto:hello@valeriavelasco.com' },
];
