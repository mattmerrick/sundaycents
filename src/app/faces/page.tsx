'use client'

import { useState } from 'react'
import EmailSignup from '@/components/EmailSignup'

interface FaceParts {
  eyes: string
  nose: string
  mouth: string
  hair: string
  background: string
}

const EYES = ['👀', '😳', '😵', '🥺', '🤪', '😒', '😑', '😐', '👁️', '🥴', '😶', '😏', '😴', '🤤', '🙄']
const NOSES = ['👃', '🐽', '🔺', '▪️', '◼️', '🔴', '🔷', '⚫', '👂']
const MOUTHS = ['😛', '😜', '🤐', '😮', '😲', '😱', '🤯', '😵', '🤢', '🤮', '🤬', '😤', '👄', '💋', '😗', '😙', '😚', '😽', '🤭', '🤫']
const HAIR = ['🦱', '🦳', '🦲', '👨‍🦱', '👨‍🦳', '👨‍🦲', '👩‍🦱', '👩‍🦳', '👩‍🦲', '🧑‍🦱', '🧑‍🦳', '🧑‍🦲', '👱', '👱‍♀️', '👱‍♂️', '💇', '💇‍♀️', '💇‍♂️', '💆', '💆‍♀️', '💆‍♂️']
const BACKGROUNDS = [
  { color: 'bg-gradient-to-br from-pink-300 to-purple-400', name: 'Pink Purple' },
  { color: 'bg-gradient-to-br from-yellow-300 to-orange-400', name: 'Sunset' },
  { color: 'bg-gradient-to-br from-blue-300 to-cyan-400', name: 'Sky' },
  { color: 'bg-gradient-to-br from-green-300 to-emerald-400', name: 'Mint' },
  { color: 'bg-gradient-to-br from-red-300 to-pink-400', name: 'Rose' },
  { color: 'bg-gradient-to-br from-indigo-300 to-blue-400', name: 'Ocean' },
  { color: 'bg-gradient-to-br from-purple-300 to-pink-400', name: 'Lavender' },
  { color: 'bg-gradient-to-br from-orange-300 to-red-400', name: 'Fire' },
  { color: 'bg-gradient-to-br from-cyan-300 to-blue-400', name: 'Aqua' },
  { color: 'bg-gradient-to-br from-yellow-200 to-green-300', name: 'Lime' },
  { color: 'bg-gradient-to-br from-purple-400 to-indigo-500', name: 'Deep Purple' },
  { color: 'bg-gradient-to-br from-red-400 to-orange-500', name: 'Tangerine' },
]

export default function FacesPage() {
  const [currentFace, setCurrentFace] = useState<FaceParts | null>(null)
  const [faceHistory, setFaceHistory] = useState<FaceParts[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateRandomFace = () => {
    setIsGenerating(true)
    
    // Small delay for animation effect
    setTimeout(() => {
      const newFace: FaceParts = {
        eyes: EYES[Math.floor(Math.random() * EYES.length)],
        nose: NOSES[Math.floor(Math.random() * NOSES.length)],
        mouth: MOUTHS[Math.floor(Math.random() * MOUTHS.length)],
        hair: HAIR[Math.floor(Math.random() * HAIR.length)],
        background: BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)].color,
      }
      
      setCurrentFace(newFace)
      setFaceHistory(prev => [newFace, ...prev].slice(0, 10)) // Keep last 10 faces
      setIsGenerating(false)
    }, 300)
  }

  const copyFace = async (face: FaceParts) => {
    const faceText = `${face.hair}\n${face.eyes} ${face.nose} ${face.mouth}`
    try {
      await navigator.clipboard.writeText(faceText)
      alert('Face copied to clipboard!')
    } catch (err) {
      alert('Failed to copy face')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter Subscription Section */}
        <div className="mb-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              Subscribe to My Newsletter
            </h2>
            <p className="text-white/80 text-lg">
              Get thoughtful insights delivered daily. (Unlike these faces, our newsletter is always beautiful!)
            </p>
          </div>
          <div className="flex justify-center">
            <EmailSignup 
              variant="cta" 
              placeholder="Enter your email"
              buttonLabel="Subscribe"
            />
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            🎭 Make a Face Generator
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Random eyes, nose, mouth, hair, and background. Creates cursed, funny faces people love posting.
          </p>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={generateRandomFace}
            disabled={isGenerating}
            className={`
              px-8 py-4 rounded-xl font-bold text-xl
              transition-all duration-200 transform hover:scale-105 active:scale-95
              shadow-2xl
              ${isGenerating 
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
              }
            `}
          >
            {isGenerating ? '✨ Generating Cursed Face...' : '🎲 Generate Random Face'}
          </button>
        </div>

        {/* Face Display */}
        <div className="mb-12">
          {currentFace ? (
            <div 
              className={`
                relative mx-auto w-96 h-96 rounded-3xl 
                ${currentFace.background}
                shadow-2xl border-4 border-white/30
                flex flex-col items-center justify-center
                transition-all duration-500
                ${isGenerating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}
              `}
            >
              {/* Hair - positioned at top */}
              <div className="absolute top-8 text-7xl z-10">
                {currentFace.hair}
              </div>

              {/* Eyes - positioned in upper middle */}
              <div className="absolute top-32 text-6xl z-10">
                {currentFace.eyes}
              </div>

              {/* Nose - positioned in middle */}
              <div className="absolute top-44 text-4xl z-10">
                {currentFace.nose}
              </div>

              {/* Mouth - positioned in lower middle */}
              <div className="absolute top-56 text-5xl z-10">
                {currentFace.mouth}
              </div>

              {/* Face outline (optional) */}
              <div className="absolute inset-4 border-2 border-black/10 rounded-full" />
            </div>
          ) : (
            <div className="mx-auto w-96 h-96 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl border-4 border-white/30 flex items-center justify-center">
              <div className="text-center text-white/50">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-xl">Click to generate a face!</p>
              </div>
            </div>
          )}
        </div>

        {/* Face Info */}
        {currentFace && (
          <div className="mb-8 text-center">
            <button
              onClick={() => copyFace(currentFace)}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-200 mb-4"
            >
              📋 Copy Face
            </button>
            <p className="text-white/60 text-sm">
              Click the button above to copy this cursed creation
            </p>
          </div>
        )}

        {/* Face History */}
        {faceHistory.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Recent Cursed Faces
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {faceHistory.map((face, index) => (
                <div
                  key={index}
                  className={`
                    relative w-full aspect-square rounded-2xl 
                    ${face.background}
                    shadow-xl border-2 border-white/30
                    flex flex-col items-center justify-center
                    cursor-pointer transform hover:scale-110 transition-all duration-200
                    group
                  `}
                  onClick={() => copyFace(face)}
                >
                  {/* Hair */}
                  <div className="absolute top-2 text-2xl sm:text-3xl z-10">
                    {face.hair}
                  </div>

                  {/* Eyes */}
                  <div className="absolute top-8 sm:top-10 text-xl sm:text-2xl z-10">
                    {face.eyes}
                  </div>

                  {/* Nose */}
                  <div className="absolute top-14 sm:top-16 text-lg sm:text-xl z-10">
                    {face.nose}
                  </div>

                  {/* Mouth */}
                  <div className="absolute top-20 sm:top-24 text-xl sm:text-2xl z-10">
                    {face.mouth}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl transition-all duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold">
                      Click to Copy
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            Generate unlimited cursed faces. Share the chaos! 😈
          </p>
        </div>
      </div>
    </main>
  )
}

