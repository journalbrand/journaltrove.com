import type { Metadata } from 'next'
import { Poppins, Lora } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'JournalTrove - Your Journals, Your Control',
  description: 'A decentralized journaling platform that seamlessly integrates AI transcription, iOS Journal API, and secure peer-to-peer sharing—completely on your terms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body className="bg-brand-background min-h-screen font-sans text-brand-secondary pt-16">
        <Header />
        {children}
      </body>
    </html>
  )
} 