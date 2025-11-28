'use client'

import { useState, useRef, useEffect } from 'react'
import EmailSignup from '@/components/EmailSignup'

export default function ClickerPage() {
  const [clickCount, setClickCount] = useState(0)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [isChaos, setIsChaos] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate speed based on click count
  const speed = Math.min(2 + clickCount * 0.15, 8) // Max speed of 8
  const moveInterval = isChaos ? 50 : Math.max(300 - clickCount * 10, 100)

  useEffect(() => {
    if (clickCount === 0) return

    const moveButton = () => {
      if (!containerRef.current || !buttonRef.current) return

      const container = containerRef.current
      const button = buttonRef.current
      
      const containerRect = container.getBoundingClientRect()
      const buttonRect = button.getBoundingClientRect()
      
      const maxX = containerRect.width - buttonRect.width - 20
      const maxY = containerRect.height - buttonRect.height - 20

      const currentSpeed = Math.min(2 + clickCount * 0.15, 8)

      if (isChaos) {
        // Pure chaos: random movement everywhere
        const newX = Math.random() * maxX
        const newY = Math.random() * maxY
        setButtonPosition({ x: newX, y: newY })
      } else {
        // Normal movement: moves away from center or previous position
        const angle = Math.random() * Math.PI * 2
        const moveDistance = currentSpeed * 10
        
        setButtonPosition(prev => {
          const newX = Math.max(0, Math.min(maxX, prev.x + Math.cos(angle) * moveDistance))
          const newY = Math.max(0, Math.min(maxY, prev.y + Math.sin(angle) * moveDistance))
          return { x: newX, y: newY }
        })
      }
    }

    // Start moving the button
    const interval = setInterval(moveButton, moveInterval)

    return () => clearInterval(interval)
  }, [clickCount, isChaos, moveInterval])

  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1
      if (newCount >= 20) {
        setIsChaos(true)
      }
      return newCount
    })
    
    // Move button immediately on click
    if (containerRef.current && buttonRef.current) {
      const container = containerRef.current
      const button = buttonRef.current
      
      const containerRect = container.getBoundingClientRect()
      const buttonRect = button.getBoundingClientRect()
      
      const maxX = containerRect.width - buttonRect.width - 20
      const maxY = containerRect.height - buttonRect.height - 20

      const currentSpeed = Math.min(2 + (clickCount + 1) * 0.15, 8)
      const willBeChaos = clickCount + 1 >= 20

      if (willBeChaos) {
        // Pure chaos: random movement everywhere
        const newX = Math.random() * maxX
        const newY = Math.random() * maxY
        setButtonPosition({ x: newX, y: newY })
      } else {
        // Normal movement: moves away from center or previous position
        const angle = Math.random() * Math.PI * 2
        const moveDistance = currentSpeed * 10
        
        setButtonPosition(prev => {
          const newX = Math.max(0, Math.min(maxX, prev.x + Math.cos(angle) * moveDistance))
          const newY = Math.max(0, Math.min(maxY, prev.y + Math.sin(angle) * moveDistance))
          return { x: newX, y: newY }
        })
      }
    }
  }

  const resetGame = () => {
    setClickCount(0)
    setIsChaos(false)
    setButtonPosition({ x: 0, y: 0 })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter Subscription Section */}
        <div className="mb-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              Subscribe to My Newsletter
            </h2>
            <p className="text-white/80 text-lg">
              Get thoughtful insights delivered daily. (Unlike this button, our newsletter is easy to catch!)
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
            🎯 Button That Gets Harder to Click
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Every time you click it, it moves faster. After 20 clicks... good luck.
          </p>
        </div>

        {/* Game Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[500px] bg-black/20 backdrop-blur-sm rounded-2xl border-2 border-white/20 shadow-2xl overflow-hidden mb-8"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* The Button */}
          <button
            ref={buttonRef}
            onClick={handleClick}
            className={`
              absolute px-8 py-4 rounded-xl font-bold text-lg
              shadow-2xl transform hover:scale-110 active:scale-95 cursor-pointer z-10
              ${isChaos 
                ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-white animate-pulse transition-none' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-transform duration-150'
              }
            `}
            style={{
              left: clickCount === 0 ? '50%' : `${buttonPosition.x}px`,
              top: clickCount === 0 ? '50%' : `${buttonPosition.y}px`,
              transform: clickCount === 0 ? 'translate(-50%, -50%)' : 'translate(0, 0)',
            }}
          >
            {isChaos ? '🔥 CHAOS MODE 🔥' : 'Click Me!'}
          </button>

          {/* Center indicator */}
          {clickCount === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full" />
          )}
        </div>

        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {clickCount}
              </div>
              <div className="text-white/70 text-sm">Clicks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {isChaos ? '🔥' : `${speed.toFixed(1)}x`}
              </div>
              <div className="text-white/70 text-sm">Speed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {isChaos ? 'CHAOS' : clickCount >= 15 ? '⚠️' : '✅'}
              </div>
              <div className="text-white/70 text-sm">Status</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {clickCount < 20 && (
          <div className="mb-8">
            <div className="flex justify-between text-white/70 text-sm mb-2">
              <span>Progress to Chaos</span>
              <span>{clickCount} / 20</span>
            </div>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 transition-all duration-300"
                style={{ width: `${(clickCount / 20) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Reset Button */}
        {clickCount > 0 && (
          <div className="text-center">
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Reset Game
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            {isChaos 
              ? '🎉 You survived chaos mode! This button has no mercy.'
              : 'The button gets progressively harder to catch. Can you reach 20 clicks?'
            }
          </p>
        </div>
      </div>
    </main>
  )
}

