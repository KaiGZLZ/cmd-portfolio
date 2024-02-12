'use client'

import { useEffect, useRef, useState } from 'react'
import posibleComands from './comands'
import TypewriterComponent from 'typewriter-effect'
import Console from './ui/Console'
import { bangers } from './ui/fonts'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)
  const refInput = useRef<HTMLInputElement>(null)
  const [startTyping, setStartTyping] = useState<boolean>(false)

  useEffect(() => {
    if (refInput.current !== null && startTyping) {
      refInput.current.focus()
    }
  }, [refInput, startTyping])

  const options = {
    delay: 5,
    loop: false,
    cursor: ''
  }

  return (
    <div className='flex items-initial justify-center h-full w-full py-2'>
      <Console
        posibleComands={posibleComands}
        startTyping={startTyping}
        className='w-full h-full flex items-center justify-center flex-col text-red-300'
      >
        <div className={`${bangers.className} w-full text-left text-2xl lg:text-4xl mt-16 `}>
          <TypewriterComponent options={options}
            onInit={(typewriter) => {
              typewriter.typeString('Hola mi nombre es <strong>Jesús González</strong> y soy ')
                .typeString('<p><strong style="color: #d35a5a; margin-top:10rem; ">Desarrollador Full Stack</strong></p>')
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
