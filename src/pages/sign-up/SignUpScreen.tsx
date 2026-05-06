import { useState } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

type FormState = {
  username: string
  email: string
  password: string
}

export const SignUpScreen = () => {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (field: keyof FormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <View className="flex-1 bg-white px-6 pb-12 justify-between">

      <View className="flex-1 justify-center gap-6">
        <View className="gap-1">
          <Text className="text-3xl font-bold text-black">Создать аккаунт</Text>
          <Text className="text-base text-gray-400">Заполните данные для регистрации</Text>
        </View>

        <View className="gap-4">
          <Input
            label="Имя пользователя"
            placeholder="Egor"
            value={form.username}
            onChangeText={handleChange('username')}
            autoCapitalize="none"
          />
          <Input
            label="Email"
            placeholder="example@gmail.com"
            value={form.email}
            onChangeText={handleChange('email')}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Пароль"
            placeholder="Минимум 8 символов"
            value={form.password}
            onChangeText={handleChange('password')}
            secureTextEntry
          />
        </View>
      </View>

      <View className="gap-3">
        <Button onPress={() => console.log(form)}>Зарегистрироваться</Button>
        <Button variant="outline" onPress={() => router.back()}>Назад</Button>
      </View>

    </View>
  )
}
