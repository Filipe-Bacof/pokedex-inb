import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Toast from './Toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokedéx - Filipe Bacof',
  description: 'Consulte a Pokedéx e Monte seu Time Pokémon',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="bg-lg-blue">
      <body className={`${inter.className}`}>
        <Toast />
        <Header />
        <main className="flex justify-center overflow-x-hidden pt-14">
          {children}
        </main>
      </body>
    </html>
  )
}
