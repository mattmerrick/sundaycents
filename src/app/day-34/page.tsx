import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 34 - Newsletter Writing Tips | Matt Merrick',
  description: 'Day 34 of writing one email daily. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
  keywords: 'newsletter writing, email marketing, subject lines, content strategy, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-34'
  },
  openGraph: {
    title: 'Day 34 - Newsletter Writing Tips | Matt Merrick',
    description: 'Day 34 of writing one email daily. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-34',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 34',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 34 - Newsletter Writing Tips | Matt Merrick',
    description: 'Day 34 of writing one email daily. Learn about catchy subject lines, keeping readers engaged, and the formula for successful newsletters.',
    images: ['/share.png'],
  },
}

export default function Day34() {
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
                  Oct 22, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 34 - Newsletter Writing Tips
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  I'm not here to say I'm able to keep people interested in the sense that I've been doing it well. But I've picked up a few things writing these for the past 30 days.
                </p>

                <h2 className="text-lg font-bold text-gray-900 mt-6 mb-3">1- You need a catchy subject line.</h2>

                <p>
                  I know this is so boring and like a duh moment. Like come on Matt tell me something else but really this is 90% of the battle. Get users to open it.
                </p>

                <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">How do I do it?</h3>

                <p>
                  Well, I write the full issue first, and then I figure out what then I decide on the subject line.
                </p>

                <p>
                  You can use AI but I feel that is noticeable.
                </p>

                <p>
                  So I kinda pick 1-3 words that describe or hint at the entire issue and make it that. Short keep the user thinking. And making them want to click it.
                </p>

                <p>
                  The better the subject line the better open rates I've seen.
                </p>

                <p>
                  Now that you got the user to open it.
                </p>

                <p>
                  You gotta keep them to stay.
                </p>

                <h2 className="text-lg font-bold text-gray-900 mt-6 mb-3">2 - the thing with keeping someone reading your newsletter is you wanna make it so they read end to end right? But it's proven that most won't.</h2>

                <p>
                  So you gotta really sell them in the start to keep readings kinda like YouTubers do. If you watch till the end X will happen.
                </p>

                <p>
                  For you if you read till the end X will happen
                </p>

                <p>
                  This can only get you so far. Not everyone cares or they get bored. It's why it's good to story tell your way through it all.
                </p>

                <p>
                  So make sure you give them a reason to keep reading.
                </p>

                <p>
                  Keep the paragraphs short… don't make it long. Short and condense it.
                </p>

                <p>
                  You write a paragraph of content. Try and rewrite it in sentence.
                </p>

                <p>
                  People wanna consume information quickly. Most are use to social media and scrolling which is what 60 seconds?
                </p>

                <p>
                  TikTok. Think that way. Plus you are writing so it's even less. Don't add fluff in today's day in age people just want quick facts. There is reason tldr tech does so well.
                </p>

                <p>
                  He cracked the formula.. 3 sections 2 items in each 1 paragraph overview of the article with the link. It's why he's racked up over a million subscribers.
                </p>

                <p>
                  Find a niche → chop it down - but your personality on it.
                </p>

                <p>
                  People didn't read tldr for the articles they share(most prolly see them anyway). They read it because how he summarized the articles was different/original.
                </p>

                <p className="text-gray-900 font-semibold">
                  be different and you will be fine.
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
