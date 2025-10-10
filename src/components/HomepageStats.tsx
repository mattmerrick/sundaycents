'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomepageStats() {
  const [dayNumber, setDayNumber] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const calculateDay = () => {
      // Start date: September 19, 2025 at 12:00 AM EST
      const startDate = new Date('2025-09-19T00:00:00-05:00') // EST timezone
      const now = new Date()
      
      // Calculate the difference in days
      const timeDiff = now.getTime() - startDate.getTime()
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      
      if (daysDiff >= 0) {
        setDayNumber(daysDiff + 1) // Day 1 is the first day
        setIsStarted(true)
      } else {
        setIsStarted(false)
      }
    }

    calculateDay()
    
    // Update every hour to handle day changes
    const interval = setInterval(calculateDay, 60 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!isStarted) {
    return (
      <p className="text-base sm:text-lg" style={{color: '#FFFFFF'}}>
        Day 1 of writing <Link href="/365" className="underline transition-colors hover:text-blue-400" style={{color: '#FFFFFF'}}>one daily email</Link> to 73 subscribers
      </p>
    )
  }

  return (
    <p className="text-base sm:text-lg" style={{color: '#FFFFFF'}}>
      <Link href="/profits" className="underline transition-colors hover:text-blue-400" style={{color: '#FFFFFF'}}>Day {dayNumber}</Link> of writing <Link href="/365" className="underline transition-colors hover:text-blue-400" style={{color: '#FFFFFF'}}>one daily email</Link> to 73 subscribers
    </p>
  )
}
