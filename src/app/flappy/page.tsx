'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import EmailSignup from '@/components/EmailSignup'

const CHARACTERS = [
  { emoji: '🍕', name: 'Pizza Slice' },
  { emoji: '🍔', name: 'Hamburger' },
  { emoji: '🐱', name: 'Flying Cat' },
  { emoji: '🐶', name: 'Doge' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '💎', name: 'Diamond' },
  { emoji: '🎈', name: 'Balloon' },
  { emoji: '🍩', name: 'Donut' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '👽', name: 'Alien' },
  { emoji: '🦄', name: 'Unicorn' },
  { emoji: '🐼', name: 'Panda' },
  { emoji: '🍪', name: 'Cookie' },
  { emoji: '🎂', name: 'Cake' },
  { emoji: '🦁', name: 'Lion' },
]

export default function FlappyGame() {
  const [character, setCharacter] = useState(CHARACTERS[0])
  const [gameState, setGameState] = useState<'menu' | 'countdown' | 'playing' | 'gameover'>('menu')
  const [countdown, setCountdown] = useState(3)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [position, setPosition] = useState(300)
  const [velocity, setVelocity] = useState(0)
  const [pipes, setPipes] = useState<Array<{ id: number; x: number; top: number; bottom: number; passed: boolean }>>([])
  
  // Refs for game loop
  const gameLoopRef = useRef<number>()
  const pipeIdRef = useRef(0)
  const lastPipeTimeRef = useRef(0)
  const positionRef = useRef(300)
  const velocityRef = useRef(0)
  const scoreRef = useRef(0)
  const isGameOverRef = useRef(false)
  
  const gravity = 0.6
  const jumpStrength = -9

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('flappyHighScore')
    if (saved) setHighScore(parseInt(saved))
    
    // Pick random character on mount
    setCharacter(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
  }, [])

  const gameOver = useCallback(() => {
    if (isGameOverRef.current) return
    isGameOverRef.current = true
    
    setGameState('gameover')
    if (scoreRef.current > highScore) {
      const newHigh = scoreRef.current
      setHighScore(newHigh)
      localStorage.setItem('flappyHighScore', newHigh.toString())
    }
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current)
    }
  }, [highScore])

  const startGame = useCallback(() => {
    // Pick new random character
    setCharacter(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
    setGameState('countdown')
    setCountdown(3)
    isGameOverRef.current = false
    scoreRef.current = 0
    positionRef.current = window.innerHeight / 2
    velocityRef.current = 0
    setScore(0)
    setPosition(window.innerHeight / 2)
    setVelocity(0)
    setPipes([])
    pipeIdRef.current = 0
    lastPipeTimeRef.current = Date.now()
    
    // Countdown timer
    let count = 3
    const countdownInterval = setInterval(() => {
      count--
      setCountdown(count)
      if (count <= 0) {
        clearInterval(countdownInterval)
        setGameState('playing')
        lastPipeTimeRef.current = Date.now() + 2000 // Give extra time before first pipe
      }
    }, 1000)
  }, [])

  // Handle jump/flap
  const handleJump = useCallback(() => {
    if (gameState === 'menu') {
      startGame()
      return
    }
    
    if (gameState === 'playing' && !isGameOverRef.current) {
      velocityRef.current = jumpStrength
      setVelocity(jumpStrength)
    }
    // Ignore jumps during countdown
  }, [gameState, startGame])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
      return
    }

    const gameLoop = () => {
      if (isGameOverRef.current) return

      // Update velocity and position
      velocityRef.current += gravity
      positionRef.current += velocityRef.current
      
      // Update state for display
      setPosition(positionRef.current)
      setVelocity(velocityRef.current)
      
      // Boundary check
      if (positionRef.current < 60) {
        positionRef.current = 60
        gameOver()
        return
      }
      if (positionRef.current > window.innerHeight - 60) {
        positionRef.current = window.innerHeight - 60
        gameOver()
        return
      }

      // Create pipes (every 2500ms for more time between pipes)
      const now = Date.now()
      if (now - lastPipeTimeRef.current > 2500) {
        const gap = 200 // Bigger gap
        const minTop = 150
        const maxTop = window.innerHeight - gap - 150
        const top = Math.random() * (maxTop - minTop) + minTop
        
        setPipes(prev => [
          ...prev,
          {
            id: pipeIdRef.current++,
            x: window.innerWidth + 50,
            top,
            bottom: top + gap,
            passed: false,
          }
        ])
        lastPipeTimeRef.current = now
      }

      // Move pipes and check collisions
      setPipes(prev => {
        const charX = 120
        const charY = positionRef.current
        const charSize = 50
        const pipeWidth = 70
        
        return prev.map(pipe => {
          const newX = pipe.x - 4
          
          // Check if passed pipe (for scoring)
          if (!pipe.passed && newX < charX - 50) {
            scoreRef.current += 1
            setScore(scoreRef.current)
            return { ...pipe, x: newX, passed: true }
          }

          // Check collision
          const hitX = charX + charSize/2 > newX && charX - charSize/2 < newX + pipeWidth
          const hitTop = charY - charSize/2 < pipe.top
          const hitBottom = charY + charSize/2 > pipe.bottom
          
          if (hitX && (hitTop || hitBottom)) {
            gameOver()
            return { ...pipe, x: newX }
          }

          return { ...pipe, x: newX }
        }).filter(pipe => pipe.x > -150)
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, gameOver])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault()
        handleJump()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleJump])

  // Click handler - only on game area
  const handleClick = useCallback((e: React.MouseEvent) => {
    // Don't trigger if clicking on UI elements
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('form') || target.closest('input')) {
      return
    }
    handleJump()
  }, [handleJump])

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-300 via-blue-400 to-cyan-500 cursor-pointer"
      onClick={handleClick}
    >
      {/* Newsletter Subscription Section */}
      {gameState === 'menu' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-2xl max-w-md">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 text-xs">
              Get thoughtful insights delivered daily. (Like this game, our newsletter is addictive!)
            </p>
          </div>
          <EmailSignup 
            variant="cta" 
            placeholder="Enter your email"
            buttonLabel="Subscribe"
          />
        </div>
      )}

      {/* Clouds background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-8xl opacity-20 text-white"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 2) * 30}%`,
              animation: `float ${15 + i * 5}s infinite ease-in-out`,
              animationDelay: `${i * 2}s`,
            }}
          >
            ☁️
          </div>
        ))}
      </div>

      {/* Pipes/Obstacles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {pipes.map(pipe => (
          <div key={pipe.id}>
            {/* Top pipe */}
            <div
              className="absolute bg-gradient-to-r from-green-600 to-green-700 border-2 border-green-800 shadow-xl"
              style={{
                left: `${pipe.x}px`,
                top: 0,
                width: '70px',
                height: `${pipe.top}px`,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-800 border-t-2 border-green-900"></div>
            </div>
            {/* Bottom pipe */}
            <div
              className="absolute bg-gradient-to-r from-green-600 to-green-700 border-2 border-green-800 shadow-xl"
              style={{
                left: `${pipe.x}px`,
                top: `${pipe.bottom}px`,
                width: '70px',
                height: `${window.innerHeight - pipe.bottom}px`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-10 bg-green-800 border-b-2 border-green-900"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Character */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: '120px',
          top: `${position}px`,
          transform: `translate(-50%, -50%) rotate(${Math.min(Math.max(velocity * 2.5, -25), 25)}deg)`,
        }}
      >
        <div className="text-6xl drop-shadow-2xl">
          {character.emoji}
        </div>
      </div>

      {/* Countdown Screen */}
      {gameState === 'countdown' && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm pointer-events-none">
          <div className="text-center">
            <div className="text-9xl font-bold text-white drop-shadow-2xl animate-pulse">
              {countdown > 0 ? countdown : 'GO!'}
            </div>
          </div>
        </div>
      )}

      {/* Score */}
      {(gameState === 'playing' || gameState === 'gameover') && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full pointer-events-none">
          <div className="text-3xl font-bold">{score}</div>
          <div className="text-xs text-center mt-1 opacity-80">High: {highScore}</div>
        </div>
      )}

      {/* Menu Screen */}
      {gameState === 'menu' && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none">
          <div className="text-center bg-white/95 backdrop-blur-md rounded-3xl p-10 border border-white/40 shadow-2xl max-w-md pointer-events-auto">
            <div className="text-8xl mb-4 animate-bounce">
              {character.emoji}
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">
              Flappy {character.name}
            </h1>
            <p className="text-gray-600 mb-6">
              Tap or press SPACE to flap!
            </p>
            <button
              onClick={startGame}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Start Game
            </button>
            {highScore > 0 && (
              <p className="text-gray-500 text-sm mt-4">
                High Score: {highScore}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
          <div className="text-center bg-white/95 backdrop-blur-md rounded-3xl p-10 border border-white/40 shadow-2xl max-w-md pointer-events-auto">
            <div className="text-6xl mb-4">💀</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Game Over!
            </h2>
            <p className="text-3xl font-bold text-blue-600 mb-2">
              Score: {score}
            </p>
            {score === highScore && score > 0 && (
              <p className="text-green-600 font-bold mb-4 animate-pulse">
                🏆 New High Score!
              </p>
            )}
            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={startGame}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Play Again
              </button>
              <button
                onClick={() => setGameState('menu')}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {gameState === 'playing' && pipes.length === 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs pointer-events-none">
          Tap or SPACE to flap ↑
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
