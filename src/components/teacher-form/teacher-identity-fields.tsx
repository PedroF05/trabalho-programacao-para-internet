import { useFormContext } from "react-hook-form"
import { InputCustom } from "../input-custom"
import { maskPhone } from "../../lib/masks"
import type { TeacherFormInput } from "../../schemas/teacher-schema"

const WHATSAPP_PROPS = {
    name: "whatsapp",
    label: "Whatsapp",
    placeholder: "( ) _ ____ ____",
    labelColor: "text-text-complement",
    bgColor: "bg-white-shape",
    mask: maskPhone,
    inputMode: "tel",
} as const

type RegisterIdentityFieldsProps = {
    avatarUrl: string
    fullName: string
}

/** Cadastro: o professor já é conhecido (usuário logado), só falta o WhatsApp. */
export function RegisterIdentityFields({ avatarUrl, fullName }: RegisterIdentityFieldsProps) {
    const { register, formState: { errors } } = useFormContext<TeacherFormInput>()

    return (
        <div className="flex flex-row w-full justify-between items-start">
            <div className="flex items-center gap-6">
                <img src={avatarUrl} alt={fullName} className="w-20 h-20 rounded-full object-cover" />
                <strong className="font-archivo-semibold text-xl text-text-title">
                    {fullName}
                </strong>
            </div>
            <div className="flex flex-col w-56">
                <InputCustom {...WHATSAPP_PROPS} register={register} error={errors.whatsapp} />
            </div>
        </div>
    )
}

/** Perfil: todos os dados de identidade são editáveis. */
export function ProfileIdentityFields() {
    const { register, formState: { errors } } = useFormContext<TeacherFormInput>()

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <InputCustom
                        name="name"
                        label="Nome"
                        labelColor="text-text-complement"
                        bgColor="bg-white-shape"
                        register={register}
                        error={errors.name}
                    />
                </div>
                <div className="flex flex-col">
                    <InputCustom
                        name="lastName"
                        label="Sobrenome"
                        labelColor="text-text-complement"
                        bgColor="bg-white-shape"
                        register={register}
                        error={errors.lastName}
                    />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-8">
                <div className="flex flex-col col-span-3">
                    <InputCustom
                        name="email"
                        label="E-mail"
                        type="email"
                        labelColor="text-text-complement"
                        bgColor="bg-white-shape"
                        register={register}
                        error={errors.email}
                    />
                </div>
                <div className="flex flex-col col-span-2">
                    <InputCustom {...WHATSAPP_PROPS} register={register} error={errors.whatsapp} />
                </div>
            </div>
        </div>
    )
}
