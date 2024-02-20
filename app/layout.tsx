import type { Metadata } from 'next'
import './globals.css'
import { courierPrime } from './ui/fonts'
import Footer from './ui/Footer'

export const metadata: Metadata = {
  title: "Jesús González's portfolio",
  description: 'Jesus Gonzalez portfolio. Full Stack Developer and Electrical Engineer'
}

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jesús González - Home</title>
        <meta name="description" content={'Portfolio de Jesús González'} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${courierPrime.className} flex flex-col items-center justify-center h-full w-full py-2 `}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
