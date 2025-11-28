'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import EmailSignup from '@/components/EmailSignup'

const GAME_DURATION = 10 // seconds

export default function ButtonMasherPage() {
  const [gameState, setGameState] = useState<'menu' | 'countdown' | 'playing' | 'finished'>('menu')
  const [countdown, setCountdown] = useState(3)
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION)
  const [clicks, setClicks] = useState(0)
  const [cps, setCps] = useState(0) // clicks per second
  const [highScore, setHighScore] = useState(0)
  const [highCPS, setHighCPS] = useState(0)
  const startTimeRef = useRef<number>(0)
  const intervalRef = useRef<NodeJS.Timeout>()
  const countdownIntervalRef = useRef<NodeJS.Timeout>()

  // Load high scores
  useEffect(() => {
    const savedHighScore = localStorage.getItem('masherHighScore')
    const savedHighCPS = localStorage.getItem('masherHighCPS')
    if (savedHighScore) setHighScore(parseInt(savedHighScore))
    if (savedHighCPS) setHighCPS(parseFloat(savedHighCPS))
  }, [])

  const startGame = useCallback(() => {
    setGameState('countdown')
    setCountdown(3)
    setClicks(0)
    setCps(0)
    setTimeRemaining(GAME_DURATION)

    // Countdown
    let count = 3
    countdownIntervalRef.current = setInterval(() => {
      count--
      setCountdown(count)
      if (count <= 0) {
        clearInterval(countdownIntervalRef.current)
        // Start the game
        setGameState('playing')
        startTimeRef.current = Date.now()
        
        // Game timer
        intervalRef.current = setInterval(() => {
          const elapsed = (Date.now() - startTimeRef.current) / 1000
          const remaining = GAME_DURATION - elapsed
          
          if (remaining <= 0) {
            endGame()
          } else {
            setTimeRemaining(remaining)
          }
        }, 50)
      }
    }, 1000)
  }, [])

  const handleClick = useCallback(() => {
    if (gameState !== 'playing') return

    setClicks(prev => {
      const newClicks = prev + 1
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const newCPS = newClicks / elapsed
      setCps(newCPS)
      return newClicks
    })
  }, [gameState])

  const endGame = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    setGameState('finished')
    const finalCPS = clicks / GAME_DURATION
    
    // Save high scores
    if (clicks > highScore) {
      setHighScore(clicks)
      localStorage.setItem('masherHighScore', clicks.toString())
    }
    if (finalCPS > highCPS) {
      setHighCPS(finalCPS)
      localStorage.setItem('masherHighCPS', finalCPS.toFixed(2))
    }
  }, [clicks, highScore, highCPS])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current)
    }
  }, [])

  // Keyboard support - spacebar to click
  useEffect(() => {
    if (gameState !== 'playing') return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault()
        handleClick()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameState, handleClick])

  const resetGame = () => {
    setGameState('menu')
    setClicks(0)
    setCps(0)
    setTimeRemaining(GAME_DURATION)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current)
  }

  const getRating = (cps: number) => {
    if (cps >= 10) return { emoji: '🔥', text: 'INSANE!', color: 'text-red-600' }
    if (cps >= 8) return { emoji: '⚡', text: 'LIGHTNING FAST!', color: 'text-yellow-500' }
    if (cps >= 6) return { emoji: '💨', text: 'SUPER FAST!', color: 'text-orange-500' }
    if (cps >= 4) return { emoji: '👍', text: 'PRETTY GOOD!', color: 'text-blue-500' }
    if (cps >= 2) return { emoji: '😊', text: 'NOT BAD!', color: 'text-green-500' }
    return { emoji: '🐢', text: 'KEEP TRYING!', color: 'text-gray-500' }
  }

  const finalRating = clicks > 0 ? getRating(clicks / GAME_DURATION) : getRating(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Newsletter Section */}
        {gameState === 'menu' && (
          <div className="mb-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-2xl">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Subscribe to My Newsletter
              </h2>
              <p className="text-gray-600 text-sm">
                Get thoughtful insights delivered daily. (Click subscribe faster than you click this button!)
              </p>
            </div>
            <EmailSignup 
              variant="cta" 
              placeholder="Enter your email"
              buttonLabel="Subscribe"
            />
          </div>
        )}

        {/* Main Game Area */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-2xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-2">
              🔥 Button Masher 🔥
            </h1>
            <p className="text-xl text-gray-600">
              Click as fast as you can for {GAME_DURATION} seconds!
            </p>
          </div>

          {/* Countdown */}
          {gameState === 'countdown' && (
            <div className="text-center py-20">
              <div className="text-9xl font-bold text-purple-600 animate-bounce mb-4">
                {countdown > 0 ? countdown : 'GO!'}
              </div>
              <p className="text-2xl text-gray-600">Get ready...</p>
            </div>
          )}

          {/* Game Screen */}
          {gameState === 'playing' && (
            <div className="space-y-8">
              {/* Timer and Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-purple-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-purple-600">{Math.ceil(timeRemaining)}</div>
                  <div className="text-sm text-gray-600 mt-1">Seconds</div>
                </div>
                <div className="bg-pink-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-pink-600">{clicks}</div>
                  <div className="text-sm text-gray-600 mt-1">Clicks</div>
                </div>
                <div className="bg-red-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-red-600">{cps.toFixed(1)}</div>
                  <div className="text-sm text-gray-600 mt-1">CPS</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-100"
                  style={{ width: `${((GAME_DURATION - timeRemaining) / GAME_DURATION) * 100}%` }}
                />
              </div>

              {/* The Button */}
              <button
                onClick={handleClick}
                className="w-full py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl font-bold text-4xl shadow-2xl transform active:scale-95 hover:scale-105 transition-all duration-100 select-none"
                style={{ touchAction: 'manipulation' }}
              >
                CLICK ME!
                <br />
                <span className="text-2xl">(or press SPACE)</span>
              </button>

              {/* Current Rating */}
              <div className="text-center">
                <div className={`text-4xl font-bold ${finalRating.color}`}>
                  {finalRating.emoji} {finalRating.text}
                </div>
              </div>
            </div>
          )}

          {/* Results Screen */}
          {gameState === 'finished' && (
            <div className="text-center space-y-8 py-8">
              <div className="text-6xl mb-4">{finalRating.emoji}</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {finalRating.text}
              </h2>
              
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="bg-purple-100 rounded-xl p-6">
                  <div className="text-5xl font-bold text-purple-600">{clicks}</div>
                  <div className="text-sm text-gray-600 mt-2">Total Clicks</div>
                </div>
                <div className="bg-pink-100 rounded-xl p-6">
                  <div className="text-5xl font-bold text-pink-600">{(clicks / GAME_DURATION).toFixed(2)}</div>
                  <div className="text-sm text-gray-600 mt-2">Clicks/Second</div>
                </div>
              </div>

              {/* High Scores */}
              <div className="bg-gray-100 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🏆 High Scores</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-700">{highScore}</div>
                    <div className="text-xs text-gray-600">Best Clicks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-700">{highCPS.toFixed(2)}</div>
                    <div className="text-xs text-gray-600">Best CPS</div>
                  </div>
                </div>
                {(clicks === highScore || (clicks / GAME_DURATION) === highCPS) && (
                  <div className="mt-4 text-green-600 font-bold animate-pulse">
                    🎉 NEW RECORD! 🎉
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Play Again
                </button>
                <button
                  onClick={resetGame}
                  className="px-8 py-4 bg-gray-300 text-gray-800 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Menu
                </button>
              </div>
            </div>
          )}

          {/* Menu Screen */}
          {gameState === 'menu' && (
            <div className="text-center py-12 space-y-8">
              <div className="text-6xl mb-4">👆</div>
              <p className="text-xl text-gray-600 mb-8">
                How fast can you click? Test your clicking speed!
              </p>
              
              {highScore > 0 && (
                <div className="bg-gray-100 rounded-xl p-6 max-w-md mx-auto mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Your Best Scores</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-700">{highScore}</div>
                      <div className="text-sm text-gray-600">Clicks</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-700">{highCPS.toFixed(2)}</div>
                      <div className="text-sm text-gray-600">CPS</div>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={startGame}
                className="px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
              >
                Start Clicking!
              </button>

              <p className="text-sm text-gray-500">
                Click the button or press SPACE to click
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <a 
            href="https://provenideas.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-semibold text-white hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
          >
            provenideas.net
          </a>
        </div>
      </div>
    </div>
  )
}

