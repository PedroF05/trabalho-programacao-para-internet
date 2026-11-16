import type { ReactNode } from "react"

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white border border-gray-lines-in-white rounded-lg shadow-sm overflow-hidden">
            {children}
        </div>
    )
}
