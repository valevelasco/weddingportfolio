import { defineField, defineType } from 'sanity';

/**
 * One real wedding, shown as a card on the homepage + Stories page and as
 * its own detail page. All content is written once (no per-language
 * fields) and displayed as-is regardless of which site language the
 * visitor has selected — the site's fixed chrome (nav, buttons, form
 * labels, etc.) stays professionally translated separately in the app's
 * own EN/FR/DE dictionaries.
 *
 * Fields map directly onto the detail page's fixed layout:
 * intro -> hero banner -> two detail images -> mid banner -> ceremony
 * note -> three moment images -> candid note -> closing image.
 * Anything left empty falls back to the site's placeholder graphic, so a
 * story can be published with just text and photos added later.
 */
export default defineType({
  name: 'story',
  title: 'Wedding Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Couple names',
      description: 'e.g. "Anna & Elias"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      description: 'Generated from the couple names — this becomes the story\'s web address.',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'e.g. "Lauterbrunnen, Switzerland"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover photo',
      description: 'Shown on the homepage teaser and the Stories page card.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      description: 'The opening text at the top of the story page.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Full-width hero photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'detailImages',
      title: 'Two detail photos',
      description: 'Shown side by side (e.g. rings/invitations, getting ready).',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'midImage',
      title: 'Second full-width photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ceremonyTitle',
      title: 'First note — small heading',
      description: 'e.g. "Ceremony"',
      type: 'string',
    }),
    defineField({
      name: 'ceremonyText',
      title: 'First note — text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'momentImages',
      title: 'Three moment photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'candidTitle',
      title: 'Second note — small heading',
      description: 'e.g. "A Candid Moment"',
      type: 'string',
    }),
    defineField({
      name: 'candidText',
      title: 'Second note — text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'closingImage',
      title: 'Closing photo',
      description: 'The final full-bleed image at the bottom of the story.',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'coverImage' },
  },
});
