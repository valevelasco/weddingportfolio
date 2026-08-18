import type { Dictionary } from '../types';

export const en: Dictionary = {
  nav: {
    home: 'HOME',
    portfolio: 'PORTFOLIO',
    about: 'ABOUT',
    experience: 'EXPERIENCE',
    contact: 'CONTACT',
    inquire: 'INQUIRE',
    languageLabel: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeAriaLabel: 'Valeria Velasco Photography — home',
  },
  footer: {
    instagram: 'INSTAGRAM',
    pinterest: 'PINTEREST',
    rights: 'All rights reserved.',
  },
  hero: {
    eyebrow: 'WEDDING PHOTOGRAPHER BASED IN SWITZERLAND',
    titleLine1: 'Timeless photographs',
    titleLine2: 'for modern love stories.',
    placeholderLabel: 'HERO PHOTOGRAPH — FULL BLEED, HORIZONTAL, EDITORIAL COUPLE MOMENT',
    viewPortfolio: 'VIEW PORTFOLIO',
    getInTouch: 'GET IN TOUCH',
  },
  home: {
    seoTitle: 'Valeria Velasco Photography | Wedding Photographer in Switzerland',
    seoDescription:
      'Elegant and timeless wedding photography in Switzerland and across Europe. Capturing authentic moments, intimate details and beautiful celebrations.',
    about: {
      eyebrow: "HELLO, I'M VALERIA",
      titleLine1: 'A Colombian heart,',
      titleLine2: 'a Swiss home.',
      body: "I'm a wedding photographer with a love for quiet moments, real emotions and beautiful places. Colombian by birth, Swiss by home, I work with couples from Switzerland and around the world, creating photographs that feel authentic, elegant and timeless.",
      cta: 'MORE ABOUT ME',
      placeholderLabel: 'VERTICAL PORTRAIT — PHOTOGRAPHER, NATURAL LIGHT',
    },
    portfolio: {
      eyebrow: 'A FEW OF MY RECENT WEDDINGS',
      title: 'Stories',
      viewAll: 'VIEW ALL STORIES',
      viewStory: 'VIEW STORY',
    },
    philosophy: {
      eyebrow: 'THE WAY I SEE IT',
      titleLine1: "It's not just",
      titleLine2: 'about the photos.',
      body: "It's about how you felt, who you were with, and the moments you'll want to relive for the rest of your life.",
      cta: 'MY APPROACH',
      placeholderLabel: 'CANDID DETAIL — HANDS, VEIL, OR QUIET WALK TOGETHER',
    },
    experience: {
      title: 'The Experience',
      subtitle: 'A calm, thoughtful approach to photographing your wedding.',
      phases: [
        {
          name: 'BEFORE',
          items: ['Planning', 'Timeline guidance', 'Consultation', 'Getting to know your story'],
        },
        {
          name: 'DURING',
          items: [
            'Natural direction',
            'Candid moments',
            'Editorial portraits',
            'Attention to detail',
          ],
        },
        {
          name: 'AFTER',
          items: [
            'Carefully edited photographs',
            'Private online gallery',
            'Print and album options',
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: 'KIND WORDS',
      title: "From couples I've photographed",
      items: [
        {
          quote:
            "Valeria noticed things we didn't even know were happening — the quiet ones between the big moments.",
          names: 'ANNA & ELIAS · LAUTERBRUNNEN',
        },
        {
          quote: 'She felt like a friend with a camera, not a photographer directing a shoot.',
          names: 'SOFIA & MARCO · LAKE GARDA',
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'd love to hear about your wedding.",
      thankYou: "Thank you for reaching out. I'll be in touch soon.",
      labels: {
        firstName: 'FIRST NAME',
        partnerName: "PARTNER'S NAME",
        email: 'EMAIL',
        weddingDate: 'WEDDING DATE',
        weddingLocation: 'WEDDING LOCATION',
        guests: 'NUMBER OF GUESTS',
        howFound: 'HOW DID YOU FIND ME?',
        message: 'TELL ME ABOUT YOUR WEDDING...',
      },
      errors: {
        firstName: 'Please share your first name.',
        email: 'Please enter a valid email.',
        weddingLocation: 'Please share the location.',
        message: 'Please tell me a little about your day.',
      },
      submit: 'SEND MESSAGE',
    },
  },
  stories: [
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
  ],
  storyDetails: {
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
        {
          label: 'VERTICAL — BRIDE GETTING READY, WINDOW LIGHT',
          aspect: '3/4',
          texture: 'a-fine',
        },
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
  },
  aboutPage: {
    seoTitle: 'About Valeria | Valeria Velasco Photography',
    seoDescription:
      'Colombian by birth, Swiss by home — get to know the photographer behind Valeria Velasco Photography.',
    hero: {
      eyebrow: "HELLO, I'M VALERIA",
      titleLine1: 'A Colombian heart,',
      titleLine2: 'a Swiss home.',
      body: 'I grew up in Bogotá, surrounded by big family gatherings, long lunches and a lot of noise — the good kind. I moved to Switzerland almost a decade ago, and somewhere between the mountains and the quiet, I found the way I wanted to photograph weddings: unposed, patient, close to the people in front of me.',
      placeholderLabel: 'PORTRAIT — VALERIA ON LOCATION',
    },
    story: {
      eyebrow: 'HOW I WORK',
      leadParagraph:
        "I don't direct much. I'd rather you forget I'm there for most of the day — talking to your grandmother, laughing with your best friend, standing quietly with your partner before the ceremony starts.",
      body: 'A handful of portraits, yes — but the rest is documentation. I shoot in natural light wherever possible, keep my presence small, and edit with a light hand so the photographs still feel like the day looked, not like a filter. Most of my couples are based in Switzerland or arriving here for a destination wedding; I travel across Europe for both.',
    },
    bannerLabel: 'STUDIO / TRAVEL IMAGE — SWISS LANDSCAPE OR WORKSPACE',
    closingTitle: 'Based in Switzerland. Working across Europe.',
  },
  approachPage: {
    seoTitle: 'My Approach | Valeria Velasco Photography',
    seoDescription:
      'How Valeria Velasco approaches wedding photography — documentary-first, unposed, and attentive to feeling.',
    hero: {
      eyebrow: 'THE WAY I SEE IT',
      title: "It's not just about the photos.",
      body: "It's about how you felt, who you were with, and the moments you'll want to relive for the rest of your life.",
      placeholderLabel: 'CANDID DETAIL — HANDS, VEIL, OR QUIET WALK TOGETHER',
    },
    story: {
      leadParagraph:
        'I photograph documentary-first. That means fewer instructions, more watching — waiting for the moment rather than manufacturing it.',
      body1:
        "We'll spend a short amount of time on portraits — enough for a handful of photographs you'll want to print — and the rest of the day I stay close but out of the way. Getting ready, the ceremony, the in-between hours, the toasts, the dancing: all of it is part of the story, not just the highlights.",
      body2:
        "Before the wedding, we talk through your day in detail so I know where to be and when. On the day, you won't be managing me — I'll be managing myself.",
    },
    principles: [
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
    ],
  },
  storiesPage: {
    seoTitle: 'Portfolio — All Stories | Valeria Velasco Photography',
    seoDescription:
      'A collection of wedding stories photographed across Switzerland and Europe by Valeria Velasco Photography.',
    eyebrow: 'THE FULL COLLECTION',
    title: 'Stories',
  },
  storyPage: {
    seoTitleTemplate: (title, location) =>
      `${title} — ${location} | Valeria Velasco Photography`,
    seoDescriptionTemplate: (location) =>
      `A wedding story from ${location} — captured by Valeria Velasco Photography.`,
    backToAllStories: 'BACK TO ALL STORIES',
  },
  notFoundPage: {
    seoTitle: 'Page Not Found | Valeria Velasco Photography',
    seoDescription: 'The page you were looking for could not be found.',
    title: 'Page not found',
    body: "The page you were looking for doesn't exist or has moved.",
    backHome: 'BACK TO HOME',
  },
  common: {
    getInTouch: 'GET IN TOUCH',
    allStories: '← ALL STORIES',
  },
};
