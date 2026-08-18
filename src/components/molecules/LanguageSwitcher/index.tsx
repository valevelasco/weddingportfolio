import { languageCodes, type LanguageCode } from '@/data/navigation';
import type { Language } from '@/i18n/types';

interface LanguageSwitcherProps {
  current: Language;
  onSelect: (language: Language) => void;
  scrolled: boolean;
  ariaLabel: string;
}

const codeToLanguage: Record<LanguageCode, Language> = { EN: 'en', FR: 'fr', DE: 'de' };

export function LanguageSwitcher({ current, onSelect, scrolled, ariaLabel }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-1.5 text-label" aria-label={ariaLabel}>
      {languageCodes.map((code) => {
        const value = codeToLanguage[code];
        const active = value === current;
        const color = active
          ? scrolled
            ? 'text-ink'
            : 'text-cream'
          : scrolled
            ? 'text-muted'
            : 'text-cream/60';

        return (
          <button
            key={code}
            type="button"
            onClick={() => onSelect(value)}
            aria-pressed={active}
            className={`bg-transparent border-0 p-0 cursor-pointer font-sans text-label transition-colors duration-300 ${color}`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
