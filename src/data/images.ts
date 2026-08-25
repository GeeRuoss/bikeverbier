// Assets récupérés depuis le site Framer live et servis en local (public/).
// Photos en /img, logos partenaires en /logos, badges diplômes en /badges, drapeaux en /flags.
// Originaux HD conservés (jusqu'à 6048×8064). Crédits photos : Tiffany Troillet / Soren Rickards (Nepal).

export const IMG = {
  // Héros (WebP compressées ~1920px : Core Web Vitals. Les .jpg HD restent dans /img.)
  heroHome: '/img/hero-home.webp',
  heroGuide: '/img/hero-guide.webp',
  heroEntreprise: '/img/hero-entreprise.webp',
  heroSemaine: '/img/hero-semaine.webp',
  heroNepal: '/img/hero-nepal.webp',
  heroLocation: '/img/hero-location.webp',
  heroCours: '/img/hero-cours.webp',
  heroVtt: '/img/hero-vtt.webp',

  // Cartes offres (accueil)
  cardEntreprise: '/img/card-entreprise.webp',
  cardGuide: '/img/card-guide.webp',
  cardSemaine: '/img/card-semaine.webp',
  cardNepal: '/img/hero-nepal.webp',
  welcome: '/img/guillermo.webp',

  // Guide privé
  guideVideos: '/img/guide-videos.webp',
  guideGourmande: '/img/rando-gourmande.webp',

  // Entreprise
  contactVisual: '/img/contact-visual.webp',
  entrepriseForm: '/img/entreprise-form.webp',

  // Semaine + chalet
  semaineChalet: '/img/semaine-chalet.webp',
  semaineLift: '/img/semaine-lift.webp',
  semaineGallery: ['/img/semaine-gallery-1.webp', '/img/semaine-gallery-2.webp', '/img/semaine-gallery-3.webp'],

  // Nepal
  nepalMustang: '/img/nepal-mustang.webp',
  nepalDays: '/img/nepal-days.webp',
  nepalShuttle: '/img/nepal-shuttle.webp',
  nepalGallery: ['/img/nepal-gallery-1.webp', '/img/nepal-gallery-2.webp', '/img/nepal-gallery-3.webp'],

  // Guides (contact)
  guideGuillermo: '/img/guillermo.webp',
  guideJoshua: '/img/joshua.webp',
  guideGilles: '/img/gilles.webp',

  // Marque
  logoMark: '/brand/logo-mark.png',
  flags: '/flags/flags.svg',

  // Open Graph (chemins absolus ajoutés dans le Layout)
  ogHome: '/img/og-home.jpg',
  ogNepal: '/img/nepal-gallery-3.jpg',
  ogDefault: '/img/og-default.png',
} as const;

// Diplômes / certifications des guides (badges SVG récupérés du site)
export const BADGES = {
  swissCycling: '/badges/swiss-cycling-guide.svg',
  mountainGuide: '/badges/ivbv-ifmga-uiagm.svg',
  shvFsvl: '/logos/shv-fsvl.svg',
  flyverbier: '/logos/flyverbier.svg',
} as const;

// Logos partenaires (SVG récupérés du site). SHV/FSVL retiré : c'est une
// affiliation des guides (pilotes tandem), pas un partenaire commercial.
export const PARTNERS = [
  { name: 'FlyVerbier.ch', src: '/logos/flyverbier.svg' },
  { name: 'Cabane Brunet', src: '/logos/cabane-brunet.svg' },
  { name: 'backside', src: '/logos/backside.svg' },
  { name: 'Montagne Show SA', src: '/logos/montagne-show.svg' },
  { name: 'Medran Sports Verbier', src: '/logos/medran-sports.svg' },
  { name: 'Le Carrefour', src: '/logos/le-carrefour.svg' },
  { name: 'La Vallée Restaurant', src: '/logos/la-vallee.svg' },
  { name: 'Philippe Roux Sports', src: '/logos/philippe-roux.svg' },
] as const;
