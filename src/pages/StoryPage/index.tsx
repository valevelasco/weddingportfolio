import { useParams } from 'react-router-dom';
import { StoryHeader } from '@/components/organisms/StoryHeader';
import { StoryIntro } from '@/components/organisms/StoryIntro';
import { TextureBanner } from '@/components/molecules/TextureBanner';
import { StoryImageGrid } from '@/components/organisms/StoryImageGrid';
import { StoryNoteSection } from '@/components/organisms/StoryNoteSection';
import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';
import { useStory } from '@/hooks/useStory';

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const { story, loading } = useStory(slug);

  useDocumentMeta({
    title: story
      ? t.storyPage.seoTitleTemplate(story.title, story.location)
      : t.stories.notFoundTitle,
    description: story
      ? t.storyPage.seoDescriptionTemplate(story.location)
      : t.stories.notFoundBody,
  });

  if (loading) {
    return (
      <div className="bg-cream text-ink font-sans">
        <StoryHeader />
        <p className="text-body-base text-muted text-center py-section px-[6vw] m-0">
          {t.stories.loading}
        </p>
        <SimpleFooter />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="bg-cream text-ink font-sans">
        <StoryHeader />
        <main className="py-section px-[6vw] text-center flex flex-col items-center gap-6">
          <SectionTitle as="h1" size="h2-md">
            {t.stories.notFoundTitle}
          </SectionTitle>
          <p className="text-body-base text-muted m-0">{t.stories.notFoundBody}</p>
          <Button as="link" to="/stories" variant="solid-dark">
            {t.storyPage.backToAllStories}
          </Button>
        </main>
        <SimpleFooter />
      </div>
    );
  }

  return (
    <div className="bg-cream text-ink font-sans">
      <StoryHeader />
      <main>
        <StoryIntro title={story.title} location={story.location} intro={story.intro} />

        <TextureBanner
          image={story.heroImage}
          fallbackLabel={t.stories.photoComingSoon}
          aspect="16/9"
        />

        <section className="py-[min(10vw,110px)] px-[6vw]">
          <StoryImageGrid
            images={[story.detailImages?.[0], story.detailImages?.[1]]}
            aspect="3/4"
            fallbackLabel={t.stories.photoComingSoon}
          />
        </section>

        <TextureBanner
          image={story.midImage}
          fallbackLabel={t.stories.photoComingSoon}
          aspect="21/9"
        />

        <StoryNoteSection title={story.ceremonyTitle} text={story.ceremonyText} />

        <section className="px-[6vw] pb-[min(10vw,110px)]">
          <StoryImageGrid
            images={[story.momentImages?.[0], story.momentImages?.[1], story.momentImages?.[2]]}
            aspect="4/5"
            fallbackLabel={t.stories.photoComingSoon}
          />
        </section>

        <StoryNoteSection title={story.candidTitle} text={story.candidText} paddingTop={false} />

        <TextureBanner
          image={story.closingImage}
          fallbackLabel={t.stories.photoComingSoon}
          aspect="4/5"
          maxHeightPx={820}
          borderBottom={false}
        />

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
