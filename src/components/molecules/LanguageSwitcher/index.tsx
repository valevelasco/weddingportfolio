import { languages } from '@/data/navigation';

interface LanguageSwitcherProps {
  current: string;
  onSelect: (code: string) => void;
  scrolled: boolean;
}

export function LanguageSwitcher({ current, onSelect, scrolled }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-1.5 text-label" aria-label="Language">
      {languages.map(({ code }) => {
        const active = code === current;
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
            onClick={() => onSelect(code)}
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
