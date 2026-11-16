import type { ReactNode } from "react"
import { PageHeader } from "./page-header"

type PageLayoutProps = {
    headerTitle: string
    /** Conteúdo da faixa roxa (título, avatar...). */
    banner: ReactNode
    /** Altura da faixa roxa. */
    bannerClassName?: string
    /** Conteúdo principal; o card sobe 64px sobre a faixa roxa. */
    children: ReactNode
}

export function PageLayout({
    headerTitle,
    banner,
    bannerClassName = "h-[22rem]",
    children,
}: PageLayoutProps) {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-background antialiased">
            <PageHeader title={headerTitle} />
            <section className={`relative w-full flex flex-col items-center overflow-hidden bg-purple ${bannerClassName}`}>
                {banner}
            </section>
            <main className="relative w-full max-w-[48rem] px-4 -mt-16 mb-16">
                {children}
            </main>
        </div>
    )
}
