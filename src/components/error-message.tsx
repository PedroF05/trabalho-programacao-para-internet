import type { FieldError } from 'react-hook-form'

type ErrorMessageProps = {
    error?: FieldError
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    if (!error?.message) return null

    return (
        <p role="alert" className="mt-1 text-xs font-poppins-regular text-red-500">
            {error.message}
        </p>
    )
}
