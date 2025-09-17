import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Morning Markets - Markets Made Simple in 5 Minutes',
  description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
  keywords: 'Morning Markets, financial news, market summaries, personal finance, business news, policy updates, daily newsletter',
  authors: [{ name: 'Morning Markets' }],
  creator: 'Morning Markets',
  publisher: 'Morning Markets',
  robots: 'index, follow',
  openGraph: {
    title: 'Morning Markets - Markets Made Simple in 5 Minutes',
    description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
    type: 'website',
    siteName: 'Morning Markets',
    url: 'https://morningmarkets.net',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Morning Markets Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morning Markets - Markets Made Simple in 5 Minutes',
    description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
    images: ['/twitter-image'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-footer">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
