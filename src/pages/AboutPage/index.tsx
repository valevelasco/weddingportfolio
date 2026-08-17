import { PageHeader } from '@/components/organisms/PageHeader';
import { AboutHero } from '@/components/organisms/AboutHero';
import { AboutStory } from '@/components/organisms/AboutStory';
import { TextureBanner } from '@/components/molecules/TextureBanner';
import { ClosingCTA } from '@/components/organisms/ClosingCTA';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function AboutPage() {
  useDocumentMeta({
    title: 'About Valeria | Valeria Velasco Photography',
    description:
      'Colombian by birth, Swiss by home — get to know the photographer behind Valeria Velasco Photography.',
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <TextureBanner
          label="STUDIO / TRAVEL IMAGE — SWISS LANDSCAPE OR WORKSPACE"
          aspect="21/9"
          texture="b"
        />
        <ClosingCTA title="Based in Switzerland. Working across Europe." />
      </main>
      <SimpleFooter />
    </div>
  );
}
