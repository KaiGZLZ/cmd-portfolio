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
      <h1 className={`${volkhov.className} text-3xl lg:text-4xl text-center font-bold mb-10 w-full flex items-center justify-center`}>E-Commerce</h1>

      <DivFade fade="fade-left" >
        <div className={`flex flex-col-reverse lg:flex-row gap-4  ${roboto.className} px-10 py-10 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center mt-5 lg:mt-0 ">
            <p className="text-justify">
            El sistema fue realizado utilizando el Stacke MERN (MongoDB, Express.js, React y NodeJS) así como haciendo uso de ChakraUI para el manejo de los estilos de la página. Además también se hizo uso de otras bibliotecas como Redux Toolkits para el manejo de de estados globales, asi como RTK Query la administración de las consultas. Hay que destacar que también se manejó un sistema de caché para así manera mejorar la experiencia del usuario además de liberar la carga del servidor al incrementar la cantidad de consultas.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/project2/image-1.png" alt="Jesús González"/>
        </div>
      </DivFade>

      <DivFade fade="fade-left" >
        <div className={`flex flex-col lg:flex-row  gap-4 ${roboto.className} px-10 py-10 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <ExpandedImage className='lg:w-1/3' src="/project2/image-2.png" alt="Jesús González"/>

          <div className="flex flex-col lg:w-2/3 items-initial justify-center mt-5 lg:mt-0 ">
            <p className="text-justify">
            El sistema cuenta con todas las utilidades de una ecommerce como una pantalla inicial atractiva, un diseño reponsivo, filtros de búsqueda, administración de contenido (Ingreso y modificación de productos o categorías), página individual del producto, carrito de compras (con almacenamiento en localstorage), pagina de visualización de las compras por usuario, además de la página de la respectiva compra, para observar el estado de esta.
            </p>
          </div>
        </div>
      </DivFade>

      <DivFade fade="fade-left" >
        <div className={`flex flex-col-reverse lg:flex-row  gap-4 ${roboto.className} px-10 py-10 mb-5 rounded-xl lg:text-lg bg-slate-800`}>
          <div className="flex flex-col lg:w-2/3 items-initial justify-center mt-5 lg:mt-0 ">
            <p className="text-justify">
            Se realizó una ecommerce pensando en toda empresa que esté iniciando y que no tenga capacidad de integración de pagos. Además en algunos casos realizar una compra se complica al momento de tener que ingresar los datos o registrarse, por lo que algunas personas terminan yendo a pàginas de mayor confianza para no tener que brindar los datos en sitios nuevos. Esta web brinda facilidad para las personas que prefieren un trato más diirecto con el vendedor además que no hace necesario el registro del usuario para realizar la compra, sino únicamente este debe dar su correo de contacto para de esta manera poder hacer llegar los datos para que este realice la transferencia o depósito y posteriormente se realice la venta sin necesidad de registro ya todo el proceso se realiza mediante correo electrónico, contactando directamente con el vendedor.
            </p>
          </div>
          <ExpandedImage className='lg:w-1/3' src="/project2/image-4.png" alt="Jesús González"/>
        </div>
      </DivFade>
      <br/>
      <br/>
      <br/>

    </Console>
  </>
  )
}
