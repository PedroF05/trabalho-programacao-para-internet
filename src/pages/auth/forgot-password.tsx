import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useLocation, useNavigate } from "react-router"

import goBack from "../../assets/goback.svg"
import { BackgroundIntro } from "../../components/backgroundIntro"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { EmailNotFoundError, requestPasswordReset } from "../../services/auth"

const forgotPasswordForm = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Informe seu e-mail")
        .pipe(z.email("E-mail inválido")),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordForm>

export function ForgotPassword() {
    const navigate = useNavigate()
    const location = useLocation()

    const {
        register,
        handleSubmit,
        setError,
        formState: {
            isSubmitting,
            errors,
            isValid
        }
    } = useForm<ForgotPasswordForm>({
        resolver: zodResolver(forgotPasswordForm),
        mode: "onChange"
    })

    async function handleForgotPassword({ email }: ForgotPasswordForm) {
        try {
            await requestPasswordReset(email)
            navigate("/forgot-password/finally-forgot-password", {
                replace: true,
                state: { email }
            })
        } catch (error) {
            if (error instanceof EmailNotFoundError) {
                setError("email", { type: "server", message: "E-mail não cadastrado" })
                toast.error("Não encontramos uma conta com esse e-mail")
                return
            }
            toast.error("Não foi possível enviar agora. Tente novamente.")
        }
    }

    function goBackPage() {
        // Se a página foi aberta direto (sem histórico), volta para o login.
        if (location.key === "default") {
            navigate("/sign-in")
            return
        }
        navigate(-1)
    }

    return (
        <div className="grid min-h-screen grid-cols-5 antialiased">
            <div className="bg-background col-span-2 flex flex-col h-full items-center justify-center relative">
                <div className="absolute top-8 inset-x-0 flex justify-center">
                    <div className="w-[352px]">
                        <button
                            type="button"
                            className="cursor-pointer"
                            onClick={goBackPage}
                            aria-label="Voltar para a página anterior"
                        >
                            <img src={goBack} alt="" className="w-12 h-8" />
                        </button>
                    </div>
                </div>

                <div className="w-[352px] flex flex-col justify-center gap-6">
                    <h1 className="text-3xl font-poppins-semibold text-text-title">
                        Eita, esqueceu<br />sua senha?
                    </h1>
                    <h3 className="text-base font-poppins-regular text-text-base">
                        Não esquenta, vamos dar um jeito nisso.
                    </h3>

                    <form onSubmit={handleSubmit(handleForgotPassword)} noValidate>
                        <Input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            rounded="all"
                            register={register}
                            error={errors.email}
                        />

                        {errors.email?.message && (
                            <p role="alert" className="mt-2 text-sm font-poppins-regular text-red-500">
                                {errors.email.message}
                            </p>
                        )}

                        <Button
                            type="submit"
                            className="mt-6"
                            disabled={isSubmitting || !isValid}
                            title={isSubmitting ? "Enviando..." : "Enviar"}
                        />
                    </form>
                </div>
            </div>
            <BackgroundIntro />
        </div>
    )
}
