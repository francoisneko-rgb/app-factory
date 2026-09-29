import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Button } from "@/components/Button";
import { Screen, ThemedText } from "@/components/themed";
import { usePosts } from "@/hooks/usePosts";
import { useAppStore } from "@/store/useAppStore";

export default function IndexScreen() {
  const { data, isLoading, isError, refetch } = usePosts();
  const onboardingCompleted = useAppStore((s) => s.onboardingCompleted);
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);

  return (
    <Screen className="p-4 pt-16">
      <ThemedText className="text-title font-bold">
        {onboardingCompleted ? "Bienvenue 👋" : "Template App Factory"}
      </ThemedText>
      <ThemedText secondary className="mb-4">
        FlashList + TanStack Query + Zustand/MMKV + RHF/zod — exemples de référence.
      </ThemedText>

      <View className="flex-row gap-2 mb-4">
        <Button
          title="Terminer l'onboarding"
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            completeOnboarding();
          }}
        />
        <Link href="/form" asChild>
          <Button title="Formulaire" variant="secondary" />
        </Link>
      </View>

      {isLoading && <ActivityIndicator className="mt-8" />}
      {isError && <ThemedText className="text-brand">Erreur réseau — réessayer.</ThemedText>}

      {data && (
        <FlashList
          data={data}
          keyExtractor={(item) => String(item.id)}
          onRefresh={() => void refetch()}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <View className="mb-3 rounded-md bg-surface p-3">
              <ThemedText className="text-label mb-1">{item.title}</ThemedText>
              <ThemedText secondary className="text-caption" numberOfLines={2}>
                {item.body}
              </ThemedText>
            </View>
          )}
        />
      )}
    </Screen>
  );
}