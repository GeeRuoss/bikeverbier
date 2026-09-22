// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine canonique = www (cf. SEO.md, règle d'or : ne rien casser).
export default defineConfig({
  site: 'https://www.bikeverbier.ch',
  trailingSlash: 'ignore',
  // Offre « Semaine guide + chalet » retirée le 25.08.2026 (décision Guillermo).
  // Redirections meta-refresh générées par Astro : zéro 404, le jus SEO suit.
  redirects: {
    '/semaine-guidechalet': '/guide/',
    '/en/semaine-guidechalet': '/en/guide/',
  },
  integrations: [
    sitemap({
      // hreflang : déclarés dans le HTML de chaque page (complets et réciproques, 7 par page).
      // Le bloc i18n du sitemap a été retiré le 23.09.2026 : il ne couvrait pas les slugs allemands.
      // Pages de remerciement (post-formulaire) et 404 : hors sitemap, elles sont en noindex. /credits/ : hors sitemap, page utilitaire.
      filter: (page) => !page.includes('/merci') && !page.includes('/thank-you') && !page.includes('/danke') && !page.includes('/credits') && !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        // L'accueil (FR et EN) en priorité maximale.
        if (item.url.endsWith('bikeverbier.ch/') || item.url.endsWith('/en/') || item.url.endsWith('/de/')) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
