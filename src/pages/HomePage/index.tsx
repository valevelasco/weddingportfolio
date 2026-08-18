import { LandingTemplate } from '@/components/templates/LandingTemplate';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();

  useDocumentMeta({
    title: t.home.seoTitle,
    description: t.home.seoDescription,
  });

  return <LandingTemplate />;
}
