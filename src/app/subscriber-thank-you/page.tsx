import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thank You - Matt Merrick Newsletter',
  description: 'Thank you for subscribing to support Matt and join the Telegram group.',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://www.mattmerrick.com/subscriber-thank-you' },
}

export default function SubscriberThankYouPage() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Thank You for Subscribing
        </h1>

        <div className="max-w-2xl text-gray-400 text-lg leading-relaxed space-y-6">
          <p>
            You’re not subscribing for perks, discounts, or exclusive content. 
            You’re subscribing to support me — that’s it.
          </p>
          <p>
            This is a way to help me keep writing every day, stay independent, and 
            keep everything ad-free. As a small thank-you, you’ll also get access to our private Telegram group.
          </p>
          <p>
            That’s the whole deal. No fluff, no hidden extras. Just real support from real people.
          </p>
        </div>

        <div className="mt-12">
          <Link 
            href="/"
            className="inline-block bg-white text-[#111111] px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
