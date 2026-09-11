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
        <div className="w-full border-t border-b border-border overflow-hidden aspect-[4/5] md:aspect-[21/9]">
          <picture className="block w-full h-full">
            <source media="(max-width: 767px)" srcSet="/images/about-page/banner/banner-mobile.jpg" />
            <img
              src="/images/about-page/banner/banner.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <ClosingCTA title={t.aboutPage.closingTitle} />
      </main>
      <SimpleFooter />
    </div>
  );
}
