export type SelectOption = {
    value: string
    label: string
}

export const SUBJECT_OPTIONS: SelectOption[] = [
    { value: 'Artes', label: 'Artes' },
    { value: 'Biologia', label: 'Biologia' },
    { value: 'Ciências', label: 'Ciências' },
    { value: 'Educação física', label: 'Educação física' },
    { value: 'Física', label: 'Física' },
    { value: 'Geografia', label: 'Geografia' },
    { value: 'História', label: 'História' },
    { value: 'Matemática', label: 'Matemática' },
    { value: 'Português', label: 'Português' },
    { value: 'Química', label: 'Química' },
]

export const WEEK_DAY_OPTIONS: SelectOption[] = [
    { value: '0', label: 'Domingo' },
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
]

/** Horas cheias para "Das"/"Até": 6 -> "06:00" (valor) e "6 horas" (rótulo). */
export const HOUR_OPTIONS: SelectOption[] = Array.from({ length: 18 }, (_, index) => {
    const hour = index + 6
    return { value: `${String(hour).padStart(2, '0')}:00`, label: `${hour} horas` }
})
