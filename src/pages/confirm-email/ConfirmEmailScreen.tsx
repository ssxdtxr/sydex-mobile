import { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { confirmEmailSchema, type ConfirmEmailForm } from '@/features/auth/model/confirmEmailSchema'
import { useZodForm } from '@/shared/lib/useZodForm'
import { Button } from '@/shared/ui/Button'
import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { ScreenLayout } from '@/shared/ui/ScreenLayout'

const RESEND_TIMEOUT = 30

const useResendTimer = () => {
  const [seconds, setSeconds] = useState(RESEND_TIMEOUT)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = () => {
    setSeconds(RESEND_TIMEOUT)
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current!)
          return 0
        }
        return s - 1
      })
    }, 1000)
  }

  useEffect(() => {
    start()
    return () => { clearInterval(intervalRef.current!) }
  }, [])

  return { seconds, restart: start }
}

export const ConfirmEmailScreen = () => {
  const form = useZodForm(confirmEmailSchema, { email: '', code: '' })
  const { seconds, restart } = useResendTimer()

  const onSubmit = (values: ConfirmEmailForm) => {
    // TODO: API call
    console.log(values) // eslint-disable-line no-console
  }

  const onResend = () => {
    // TODO: API call
    restart()
  }

  return (
    <ScreenLayout hasBack>
      <View className="flex-1 justify-center gap-6">
        <View className="gap-1">
          <Text className="text-3xl font-bold text-black">Подтверждение</Text>
          <Text className="text-base text-gray-400">Введите email и код из письма</Text>
        </View>

        <Form form={form}>
          <Form.Item<ConfirmEmailForm> name="email" label="Email">
            <Input placeholder="example@gmail.com" keyboardType="email-address" autoCapitalize="none" />
          </Form.Item>

          <Form.Item<ConfirmEmailForm> name="code" label="Код подтверждения">
            <Input placeholder="336362" keyboardType="number-pad" maxLength={6} />
          </Form.Item>
        </Form>

        <TouchableOpacity onPress={onResend} disabled={seconds > 0}>
          {seconds > 0 ? (
            <Text className="text-sm text-gray-400">
              Отправить повторно через{' '}
              <Text className="text-blue-500 font-medium">{seconds}с</Text>
            </Text>
          ) : (
            <Text className="text-sm text-blue-500 font-medium">Отправить повторно</Text>
          )}
        </TouchableOpacity>
      </View>

      <Button onPress={form.handleSubmit(onSubmit)}>Подтвердить</Button>
    </ScreenLayout>
  )
}
