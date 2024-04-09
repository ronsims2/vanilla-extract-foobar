import { cardWrapper } from './card.css.ts'
import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
}

export default function Card(props: CardProps) {
    const { children } = props
    return <div className={cardWrapper}>{children}</div>
}
