import { View, Text, Pressable, type PressableProps } from "react-native";
import { cn } from "@/utils/cn";

type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ title, variant = "primary", className, ...props }: ButtonProps) {
  const styles = {
    primary: "bg-brand active:bg-brand/80",
    secondary: "bg-surface active:bg-surface-selected",
    ghost: "bg-transparent",
  } as const;

  const textColor = {
    primary: "text-brand-foreground",
    secondary: "text-content",
    ghost: "text-brand",
  } as const;

  return (
    <Pressable
      {...props}
      className={cn(
        "flex-row items-center justify-center rounded-md px-4 py-3",
        styles[variant],
        className
      )}
    >
      <Text className={cn("text-label", textColor[variant])}>{title}</Text>
    </Pressable>
  );
}