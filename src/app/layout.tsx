import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timothenics',
  description: 'Timothenics',
  openGraph: {
    title: 'Timothenics',
    description: 'Timothenics',
    url: 'https://timothenics.com',
    siteName: 'Timothenics',
    images: [
      {
        url: '/og-image.png', // TODO: Replace with custom Timothenics text image
        width: 1200,
        height: 630,
        alt: 'Timothenics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothenics',
    description: 'Timothenics',
    images: ['/og-image.png'], // TODO: Replace with custom Timothenics text image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
