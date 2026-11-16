import { useContext } from 'react'
import { TeacherContext } from '../contexts/teacher-context-value'

export function useTeacher() {
    const context = useContext(TeacherContext)

    if (!context) {
        throw new Error('useTeacher deve ser usado dentro de <TeacherProvider>')
    }

    return context
}
