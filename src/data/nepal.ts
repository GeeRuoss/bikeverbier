// Voyage Népal : source unique des données commerciales.
// Modifier ICI se répercute sur les pages FR et EN (hero, repères, FAQ, schema Product).
//
// Décidé le 11.08.2026 puis affiché publiquement le 12.08 (reel Insta) : 5400 CHF,
// 5 au 14 novembre 2026, 3 places. Le prix est « tout compris SAUF le vol international ».
// ⚠ Quand une place part, mettre à jour `spots` (et `spotsLabel` suit tout seul).
// ⚠ Penser à harmoniser la fiche Google Business, qui affiche encore 4900 CHF.

export const TRIP = {
  price: 5400,
  currency: 'CHF',
  spots: 3,
  // Dates du départ 2026 (ISO pour le schema, libellés pour l'affichage).
  validFrom: '2026-11-05',
  priceValidUntil: '2026-11-05',

  datesLabel: '5 au 14 novembre 2026',
  datesLabelEn: '5 to 14 November 2026',
  priceLabel: '5400 CHF',
  priceLabelEn: 'CHF 5,400',
  spotsLabel: '3 places',
  spotsLabelEn: '3 spots',
} as const;
