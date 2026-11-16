import type { ReactNode } from "react"

type FormSectionProps = {
    title: string
    /** Elemento à direita do título (ex.: botão "+ Novo horário"). */
    action?: ReactNode
    children: ReactNode
}

/**
 * fieldset + legend: agrupa os controles com nome (acessível) e o próprio
 * legend vira a linha divisória da seção.
 */
export function FormSection({ title, action, children }: FormSectionProps) {
    return (
        <fieldset className="flex flex-col min-w-0 mx-16 mt-14">
            <legend className="flex w-full items-center justify-between pb-5 mb-6 font-archivo-semibold text-2xl text-text-title border-b border-gray-lines-in-white">
                {title}
                {action}
            </legend>
            {children}
        </fieldset>
    )
}
