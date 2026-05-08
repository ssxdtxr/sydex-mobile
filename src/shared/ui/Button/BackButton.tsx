import { useRouter } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import { Pressable } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const SPRING = { damping: 14, stiffness: 250 }

export const BackButton = () => {
  const router = useRouter()
  const pressed = useSharedValue(false)

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(pressed.value ? 0.96 : 1, SPRING) }],
    opacity: withTiming(pressed.value ? 0.85 : 1, { duration: 80 }),
  }))

  return (
    <AnimatedPressable
      onPress={() => router.back()}
      onPressIn={() => { pressed.value = true }}
      onPressOut={() => { pressed.value = false }}
      style={style}
      className="w-11 h-11 rounded-full bg-white border border-white items-center justify-center"
    >
      <SymbolView name="chevron.left" size={18} tintColor="#3b82f6" weight="semibold" />
    </AnimatedPressable>
  )
}
