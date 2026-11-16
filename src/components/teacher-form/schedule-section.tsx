import { Plus } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Select } from "../select"
import { FormSection } from "../form-section"
import { HOUR_OPTIONS, WEEK_DAY_OPTIONS } from "../../data/options"
import { BLANK_SLOT } from "../../lib/teacher-form-values"
import type { TeacherFormData, TeacherFormInput } from "../../schemas/teacher-schema"

const FIELD_STYLE = {
    labelColor: "text-text-complement",
    bgColor: "bg-white-shape",
} as const

type ScheduleRowProps = {
    index: number
    /** Sem `onRemove` não há link de exclusão (sobra sempre ao menos um horário). */
    onRemove?: () => void
}

/** Um horário: dia da semana, "Das", "Até" e, quando possível, o link de excluir. */
function ScheduleRow({ index, onRemove }: ScheduleRowProps) {
    const { register, formState: { errors } } =
        useFormContext<TeacherFormInput, unknown, TeacherFormData>()
    const rowErrors = errors.schedule?.[index]

    return (
        <div className="w-full">
            <div className="grid grid-cols-[1fr_9rem_9rem] gap-4">
                <div className="flex flex-col">
                    <Select
                        {...FIELD_STYLE}
                        name={`schedule.${index}.week_day`}
                        label="Dia da semana"
                        optionDefault="Selecione o dia"
                        options={WEEK_DAY_OPTIONS}
                        register={register}
                        error={rowErrors?.week_day}
                    />
                </div>
                <div className="flex flex-col">
                    <Select
                        {...FIELD_STYLE}
                        name={`schedule.${index}.from`}
                        label="Das"
                        optionDefault="Hora"
                        options={HOUR_OPTIONS}
                        register={register}
                        error={rowErrors?.from}
                    />
                </div>
                <div className="flex flex-col">
                    <Select
                        {...FIELD_STYLE}
                        name={`schedule.${index}.to`}
                        label="Até"
                        optionDefault="Hora"
                        options={HOUR_OPTIONS}
                        register={register}
                        error={rowErrors?.to}
                    />
                </div>
            </div>

            <div className="flex items-center w-full gap-8 mt-8 mb-6">
                <span className="flex-1 border-t border-gray-lines-in-white" />
                {onRemove && (
                    <>
                        <button
                            type="button"
                            onClick={onRemove}
                            className="font-archivo-semibold text-xs text-red-500 hover:text-red-600 transition cursor-pointer"
                        >
                            Excluir horário
                        </button>
                        <span className="flex-1 border-t border-gray-lines-in-white" />
                    </>
                )}
            </div>
        </div>
    )
}

export function ScheduleSection() {
    const { control, formState: { errors } } =
        useFormContext<TeacherFormInput, unknown, TeacherFormData>()
    const { fields, append, remove } = useFieldArray({ control, name: "schedule" })

    const hasMoreThanOne = fields.length > 1
    const listError = errors.schedule?.root ?? errors.schedule

    return (
        <FormSection
            title="Horários disponíveis"
            action={
                <button
                    type="button"
                    onClick={() => append({ ...BLANK_SLOT })}
                    className="flex items-center gap-2 text-base font-archivo-semibold text-purple hover:text-dark-purple transition cursor-pointer"
                >
                    <Plus size={16} />
                    Novo horário
                </button>
            }
        >
            {fields.map((field, index) => (
                <ScheduleRow
                    key={field.id}
                    index={index}
                    onRemove={hasMoreThanOne ? () => remove(index) : undefined}
                />
            ))}

            {listError?.message && (
                <p role="alert" className="mt-4 text-xs font-poppins-regular text-red-500">
                    {listError.message}
                </p>
            )}
        </FormSection>
    )
}
