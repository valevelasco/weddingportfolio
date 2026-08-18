import type { StoryPlaceholder } from '@/i18n/types';

interface TextureBannerProps extends StoryPlaceholder {
  maxHeightPx?: number;
  borderBottom?: boolean;
}

const textureClass: Record<StoryPlaceholder['texture'], string> = {
  a: 'texture-a',
  'a-fine': 'texture-a-fine',
  b: 'texture-b',
};

export function TextureBanner({
  label,
  aspect,
  texture,
  maxHeightPx,
  borderBottom = true,
}: TextureBannerProps) {
  return (
    <div
      className={`w-full border-t ${borderBottom ? 'border-b' : ''} border-border flex items-end px-[6vw] py-5 ${textureClass[texture]}`}
      style={{ aspectRatio: aspect, maxHeight: maxHeightPx }}
      role="img"
      aria-label={label}
    >
      <span className="text-label text-muted tracking-tightish">{label}</span>
    </div>
  );
}
