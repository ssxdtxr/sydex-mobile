import { PropsWithChildren } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { cn } from "@/shared/lib/cn";
import { BackButton } from "@/shared/ui/Button";

type ScreenLayoutProps = {
  hasBack?: boolean;
  className?: string;
};

export const ScreenLayout = ({
  children,
  hasBack = false,
  className,
}: PropsWithChildren<ScreenLayoutProps>) => {
  return (
    <Pressable
      className={cn("flex-1 bg-white px-6 pb-12", className)}
      onPress={Keyboard.dismiss}
    >
      {hasBack && (
        <View className="pt-14 pb-6">
          <BackButton />
        </View>
      )}
      {children}
    </Pressable>
  );
};
