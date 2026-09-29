import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, View } from "react-native";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import { Button } from "@/components/Button";
import { Screen, ThemedText } from "@/components/themed";
import { formSchema, type FormValues } from "@/lib/validation";

export default function FormScreen() {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", age: undefined },
  });

  const onSubmit = (values: FormValues) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    console.log("Valid submission:", values);
  };

  return (
    <Screen className="p-4 pt-16">
      <Link href="/" asChild>
        <Button title="← Retour" variant="ghost" className="self-start px-0" />
      </Link>
      <ThemedText className="text-title font-bold mb-4">Formulaire validé</ThemedText>

      <View className="gap-3">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Nom"
              placeholderTextColor="#60646C"
              className="rounded-md border border-border bg-surface p-3 text-content"
            />
          )}
        />
        {formState.errors.name && (
          <ThemedText className="text-caption" style={{ color: "#FF3B30" }}>
            {formState.errors.name.message}
          </ThemedText>
        )}

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Email"
              placeholderTextColor="#60646C"
              keyboardType="email-address"
              autoCapitalize="none"
              className="rounded-md border border-border bg-surface p-3 text-content"
            />
          )}
        />
        {formState.errors.email && (
          <ThemedText className="text-caption" style={{ color: "#FF3B30" }}>
            {formState.errors.email.message}
          </ThemedText>
        )}

        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <TextInput
              value={field.value ? String(field.value) : ""}
              onChangeText={(v) => field.onChange(v === "" ? undefined : Number(v))}
              placeholder="Âge"
              placeholderTextColor="#60646C"
              keyboardType="number-pad"
              className="rounded-md border border-border bg-surface p-3 text-content"
            />
          )}
        />
        {formState.errors.age && (
          <ThemedText className="text-caption" style={{ color: "#FF3B30" }}>
            {formState.errors.age.message}
          </ThemedText>
        )}

        <Button
          title="Valider"
          disabled={!formState.isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
}