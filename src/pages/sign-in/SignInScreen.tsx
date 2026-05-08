import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import { signInSchema, type SignInForm } from '@/features/auth/model/signInSchema'
import { useZodForm } from '@/shared/lib/useZodForm'
import { Button } from '@/shared/ui/Button'
import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { ScreenLayout } from '@/shared/ui/ScreenLayout'

export const SignInScreen = () => {
  const router = useRouter()
  const form = useZodForm(signInSchema, { username: '', password: '' })

  const onSubmit = (values: SignInForm) => {
    // TODO: API call
    console.log(values) // eslint-disable-line no-console
  }

  return (
    <ScreenLayout hasBack>
      <View className="flex-1 justify-center gap-6">
        <View className="gap-1">
          <Text className="text-3xl font-bold text-black">Добро пожаловать</Text>
          <Text className="text-base text-gray-400">Войдите в свой аккаунт</Text>
        </View>

        <Form form={form}>
          <Form.Item<SignInForm> name="username" label="Имя пользователя">
            <Input placeholder="Egor" autoCapitalize="none" />
          </Form.Item>

          <Form.Item<SignInForm> name="password" label="Пароль">
            <Input placeholder="••••••••" secureTextEntry />
          </Form.Item>
        </Form>
      </View>

      <Button onPress={form.handleSubmit(onSubmit)}>Войти</Button>
    </ScreenLayout>
  )
}
