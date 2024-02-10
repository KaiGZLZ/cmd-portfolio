'use client'

import { posibleComands } from '../comands'
import Console from '../../ui/Console'
import { lato } from '../../ui/fonts'
import ExpandedImage from '@/app/ui/ExpandedImage'

export default function Home (): JSX.Element {
  return (<>
    <Console
      posibleComands={posibleComands}
    >
      <h1 className={`${lato.className} text-3xl font-bold mb-5 w-full flex items-center justify-center`}>Sistema de control financiero</h1>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
        <ExpandedImage src="/foto.png" alt="Jesús González"/>
        <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
          <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
          </p>
        </div>
      </div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
        <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
          <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
          </p>
        </div>
        <ExpandedImage src="/foto.png" alt="Jesús González"/>
      </div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
        <ExpandedImage src="/foto.png" alt="Jesús González"/>
        <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
          <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
          </p>
        </div>
      </div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:h-[275px] ${lato.className} px-10 py-10 cursor-pointer md:py-0 mb-5 rounded-xl md:text-lg bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in `}>
        <div className="sm:col-span-1 flex flex-col items-initial justify-center md:col-span-2 ">
          <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
          </p>
        </div>
        <ExpandedImage src="/foto.png" alt="Jesús González"/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

    </Console>
  </>
  )
}
