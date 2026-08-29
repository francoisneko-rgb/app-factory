# APP FACTORY — Démarrage (5 minutes)

## Étape 1 — Clés API (une seule fois, valable pour TOUS tes projets OpenCode)
1. Ouvre `config/api-keys.env`, remplis les clés que tu as (les autres pourront être ajoutées plus tard).
2. Dans PowerShell : `powershell -ExecutionPolicy Bypass -File config/install-api-keys.ps1`
3. Ferme et rouvre ton terminal (obligatoire pour que Windows recharge les variables).

## Étape 2 — Config globale OpenCode (une seule fois)
Copie `config/opencode-global.json` vers `%USERPROFILE%\.config\opencode\opencode.json`
(fusionne avec l'existant si tu as déjà une config globale).

## Étape 3 — Lancer la factory
```powershell
cd app-factory
cd tools/scrapers ; npm install ; cd ../..
opencode
```
Puis dis à l'agent : **"Lance la phase 1 : recherche de marché complète."**

## Règle d'or
Lis `PLAN-MAITRE.md` une fois pour comprendre le pipeline et tes checkpoints.
Ensuite, l'orchestrateur te guidera gate par gate et te demandera ta validation aux bons moments.
