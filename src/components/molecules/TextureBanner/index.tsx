import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity';

interface TextureBannerProps {
  image?: SanityImageSource;
  fallbackLabel: string;
  aspect: string;
  maxHeightPx?: number;
  borderBottom?: boolean;
  width?: number;
}

export function TextureBanner({
  image,
  fallbackLabel,
  aspect,
  maxHeightPx,
  borderBottom = true,
  width = 1600,
}: TextureBannerProps) {
  const src = urlFor(image, width);
  const borderClass = borderBottom ? 'border-b' : '';

  if (src) {
    return (
      <div
        className={`w-full border-t ${borderClass} border-border overflow-hidden`}
        style={{ aspectRatio: aspect, maxHeight: maxHeightPx }}
      >
        <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`w-full border-t ${borderClass} border-border flex items-end px-[6vw] py-5 texture-b`}
      style={{ aspectRatio: aspect, maxHeight: maxHeightPx }}
      role="img"
      aria-label={fallbackLabel}
    >
      <span className="text-label text-muted tracking-tightish">{fallbackLabel}</span>
    </div>
  );
}
