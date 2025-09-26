import type { Metadata } from 'next'
import EmailSignup from '@/components/EmailSignup'
import HomepageStats from '@/components/HomepageStats'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Subscribe to My Newsletter | Matt Merrick',
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
    <main className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Can this daily newsletter turn into a million dollar business? Let's find out
        </h1>
        
        <div className="mb-8">
          <EmailSignup variant="hero" />
        </div>
        
        <HomepageStats />
      </div>
    </main>
  )
}