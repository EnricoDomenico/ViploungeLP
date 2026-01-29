import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VipLounge - Onde o comum termina',
  description: 'Seu acesso ao extraordinário. Motor de serviços exclusivos.',
  keywords: ['VipLounge', 'Exclusividade', 'Luxury', 'Premium Services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  )
}
