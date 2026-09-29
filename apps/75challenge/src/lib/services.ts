/**
 * Services optionnels — activés UNIQUEMENT si la clé correspondante
 * est présente dans .env. Le template tourne sans aucun service.
 * (Sentry, PostHog, RevenueCat, Clerk — voir .env.example)
 */
export const services = {
  sentry: Boolean(process.env.EXPO_PUBLIC_SENTRY_DSN),
  posthog: Boolean(process.env.EXPO_PUBLIC_POSTHOG_KEY),
  revenuecat: Boolean(
    process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ||
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY
  ),
  clerk: Boolean(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY),
} as const;