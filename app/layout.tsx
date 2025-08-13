import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VideoCutter AI - Transforme Vídeos em Conteúdo Viral',
  description: 'IA identifica os melhores momentos dos seus vídeos e cria cortes otimizados com legendas em português para redes sociais.',
  keywords: 'video cutter, ai, cortes de vídeo, legendas português, youtube shorts, tiktok, instagram reels',
  authors: [{ name: 'VideoCutter AI' }],
  openGraph: {
    title: 'VideoCutter AI - Transforme Vídeos em Conteúdo Viral',
    description: 'IA identifica os melhores momentos dos seus vídeos e cria cortes otimizados com legendas em português.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
