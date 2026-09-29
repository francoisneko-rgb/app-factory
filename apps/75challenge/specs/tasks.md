# Tasks: 75 Challenge — v1 (MVP)

**Input**: Design documents from `apps/75challenge/specs/spec.md` + `apps/75challenge/specs/plan.md` + `apps/75challenge/design/DESIGN.md`

**Prerequisites**: `spec.md` (validée G3.5), `plan.md` (validé G3.6, ADR-75C-001..009 dans `docs/decisions.md`)

**Tests**: Tests are REQUIRED for this feature — the spec mandates Jest unit tests for all business logic (engine, dates, units, validation, store reducers) and Maestro E2E flows for critical paths (onboarding→contract, daily loop, paywall, share, restart/archive). Gate G-b (plan.md): engine Jest tests MUST be green BEFORE any screen is built.

**Organization**: Tasks are grouped by user story (US1→US5, priority order imposed by the spec) to enable independent implementation and testing of each story. Each task = one dev-expo session = one commit/PR (code review before merge, AGENTS.md app).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1-US5, or Setup / Found / Polish for cross-cutting phases
- Every task has an **AC** (testable acceptance criterion) and a **Vérif** method (Jest unit test / Maestro flow / visual capture)

## Path Conventions

- Single project rooted at `apps/75challenge/`. Routes under `src/app/`, business logic in `src/lib/challenge/` (pure TS, no RN import), stores in `src/store/`, services in `src/lib/services/`, UI in `src/components/` (domain subfolders), design tokens in `src/constants/theme.ts`, unit tests in `src/__tests__/`, E2E flows in `e2e/`.
- Stack (plan.md): Expo SDK 57, Expo Router file-based, NativeWind v4, Zustand + MMKV (persist), RHF + zod, FlashList, Reanimated 4, React Compiler active. NO Drizzle/SQLite, NO TanStack Query, NO PostHog in v1 (ADR-75C-001/008). Storage = MMKV only (keys `profile`, `challenge`); photos = files in documentDirectory, URIs only in state (ADR-75C-003/R3).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Clean the golden template, install v1 dependencies, lay the design tokens and constants that every screen will consume.

- [ ] T001 [Setup] Remove golden-template demo code and dead dependencies. Delete `src/app/form.tsx`, `src/hooks/usePosts.ts`, `src/lib/api.ts`, `src/lib/services.ts`, `src/db/` (whole dir), `src/store/useAppStore.ts`, `src/components/themed.tsx`, `src/components/Button.tsx`, `drizzle.config.ts`; remove `expo-sqlite`, `drizzle-orm`, `drizzle-kit`, `@tanstack/react-query` from `package.json` and drop the `db:generate`/`db:studio` scripts. Keep `src/lib/storage.ts` and `src/lib/validation.ts` and `src/__tests__/validation.test.ts` (rewritten later, T010/T012). **AC**: `npm run typecheck` and `npm run lint` pass with zero broken imports after removal. **Vérif**: `npm run typecheck` + `npm run lint` (both green).

- [ ] T002 [Setup] Install v1 dependencies with `npx expo install` (SDK 57 compatible): `react-native-svg`, `react-native-view-shot`, `expo-sharing`, `expo-image-picker`, `expo-image-manipulator`, `expo-notifications`, `expo-file-system`, `expo-localization`, `expo-store-review`, `react-native-purchases`, `@expo-google-fonts/inter`. Add local font assets `assets/fonts/Caveat-Bold.ttf` + `Caveat-SemiBold.ttf` (Caveat is local asset, Inter via Google fonts — plan.md §Dependencies). **AC**: all packages resolve for SDK 57; both Caveat files exist under `assets/fonts/`. **Vérif**: `npm install` resolves; visual file check.

- [ ] T003 [P] [Setup] Design tokens: rewrite `src/constants/theme.ts` translating DESIGN.md §2/§3/§6 — `surface #FFFFFF`, `on-surface #0A0A0A`, `surface-secondary #F7F7F5`, `text-secondary #6B6B6B`, `text-tertiary #A0A0A0`, `border-subtle #E8E8E6`, 4 pastels `badge-amber #F7C84A` / `badge-sage #B5CCA8` / `badge-peach #F0C4B0` / `badge-lemon #EDE89A`, `checkmark #111111`, `on-checkmark #FFFFFF`, `error`, `success #5BAD6B`, radius scale (badge 12, card 16, photo 8, pill 9999, button 16), typography scale (Inter + Caveat only; Playfair Display never in-app), spacing base-4. **AC**: every DESIGN.md token exists as a named constant; no component can hardcode a color afterwards. **Vérif**: code review + visual captures of screens using tokens (starting T013+).

