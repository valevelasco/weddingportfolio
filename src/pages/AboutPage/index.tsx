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
        <div className="max-w-[600px] mx-auto my-section px-[6vw]">
          <div className="aspect-[4/5] border border-border overflow-hidden">
            <img
              src="/images/about-page/banner/portrait-studio.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <ClosingCTA title={t.aboutPage.closingTitle} />
      </main>
      <SimpleFooter />
    </div>
  );
}
