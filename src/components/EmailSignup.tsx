'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface EmailSignupProps {
  variant?: 'hero' | 'cta'
}

export default function EmailSignup({ variant = 'hero' }: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  // Desktop: autofocus and select the input so it's immediately ready to type (only on hero variant)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const isDesktop = window.innerWidth >= 1024
    if (isDesktop && inputRef.current && variant === 'hero') {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [variant])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setEmail('')
        
        // Track successful signup
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'sunday_cents'
          })
        }

        // DataFast client-side goal: newsletter_sub with source details
        if (typeof window !== 'undefined' && (window as any).datafast) {
          try {
            const url = new URL(window.location.href)
            const utm_source = url.searchParams.get('utm_source') || ''
            const utm_medium = url.searchParams.get('utm_medium') || ''
            const utm_campaign = url.searchParams.get('utm_campaign') || ''
            const referrer = document.referrer || ''
            ;(window as any).datafast('newsletter_sub', {
              utm_source,
              utm_medium,
              utm_campaign,
              referrer,
              page: window.location.pathname,
            })
          } catch {}
        }

        // Redirect to thank-you page
        router.push('/thank-you')
      } else {
        if (data.error === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
          setMessage({ text: 'You\'re already subscribed! Check your email for the latest issue.', type: 'info' })
        } else {
          setMessage({ text: data.message || 'Something went wrong. Please try again.', type: 'error' })
        }
      }
    } catch (error) {
      setMessage({ text: 'Network error. Please check your connection and try again.', type: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const isDark = variant === 'cta'

  const isHero = variant === 'hero'
  
  return (
    <div className={`w-full ${isHero ? 'max-w-lg' : 'max-w-md'} mx-auto lg:mx-0`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            ref={inputRef}
            onFocus={() => {
              if (typeof window !== 'undefined' && window.innerWidth < 1024 && inputRef.current) {
                inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            className={`flex-1 ${isHero ? 'px-5 py-4 text-lg' : 'px-4 py-3 text-base'} rounded-xl border-2 transition-all duration-200 ${
              isDark 
                ? 'bg-white text-gray-900 border-gray-300 focus:border-primary-500' 
                : 'bg-white text-gray-900 border-gray-300 focus:border-primary-500'
            } focus:outline-none focus:ring-4 focus:ring-primary-500/20 shadow-sm`}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`${isHero ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base'} rounded-xl font-semibold transition-all duration-200 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-800 hover:bg-blue-900 transform hover:scale-105 hover:shadow-xl'
            } text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-lg whitespace-nowrap`}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <div 
            className={`p-4 rounded-xl ${isHero ? 'text-base' : 'text-sm'} font-medium ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200'
                : message.type === 'error'
                ? 'bg-red-100 text-red-800 border border-red-200'
                : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  )
}
