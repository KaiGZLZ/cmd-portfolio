'use client'

import { useEffect, useRef, useState } from 'react'
import { posibleComands } from './comands'
import TypewriterComponent from 'typewriter-effect'
import Console from '../ui/Console'
import Image from 'next/image'
import { lato } from '../ui/fonts'

export default function Home (): JSX.Element {
  const refInput = useRef<HTMLInputElement>(null)
  const [startTyping, setStartTyping] = useState<boolean>(false)

  useEffect(() => {
    if (refInput.current !== null && startTyping) {
      refInput.current.focus()
    }
  }, [refInput, startTyping])

  const options = {
    delay: 1,
    loop: false,
    cursor: ''
  }

  return (<>
    <Console
      posibleComands={posibleComands}
      startTyping={startTyping}
    >
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[320px] ${lato.className} md:text-lg `}>
        <div className="col-span-1 flex items-center justify-center h-full" >
          <Image src="/fotoPerfil.jpg" alt="Jesús González" width={200} height={300}className='rounded-full' />
        </div>
        <div className="sm:col-span-1 flex items-center justify-initial  md:col-span-2">
          <TypewriterComponent options={options}
            onInit={(typewriter) => {
              typewriter.typeString('Soy <strong>Desarrollador Full Stack</strong> e <strong>Ingeniero Electricista</strong><p></p>')

                .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                .typeString(`Inicialmente aprendí en la universidad C y C++ los cuales utilicé en diferentes proyectos
                  tales como mi tesis de grado. <p></p>`)

                .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                .typeString(`Posteriormente adquirí conocimientos en
                tecnologías actuales como <strong>Javascript, ReactJS, NodeJS, ExpressJS y
                MongoDB</strong> que utilicé en diferentes trabajos de desarrollador.<p></p>`)

                .typeString('&nbsp;&nbsp;&nbsp;<p></p>')
                .typeString(`También dependiendo de los requerimientos he aprendido otras
                  herramientas como <strong>Typescript, NextJS, Git, Redux, RTK, Jest, React
                  Testing Library, Bootstrap, ChakraUI y Google Cloud</strong>,
                  las cuales han sido utilizadas para realizar diversas tareas en diferentes
                  proyectos`)
                .callFunction(() => {
                  setStartTyping(true)
                })
                .start()
            }}
          />
        </div>
      </div>
    </Console>
  </>
  )
}
