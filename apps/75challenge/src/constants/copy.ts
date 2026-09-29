/**
 * 75 Challenge — EN user-facing copy (market: US / global, PRD §7).
 *
 * Every user-facing string lives here — screens never hardcode copy (T004 AC).
 * The price string derives from `PREMIUM_PRICE` (config.ts) so the two can
 * never drift apart.
 */
import { PREMIUM_PRICE } from "./config";

export const Copy = {
  common: {
    appName: "75 Challenge",
    skip: "Skip",
    back: "Back",
    continue: "Continue",
    close: "Close",
    done: "Done",
    cancel: "Cancel",
    clear: "Clear",
    retry: "Try again",
    save: "Save",
    delete: "Delete",
    confirm: "Confirm",
  },

  // ---- Onboarding — accroche (PRD étape 1, FR-001) ----
  onboarding: {
    socialProof: "12,400+ challenges started this month",
    slides: [
      {
        title: "75 days to prove it to yourself.",
        subtitle:
          "One challenge, one commitment, no shortcuts. You decide the rules.",
      },
      {
        title: "A program that fits your life.",
        subtitle:
          "Soft, Medium or Hard — the duration and daily doses adapt to you.",
      },
      {
        title: "Small daily wins add up.",
        subtitle:
          "Every check, every photo, every completed day brings you closer.",
      },
      {
        title: "Most people quit before day 10.",
        subtitle: "You're already ahead. Show up for yourself.",
      },
    ],
  },

  // ---- Education — 1 règle = 1 écran (PRD étape 2) ----
  education: {
    title: "The rules",
    subtitle: "Simple rules, real numbers. That's the whole program.",
    rules: {
      water: {
        title: "Drink",
        body: "Your body will thank you — up to 3.8 L of water a day in Hard mode.",
      },
      exercise: {
        title: "Move",
        body: "Up to 2 × 45 min a day in Hard mode, one session outdoors.",
      },
      reading: {
        title: "Read",
        body: "10 pages of non-fiction a day in Hard mode. Real pages, real focus.",
      },
      diet: {
        title: "Eat",
        body: "A diet you choose — strict in Hard mode: no alcohol, no cheat meals.",
      },
      photo: {
        title: "Document",
        body: "A progress photo every day in Hard mode — proof of the work.",
      },
    },
  },

  // ---- Quiz (PRD étape 3, FR-001) ----
  quiz: {
    title: "A few questions",
    motivation: {
      question: "Why are you starting?",
      options: [
        "Build discipline",
        "Prove I can finish",
        "Upgrade my lifestyle",
        "Become a better version of me",
      ],
    },
    fear: {
      question: "What worries you most?",
      options: [
        "Missing a day",
        "Losing motivation",
        "Finding the time",
        "Getting injured",
      ],
    },
    antiQuitInterlude:
      "Most people quit before day 10. You're already ahead.",
    firstName: {
      question: "What's your first name?",
      placeholder: "Your first name",
      hint: "2–20 characters",
    },
    next: "Next",
  },

  // ---- Confiance / privacy (PRD étape 4, FR-002) ----
  trust: {
    title: "Your privacy stays with you.",
    bullets: [
      "Everything is stored on your phone.",
      "Nothing is sent to our servers.",
      "No account. No email. No catch.",
    ],
    reviews: {
      title: "Loved by people who finish",
      items: [
        "“Finally a challenge app with no forced account.” ★★★★★",
        "“The signed contract kept me going past day 10.” ★★★★★",
        "“One honest payment, no subscriptions. Rare.” ★★★★★",
        "“Calm, simple, beautiful. Exactly what I needed.” ★★★★★",
      ],
    },
  },

  // ---- Contrat signé au doigt (PRD étape 5, F3) ----
  contract: {
    title: "{name}, here is your commitment.",
    dates: "Start {startDate} → End {endDate}",
    duration: "{duration} days, {intensityLabel} mode",
    signatureLabel: "Sign here",
    signatureNotice: "Your signature is not saved — it stays on this screen.",
    commit: "I commit",
    commitmentsLabel: "Your rules",
  },

  // ---- Confirmation (PRD étape 6) ----
  ready: {
    title: "You're ready.",
    subtitle: "Tomorrow is day 1. Show up for yourself.",
    dayOneCardTitle: "Day one",
    cta: "Let's go",
  },

  // ---- Paywall (PRD étape 7, F4 / FR-019..023) ----
  paywall: {
    title: "Unlock your full challenge",
    subtitle: "One payment. Lifetime. No subscription.",
    price: `${PREMIUM_PRICE} — one payment, lifetime`,
    featuredBadge: "Popular",
    benefits: [
      "Edit any preset — doses and duration",
      "Unlimited custom tasks, including “required for day completion”",
      "100% custom challenge — 1 to 365 days, your rules",
      "Smart reminders per task, tuned to you",
    ],
    restore: "Restore my purchase",
    noSubscriptionNote: "No subscription, no hidden renewal.",
    paymentNote: "Payment is handled by the App Store / Google Play. No account needed.",
    closeLabel: "Close",
  },

  // ---- Rail + couronnes (couche 2 & 3, FR-023) ----
  premium: {
    railTitle: "Premium",
    railSubtitle: "Unlock customization",
    crownActionCustomTask: "Custom tasks — Premium",
    crownActionCustomChallenge: "Custom challenge — Premium",
    crownActionEditPreset: "Edit rules — Premium",
    crownActionSmartReminders: "Smart reminders — Premium",
  },

  // ---- Dashboard (PRD étape 8 & 9, F5) ----
  dashboard: {
    dayOf: "Day {n} of {total}",
    timeLeft: "Time left",
    dayProgress: "{percent}% of today",
    atLeast: "At least {dose}",
    attemptBadge: "Attempt {n}",
    firstAttempt: "First attempt",
  },

  // ---- Jour manqué non punitif (FR-017 / FR-031) ----
  missedDay: {
    message:
      "No big deal. You pick up tomorrow — or start over, your choice.",
    strictNotice:
      "Strict mode: a missed day archives this attempt and you start a fresh day 1.",
    flexibleNotice:
      "Flexible mode: the day is marked incomplete and your attempt continues.",
  },

  // ---- Photo (F7) ----
  photo: {
    add: "Add a photo",
    take: "Take photo",
    library: "Choose from library",
    cameraDenied: "Camera is unavailable — pick a photo from your library instead.",
    confirm: "Confirm photo",
    retake: "Retake",
  },

  // ---- Tâches personnalisées (F8) ----
  customTask: {
    title: "Custom task",
    namePlaceholder: "Task name",
    descriptionPlaceholder: "Optional description",
    typeCheckbox: "Checkbox",
    typeCounter: "Counter",
    targetPlaceholder: "Daily target",
    requiredForDay: "Required for day completion",
    add: "Add task",
    save: "Save task",
  },

  // ---- Progression / calendrier (F9, F10) ----
  progress: {
    globalCompletion: "{percent}% complete",
    perfectDays: "{count} perfect days",
    attemptTitle: "Attempt {n}",
    readOnlyNotice: "Archived attempt — read only.",
  },

  // ---- Partage (F13) ----
  share: {
    button: "Share my progress",
    sheetTitle: "Share your progress",
  },

  // ---- Paramètres (F12 / FR-022 / FR-028) ----
  settings: {
    title: "Settings",
    units: "Units",
    unitMetric: "Metric",
    unitImperial: "Imperial",
    reminders: "Reminders",
    dailyReminder: "Daily reminder",
    dailyReminderHint: "One reminder a day, at the time you choose. Free.",
    smartReminders: "Smart reminders",
    smartRemindersHint: "Per task, multiple times, tuned to your answers. Premium.",
    reminderTimeLabel: "Reminder time",
    notificationPermissionTitle: "Reminders need notifications",
    notificationPermissionBody:
      "Allow notifications so your reminder can reach you. You can change this anytime in settings.",
    restore: "Restore my purchase",
    restart: "Restart challenge",
    restartConfirmTitle: "Restart challenge?",
    restartConfirmBody:
      "Your current attempt is archived with all photos and notes. You start a fresh day 1.",
    about: "About",
    privacyReaffirmed:
      "Everything stays on your phone. No account, no servers, ever.",
  },

  // ---- Divers / erreurs ----
  misc: {
    genericError: "Something went wrong. Please try again.",
    noActiveChallenge: "No active challenge yet.",
  },
} as const;

/** Simple placeholder interpolation: `tpl("Day {n} of {total}", { n: 3, total: 75 })`. */
export function tpl(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in vars ? String(vars[key]) : `{${key}}`,
  );
}