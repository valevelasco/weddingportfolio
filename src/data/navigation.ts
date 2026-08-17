export interface NavLink {
  label: string;
  href: string;
}

/** In-page anchors, used by the homepage's own Navbar/Footer/MobileMenu. */
export const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export interface SiteNavLink {
  label: string;
  to: string;
  /** Matched against the current pathname to underline the active link. */
  matchPath?: string;
}

/** Cross-page routes, used by PageHeader on About/Approach/Stories/Story. */
export const siteNavLinks: SiteNavLink[] = [
  { label: 'HOME', to: '/', matchPath: '/' },
  { label: 'PORTFOLIO', to: '/stories', matchPath: '/stories' },
  { label: 'ABOUT', to: '/about', matchPath: '/about' },
  { label: 'EXPERIENCE', to: '/#experience' },
  { label: 'CONTACT', to: '/#contact' },
];

export interface LanguageOption {
  code: string;
}

export const languages: LanguageOption[] = [{ code: 'EN' }, { code: 'FR' }, { code: 'DE' }];

export interface SocialLink {
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'PINTEREST', href: '#' },
  { label: 'EMAIL', href: 'mailto:hello@valeriavelasco.com' },
];
