import { Camera } from "lucide-react"
import type { ChangeEvent } from "react"
import { toast } from "sonner"

const MAX_AVATAR_SIZE_IN_BYTES = 1024 * 1024

type ProfileAvatarProps = {
    avatarUrl: string
    name: string
    onChange: (avatarUrl: string) => void
}

/** Foto circular com o ícone de câmera; clicar no ícone abre o seletor de imagem. */
export function ProfileAvatar({ avatarUrl, name, onChange }: ProfileAvatarProps) {
    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        event.target.value = ""

        if (!file) return

        if (!file.type.startsWith("image/")) {
            toast.error("Escolha um arquivo de imagem.")
            return
        }

        if (file.size > MAX_AVATAR_SIZE_IN_BYTES) {
            toast.error("A imagem deve ter no máximo 1 MB.")
            return
        }

        const reader = new FileReader()
        reader.onload = () => onChange(String(reader.result))
        reader.readAsDataURL(file)
    }

    return (
        <div className="relative w-[11.25rem] h-[11.25rem]">
            <img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            <label
                title="Trocar foto"
                className="absolute right-0 bottom-0 flex items-center justify-center w-12 h-12 rounded-full bg-green hover:bg-green-dark transition cursor-pointer"
            >
                <Camera size={20} className="text-white" />
                <span className="sr-only">Trocar foto</span>
                <input type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
            </label>
        </div>
    )
}
