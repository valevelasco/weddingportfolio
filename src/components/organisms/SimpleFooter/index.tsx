import { useLanguage } from '@/i18n/LanguageContext';

export function SimpleFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-[6vw] border-t border-border text-center">
      <p className="text-nav text-muted m-0">
        &copy; {year} Valeria Velasco Photography. {t.footer.rights}
      </p>
    </footer>
  );
}
