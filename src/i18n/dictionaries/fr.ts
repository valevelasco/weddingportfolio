import type { Dictionary } from '../types';

export const fr: Dictionary = {
  nav: {
    home: 'ACCUEIL',
    portfolio: 'PORTFOLIO',
    about: 'À PROPOS',
    experience: 'EXPÉRIENCE',
    contact: 'CONTACT',
    inquire: 'ME CONTACTER',
    languageLabel: 'Langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    homeAriaLabel: 'Valeria Velasco Photography — accueil',
  },
  footer: {
    instagram: 'INSTAGRAM',
    pinterest: 'PINTEREST',
    rights: 'Tous droits réservés.',
  },
  hero: {
    eyebrow: 'PHOTOGRAPHE DE MARIAGE BASÉE EN SUISSE',
    titleLine1: 'Des photographies intemporelles',
    titleLine2: "pour des histoires d'amour modernes.",
    placeholderLabel: 'PHOTO HÉRO — PLEINE PAGE, HORIZONTALE, MOMENT ÉDITORIAL DE COUPLE',
    viewPortfolio: 'VOIR LE PORTFOLIO',
    getInTouch: 'PRENDRE CONTACT',
  },
  home: {
    seoTitle: 'Valeria Velasco Photography | Photographe de mariage en Suisse',
    seoDescription:
      "Photographie de mariage élégante et intemporelle en Suisse et à travers l'Europe. Je capture des moments authentiques, des détails intimes et de belles célébrations.",
    about: {
      eyebrow: 'BONJOUR, JE SUIS VALERIA',
      titleLine1: 'Un cœur colombien,',
      titleLine2: 'un foyer suisse.',
      body: "Je suis photographe de mariage, passionnée par les moments calmes, les émotions vraies et les beaux endroits. Colombienne de naissance, suisse d'adoption, je travaille avec des couples de Suisse et du monde entier, en créant des photographies authentiques, élégantes et intemporelles.",
      cta: 'EN SAVOIR PLUS SUR MOI',
      placeholderLabel: 'PORTRAIT VERTICAL — PHOTOGRAPHE, LUMIÈRE NATURELLE',
    },
    portfolio: {
      eyebrow: 'QUELQUES-UNS DE MES MARIAGES RÉCENTS',
      title: 'Histoires',
      viewAll: 'VOIR TOUTES LES HISTOIRES',
      viewStory: "VOIR L'HISTOIRE",
    },
    philosophy: {
      eyebrow: 'MA VISION DES CHOSES',
      titleLine1: "Ce n'est pas seulement",
      titleLine2: 'une question de photos.',
      body: "C'est une question de ce que vous avez ressenti, de qui était à vos côtés, et des moments que vous voudrez revivre pour le reste de votre vie.",
      cta: 'MON APPROCHE',
      placeholderLabel: 'DÉTAIL CANDIDE — MAINS, VOILE, OU MARCHE TRANQUILLE À DEUX',
    },
    experience: {
      title: "L'Expérience",
      subtitle: 'Une approche calme et réfléchie pour photographier votre mariage.',
      phases: [
        {
          name: 'AVANT',
          items: [
            'Planification',
            'Conseils sur le déroulé',
            'Consultation',
            'Faire connaissance avec votre histoire',
          ],
        },
        {
          name: 'PENDANT',
          items: [
            'Direction naturelle',
            'Moments spontanés',
            'Portraits éditoriaux',
            'Attention aux détails',
          ],
        },
        {
          name: 'APRÈS',
          items: [
            'Photographies soigneusement retouchées',
            'Galerie privée en ligne',
            "Options de tirages et d'albums",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: 'DES MOTS GENTILS',
      title: "Des couples que j'ai photographiés",
      items: [
        {
          quote:
            'Valeria remarquait des choses que nous ne savions même pas en train de se passer — les instants discrets entre les grands moments.',
          names: 'ANNA & ELIAS · LAUTERBRUNNEN',
        },
        {
          quote:
            'Elle était comme une amie avec un appareil photo, pas une photographe qui dirige une séance.',
          names: 'SOFIA & MARCO · LAC DE GARDE',
        },
      ],
    },
    contact: {
      title: 'Restons en contact',
      subtitle: "J'aimerais en savoir plus sur votre mariage.",
      thankYou: "Merci de m'avoir contactée. Je reviendrai vers vous très bientôt.",
      labels: {
        firstName: 'PRÉNOM',
        partnerName: 'PRÉNOM DE VOTRE PARTENAIRE',
        email: 'E-MAIL',
        weddingDate: 'DATE DU MARIAGE',
        weddingLocation: 'LIEU DU MARIAGE',
        guests: "NOMBRE D'INVITÉS",
        howFound: "COMMENT M'AVEZ-VOUS TROUVÉE ?",
        message: 'PARLEZ-MOI DE VOTRE MARIAGE...',
      },
      errors: {
        firstName: 'Merci de renseigner votre prénom.',
        email: 'Merci de saisir une adresse e-mail valide.',
        weddingLocation: 'Merci de préciser le lieu.',
        message: 'Merci de me parler un peu de votre journée.',
      },
      submit: 'ENVOYER LE MESSAGE',
    },
  },
  stories: [
    {
      slug: 'anna-elias',
      location: 'LAUTERBRUNNEN, SUISSE',
      title: 'Anna & Elias',
      imgLabel: 'HORIZONTALE — CÉRÉMONIE, DÉCOR DE VALLÉE',
      texture: 'b',
    },
    {
      slug: 'sofia-marco',
      location: 'LAC DE GARDE, ITALIE',
      title: 'Sofia & Marco',
      imgLabel: 'VERTICALE — PORTRAIT DE COUPLE, HEURE DORÉE',
      texture: 'a-fine',
    },
    {
      slug: 'lea-julian',
      location: 'GSTAAD, SUISSE',
      title: 'Léa & Julian',
      imgLabel: 'HORIZONTALE — RÉCEPTION, CHALET DE MONTAGNE',
      texture: 'b',
    },
  ],
  storyDetails: {
    'anna-elias': {
      slug: 'anna-elias',
      location: 'LAUTERBRUNNEN, SUISSE',
      title: 'Anna & Elias',
      intro:
        "Ils ont choisi la vallée pour sa tranquillité — une petite cérémonie au pied des cascades, la famille réunie tout près, et un après-midi qui suivait son propre rythme. Ce qui m'est resté, ce sont les pauses : le père d'Anna avant le premier regard, la marche entre deux rangées de fleurs sauvages, la lumière tardive après le dîner.",
      heroBanner: {
        label: "PLEINE LARGEUR — VUE D'ENSEMBLE DE LA CÉRÉMONIE, DÉCOR DE VALLÉE",
        aspect: '16/9',
        texture: 'b',
      },
      detailPair: [
        {
          label: 'VERTICALE — DÉTAILS, ALLIANCES ET SUITE DE FAIRE-PART',
          aspect: '3/4',
          texture: 'b',
        },
        {
          label: 'VERTICALE — LA MARIÉE SE PRÉPARE, LUMIÈRE DE FENÊTRE',
          aspect: '3/4',
          texture: 'a-fine',
        },
      ],
      midBanner: {
        label: "PLEINE LARGEUR — DESCENTE VERS L'AUTEL",
        aspect: '21/9',
        texture: 'b',
      },
      ceremonyNote: {
        eyebrow: 'CÉRÉMONIE',
        text: "Une courte lecture, deux alliances passées entre des mains tremblantes, et le genre de silence qui n'arrive qu'une fois. Pas de programme, pas de musique — juste le bruit de la rivière en contrebas.",
      },
      momentsTrio: [
        { label: 'PORTRAIT DE COUPLE — HEURE DORÉE', aspect: '4/5', texture: 'b' },
        { label: 'FAMILLE ET AMIS — RASSEMBLEMENT DE GROUPE', aspect: '4/5', texture: 'a-fine' },
        { label: 'RÉCEPTION — PREMIÈRE DANSE, LUMIÈRE DES BOUGIES', aspect: '4/5', texture: 'b' },
      ],
      candidNote: {
        eyebrow: 'UN MOMENT SPONTANÉ',
        text: "Entre deux toasts, la grand-mère d'Elias a pris Anna à part et lui a dit quelque chose qui les a fait pleurer de rire tous les deux. Personne ne se souvient de la blague. Tout le monde se souvient du rire.",
      },
      closingBanner: {
        label: 'PHOTOGRAPHIE FINALE — QUITTER LA VALLÉE, DE NUIT',
        aspect: '4/5',
        texture: 'b',
        maxHeightPx: 820,
      },
    },
  },
  aboutPage: {
    seoTitle: 'À propos de Valeria | Valeria Velasco Photography',
    seoDescription:
      "Colombienne de naissance, suisse d'adoption — découvrez la photographe derrière Valeria Velasco Photography.",
    hero: {
      eyebrow: 'BONJOUR, JE SUIS VALERIA',
      titleLine1: 'Un cœur colombien,',
      titleLine2: 'un foyer suisse.',
      body: "J'ai grandi à Bogotá, entourée de grandes réunions de famille, de longs déjeuners et de beaucoup de bruit — le bon genre. Je me suis installée en Suisse il y a presque dix ans, et quelque part entre les montagnes et le calme, j'ai trouvé la façon dont je voulais photographier les mariages : sans pose, patiente, proche des gens en face de moi.",
      placeholderLabel: 'PORTRAIT — VALERIA EN EXTÉRIEUR',
    },
    story: {
      eyebrow: 'MA FAÇON DE TRAVAILLER',
      leadParagraph:
        "Je ne dirige pas beaucoup. Je préfère que vous oubliiez ma présence pendant la majeure partie de la journée — en parlant avec votre grand-mère, en riant avec votre meilleure amie, en restant tranquillement avec votre partenaire avant que la cérémonie ne commence.",
      body: "Quelques portraits, oui — mais le reste, c'est de la documentation. Je photographie en lumière naturelle autant que possible, je garde une présence discrète, et je retouche avec légèreté pour que les photographies ressemblent encore au jour tel qu'il s'est déroulé, pas à un filtre. La plupart de mes couples vivent en Suisse ou viennent y célébrer un mariage à destination ; je me déplace à travers l'Europe pour les deux.",
    },
    bannerLabel: 'IMAGE STUDIO / VOYAGE — PAYSAGE SUISSE OU ESPACE DE TRAVAIL',
    closingTitle: "Basée en Suisse. Je travaille à travers l'Europe.",
  },
  approachPage: {
    seoTitle: 'Mon approche | Valeria Velasco Photography',
    seoDescription:
      "Comment Valeria Velasco aborde la photographie de mariage — priorité au documentaire, sans pose, attentive aux émotions.",
    hero: {
      eyebrow: 'MA VISION DES CHOSES',
      title: "Ce n'est pas seulement une question de photos.",
      body: "C'est une question de ce que vous avez ressenti, de qui était à vos côtés, et des moments que vous voudrez revivre pour le reste de votre vie.",
      placeholderLabel: 'DÉTAIL CANDIDE — MAINS, VOILE, OU MARCHE TRANQUILLE À DEUX',
    },
    story: {
      leadParagraph:
        "Je photographie avant tout dans un esprit documentaire. Cela veut dire moins d'instructions, plus d'observation — attendre le moment plutôt que le fabriquer.",
      body1:
        "Nous passerons un court moment sur les portraits — assez pour quelques photographies que vous aurez envie d'imprimer — et le reste de la journée, je reste proche mais discrète. Les préparatifs, la cérémonie, les moments entre deux, les discours, la danse : tout cela fait partie de l'histoire, pas seulement les temps forts.",
      body2:
        "Avant le mariage, nous parlons en détail du déroulé de votre journée pour que je sache où être et quand. Le jour J, ce n'est pas vous qui me gérez — c'est moi qui me gère.",
    },
    principles: [
      {
        step: '01',
        title: 'OBSERVER',
        text: "Je photographie ce qui se passe réellement, pas une version mise en scène pour l'appareil.",
      },
      {
        step: '02',
        title: 'DIRIGER EN DOUCEUR',
        text: 'Une légère indication par-ci par-là — jamais une pose tenue plus de quelques secondes.',
      },
      {
        step: '03',
        title: 'RETOUCHER AVEC SOBRIÉTÉ',
        text: "Des couleurs cohérentes et fidèles à la lumière — jamais un filtre appuyé qui daterait les photographies.",
      },
    ],
  },
  storiesPage: {
    seoTitle: 'Portfolio — Toutes les histoires | Valeria Velasco Photography',
    seoDescription:
      "Une collection d'histoires de mariage photographiées en Suisse et à travers l'Europe par Valeria Velasco Photography.",
    eyebrow: 'LA COLLECTION COMPLÈTE',
    title: 'Histoires',
  },
  storyPage: {
    seoTitleTemplate: (title, location) => `${title} — ${location} | Valeria Velasco Photography`,
    seoDescriptionTemplate: (location) =>
      `Une histoire de mariage à ${location}, capturée par Valeria Velasco Photography.`,
    backToAllStories: 'RETOUR À TOUTES LES HISTOIRES',
  },
  notFoundPage: {
    seoTitle: 'Page introuvable | Valeria Velasco Photography',
    seoDescription: 'La page que vous recherchez est introuvable.',
    title: 'Page introuvable',
    body: "La page que vous recherchiez n'existe pas ou a été déplacée.",
    backHome: "RETOUR À L'ACCUEIL",
  },
  common: {
    getInTouch: 'PRENDRE CONTACT',
    allStories: '← TOUTES LES HISTOIRES',
  },
};
