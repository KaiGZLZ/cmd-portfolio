'use client'

import { useEffect, useRef } from 'react'
import posibleComands from './comands'
import Console from '../ui/Console'
import { lato } from '../ui/fonts'
import Link from 'next/link'
import DivFade from '../ui/DivFade'
import ExpandedImage from '../ui/ExpandedImage'
import Head from 'next/head'

export default function Home (): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const refInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (refInput.current !== null) {
      refInput.current.focus()
    }
  }, [refInput])

  return (<>
    <Head>
      <title>Jesús González | Proyectos</title>
      <meta name="description" content="Jesús González | Proyectos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Console
      posibleComands={posibleComands}
    >
      <DivFade fade="fade-left" delay={500}>
        <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 ${lato.className} px-10 py-10  md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in`}>
          <ExpandedImage src="/project1/image-1.png" alt="Jesús González"/>
          <Link href="/projects/project1" className="sm:col-span-1 py-5  flex flex-col items-initial justify-center md:col-span-2 cursor-pointer ">
            <h1 className="w-full text-left text-3xl font-bold mb-[20px]">Sistema de control financiero</h1>
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo, en la empresa Embutidos Mohan. El proyecto consistió en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
            <p className="w-full text-end hover:underline transition duration-200 ease-in ">
            Ver más...
            </p>
          </Link>
        </div>
      </DivFade>

      <DivFade fade="fade-left" delay={500}>
        <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4  ${lato.className} px-10 py-10  md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in`}>
          <ExpandedImage src="/project2/image-1.png" alt="Jesús González"/>
          <Link href="/projects/project2" className="sm:col-span-1 py-5 flex flex-col items-initial justify-center md:col-span-2 cursor-pointer ">
            <h1 className="w-full text-left text-3xl font-bold mb-[20px]">E-Commerce</h1>
            <p className="text-justify">
            En algunos paises, es dificil realizar integraciones con pasarelas de pago para realizar las compras online, por lo que este proyecto fue realizado con la finalidad de poder realizar ventas de manera online sin la necesidad de tener que registrarse, sino únicamente haciendo uso de su correo electrónico como medio de comunicación para la realización de la compra. El proyecto cuenta con todo lo que una E-Commerce necesita, desde registro de productos, filtros, categorías entre otras funcionalidades más que la hacen bastante completa.
            </p>
            <p className="w-full text-end hover:underline transition duration-200 ease-in ">
            Ver más...
            </p>
          </Link>
        </div>
      </DivFade>
      <DivFade fade="fade-left" delay={200}>
        <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
          <ExpandedImage src="/home.png" alt="Jesús González"/>
          <div className="sm:col-span-1 py-5 flex flex-col items-initial justify-center md:col-span-2 ">
            <h1 className="w-full text-left text-3xl font-bold mb-[20px]">El presente portafolio</h1>
            <p className="text-justify">
              Este proyecto fué realizado con <strong>Nextjs</strong> y <strong>Tailwind</strong>, además de hacer uso de <strong>Server Actions</strong> y otras librerías que permiten las diferentes funcionalidades que se ven en el sitio. <br />
              Para ver más detalles de como se realizó este proyecto, puede hacer click en el siguiente enlace.
            </p>
            <a
              className="w-full text-end hover:underline transition duration-200 ease-in "
              href="https://github.com/KaiGZLZ/cmd-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
            Ver más...
            </a>
          </div>
        </div>
      </DivFade>

    </Console>
  </>
  )
}
