export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
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
