import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { MobileMenu } from '@/components/molecules/MobileMenu';
import { siteNavLinks } from '@/data/navigation';

/**
 * Static (non-fixed) header used by About/Approach/Stories/Story — the
 * source design gives these a plain in-flow header, distinct from the
 * homepage's fixed, scroll-aware Navbar.
 */
export function PageHeader() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-[6vw] py-[26px] border-b border-border">
        <Logo tone="dark" to="/" />

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 flex-nowrap whitespace-nowrap"
        >
          {siteNavLinks.map((link) => {
            const active = link.matchPath !== undefined && pathname === link.matchPath;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`text-cta text-ink pb-0.5 ${active ? 'border-b border-ink' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="lg:hidden bg-transparent border-0 cursor-pointer p-2 text-ink"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={siteNavLinks.map((link) => ({ label: link.label, href: link.to }))}
        inquireHref="/#contact"
      />
    </>
  );
}
