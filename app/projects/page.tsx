'use client'

import { useEffect, useRef } from 'react'
import posibleComands from './comands'
import Console from '../ui/Console'
import Image from 'next/image'
import { lato } from '../ui/fonts'
import Link from 'next/link'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)
  const refInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (refInput.current !== null) {
      refInput.current.focus()
    }
  }, [refInput])

  return (<>
    <Console
      posibleComands={posibleComands}
    >
      <Link href="/projects/project1">
        <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
          <div className="col-span-1 flex items-center justify-center h-full" >
            <Image src="/foto.png" alt="Jesús González" width={300} height={400}/>
          </div>
          <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
            <h1 className="w-full text-left text-3xl font-bold mb-[20px]">Sistema de control financiero</h1>
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
            <p className="w-full text-end hover:underline transition duration-200 ease-in ">
            Ver más...
            </p>
          </div>
        </div>
      </Link>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
        <div className="col-span-1 flex items-center justify-center h-full" >
          <Image src="/foto.png" alt="Jesús González" width={300} height={400}/>
        </div>
        <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
          <h1 className="w-full text-left text-3xl font-bold mb-[20px]">E-Commerce</h1>
          <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
          </p>
          <p className="w-full text-end hover:underline transition duration-200 ease-in ">
            Ver más...
          </p>
        </div>
      </div>
    </Console>
  </>
  )
}
