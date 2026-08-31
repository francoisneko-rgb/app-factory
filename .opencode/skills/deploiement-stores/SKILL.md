---
name: deploiement-stores
description: Build et publication via EAS Build/Submit/Update — iOS et Android sans Mac.
---
# Déploiement via EAS

## Principe
EAS fait tout dans le cloud : certificats, builds, soumission. Aucun Mac, aucune
config locale de signature. Token : {env:EXPO_TOKEN}.

## Android (Google Play)
1. `eas build --platform android --profile production` — keystore généré et géré par EAS.
2. `eas submit --platform android` — upload sur Google Play (compte de service
   {env:GOOGLE_PLAY_SERVICE_ACCOUNT_JSON} la première fois, ensuite automatique).
3. Comptes personnels Google : 12 testeurs / 14 jours en closed testing obligatoire.
   Prévoir dans le calendrier.

## iOS (aucun Mac requis)
1. Compte Apple Developer (99 $/an). Première fois : `eas credentials --platform ios`
   → laisser EAS générer certificat de distribution + provisioning profile
   automatiquement ("Let Expo handle it").
2. `eas build --platform ios --profile production --auto-submit` — build puis envoi
   TestFlight en une commande.
3. Metadata + screenshots : via l'App Store Connect API ou fastlane deliver depuis
   `brain/apps/<app>/store/`.
4. CI : EAS Workflows (.eas/workflows/*.yml) pour builder/soumettre à chaque git push
   si l'utilisateur le demande.

## Mises à jour OTA (EAS Update)
Correctifs JS/assets sans review store : `eas update --channel production`.
Uniquement pour la couche JS — tout changement natif exige un nouveau build.

## Règles absolues
- Jamais de publication sans le gate G6.
- Landing page avec /support et /privacy AVANT soumission (skill landing-page).
- Web (si demandé) : `npx expo export --platform web` puis `eas deploy --prod`.
- Log de chaque build/soumission/update dans `brain/logs/`.