import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Button } from "@/shared/ui/Button";

export const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pb-12 justify-between">
      <View className="flex-1 justify-center items-center gap-4">
        <View className="w-24 h-24 rounded-full bg-blue-500 justify-center items-center">
          <Text
            className="text-5xl text-white font-bold"
            style={{ lineHeight: 56 }}
          >
            S
          </Text>
        </View>
        <Text className="text-3xl font-bold text-black">Sydex</Text>
        <Text className="text-base text-gray-400 text-center">
          Быстрый и безопасный мессенджер
        </Text>
      </View>

      <Button onPress={() => router.push("/sign-up")}>Продолжить</Button>
    </View>
  );
};
