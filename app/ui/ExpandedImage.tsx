import Image from 'next/image'
import { useState, type HTMLAttributes } from 'react'

interface ExpandedImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
}

export default function ExpandedImage ({ src, alt, ...props }: ExpandedImageProps): JSX.Element {
  const [zoom, setZoom] = useState(false)

  return (
    <div {...props}>
      <div className="flex items-center justify-center h-full transition hover:scale-110 cursor-pointer"
        onClick={() => { setZoom(!zoom) }}
      >
        <Image src={src} alt={alt} width={302} height={170}/>
      </div>
      <div className={` ${zoom ? 'flex fixed inset-0 items-center justify-center w-full h-full z-10' : 'opacity-0 fixed -z-10 left-0 '} `}
        onClick={() => { setZoom(!zoom) }}
      >
        <div className="fixed justify-center w-full h-full bg-black opacity-50">
        </div>
        <Image src="/foto.png" alt="Jesús González" width={600} height={700}
          className={`transition-transform duration-500 ease-in-out transform ${zoom ? 'scale-75 lg:scale-150' : 'scale-0'}`}
        />
      </div>
    </div>
  )
}
