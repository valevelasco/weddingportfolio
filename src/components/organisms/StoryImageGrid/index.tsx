import { TextureBlock } from '@/components/atoms/TextureBlock';
import type { StoryPlaceholder } from '@/data/content';

interface StoryImageGridProps {
  items: StoryPlaceholder[];
  aspect?: string;
}

export function StoryImageGrid({ items, aspect = '4/5' }: StoryImageGridProps) {
  const colsClass = items.length >= 3 ? 'min-[760px]:grid-cols-3' : 'min-[760px]:grid-cols-2';

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-6 min-[760px]:gap-8`}>
      {items.map((item) => (
        <TextureBlock key={item.label} label={item.label} aspect={aspect} texture={item.texture} />
      ))}
    </div>
  );
}
