'use client'

import { useState } from 'react'

export default function OneMillionPage() {
  const [subscribers, setSubscribers] = useState<number>(0)
  const [hasCalculated, setHasCalculated] = useState(false)

  const percentage = subscribers > 0 ? (subscribers / 1000000) * 100 : 0
  const progressWidth = Math.min(percentage, 100)

  const getProgressEmoji = () => {
    if (percentage >= 100) return '🎉'
    if (percentage >= 75) return '🚀'
    if (percentage >= 50) return '🔥'
    if (percentage >= 25) return '💪'
    if (percentage >= 10) return '📈'
    if (percentage >= 1) return '🎯'
    if (percentage >= 0.1) return '🌱'
    return '💤'
  }

  const getMotivationalMessage = () => {
    if (percentage >= 100) return "🎊 YOU DID IT! 1 MILLION SUBSCRIBERS! 🎊"
    if (percentage >= 50) return "🔥 OVER HALFWAY THERE! KEEP GOING! 🔥"
    if (percentage >= 10) return "🚀 AMAZING PROGRESS! YOU'RE CRUSHING IT! 🚀"
    if (percentage >= 1) return "💪 1% IS HUGE! EVERY SUBSCRIBER COUNTS! 💪"
    if (percentage >= 0.1) return "🌱 SMALL STEPS LEAD TO BIG WINS! 🌱"
    return "🎯 EVERY JOURNEY STARTS WITH THE FIRST STEP! 🎯"
  }

  const getRemainingSubscribers = () => {
    const remaining = 1000000 - subscribers
    if (remaining <= 0) return "0"
    return remaining.toLocaleString()
  }

  const handleCalculate = () => {
    setHasCalculated(true)
  }

  const handleReset = () => {
    setSubscribers(0)
    setHasCalculated(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎯 1 MILLION CHALLENGE
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            How close are you to 1 million subscribers?
          </p>
          <p className="text-lg text-gray-500">
            Enter your subscriber count and see your progress!
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Input Section */}
            <div>
              <label className="block text-2xl font-bold text-gray-800 mb-4">
                📊 Current Subscribers
              </label>
              <input
                type="number"
                value={subscribers || ''}
                onChange={(e) => setSubscribers(Number(e.target.value))}
                className="w-full p-4 text-3xl font-bold border-4 border-purple-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-center"
                placeholder="Enter number..."
              />
              <button
                onClick={handleCalculate}
                disabled={subscribers <= 0}
                className="w-full mt-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                🚀 CALCULATE MY PROGRESS
              </button>
            </div>

            {/* Results Section */}
            {hasCalculated && (
              <div className="text-center">
                <div className="mb-6">
                  <div className="text-6xl mb-4">{getProgressEmoji()}</div>
                  <div className="text-5xl font-black text-purple-600 mb-2">
                    {percentage.toFixed(6)}%
                  </div>
                  <div className="text-xl text-gray-600">
                    to 1 Million!
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-8 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-8 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${progressWidth}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {subscribers.toLocaleString()} / 1,000,000 subscribers
                  </div>
                </div>

                <div className="text-lg font-semibold text-gray-700">
                  {getRemainingSubscribers()} subscribers to go!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Display */}
        {hasCalculated && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Current Status */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center border-4 border-purple-300">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-black text-purple-700 mb-1">
                {subscribers.toLocaleString()}
              </div>
              <div className="text-lg font-semibold text-purple-600">
                Current Subscribers
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 text-center border-4 border-pink-300">
              <div className="text-4xl mb-2">{getProgressEmoji()}</div>
              <div className="text-3xl font-black text-pink-700 mb-1">
                {percentage.toFixed(4)}%
              </div>
              <div className="text-lg font-semibold text-pink-600">
                Progress Made
              </div>
            </div>

            {/* Remaining */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center border-4 border-blue-300">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-3xl font-black text-blue-700 mb-1">
                {getRemainingSubscribers()}
              </div>
              <div className="text-lg font-semibold text-blue-600">
                To Go!
              </div>
            </div>
          </div>
        )}

        {/* Motivational Message */}
        {hasCalculated && (
          <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-2xl p-6 text-center border-4 border-yellow-300 mb-8">
            <div className="text-2xl font-bold text-orange-700">
              {getMotivationalMessage()}
            </div>
          </div>
        )}

        {/* Viral Share Section */}
        {hasCalculated && (
          <div className="bg-white rounded-2xl p-6 text-center border-4 border-green-200 shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Share Your Progress!
            </h3>
            <p className="text-gray-600 mb-4">
              Screenshot this page and share your journey to 1 million subscribers!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors duration-300"
              >
                🔄 Try Another Number
              </button>
            </div>
          </div>
        )}

        {/* Fun Facts */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 border-4 border-green-300">
            <div className="text-3xl mb-3">💡</div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Fun Fact</h4>
            <p className="text-green-600">
              If you gained 1,000 subscribers every day, you'd reach 1 million in just 2.7 years!
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-6 border-4 border-indigo-300">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="text-xl font-bold text-indigo-700 mb-2">Milestone</h4>
            <p className="text-indigo-600">
              Every subscriber matters! Even 0.001% is a step closer to your million-subscriber goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