- [ ] T004 [P] [Setup] App constants + copy: create `src/constants/config.ts` — price `$4.99` (one-time, lifetime), custom duration bounds 1–365 days (default 75), max 10 active rules, default missed-day mode (strict in Hard, flexible in Soft), public env keys `EXPO_PUBLIC_REVENUECAT_IOS_KEY`/`EXPO_PUBLIC_REVENUECAT_ANDROID_KEY`; create `src/constants/copy.ts` — all EN marketing/UX strings (onboarding slides, education, quiz, trust screen, contract, paywall, non-punitive missed-day message FR-017, settings). **AC**: every screen references copy/config (no hardcoded user-facing string); price constant is `$4.99`. **Vérif**: code review + `grep` for hardcoded strings during T042 audit.

- [ ] T005 [Setup] RevenueCat public config: copy `.env.example` → `.env`, fill `EXPO_PUBLIC_REVENUECAT_IOS_KEY` + `EXPO_PUBLIC_REVENUECAT_ANDROID_KEY` (public `pk_...` keys, never secrets); register the `react-native-purchases` config plugin in `app.json` reading the env keys. **AC**: plugin config valid; zero hardcoded key in source. **Vérif**: `npm run typecheck` + code review (secrets check).

**Checkpoint**: Clean project, v1 dependencies installed, tokens + constants + copy + RevenueCat env ready. No screen can be built before this phase is complete.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared data model + pure-TS challenge engine + MMKV storage + Zustand stores. **⚠️ CRITICAL**: no user story work can begin until the engine tests (T009) and store tests (T012) are GREEN (gate G-b, plan.md Constitution).

- [ ] T006 [P] [Found] Shared data model: create `src/types/index.ts` with the plan.md §Data Model types — `RuleType`, `RuleUnit`, `Intensity`, `MissedDayMode`, `DayStatus`, `AttemptStatus`, `UnitSystem`, `Rule`, `ChallengeConfig`, `Attempt`, `RuleProgress`, `DayEntry`, `UserProfile`, `SmartReminder` (dates as `YYYY-MM-DD` for days, ISO for timestamps; state always metric internally, imperial at display only). **AC**: types compile and are importable by engine/stores/screens. **Vérif**: `npm run typecheck` + code review.

- [ ] T007 [P] [Found] Pure date + preset primitives: create `src/lib/challenge/dates.ts` (pure `addDays`, `diffDays`, `todayKey`, format helpers; handles leap years, month ends, 1-day and 365-day bounds) and `src/lib/challenge/presets.ts` (FR-005 table: Soft 25d — water 2 L, exercise 20 min, reading 5 pages, diet flexible, photo 1×/week; Medium 50d — 2.5 L, 45 min, 10 pages, strict, photo 1×/day; Hard 75d — 3.8 L, 2×45 min incl. 1 outdoor, 10 pages non-fiction, strict no alcohol/cheat meal, photo 1×/day). No RN imports anywhere. **AC**: pure functions, deterministic output. **Vérif**: Jest tests in T009.

- [ ] T008 [Found] Challenge engine: create `src/lib/challenge/engine.ts` (depends T007) — duration per intensity, `endDate = startDate + durationDays − 1`, `getCurrentDayIndex`, day completion (all rules / required-only / custom required), strict vs flexible missed-day resolution (FR-009/017), «already started» resume at day N with non-perfect pre-marked past days (FR-010), rule editing with `effectiveFrom = next day` without rewriting history (FR-008). **AC**: exact results for plan.md cases (25d: Jan 5 → Jan 29; 1d; 365d; leap year; month end). **Vérif**: Jest tests in T009.

- [ ] T009 [Found] Engine unit tests (gate G-b — MUST be green before any screen): write `src/__tests__/engine.test.ts` + `src/__tests__/dates.test.ts` — exact preset doses per intensity (FR-005), endDate cases (25/1/365 days, leap, month-end), current day index, completion with required-only and custom-required, strict archives attempt at midnight vs flexible continues (FR-017), resume at day N with pre-marked non-perfect past days, rule edit applies next day with history intact. **AC**: `npm test` green; plan.md §Testing cases covered. **Vérif**: Jest.

- [ ] T010 [P] [Found] Storage + validation: rewrite `src/lib/services/storage.ts` — single MMKV instance + JSON get/set helpers (keys `profile`, `challenge`), handlers used by stores only, never by UI (AGENTS.md pattern); rewrite `src/lib/validation.ts` — zod schemas (first name 2–20 chars, water 0–5 L/day, pages ≥ 0, minutes ≥ 0, custom task: title/icon/type/optional description). **AC**: storage handlers abstract MMKV; zod rejects/accepts per plan.md §Testing. **Vérif**: `npm run typecheck` + Jest in T012.

