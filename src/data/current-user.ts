import avatar from '../assets/avatar.svg'

/**
 * Usuário logado (mock). Ainda não existe API/autenticação no projeto,
 * então os dados de identidade vêm daqui. Quando houver login, basta
 * trocar esta constante por dados vindos do back-end.
 */
export const currentUser = {
    name: 'Rafael',
    lastName: 'Rocha',
    email: 'rafael.rocha@email.com',
    avatarUrl: avatar,
}
