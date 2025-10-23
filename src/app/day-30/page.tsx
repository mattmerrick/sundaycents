import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 30 - 30 Days of Writing | Matt Merrick',
  description: 'Day 30 of writing one email daily. Reflections on 30 days of consistent writing, lessons learned, and the journey ahead.',
  keywords: '30 days, writing journey, consistency, newsletter, reflection, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-30'
  },
  openGraph: {
    title: 'Day 30 - 30 Days of Writing | Matt Merrick',
    description: 'Day 30 of writing one email daily. Reflections on 30 days of consistent writing, lessons learned, and the journey ahead.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-30',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 30',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 30 - 30 Days of Writing | Matt Merrick',
    description: 'Day 30 of writing one email daily. Reflections on 30 days of consistent writing, lessons learned, and the journey ahead.',
    images: ['/share.png'],
  },
}

export default function Day30() {
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
                  Oct 18, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 30 - 30 Days of Writing
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  30 days of writing this newsletter every single day.
                </p>

                <p>
                  That's kinda crazy because I haven't focused on something this long and stayed with it in a long time. Prolly since the days I was playing basketball.
                </p>

                <p>
                  Here's what I learned:
                </p>

                <p>
                  Major Doubt<br/>
                  Wanna Quit<br/>
                  Look at the subscriber count<br/>
                  Marketing
                </p>

                <p>
                  So let's just start it right off with... I beat myself up on anything. I know things take time, but man, I am not good at it.
                </p>

                <p>
                  I have been product/ idea hopping since I was born, I feel like. The only thing that ever mattered to me was basketball. So it's nice to get into a groove, and writing every single day is surely awesome. But I didn't believe in myself this entire time. I even changed the type of newsletter this would be a few times.
                </p>

                <p>
                  I went from it being about soloprenurship, to personal, to side hustles. So I switched, but I kept writing every day. Now I have a simple way to explain it.
                </p>

                <p>
                  " A Daily newsletter that makes you think"
                </p>

                <p>
                  Why this? Well,l I wanna write about whatever I want but also make it push you. You are the reason I get to write every day... So i wanna make it benefit you.
                </p>

                <p>
                  I've wanted to quit a few times on this and start something else because let's face it. During these 30 days... No money has come in from this newsletter. Which isn't a problem. But when you come from running micro saas's that get sales within their first 24 hours, not having anything for 30 days is alot.
                </p>

                <p>
                  But the bright side is I haven't really "sold" anything. I am working on a short boo,k i guess, but not sure what i wanna do with it.
                </p>

                <p>
                  I have most likely looked at the subscriber count more than anything I've ever done. In the grocery store.. refresh list. Going to bed, refresh the list. waiting to pick up the kids from school, refresh the list. The number of times i've done it is kinda obsessive.
                </p>

                <p>
                  Marketing hasn't been good because I've switched so much in my marketing efforts. One thing I have done is write pretty much every day for Medium. You can follow my Medium account
                </p>

                <p>
                  Now that i talk about "everything," I can make my marketing different and better? Not really sure, but the idea is to make it work. I will keep on talking and you can help me by keep on sending my issues to people.
                </p>

                <p>
                  Remember Never give up on your dreams. I have $-49 in my bank account while writiting this waiting for my new job to start. But i'm gonna stick with writing because I love it even if I never make a dollar from it.
                </p>

                <p>
                  Do something you love and you'll never feel like you worked a day in your life. That saying is true but they forget one thing you eventually need to make money. But most things people wanna do that they can DO they will make money if you stay consientent.
                </p>

                <p>
                  What do i mean by this?
                </p>

                <p>
                  I wanted to be a professional basketball player. Play for the NY knicks. That was my dream.
                </p>

                <p>
                  But reality was I wasn't good enough. Yeah i played in college, but the Pros is a different league. It's another animal that I wasn't good enough for.
                </p>

                <p>
                  So that was my dream. But my other dream has always been to write. What? Idk a book maybe but as I said before, I love just writing and seeing what comes out. This is all top of my mind no edits, no reviews. That's how I write....
                </p>

                <p>
                  So this is a dream that can't happen right. You can do what you love but I can't go play basketball. Maybe over in europe but i'm to old. The point is if it's attainable like you wanna build a SaaS then sure you can do it. Nothing is holding you back now.
                </p>

                <p>
                  That's the cool thing about life right now. We are in the Dot com bubble(i was to young) where millionaires were made overnight. Don't miss this opporunity.
                </p>

                <p>
                  Do 1 boring thing every single day and you'd be suprised what you can do.
                </p>

                <p>
                  Writing not your thing? Make templates, sell them on Etsy.
                </p>

                <p>
                  The possibilities are endless.
                </p>

                <p>
                  Don't waste your time.
                </p>

                <p>
                  Build that thing that you love to do, and like me, after 30 days, see what happened. You'd be surprised. I may not of made any money, but I got almost 100 subscribers who read every issue + some of you have been so kind in your responses. I reply to all, so feel free to reach out on anything or tell me something cool you are working on!
                </p>

                <p>
                  30 days , 30 newsletter issues.
                </p>

                <p>
                  Thank you for reading. I'm not stoping so here is to another 3000!
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
