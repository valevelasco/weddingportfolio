import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import { MobileMenu } from '@/components/molecules/MobileMenu';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteNavRoutes } from '@/data/navigation';

/**
 * Static (non-fixed) header used by About/Approach/Stories/Story — the
 * source design gives these a plain in-flow header, distinct from the
 * homepage's fixed, scroll-aware Navbar.
 */
export function PageHeader() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = siteNavRoutes.map((link) => ({ ...link, label: t.nav[link.id] }));

  return (
    <>
      <header className="flex items-center justify-between px-[6vw] py-[26px] border-b border-border">
        <Logo tone="dark" to="/" ariaLabel={t.nav.homeAriaLabel} />

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 flex-nowrap whitespace-nowrap"
        >
          {links.map((link) => {
            const active = link.matchPath !== undefined && pathname === link.matchPath;
            return (
              <Link
                key={link.id}
                to={link.to}
                className={`text-cta text-ink pb-0.5 ${active ? 'border-b border-ink' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <LanguageSwitcher
            current={language}
            onSelect={setLanguage}
            scrolled
            ariaLabel={t.nav.languageLabel}
          />
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label={t.nav.openMenu}
          aria-expanded={mobileOpen}
          className="lg:hidden bg-transparent border-0 cursor-pointer p-2 text-ink"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links.map((link) => ({ label: link.label, href: link.to }))}
        inquireHref="/#contact"
        inquireLabel={t.nav.inquire}
        closeLabel={t.nav.closeMenu}
      />
    </>
  );
}
