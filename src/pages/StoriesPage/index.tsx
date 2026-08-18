import { PageHeader } from '@/components/organisms/PageHeader';
import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { StoriesGrid } from '@/components/organisms/StoriesGrid';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';

export function StoriesPage() {
  const { t } = useLanguage();

  useDocumentMeta({
    title: t.storiesPage.seoTitle,
    description: t.storiesPage.seoDescription,
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main>
        <Reveal className="pt-[min(10vw,100px)] pb-14 px-[6vw] text-center">
          <Eyebrow className="mb-3.5">{t.storiesPage.eyebrow}</Eyebrow>
          <SectionTitle size="h2-xl">{t.storiesPage.title}</SectionTitle>
        </Reveal>
        <StoriesGrid />
      </main>
      <SimpleFooter />
    </div>
  );
}
