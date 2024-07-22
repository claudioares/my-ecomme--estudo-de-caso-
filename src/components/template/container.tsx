import { ReactNode } from "react"

type PropsContainer = {
    children: ReactNode,
    styles: string
}

export function Container ({ children, styles }:PropsContainer) {
    return(
        <div className={`
            w-auto py-8 px-2 h-auto mx-auto ${styles} flex justify-center
            xl:w-[120rem]
        `}>
        {children}
        </div>
    )
}