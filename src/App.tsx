import './App.css'
import Card from './card/Card.tsx'
import CardImage from './card/CardImage.tsx'
import CardContent from './card/CardContent.tsx'
import CardActions from './card/CardActions.tsx'
import './styles.css.ts'
import Button from './button/button.tsx'
import { SyntheticEvent } from 'react'

function App() {
    const cardButtonHandler = (e: SyntheticEvent) => {
        console.log(e)
    }
    return (
        <>
            <div style={{ width: '375px' }}>
                <Card>
                    <CardImage
                        imgSrc={'/scribe.jpg'}
                        imgAlt={'Scribe painted in graffiti'}
                    />
                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur imperdiet risus pellentesque convallis
                        euismod. Etiam rutrum a dui in bibendum. Quisque aliquet
                        sed lorem vel auctor. Donec cursus lectus eget massa
                        scelerisque gravida. Proin laoreet fringilla fermentum.
                        Pellentesque finibus non mi sit amet feugiat. Donec in
                        tempus purus, at pellentesque mauris. Nulla fermentum
                        elit in lorem placerat, in pellentesque mauris aliquam.
                        In maximus nec enim in scelerisque.
                    </CardContent>
                    <CardActions>
                        <Button clickHandler={cardButtonHandler}>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default App
