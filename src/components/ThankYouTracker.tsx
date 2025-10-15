'use client'

import { useEffect } from 'react'

export default function ThankYouTracker() {
  useEffect(() => {
    try {
      const w = window as any
      if (w && w.datafast) {
        w.datafast('signup_thank_you_viewed', {
          page: '/thank-you',
          referrer: document.referrer || '',
        })
      }
    } catch {
      // ignore
    }
  }, [])

  return null
}


