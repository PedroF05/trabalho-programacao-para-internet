import type { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
}

export function Button({ title, disabled, className, ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        disabled={disabled}
        className={twMerge(
            "w-full p-5 border-none rounded-lg font-archivo-semibold mt-10",
            disabled
                ? "bg-gray-shape text-text-complement cursor-not-allowed"
                : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer",
            className
        )}
        >
            {title}
        </button>
    )
}