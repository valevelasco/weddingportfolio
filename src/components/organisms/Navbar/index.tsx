import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/atoms/Logo';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import { MobileMenu } from '@/components/molecules/MobileMenu';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { navLinks } from '@/data/navigation';

export function Navbar() {
  const { scrolled } = useScrollProgress(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  const solid = scrolled || mobileOpen;
  const headerBgClass = solid ? 'bg-cream border-b border-border' : 'bg-transparent border-b border-transparent';
  const textClass = solid ? 'text-ink' : 'text-cream';
  const inquireClass = solid
    ? 'border border-ink text-ink hover:bg-ink hover:text-cream'
    : 'border border-cream text-cream hover:bg-cream hover:text-ink';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-[6vw] py-[20px] lg:py-[26px] transition-all duration-400 ${headerBgClass}`}
      >
        <Logo tone={solid ? 'dark' : 'light'} />

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-[18px] flex-nowrap whitespace-nowrap min-w-0"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-nav transition-colors duration-400 ${textClass}`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher current={lang} onSelect={setLang} scrolled={solid} />
          <a
            href="#contact"
            className={`text-nav px-[18px] py-2.5 transition-all duration-400 flex-shrink-0 ${inquireClass}`}
          >
            INQUIRE
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className={`lg:hidden bg-transparent border-0 cursor-pointer p-2 transition-colors duration-400 ${textClass}`}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
