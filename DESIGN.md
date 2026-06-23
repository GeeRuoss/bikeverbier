# Design system bikeverbier.ch

Extrait du site Framer en live (CSS calculé réel). À reproduire dans la refonte Astro.

## Polices (3)
| Rôle | Police | Détail |
|---|---|---|
| Display / titres | **Phonk Contrast** | Police d'affichage géométrique, bold. H1/H2. Trouver la licence/le fichier (Phonk est une famille payante de Beni Bischof / typo). À défaut, prévoir un fallback display proche. |
| Sous-titres / lead | **Inter** | Graisse 500, letter-spacing négatif léger |
| Corps / nav / UI | **Manrope** | Graisse 400 (UI), 500 (gros chiffres compteurs) |

> ⚠ Phonk Contrast est le caractère signature du site. Récupérer le fichier de police utilisé sur Framer (ou sa licence) avant le build, sinon le rendu change. Self-host (woff2) dans `/public/fonts/` pour la perf et la souveraineté (pas de Google Fonts CDN).

## Échelle typographique (desktop, à rendre fluide avec clamp())
| Élément | Police | Taille | Graisse | Line-height | Letter-spacing | Casse |
|---|---|---|---|---|---|---|
| H1 hero | Phonk Contrast | ~59px (monte vers ~80px sur large) | 400 | 1.2 | -1.6px | none |
| H2 section | Phonk Contrast | ~52px | 400 | 1.3 | -1.56px | none |
| H3 / lead | Inter | ~27px | 500 | 1.4 | -0.54px | none |
| Corps / nav | Manrope | 16px | 400 | 24px | normal | none |
| Compteurs | Manrope | 52px | 500 | 1.0 | normal | none |

## Couleurs
| Token | Hex | Usage |
|---|---|---|
| Ink | `#000000` | Texte principal, nav, sections sombres |
| Blanc | `#FFFFFF` | Fonds clairs, texte sur hero |
| **Accent teal** | `#54B8B3` | Mot mis en avant dans les titres, titres de section, étoile du logo, hovers |
| Gris clair | `#F2F2F2` | Fonds de sections alternées |
| Gris texte | `#999999` / `#555555` | Eyebrows, texte secondaire |
| Voile sombre | `rgba(46,46,46,0.5)` / `rgba(34,34,34,0.8)` | Overlays sur images hero |

## Composants

**Navigation** : barre sombre (noir), ~80px (113px avec padding). Transparente au-dessus du hero, devient solide au scroll. Logo = étoile teal + wordmark « BIKE VERBIER.CH ». Sélecteur de langue en pilule (« Français » / « English »). Liens en Manrope blanc.

**Hero** : pleine largeur, image de fond + voile sombre/poussière. Titre Phonk Contrast blanc avec un mot en teal. Lead en Inter. CTA en pilule. Le contenu sous le hero est posé sur une **feuille blanche à coins arrondis** qui chevauche le bas du hero (effet de superposition).

**Cartes d'offre** : image à gauche (coins arrondis ~10px) + texte à droite (eyebrow gris, titre teal Phonk Contrast, liste à puces avec coches, CTA pilule). Alternance possible gauche/droite.

**Bouton CTA (pilule)** : fond blanc, `border-radius: 24px`, texte sombre, + **pastille circulaire noire avec flèche ↗** collée à droite. Variante sombre possible (fond noir, texte blanc).

**Rayons** : cartes/images 10px, boutons pilule 24px (full).

**WhatsApp** : bouton vert flottant fixe en bas à droite, présent sur toutes les pages → `wa.me/41774506726`.

## Animations / interactions à reproduire
1. **Reveal du H1 au chargement** : le titre se dévoile par un **balayage (wipe) horizontal gauche→droite** avec masque. Effet signature, à garder. (CSS : `clip-path` animé, ou masque + translate.)
2. **Voile de poussière sur le hero** : overlay qui s'estompe, léger parallax possible sur l'image.
3. **Reveal au scroll** : sections et cartes apparaissent en fondu + montée légère (`fade-up`).
4. **Compteurs animés** : les chiffres (restaurants, km de sentiers, jours, remontées) comptent depuis 0 quand la section entre dans le viewport. ⚠ Sur le site live ils restent à « 0 » (valeurs à renseigner) → remplir les vraies valeurs au passage.
5. **Hovers** : teal sur les liens, légère élévation sur les cartes.

> Garder léger : `scroll-behavior: smooth` CSS pour les ancres, animations en CSS/IntersectionObserver vanilla. Pas de lib de smooth-scroll (cf. leçon montagneshow : inutile sur trackpad Mac).

## Responsive
Desktop : cartes image+texte côte à côte, hero plein écran. Mobile : empilement vertical (image au-dessus du texte), nav en menu burger probable, tailles typo réduites. Tester aux breakpoints classiques (~768px, ~480px). Mobile-first au build.
