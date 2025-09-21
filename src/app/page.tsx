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
      <div className="flex-1 flex flex-col justify-center px-4 py-8">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white leading-tight font-light">
            A daily email with practical lessons on starting, growing, and thriving as a solopreneur.
          </h1>
          <div className="mb-8">
            <EmailSignup variant="hero" />
          </div>
          <DayCounter />
        </div>
      </div>
      <Footer />
    </main>
  )
}