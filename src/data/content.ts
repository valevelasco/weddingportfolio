export interface Story {
  slug: string;
  location: string;
  title: string;
  imgLabel: string;
  texture: 'a' | 'a-fine' | 'b';
}

/**
 * The full stories collection (Stories page). The homepage teaser shows
 * only the first two, mirroring the source design exactly.
 */
export const stories: Story[] = [
  {
    slug: 'anna-elias',
    location: 'LAUTERBRUNNEN, SWITZERLAND',
    title: 'Anna & Elias',
    imgLabel: 'HORIZONTAL — CEREMONY, VALLEY BACKDROP',
    texture: 'b',
  },
  {
    slug: 'sofia-marco',
    location: 'LAKE GARDA, ITALY',
    title: 'Sofia & Marco',
    imgLabel: 'VERTICAL — COUPLE PORTRAIT, GOLDEN HOUR',
    texture: 'a-fine',
  },
  {
    slug: 'lea-julian',
    location: 'GSTAAD, SWITZERLAND',
    title: 'Léa & Julian',
    imgLabel: 'HORIZONTAL — RECEPTION, MOUNTAIN CHALET',
    texture: 'b',
  },
];

export interface ExperiencePhase {
  name: string;
  items: string[];
}

export const experiencePhases: ExperiencePhase[] = [
  {
    name: 'BEFORE',
    items: ['Planning', 'Timeline guidance', 'Consultation', 'Getting to know your story'],
  },
  {
    name: 'DURING',
    items: ['Natural direction', 'Candid moments', 'Editorial portraits', 'Attention to detail'],
  },
  {
    name: 'AFTER',
    items: ['Carefully edited photographs', 'Private online gallery', 'Print and album options'],
  },
];

export interface Testimonial {
  quote: string;
  names: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Valeria noticed things we didn't even know were happening — the quiet ones between the big moments.",
    names: 'ANNA & ELIAS · LAUTERBRUNNEN',
  },
  {
    quote: 'She felt like a friend with a camera, not a photographer directing a shoot.',
    names: 'SOFIA & MARCO · LAKE GARDA',
  },
];

export interface ApproachPrinciple {
  step: string;
  title: string;
  text: string;
}

export const approachPrinciples: ApproachPrinciple[] = [
  {
    step: '01',
    title: 'OBSERVE',
    text: "I photograph what's actually happening, not a version staged for the camera.",
  },
  {
    step: '02',
    title: 'DIRECT LIGHTLY',
    text: 'A gentle nudge here and there — never a pose held for more than a few seconds.',
  },
  {
    step: '03',
    title: 'EDIT WITH RESTRAINT',
    text: 'Consistent, true-to-light color — never a heavy filter that dates the photographs.',
  },
];

export interface StoryPlaceholder {
  label: string;
  aspect: string;
  texture: 'a' | 'a-fine' | 'b';
}

export interface StoryNote {
  eyebrow: string;
  text: string;
}

export interface StoryDetail {
  slug: string;
  location: string;
  title: string;
  intro: string;
  heroBanner: StoryPlaceholder;
  detailPair: StoryPlaceholder[];
  midBanner: StoryPlaceholder;
  ceremonyNote: StoryNote;
  momentsTrio: StoryPlaceholder[];
  candidNote: StoryNote;
  closingBanner: StoryPlaceholder & { maxHeightPx: number };
}

/**
 * Full narrative detail content only exists for one story in the source
 * design (Story.dc.html is a single static page, and every "VIEW STORY"
 * link across the site points to that same file — there's no per-story
 * detail content for Sofia & Marco or Léa & Julian). StoryPage falls back
 * to this entry for any slug that isn't here, matching that real behavior
 * while keeping the route structure ready for when more stories are written.
 */
export const storyDetails: Record<string, StoryDetail> = {
  'anna-elias': {
    slug: 'anna-elias',
    location: 'LAUTERBRUNNEN, SWITZERLAND',
    title: 'Anna & Elias',
    intro:
      "They chose the valley for its quiet — a small ceremony at the foot of the waterfalls, family gathered close, and an afternoon that moved at its own pace. What stayed with me were the pauses: Anna's father before the first look, the walk down between two rows of wildflowers, the long light after dinner.",
    heroBanner: {
      label: 'FULL-WIDTH HERO — CEREMONY WIDE SHOT, VALLEY BACKDROP',
      aspect: '16/9',
      texture: 'b',
    },
    detailPair: [
      { label: 'VERTICAL — DETAILS, RINGS & INVITATION SUITE', aspect: '3/4', texture: 'b' },
      { label: 'VERTICAL — BRIDE GETTING READY, WINDOW LIGHT', aspect: '3/4', texture: 'a-fine' },
    ],
    midBanner: { label: 'FULL-WIDTH — WALKING DOWN THE AISLE', aspect: '21/9', texture: 'b' },
    ceremonyNote: {
      eyebrow: 'CEREMONY',
      text: 'A short reading, two rings passed between shaking hands, and the kind of silence that only happens once. No program, no music — just the sound of the river below.',
    },
    momentsTrio: [
      { label: 'COUPLE PORTRAIT — GOLDEN HOUR', aspect: '4/5', texture: 'b' },
      { label: 'FAMILY & FRIENDS — GROUP GATHERING', aspect: '4/5', texture: 'a-fine' },
      { label: 'RECEPTION — FIRST DANCE, CANDLELIGHT', aspect: '4/5', texture: 'b' },
    ],
    candidNote: {
      eyebrow: 'A CANDID MOMENT',
      text: "Between toasts, Elias's grandmother pulled Anna aside and said something that made them both cry laughing. Nobody remembers the joke. Everyone remembers the sound.",
    },
    closingBanner: {
      label: 'CLOSING PHOTOGRAPH — LEAVING THE VALLEY, NIGHT',
      aspect: '4/5',
      texture: 'b',
      maxHeightPx: 820,
    },
  },
};
