import { Navigate, useLocation } from "react-router"
import { Finally } from "../../components/finally"

export function FinallyForgotPassword() {
    const location = useLocation()

    // Só faz sentido chegar aqui depois de enviar o e-mail; acesso direto volta ao formulário.
    if (!location.state?.email) {
        return <Navigate to="/forgot-password" replace />
    }

    return <Finally
                title="Redefinição enviada!"
                subtitle={<>Boa, agora é só checar o e-mail que foi enviado para você<br />redefinir sua senha e aproveitar os estudos.</>}
                titleButton="Voltar ao login"
                path="/sign-in"
            />
}
