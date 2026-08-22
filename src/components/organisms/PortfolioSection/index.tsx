import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { StoryCard } from '@/components/molecules/StoryCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { useStories } from '@/hooks/useStories';

export function PortfolioSection() {
  const { t } = useLanguage();
  const { stories, loading } = useStories();
  const teaserStories = stories.slice(0, 2);

  return (
    <section id="portfolio" className="px-[6vw] pb-section">
      <Reveal className="text-center mb-16">
        <Eyebrow className="mb-3.5">{t.home.portfolio.eyebrow}</Eyebrow>
        <SectionTitle size="h2-xl">{t.home.portfolio.title}</SectionTitle>
      </Reveal>

      {!loading && teaserStories.length === 0 ? (
        <p className="text-body-base text-muted text-center m-0">{t.stories.comingSoon}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          {teaserStories.map((story, i) => (
            <Reveal key={story._id} delayMs={i * 120}>
              <StoryCard
                story={story}
                viewStoryLabel={t.home.portfolio.viewStory}
                photoComingSoonLabel={t.stories.photoComingSoon}
              />
            </Reveal>
          ))}
        </div>
      )}

      {teaserStories.length > 0 && (
        <div className="text-center mt-16">
          <TextLink to="/stories" className="mx-auto">
            {t.home.portfolio.viewAll}
          </TextLink>
        </div>
      )}
    </section>
  );
}
