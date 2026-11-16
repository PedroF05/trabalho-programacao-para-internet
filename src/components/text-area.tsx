import type { TextareaHTMLAttributes } from "react"
import type { FieldError } from "react-hook-form"
import { ErrorMessage } from "./error-message"
import type { RegisterFn } from "./form-types"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label: string
    labelColor?: "text-text-purple-base" | "text-text-complement"
    bgColor?: "bg-white" | "bg-white-shape"
    spanLabel?: string
    register?: RegisterFn
    error?: FieldError
}


export function TextArea({
    name,
    label,
    labelColor = "text-text-purple-base",
    bgColor = "bg-white",
    spanLabel,
    register,
    error,
    ...rest }: TextAreaProps) {

    return (
        <>
            <label
                htmlFor={name}
                className= {`font-poppins-regular ${labelColor} text-sm/loose mb-2`}
            >
                {label}
                {spanLabel &&
                    <span className="ms-4 font-poppins-regular text-xs text-text-input">{spanLabel}</span>
                }
            </label>

            <div className="relative w-full">
            <textarea
                id={name}
                aria-invalid={error ? true : undefined}
                {...(register ? register(name) : {})}
                { ...rest }
                className={
                        `peer
                        w-full
                        ${bgColor}
                        rounded-lg
                        focus:outline-hidden
                        ps-6
                        pe-6
                        font-poppins-regular
                        text-base
                        text-text-base
                        placeholder:text-text-input
                        ${error ? "border-red-500" : "border-gray-lines-in-white"}
                        border-1
                        resize-y
                        min-h-[160px]
                        pt-5`
                    }
            />
            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-purple scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></span>
            </div>
            <ErrorMessage error={error} />
        </>

    )
}
