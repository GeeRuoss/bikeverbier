// Assets récupérés depuis le site Framer live et servis en local (public/).
// Photos en /img, logos partenaires en /logos, badges diplômes en /badges, drapeaux en /flags.
// Originaux HD conservés (jusqu'à 6048×8064). Crédits photos : Tiffany Troillet / Soren Rickards (Nepal).

export const IMG = {
  // Héros
  heroHome: '/img/hero-home.jpg',
  heroGuide: '/img/hero-guide.jpg',
  heroEntreprise: '/img/hero-entreprise.jpg',
  heroSemaine: '/img/hero-semaine.jpg',
  heroNepal: '/img/hero-nepal.jpg',

  // Cartes offres (accueil)
  cardEntreprise: '/img/card-entreprise.jpg',
  cardGuide: '/img/card-guide.jpg',
  cardSemaine: '/img/card-semaine.jpg',
  cardNepal: '/img/hero-nepal.jpg',
  welcome: '/img/guillermo.jpg',

  // Guide privé
  guideVideos: '/img/guide-videos.jpg',
  guideGourmande: '/img/rando-gourmande.jpg',

  // Entreprise
  contactVisual: '/img/contact-visual.jpg',
  entrepriseForm: '/img/entreprise-form.jpg',

  // Semaine + chalet
  semaineChalet: '/img/semaine-chalet.jpg',
  semaineLift: '/img/semaine-lift.jpg',
  semaineGallery: ['/img/semaine-gallery-1.jpg', '/img/semaine-gallery-2.jpg', '/img/semaine-gallery-3.jpg'],

  // Nepal
  nepalMustang: '/img/nepal-mustang.jpg',
  nepalDays: '/img/nepal-days.jpg',
  nepalShuttle: '/img/nepal-shuttle.jpg',
  nepalGallery: ['/img/nepal-gallery-1.jpg', '/img/nepal-gallery-2.jpg', '/img/nepal-gallery-3.jpg'],

  // Guides (contact)
  guideGuillermo: '/img/guillermo.jpg',
  guideJoshua: '/img/joshua.jpeg',
  guideGilles: '/img/gilles.jpeg',

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
