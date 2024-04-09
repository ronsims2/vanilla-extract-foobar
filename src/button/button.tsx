import { ReactNode, SyntheticEvent } from 'react'
import { baseButton } from './button.css.ts'

interface ButtonProps {
    children: ReactNode
    clickHandler: (e: SyntheticEvent) => void
    className?: string
    advanced?: boolean // this flag means the consumer dev will handle buttons default action
}
export default function Button(props: ButtonProps) {
    const { children, clickHandler, advanced } = props

    const defaultHandler = (e: SyntheticEvent) => {
        if (advanced) {
            e.preventDefault()
        }
        return clickHandler(e)
    }

    return (
        <button className={baseButton} onClick={defaultHandler}>
            {children}
        </button>
    )
}
