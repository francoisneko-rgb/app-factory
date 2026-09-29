# Template App Factory — Expo SDK 57 / React Native

Template "golden" de la factory : toute nouvelle app part d'ici, jamais de zéro.
Stack 2026 préconfigurée (voir `.opencode/skills/architecture-expo`).

## Créer une nouvelle app

```bash
# 1. Cloner le template vers apps/<nom>
cp -r template-app apps/<nom>

# 2. Renommer + configurer
cd apps/<nom>
#    - package.json : name = "<nom>"
#    - app.json : name, slug, scheme, icônes, splash
#    - .env.example → .env et remplir les clés nécessaires

# 3. Installer + lancer
npm install
npx expo start
```

Dev build (dès qu'un module natif custom est requis — MMKV, notifications…) :
`eas build --profile development`.

## Stack installée

| Besoin | Outil | Exemple |
|---|---|---|
| Navigation | Expo Router (`src/app/`) | `index.tsx`, `form.tsx` |
| Styling | NativeWind + tokens `src/constants/theme.ts` | classes `className` |
| État app | Zustand + MMKV persist | `src/store/useAppStore.ts` |
| État serveur | TanStack Query | `src/hooks/usePosts.ts` |
| Clé-valeur | MMKV via `src/lib/storage.ts` | handlers `getX/setX` |
| Formulaires | react-hook-form + zod | `src/app/form.tsx` |
| Listes | FlashList | dans `index.tsx` |
| Animations | Reanimated + Gesture Handler | (worklets inclus) |
| Données structurées (optionnel) | expo-sqlite + Drizzle | `src/db/` |
| Tests | Jest (`npm test`) + Maestro (`e2e/`) | — |

## Clés / services (désactivés tant que vides)

Copier `.env.example` → `.env` puis remplir. Chaque service s'active seulement
si sa clé est présente (`src/lib/services.ts`) :
`EXPO_PUBLIC_SENTRY_DSN` · `EXPO_PUBLIC_POSTHOG_KEY` ·
`EXPO_PUBLIC_REVENUECAT_IOS_KEY` / `EXPO_PUBLIC_REVENUECAT_ANDROID_KEY` ·
`EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` · `EXPO_TOKEN`.

## Build / publication (EAS)

- `eas build --profile development` — dev client local
- `eas build --profile preview` — APK/IPA interne (tests)
- `eas build --profile production --auto-submit` — store (voir skill deploiement-stores)

## Règles

- Toujours `npx expo install <pkg>` pour les packages natifs (version SDK garantie).
- React Compiler actif (`experiments.reactCompiler: true`) : ne pas ré-écrire
  memo/useCallback manuels (skill performance-expo).
- Listes longues → FlashList, jamais FlatList/ScrollView.
- ESLint propre (`npm run lint`) + typecheck (`npm run typecheck`) avant tout build.