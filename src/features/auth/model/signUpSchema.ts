import { z } from 'zod'

export const signUpSchema = z.object({
  username: z.string().min(2, 'Минимум 2 символа').max(32, 'Максимум 32 символа'),
  email: z.string().email('Некорректный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
})

export type SignUpForm = z.infer<typeof signUpSchema>
