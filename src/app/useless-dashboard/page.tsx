'use client'

import { useState } from 'react'
import EmailSignup from '@/components/EmailSignup'

interface Switch {
  id: number
  isOn: boolean
  isAnimating: boolean
}

export default function UselessDashboard() {
  const [switches, setSwitches] = useState<Switch[]>(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      isOn: false,
      isAnimating: false
    }))
  )

  const toggleSwitch = (switchId: number) => {
    // Only allow turning ON if switch is currently OFF
    setSwitches(prev => 
      prev.map(sw => {
        if (sw.id === switchId && !sw.isOn) {
          // Turn switch ON and show hand animation
          const newSw = { ...sw, isOn: true, isAnimating: true }
          // After animation, hide the hand but keep switch ON
          setTimeout(() => {
            setSwitches(prevSw => 
              prevSw.map(s => 
                s.id === switchId 
                  ? { ...s, isAnimating: false }
                  : s
              )
            )
          }, 1000)
          return newSw
        }
        return sw
      })
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter Subscription Section */}
        <div className="mb-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              Subscribe to My Newsletter
            </h2>
            <p className="text-white/80 text-lg">
              Get thoughtful insights delivered daily. (Unlike these switches, our newsletter actually stays on!)
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

        {/* Dashboard Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            🤖 Useless Machines Dashboard
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Try turning on any switch. I dare you.
          </p>
        </div>

        {/* Switches Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-4 mb-12">
          {switches.map((sw) => (
            <div
              key={sw.id}
              className="relative flex flex-col items-center"
            >
              {/* Switch Container */}
              <div 
                className={`
                  relative w-16 h-20 cursor-pointer transition-all duration-300
                  ${sw.isOn ? 'scale-110' : 'hover:scale-105'}
                `}
                onClick={() => !sw.isOn && toggleSwitch(sw.id)}
              >
                {/* Switch Base */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-lg border-2 border-gray-600" />
                
                {/* Switch Toggle */}
                <div 
                  className={`
                    absolute left-1/2 -translate-x-1/2 w-12 h-14 rounded-lg transition-all duration-300
                    ${sw.isOn 
                      ? 'bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.6)] top-1' 
                      : 'bg-gray-500 shadow-lg top-3'
                    }
                  `}
                />

                {/* Little Hand Animation */}
                {sw.isAnimating && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="relative">
                      {/* Hand emoji - simple and fun */}
                      <div 
                        className="text-4xl drop-shadow-2xl filter animate-pulse"
                        style={{ 
                          filter: 'drop-shadow(0 4px 8px rgba(250, 204, 21, 0.6))',
                          transform: 'rotate(-20deg)'
                        }}
                      >
                        👆
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-yellow-300 rounded-full blur-lg opacity-40 animate-ping" style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }} />
                    </div>
                  </div>
                )}

                {/* Switch Number */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-mono">
                  #{sw.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {switches.filter(sw => sw.isOn).length}
              </div>
              <div className="text-white/70 text-sm">Currently On</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {switches.filter(sw => sw.isAnimating).length}
              </div>
              <div className="text-white/70 text-sm">Hands Trying (futilely)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                100
              </div>
              <div className="text-white/70 text-sm">Total Switches (All Useless)</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            Inspired by the classic "Useless Machine" by Claude Shannon
            <span className="block mt-2">Built for pure internet humor and confusion</span>
          </p>
        </div>
      </div>
    </main>
  )
}

