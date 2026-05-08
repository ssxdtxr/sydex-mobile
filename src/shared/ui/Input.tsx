import { Text, TextInput, TextInputProps, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { cn } from "@/shared/lib/cn";

const AnimatedView = Animated.createAnimatedComponent(View);

const DURATION = { duration: 180 };

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const Input = ({
  label,
  error,
  className,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const focused = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => ({
    borderColor: error
      ? "#f87171"
      : interpolateColor(focused.value, [0, 1], ["#e5e7eb", "#3b82f6"]),
  }));

  const handleFocus: TextInputProps["onFocus"] = (e) => {
    focused.value = withTiming(1, DURATION);
    onFocus?.(e);
  };

  const handleBlur: TextInputProps["onBlur"] = (e) => {
    focused.value = withTiming(0, DURATION);
    onBlur?.(e);
  };

  return (
    <View className="gap-1">
      {label && (
        <Text className="text-sm font-medium text-gray-500">{label}</Text>
      )}

      <AnimatedView
        style={[containerStyle, { borderWidth: 1.5 }]}
        className="rounded-2xl bg-gray-50 px-4"
      >
        <TextInput
          className={cn(
            "text-base leading-none text-black pt-3 pb-[9px]",
            className,
          )}
          placeholderTextColor="#9ca3af"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </AnimatedView>

      {error && <Text className="text-xs text-red-400">{error}</Text>}
    </View>
  );
};
