import type { Metadata } from 'next'
import ThankYouTracker from '@/components/ThankYouTracker'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thanks for subscribing',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://www.mattmerrick.com/thank-you' }
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col pb-footer bg-white">
      <ThankYouTracker />
      <Header />

      <section className="flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
              You're in.
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-700">
              This is my 365-day journey of writing every single day. I'm doing this to push myself to stick to one thing, to build discipline, and to see what happens when you commit to something every day for a year.
            </p>
            <p className="text-base sm:text-lg mb-6 text-gray-700">
              I'll talk about money, life, struggles, side hustles, and whatever else is on my mind. No AI, just raw thoughts from someone trying to figure it out.
            </p>
            <p className="text-base sm:text-lg mb-10 text-gray-700">
              Look out for daily emails starting soon. Thanks for joining me on this journey.
            </p>

            {/* Upgrade Section */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Want to support the newsletter?
              </h2>
              <p className="text-base sm:text-lg mb-6 text-gray-700">
                You can support me by subscribing for <strong>$5/month</strong>.  
                It helps keep the newsletter 100% ad-free and supports me directly as I write every day.
              </p>
              <Link
                href="https://buy.stripe.com/7sY00i6T49rW2y2bYla7C03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Subscribe $5/month
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
