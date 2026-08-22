import type { SanityImageSource } from '@sanity/image-url';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import { urlFor } from '@/lib/sanity';

interface StoryImageGridProps {
  /** Fixed-length slots (2 or 3) — a missing slot renders the placeholder. */
  images: (SanityImageSource | undefined)[];
  aspect?: string;
  fallbackLabel: string;
}

export function StoryImageGrid({ images, aspect = '4/5', fallbackLabel }: StoryImageGridProps) {
  const colsClass = images.length >= 3 ? 'min-[760px]:grid-cols-3' : 'min-[760px]:grid-cols-2';

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-6 min-[760px]:gap-8`}>
      {images.map((image, i) => {
        const src = urlFor(image, 800);
        if (src) {
          return (
            <div
              key={i}
              className="relative border border-border overflow-hidden"
              style={{ aspectRatio: aspect }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          );
        }
        return <TextureBlock key={i} label={fallbackLabel} aspect={aspect} />;
      })}
    </div>
  );
}
