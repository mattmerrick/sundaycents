'use client'

import { useState, useEffect, useRef } from 'react'
import EmailSignup from '@/components/EmailSignup'

const STAGES = [
  { 
    id: 1, 
    title: 'Assembly', 
    emoji: '🍞', 
    description: 'Bread, lettuce, tomato, cheese, meat...',
    color: 'from-yellow-100 to-orange-100'
  },
  { 
    id: 2, 
    title: 'Toasting', 
    emoji: '🔥', 
    description: 'The heat transforms...',
    color: 'from-orange-200 to-red-200'
  },
  { 
    id: 3, 
    title: 'Consumption', 
    emoji: '😋', 
    description: 'Bite by bite, it disappears...',
    color: 'from-green-100 to-blue-100'
  },
  { 
    id: 4, 
    title: 'Existential Crisis', 
    emoji: '🤔', 
    description: 'What was my purpose? Am I more than bread?',
    color: 'from-purple-200 to-indigo-200'
  },
  { 
    id: 5, 
    title: 'Rebirth as Crumbs', 
    emoji: '🍞', 
    description: 'Fragmented, scattered, yet still...',
    color: 'from-gray-200 to-yellow-200'
  },
  { 
    id: 6, 
    title: 'The Bird', 
    emoji: '🐦', 
    description: 'A small feathered creature discovers the remains...',
    color: 'from-blue-200 to-cyan-200'
  },
  { 
    id: 7, 
    title: 'Transformation', 
    emoji: '💩', 
    description: 'The circle continues...',
    color: 'from-brown-200 to-green-200'
  },
  { 
    id: 8, 
    title: 'New Life', 
    emoji: '🌾', 
    description: 'From the earth, new bread grows...',
    color: 'from-green-300 to-yellow-300'
  },
]

const TOTAL_HEIGHT = 8000 // Total scroll height in pixels

export default function SandwichTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
      
      setScrollProgress(progress)
      
      // Determine current stage based on scroll progress
      const stageIndex = Math.floor(progress * STAGES.length)
      setCurrentStage(Math.min(stageIndex, STAGES.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getStageProgress = (stageIndex: number) => {
    const stageStart = stageIndex / STAGES.length
    const stageEnd = (stageIndex + 1) / STAGES.length
    const current = scrollProgress
    
    if (current < stageStart) return 0
    if (current >= stageEnd) return 1
    return (current - stageStart) / (stageEnd - stageStart)
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Header with Newsletter */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 text-xs">
              Get thoughtful insights delivered daily. (Unlike this sandwich, our newsletter has a happy ending!)
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
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[220px]" />

      {/* Main Timeline Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Timeline of a Sandwich
          </h1>
          <p className="text-lg text-gray-600">
            Scroll down to witness the surreal journey...
          </p>
        </div>

        {/* Timeline Stages */}
        {STAGES.map((stage, index) => {
          const stageProgress = getStageProgress(index)
          const isActive = currentStage === index
          const isPast = currentStage > index

          return (
            <div
              key={stage.id}
              className={`
                relative min-h-[280px] flex flex-row items-center
                transition-all duration-1000
                bg-gradient-to-br ${stage.color}
                rounded-xl mb-4 p-5
                ${isActive ? 'shadow-xl' : 'shadow-md'}
              `}
              style={{
                opacity: isPast ? 0.7 : isActive ? 1 : 0.8,
              }}
            >
              {/* Left side - Emoji and Number */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-24">
                {/* Stage Number */}
                <div className="text-xl mb-1 opacity-60 font-mono">
                  {String(stage.id).padStart(2, '0')}
                </div>

                {/* Main Emoji/Visual */}
                <div 
                  className="text-6xl transition-all duration-1000"
                  style={{
                    transform: `scale(${0.7 + stageProgress * 0.3})`,
                    opacity: 0.5 + stageProgress * 0.5,
                  }}
                >
                  {stage.emoji}
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 ml-5">
                {/* Stage Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-1.5">
                  {stage.title}
                </h2>

                {/* Stage Description */}
                <p className="text-sm text-gray-700 mb-2">
                  {stage.description}
                </p>

                {/* Progress Indicator */}
                {isActive && (
                  <div className="w-full max-w-xs">
                    <div className="w-full h-1 bg-white/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300"
                        style={{ width: `${stageProgress * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Special visual effects for certain stages - scaled down */}
              {index === 0 && stageProgress > 0.5 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                  <div className="absolute text-3xl opacity-20" style={{ right: '10%', top: '20%' }}>🍅</div>
                  <div className="absolute text-3xl opacity-20" style={{ right: '20%', bottom: '20%' }}>🧀</div>
                </div>
              )}

              {index === 1 && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div 
                    className="text-4xl opacity-30 animate-pulse"
                    style={{ opacity: stageProgress * 0.5 }}
                  >
                    🔥
                  </div>
                </div>
              )}

              {index === 3 && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div 
                    className="text-4xl opacity-20 animate-spin"
                    style={{ opacity: stageProgress * 0.3, animationDuration: '10s' }}
                  >
                    🤔
                  </div>
                </div>
              )}

              {index === 4 && stageProgress > 0.3 && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="text-3xl opacity-30">
                    🍞
                  </div>
                </div>
              )}

              {index === 5 && stageProgress > 0.4 && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div 
                    className="text-4xl"
                    style={{ 
                      opacity: (stageProgress - 0.4) / 0.6,
                    }}
                  >
                    🐦
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* Final Message */}
        <div className="min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-green-300 via-yellow-300 to-orange-300 rounded-xl p-6 mb-8">
          <div className="text-6xl mb-4">♻️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
            The Cycle Continues
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl italic mb-3">
            In the grand cosmic dance, nothing is ever truly lost. Everything transforms.
          </p>
          <p className="text-sm text-gray-600 text-center max-w-xl">
            Scroll back up to witness it all again. Or make a sandwich. The choice is yours.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center py-6 mb-8">
          <p className="text-gray-500 text-sm">
            A surreal scrolling story about life, death, and the meaning of sandwiches.
          </p>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-40 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200">
        <div className="text-center">
          <div className="text-2xl mb-2">
            {STAGES[currentStage]?.emoji || '🍞'}
          </div>
          <div className="text-xs text-gray-600 font-semibold">
            {STAGES[currentStage]?.title || 'Ready'}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>
    </div>
  )
}

