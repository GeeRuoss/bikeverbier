import type { Lang } from '../data/site';

// Chaînes de la "coque" partagée (nav, footer, formulaire, boutons récurrents).
// Le contenu propre à chaque page reste dans le fichier de la page.
export const UI = {
  fr: {
    nav: {
      guide: 'Guide Privé',
      entreprise: "Sortie d'entreprise",
      semaine: 'Semaine Guide + Chalet',
      nepal: 'Nepal',
      contact: 'Contact',
      langLabel: 'Français',
    },
    footer: {
      tagline:
        "Découvrez l'histoire de Verbier et profitez de vous ressourcer dans le calme de la montagne !",
      sections: 'Liens',
      social: 'Suivez-nous sur Insta !',
      links: {
        entreprise: 'Entreprises',
        guide: 'Guiding',
        semaine: 'Week in chalet',
        contact: 'Contact',
        nepal: 'Nepal',
      },
    },
    contact: {
      title: 'Découvrez Verbier avec les locaux !',
      lead: "N'hésitez pas à nous appeler même en cas de demandes ou de conseils pour la région !",
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone (optionnel)',
      request: 'Demande (optionnel)',
      requestOptions: ['Teambuilding', 'Rando Gourmande', 'Tour Guidé', 'Nepal'],
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
      semaine: 'Week Guide + Chalet',
      nepal: 'Nepal',
      contact: 'Contact',
      langLabel: 'English',
    },
    footer: {
      tagline:
        'Discover the history of Verbier and enjoy reenergising in the tranquillity of the mountains!',
      sections: 'Links',
      social: 'Follow us on Insta!',
      links: {
        entreprise: 'Businesses',
        guide: 'Guidance',
        semaine: 'Week in a chalet',
        contact: 'Contact',
        nepal: 'Nepal',
      },
    },
    contact: {
      title: 'Discover Verbier with the locals!',
      lead: 'Feel free to call us even for inquiries or advice about the region!',
      name: 'Name',
      email: 'Email',
      phone: 'Telephone (optional)',
      request: 'Request (optional)',
      requestOptions: ['Team Building', 'Gourmet Hiking', 'Guided Tour', 'Nepal'],
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
