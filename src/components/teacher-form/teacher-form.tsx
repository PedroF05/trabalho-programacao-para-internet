import { FormProvider, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from "../card"
import { FormFooter } from "../form-footer"
import { FormSection } from "../form-section"
import { InputCustom } from "../input-custom"
import { Select } from "../select"
import { TextArea } from "../text-area"
import { ProfileIdentityFields, RegisterIdentityFields } from "./teacher-identity-fields"
import { ScheduleSection } from "./schedule-section"
import { SUBJECT_OPTIONS } from "../../data/options"
import { maskCurrency } from "../../lib/masks"
import {
    teacherFormSchema,
    type TeacherFormData,
    type TeacherFormInput,
} from "../../schemas/teacher-schema"

const BIOGRAPHY_MAX_LENGTH = 300

type TeacherFormProps = {
    /** "register": só WhatsApp na identidade. "profile": nome, e-mail etc. editáveis. */
    variant: "register" | "profile"
    defaultValues: TeacherFormInput
    avatarUrl: string
    onSubmit: (data: TeacherFormData) => void
}

/**
 * Formulário único usado no cadastro e no perfil. O estado vive todo no
 * react-hook-form e o zod é a única fonte de regras de validação.
 */
export function TeacherForm({ variant, defaultValues, avatarUrl, onSubmit }: TeacherFormProps) {
    const form = useForm<TeacherFormInput, unknown, TeacherFormData>({
        resolver: zodResolver(teacherFormSchema),
        defaultValues,
    })

    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = form
    const biographyLength = (useWatch({ control, name: "biography" }) ?? "").length
    const fullName = `${defaultValues.name} ${defaultValues.lastName}`

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Card>
                    <FormSection title="Seus dados">
                        <div className="flex flex-col gap-6">
                            {variant === "register"
                                ? <RegisterIdentityFields avatarUrl={avatarUrl} fullName={fullName} />
                                : <ProfileIdentityFields />
                            }
                            <div className="flex flex-col">
                                <TextArea
                                    name="biography"
                                    label="Biografia"
                                    spanLabel="(Máximo 300 caracteres)"
                                    labelColor="text-text-complement"
                                    bgColor="bg-white-shape"
                                    maxLength={BIOGRAPHY_MAX_LENGTH}
                                    register={register}
                                    error={errors.biography}
                                />
                                <p className="mt-1 text-right font-poppins-regular text-xs text-text-input">
                                    {biographyLength}/{BIOGRAPHY_MAX_LENGTH}
                                </p>
                            </div>
                        </div>
                    </FormSection>

                    <FormSection title="Sobre a aula">
                        <div className="grid grid-cols-5 gap-8">
                            <div className="flex flex-col col-span-3">
                                <Select
                                    name="subject"
                                    label="Matéria"
                                    labelColor="text-text-complement"
                                    bgColor="bg-white-shape"
                                    optionDefault="Selecione qual você quer ensinar"
                                    options={SUBJECT_OPTIONS}
                                    register={register}
                                    error={errors.subject}
                                />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <InputCustom
                                    name="cost"
                                    label="Custo da sua hora por aula"
                                    labelColor="text-text-complement"
                                    bgColor="bg-white-shape"
                                    startAdornment="R$"
                                    inputMode="numeric"
                                    placeholder="0,00"
                                    mask={maskCurrency}
                                    register={register}
                                    error={errors.cost}
                                />
                            </div>
                        </div>
                    </FormSection>

                    <ScheduleSection />

                    <FormFooter isSubmitting={isSubmitting} />
                </Card>
            </form>
        </FormProvider>
    )
}
