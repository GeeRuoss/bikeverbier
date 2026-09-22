// Voyage Népal : source unique des données commerciales.
// Modifier ICI se répercute sur les pages FR, EN et DE (hero, repères, FAQ, schema Product).
//
// Décidé le 11.08.2026 puis affiché publiquement le 12.08 (reel Insta) : 5400 CHF,
// 5 au 14 novembre 2026, 3 places. Le prix est « tout compris SAUF le vol international ».
// ⚠ Quand une place part, mettre à jour `spots` (et `spotsLabel` suit tout seul).
// ⚠ Penser à harmoniser la fiche Google Business, qui affiche encore 4900 CHF.

export const TRIP = {
  price: 5400,
  currency: 'CHF',
  spots: 3,
  // validFrom : date de publication du prix (12.08.2026) ; priceValidUntil : date du départ (ISO pour le schema)
  validFrom: '2026-08-12',
  priceValidUntil: '2026-11-05',

  datesLabel: '5 au 14 novembre 2026',
  datesLabelEn: '5 to 14 November 2026',
  priceLabel: '5400 CHF',
  priceLabelEn: 'CHF 5,400',
  spotsLabel: '3 places',
  spotsLabelEn: '3 spots',
  // Libellés DE (page /de/nepal/, 09.2026). Style suisse : « CHF 5400.- ».
  datesLabelDe: '5. bis 14. November 2026',
  priceLabelDe: 'CHF 5400.-',
  spotsLabelDe: '3 Plätze',
} as const;
