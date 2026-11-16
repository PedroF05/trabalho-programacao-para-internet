export function onlyDigits(value: string): string {
    return value.replace(/\D/g, '')
}

/** (47) 98897-1458 (celular) ou (47) 8897-1458 (fixo). */
export function maskPhone(value: string): string {
    const digits = onlyDigits(value).slice(0, 11)

    if (digits.length === 0) return ''
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

/** Digitou "2000" -> "20,00". Os dígitos digitados entram sempre pelos centavos. */
export function maskCurrency(value: string): string {
    const digits = onlyDigits(value).replace(/^0+/, '').slice(0, 9)

    if (digits.length === 0) return ''

    const padded = digits.padStart(3, '0')
    const integerPart = padded.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    const decimalPart = padded.slice(-2)

    return `${integerPart},${decimalPart}`
}

/** "1.234,56" -> 1234.56 */
export function parseCurrency(value: string): number {
    return Number(value.replace(/\./g, '').replace(',', '.'))
}

/** 20 -> "20,00" */
export function formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}
