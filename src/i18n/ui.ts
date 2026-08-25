import type { Lang } from '../data/site';

// Chaînes de la "coque" partagée (nav, footer, formulaire, boutons récurrents).
// Le contenu propre à chaque page reste dans le fichier de la page.
export const UI = {
  fr: {
    nav: {
      guide: 'Guide Privé',
      entreprise: "Sortie d'entreprise",
      cours: 'Cours Privés',
      nepal: 'Nepal',
      contact: 'Contact',
      location: 'Location e-bike',
      itineraires: 'VTT à Verbier',
      langLabel: 'Français',
    },
    footer: {
      tagline:
        "Découvrez l'histoire de Verbier et profitez de vous ressourcer dans le calme de la montagne !",
      sections: 'Liens',
      social: 'Suivez-nous sur Insta !',
      cgv: 'CGV',
      location: 'Verbier · Valais · Suisse',
      links: {
        entreprise: 'Entreprises',
        guide: 'Guide VTT Verbier',
        cours: 'Cours privés VTT',
        contact: 'Contact',
        nepal: 'Nepal',
        location: 'Location e-bike Verbier',
        itineraires: 'VTT à Verbier : le guide',
      },
    },
    contact: {
      title: 'Découvrez Verbier avec les locaux !',
      lead: "N'hésitez pas à nous appeler même en cas de demandes ou de conseils pour la région !",
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone (optionnel)',
      request: 'Demande (optionnel)',
      requestOptions: ['Teambuilding', 'Rando Gourmande', 'Tour Guidé', 'Cours Privé', 'Nepal'],
      message: 'Message',
      submit: 'Ça roule !',
      sent: 'Merci ! Votre message a bien été envoyé.',
    },
    whatsapp: 'Nous écrire sur WhatsApp',
    skip: 'Aller au contenu',
  },
  en: {
    nav: {
      guide: 'Private Guide',
      entreprise: 'Teambuilding',
      cours: 'Private Lessons',
      nepal: 'Nepal',
      contact: 'Contact',
      location: 'E-bike rental',
      itineraires: 'MTB in Verbier',
      langLabel: 'English',
    },
    footer: {
      tagline:
        'Discover the history of Verbier and enjoy reenergising in the tranquillity of the mountains!',
      sections: 'Links',
      social: 'Follow us on Insta!',
      cgv: 'Terms & Conditions',
      location: 'Verbier · Valais · Switzerland',
      links: {
        entreprise: 'Businesses',
        guide: 'MTB guide Verbier',
        cours: 'Private MTB lessons',
        contact: 'Contact',
        nepal: 'Nepal',
        location: 'E-bike rental Verbier',
        itineraires: 'Mountain biking in Verbier',
      },
    },
    contact: {
      title: 'Discover Verbier with the locals!',
      lead: 'Feel free to call us even for inquiries or advice about the region!',
      name: 'Name',
      email: 'Email',
      phone: 'Telephone (optional)',
      request: 'Request (optional)',
      requestOptions: ['Team Building', 'Gourmet Hiking', 'Guided Tour', 'Private Lesson', 'Nepal'],
      message: 'Message',
      submit: "Let's roll!",
      sent: 'Thank you! Your message has been sent.',
    },
    whatsapp: 'Message us on WhatsApp',
    skip: 'Skip to content',
  },
} as const;

export function t(lang: Lang) {
  return UI[lang];
}
