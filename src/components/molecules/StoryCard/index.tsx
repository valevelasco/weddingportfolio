import { Link } from 'react-router-dom';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import { urlFor } from '@/lib/sanity';
import type { SanityStory } from '@/types/story';

interface StoryCardProps {
  story: SanityStory;
  viewStoryLabel: string;
  photoComingSoonLabel: string;
}

export function StoryCard({ story, viewStoryLabel, photoComingSoonLabel }: StoryCardProps) {
  const coverSrc = urlFor(story.coverImage, 800);

  return (
    <Link to={`/stories/${story.slug}`} className="group flex flex-col gap-5 text-ink">
      <div className="overflow-hidden aspect-[4/5]">
        {coverSrc ? (
          <img
            src={coverSrc}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <TextureBlock
            label={photoComingSoonLabel}
            aspect="4/5"
            className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div>
        <p className="text-nav tracking-wide2 text-muted m-0 mb-2">{story.location}</p>
        <h3 className="font-serif font-medium text-h3 text-ink m-0 mb-2.5">{story.title}</h3>
        <span className="text-nav tracking-tightish border-b border-ink pb-0.5">
          {viewStoryLabel}
        </span>
      </div>
    </Link>
  );
}
