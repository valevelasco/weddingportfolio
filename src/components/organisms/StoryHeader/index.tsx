import { Logo } from '@/components/atoms/Logo';
import { TextLink } from '@/components/atoms/TextLink';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageContext';

export function StoryHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="flex items-center justify-between px-[6vw] py-[26px] border-b border-border">
      <Logo tone="dark" to="/" ariaLabel={t.nav.homeAriaLabel} />
      <div className="flex items-center gap-6">
        <LanguageSwitcher
          current={language}
          onSelect={setLanguage}
          scrolled
          ariaLabel={t.nav.languageLabel}
        />
        <TextLink to="/stories">{t.common.allStories}</TextLink>
      </div>
    </header>
  );
}
