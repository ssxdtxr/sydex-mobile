import { z } from 'zod'

export const signInSchema = z.object({
  username: z.string().min(1, 'Введите имя пользователя'),
  password: z.string().min(1, 'Введите пароль'),
})

export type SignInForm = z.infer<typeof signInSchema>
