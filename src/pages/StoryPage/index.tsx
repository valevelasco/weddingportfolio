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
import { useLanguage } from '@/i18n/LanguageContext';

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const fallbackDetail = t.storyDetails['anna-elias'];
  const detail = (slug && t.storyDetails[slug]) || fallbackDetail;

  useDocumentMeta({
    title: t.storyPage.seoTitleTemplate(detail.title, detail.location),
    description: t.storyPage.seoDescriptionTemplate(detail.location),
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
            {t.storyPage.backToAllStories}
          </Button>
        </Reveal>
      </main>
      <SimpleFooter />
    </div>
  );
}
