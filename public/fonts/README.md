# Polices

## Phonk Contrast (police signature — à fournir)

Le site est conçu pour **Phonk Contrast** (titres H1/H2). C'est une police **payante** :
il faut déposer ici le fichier `PhonkContrast.woff2` (licence valide) puis l'activer.

Tant que le fichier n'est pas là, c'est **Archivo** (libre, déjà installée) qui sert de
fallback display — le rendu reste propre, juste un peu moins « signature ».

### Activer Phonk une fois le fichier déposé

1. Copier `PhonkContrast.woff2` dans ce dossier (`public/fonts/`).
2. Ajouter en haut de `src/styles/global.css` :

   ```css
   @font-face {
     font-family: 'Phonk Contrast';
     src: url('/fonts/PhonkContrast.woff2') format('woff2');
     font-weight: 400 700;
     font-display: swap;
   }
   ```

La variable `--font-display` la prend déjà en priorité, donc rien d'autre à changer.

## Inter & Manrope

Auto-hébergées via `@fontsource-variable/*` (installées en dépendances). Rien à faire.
