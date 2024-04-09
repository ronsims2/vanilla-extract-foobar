import { cardImage } from './card.css.ts'

interface CardImageProps {
    imgSrc: string
    imgAlt: string
    imgWidth?: number
    imgSizes?: number[]
    imgSrcSet?: string[]
}
export default function CardImage(props: CardImageProps) {
    // @ts-ignore: no
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { imgSrc, imgAlt, imgWidth, imgSizes, imgSrcSet } = props
    const srcSetVal = `${imgSrcSet?.join(', ') ?? ''}`
    const sizesVal = `${imgSizes?.join(' ,') ?? ''}`

    return (
        <div>
            <img
                src={imgSrc}
                alt={imgAlt}
                srcSet={srcSetVal}
                sizes={sizesVal}
                className={cardImage}
            />
        </div>
    )
}