- [ ] T011 [Found] Zustand stores with MMKV persist: create `src/store/useProfileStore.ts` (profile, quiz answers, unit system, reminders, premium status, `onboardingDone`, `paywallSeenAt`, `ratedAt`) and `src/store/useChallengeStore.ts` (attempts, `activeAttemptId`, `daysByAttempt`; pure reducers: `startChallenge`, toggle/check rule with auto-completion when dose reached (FR-012), add water amount, set photo, set weight/journal, `validateDay`, `syncDay` at midnight (FR-017), `restart` archiving intact attempt + incrementing attempt number (FR-025), `editRules` with next-day effect (FR-008)). Persist via `createJSONStorage(() => mmkv)`. **AC**: state survives app restart (MMKV); reducers are pure (state in → new state out, no side effects). **Vérif**: Jest tests in T012 + manual restart check on dev build.

- [ ] T012 [Found] Store + validation unit tests: write `src/__tests__/challenge-store.test.ts` + `src/__tests__/validation.test.ts` — auto-check when dose reached, day validation only when all required rules done (custom required blocks ★), restart archives attempt intact and increments attempt number, rule edit applies from next day with past days untouched, zod schema accept/reject. **AC**: `npm test` green. **Vérif**: Jest.

**Checkpoint**: Foundation ready — engine + stores covered by green Jest tests (gate G-b passed). User story implementation can now begin.

---

## Phase 3: User Story 1 — Onboarding → signed contract (Priority: P1) 🎯 MVP

**Goal**: A new user goes from app open to a signed finger contract with a "You're ready" confirmation card — in under 3 minutes, with no account, no email, no system permission (SC-001).

**Independent Test**: A tester who has never seen the app completes the funnel open→contract→confirmation in < 3 min without account/email and sees their day-1 recap card (Maestro `01_onboarding_contract.yaml`).

### Implementation for User Story 1

- [ ] T013 [US1] Root layouts + redirect: rewrite `src/app/_layout.tsx` — load Inter (Google) + Caveat (local) via `expo-font`, `SplashScreen.preventAutoHideAsync()` → hide after fonts (plan.md §Integration), mount `GestureHandlerRootView`, `SafeAreaProvider`, root `Stack`; rewrite `src/app/index.tsx` — redirect `profile.onboardingDone ? /dashboard : /onboarding` (FR-001); create `src/app/(onboarding)/_layout.tsx` (Stack, headerShown false). **AC**: first launch → `/onboarding`; after onboarding → `/dashboard`. **Vérif**: visual capture + Maestro 01 (T019).

- [ ] T014 [US1] Hook slides: create `src/app/(onboarding)/index.tsx` — pager of 3–4 slides (one idea per screen, social proof on slide 1, FR-001), permanent "Skip" button always visible, navigates to education (or quiz when skipped); component `src/components/onboarding/Slide.tsx` per DESIGN.md (white surface, black text, no dark/gradient/neon, CTA = solid black rectangle, never pill). **AC**: slides swipe; Skip reachable from any slide. **Vérif**: visual capture + Maestro 01.

