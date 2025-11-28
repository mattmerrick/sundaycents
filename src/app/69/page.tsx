'use client'

import { useState, useEffect, useRef } from 'react'
import EmailSignup from '@/components/EmailSignup'

const CHALLENGE_DURATION = 69 // seconds

export default function SixtyNineChallenge() {
  const [timeRemaining, setTimeRemaining] = useState(CHALLENGE_DURATION)
  const [isRunning, setIsRunning] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [failed, setFailed] = useState(false)
  const [completed, setCompleted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const gracePeriodRef = useRef<boolean>(false)

  // Track user activity
  useEffect(() => {
    if (!isRunning) return

    const handleActivity = () => {
      // Grace period of 2 seconds after starting
      if (gracePeriodRef.current) return
      
      if (isRunning && !completed) {
        setFailed(true)
        setIsRunning(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }

    // Track various user activities
    window.addEventListener('mousemove', handleActivity)
    window.addEventListener('click', handleActivity)
    window.addEventListener('keydown', handleActivity)
    window.addEventListener('scroll', handleActivity)
    window.addEventListener('touchstart', handleActivity)
    window.addEventListener('touchmove', handleActivity)

    return () => {
      window.removeEventListener('mousemove', handleActivity)
      window.removeEventListener('click', handleActivity)
      window.removeEventListener('keydown', handleActivity)
      window.removeEventListener('scroll', handleActivity)
      window.removeEventListener('touchstart', handleActivity)
      window.removeEventListener('touchmove', handleActivity)
    }
  }, [isRunning, completed])

  // Timer countdown
  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false)
            setCompleted(true)
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeRemaining])

  const startChallenge = () => {
    setFailed(false)
    setCompleted(false)
    setHasStarted(true)
    setTimeRemaining(CHALLENGE_DURATION)
    startTimeRef.current = Date.now()
    
    // Grace period: 2 seconds after clicking start
    gracePeriodRef.current = true
    setTimeout(() => {
      gracePeriodRef.current = false
      setIsRunning(true)
    }, 2000)
  }

  const resetChallenge = () => {
    setIsRunning(false)
    setHasStarted(false)
    setFailed(false)
    setCompleted(false)
    setTimeRemaining(CHALLENGE_DURATION)
    gracePeriodRef.current = false
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const progress = ((CHALLENGE_DURATION - timeRemaining) / CHALLENGE_DURATION) * 100

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-12 w-full">
        {/* Newsletter Subscription Section */}
        <div className="mb-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 text-lg">
              Get thoughtful insights delivered daily. (Unlike this challenge, our newsletter requires zero effort to enjoy!)
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

        {/* Challenge Container */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-light text-gray-800 mb-4 tracking-tight">
            The 69 Second Challenge
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Do nothing for 69 seconds. Don't move your mouse, don't click, don't type, don't scroll.
            <span className="block mt-2 text-lg text-gray-500">Just breathe.</span>
          </p>
        </div>

        {/* Main Challenge Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl mb-8">
          {!hasStarted ? (
            <div className="text-center py-12">
              <div className="text-8xl mb-8 text-gray-400">⏸️</div>
              <p className="text-2xl text-gray-600 mb-8">Ready to do nothing?</p>
              <button
                onClick={startChallenge}
                className="px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold text-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Begin Challenge
              </button>
            </div>
          ) : failed ? (
            <div className="text-center py-12">
              <div className="text-8xl mb-8 text-red-400">❌</div>
              <p className="text-3xl text-gray-800 mb-4 font-light">Challenge Failed</p>
              <p className="text-lg text-gray-600 mb-8">
                You lasted {CHALLENGE_DURATION - timeRemaining} seconds. Almost there!
              </p>
              <button
                onClick={resetChallenge}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl font-semibold transition-all duration-200"
              >
                Try Again
              </button>
            </div>
          ) : completed ? (
            <div className="text-center py-12">
              <div className="text-8xl mb-8 text-green-400">✨</div>
              <p className="text-4xl text-gray-800 mb-4 font-light">Congratulations!</p>
              <p className="text-xl text-gray-600 mb-8">
                You successfully did nothing for 69 seconds.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Perfect score! You mastered the art of doing nothing.
              </p>
              <button
                onClick={resetChallenge}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Do Nothing Again
              </button>
            </div>
          ) : isRunning ? (
            <div className="text-center py-12">
              {/* Timer Display */}
              <div className="mb-12">
                <div className="text-9xl font-extralight text-gray-700 mb-4 tracking-tighter">
                  {timeRemaining}
                </div>
                <p className="text-2xl text-gray-500 font-light">seconds remaining</p>
              </div>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-1000 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Calming Message */}
              <p className="text-lg text-gray-500 font-light italic mb-8">
                {timeRemaining > 50 && "Breathe in... breathe out..."}
                {timeRemaining <= 50 && timeRemaining > 30 && "Just be present..."}
                {timeRemaining <= 30 && timeRemaining > 10 && "Almost there..."}
                {timeRemaining <= 10 && timeRemaining > 0 && "Final moments..."}
              </p>

              {/* Instructions */}
              <p className="text-sm text-gray-400 font-light">
                Don't move. Don't click. Don't type. Just exist.
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-8 text-gray-300">⏳</div>
              <p className="text-2xl text-gray-600 font-light mb-4">Get ready...</p>
              <p className="text-lg text-gray-500">Prepare to do nothing.</p>
            </div>
          )}
        </div>

        {/* Stats */}
        {isRunning && !failed && !completed && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 mb-8">
            <div className="text-center">
              <p className="text-gray-600 font-light">
                <span className="text-2xl font-semibold text-gray-800">{CHALLENGE_DURATION - timeRemaining}</span>
                <span className="text-lg"> / {CHALLENGE_DURATION} seconds</span>
              </p>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm font-light">
            Minimalist. Calming. A true test of your ability to do absolutely nothing.
          </p>
        </div>
      </div>
    </main>
  )
}

