import './globals.css'

export const metadata = {
  title: 'VideCut - AI Video Editor',
  description: 'Corte vídeos automaticamente com inteligência artificial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
