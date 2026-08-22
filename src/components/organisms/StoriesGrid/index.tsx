import { Reveal } from '@/components/atoms/Reveal';
import { StoryCard } from '@/components/molecules/StoryCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { useStories } from '@/hooks/useStories';

export function StoriesGrid() {
  const { t } = useLanguage();
  const { stories, loading } = useStories();

  if (!loading && stories.length === 0) {
    return (
      <p className="text-body-base text-muted text-center px-[6vw] pb-section m-0">
        {t.stories.comingSoon}
      </p>
    );
  }

  return (
    <section className="px-[6vw] pb-section grid grid-cols-1 min-[620px]:grid-cols-2 min-[860px]:grid-cols-3 gap-8 min-[620px]:gap-8 min-[860px]:gap-10">
      {stories.map((story, i) => (
        <Reveal key={story._id} delayMs={i * 100}>
          <StoryCard
            story={story}
            viewStoryLabel={t.home.portfolio.viewStory}
            photoComingSoonLabel={t.stories.photoComingSoon}
          />
        </Reveal>
      ))}
    </section>
  );
}
