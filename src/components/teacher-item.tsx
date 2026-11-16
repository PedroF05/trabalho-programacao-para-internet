import whatsapp from '../assets/whatsapp.svg'

export function TeacherItem() {
    return (
        <article className="bg-white border-1 border-gray-lines-in-white rounded-lg mt-10">
            <header className="flex items-center py-[3.2rem] px-8">
                <img
                    src="https://avatars.githubusercontent.com/u/15871684?v=4"
                    alt="Rafael Rocha"
                    className="w-[8rem] h-[8rem] rounded-full"
                />

                <div className="ms-10">
                    <strong className="font-archivo-semibold text-2xl text-text-title block">
                        Rafael Rocha
                    </strong>

                    <span className="font-poppins-regular text-base text-text-base">
                        Química
                    </span>
                </div>
            </header>

            <p className="px-8 font-poppins-regular text-base text-text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br />
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="grid grid-cols-5 mx-8 gap-4 mt-8">
                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Segunda
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Terça
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg opacity-40">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Quarta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        -
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Quinta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg opacity-40">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Sexta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        -
                    </strong>
                </div>
            </div>

            <footer
                className="flex w-full mt-10 bg-white-shape items-center justify-between p-8 border-t-1 border-gray-lines-in-white rounded-b-lg"
            >
                <p className="font-poppins-regular text-ms text-text-complement flex items-center gap-4">
                    Preço/hora:
                    <strong className="font-archivo-bold text-xl text-purple">
                        R$ 80,00
                    </strong>
                </p>

                <a
                    className={
                        `flex
                        gap-4
                        bg-green
                        hover:bg-green-dark
                        cursor-pointer
                        transition
                        py-4
                        px-10
                        rounded-lg
                        font-archivo-bold
                        text-base
                        text-white`
                    }
                    target="_blank"
                    href="https://wa.me/+5534999999999"
                >
                    <img src={whatsapp} alt="Whatsapp" className="w-5 h-5" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}