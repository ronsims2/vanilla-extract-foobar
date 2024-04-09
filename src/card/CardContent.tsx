import { ReactNode } from 'react'
import { cardContent } from './card.css.ts'

interface CardContentProps {
    children: ReactNode
}
export default function CardContent(props: CardContentProps) {
    const { children } = props
    return <div className={cardContent}>{children}</div>
}
