import type { UseFormRegisterReturn } from 'react-hook-form'

/**
 * Assinatura mínima do `register` do react-hook-form. Os campos genéricos
 * (Input, Select, TextArea) não precisam conhecer o tipo do formulário.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RegisterFn = (name: any) => UseFormRegisterReturn
