import { PropsWithChildren } from 'react'
import { Keyboard, Pressable, View } from 'react-native'

import { cn } from '@/shared/lib/cn'
import { BackButton } from '@/shared/ui/Button'

type ScreenLayoutProps = {
  hasBack?: boolean
  className?: string
}

export const ScreenLayout = ({
  children,
  hasBack = false,
  className,
}: PropsWithChildren<ScreenLayoutProps>) => {
  return (
    <Pressable
      className={cn('flex-1 bg-blue-500 px-6 pb-12', className)}
      onPress={Keyboard.dismiss}
    >
      {hasBack && (
        <View className="absolute top-14 left-6 z-10">
          <BackButton />
        </View>
      )}
      {children}
    </Pressable>
  )
}
