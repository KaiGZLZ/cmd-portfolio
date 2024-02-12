'use client'

import posibleComands from './comands'
import Console from '../../ui/Console'
import { roboto, volkhov } from '../../ui/fonts'
import ExpandedImage from '@/app/ui/ExpandedImage'
import DivFade from '@/app/ui/DivFade'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)
  return (<>
    <Console
      posibleComands={posibleComands}
    >
      <h1 className={`${volkhov.className} text-4xl font-bold mb-10 w-full flex items-center justify-center`}>Sistema de control financiero</h1>
      <DivFade fade="fade-left"delay={300}>
        <div className={`flex flex-col lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <ExpandedImage className='lg:w-1/3' src="/foto.png" alt="Jesús González"/>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
          </div>
        </div>
      </DivFade>
      <DivFade fade="fade-left" >
        <div className={`flex flex-col-reverse lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/foto.png" alt="Jesús González"/>
        </div>
      </DivFade>
      <DivFade fade="fade-left">
        <div className={`flex flex-col lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800 `}>
          <ExpandedImage className='lg:w-1/3' src="/foto.png" alt="Jesús González"/>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
          </div>
        </div>
      </DivFade>
      <DivFade fade="fade-left">
        <div className={`flex flex-col-reverse lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            Este proyecto fue realizado en mi más reciente empleo en Embutidos Mohan. El proyecto consiste en un sistema para la realizaciòn de las ventas, el control de inventario de las tiendas, y control financiero de la empresa en general entre muchas otras funcionalidades, que le permiten a la empresa poder generar mùltiples reportes de manera automática, facilitando de esta manera el trabajo de todos los empleados.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/foto.png" alt="Jesús González"/>
        </div>
      </DivFade>
      <br/>
      <br/>
      <br/>

    </Console>
  </>
  )
}
