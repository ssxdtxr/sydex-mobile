import { Pressable, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { cn } from '@/shared/lib/cn'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const SPRING = { damping: 14, stiffness: 250 }

const variants = {
  primary: {
    container: 'bg-blue-500 border-blue-500',
    text: 'text-white',
  },
  outline: {
    container: 'bg-transparent border-blue-500',
    text: 'text-blue-500',
  },
} as const

type Variant = keyof typeof variants

const useButtonAnimation = () => {
  const pressed = useSharedValue(false)

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(pressed.value ? 0.96 : 1, SPRING) }],
    opacity: withTiming(pressed.value ? 0.85 : 1, { duration: 80 }),
  }))

  return {
    style,
    onPressIn: () => { pressed.value = true },
    onPressOut: () => { pressed.value = false },
  }
}

type ButtonProps = {
  children: string
  onPress: () => void
  variant?: Variant
  className?: string
}

export const Button = ({ children, onPress, variant = 'primary', className }: ButtonProps) => {
  const animation = useButtonAnimation()
  const { container, text } = variants[variant]

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={animation.onPressIn}
      onPressOut={animation.onPressOut}
      style={animation.style}
      className={cn(
        'rounded-full py-4 items-center border overflow-hidden',
        container,
        className,
      )}
    >
      <Text className={cn('text-xl font-bold uppercase', text)}>
        {children}
      </Text>
    </AnimatedPressable>
  )
}
