import { Link } from 'react-router-dom';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import type { Story } from '@/i18n/types';

interface StoryCardProps {
  story: Story;
  viewStoryLabel: string;
}

export function StoryCard({ story, viewStoryLabel }: StoryCardProps) {
  return (
    <Link to={`/stories/${story.slug}`} className="group flex flex-col gap-5 text-ink">
      <div className="overflow-hidden aspect-[4/5]">
        {story.image ? (
          <img
            src={story.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
          />
        ) : (
          <TextureBlock
            label={story.imgLabel}
            aspect="4/5"
            texture={story.texture}
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
