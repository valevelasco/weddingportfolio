import { PageHeader } from '@/components/organisms/PageHeader';
import { ApproachHero } from '@/components/organisms/ApproachHero';
import { ApproachStory } from '@/components/organisms/ApproachStory';
import { ApproachPrinciples } from '@/components/organisms/ApproachPrinciples';
import { ClosingCTA } from '@/components/organisms/ClosingCTA';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function ApproachPage() {
  useDocumentMeta({
    title: 'My Approach | Valeria Velasco Photography',
    description:
      "How Valeria Velasco approaches wedding photography — documentary-first, unposed, and attentive to feeling.",
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
