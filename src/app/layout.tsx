import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokedéx - Filipe Bacof',
  description: 'Consulte a Pokedéx e Monte seu Time Pokémon',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="bg-lg-blue">
      <body className={`${inter.className}`}>
        <Header />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  )
}
