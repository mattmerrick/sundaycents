'use client'

import { useState, useEffect } from 'react'

interface HeroDayCounterProps {
  className?: string
}

export default function HeroDayCounter({ className }: HeroDayCounterProps) {
  const [dayNumber, setDayNumber] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  const appliedClassName = className ?? 'text-gray-900'

  useEffect(() => {
    const calculateDay = () => {
      // Start date: September 18, 2025 at 12:00 AM EST/EDT
      // Hardcoded so that December 16, 2025 shows as day 89
      // On Dec 16, 2025 it shows day 89, at midnight Dec 17 it becomes day 90
      const startDate = new Date('2025-09-19T00:00:00-04:00') // EDT timezone
      const now = new Date()
      
      // Get current date in EST/EDT timezone
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
      
      // Get start date in same format
      const startParts = formatter.formatToParts(startDate)
      const startDateEST = new Date(
        parseInt(startParts.find(p => p.type === 'year')!.value),
        parseInt(startParts.find(p => p.type === 'month')!.value) - 1,
        parseInt(startParts.find(p => p.type === 'day')!.value)
      )
      
      // Calculate the difference in days
      const timeDiff = todayEST.getTime() - startDateEST.getTime()
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      
      if (daysDiff >= 0) {
        const calculatedDay = daysDiff + 1 // Day 1 is the first day
        setDayNumber(calculatedDay)
        setIsStarted(true)
      } else {
        setIsStarted(false)
      }
    }

    calculateDay()
    
    // Update every minute to catch midnight transitions
    const interval = setInterval(calculateDay, 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!isStarted) {
    return <span className={appliedClassName}>Day 1</span>
  }

  return <span className={appliedClassName}>Day {dayNumber}</span>
}
