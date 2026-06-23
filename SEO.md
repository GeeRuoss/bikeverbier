# SEO existant bikeverbier.ch — à préserver à la migration

Audit du site Framer live. Tout ce qui suit doit être reproduit dans la version Astro pour ne **rien perdre** au référencement.

## Ce qui est en place (à garder)
- **1 seul H1 par page** (bon). Structure de titres propre.
- **Canonical** par page, toutes sur `www.bikeverbier.ch`.
- **hreflang** correctement posés sur chaque page : `fr-FR`, `en-GB`, `x-default` (→ FR). À régénérer entre chaque paire FR/EN équivalente.
- **lang** : `fr-FR` (racine) / `en-GB` (`/en/`).
- **Titles + meta descriptions** uniques par page (tous repris dans `CONTENU.md`).
- **Open Graph + Twitter Card** sur chaque page (title, description, image, type, url). Twitter = `summary_large_image`.
- **meta robots** : `max-image-preview:large`.
- **robots.txt** : défaut Framer →
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.bikeverbier.ch/sitemap.xml
  ```
  (C'est ce fichier que tu ne peux pas customiser sans le plan Pro. En Astro tu le contrôles à 100 %.)
- **Sitemap** : index → `sitemap_fr-FR.xml` + `sitemap_en-GB.xml` (6 URLs chacun). À régénérer (Astro a `@astrojs/sitemap`).
- **Favicon** présent.
- **JSON-LD** structuré (voir ci-dessous).

## URLs à conserver à l'identique (zéro redirection = zéro perte)
`/` · `/guide` · `/entreprise` · `/semaine-guidechalet` · `/nepal` · `/contact`
+ versions `/en/...`. Canonical sur `www`.

## JSON-LD — version CORRIGÉE à intégrer
Le JSON-LD du site live contient un **mauvais numéro de téléphone** (`+41774505626`). Le bon numéro est **+41 77 450 67 26**. Version corrigée à mettre dans le `<head>` de la home (et déclinable sur les autres pages) :

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Bikeverbier.ch",
  "description": "Guide VTT et mountain bike Verbier : e-bike, enduro MTB, rando gourmande, semaine chalet, voyage MTB Nepal. Guides locaux nés à Verbier.",
  "url": "https://www.bikeverbier.ch",
  "telephone": "+41774506726",
  "priceRange": "CHF 120-1290",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Verbier",
    "postalCode": "1936",
    "addressRegion": "Valais",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.0979,
    "longitude": 7.227
  },
  "sameAs": ["https://www.instagram.com/bikeverbier.ch"]
}
```

## Corrections / améliorations SEO à faire au passage
1. **Téléphone JSON-LD** : corriger `+41774505626` → `+41774506726` partout. (Numéro affiché : déjà correct.)
2. **Footer EN** : « You will not find us on any social media networks » est faux (l'Insta `@bikeverbier.ch` existe, il est même dans le `sameAs`). Harmoniser avec le FR (lien Insta).
3. **Prix EN** : la traduction auto Framer a cassé les prix (£/€/GBP). Tout en CHF, identiques au FR. (Détail dans README + CONTENU.)
4. **Opportunités** (le site est léger en contenu) : ajouter du texte descriptif sur les pages produits, remplir les compteurs (actuellement à 0), envisager une vraie version FR des pages Semaine et Nepal (actuellement en anglais). Bon pour le SEO local « VTT Verbier ».
5. **llms.txt** : maintenant possible en Astro. Envisager un `llms.txt` (présentation du site pour les IA) en bonus.

## Après mise en ligne
- Soumettre le `sitemap.xml` à **Google Search Console**.
- Vérifier la propriété du domaine, surveiller l'indexation pendant 2-3 semaines.
- Garder `www` comme version canonique (redirection non-www → www).
