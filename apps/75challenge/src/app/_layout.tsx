import "@/global.css";

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

// Minimal root layout for Phase 1 (Setup).
// Rewritten in T013: font loading, SplashScreen, SafeAreaProvider, redirects.
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}