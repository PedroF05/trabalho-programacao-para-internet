import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
    /** "full" ocupa toda a largura (padrão); "compact" ajusta ao texto, para rodapés. */
    size?: "full" | "compact"
}

const SIZE_CLASSES = {
    full: "w-full p-5 mt-10",
    compact: "py-4 px-10",
}

export function Button({ title, disabled, size = "full", ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        disabled={disabled}
        className={`${SIZE_CLASSES[size]} border-none rounded-lg font-archivo-semibold
            ${disabled
                ? "bg-gray-shape text-text-complement cursor-not-allowed"
                : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
            }
        `}
        >
            {title}
        </button>
    )
}
