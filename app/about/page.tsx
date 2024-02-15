'use client'

import posibleComands from './comands'
import Console from '../ui/Console'
import Image from 'next/image'
import { lato } from '../ui/fonts'
import { CiLocationOn } from 'react-icons/ci'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  return (<>
    <Console
      posibleComands={posibleComands}
      delay={windowWidth > 640 ? 1000 : 0}
    >
      <div className={`grid sm:grid-cols-1 lg:grid-cols-4 gap-4 lg:h-[320px] ${lato.className} lg:text-lg `}>
        <div className="animate-fade col-span-1 flex flex-col items-center justify-center h-full gap-2" >
          <Image src="/fotoPerfil.jpg" alt="Jesús González" width={150} height={200}className='rounded-full' />
          <p className='text-center text-sm mt-3'>27 años</p>
          <p className='flex flex-row text-center text-sm'> <CiLocationOn className='mr-2 h-full' />Bogotá, Colombia </p>
        </div>
        <div className="col-span-1 lg:col-span-3  flex items-initial lg:items-center justify-initial lg:text-xl min-h-[500px] lg:min-h-0">
          <div className='flex flex-col items-initial justify-center gap-7'>
            <p className='animate-fade-left animate-delay-100'>Soy <strong style={{ color: '#d35a5a' }}>Desarrollador Full Stack</strong> e <strong>Ingeniero Electricista</strong></p>
            <p className='animate-fade-left animate-delay-200'>Inicialmente aprendí en la universidad C y C++ y posteriormente adquirí conocimientos en tecnologías actuales como <strong style={{ color: '#d35a5a' }}>Javascript, ReactJS, NodeJS, ExpressJS y MongoDB</strong> que utilicé en diferentes trabajos de desarrollador.</p>
            <p className='animate-fade-left animate-delay-300'>También dependiendo de los requerimientos he aprendido otras herramientas como <strong style={{ color: '#d35a5a' }}>Typescript, NextJS, Git, Redux, RTK, Jest, React Testing Library, Bootstrap, ChakraUI y Google Cloud</strong>, las cuales han sido utilizadas para realizar diversas tareas en diferentes proyectos</p>
          </div>
        </div>
      </div>
    </Console>
  </>
  )
}
