import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { StoryCard } from '@/components/molecules/StoryCard';
import { stories } from '@/data/content';

const teaserStories = stories.slice(0, 2);

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-[6vw] pb-section">
      <Reveal className="text-center mb-16">
        <Eyebrow className="mb-3.5">A FEW OF MY RECENT WEDDINGS</Eyebrow>
        <SectionTitle size="h2-xl">Stories</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {teaserStories.map((story, i) => (
          <Reveal key={story.slug} delayMs={i * 120}>
            <StoryCard story={story} />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-16">
        <TextLink to="/stories" className="mx-auto">
          VIEW ALL STORIES
        </TextLink>
      </div>
    </section>
  );
}
