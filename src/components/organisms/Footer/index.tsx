import { navHrefs, socialHrefs } from '@/data/navigation';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = navHrefs.map(({ id, href }) => ({ label: t.nav[id], href }));
  const socials = [
    { label: t.footer.instagram, href: socialHrefs[0].href },
    { label: t.footer.pinterest, href: socialHrefs[1].href },
    { label: 'EMAIL', href: socialHrefs[2].href },
  ];

  return (
    <footer className="pt-16 px-[6vw] pb-10 border-t border-border flex flex-col gap-10 bg-cream">
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex flex-col">
          <span className="font-serif text-logo-lg text-ink">VALERIA VELASCO</span>
          <span className="text-micro text-muted mt-1">PHOTOGRAPHY</span>
        </div>

        <nav aria-label="Footer" className="flex gap-7 flex-wrap">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-cta text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="text-cta text-ink">
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <p className="text-nav text-muted m-0 border-t border-border pt-6">
        &copy; {year} Valeria Velasco Photography. {t.footer.rights}
      </p>
    </footer>
  );
}
