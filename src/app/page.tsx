import type { Metadata } from 'next'
import EmailSignup from '@/components/EmailSignup'
import DayCounter from '@/components/DayCounter'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Matt Merrick. A daily newsletter',
  description: 'Matt Merrick. A daily newsletter',
  keywords: 'Matt Merrick, newsletter, daily',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Matt Merrick. A daily newsletter',
    description: 'Matt Merrick. A daily newsletter',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://morningmarkets.net',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Merrick. A daily newsletter',
    description: 'Matt Merrick. A daily newsletter',
    images: ['/opengraph.jpg'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl mb-8 text-white leading-relaxed font-light">
            I'm writing this newsletter for the next 365 days to push myself to stick to one thing. 
            I'll talk about money, life, and struggles, but I will write every single day.
          </p>
          <p className="text-sm mb-12 text-gray-400 font-light">
            No AI. Just you and me and my thoughts.
          </p>
          <EmailSignup variant="hero" />
          <DayCounter />
        </div>
      </div>
      <Footer />
    </main>
  )
}