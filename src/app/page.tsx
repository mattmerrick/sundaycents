import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HeroDayCounter from '@/components/HeroDayCounter'

export const metadata: Metadata = {
  title: 'A Free 5‑Day Crash Course on Solopreneurship | Matt Merrick',
  description: 'A free 5‑day crash course on solopreneurship. Learn to turn one idea into a real business — without investors, employees, or burnout. Plus, get the daily newsletter.',
  keywords: 'solopreneur, solo business, side hustle, audience building, newsletter, Matt Merrick, 5-day course',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/'
  },
  openGraph: {
    title: 'A Free 5‑Day Crash Course on Solopreneurship | Matt Merrick',
    description: 'A free 5‑day crash course on solopreneurship. Start today and get the daily newsletter.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Free 5‑Day Solopreneurship Crash Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Free 5‑Day Crash Course on Solopreneurship | Matt Merrick',
    description: 'A free 5‑day crash course on solopreneurship. Start today and get the daily newsletter.',
    images: ['/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            A daily newsletter to make you think.
          </h1>

          <div className="mt-6">
            <EmailSignup
              variant="hero"
              placeholder="Enter your email"
              buttonLabel="→ Subscribe"
              note="No spam. Unsubscribe anytime."
              buttonBgColor="#FFFFFF"
              buttonTextColor="#111111"
            />
          </div>

          <div className="text-neutral-300 text-base sm:text-lg mt-6">
            <span className="text-white font-medium"><HeroDayCounter /></span> of one email a day.
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