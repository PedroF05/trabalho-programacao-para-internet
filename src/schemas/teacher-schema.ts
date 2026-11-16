import { z } from 'zod'
import { onlyDigits, parseCurrency } from '../lib/masks'

const TIME_PATTERN = /^\d{2}:\d{2}$/

export const scheduleItemSchema = z
    .object({
        week_day: z.string().min(1, 'Selecione o dia da semana.'),
        from: z.string().regex(TIME_PATTERN, 'Informe o horário inicial.'),
        to: z.string().regex(TIME_PATTERN, 'Informe o horário final.'),
    })
    .refine(
        ({ from, to }) => !TIME_PATTERN.test(from) || !TIME_PATTERN.test(to) || from < to,
        {
            message: 'O horário final deve ser posterior ao inicial.',
            path: ['to'],
        },
    )

export const teacherFormSchema = z.object({
    name: z.string().trim().min(2, 'Informe seu nome.'),
    lastName: z.string().trim().min(2, 'Informe seu sobrenome.'),
    email: z.email('Informe um e-mail válido.'),
    whatsapp: z
        .string()
        .trim()
        .refine(
            (value) => [10, 11].includes(onlyDigits(value).length),
            'Informe um WhatsApp válido, com DDD.',
        ),
    biography: z
        .string()
        .trim()
        .min(1, 'Informe sua biografia.')
        .max(300, 'A biografia pode ter no máximo 300 caracteres.'),
    subject: z.string().min(1, 'Selecione a matéria.'),
    cost: z
        .string()
        .min(1, 'Informe o custo da sua hora por aula.')
        .transform(parseCurrency)
        .pipe(z.number().positive('O custo deve ser maior que zero.')),
    schedule: z
        .array(scheduleItemSchema)
        .min(1, 'Adicione ao menos um horário disponível.'),
})

/** O que circula nos campos (custo ainda é texto mascarado). */
export type TeacherFormInput = z.input<typeof teacherFormSchema>
/** O que o onSubmit recebe depois da validação (custo já é number). */
export type TeacherFormData = z.output<typeof teacherFormSchema>
export type ScheduleItem = TeacherFormData['schedule'][number]

export type Teacher = TeacherFormData & {
    avatarUrl: string
}
