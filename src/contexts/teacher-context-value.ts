import { createContext } from 'react'
import type { Teacher } from '../schemas/teacher-schema'

export type TeacherContextValue = {
    teacher: Teacher | null
    saveTeacher: (teacher: Teacher) => void
}

export const TeacherContext = createContext<TeacherContextValue | null>(null)
