import type { SanityImageSource } from '@sanity/image-url';

/**
 * Shape of a `story` document from Sanity (see studio/schemaTypes/story.ts).
 * Content is written once by the photographer and shown as-is in every
 * site language — only the app's own chrome (nav, buttons, labels) is
 * translated via src/i18n.
 */
export interface SanityStory {
  _id: string;
  title: string;
  slug: string;
  location: string;
  coverImage?: SanityImageSource;
  intro?: string;
  heroImage?: SanityImageSource;
  detailImages?: SanityImageSource[];
  midImage?: SanityImageSource;
  ceremonyTitle?: string;
  ceremonyText?: string;
  momentImages?: SanityImageSource[];
  candidTitle?: string;
  candidText?: string;
  closingImage?: SanityImageSource;
}

export const storyProjection = `{
  _id,
  title,
  "slug": slug.current,
  location,
  coverImage,
  intro,
  heroImage,
  detailImages,
  midImage,
  ceremonyTitle,
  ceremonyText,
  momentImages,
  candidTitle,
  candidText,
  closingImage
}`;
