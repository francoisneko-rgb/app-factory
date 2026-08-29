# OUTILS — Mémoire de la factory

> Relire AVANT chaque tâche pour savoir ce dont on dispose.
> Légende statut : ✅ prêt · 🔑 clé manquante · ⚠️ action manuelle / à installer.
> MAJ : 2026-08-26 (setup)

## Scrapers stores (Google Play + App Store) — `tools/scrapers/`
Statut : ✅ prêt (npm install fait, tous validés sur apps réelles).
Dépendances : node + `npm install` (déjà fait). Librairies : `google-play-scraper` v10 (ESM → `.default`), `app-store-scraper`.
Coût : 0 € (gratuit, open source).
Skills : `recherche-marche`, `scraping-concurrents`, `analyse-avis`, `radar-tendances`.

| Commande | Rôle |
|---|---|
| `node scrape-app.js <package> [pays] [lang]` | Metadata complète d'une app Google Play (volumes installs, prix). |
| `node scrape-reviews.js <package> <nb> [pays] [lang]` | Avis GP (helpful + newest, dédupliqués). |
| `node scrape-search.js "<terme>" [nb] [pays] [lang]` | Recherche/concurrence GP (pas de volume installs ici → compléter par scrape-app). |
| `node top-charts.js [categorie] [collection] [nb]` | Top charts GP. Collections v10 : TOP_FREE, TOP_PAID, GROSSING (pas NEW_*). |
| `node download-assets.js <package> <dossierSortie> [pays]` | Icône + screenshots (références gauntlet). |
| `node scrape-app-ios.js <idNumerique> [pays]` | Metadata App Store (volume notes = `reviews`). |
| `node ios-reviews.js <idNumerique> <nb> [pays] [lang]` | Avis App Store. |
| `node ios-search.js "<terme>" [nb] [pays] [lang]` | Recherche App Store. |

## Playwright (MCP + navigateur)
Statut : ✅ prêt (chromium installé `chromium-1234`).
MCP `playwright` dans opencode.json, outils `playwright_browser_*`. Navigateur téléchargé dans `%LOCALAPPDATA%\ms-playwright`.
Coût : 0 €.
Skills : `recherche-marche`, `scraping-concurrents`, `analyse-avis`.

## Context7 (MCP)
Statut : ✅ prêt (répond, `list_mcp_resources` OK).
Endpoint : `https://mcp.context7.com/mcp`, outils `context7_*` (resolve-library-id, query-docs).
Coût : gratuit.
Usage : doc officielle des librairies/frameworks (Flutter, packages…). Skill : `architecture-flutter`.

## Flutter SDK
Statut : ⚠️ NON installé. `winget install Google.Flutter` échoue (paquet inexistant sur winget).
Installation manuelle : télécharger SDK → https://docs.flutter.dev/get-started/install/windows (zip) → dézipper (ex. `C:\flutter`) → ajouter `C:\flutter\bin` au PATH utilisateur → `flutter doctor`. Pas de `flutter create` tant qu'aucune app choisie.
Coût : gratuit.
Skills : `architecture-flutter`, `gauntlet-loop`, `deploiement-stores`.

## Fastlane (build/export iOS+Android)
Statut : ⚠️ requiert Flutter + Ruby + signature Apple/Google d'abord. À activer en phase G6.
Coût : gratuit (open source). Skills : `deploiement-stores`.

## Codemagic (CI/CD)
Statut : 🔑 clé manquante (`CODEMAGIC_API_TOKEN`). Config `codemagic.yaml` à créer par app. Tier gratuit + pay-as-you-go pour builds Apple.
Skills : `deploiement-stores`.

## fal.ai (agrégateur images — Recraft, Ideogram, Nano Banana…)
Statut : 🔑 clé manquante (`FAL_KEY`). UNE clé = plusieurs modèles, facturation à l'image. Obtenir : https://fal.ai.
Skills : `visuels-marketing`, `designer`.

## kie.ai (agrégateur alternatif, optionnel)
Statut : 🔑 clé manquante (`KIE_API_KEY`, optionnel). Obtenir : https://kie.ai.
Skills : `visuels-marketing`.

## Google Images
Statut : ✅ via GOOGLE_API_KEY présente (User). Utiliser l'API Custom Search JSON (bien qu coût : quota 100 j/r gratuits puis facturation). À confirmer avant usage.
Skills : `scraping-concurrents`, `recherche-marche`.

## ElevenLabs (voix off IA)
Statut : 🔑 clé manquante (`ELEVENLABS_API_KEY`, optionnel). Obtenir : https://elevenlabs.io.
Skills : `video-remotion`.

## Remotion (vidéos marketing)
Statut : ⚠️ pas encore installé. Node requis (présent). `npm install remotion` à la phase marketing.
Coût : gratuit (open source) ; rendu sur votre machine. Skills : `video-remotion`.

## Supabase (backend)
Statut : 🔑 clé manquante (`SUPABASE_URL`, `SUPABASE_ANON_KEY`). Par app, phase backend. Obtenir : https://supabase.com.
Coût : gratuit sous quotas. Skills : `dev-flutter`.

## RevenueCat (monétisation abonnement)
Statut : 🔑 clé manquante (`REVENUECAT_API_KEY`). Gratuit sous seuil de revenus. Skills : `deploiement-stores`, `product-manager`.

## PostHog (analytics produit)
Statut : ⚠️ non configuré (pas de clé dans api-keys.env). À ajouter si besoin analytics.
Coût : gratuit sous seuil. Skills : `architecture-flutter`.

## Astro / Cloudflare (page store / landing)
Statut : ⚠️ non configuré. Astro (gratuit) + Cloudflare Pages (gratuit). Pour les landing pages marketing. Skills : `visuels-marketing`, `marketeur`.

## Appfigures
Statut : 🔑 clé présente (User : APPFIGURES_* présents) MAIS le plan Free ne donne accès qu'à `/` (403/404 sur apps non possédées sans add-on Public Data). → Utiliser les scrapers gratuits à la place. Réévaluer si add-on activé.
Coût : plan gratuit + add-on payant.
Skills : `recherche-marche`, `analyste-concurrents`.

## Clés LLM (génération)
- GOOGLE_API_KEY : ✅ présente (User)
- OPENROUTER_API_KEY : ✅ présente (User)
- ANTHROPIC_API_KEY : 🔑 absente
Skills : selon agent.

## Récapitulatif des clés manquantes à obtenir
FAL_KEY (fal.ai) · KIE_API_KEY (optionnel) · ELEVENLABS_API_KEY (optionnel) · CODEMAGIC_API_TOKEN · GOOGLE_PLAY_SERVICE_ACCOUNT_JSON · APP_STORE_CONNECT_* · REVENUECAT_API_KEY · SUPABASE_URL/ANON · ANTHROPIC_API_KEY.

## Manuels à faire
- Installer Flutter SDK (link officiel + PATH).
- Installer Remotion en phase marketing.