import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva em 30 Dias',
  description: 'A primeira plataforma global com 400 agentes IA ESG especializados. Transforme compliance em vantagem competitiva em 30 dias. ROI 650-8000% primeiro ano.',
  keywords: 'ESG, compliance, IA, agentes artificiais, sustentabilidade, AaaS, Agent as a Service, consultoria digital, GRI, SASB, TCFD',
  authors: [{ name: 'ESG|Frame by F2W LLC' }],
  creator: 'ESG|Frame',
  publisher: 'F2W LLC',
  metadataBase: new URL('https://www.esgframe.com'),
  alternates: {
    canonical: 'https://www.esgframe.com',
  },
  openGraph: {
    title: 'ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva',
    description: 'Primeira arquitetura AaaS com 400 consultores digitais ESG 24/7. Transforme compliance em ROI de 650-8000% no primeiro ano.',
    url: 'https://www.esgframe.com',
    siteName: 'ESG|Frame',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ESG|Frame - 400 Agentes IA ESG Especializados',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva',
    description: 'Primeira arquitetura AaaS com 400 consultores digitais ESG 24/7. ROI 650-8000% primeiro ano.',
    images: ['/og-image.jpg'],
    creator: '@EsgFrame',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código de verificação
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D4F3C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
