import type { Metadata } from 'next'
import EmailSignup from '@/components/EmailSignup'
import DayCounter from '@/components/DayCounter'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Matt Merrick. A daily newsletter',
  description: 'Subscribe to My Daily Newsletter | Matt Merrick',
  keywords: 'Matt Merrick, newsletter, daily',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Matt Merrick. A daily newsletter',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: 'https://www.mattmerrick.com/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - A daily newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Merrick. A daily newsletter',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
    images: ['https://www.mattmerrick.com/share.png'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <img 
            src="/share.png" 
            alt="Matt Merrick - Building a $1M solopreneur business" 
            className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-2xl"
          />
        <p className="text-2xl sm:text-3xl mb-8 text-white leading-relaxed font-light">
          A daily newsletter about building a $1M solopreneur business. The struggles, the wins, and how I'm doing it.
        </p>
        <p className="text-sm mb-12 text-gray-400 font-light">
          Real stories from someone actually doing it. No fluff, just the truth.
        </p>
          <EmailSignup variant="hero" />
          <DayCounter />
        </div>
      </div>
      <Footer />
    </main>
  )
}