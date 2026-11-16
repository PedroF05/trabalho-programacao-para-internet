import attentionIcon from "../assets/attention.svg"
import { Button } from "./button"

type FormFooterProps = {
    isSubmitting?: boolean
}

export function FormFooter({ isSubmitting = false }: FormFooterProps) {
    return (
        <footer className="flex w-full px-16 py-8 mt-14 bg-white-shape items-center justify-between border-t border-gray-lines-in-white">
            <div className="flex gap-4 items-center">
                <img src={attentionIcon} alt="" className="w-8 h-8" />
                <p className="font-poppins-regular text-xs text-purple">
                    Importante!<br />
                    <span className="text-text-complement">Preencha todos os dados corretamente.</span>
                </p>
            </div>
            <Button type="submit" size="compact" title="Salvar cadastro" disabled={isSubmitting} />
        </footer>
    )
}