- [ ] T015 [US1] Education + quiz screens: create `src/app/(onboarding)/education.tsx` — one rule = one screen with real numbers per intensity read from `presets.ts` (e.g. "up to 3.8 L of water/day in Hard"), skippable (FR-001) + `src/components/onboarding/EducationSlide.tsx`; create `src/app/(onboarding)/quiz.tsx` — ≤ 5 questions, mostly image-based (motivation, fear #1) + anti-quit interlude ("Most people quit before day 10. You're already ahead.") + first-name input via RHF+zod (`validation.ts`) + `src/components/onboarding/QuizQuestion.tsx`. **AC**: quiz ≤ 5 questions; name validated 2–20 chars; interlude visible. **Vérif**: Maestro 01 + visual capture.

- [ ] T016 [US1] Trust screen: create `src/app/(onboarding)/privacy.tsx` — explicit trust messaging: everything stays on your phone, nothing goes to servers, no account needed (FR-001/FR-002) + `src/components/onboarding/TrustCarousel.tsx` (carousel of 5★ reviews). **AC**: trust copy visible before any contract step; zero system permission requested up to this point (FR-002). **Vérif**: visual capture + Maestro 01 (asserts no permission dialog).

- [ ] T017 [P] [US1] Signature pad: create `src/components/ui/SignaturePad.tsx` — finger drawing with `react-native-svg` + Gesture Handler (thread UI, ADR-75C-002), black stroke ~3px, erasable (clear button), exposes `signed: boolean` + points kept in memory ONLY — never persisted, never written to disk (FR-004). **AC**: drawing → `signed=true`; cleared → `signed=false`; nothing persisted (check no file/storage write). **Vérif**: visual capture + Maestro 01 (engage button inactive until signed, T018).

- [ ] T018 [US1] Contract screen: create `src/app/(onboarding)/contract.tsx` + `src/components/onboarding/ContractCard.tsx` — shows entered first name, the chosen challenge's rules, auto-calculated start/end dates from the engine (FR-003/006), integrated `SignaturePad`, the "Your signature is not saved — it stays on this screen" notice always visible next to the pad (FR-004), and a "I commit" button that stays INACTIVE while nothing is signed and activates once signed (FR-003, US1-S6). Contract receives the challenge chosen in `(setup)/choose.tsx` (T021) — depends on US2. **AC**: button inactive with empty signature, active after signing; signature image never persisted (only `signed` boolean reaches state). **Vérif**: Maestro 01 + code review.

- [ ] T019 [US1] Ready screen + E2E flow: create `src/app/(onboarding)/ready.tsx` — "You're ready" + day-1 recap card (dates, rules) BEFORE any payment ask (FR-001, US1-S9) + `src/components/onboarding/` recap card; create `e2e/01_onboarding_contract.yaml` (Maestro): accroche → skip → quiz → choose Soft (T021) → privacy → sign → "I commit" (inactive before signature) → ready → dashboard; asserts no permission dialog, no account/email, completion < 3 min (SC-001). **AC**: Maestro 01 green; funnel < 3 min. **Vérif**: Maestro flow.

**Checkpoint**: US1 fully functional and testable independently — complete funnel open→signed contract→confirmation in < 3 min, zero account/permission (SC-001), Maestro `01_onboarding_contract.yaml` green.

---

## Phase 4: User Story 2 — Choose & calibrate the challenge (Priority: P1)

**Goal**: The user picks Soft/Medium/Hard or Custom; the app derives duration (25/50/75 or 1–365), per-habit doses and the exact end date — displayed BEFORE starting, recalculated instantly on intensity change. Editable presets, strict/flexible missed-day mode, resume an already-started challenge (FR-005→010).

**Independent Test**: Select each of the 3 intensities and verify duration, doses and end date display correctly and recalculate instantly; create a custom challenge; edit a preset (plan.md US2 test). Engine correctness is already covered by Jest (T009); this phase is the screens on top.

### Implementation for User Story 2

- [ ] T020 [US2] Setup group layout: create `src/app/(setup)/_layout.tsx` (Stack, headerShown false, theme-compliant header when shown). **AC**: setup navigation renders. **Vérif**: visual capture.

- [ ] T021 [US2] Choose screen: create `src/app/(setup)/choose.tsx` + `src/components/setup/IntensityCard.tsx` + `src/components/setup/RuleSummaryCard.tsx` — chips Soft (25d) / Medium (50d) / Hard (75d) / Custom (pill chips per DESIGN.md §7.1, never pill CTAs), duration + summarized doses + CALCULATED END DATE shown before starting (FR-006), instant recalc of duration/doses/end date on intensity change (US2-S2), strict/flexible missed-day choice with clear explanation, default strict in Hard / flexible in Soft (FR-009, US2-S6), "Start today or already started?" → enter current day or past start date, past days pre-marked non-perfect (FR-010, US2-S7). Writes the challenge config; hands off to contract (T018) or dashboard. **AC**: each intensity shows correct duration/doses/end date, updated instantly on switch (FR-005/006). **Vérif**: engine Jest (T009) + Maestro 01 + visual capture.

- [ ] T022 [US2] Custom challenge screen: create `src/app/(setup)/custom.tsx` + `src/components/setup/CustomRuleForm.tsx` — Premium-only (crown badge → opens paywall if free, FR-007/US2-S4): free duration 1–365 days (default 75) + free rule composition (FR-007). **AC**: custom challenge 1–365 days created without breaking the calendar grid; free user tapping it opens paywall, never a brutal interruption (FR-023). **Vérif**: visual capture + Maestro 03 (T034).

- [ ] T023 [US2] Edit preset screen: create `src/app/(setup)/edit.tsx` — Premium: adjust doses, add/remove a rule on an existing preset WITHOUT recreating it; `effectiveFrom = next day`, no rewriting of past days (FR-008, US2-S5). **AC**: rule edit applies from the next day; past days untouched (store test covers it). **Vérif**: Jest challenge-store (T012) + visual capture.

**Checkpoint**: US2 functional — 3 presets + custom + edit give correct, instantly recalculated duration/doses/end dates (FR-005→010); engine Jest green; choose flow integrated into the onboarding funnel (T019).

---

## Phase 5: User Story 3 — Daily loop (Priority: P2)

**Goal**: One page per day: "day N" script typography, "Day N of X", dates, countdown to midnight, dosed checklist with unit entry and auto-check, photo + editor, optional weight/journal; automatic day validation ★; missed day handled without shame (FR-011→018).

**Independent Test**: On a started challenge, simulate a full day — check habits, fill water gauge, take a photo, validate the day — then verify the switch to the next day (Maestro `02_daily_flow.yaml`).

### Implementation for User Story 3

- [ ] T024 [US3] Main group layout + derived selectors: create `src/app/(main)/_layout.tsx` (Stack for dashboard/progress/day-detail/attempts/settings) + `src/hooks/useChallenge.ts` — derived selectors (current day N, day progress %, dates, stats for calendar) as pure functions over the store. **AC**: selectors consistent with store state. **Vérif**: Jest (pure selectors) + visual capture.

- [ ] T025 [P] [US3] Daily-loop UI kit: create in `src/components/ui/` — `Countdown.tsx` + `src/hooks/useCountdown.ts` (time-left to midnight, 1 s interval, formatted, no global re-render — plan.md §Performance), `WaterGauge.tsx` (Reanimated water gauge, remaining shown in ml/L and glasses, FR-013), `TaskBadge.tsx` (fixed 30×30, radius 12, 4 pastels in sequence amber→sage→peach→lemon, loops for rules 5+ per DESIGN.md §9), `TaskRow.tsx` (full-width line, 16/12 padding, 1px bottom filet, badge + left-aligned text only), `Checkmark.tsx` (28px circle: filled `#111111` + white ✓ when done, empty with 2px border when pending), `PastelBadge.tsx`, `DayCard.tsx`. **AC**: components render from theme tokens; pastel sequence loops beyond 4 rules. **Vérif**: visual capture + code review.

- [ ] T026 [US3] Dashboard screen: create `src/app/(main)/dashboard.tsx` — one single page, no navigation needed (FR-011): `DayHeader` ("day N" in Caveat script, "Day N of X", start/end dates, % of day completed, Countdown "Time left" to midnight) + the full dosed checklist of the day (all rules with badge + dose "At least X/day" + state). **AC**: day header + full checklist visible on one screen without scroll dependency. **Vérif**: Maestro 02 + visual capture.

- [ ] T027 [US3] Unit entry + auto-check: create `src/components/dashboard/RuleChecklistItem.tsx` — water ±240 ml stepper driving the gauge, remaining in ml/L/glasses (FR-013, never a bare checkbox); exercise minutes with indoor/outdoor distinction in Hard (FR-005/012); reading ±1/±5 pages; diet Yes/No; check fires AUTOMATICALLY when the dose is reached (FR-012). **AC**: dose reached → rule auto-checks; water has no binary checkbox. **Vérif**: Jest store (auto-check, T012) + Maestro 02.

- [ ] T028 [US3] Auto-validation + celebration + midnight sync: auto ★ when all required rules done + `src/components/dashboard/Celebration.tsx` (discreet micro-celebration, Reanimated + haptics, FR-016) + `src/hooks/useTodaySync.ts` — `syncDay()` on focus + AppState foreground: past midnight with unfinished rules → day marked incomplete with non-punitive message ("No big deal. You pick up tomorrow — or start over, your choice", FR-017/FR-031), strict mode archives attempt + new day-1 attempt, flexible mode continues. **AC**: last required rule checked → ★ auto; simulated midnight → incomplete + non-punitive message. **Vérif**: Jest `syncDay` (T012) + Maestro 02.

- [ ] T029 [US3] Daily photo: create `src/app/photo-editor.tsx` (modal) + `src/lib/services/photo.ts` — take photo or pick from gallery (expo-image-picker), crop + rotate in the built-in editor (expo-image-manipulator), ★ done badge after validation, photo file in `documentDirectory/photos/<attemptId>/day-<N>.jpg`, URI only in `DayEntry.photoUri`, never base64 in MMKV (FR-014, R3); camera denied → gallery fallback (US1-Edge). **AC**: photo taken → edited → ★; camera denied → gallery path works. **Vérif**: visual capture + code review (no MMKV base64).

- [ ] T030 [US3] Custom tasks + day options: custom tasks in the checklist (reuse `CustomRuleForm.tsx`, checkbox or counter with target, "required for day completion" option that BLOCKS ★, editable anytime applied from next day — FR-015) + optional weight and journal per day, stored locally attached to the day (FR-018). **AC**: required custom task unfinished → day cannot validate (Jest + Maestro); weight/journal persisted and attached to the day. **Vérif**: Jest challenge-store + Maestro 02 + visual capture.

**Checkpoint**: US3 functional — a complete day can be simulated end-to-end (checks, water gauge, photo, custom tasks, auto-★, day switch) and midnight rollover is non-punitive and mode-correct (FR-011→018). Maestro `02_daily_flow.yaml` green.

---

## Phase 6: User Story 4 — Unlock Premium in confidence (Priority: P2)

**Goal**: Premium offered in three never-blocking layers: skippable modal after confirmation ($4.99 one-time shown clearly, close cross always visible), permanent "Premium" rail at the top of the dashboard, crown badges on paid actions — all opening the SAME paywall. One lifetime payment, no account, restore anywhere (FR-019→023).

**Independent Test**: Open the paywall from all 3 entry points, verify price/cross/mentions, close without blockage, simulate purchase then restore (Maestro `03_paywall_close.yaml`).

### Implementation for User Story 4

- [ ] T031 [US4] PaywallService: create `src/lib/services/purchase.ts` — `react-native-purchases` behind a `PaywallService` facade (ADR-75C-005): configure with public env keys (T005), purchase non-consumable `premium_499`, `restore()`, `isPremium` via entitlement `premium`; create `src/hooks/usePremium.ts` bridging service + `useProfileStore`. **AC**: purchase/restore work in sandbox; no subscription product configured (FR-019). **Vérif**: manual sandbox test on dev build + code review.

- [ ] T032 [US4] Paywall UI: create `src/app/paywall.tsx` (modal, presentable from any entry) + `src/components/paywall/PaywallCard.tsx` (per DESIGN.md §7.8: white cards, 16 radius, featured option with 2px black outline + "Popular" badge, price in h1 black, details in caption) + `BenefitRow.tsx` + `src/components/ui/CrownBadge.tsx` + `src/components/ui/PremiumRail.tsx` — price "$4.99 — one payment, lifetime" readable in clear type on the card, close cross ALWAYS visible and contrasted, no countdown, no misleading pre-selection (FR-019/020). **AC**: cross visible in every state; price legible on card. **Vérif**: Maestro 03 + visual capture.

- [ ] T033 [US4] 3 entry points + store review: wire post-ready modal 1× (`paywallSeenAt` in profile, US1-S9/FR-020), permanent Premium rail at top of dashboard (T026), crown badges on paid actions (custom task T030, custom challenge T022, edit preset T023, smart reminders) — badge opens the SAME paywall, never a brutal mid-gesture interruption (FR-023, US4-S6); `expo-store-review` requested only after the 3rd validated day, never day 1 (FR-028). Closing the paywall must not block or degrade ANY free-core feature (FR-021). **AC**: 3 entries open the same paywall; closing leaves the free core fully intact. **Vérif**: Maestro 03 + visual capture.

- [ ] T034 [US4] E2E paywall flow: create `e2e/03_paywall_close.yaml` (Maestro) — rail → paywall → close via cross → dashboard intact, free core complete (FR-021); assert price visible, no subscription wording (FR-019). **AC**: Maestro 03 green. **Vérif**: Maestro flow.

**Checkpoint**: US4 functional — paywall skippable from 3 entries, price honest, free core never degraded (FR-019→023), restore reachable (paywall + settings, settings in T039).

---

## Phase 7: User Story 5 — Progress, restart, share (Priority: P3)

**Goal**: Full-challenge calendar (1→X colored grid, global %, perfect-days %), per-day detail, archived attempts readable-only with "attempt N" badge, shareable pastel progress image 9:16 & 1:1 via native sheet — no server, no social feed (FR-024→026). Widget = CONDITIONAL spike (FR-027), non-blocking, honest v1.1 deferral otherwise.

**Independent Test**: On a challenge with several entered days: open calendar, tap a past day, restart (verify archive integrity), generate and share the progress image (Maestro `04_share_progress.yaml` + `05_restart_archive.yaml`).

### Implementation for User Story 5

- [ ] T035 [US5] Calendar: create `src/app/(main)/progress.tsx` + `src/components/progress/CalendarGrid.tsx` + `DayCell.tsx` + `StatRing.tsx` — grid 1→X (25/50/75 or custom) via FlashList (60 fps), each day colored by state (done/partial/missed/future, today highlighted), global completion % + perfect-days % (FR-024). **AC**: 75-cell grid scrolls smoothly; %s match store state (Jest-selectable). **Vérif**: Jest (derived stats) + visual capture.

- [ ] T036 [US5] Day detail: create `src/app/(main)/day-detail.tsx` — tap a past day → its rules and entered values, photo, journal (FR-024, US5-S2). **AC**: detail matches the tapped day exactly. **Vérif**: visual capture.

- [ ] T037 [US5] Attempts + restart: create `src/app/(main)/attempts.tsx` + `src/components/progress/AttemptCard.tsx` — previous attempts archived INTACT (calendar, photos, notes, dates), readable-only, "attempt N" badge on dashboard (T026), restart action creates a new attempt and archives the previous one (FR-025). **AC**: restart → "attempt 2" badge + archive readable with photos/notes intact. **Vérif**: Maestro 05 + Jest challenge-store (T012).

- [ ] T038 [US5] Share: create `src/lib/services/share.ts` (react-native-view-shot: two off-screen renders 9:16 and 1:1 of the pastel share card, temporary PNG in file-system, expo-sharing native sheet) + `src/app/share.tsx` (modal) + `src/components/progress/ShareCard.tsx` (pastel editorial card: day N/X, checked rules, dates, challenge name — FR-026). No data leaves the device; no feed/friends/community (FR-026/031). **AC**: native sheet opens with the 9:16 image; no server call. **Vérif**: Maestro 04 + visual capture.

- [ ] T039 [US5] Settings: create `src/app/(main)/settings.tsx` + `src/components/settings/SettingRow.tsx` + `ReminderPicker.tsx` + `UnitsPicker.tsx` — units metric/imperial (expo-localization detection + override; `src/lib/services/units.ts` + `src/__tests__/units.test.ts` L↔fl oz, glasses — FR-013), reminders (free: 1 daily global reminder, hour of choice; Premium: smart reminders per task/multiple, tone adapted to quiz answers — FR-028; notification permission requested HERE at first reminder setup, never at boot — FR-002), "Restore my purchase" (FR-022, paywall AND settings), restart/archive, about (privacy reaffirmed). **AC**: unit switch converts displayed values (Jest); restore reachable from settings. **Vérif**: Jest units + visual capture.

- [ ] T040 [P] [US5] Widget feasibility SPIKE (FR-027 — CONDITIONAL, NON-BLOCKING): spike `expo-widgets` (experimental SDK 57) — objective criteria: sync < 1 min after any in-app action, ZERO day-reset glitches; document go/no-go in `docs/decisions.md`. If no-go → widget deferred to v1.1 and communicated honestly (SC-010). Default posture: deferred v1.1; NEVER a v1 blocking task. **AC**: go/no-go decision written with measurements; zero impact on v1 if no-go. **Vérif**: spike report + decision record.

- [ ] T041 [US5] E2E share + restart: create `e2e/04_share_progress.yaml` (share → native sheet opens with 9:16 image, FR-026) + `e2e/05_restart_archive.yaml` (restart → "attempt 2" badge, archive readable, FR-025). **AC**: Maestro 04 + 05 green. **Vérif**: Maestro flows.

**Checkpoint**: US5 functional — calendar, day detail, intact archives with "attempt N", share via native sheet (FR-024→026); widget spike decided (FR-027), v1 not blocked either way.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Spec-compliance audit, performance on real device, final gates before build (FR-031, SC-001/006, plan.md Constitution G-c/G-d).

- [ ] T042 [Polish] Anti-pattern audit: full review vs FR-031 + DESIGN.md — zero dark/gradient/neon backgrounds, zero pill/pastel primary CTAs (solid black rectangles only), no centered list text, close cross never hidden, no forced account, no subscription wording, no punitive framing, no day-1 rating prompt; zero hardcoded color/radius/typo (all from `theme.ts`); visual capture of EVERY screen against DESIGN.md. **AC**: FR-031 checklist 0 violations; captures conform to DESIGN.md. **Vérif**: visual captures + code review.

- [ ] T043 [Polish] Performance on real device: cold start < 2 s on mid-range device; calendar scroll 60 fps (FlashList); water gauge + celebration smooth (Reanimated thread UI); midnight countdown without global re-render; React Compiler active (`app.json` `experiments.reactCompiler: true`, verify with `npx react-compiler-healthcheck`); zero jank in the daily loop (plan.md §Performance). **AC**: measurements meet plan.md §Performance goals. **Vérif**: device testing + captures.

- [ ] T044 [Polish] Final spec gate: walk the full FR-001→031 checklist + SC verification (SC-001 onboarding < 3 min, SC-006 zero crash/data-loss, SC-010 widget decision documented); `npm run typecheck` + `npm run lint` + `npm test` all green before any build; gate G-d code review before merge; update app constitution (`docs/decisions.md` + AGENTS.md app) with any rule that recurred twice (Spec Kit constitution living rule). **AC**: 100 % FR covered; all gates green. **Vérif**: checklist + review + CI runs.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories (gate G-b: engine tests green before any screen).
- **User Stories (Phase 3+)**: All depend on Foundational. Sequential in spec priority order (US1 → US2 → US3 → US4 → US5) unless staffed in parallel.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Starts after Foundational. ⚠️ The CONTRACT screen (T018) and the E2E flow (T019) depend on the challenge chooser `(setup)/choose.tsx` (T021, US2) — the contract displays the chosen challenge's rules/dates. Practical order: US1 pre-contract screens (T013–T016) → US2 chooser (T020–T021) → US1 SignaturePad + contract + ready + E2E (T017–T019).
- **US2 (P1)**: Starts after Foundational (engine tests green). Feeds the contract (T018) and the dashboard (T026). Independently testable via Jest + choose screen.
- **US3 (P2)**: Depends on US2 (needs an active challenge) and on the redirect/profile from US1 (T013). Consumes the Premium rail / crown badges from US4 (T032) for custom tasks.
- **US4 (P2)**: Post-ready modal depends on US1 ready (T019); Premium rail lives on the dashboard (T026, US3); crown badges appear on custom/edit screens (US2) and custom tasks (US3). Can be built in parallel with US3 once T031 exists.
- **US5 (P3)**: Reads days created by the daily loop (US3) and the Premium status from US4 (settings restore/smart reminders). Widget spike (T040) is independent and non-blocking.

### Within Each User Story

- Engine/domain tests FIRST (already green in Foundational) before screens.
- Store reducers before screens that consume them.
- Core implementation before integration (entry points wired last).
- Story complete → checkpoint → next priority.

### Parallel Opportunities

- All `[P]` tasks run in parallel: T003/T004 (tokens/constants), T006/T007/T010 (types/dates+presets/storage+validation), T017 (SignaturePad), T025 (UI kit), T040 (widget spike).
- Once Foundational is green, US1 pre-contract, US2 chooser and US3 UI kit can be worked in parallel by different devs.
- Each Maestro flow is written against its own story's screens (01: T019, 02: T030, 03: T034, 04+05: T041).

---

## Implementation Strategy

### MVP First (User Story 1 + 2 — the funnel)

1. Complete Phase 1: Setup (T001–T005)
2. Complete Phase 2: Foundational — engine tests green (T006–T012)
3. US2 chooser (T020–T021) then US1 complete funnel (T013–T019)
4. **STOP and VALIDATE**: Maestro 01 green — funnel < 3 min, zero account/permission (SC-001). This is the MVP: "I understood the program, I committed, I know what I do tomorrow."

### Incremental Delivery

1. Setup + Foundational → foundation ready (gate G-b passed)
2. US1+US2 → funnel MVP → test independently → demo
3. US3 → daily loop (retention) → test independently
4. US4 → paywall (revenue, never blocking) → test independently
5. US5 → progress/share/archive → test independently
6. Polish → compliance + performance + gates before build

### Parallel Team Strategy

1. Team completes Setup + Foundational together (sequential — blocks everything).
2. Once Foundational is green: dev A on US1 pre-contract, dev B on US2 chooser, dev C on US3 UI kit (T025).
3. Then: dev A contracts US1 (T017–T019), dev B continues US3, dev C US4 — stories integrate independently.
4. Widget spike (T040) can be picked up by anyone at the end of US5 — non-blocking.

---

## Notes

- [P] tasks = different files, no dependencies. One task = one session = one commit/PR (review before merge, AGENTS.md app).
- Gate G-b (plan.md Constitution): engine Jest tests (T009) MUST be green before any screen is implemented.
- Signature is NEVER persisted (FR-004) — only a `signed` boolean transits to the contract screen.
- Photos are files in documentDirectory, URIs in state — never base64 in MMKV (R3).
- Paywall close cross ALWAYS visible; free core never degraded (FR-020/021).
- Widget (FR-027) is CONDITIONAL: T040 spike only, go/no-go documented, v1.1 deferral is the honest default (SC-010).
- No backend, no account, no TanStack Query, no PostHog in v1 (FR-029, ADR-75C-008).