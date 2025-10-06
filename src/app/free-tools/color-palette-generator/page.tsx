'use client'

import { useState } from 'react'

interface ColorPalette {
  id: string
  colors: string[]
  name: string
}

export default function ColorPaletteGenerator() {
  const [palettes, setPalettes] = useState<ColorPalette[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
  }

  const generatePalette = async () => {
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const colors = []
    for (let i = 0; i < 5; i++) {
      colors.push(generateRandomColor())
    }
    
    const paletteNames = [
      'Ocean Breeze', 'Sunset Vibes', 'Forest Green', 'Urban Gray', 'Royal Purple',
      'Warm Orange', 'Cool Blue', 'Earth Tones', 'Pastel Dreams', 'Bold Contrast'
    ]
    
    const newPalette: ColorPalette = {
      id: Date.now().toString(),
      colors,
      name: paletteNames[Math.floor(Math.random() * paletteNames.length)]
    }
    
    setPalettes(prev => [newPalette, ...prev])
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color)
    alert(`Color ${color} copied to clipboard!`)
  }

  const copyPalette = (palette: ColorPalette) => {
    const colorList = palette.colors.join(', ')
    navigator.clipboard.writeText(colorList)
    alert('Palette copied to clipboard!')
  }

  const deletePalette = (id: string) => {
    setPalettes(prev => prev.filter(palette => palette.id !== id))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Color Palette Generator
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Generate beautiful color palettes for your brand and designs. Get inspired with random color combinations.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="style={{color: '#FFFFFF'}}/80 text-sm">
                Free palettes remaining: {3 - usageCount}/3
              </div>
              <button
                onClick={generatePalette}
                disabled={isGenerating || usageCount >= 3}
                className="style={{backgroundColor: '#FFFFFF'}} text-pink-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Palette'}
              </button>
            </div>
          </div>

          {usageCount >= 3 && (
            <div className="mb-8 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-2">Upgrade for Unlimited Access</h3>
              <p className="style={{color: '#FFFFFF'}}/90 mb-4">
                You've generated all your free palettes. Upgrade to continue using this tool unlimited times.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Upgrade Now
              </button>
            </div>
          )}

          <div className="space-y-6">
            {palettes.length > 0 ? (
              palettes.map((palette) => (
                <div key={palette.id} className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}}">{palette.name}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyPalette(palette)}
                        className="style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} px-3 py-1 rounded text-sm transition-all duration-200"
                      >
                        Copy All
                      </button>
                      <button
                        onClick={() => deletePalette(palette.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4">
                    {palette.colors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="w-full h-20 rounded-lg mb-2 cursor-pointer hover:scale-105 transition-transform duration-200"
                          style={{ backgroundColor: color }}
                          onClick={() => copyColor(color)}
                          title={`Click to copy ${color}`}
                        ></div>
                        <div className="style={{color: '#FFFFFF'}}/80 text-xs font-mono">
                          {color}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-8 text-center">
                <p className="style={{color: '#FFFFFF'}}/60">
                  No palettes generated yet. Click "Generate Palette" to create your first color palette!
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">🎨 Color Theory Tips</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Use complementary colors for contrast</li>
                <li>• Analogous colors create harmony</li>
                <li>• Limit your palette to 3-5 colors</li>
                <li>• Consider color psychology</li>
              </ul>
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Test colors for accessibility</li>
                <li>• Use 60-30-10 rule for color distribution</li>
                <li>• Consider your brand personality</li>
                <li>• Test colors in different contexts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="style={{color: '#FFFFFF'}}/80 hover:style={{color: '#FFFFFF'}} transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
