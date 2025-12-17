'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import EmailSignup from '@/components/EmailSignup'
import HeroDayCounter from '@/components/HeroDayCounter'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <main
        className="min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #040404 0%, #0c0c12 48%, #050505 100%)',
          color: '#f5f5f5',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
            style={{
              background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto w-full">
            {/* Day Counter with Animation */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                <div 
                  className="inline-block mb-4"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative inline-block">
                    <div 
                      className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight transition-all duration-500 inline-block"
                      style={{
                        transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                        textShadow: isHovering 
                          ? '0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.3)' 
                          : '0 0 20px rgba(249, 250, 251, 0.1)',
                      }}
                    >
                      <HeroDayCounter className="text-emerald-300 sm:text-emerald-400" />
                    </div>
                    <div 
                      className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full transition-opacity duration-500"
                      style={{ opacity: isHovering ? 1 : 0 }}
                    />
                  </div>
                </div>
                <span className="block">of writing a daily newsletter</span>
                <span className="text-2xl sm:text-3xl md:text-4xl text-emerald-300/80 font-normal mt-2 block">
                  (and I'm not stopping)
                </span>
              </h1>
            </div>

            {/* Email Signup - Enhanced */}
            <div className="max-w-2xl mx-auto mb-8">
              <div 
                className="relative rounded-2xl p-8 sm:p-10 backdrop-blur-sm transition-all duration-500"
                style={{
                  background: 'rgba(13, 13, 21, 0.6)',
                  border: '2px solid rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.1)',
                }}
              >
                <div className="text-center mb-6">
                  <p className="text-xl sm:text-2xl text-white font-semibold mb-2">
                    Get the 6 AM Email →
                  </p>
                  <p className="text-sm text-emerald-300/80">
                    Wake up smarter. Every single day.
                  </p>
                </div>
                <EmailSignup
                  variant="hero"
                  placeholder="Enter your email"
                  buttonLabel="Get the 6 AM Email →"
                  note="No Spam. No Fluff. No AI. Unsubscribe Anytime."
                  buttonBgColor="#10b981"
                  buttonTextColor="#ffffff"
                />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center mb-16">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base text-blue-100/80">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>No Spam</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-400/50 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>No Fluff</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-400/50 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>No AI</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-400/50 rounded-full" />
                <Link 
                  href="/latest" 
                  className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors underline font-medium"
                >
                  <HeroDayCounter className="text-emerald-300" /> days of one email a day
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center animate-bounce">
              <p className="text-sm text-gray-400 mb-2">Keep scrolling</p>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section - Enhanced */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div 
            className="rounded-3xl p-8 sm:p-12 lg:p-16 space-y-8 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30"
            style={{
              background: 'rgba(13, 13, 21, 0.7)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 40px 120px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                What is this Newsletter?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
            </div>

            <div className="space-y-6 text-lg sm:text-xl text-blue-100/90 leading-relaxed">
              <p className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Sup? My name is Matt.
              </p>
              
              <p>
                I've done lots of things on the internet over the years. Built products, sold them, bought them back. Made money, lost money, made it again.
              </p>

              <p>
                But one thing I <span className="text-emerald-300 font-semibold">never</span> did was stay consistent and stick to one product.
              </p>

              <div 
                className="rounded-2xl p-6 my-8"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <p className="text-white font-semibold text-xl mb-2">
                  So after having a rough time over a two-year period with no money...
                </p>
                <p className="text-emerald-300">
                  I knew it was time for a change.
                </p>
              </div>

              <p>
                So I started this newsletter. It's my <span className="text-white font-semibold">unfiltered</span>, <span className="text-white font-semibold">unapologetic</span>, <span className="text-white font-semibold">no rhyme or reason</span> newsletter. 
              </p>

              <p>
                I take a topic like <span className="italic text-emerald-300">water</span> and turn it into a life lesson.
              </p>

              <div className="my-10 p-6 rounded-2xl" style={{ background: 'rgba(249, 250, 251, 0.05)' }}>
                <p className="text-xl sm:text-2xl text-white font-bold mb-4">
                  The goal is simple:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 text-2xl">→</span>
                    <span>Write this every single day for as many days as I need to make this my full-time income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 text-2xl">→</span>
                    <span>Then continue to write till I can't write anymore</span>
                  </li>
                </ul>
                <p className="text-emerald-300 font-semibold text-xl mt-6">
                  Simple yet fun. You get it all daily.
                </p>
              </div>

              <p className="text-2xl sm:text-3xl font-bold text-white text-center mt-12 pt-8 border-t border-white/10">
                This newsletter isn't like any other.
              </p>
            </div>

            {/* CTA at bottom of story */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-xl text-white mb-6 font-semibold">
                  Ready to join the journey?
                </p>
                <div className="max-w-md mx-auto">
                  <EmailSignup
                    variant="cta"
                    placeholder="Enter your email"
                    buttonLabel="Subscribe Now"
                    buttonBgColor="#10b981"
                    buttonTextColor="#ffffff"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Stats Section */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div 
              className="rounded-2xl p-6 text-center backdrop-blur-sm"
              style={{
                background: 'rgba(13, 13, 21, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                <HeroDayCounter className="text-emerald-400" />
              </div>
              <div className="text-sm text-gray-400">Days Writing</div>
            </div>
            <div 
              className="rounded-2xl p-6 text-center backdrop-blur-sm"
              style={{
                background: 'rgba(13, 13, 21, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">6 AM</div>
              <div className="text-sm text-gray-400">Delivery Time</div>
            </div>
            <div 
              className="rounded-2xl p-6 text-center backdrop-blur-sm"
              style={{
                background: 'rgba(13, 13, 21, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Human Written</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/10 relative z-10" style={{ background: '#050505' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-300">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <Link 
              href="https://medium.com/@mattmerrick"
              className="text-gray-200 hover:text-emerald-300 transition-colors font-medium"
            >
              Medium
            </Link>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <Link 
              href="https://x.com/mattmerrick16"
              className="text-gray-200 hover:text-emerald-300 transition-colors font-medium"
            >
              X
            </Link>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <Link 
              href="https://mattmerrick.com/latest"
              className="text-gray-200 hover:text-emerald-300 transition-colors font-medium"
            >
              Latest
            </Link>
            <span className="text-gray-600 hidden sm:inline">/</span>
            <Link 
              href="https://provenideas.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-emerald-300 transition-colors font-medium"
            >
              Proven Ideas
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
