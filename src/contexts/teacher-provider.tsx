import { useEffect, useState, type ReactNode } from 'react'
import type { Teacher } from '../schemas/teacher-schema'
import { TeacherContext } from './teacher-context-value'

const STORAGE_KEY = 'proffy:teacher'

function loadTeacher(): Teacher | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? (JSON.parse(stored) as Teacher) : null
    } catch {
        return null
    }
}

/**
 * Guarda o professor cadastrado. É a única fonte de verdade entre as telas:
 * o formulário salva aqui e o perfil lê daqui. Persiste no localStorage para
 * sobreviver a um refresh (ainda não há API).
 */
export function TeacherProvider({ children }: { children: ReactNode }) {
    const [teacher, setTeacher] = useState<Teacher | null>(loadTeacher)

    useEffect(() => {
        try {
            if (teacher) localStorage.setItem(STORAGE_KEY, JSON.stringify(teacher))
        } catch {
            // armazenamento cheio/indisponível: segue só em memória
        }
    }, [teacher])

    return (
        <TeacherContext.Provider value={{ teacher, saveTeacher: setTeacher }}>
            {children}
        </TeacherContext.Provider>
    )
}
