// Référence unique des coordonnées et des routes.
// Modifier ICI se répercute partout (nav, footer, JSON-LD, hreflang…).

export const SITE = {
  domain: 'https://www.bikeverbier.ch',
  phoneDisplay: '+41 77 450 67 26',
  phoneHref: 'tel:+41774506726',
  whatsapp: 'https://wa.me/41774506726',
  instagram: 'https://www.instagram.com/bikeverbier.ch',
  // Fiche Google Maps (Google Business Profile « Bikeverbier.ch », 5,0 étoiles).
  googleMaps: 'https://www.google.com/maps/place/Bikeverbier.ch',
  // Adresse de contact « publique » (non affichée sur le site actuellement).
  contactEmail: 'info@bikeverbier.ch',
  // Réception des formulaires : Google Form « Messages du site bikeverbier.ch »
  // (compte ruosscommunication@gmail.com : notification e-mail à chaque envoi, réponses archivées dans le Form).
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
    // Question obligatoire ajoutée le 25.07.2026 contre le spam de bots qui postent
    // directement sur l'URL Google (sans passer par le site) : ils ignorent ce champ,
    // Google rejette leur envoi côté serveur (question obligatoire manquante).
    antibot: 'entry.493290698',
    antibotValue: 'Envoyé depuis le site',
  },
  credits: {
    by: 'Ruoss! Communication',
    photos: 'Tiffany Troillet Photography',
    photosUrl: 'https://www.tiffanytroillet.ch',
  },
} as const;

// Trois langues depuis le 22.09.2026 : FR (racine), EN (/en/), DE (/de/).
export type Lang = 'fr' | 'en' | 'de';
export const LANGS = ['fr', 'en', 'de'] as const;

// Code de langue HTML, og:locale et hreflang de chaque version.
export const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB', de: 'de-CH' };

// Routes équivalentes FR <-> EN <-> DE. Sert au routage, aux hreflang et au sélecteur de langue.
// FR et EN gardent les slugs historiques (cf. README : zéro redirection, zéro perte SEO).
// DE est nouveau (09.2026) : slugs allemands, pensés pour les recherches alémaniques.
// Slash final OBLIGATOIRE : GitHub Pages sert /guide/ (301 depuis /guide), et le sitemap
// liste les URLs avec slash. Canonical, hreflang et liens internes doivent correspondre.
export const ROUTES = [
  { key: 'home', fr: '/', en: '/en/', de: '/de/' },
  { key: 'guide', fr: '/guide/', en: '/en/guide/', de: '/de/mtb-guide-verbier/' },
  { key: 'ebike', fr: '/ebike-verbier/', en: '/en/ebike-verbier/', de: '/de/e-bike-verbier/' },
  { key: 'entreprise', fr: '/entreprise/', en: '/en/entreprise/', de: '/de/teambuilding-verbier/' },
  { key: 'nepal', fr: '/nepal/', en: '/en/nepal/', de: '/de/nepal/' },
  { key: 'cours', fr: '/cours-vtt-verbier/', en: '/en/cours-vtt-verbier/', de: '/de/mtb-kurse-verbier/' },
  { key: 'location', fr: '/location-ebike-verbier/', en: '/en/location-ebike-verbier/', de: '/de/fahrradverleih-verbier/' },
  { key: 'itineraires', fr: '/vtt-verbier/', en: '/en/vtt-verbier/', de: '/de/mountainbike-verbier/' },
  { key: 'contact', fr: '/contact/', en: '/en/contact/', de: '/de/kontakt/' },
] as const;

export type RouteKey = (typeof ROUTES)[number]['key'];

export function pathFor(key: RouteKey, lang: Lang): string {
  const r = ROUTES.find((x) => x.key === key);
  return r ? r[lang] : '/';
}

// Pages de remerciement après envoi d'un formulaire (hors ROUTES : autonomes, noindex).
export const THANKS: Record<Lang, string> = { fr: '/merci/', en: '/en/thank-you/', de: '/de/danke/' };
