import { PageHeader } from '@/components/organisms/PageHeader';
import { AboutHero } from '@/components/organisms/AboutHero';
import { AboutStory } from '@/components/organisms/AboutStory';
import { ClosingCTA } from '@/components/organisms/ClosingCTA';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  useDocumentMeta({
    title: t.aboutPage.seoTitle,
    description: t.aboutPage.seoDescription,
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <div className="w-full border-t border-b border-border overflow-hidden" style={{ aspectRatio: '21/9' }}>
          <img
            src="/images/about-page/banner/banner.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <ClosingCTA title={t.aboutPage.closingTitle} />
      </main>
      <SimpleFooter />
    </div>
  );
}
