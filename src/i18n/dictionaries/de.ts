import type { Dictionary } from '../types';

export const de: Dictionary = {
  nav: {
    home: 'START',
    portfolio: 'PORTFOLIO',
    about: 'ÜBER MICH',
    experience: 'ABLAUF',
    contact: 'KONTAKT',
    inquire: 'ANFRAGEN',
    languageLabel: 'Sprache',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    homeAriaLabel: 'Valeria Velasco Photography — Startseite',
  },
  footer: {
    instagram: 'INSTAGRAM',
    pinterest: 'PINTEREST',
    rights: 'Alle Rechte vorbehalten.',
  },
  hero: {
    eyebrow: 'HOCHZEITSFOTOGRAFIN MIT SITZ IN DER SCHWEIZ',
    titleLine1: 'Zeitlose Fotografien',
    titleLine2: 'für moderne Liebesgeschichten.',
    placeholderLabel: 'HERO-FOTOGRAFIE — VOLLFLÄCHIG, QUERFORMAT, EDITORIALER PAARMOMENT',
    viewPortfolio: 'PORTFOLIO ANSEHEN',
    getInTouch: 'KONTAKT AUFNEHMEN',
  },
  home: {
    seoTitle: 'Valeria Velasco Photography | Hochzeitsfotografin in der Schweiz',
    seoDescription:
      'Elegante und zeitlose Hochzeitsfotografie in der Schweiz und in ganz Europa. Ich halte authentische Momente, intime Details und schöne Feiern fest.',
    about: {
      eyebrow: 'HALLO, ICH BIN VALERIA',
      titleLine1: 'Ein kolumbianisches Herz,',
      titleLine2: 'ein Schweizer Zuhause.',
      body: 'Ich bin Hochzeitsfotografin mit einer Vorliebe für stille Momente, echte Emotionen und schöne Orte. Kolumbianisch von Geburt, Schweizerin durch mein Zuhause, arbeite ich mit Paaren aus der Schweiz und der ganzen Welt und schaffe Fotografien, die authentisch, elegant und zeitlos wirken.',
      cta: 'MEHR ÜBER MICH',
      placeholderLabel: 'VERTIKALES PORTRÄT — FOTOGRAFIN, NATÜRLICHES LICHT',
    },
    portfolio: {
      eyebrow: 'EINIGE MEINER JÜNGSTEN HOCHZEITEN',
      title: 'Geschichten',
      viewAll: 'ALLE GESCHICHTEN ANSEHEN',
      viewStory: 'GESCHICHTE ANSEHEN',
    },
    philosophy: {
      eyebrow: 'SO SEHE ICH ES',
      titleLine1: 'Es geht nicht nur',
      titleLine2: 'um die Fotos.',
      body: 'Es geht darum, wie Sie sich gefühlt haben, mit wem Sie zusammen waren, und um die Momente, die Sie für den Rest Ihres Lebens noch einmal erleben möchten.',
      cta: 'MEIN ANSATZ',
      placeholderLabel: 'UNAUFDRINGLICHES DETAIL — HÄNDE, SCHLEIER ODER EIN RUHIGER GANG ZU ZWEIT',
    },
    experience: {
      title: 'Der Ablauf',
      subtitle: 'Ein ruhiger, durchdachter Ansatz für die Fotografie Ihrer Hochzeit.',
      phases: [
        {
          name: 'VORHER',
          items: [
            'Planung',
            'Begleitung beim Zeitplan',
            'Beratungsgespräch',
            'Ihre Geschichte kennenlernen',
          ],
        },
        {
          name: 'WÄHREND',
          items: [
            'Natürliche Anleitung',
            'Spontane Momente',
            'Editoriale Porträts',
            'Blick fürs Detail',
          ],
        },
        {
          name: 'DANACH',
          items: [
            'Sorgfältig bearbeitete Fotografien',
            'Private Online-Galerie',
            'Print- und Album-Optionen',
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: 'LIEBE WORTE',
      title: 'Von Paaren, die ich fotografiert habe',
      items: [
        {
          quote:
            'Valeria hat Dinge bemerkt, von denen wir gar nicht wussten, dass sie passierten — die stillen Momente zwischen den großen.',
          names: 'ANNA & ELIAS · LAUTERBRUNNEN',
        },
        {
          quote:
            'Sie fühlte sich an wie eine Freundin mit Kamera, nicht wie eine Fotografin, die ein Shooting leitet.',
          names: 'SOFIA & MARCO · GARDASEE',
        },
      ],
    },
    contact: {
      title: 'Lassen Sie uns in Kontakt treten',
      subtitle: 'Ich würde gerne mehr über Ihre Hochzeit erfahren.',
      thankYou: 'Vielen Dank für Ihre Nachricht. Ich melde mich bald bei Ihnen.',
      labels: {
        firstName: 'VORNAME',
        partnerName: 'NAME DES PARTNERS / DER PARTNERIN',
        email: 'E-MAIL',
        weddingDate: 'HOCHZEITSDATUM',
        weddingLocation: 'HOCHZEITSORT',
        guests: 'ANZAHL DER GÄSTE',
        howFound: 'WIE HABEN SIE MICH GEFUNDEN?',
        message: 'ERZÄHLEN SIE MIR VON IHRER HOCHZEIT...',
      },
      errors: {
        firstName: 'Bitte geben Sie Ihren Vornamen an.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        weddingLocation: 'Bitte geben Sie den Ort an.',
        message: 'Bitte erzählen Sie mir etwas über Ihren Tag.',
      },
      submit: 'NACHRICHT SENDEN',
    },
  },
  stories: [
    {
      slug: 'anna-elias',
      location: 'LAUTERBRUNNEN, SCHWEIZ',
      title: 'Anna & Elias',
      imgLabel: 'QUERFORMAT — ZEREMONIE, TALKULISSE',
      texture: 'b',
    },
    {
      slug: 'sofia-marco',
      location: 'GARDASEE, ITALIEN',
      title: 'Sofia & Marco',
      imgLabel: 'HOCHFORMAT — PAARPORTRÄT, GOLDENE STUNDE',
      texture: 'a-fine',
    },
    {
      slug: 'lea-julian',
      location: 'GSTAAD, SCHWEIZ',
      title: 'Léa & Julian',
      imgLabel: 'QUERFORMAT — EMPFANG, BERGCHALET',
      texture: 'b',
    },
  ],
  storyDetails: {
    'anna-elias': {
      slug: 'anna-elias',
      location: 'LAUTERBRUNNEN, SCHWEIZ',
      title: 'Anna & Elias',
      intro:
        'Sie wählten das Tal wegen seiner Stille — eine kleine Zeremonie am Fuß der Wasserfälle, die Familie nah beieinander, und ein Nachmittag, der sein eigenes Tempo fand. Was mir geblieben ist, sind die Pausen: Annas Vater vor dem ersten Blick, der Gang zwischen zwei Reihen wilder Blumen, das lange Licht nach dem Abendessen.',
      heroBanner: {
        label: 'VOLLBREITE — WEITE EINSTELLUNG DER ZEREMONIE, TALKULISSE',
        aspect: '16/9',
        texture: 'b',
      },
      detailPair: [
        {
          label: 'HOCHFORMAT — DETAILS, RINGE UND EINLADUNGSSET',
          aspect: '3/4',
          texture: 'b',
        },
        {
          label: 'HOCHFORMAT — BRAUT BEIM VORBEREITEN, FENSTERLICHT',
          aspect: '3/4',
          texture: 'a-fine',
        },
      ],
      midBanner: {
        label: 'VOLLBREITE — DER GANG ZUM ALTAR',
        aspect: '21/9',
        texture: 'b',
      },
      ceremonyNote: {
        eyebrow: 'ZEREMONIE',
        text: 'Eine kurze Lesung, zwei Ringe, die zwischen zitternden Händen weitergereicht wurden, und die Art von Stille, die es nur einmal gibt. Kein Programm, keine Musik — nur das Rauschen des Flusses unten im Tal.',
      },
      momentsTrio: [
        { label: 'PAARPORTRÄT — GOLDENE STUNDE', aspect: '4/5', texture: 'b' },
        { label: 'FAMILIE UND FREUNDE — GRUPPENBILD', aspect: '4/5', texture: 'a-fine' },
        { label: 'EMPFANG — ERÖFFNUNGSTANZ, KERZENLICHT', aspect: '4/5', texture: 'b' },
      ],
      candidNote: {
        eyebrow: 'EIN UNVERSTELLTER MOMENT',
        text: "Zwischen zwei Trinksprüchen nahm Elias' Großmutter Anna beiseite und sagte etwas, das die beiden vor Lachen zum Weinen brachte. Niemand erinnert sich an den Witz. Alle erinnern sich an das Lachen.",
      },
      closingBanner: {
        label: 'ABSCHLUSSFOTOGRAFIE — AUFBRUCH AUS DEM TAL, BEI NACHT',
        aspect: '4/5',
        texture: 'b',
        maxHeightPx: 820,
      },
    },
  },
  aboutPage: {
    seoTitle: 'Über Valeria | Valeria Velasco Photography',
    seoDescription:
      'Kolumbianisch von Geburt, Schweizerin durch ihr Zuhause — lernen Sie die Fotografin hinter Valeria Velasco Photography kennen.',
    hero: {
      eyebrow: 'HALLO, ICH BIN VALERIA',
      titleLine1: 'Ein kolumbianisches Herz,',
      titleLine2: 'ein Schweizer Zuhause.',
      body: 'Ich bin in Bogotá aufgewachsen, umgeben von großen Familientreffen, langen Mittagessen und viel Lärm — der guten Art. Vor fast zehn Jahren bin ich in die Schweiz gezogen, und irgendwo zwischen den Bergen und der Stille habe ich die Art gefunden, wie ich Hochzeiten fotografieren möchte: unposiert, geduldig, nah an den Menschen vor mir.',
      placeholderLabel: 'PORTRÄT — VALERIA VOR ORT',
    },
    story: {
      eyebrow: 'WIE ICH ARBEITE',
      leadParagraph:
        'Ich gebe wenig Regie. Am liebsten vergessen Sie den größten Teil des Tages, dass ich da bin — im Gespräch mit Ihrer Großmutter, beim Lachen mit Ihrer besten Freundin, in stiller Nähe zu Ihrem Partner vor Beginn der Zeremonie.',
      body: 'Ein paar Porträts, ja — aber der Rest ist Dokumentation. Ich fotografiere wo immer möglich bei natürlichem Licht, halte mich selbst im Hintergrund und bearbeite mit leichter Hand, damit die Fotografien noch aussehen wie der Tag selbst und nicht wie ein Filter. Die meisten meiner Paare leben in der Schweiz oder reisen für eine Destination-Hochzeit an; für beide bin ich in ganz Europa unterwegs.',
    },
    bannerLabel: 'STUDIO-/REISEBILD — SCHWEIZER LANDSCHAFT ODER ARBEITSPLATZ',
    closingTitle: 'Sitz in der Schweiz. Tätig in ganz Europa.',
  },
  approachPage: {
    seoTitle: 'Mein Ansatz | Valeria Velasco Photography',
    seoDescription:
      'Wie Valeria Velasco an die Hochzeitsfotografie herangeht — dokumentarisch, unposiert und einfühlsam für den Moment.',
    hero: {
      eyebrow: 'SO SEHE ICH ES',
      title: 'Es geht nicht nur um die Fotos.',
      body: 'Es geht darum, wie Sie sich gefühlt haben, mit wem Sie zusammen waren, und um die Momente, die Sie für den Rest Ihres Lebens noch einmal erleben möchten.',
      placeholderLabel: 'UNAUFDRINGLICHES DETAIL — HÄNDE, SCHLEIER ODER EIN RUHIGER GANG ZU ZWEIT',
    },
    story: {
      leadParagraph:
        'Ich fotografiere in erster Linie dokumentarisch. Das bedeutet weniger Anweisungen und mehr Beobachten — auf den Moment warten, statt ihn zu erzeugen.',
      body1:
        'Wir verbringen eine kurze Zeit mit Porträts — genug für ein paar Fotografien, die Sie sich ausdrucken möchten — und den Rest des Tages bleibe ich in der Nähe, aber im Hintergrund. Das Vorbereiten, die Zeremonie, die Zwischenmomente, die Reden, das Tanzen: All das gehört zur Geschichte, nicht nur die Höhepunkte.',
      body2:
        'Vor der Hochzeit besprechen wir Ihren Tag im Detail, damit ich weiß, wo ich sein muss und wann. Am Tag selbst müssen Sie sich nicht um mich kümmern — ich kümmere mich selbst um mich.',
    },
    principles: [
      {
        step: '01',
        title: 'BEOBACHTEN',
        text: 'Ich fotografiere, was tatsächlich geschieht, nicht eine für die Kamera inszenierte Version.',
      },
      {
        step: '02',
        title: 'SANFT ANLEITEN',
        text: 'Hier und da ein sanfter Impuls — nie eine Pose, die länger als ein paar Sekunden gehalten wird.',
      },
      {
        step: '03',
        title: 'ZURÜCKHALTEND BEARBEITEN',
        text: 'Konsistente, lichtechte Farben — nie ein starker Filter, der die Fotografien datiert.',
      },
    ],
  },
  storiesPage: {
    seoTitle: 'Portfolio — Alle Geschichten | Valeria Velasco Photography',
    seoDescription:
      'Eine Sammlung von Hochzeitsgeschichten, fotografiert in der Schweiz und in ganz Europa von Valeria Velasco Photography.',
    eyebrow: 'DIE GESAMTE SAMMLUNG',
    title: 'Geschichten',
  },
  storyPage: {
    seoTitleTemplate: (title, location) => `${title} — ${location} | Valeria Velasco Photography`,
    seoDescriptionTemplate: (location) =>
      `Eine Hochzeitsgeschichte aus ${location} — fotografiert von Valeria Velasco Photography.`,
    backToAllStories: 'ZURÜCK ZU ALLEN GESCHICHTEN',
  },
  notFoundPage: {
    seoTitle: 'Seite nicht gefunden | Valeria Velasco Photography',
    seoDescription: 'Die gesuchte Seite konnte nicht gefunden werden.',
    title: 'Seite nicht gefunden',
    body: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    backHome: 'ZURÜCK ZUR STARTSEITE',
  },
  common: {
    getInTouch: 'KONTAKT AUFNEHMEN',
    allStories: '← ALLE GESCHICHTEN',
  },
};
