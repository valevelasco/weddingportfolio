import { Reveal } from '@/components/atoms/Reveal';
import { StoryCard } from '@/components/molecules/StoryCard';
import { useLanguage } from '@/i18n/LanguageContext';

export function StoriesGrid() {
  const { t } = useLanguage();

  return (
    <section className="px-[6vw] pb-section grid grid-cols-1 min-[620px]:grid-cols-2 min-[860px]:grid-cols-3 gap-8 min-[620px]:gap-8 min-[860px]:gap-10">
      {t.stories.map((story, i) => (
        <Reveal key={story.slug} delayMs={i * 100}>
          <StoryCard story={story} viewStoryLabel={t.home.portfolio.viewStory} />
        </Reveal>
      ))}
    </section>
  );
}
