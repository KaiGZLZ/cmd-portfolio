'use client'

import { useEffect, useRef, useState } from 'react'
import posibleComands from './comands'
import TypewriterComponent from 'typewriter-effect'
import Console from './ui/Console'
import { bangers } from './ui/fonts'

export default function Home (): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const refInput = useRef<HTMLInputElement>(null)
  const [startTyping, setStartTyping] = useState<boolean>(false)

  useEffect(() => {
    if (refInput.current !== null && startTyping) {
      refInput.current.focus()
    }
  }, [refInput, startTyping])

  return (
    <div className='flex items-initial justify-center h-full w-full py-2'>
      <Console
        posibleComands={posibleComands}
        startTyping={startTyping}
        className='w-full h-full flex items-center justify-center flex-col text-red-300'
      >
        <div className={`${bangers.className} flex flex-col  w-full text-left text-2xl lg:text-4xl mt-16 `}>
          <TypewriterComponent
            options={{
              delay: 10,
              deleteSpeed: 5,
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Hola mi nombre es <strong>Jesús González</strong> y soy ')
                .start()
            }}
          />
          <TypewriterComponent
            options={{
              delay: 10,
              deleteSpeed: 5,
              autoStart: true,
              loop: true,
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(600)
                .start()
                .typeString('<strong style="color: #d35a5a; margin-top:10rem; ">Desarrollador Full Stack</strong>')
                .pauseFor(10000)
                .deleteChars(24)
                .typeString('<strong style="color: #d35a5a; margin-top:10rem; ">Ingeniero Electricista</strong>')
                .pauseFor(4000)
                .deleteChars(24)
                .start()
            }}
          />
          <TypewriterComponent
            options={{
              delay: 10,
              loop: false,
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                .typeString('Bienvenido a mi sitio web personal. <p></p>')
                .callFunction(() => {
                  setStartTyping(true)
                })
                .start()
            }}
          />
        </div>
      </Console>
    </div>
  )
}
