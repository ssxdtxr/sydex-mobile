import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import { Button } from '@/shared/ui/Button'
import { ScreenLayout } from '@/shared/ui/ScreenLayout'

import Logo from '@/assets/logo.svg'

export const WelcomeScreen = () => {
  const router = useRouter()

  return (
    <ScreenLayout className="px-0 pb-0">
      {/* Верхняя часть — логотип */}
      <View className="flex-1 justify-center items-center gap-6">
        <Logo width={110} height={110} />

        <Text className="text-5xl font-bold text-white tracking-tight">
          Sydex
        </Text>
      </View>

      {/* Нижняя карточка */}
      <View
        style={{ borderTopLeftRadius: 36, borderTopRightRadius: 36 }}
        className="bg-white px-6 pt-8 pb-12 gap-6"
      >
        <View className="gap-1 items-center">
          <Text className="text-2xl font-bold text-black">Добро пожаловать</Text>
          <Text className="text-sm text-gray-400 text-center">
            Создайте аккаунт или войдите чтобы начать общение
          </Text>
        </View>

        <Button onPress={() => router.push('/sign-up')}>Продолжить</Button>
      </View>
    </ScreenLayout>
  )
}
