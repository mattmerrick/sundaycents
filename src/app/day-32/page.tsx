import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 32 - My 3 Tools for Content | Matt Merrick',
  description: 'Day 32 of writing one email daily. The 3 simple tools I use to keep my content wheel going: Email Octopus, ChatGPT, and Typefully.',
  keywords: 'content tools, email marketing, automation, newsletter, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-32'
  },
  openGraph: {
    title: 'Day 32 - My 3 Tools for Content | Matt Merrick',
    description: 'Day 32 of writing one email daily. The 3 simple tools I use to keep my content wheel going: Email Octopus, ChatGPT, and Typefully.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-32',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 32',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 32 - My 3 Tools for Content | Matt Merrick',
    description: 'Day 32 of writing one email daily. The 3 simple tools I use to keep my content wheel going: Email Octopus, ChatGPT, and Typefully.',
    images: ['/share.png'],
  },
}

export default function Day32() {
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
                  Oct 20, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 32 - My 3 Tools for Content
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  I only use 3 things to keep my content wheel going.
                </p>

                <p>
                  Email octopus - Where i send my emails from<br/>
                  ChatGPT - Where I fix grammar errors etc<br/>
                  Typefully - Help me post to X, Linked In, Threads All at once.
                </p>

                <p>
                  That's it.
                </p>

                <p>
                  Why so little? All of my content comes from my mind and i really dont want to be using AI to do much. Typefully is an easy one because it saves me hours a week and it's not "cheating" they just help me post my one thing to multiple channels a day.
                </p>

                <p>
                  And since i'm doing the 1 Newsletter to 10 platforms a day it makes sense to do it this way.
                </p>

                <p>
                  So how much do I pay?
                </p>

                <p>
                  Email Octopus is free but I am on the paid verision so i can have longer automations(even though I don't need it) so i'm paying $9. But it's free up to 500 contacts.
                </p>

                <p>
                  ChatGPT is free because the information I need isn't anywhere else but my mind so I just use it to clean up my content and change around simple wording for each platform im posting to.
                </p>

                <p>
                  FInally Typefully. They are a well known brand that makes it easy to post to X, Linked and Threads along with a few other but i'm focused on those for now.
                </p>

                <p>
                  Pricing = Typefully is $149/year<br/>
                  Email Octopus = $9/month
                </p>

                <p>
                  Typefully is around $12.50/month and Email Octopus is $9/month or 71 cents a day.
                </p>

                <p>
                  I do also pay the $8 plan for X because it's my main marketing channel.
                </p>

                <p>
                  So:
                </p>

                <p>
                  $12.50 + $9 + $8 = $29.5/month
                </p>

                <p>
                  The only price that will go up is the Email Octopus but as it goes up it will mean i get more subscribers so it will allow me to do well.
                </p>

                <p>
                  $30/month isn't bad when you look at it that way.
                </p>

                <p>
                  Now what else could i buy?<br/>
                  Great questions there are tons of tools i would use to speed up my process but i'm on a tight budget and need to make money not spend more. So for now this will work.
                </p>

                <p>
                  Well it's safe to say I'm on a tight budget if you know my history you know I've basically been scraping these past 6 months and have accrued a<br/>
                  AI will help you in anyway you wish and with all the different free plans out there it only makes sense to stick with it.
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
