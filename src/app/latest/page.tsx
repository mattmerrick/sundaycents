import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Latest Article | Matt Merrick',
  description: 'The latest insights from writing daily emails for 30+ days. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
  keywords: 'newsletter writing, email marketing, subject lines, content strategy, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/latest'
  },
  openGraph: {
    title: 'Latest Article | Matt Merrick',
    description: 'The latest insights from writing daily emails for 30+ days. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/latest',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Latest Article',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Article | Matt Merrick',
    description: 'The latest insights from writing daily emails for 30+ days. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
    images: ['/share.png'],
  },
}

export default function Latest() {
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
                  Today
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 35 - The funny thing is, they go so fast
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  The funny thing is, they go so fast, but you don't move at all.
                </p>

                <p>
                  I have lots of time to think on my commute daily, and I'm pretty much writing for the entire time.
                </p>

                <p>
                  Why? Because why not? I wanna be the person everyone follows for my writing. They open my emails to laugh, learn something, and think.
                </p>

                <p>
                  Thinking is so important. As you get older, the more you think and interact with people, the better. I don't wanna stop writing, and trains showed me that.
                </p>

                <p>
                  The crazy thing is, you can too. There is time in your day when you can write, build whatever you wish.
                </p>

                <p>
                  But to me writing is the easiest. Put your thoughts on your phone, a notebook, and share them with people. You'd be surprised how many wanna read it.
                </p>

                <p>
                  If you watch TikTok for 30 minutes a night… instead write for 15, watch for 15. Over time, I bet you the writing will be longer than the watching.
                </p>

                <p>
                  Writing not your thing?
                </p>

                <p>
                  You can read, talk with friends, whatever you want. The people who get ahead aren't wasting time with the fun stuff; they are doing the boring stuff.
                </p>

                <p>
                  So the train goes fast, but so can you. Make your time valuable, box out time to think and improve. Do that every day and you'll be surprised.
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
