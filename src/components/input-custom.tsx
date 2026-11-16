import type { ChangeEvent, InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
import { ErrorMessage } from "./error-message";
import type { RegisterFn } from "./form-types";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    labelColor?: "text-text-purple-base" | "text-text-complement"
    bgColor?: "bg-white" | "bg-white-shape"
    spanLabel?: string
    /** Texto fixo à esquerda do campo (ex.: "R$"). */
    startAdornment?: string
    /** Transforma o texto digitado antes de ir para o formulário (máscara). */
    mask?: (value: string) => string
    register?: RegisterFn
    error?: FieldError
}

export function InputCustom({
    name,
    label,
    labelColor = "text-text-purple-base",
    bgColor = "bg-white",
    spanLabel,
    startAdornment,
    mask,
    register,
    error,
    ...rest
}: InputCustomProps) {
    const field = register ? register(name) : undefined

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (mask) event.target.value = mask(event.target.value)
        field?.onChange(event)
    }

    return (
        <>
            <label
                htmlFor={name}
                className={`font-poppins-regular ${labelColor} text-sm/loose mb-2`}
            >
                { label }
                {
                    spanLabel &&
                    <span className="ms-4 font-poppins-regular text-sm text-text-input">{spanLabel}</span>
                }
            </label>
            <div className="relative w-full">
                {startAdornment && (
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-poppins-regular text-base text-text-base pointer-events-none">
                        {startAdornment}
                    </span>
                )}
                <input
                    id={ name }
                    aria-invalid={error ? true : undefined}
                    {...field}
                    onChange={handleChange}
                    {...rest}
                    className={`
                        peer
                        w-full h-[56px]
                        ${bgColor}
                        rounded-lg
                        focus:outline-hidden
                        ${startAdornment ? "ps-14" : "ps-6"}
                        font-poppins-regular
                        text-base
                        text-text-base
                        placeholder:text-text-input
                        ${error ? "border-red-500" : "border-gray-lines-in-white"}
                        border
                        pr-2
                    `}
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-purple scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></span>
            </div>
            <ErrorMessage error={error} />
        </>
    )
}
