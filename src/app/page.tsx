
import Link from 'next/link'
import { useState, useEffect } from 'react'
import EmailSignup from '@/components/EmailSignup'
import HeroDayCounter from '@/components/HeroDayCounter'

function DayNumber() {
  const [dayNumber, setDayNumber] = useState(0)

  useEffect(() => {
    const calculateDay = () => {
      const startDate = new Date('2025-09-19T00:00:00-04:00')
      const now = new Date()
      
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      const parts = formatter.formatToParts(now)
      const todayEST = new Date(
        parseInt(parts.find(p => p.type === 'year')!.value),
        parseInt(parts.find(p => p.type === 'month')!.value) - 1,
        parseInt(parts.find(p => p.type === 'day')!.value)
      )
      
      const startParts = formatter.formatToParts(startDate)
      const startDateEST = new Date(
        parseInt(startParts.find(p => p.type === 'year')!.value),
        parseInt(startParts.find(p => p.type === 'month')!.value) - 1,
        parseInt(startParts.find(p => p.type === 'day')!.value)
      )
      
      const timeDiff = todayEST.getTime() - startDateEST.getTime()
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      
      if (daysDiff >= 0) {
        setDayNumber(daysDiff + 1)
      }
    }

    calculateDay()
    const interval = setInterval(calculateDay, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return <>{dayNumber || 1}</>
}

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <>
      <main
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        style={{
          background: '#040404',
          color: '#f5f5f5',
        }}
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            A daily newsletter
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            I write about building products, making money online, and whatever else is on my mind. Every single day. I have been writing for <Link href="/latest" className="text-emerald-400 hover:text-emerald-300 underline font-semibold"><DayNumber /></Link> days.
          </p>

          {/* Email Signup */}
          <div className="mb-12">
            <EmailSignup
              variant="hero"
              placeholder="Enter your email"
              buttonLabel="Subscribe"
              note="No Spam. Unsubscribe anytime."
              buttonBgColor="#10b981"
              buttonTextColor="#ffffff"
            />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-12">
            <div>
              <HeroDayCounter className="text-emerald-400 font-bold" /> days
            </div>
            <span>•</span>
            <div>6 AM delivery</div>
            <span>•</span>
            <div>100% human written</div>
          </div>

          {/* Link to Archive */}
          <div className="pt-8 border-t border-gray-800">
            <Link 
              href="/latest" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
            >
              Read all previous articles →
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-gray-800" style={{ background: '#040404' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm">
            <Link 
              href="https://medium.com/@mattmerrick"
              className="hover:text-emerald-300 transition-colors"
            >
              Medium
            </Link>
            <span>/</span>
            <Link 
              href="https://x.com/mattmerrick16"
              className="hover:text-emerald-300 transition-colors"
            >
              X
            </Link>
            <span>/</span>
            <Link 
              href="https://mattmerrick.com/latest"
              className="hover:text-emerald-300 transition-colors"
            >
              Latest
            </Link>
            <span>/</span>
            <Link 
              href="https://screenedit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              ScreenEdit.com
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
