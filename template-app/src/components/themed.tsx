import { View, Text, useColorScheme, type ViewProps, type TextProps } from "react-native";
import { Colors } from "@/constants/theme";
import { cn } from "@/utils/cn";

export function Screen({ className, style, ...props }: ViewProps) {
  const scheme = (useColorScheme() ?? "light") as keyof typeof Colors;
  return (
    <View
      {...props}
      style={[{ backgroundColor: Colors[scheme].background }, style]}
      className={cn("flex-1", className)}
    />
  );
}

export function ThemedText({
  className,
  secondary,
  ...props
}: TextProps & { secondary?: boolean }) {
  const scheme = (useColorScheme() ?? "light") as keyof typeof Colors;
  const color = Colors[scheme][secondary ? "contentSecondary" : "content"];
  return (
    <Text
      {...props}
      style={[{ color }, props.style]}
      className={cn("text-body", className)}
    />
  );
}