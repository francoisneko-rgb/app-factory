---
name: deploiement-stores
description: Build signé et publication Google Play / App Store via fastlane et Codemagic.
---
# Déploiement stores

## Android (Google Play)
1. Keystore : généré une fois, dans `keys/` (jamais commité, sauvegardé ailleurs aussi —
   le perdre = app morte).
2. `flutter build appbundle --release`
3. fastlane supply : upload AAB + metadata + screenshots depuis `brain/apps/<app>/store/`,
   auth via {env:GOOGLE_PLAY_SERVICE_ACCOUNT_JSON}.
4. Première publication : internal track → closed testing → production. Google exige
   12 testeurs pendant 14 jours pour les comptes personnels : le prévoir dans le calendrier.

## iOS (quand activé — aucun Mac requis)
1. Compte Apple Developer (99 $/an) + clé API App Store Connect (.p8 dans `keys/`,
   ID dans {env:APP_STORE_CONNECT_KEY_ID} et {env:APP_STORE_CONNECT_ISSUER_ID}).
2. Codemagic ({env:CODEMAGIC_API_TOKEN}) : build iOS dans le cloud, signature gérée,
   paiement à l'usage (pas d'abonnement nécessaire).
3. fastlane deliver : upload binaire + screenshots + metadata + soumission review.

## Règles absolues
- Jamais de publication sans validation explicite du gate G6.
- Notes de version générées depuis le diff, orientées bénéfice utilisateur.
- Log de chaque soumission (date, version, track, statut) dans `brain/logs/`.
