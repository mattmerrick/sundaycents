'use client'

import { useEffect, useState } from 'react'
import EmailSignup from './EmailSignup'

const START_TIMESTAMP = new Date('2025-09-19T00:00:00-05:00').getTime()
const DAY_IN_MS = 1000 * 60 * 60 * 24

function getCurrentDayCount() {
  const now = Date.now()
  const diff = now - START_TIMESTAMP

  if (diff < 0) {
    return null
  }

  return Math.floor(diff / DAY_IN_MS) + 1
}

export default function BlogNewsletterCTA() {
  const [dayCount, setDayCount] = useState<number | null>(getCurrentDayCount)

  useEffect(() => {
    const tick = () => setDayCount(getCurrentDayCount())
    const intervalId = window.setInterval(tick, 60 * 60 * 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  const hasLaunched = dayCount !== null

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl font-semibold mb-4">
          {hasLaunched
            ? `I’ve written a daily newsletter for ${dayCount} days.`
            : 'The daily newsletter countdown is on.'}
        </p>
        <p className="text-lg mb-8 text-gray-200">
          {hasLaunched
            ? 'Get every issue in your inbox at 6 a.m. every morning.'
            : 'First issue ships at 6 a.m. on September 19, 2025. Join the list now.'}
        </p>
        <div className="max-w-xl mx-auto">
          <EmailSignup variant="cta" />
        </div>
      </div>
    </section>
  )
}

