import { PageHeader } from '@/components/organisms/PageHeader';
import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { StoriesGrid } from '@/components/organisms/StoriesGrid';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function StoriesPage() {
  useDocumentMeta({
    title: 'Portfolio — All Stories | Valeria Velasco Photography',
    description:
      'A collection of wedding stories photographed across Switzerland and Europe by Valeria Velasco Photography.',
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main>
        <Reveal className="pt-[min(10vw,100px)] pb-14 px-[6vw] text-center">
          <Eyebrow className="mb-3.5">THE FULL COLLECTION</Eyebrow>
          <SectionTitle size="h2-xl">Stories</SectionTitle>
        </Reveal>
        <StoriesGrid />
      </main>
      <SimpleFooter />
    </div>
  );
}
