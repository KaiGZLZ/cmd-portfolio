import React, { useEffect, useRef } from 'react'

interface DivFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  fade: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
  delay?: number
  intersectionPercentage?: 0 | 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4 | 0.45 | 0.5 | 0.55 | 0.6 | 0.65 | 0.7 | 0.75 | 0.8 | 0.85 | 0.9 | 0.95 | 1
  //   onIntersection?: boolean
  children: React.ReactNode
}

export default function DivFade ({
  fade,
  intersectionPercentage,
  delay,
  //   onIntersection,
  children,
  ...props
}: DivFadeProps
): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aquí puedes agregar el código que se ejecutará cuando el elemento entre o salga de la vista
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (fade === 'fade-left') entry.target.classList.remove('translate-x-8', 'opacity-0')
            if (fade === 'fade-up') entry.target.classList.remove('translate-y-8', 'opacity-0')
            if (fade === 'fade-down') entry.target.classList.remove('-translate-y-8', 'opacity-0')
            if (fade === 'fade-right') entry.target.classList.remove('-translate-x-8', 'opacity-0')
          }, delay ?? 0)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: intersectionPercentage ?? 0.5
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Limpiar el observador al desmontar el componente
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const translate = fade === 'fade-left' ? 'translate-x-8' : fade === 'fade-right' ? '-translate-x-8' : fade === 'fade-up' ? 'translate-y-8' : '-translate-y-8'

  return (
    <div {...props} ref={ref} className={`flex justify-center items-center ${translate} opacity-0 transition duration-1000 ease-out bez`} >
      {children}
    </div>
  )
}
