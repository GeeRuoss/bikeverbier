# Polices

Le site utilise **deux familles** :

| Rôle | Police | Hébergement |
|---|---|---|
| Titres (H1/H2/H3) | **Phonk Contrast** | `PhonkContrast.woff2` ici, auto-hébergé (récupéré du site live) |
| Tout le reste (lead, corps, nav, UI) | **Inter** | `@fontsource-variable/inter` (dépendance npm) |

`@font-face` de Phonk Contrast déclaré en haut de `src/styles/global.css`.
Variables : `--font-display` (Phonk), `--font-lead` / `--font-body` (Inter).
