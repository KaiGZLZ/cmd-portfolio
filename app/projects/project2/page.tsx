'use client'

import posibleComands from './comands'
import Console from '../../ui/Console'
import { roboto, volkhov } from '../../ui/fonts'
import ExpandedImage from '@/app/ui/ExpandedImage'
import DivFade from '@/app/ui/DivFade'
import Head from 'next/head'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)
  return (<>
    <Head>

      <title>Jesús González | Proyecto 1 </title>
      <meta name="description" content="Jesús González | Proyectos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Console
      posibleComands={posibleComands}
    >
      <h1 className={`${volkhov.className} text-3xl lg:text-4xl text-center font-bold mb-10 w-full flex items-center justify-center`}>Sistema de control financiero</h1>

      <DivFade fade="fade-left" intersectionPercentage={0}>
        <div className={`flex flex-col lg:flex-row gap-4  ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <ExpandedImage className='lg:w-1/3 lg:hidden' src="/project1/image-1.png" alt="Jesús González"/>
          <div className="flex flex-col py-5 items-initial justify-center gap-3 ">
            <p className="text-justify">
            Mi trabajo consistió en realizar una larga serie de expansiones y nuevas características al sistema existente de la empresa, utilizando los datos que este obtenía de los usuarios para poder así generar múltiples reportes para la empresa.
            </p>

            <div className='flex flex-row justify-between my-7'>
              <ul className='list-disc lg:ml-8'>
                <li>Muchas tablas no tenían filtros de búsqueda</li>
                <li>Algunos módulos no funcionaban correctamente</li>
                <li>Existían múltiples bugs en el sistema</li>
                <li>Muchos esquemas tenian información incompleta para realizar reportes</li>
                <li>No habia validación para muchos de los formularios</li>
                <li>Etc</li>
              </ul>
              <ExpandedImage className='lg:w-1/3 hidden md:block' src="/project1/image-1.png" alt="Jesús González"/>

            </div>
            <p className="text-justify">
              Finalmente esto obligaba a la empresa a utilizar el sistema como medio de soporte y ayuda para terminar haciendo las cosas manualmente. Cabe destacar que muchas acciones de la empresa eran hechas con datos del sistema, por lo que era absurdo que no existiesen funcionalidades que hicieran esto de manera automática, lo cual cambió hasta mi llegada.
            </p>
          </div>
        </div>
      </DivFade>

      <DivFade fade="fade-left" intersectionPercentage={0.3}>
        <div className={`flex flex-col-reverse lg:flex-row  gap-4  ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col py-5 items-initial justify-center gap-8 ">
            <p className="text-justify">
            Entre las tantas características que se pueden mencionar están:
            </p>

            <ul className='list-disc lg:ml-8'>
              <li> Múltiples filtros a las tablas existentes que facilitó la auditoría a la empresa</li>
              <li> Anexión del sistema de ventas al mayor en dólares al sistema de ventas al detal que habia sido realizado en bolívares</li>
              <li> Automatización de los reportes de comisiones</li>
              <li> Adición de controles de acceso por códigos temporales</li>
              <li> Consistencia de datos de dinero e inventario del sistema con los respectivos valores físicos de las tiendas</li>
              <li> Creación de reportes en PDF de las ganancias y pérdidas diarias de la empresa con posibilidad de filtros por dias, semanas o meses</li>
              <li> Gráficos para la evaluación de múltipes parámetros de la empresa</li>
              <li> Manejo de notificaciones via email</li>
              <li> Almacenamiento de imágenes</li>
              <li> Etc</li>
            </ul>

            <p className="text-justify">
              Fue un año medio de arduó trabajo y continuo desarrollo para finalmente obtener un sistema con el cual esta empresa puede controlar y auditar sus más de 10 sucursales
            </p>
          </div>
        </div>
      </DivFade>

      <DivFade fade="fade-left">
        <div className={`flex flex-col-reverse lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800 `}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            El sistema está desarrollado en el stack <strong>MERN (React, NodeJS, MongoDB y express.js)</strong> además de utilizar <strong>Bootstrap</strong> para los estilos y otras bibliotecas como Redux, bibliotecas de componentes, para los formularios entre otras más, por lo que era mi deber entender cada una de las tecnologías utilizadas en el sistema para así poder realizar nuevas características al sistema en base a las necesidades que fueran surgiendo en la empresa.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/project1/image-2.png" alt="Jesús González"/>
        </div>
      </DivFade>

      <DivFade fade="fade-left" >
        <div className={`flex flex-col-reverse lg:flex-row  gap-4 lg:h-[275px] ${roboto.className} px-10 py-10 lg:py-0 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center  ">
            <p className="text-justify">
            Debido al alto costo que supone un programador, yo fui el <strong>único programador de la empresa</strong> por lo cual era el encargado de desarrollar cada nueva característica del sistema, además de corregir cualquier error que presentara el mismo, tanto los previamente existentes como los que se iban presentando al momento del desarrollo. Ser el responsable aumentó también la cantidad de conocimiento adquirido debido a la necesidad de conocer muy bien las tecnologias trabanadas para así poder realizar un trabajo óptimo.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/project1/image-3.png" alt="Jesús González"/>
        </div>
      </DivFade>
      <br/>
      <br/>
      <br/>

    </Console>
  </>
  )
}
