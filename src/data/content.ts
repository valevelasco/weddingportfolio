export interface Story {
  location: string;
  title: string;
  imgLabel: string;
  href: string;
}

export const stories: Story[] = [
  {
    location: 'LAUTERBRUNNEN, SWITZERLAND',
    title: 'Anna & Elias',
    imgLabel: 'HORIZONTAL — CEREMONY, VALLEY BACKDROP',
    href: 'Story.dc.html',
  },
  {
    location: 'LAKE GARDA, ITALY',
    title: 'Sofia & Marco',
    imgLabel: 'VERTICAL — COUPLE PORTRAIT, GOLDEN HOUR',
    href: 'Story.dc.html',
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
