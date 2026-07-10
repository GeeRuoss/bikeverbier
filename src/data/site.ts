// Référence unique des coordonnées et des routes.
// Modifier ICI se répercute partout (nav, footer, JSON-LD, hreflang…).

export const SITE = {
  domain: 'https://www.bikeverbier.ch',
  phoneDisplay: '+41 77 450 67 26',
  phoneHref: 'tel:+41774506726',
  whatsapp: 'https://wa.me/41774506726',
  instagram: 'https://www.instagram.com/bikeverbier.ch',
  // Adresse de contact « publique » (non affichée sur le site actuellement).
  contactEmail: 'info@bikeverbier.ch',
  // Réception des formulaires : Google Form « Messages du site bikeverbier.ch »
  // (compte ruosscommunication@gmail.com — notification e-mail à chaque envoi, réponses archivées dans le Form).
  // Remplace Formsubmit qui ne livrait plus aucun e-mail (constat du 10.07.2026).
  gform: {
    action:
      'https://docs.google.com/forms/d/e/1FAIpQLSeo0alF7RVWsZicCxORhdwGnJn-NHTStzOk7FtO10VwlLGLJg/formResponse',
    // Identifiants des questions du Google Form.
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    message: 'entry.1065046570',
    phone: 'entry.1166974658',
    // « Demande » : type de demande choisi, ou sujet fixe de la page (ex-_subject Formsubmit).
    request: 'entry.839337160',
  },
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
