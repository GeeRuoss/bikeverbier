# bikeverbier.ch — migration Framer → Astro

Refonte du site Framer existant en **Astro + GitHub Pages**, pour récupérer le contrôle (robots.txt, sitemap, llms.txt) et arrêter l'abonnement Framer (~360 $/an).

## Pourquoi Astro
Site bilingue FR/EN. Règle d'atelier : multilingue = Astro (HTML statique en sortie, hébergeable GitHub Pages). Même structure que montagneshow (FR à la racine, EN sous `/en/`).

## Règle d'or SEO : ne rien casser
On reprend **les URLs à l'identique**. Zéro redirection nécessaire, zéro perte de référencement.

| FR (racine) | EN (/en/) |
|---|---|
| `/` | `/en/` |
| `/guide` | `/en/guide` |
| `/entreprise` | `/en/entreprise` |
| `/semaine-guidechalet` | `/en/semaine-guidechalet` |
| `/nepal` | `/en/nepal` |
| `/contact` | `/en/contact` |

- Canonical sur `www` → garder `www.bikeverbier.ch`.
- Reprendre `<title>` + `meta description` + OG/Twitter de chaque page (déjà dans `CONTENU.md`).
- Générer un `sitemap.xml` (index + `sitemap_fr-FR.xml` + `sitemap_en-GB.xml`) et un `robots.txt`.
- Garder les hreflang FR/EN entre pages équivalentes.

## Formulaire de contact
Le formulaire actuel passe par Framer. Le refaire en **Formsubmit** (gratuit, comme brief-ruoss) ou Web3Forms. Champs : Nom, Email, Téléphone (opt), Demande (select : Teambuilding / Rando Gourmande / Tour Guidé / Nepal), Message. Plus honeypot anti-bot.

Bouton WhatsApp flottant → `https://wa.me/41774506726`.
Tel : `+41 77 450 67 26`.

## Bugs de la version EN actuelle à corriger pendant la refonte
La traduction auto Framer a salopé les prix et le footer EN. À fixer dans la nouvelle version :

1. **Prix EN faux** : la page `/en/guide` affiche des prix convertis n'importe comment (`€80 - €120`, `120.00 GBP`, `£120`). Les prix doivent rester en **CHF** partout, identiques au FR.
2. **Home EN incohérente** : « Starting from £120 » à côté de « Starting from 1290.- ». Tout en CHF.
3. **Footer EN cassé** : deux liens « Contact » dont un pointe vers `/en/nepal`. Le 2e doit dire « Nepal ».
4. **Footer EN réseaux sociaux** : « You will not find us on any social media networks » alors que le FR renvoie vers Insta `@bikeverbier.ch`. À harmoniser (vérifier avec Guillermo s'il y a un Insta actif).

## Stack
Astro + JS vanilla (pas de framework lourd, c'est du marketing statique). GitHub Pages. Username GeeRuoss.

## Fichiers de ce dossier
- `CONTENU.md` — tout le texte FR + EN, page par page, prêt à intégrer.
- `DESIGN.md` — design system (polices, couleurs hex, échelle typo, composants, animations) extrait du site live.
- `SEO.md` — audit SEO existant + JSON-LD corrigé + corrections à faire.
- `IMAGES.md` — inventaire des images (URL Framer + contexte). Récupérer les **originaux HD** depuis les archives design plutôt que de retélécharger la version compressée Framer.
- `.gitignore` + `.github/workflows/secrets-check.yml` — garde-fou dès le départ.

## Téléphone (référence unique)
Numéro correct partout : **+41 77 450 67 26** → `tel:+41774506726` · `wa.me/41774506726`.
(L'ancien JSON-LD Framer avait un mauvais numéro `...05 26`, corrigé dans `SEO.md`.)

## Prochaines étapes (côté Claude Code)
1. `gh repo create bikeverbier --private` (privé tant qu'on bosse, public au déploiement Pages).
2. `npm create astro@latest` + config i18n FR/EN.
3. Monter les 6 pages × 2 langues depuis `CONTENU.md`.
4. Intégrer les images HD.
5. robots.txt + sitemap + hreflang.
6. Déployer sur GitHub Pages, pointer le DNS, garder `www`.
7. Soumettre le sitemap à Google Search Console.
