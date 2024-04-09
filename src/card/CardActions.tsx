import { ReactNode } from 'react'
import { cardActions } from './card.css.ts'

interface CardActionProps {
    children: ReactNode
}
export default function CardActions(props: CardActionProps) {
    const { children } = props
    return <div className={cardActions}>{children}</div>
}
