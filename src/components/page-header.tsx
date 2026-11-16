import { Link } from "react-router"
import goBack from "../assets/goback.svg"
import proffyLogo from "../assets/proffy-logo.svg"

type PageHeaderProps = {
    title: string
    backTo?: string
}

export function PageHeader({ title, backTo = "/" }: PageHeaderProps) {
    return (
        <div className="w-full flex justify-center items-center bg-dark-purple h-16">
            <header className="grid grid-cols-3 items-center w-full max-w-7xl px-6">
                <Link to={backTo} className="justify-self-start" aria-label="Voltar">
                    <img src={goBack} alt="" className="w-8 h-12" />
                </Link>
                <h1 className="justify-self-center text-text-purple-base font-archivo-semibold text-base">
                    {title}
                </h1>
                <img src={proffyLogo} alt="Proffy" className="justify-self-end w-12 h-4" />
            </header>
        </div>
    )
}
