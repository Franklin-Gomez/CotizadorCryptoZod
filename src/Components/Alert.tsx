import { ReactNode } from "react"

type AlertProps = { 
    children : ReactNode
}

export default function Alert( { children } : AlertProps) {
    return (
        <div>
            {children}
        </div>
    )
}
