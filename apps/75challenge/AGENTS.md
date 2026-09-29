# 75 Challenge — AGENTS.md (app)

> Rôle : expert React Native + Expo, code clair, simplicité d'abord. Spec-driven strict.
> Toute évolution post-v1 passe par la spec (openspec/ ou Spec Kit local), jamais de code sans spec validée.

## L'app
- **75 Challenge** : tracker de défis 75 jours (Hard / Soft / Medium + personnalisé), 100 % local, zéro compte.
- Promesse : « Ton défi de 75 jours, à toi de le finir. »
- Monétisation : achat unique $4.99 à vie (pas d'abonnement). Paywall skippable, croix toujours visible.
- Source de vérité produit : `PRD.md` + `design/DESIGN.md` + `specs/` (Spec Kit local).

## Stack (ADR-003, ADR-005 — golden template)
- React Native + Expo SDK 57, TypeScript strict, Expo Router (file-based, `src/app/`), NativeWind v4, Zustand + MMKV (state/persist), TanStack Query (data async), RHF + zod (formulaires), FlashList (listes), Reanimated 4 (animation), expo-sqlite/Drizzle (opt.), Jest + Maestro.
- React Compiler activé (app.json experiments.reactCompiler: true). ESLint `expo lint` propre avant tout build.

## Structure des dossiers
```
src/app/          # routes Expo Router (index, onboarding, challenge, dashboard, day, settings…)
src/components/   # composants UI réutilisables (par domaine)
src/constants/    # theme.ts (design tokens DESIGN.md), config
src/db/           # Drizzle schema + client (opt.)
src/hooks/        # hooks métier (useChallenge, useDay…)
src/lib/          # services, storage (MMKV), validation, moteur 25/50/75 + doses
src/store/        # stores Zustand (persist MMKV)
src/types/        # types TS partagés
src/utils/        # helpers (dates, unités, signature canvas…)
src/__tests__/    # tests unitaires Jest (logique métier)
e2e/              # Maestro (flux critiques)
```

## Règles de styling (exceptions connues)
- Design system : `src/constants/theme.ts` (tokens DESIGN.md : surface blanc #FFFFFF, on-surface #0A0A0A, 4 pastels badge-amber/sage/peach/lemon, CTA = rectangle plein noir, jamais en pilule).
- `className` NativeWind ne fonctionne PAS sur SafeAreaView → utiliser `constants/theme.ts` / styles dédiés.
- Typo : Inter (fonctionnel) + Caveat script (UNIQUEMENT marqueurs « jour N ») + Playfair Display (store/marketing uniquement, jamais dans l'app).
- Anti-patterns interdits : fonds sombres/dégradés/néon, CTA pilules/pastels, texte de liste centré, plus de 4 pastels de badges (ou boucle la séquence).

## Patterns (à respecter partout)
- Zéro compte, 100 % local : toute donnée persiste sur l'appareil (MMKV/Drizzle), aucune auth, aucun backend, aucune clé API.
- Moteur challenge : intensité (Soft/Medium/Hard) → durée 25/50/75 jours + doses dynamiques (eau, exercice, lecture…), dates de fin auto-calculées et affichées avant démarrage.
- Contrat signé au doigt : signature canvas + prénom + dates auto + rassurance « on ne stocke pas votre signature ».
- Paywall : modal skippable + rail permanent Premium + badges couronne sur actions payantes ; prix $4.99 affiché en clair ; croix toujours visible.
- Boucle quotidienne : Day X of 75 + countdown Time Left + checklist « At least X/day » + saisie unités + photo (éditeur) + custom tasks (« required for day completion ») + option poids/journal.
- Suivi : calendrier 75 j, % global, « 1ère tentative » + archivage des tentatives.
- « Solve it once, document it once » : tout problème qui revient 2 fois → ajouter ici ET dans brain/learnings.md.

## Vérification
- `npm run typecheck` (tsc --noEmit) · `npm run lint` (expo lint) · `npm test` (Jest, logique métier).
- Une tâche = une session = un commit/PR (revue code avant merge). Séquentiel par défaut.