import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import { signUpSchema, type SignUpForm } from '@/features/auth/model/signUpSchema'
import { useZodForm } from '@/shared/lib/useZodForm'
import { Button } from '@/shared/ui/Button'
import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { ScreenLayout } from '@/shared/ui/ScreenLayout'

export const SignUpScreen = () => {
  const router = useRouter()
  const form = useZodForm(signUpSchema, { username: '', email: '', password: '' })

  const onSubmit = (values: SignUpForm) => {
    // TODO: API call
    console.log(values) // eslint-disable-line no-console
    router.push('/confirm-email')
  }

  return (
    <ScreenLayout hasBack>
      <View className="flex-1 justify-center gap-6">
        <View className="gap-1">
          <Text className="text-3xl font-bold text-black">Создать аккаунт</Text>
          <Text className="text-base text-gray-400">Заполните данные для регистрации</Text>
        </View>

        <Form form={form}>
          <Form.Item<SignUpForm> name="username" label="Имя пользователя">
            <Input placeholder="Egor" autoCapitalize="none" />
          </Form.Item>

          <Form.Item<SignUpForm> name="email" label="Email">
            <Input placeholder="example@gmail.com" keyboardType="email-address" autoCapitalize="none" />
          </Form.Item>

          <Form.Item<SignUpForm> name="password" label="Пароль">
            <Input placeholder="Минимум 8 символов" secureTextEntry />
          </Form.Item>
        </Form>
      </View>

      <View className="gap-3">
        <Button onPress={form.handleSubmit(onSubmit)}>Зарегистрироваться</Button>
        <Button variant="outline" onPress={() => router.push('/sign-in')}>Уже есть аккаунт</Button>
      </View>
    </ScreenLayout>
  )
}
