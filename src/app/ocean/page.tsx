'use client'

import { useState, useEffect, useRef } from 'react'
import EmailSignup from '@/components/EmailSignup'

interface SeaCreature {
  id: string
  type: 'fish' | 'whale' | 'monster'
  emoji: string
  x: number
  y: number
  speed: number
  direction: number
  size: number
}

interface Weather {
  id: string
  type: 'storm' | 'tsunami'
  intensity: number
  duration: number
  startTime: number
}

const FISH_SPECIES = ['🐟', '🐠', '🐡', '🦈', '🐙', '🦑', '🦐', '🦞', '🦀', '🐚']
const WHALES = ['🐋', '🐳']
const SEA_MONSTERS = ['👹', '🐉', '🌊', '⚡']

export default function OceanPage() {
  const [creatures, setCreatures] = useState<SeaCreature[]>([])
  const [weather, setWeather] = useState<Weather[]>([])
  const [isChaos, setIsChaos] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const lastClickTime = useRef<number>(0)

  // Wave animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const horizon = canvas.height * 0.5
      
      // Sky gradient - soft and calming
      const skyGradient = ctx.createLinearGradient(0, 0, 0, horizon)
      skyGradient.addColorStop(0, '#87CEEB') // Sky blue
      skyGradient.addColorStop(0.5, '#B0E0E6') // Powder blue
      skyGradient.addColorStop(1, '#ADD8E6') // Light blue
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, horizon)

      // Ocean base gradient - soft teals and blues
      const oceanGradient = ctx.createLinearGradient(0, horizon, 0, canvas.height)
      oceanGradient.addColorStop(0, '#5F9EA0') // Cadet blue
      oceanGradient.addColorStop(0.3, '#4682B4') // Steel blue
      oceanGradient.addColorStop(0.7, '#2E5266') // Dark blue-gray
      oceanGradient.addColorStop(1, '#1B3A4B') // Deep blue
      ctx.fillStyle = oceanGradient
      ctx.fillRect(0, horizon, canvas.width, canvas.height - horizon)

      // Draw smooth, calming waves with multiple layers
      const waveConfigs = [
        { height: 25, length: 300, speed: 0.015, offset: 0, alpha: 0.4, color: 'rgba(175, 238, 238, ' },
        { height: 35, length: 250, speed: 0.02, offset: Math.PI / 3, alpha: 0.35, color: 'rgba(176, 224, 230, ' },
        { height: 45, length: 200, speed: 0.025, offset: Math.PI / 2, alpha: 0.3, color: 'rgba(135, 206, 250, ' },
      ]

      waveConfigs.forEach((config, index) => {
        ctx.beginPath()
        ctx.moveTo(0, horizon)

        for (let x = 0; x <= canvas.width; x += 2) {
          const wave1 = Math.sin((x / config.length) + (time * config.speed) + config.offset) * config.height
          const wave2 = Math.sin((x / (config.length * 0.7)) + (time * config.speed * 1.3) + config.offset) * (config.height * 0.5)
          const y = horizon + wave1 + wave2 + (index * 8)
          
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        
        ctx.fillStyle = config.color + config.alpha + ')'
        ctx.fill()
      })

      // Add subtle foam on wave crests
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.lineWidth = 2
      ctx.beginPath()
      const foamWave = waveConfigs[0]
      for (let x = 0; x <= canvas.width; x += 3) {
        const y = horizon + Math.sin((x / foamWave.length) + (time * foamWave.speed)) * foamWave.height
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      time += 0.3

      animationFrameRef.current = requestAnimationFrame(drawWaves)
    }

    drawWaves()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Creature animation - smoother movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCreatures(prev => 
        prev.map(creature => {
          let newX = creature.x + Math.cos(creature.direction) * creature.speed
          let newY = creature.y + Math.sin(creature.direction) * creature.speed
          
          // Keep creatures in ocean (bottom half)
          const oceanTop = window.innerHeight * 0.5
          const oceanBottom = window.innerHeight - 50
          
          // Wrap around screen horizontally
          if (newX > window.innerWidth + 50) newX = -50
          if (newX < -50) newX = window.innerWidth + 50
          
          // Keep creatures in ocean vertically
          if (newY < oceanTop) newY = oceanTop + 20
          if (newY > oceanBottom) newY = oceanBottom - 20
          
          return {
            ...creature,
            x: newX,
            y: newY,
          }
        })
      )
    }, 30) // Faster updates for smoother animation

    return () => clearInterval(interval)
  }, [])

  // Weather effects
  useEffect(() => {
    const interval = setInterval(() => {
      setWeather(prev => 
        prev.filter(w => Date.now() - w.startTime < w.duration)
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    const currentTime = Date.now()
    const timeSinceLastClick = currentTime - lastClickTime.current
    
    if (timeSinceLastClick < 300) {
      // Double click - storm or tsunami
      handleDoubleClick(e)
      return
    }

    lastClickTime.current = currentTime

    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY

    setClickCount(prev => prev + 1)

    // Random creature type
    const rand = Math.random()
    let creature: SeaCreature

    if (rand < 0.5) {
      // Fish
      creature = {
        id: Date.now().toString() + Math.random(),
        type: 'fish',
        emoji: FISH_SPECIES[Math.floor(Math.random() * FISH_SPECIES.length)],
        x,
        y,
        speed: 1 + Math.random() * 2,
        direction: Math.random() * Math.PI * 2,
        size: 0.8 + Math.random() * 0.4,
      }
    } else if (rand < 0.8) {
      // Whale
      creature = {
        id: Date.now().toString() + Math.random(),
        type: 'whale',
        emoji: WHALES[Math.floor(Math.random() * WHALES.length)],
        x,
        y,
        speed: 0.5 + Math.random(),
        direction: Math.random() * Math.PI * 2,
        size: 1.5 + Math.random() * 0.5,
      }
    } else {
      // Sea monster
      creature = {
        id: Date.now().toString() + Math.random(),
        type: 'monster',
        emoji: SEA_MONSTERS[Math.floor(Math.random() * SEA_MONSTERS.length)],
        x,
        y,
        speed: 0.3 + Math.random() * 0.7,
        direction: Math.random() * Math.PI * 2,
        size: 2 + Math.random(),
      }
    }

    setCreatures(prev => [...prev, creature])

    // Chaos mode after 20 clicks
    if (clickCount >= 19 && !isChaos) {
      setIsChaos(true)
    }
  }

  const handleDoubleClick = (e: React.MouseEvent) => {
    const rand = Math.random()
    const isTsunami = rand < 0.3

    const weatherEvent: Weather = {
      id: Date.now().toString(),
      type: isTsunami ? 'tsunami' : 'storm',
      intensity: 0.5 + Math.random() * 0.5,
      duration: isTsunami ? 5000 : 3000,
      startTime: Date.now(),
    }

    setWeather(prev => [...prev, weatherEvent])

    // Chaos effect - add multiple creatures randomly
    if (isChaos) {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const randomX = Math.random() * window.innerWidth
          const randomY = Math.random() * (window.innerHeight / 2) + window.innerHeight / 2
          
          const creature: SeaCreature = {
            id: Date.now().toString() + Math.random() + i,
            type: 'fish',
            emoji: FISH_SPECIES[Math.floor(Math.random() * FISH_SPECIES.length)],
            x: randomX,
            y: randomY,
            speed: 2 + Math.random() * 3,
            direction: Math.random() * Math.PI * 2,
            size: 0.8 + Math.random() * 0.4,
          }
          setCreatures(prev => [...prev, creature])
        }, i * 100)
      }
    }
  }

  const getActiveWeather = () => {
    return weather.filter(w => Date.now() - w.startTime < w.duration)
  }

  const activeWeather = getActiveWeather()
  const hasStorm = activeWeather.some(w => w.type === 'storm')
  const hasTsunami = activeWeather.some(w => w.type === 'tsunami')

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-300 via-cyan-200 to-blue-400">
      {/* Newsletter Subscription Section */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-2xl max-w-md">
        <div className="text-center mb-3">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            Subscribe to My Newsletter
          </h2>
          <p className="text-gray-600 text-xs">
            Get thoughtful insights delivered daily. Dive deep into our newsletter!
          </p>
        </div>
        <EmailSignup 
          variant="cta" 
          placeholder="Enter your email"
          buttonLabel="Subscribe"
        />
      </div>

      {/* Canvas for waves */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Click area for ocean - bottom half of screen */}
      <div
        className="absolute z-10 cursor-pointer hover:bg-blue-500/5 transition-colors duration-300"
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.03)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
        style={{ 
          background: 'transparent',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
        }}
      />

      {/* Sea Creatures */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {creatures.map(creature => (
          <div
            key={creature.id}
            className="absolute transition-all duration-75 ease-linear"
            style={{
              left: `${creature.x}px`,
              top: `${creature.y}px`,
              transform: `translate(-50%, -50%) scale(${creature.size})`,
              fontSize: '2.5rem',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4)) drop-shadow(0 0 8px rgba(135, 206, 250, 0.3))',
              willChange: 'transform',
            }}
          >
            {creature.emoji}
          </div>
        ))}
      </div>

      {/* Weather Effects - Softer and more calming */}
      {hasStorm && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute inset-0 bg-slate-800/15 backdrop-blur-sm transition-opacity duration-500" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-200 text-xl opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${30 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.8 + Math.random() * 0.7}s`,
                filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))',
              }}
            >
              ⚡
            </div>
          ))}
        </div>
      )}

      {hasTsunami && (
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
          <div 
            className="absolute w-full bg-gradient-to-t from-teal-900/30 to-transparent transition-opacity duration-700"
            style={{
              height: '50%',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-teal-800/25 backdrop-blur-sm animate-pulse" />
        </div>
      )}

      {/* Stats Panel */}
      <div className="absolute bottom-6 left-6 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-2xl">
        <div className="text-sm space-y-2">
          <div className="font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span>Eternal Ocean</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>• Click: Add creatures</div>
            <div>• Double-click: Weather</div>
          </div>
          <div className="text-xs text-gray-700 font-medium mt-3 pt-3 border-t border-gray-200">
            Creatures: <span className="text-blue-600 font-semibold">{creatures.length}</span>
          </div>
          {isChaos && (
            <div className="text-xs text-purple-600 font-bold mt-2 pt-2 border-t border-purple-200 animate-pulse">
              🌪️ Chaos Mode Active
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-xl text-center max-w-md">
        <p className="text-sm text-gray-700 font-medium">
          Click the ocean to add life • Double-click for weather
        </p>
        {clickCount >= 15 && !isChaos && (
          <p className="text-xs text-purple-600 font-semibold mt-2 animate-pulse">
            🌊 Chaos approaches...
          </p>
        )}
      </div>
    </div>
  )
}

