// Référence unique des coordonnées et des routes.
// Modifier ICI se répercute partout (nav, footer, JSON-LD, hreflang…).

export const SITE = {
  domain: 'https://www.bikeverbier.ch',
  phoneDisplay: '+41 77 450 67 26',
  phoneHref: 'tel:+41774506726',
  whatsapp: 'https://wa.me/41774506726',
  instagram: 'https://www.instagram.com/bikeverbier.ch',
  // ⚠ À CONFIRMER avec Guillermo : adresse qui reçoit les formulaires (Formsubmit).
  contactEmail: 'ruosscommunication@gmail.com',
  credits: {
    by: 'Ruoss! Communication',
    photos: 'Tiffany Troillet Photography',
    photosUrl: 'https://www.tiffanytroillet.ch',
  },
} as const;

export type Lang = 'fr' | 'en';

// Routes équivalentes FR <-> EN. Sert au routage, aux hreflang et au sélecteur de langue.
// On garde les slugs FR même en EN (cf. README : zéro redirection, zéro perte SEO).
export const ROUTES = [
  { key: 'home', fr: '/', en: '/en/' },
  { key: 'guide', fr: '/guide', en: '/en/guide' },
  { key: 'entreprise', fr: '/entreprise', en: '/en/entreprise' },
  { key: 'semaine', fr: '/semaine-guidechalet', en: '/en/semaine-guidechalet' },
  { key: 'nepal', fr: '/nepal', en: '/en/nepal' },
  { key: 'contact', fr: '/contact', en: '/en/contact' },
] as const;

export type RouteKey = (typeof ROUTES)[number]['key'];

export function pathFor(key: RouteKey, lang: Lang): string {
  const r = ROUTES.find((x) => x.key === key);
  return r ? r[lang] : '/';
}
