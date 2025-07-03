"use client"


import { Typewriter } from 'react-simple-typewriter'

type Props = {
    words: string[]
}

const TypingAnimation = (props: Props) => {
    return (
         <Typewriter
            words={props.words}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1500}
            />
    )
}

export default TypingAnimation