import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'YOUWIN | Estúdio de Edição e Pós-Produção Audiovisual Profissional',
  description:
    'Especialista em pós-produção audiovisual, edição de vídeo, motion graphics, color grading, videoclipes, eventos e conteúdo para redes sociais. Transformamos suas gravações em vídeos profissionais.',
  keywords: ['edição de vídeo', 'pós-produção', 'motion graphics', 'color grading', 'videoclipe', 'edição profissional', 'estúdio de vídeo', 'São Paulo'],
  authors: [{ name: 'YOUWIN' }],
  creator: 'YOUWIN',
  publisher: 'YOUWIN',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://youwinoficial.com',
    siteName: 'YOUWIN',
    title: 'YOUWIN | Estúdio de Edição e Pós-Produção Audiovisual',
    description: 'Transformamos gravações comuns em vídeos profissionais através de edição, colorização, motion graphics, sound design e pós-produção criativa.',
    images: [
      {
        url: '/images/youwin-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'YOUWIN - Estúdio de Pós-Produção Audiovisual',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YOUWIN | Edição e Pós-Produção Audiovisual',
    description: 'Transformamos gravações comuns em vídeos profissionais através de edição, colorização, motion graphics, sound design e pós-produção criativa.',
    images: ['/images/youwin-logo.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
