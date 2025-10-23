import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 33 - Life in 2040 | Matt Merrick',
  description: 'Day 33 of writing one email daily. Predictions about life in 2040, AI advancements, and the future of content creation.',
  keywords: 'future predictions, AI, 2040, content creation, newsletter, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-33'
  },
  openGraph: {
    title: 'Day 33 - Life in 2040 | Matt Merrick',
    description: 'Day 33 of writing one email daily. Predictions about life in 2040, AI advancements, and the future of content creation.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-33',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 33',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 33 - Life in 2040 | Matt Merrick',
    description: 'Day 33 of writing one email daily. Predictions about life in 2040, AI advancements, and the future of content creation.',
    images: ['/share.png'],
  },
}

export default function Day33() {
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
                  Oct 21, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 33 - Life in 2040
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  life in 2040 compare what everyone told us till now
                </p>

                <p>
                  Remember when they said we would have flying cars by 2020..
                </p>

                <p>
                  Well that never happened but with the advancement in AI I think what will happen by 2040.
                </p>

                <p>
                  Will there be a cure for cancers?
                </p>

                <p>
                  Will we be on mars?
                </p>

                <p>
                  What exactly can we get from all the advancement in AI by 2040.
                </p>

                <p>
                  Here's my guess.
                </p>

                <p>
                  Apps will be written in 1 prompt. Fully functional and it will just be a marketing game.
                </p>

                <p>
                  Marketing will turn to more personal channels like newsletters because people won't know what is real or fake on socials.
                </p>

                <p>
                  Yea you'll have your regular influencers , YouTubers celebrities but it will be different. An AI model can be an influencer now just imagine in X amount of years. Then it's under a brand. Since you have someone who runs them.
                </p>

                <p>
                  Companies will look for people or businessss to do this and it won't stop there.
                </p>

                <p>
                  Imagine you spin up a content creator all AI generated pusbing a narritive.
                </p>

                <p>
                  I would of been writing for over 5,000 days and I think my brand will be better than others. Why? Because email is personable.
                </p>

                <p>
                  Brands will look more for users who have been around and see established rather than not.
                </p>

                <p>
                  So what do you need to do.
                </p>

                <p>
                  Learn to storytell build a community of our peers and you'll succeed.
                </p>

                <p>
                  We can build apps in a day but if you can't market. Whats the point?
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
