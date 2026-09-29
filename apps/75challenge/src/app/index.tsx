import { Text, View } from "react-native";

// Placeholder index screen — keeps the app compiling after the golden-template
// demo code was removed in T001. Rewritten in T013 with the
// `profile.onboardingDone ? /dashboard : /onboarding` redirect (FR-001).
export default function IndexScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>75 Challenge</Text>
    </View>
  );
}