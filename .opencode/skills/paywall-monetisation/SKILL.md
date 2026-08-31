---
name: paywall-monetisation
description: Pattern de paywall qui convertit sans casser les avis — RevenueCat, croix différée, règles iOS/Android.
---
# Paywall & monétisation (RevenueCat)

## Principe
RevenueCat (react-native-purchases / plugin Expo) derrière une abstraction `PaywallService`
pour changer de provider sans toucher l'UI.

## Règle Android
Le bouton retour Android est interceptable via BackHandler / navigation d'Expo Router,
mais un paywall incompressible nuit aux avis. Pattern : croix différée 3-5 s (le temps de
montrer la valeur), jamais de piège au retour.

## Règles paywall
1. La promesse en 1 phrase + 3 bénéfices listés, montant et renouvellement clairs.
2. Événement analytics dès l'affichage (`paywall_viewed`) et sur conversion.
3. Tester 2-3 variantes (prix, position croix, wording) avant de figer.
4. EAS Update permet de corriger un paywall déployé sans nouvelle review store.

## Note Clerk Billing
Clerk propose du billing (abonnements) couplé à l'auth, gratuit jusqu'à 50k MAU.
RÈGLE : pour des biens numériques dans l'app, RevenueCat (IAP natif stores) reste le
choix principal — conformité App Store/Play. Clerk Billing = option pertinente seulement
si l'app a une forte composante web avec paiement hors stores. Demander validation.