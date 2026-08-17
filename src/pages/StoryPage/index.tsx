import { useParams } from 'react-router-dom';
import { StoryHeader } from '@/components/organisms/StoryHeader';
import { StoryIntro } from '@/components/organisms/StoryIntro';
import { TextureBanner } from '@/components/molecules/TextureBanner';
import { StoryImageGrid } from '@/components/organisms/StoryImageGrid';
import { StoryNoteSection } from '@/components/organisms/StoryNoteSection';
import { Reveal } from '@/components/atoms/Reveal';
import { Button } from '@/components/atoms/Button';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { storyDetails } from '@/data/content';

const fallbackDetail = storyDetails['anna-elias'];

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = (slug && storyDetails[slug]) || fallbackDetail;

  useDocumentMeta({
    title: `${detail.title} — ${detail.location} | Valeria Velasco Photography`,
    description: `A wedding story from ${detail.location} — captured by Valeria Velasco Photography.`,
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <StoryHeader />
      <main>
        <StoryIntro detail={detail} />

        <TextureBanner {...detail.heroBanner} />

        <section className="py-[min(10vw,110px)] px-[6vw]">
          <StoryImageGrid items={detail.detailPair} aspect="3/4" />
        </section>

        <TextureBanner {...detail.midBanner} />

        <StoryNoteSection note={detail.ceremonyNote} />

        <section className="px-[6vw] pb-[min(10vw,110px)]">
          <StoryImageGrid items={detail.momentsTrio} aspect="4/5" />
        </section>

        <StoryNoteSection note={detail.candidNote} paddingTop={false} />

        <TextureBanner {...detail.closingBanner} borderBottom={false} />

        <Reveal className="py-[min(10vw,110px)] px-[6vw] text-center">
          <Button as="link" to="/stories" variant="outline-dark">
            BACK TO ALL STORIES
          </Button>
        </Reveal>
      </main>
      <SimpleFooter />
    </div>
  );
}
