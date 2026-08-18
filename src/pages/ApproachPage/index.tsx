import { PageHeader } from '@/components/organisms/PageHeader';
import { ApproachHero } from '@/components/organisms/ApproachHero';
import { ApproachStory } from '@/components/organisms/ApproachStory';
import { ApproachPrinciples } from '@/components/organisms/ApproachPrinciples';
import { ClosingCTA } from '@/components/organisms/ClosingCTA';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';

export function ApproachPage() {
  const { t } = useLanguage();

  useDocumentMeta({
    title: t.approachPage.seoTitle,
    description: t.approachPage.seoDescription,
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main>
        <ApproachHero />
        <ApproachStory />
        <ApproachPrinciples />
        <ClosingCTA />
      </main>
      <SimpleFooter />
    </div>
  );
}
