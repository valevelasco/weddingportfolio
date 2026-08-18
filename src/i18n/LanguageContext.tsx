import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Dictionary, Language } from './types';
import { en } from './dictionaries/en';
import { fr } from './dictionaries/fr';
import { de } from './dictionaries/de';

const dictionaries: Record<Language, Dictionary> = { en, fr, de };
const STORAGE_KEY = 'vvp-language';

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'fr' || value === 'de';
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) return stored;
  return 'en';
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- co-locating the hook with its provider is the standard context pattern
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
