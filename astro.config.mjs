// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine canonique = www (cf. SEO.md, règle d'or : ne rien casser).
export default defineConfig({
  site: 'https://www.bikeverbier.ch',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // FR à la racine (défaut), EN sous /en/ : génère les hreflang dans le sitemap.
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-GB' },
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // L'accueil (FR et EN) en priorité maximale.
        if (item.url.endsWith('bikeverbier.ch/') || item.url.endsWith('/en/')) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
