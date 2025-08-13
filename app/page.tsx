'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Scissors, Download, Zap, Globe, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoUrl.trim()) return

    setIsLoading(true)
    
    // Simulate validation and redirect to processing
    setTimeout(() => {
      router.push(`/processing?url=${encodeURIComponent(videoUrl)}`)
    }, 1000)
  }

  const supportedPlatforms = [
    { name: 'YouTube', icon: '🎥' },
    { name: 'Instagram', icon: '📸' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'KWAI', icon: '⚡' },
  ]

  const features = [
    {
      icon: <Scissors className="h-8 w-8 text-blue-600" />,
      title: "Cortes Inteligentes",
      description: "IA identifica os melhores momentos automaticamente"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Legendas em Português",
      description: "Legendas automáticas traduzidas para português"
    },
    {
      icon: <Download className="h-8 w-8 text-purple-600" />,
      title: "Download Direto",
      description: "Baixe seus vídeos otimizados instantaneamente"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Múltiplos Formatos",
      description: "45s, 60s e 75s - perfeito para redes sociais"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">VideoCutter AI</h1>
            </div>
            <Badge variant="secondary">Beta</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforme Vídeos em 
            <span className="text-blue-600"> Conteúdo Viral</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cole o link, nossa IA encontra os melhores momentos e cria cortes otimizados 
            com legendas em português para suas redes sociais.
          </p>
        </div>

        {/* Video URL Input */}
        <Card className="max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-center">Cole o Link do Vídeo</CardTitle>
            <CardDescription className="text-center">
              Suportamos YouTube, Instagram, TikTok, KWAI e mais!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={!videoUrl.trim() || isLoading}
                  className="min-w-[120px]"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processando...
                    </div>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Começar
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            {/* Supported Platforms */}
            <div className="flex justify-center items-center mt-4 space-x-4">
              <span className="text-sm text-gray-500">Plataformas suportadas:</span>
              {supportedPlatforms.map((platform) => (
                <Badge key={platform.name} variant="outline" className="text-xs">
                  {platform.icon} {platform.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Section */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Como Funciona</CardTitle>
            <CardDescription>
              Processo simples e automatizado em 3 passos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold mb-2">Cole o Link</h4>
                <p className="text-gray-600 text-sm">
                  Insira o URL do vídeo de qualquer plataforma suportada
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold mb-2">IA Processa</h4>
                <p className="text-gray-600 text-sm">
                  Nossa IA identifica os momentos mais engajantes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold mb-2">Baixe os Cortes</h4>
                <p className="text-gray-600 text-sm">
                  Receba 3 versões otimizadas com legendas em português
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 VideoCutter AI. Transformando vídeos em conteúdo viral.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
