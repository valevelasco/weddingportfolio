import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production';

/** True once VITE_SANITY_PROJECT_ID is set — lets components fail gracefully before then. */
export const isSanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Builds an optimized Sanity CDN image URL, or null if there's no image / no client. */
export function urlFor(source: SanityImageSource | undefined | null, width?: number) {
  if (!builder || !source) return null;
  const img = builder.image(source).auto('format').fit('max');
  return (width ? img.width(width) : img).url();
}
