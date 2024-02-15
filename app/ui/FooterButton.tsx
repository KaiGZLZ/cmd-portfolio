'use client'
import { useState } from 'react'
import { type IconType } from 'react-icons'

interface FooterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  text: string
  Icon: IconType
}

export default function FooterButton ({
  href,
  text,
  Icon,
  ...props
}: FooterButtonProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button {...props} className={'relative rounded-full text-gray-300 mx-2 border border-white hover:bg-white hover:text-black transition-colors duration-300'}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-12 w-12 rounded-full "
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />

        <span className={'absolute text-white text-xs py-1 p-2 top-[110%] left-1/2 -translate-x-1/2 bg-red-500 font-bold rounded-md transition-opacity duration-300 ' + (isHovered ? 'opacity-100' : 'opacity-0')}>
          {text}
        </span>
      </a>
    </button>
  )
}
