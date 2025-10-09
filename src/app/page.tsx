import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HomepageStats from '@/components/HomepageStats'

export const metadata: Metadata = {
  title: 'Learn to Write Words That Sell | Matt Merrick',
  description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
  keywords: 'copywriting, persuasive writing, sales copy, newsletter business, writing to sell, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: 'https://www.mattmerrick.com/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Learn to Write Words That Sell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    images: ['https://www.mattmerrick.com/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Build, scale, and grow with AI — as a solopreneur
          </h1>

          <div className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
            <p>
              Learn the moves that actually help a one‑person business get ahead.
            </p>
          </div>

          <div className="mt-6">
            <EmailSignup 
              variant="hero" 
              placeholder="Enter your email"
              buttonLabel="Sign me up"
              note="No fluff. No spam. Unsubscribe anytime."
              buttonBgColor="#FFFFFF"
              buttonTextColor="#111111"
            />
          </div>

          <div className="mt-6">
            <HomepageStats />
          </div>
        </div>
      </main>

      <footer className="bg-neutral-950 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/blog"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/newsletters"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Newsletters
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Tools
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/free-tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Free Tools
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}