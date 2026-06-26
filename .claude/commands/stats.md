---
description: Lit les stats Google Analytics de bikeverbier.ch et affiche un tableau de bord soigné
---

# 📊 Stats bikeverbier.ch

Quand cette commande est lancée, récupère les statistiques **Google Analytics** de bikeverbier.ch et présente-les dans un tableau de bord clair et joli **dans le chat**.

## Source des données

- Propriété GA4 : **Bikeverbier.ch** — compte *Bike Verbier* `362609357`, property `p498291359`, Measurement ID `G-7G9DCF9XTC`.
- Méthode : pilote le **navigateur Chrome connecté** (Guillermo est déjà connecté à Google Analytics). Charge les outils `mcp__Claude_in_Chrome__*` via ToolSearch si besoin.

## Étapes

1. `list_connected_browsers` → `select_browser`. Si aucun navigateur ou si Google demande une connexion, **demande à Guillermo de se connecter** (ne jamais saisir son mot de passe).
2. **Temps réel** — ouvre `https://analytics.google.com/analytics/web/#/a362609357p498291359/realtime/overview` → relève : utilisateurs actifs (30 dernières min), top pays, pages vues en direct.
3. **Vue d'ensemble** — ouvre `https://analytics.google.com/analytics/web/#/a362609357p498291359/reports/intelligenthome`. Règle la période sur **7 derniers jours**, lis les chiffres, puis repasse sur **28 derniers jours** et relis. Pour chaque période relève :
   - Utilisateurs actifs + nouveaux utilisateurs
   - Sessions
   - Vues de page / écrans
   - Durée d'engagement moyenne
   - **Top 5 pages** les plus vues
   - **Top sources / canaux** (organique, direct, social, référence…)
   - **Top pays / villes**
4. **Conversions formulaire** — compte les vues des pages `/merci` (FR) et `/en/thank-you` (EN) sur la période : c'est le nombre de **demandes envoyées via les formulaires**.
5. Lis toujours les valeurs **réellement affichées à l'écran** (screenshot / read_page). **N'invente JAMAIS de chiffres.** Si une donnée est illisible ou absente, écris « n/d ».

## Présentation (le « tableau joli »)

Affiche un **tableau de bord** avec, dans l'ordre :

1. **🔴 En direct** : utilisateurs actifs maintenant (+ d'où ils viennent).
2. **Tableau KPI** : colonnes `7 jours` vs `28 jours`, lignes = Utilisateurs · Sessions · Vues · Engagement moyen · **Demandes formulaire** (avec l'évolution ↑/↓ si visible).
3. **Top pages** (tableau court).
4. **Top sources** + **Top pays** (tableaux courts).

Privilégie l'outil **`mcp__visualize__show_widget`** pour un rendu visuel soigné (dashboard). Si indisponible, fais des **tableaux Markdown** propres.

Termine par **1 à 3 observations utiles et actionnables** (ex. « le trafic organique progresse », « la page entreprise est ta 2e plus vue → bon signe pour les leads B2B », « X demandes reçues cette semaine »).

## Ton

Factuel, concis, en français. Uniquement des chiffres réels. Si les données sont encore maigres (le suivi GA a démarré le 26/06/2026), dis-le simplement plutôt que de gonfler.
