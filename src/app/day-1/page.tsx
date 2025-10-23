import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 1 - The Beginning | Matt Merrick',
  description: 'Day 1 of writing one email daily. The start of a 365-day journey writing about anything and everything.',
  keywords: 'day 1, beginning, writing journey, newsletter, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-1'
  },
  openGraph: {
    title: 'Day 1 - The Beginning | Matt Merrick',
    description: 'Day 1 of writing one email daily. The start of a 365-day journey writing about anything and everything.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-1',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 1',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 1 - The Beginning | Matt Merrick',
    description: 'Day 1 of writing one email daily. The start of a 365-day journey writing about anything and everything.',
    images: ['/share.png'],
  },
}

export default function Day1() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-8">
            <Link 
              href="/"
              className="text-gray-500 hover:text-navy-600 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Mobile Email Client Container */}
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Email Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">M</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Matt Merrick</p>
                    <p className="text-xs text-gray-500">matt@mattmerrick.com</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Sep 19, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 1 - The Beginning
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  I promise this is the last time i'm swapping topics! Look if you have followed me you know i go from one thing to another. The crazy thing is I always wanted to stick to one thing and one thing only for a year.
                </p>

                <p>
                  I've had plenty of people tell me I need to and show people about different ways i talk and write and just really be myself. Talk about what i want on X, post what i want on here and just not worry about the money and fame.
                </p>

                <p>
                  So here's the deal. Today is Isssue #1. I am going to write for the next 365 days about anything I want. I'll focus on what i'm interested on like finance news, crypto, ideas, side hustles etc but sometimes I may talk about how my kids were horrible and what i looked up as a dad. The point is, i'm just gonna write everyday and see what happens. I'll also post it to medium and see the type of following I grow just talking about my thoughts.
                </p>

                <p>
                  I hope you follow me on the journey. See you tomorrow with topic #1
                </p>

                <p>
                  Share this with a friend because this is gonna get juicy. Oh i'm gonna be transparent also. So today we have 32 subscribers.
                </p>

                <p>
                  Let's document it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-gray-900 font-semibold mb-4">Past Issues</h3>
          <div className="text-gray-500">
            <p>More issues coming soon...</p>
          </div>
        </div>
      </footer>
    </>
  )
}
