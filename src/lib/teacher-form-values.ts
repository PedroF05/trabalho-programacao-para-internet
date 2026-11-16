import { currentUser } from '../data/current-user'
import type { Teacher, TeacherFormInput } from '../schemas/teacher-schema'
import { formatCurrency } from './masks'

export const BLANK_SLOT = { week_day: '', from: '', to: '' }

/** Valores iniciais do formulário de cadastro (primeiro acesso). */
export function blankFormValues(): TeacherFormInput {
    return {
        name: currentUser.name,
        lastName: currentUser.lastName,
        email: currentUser.email,
        whatsapp: '',
        biography: '',
        subject: '',
        cost: '',
        schedule: [{ ...BLANK_SLOT }],
    }
}

/** Converte o professor salvo (cost: number) nos valores dos campos (cost: texto). */
export function toFormValues(teacher: Teacher): TeacherFormInput {
    return {
        name: teacher.name,
        lastName: teacher.lastName,
        email: teacher.email,
        whatsapp: teacher.whatsapp,
        biography: teacher.biography,
        subject: teacher.subject,
        cost: formatCurrency(teacher.cost),
        schedule: teacher.schedule.map((item) => ({ ...item })),
    }
}
