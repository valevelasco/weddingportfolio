export type Language = 'en' | 'fr' | 'de';

export interface ExperiencePhase {
  name: string;
  tagline: string;
  body: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  names: string;
  image?: string;
}

export interface ApproachPrinciple {
  step: string;
  title: string;
  text: string;
}

export interface Dictionary {
  nav: {
    home: string;
    portfolio: string;
    about: string;
    experience: string;
    contact: string;
    inquire: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
    homeAriaLabel: string;
  };
  footer: {
    instagram: string;
    pinterest: string;
    rights: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    placeholderLabel: string;
    viewPortfolio: string;
    getInTouch: string;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    about: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      body: string;
      cta: string;
      placeholderLabel: string;
    };
    portfolio: {
      eyebrow: string;
      title: string;
      viewAll: string;
      viewStory: string;
    };
    philosophy: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      body: string;
      cta: string;
      placeholderLabel: string;
    };
    experience: {
      title: string;
      subtitle: string;
      phases: ExperiencePhase[];
    };
    testimonials: {
      eyebrow: string;
      title: string;
      items: Testimonial[];
    };
    contact: {
      title: string;
      subtitle: string;
      thankYou: string;
      labels: {
        firstName: string;
        partnerName: string;
        email: string;
        weddingDate: string;
        weddingLocation: string;
        guests: string;
        howFound: string;
        message: string;
      };
      errors: {
        firstName: string;
        email: string;
        weddingLocation: string;
        message: string;
      };
      submit: string;
    };
  };
  stories: {
    /** Shown in place of any story photo that hasn't been uploaded yet. */
    photoComingSoon: string;
    /** Shown instead of the stories grid when there are no published stories yet. */
    comingSoon: string;
    /** Shown when a story slug doesn't match any published story. */
    notFoundTitle: string;
    notFoundBody: string;
    loading: string;
  };
  aboutPage: {
    seoTitle: string;
    seoDescription: string;
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      body: string;
      placeholderLabel: string;
    };
    story: {
      eyebrow: string;
      leadParagraph: string;
      body: string;
    };
    bannerLabel: string;
    closingTitle: string;
  };
  approachPage: {
    seoTitle: string;
    seoDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      placeholderLabel: string;
    };
    story: {
      leadParagraph: string;
      body1: string;
      body2: string;
    };
    principles: ApproachPrinciple[];
  };
  storiesPage: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
  };
  storyPage: {
    seoTitleTemplate: (title: string, location: string) => string;
    seoDescriptionTemplate: (location: string) => string;
    backToAllStories: string;
  };
  notFoundPage: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    body: string;
    backHome: string;
  };
  common: {
    getInTouch: string;
    allStories: string;
  };
}
