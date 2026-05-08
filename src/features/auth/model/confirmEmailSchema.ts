import { z } from 'zod'

export const confirmEmailSchema = z.object({
  email: z.string().email('Некорректный email'),
  code: z.string().length(6, 'Код должен содержать 6 цифр').regex(/^\d+$/, 'Только цифры'),
})

export type ConfirmEmailForm = z.infer<typeof confirmEmailSchema>
