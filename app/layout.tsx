import type { Metadata } from 'next'
import './globals.css'
import { courierPrime } from './ui/fonts'
import Footer from './ui/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${courierPrime.className} flex items-center justify-center h-full w-full py-2 `}>
        {children}
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  )
}
