/**
 * Camada de acesso à API de autenticação.
 *
 * O projeto ainda não possui backend, então o envio é simulado (mesma abordagem
 * do sign-in). Quando a API existir, basta trocar o corpo de
 * `requestPasswordReset` por um fetch para o endpoint real e manter os erros
 * lançados abaixo — as telas já tratam cada um deles.
 */

export class EmailNotFoundError extends Error {
    constructor() {
        super("E-mail não cadastrado")
        this.name = "EmailNotFoundError"
    }
}

// E-mail usado apenas para demonstrar o estado de "e-mail não cadastrado" na simulação.
const MOCK_UNREGISTERED_EMAIL = "naoexiste@proffy.com"

export async function requestPasswordReset(email: string): Promise<void> {
    // TODO: substituir pela chamada real, ex.:
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email }),
    // })
    // if (response.status === 404) throw new EmailNotFoundError()
    // if (!response.ok) throw new Error("Falha ao enviar")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (email.toLowerCase() === MOCK_UNREGISTERED_EMAIL) {
        throw new EmailNotFoundError()
    }
}
