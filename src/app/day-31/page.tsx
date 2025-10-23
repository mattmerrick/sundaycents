import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Day 31 - Automation is Key | Matt Merrick',
  description: 'Day 31 of writing one email daily. How to use automation properly to share content across multiple channels and platforms.',
  keywords: 'automation, content marketing, social media, newsletter, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/day-31'
  },
  openGraph: {
    title: 'Day 31 - Automation is Key | Matt Merrick',
    description: 'Day 31 of writing one email daily. How to use automation properly to share content across multiple channels and platforms.',
    type: 'article',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/day-31',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Day 31',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day 31 - Automation is Key | Matt Merrick',
    description: 'Day 31 of writing one email daily. How to use automation properly to share content across multiple channels and platforms.',
    images: ['/share.png'],
  },
}

export default function Day31() {
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
                  Oct 19, 2025
                </div>
              </div>
            </div>

            {/* Email Subject */}
            <div className="px-4 py-3 bg-white border-b border-gray-100">
              <h1 className="text-lg font-semibold text-gray-900">
                Day 31 - Automation is Key
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  Automation is key to anything.
                </p>

                <p>
                  The problem is you have to figure out how to use it properly.
                </p>

                <p>
                  Don't just type into ChatGPT or other platforms do this for me you need systems, guidance etc.
                </p>

                <p>
                  What do I mean?
                </p>

                <p>
                  I recently figured out this newsletter needs to be shared across all channels.
                </p>

                <p>
                  I currently post to X, Linked In, Threads , and Medium.
                </p>

                <p>
                  But with automation I can post to more:
                </p>

                <p>
                  TikTok , Facebook, Instagram , YouTube, Pinterest.
                </p>

                <p>
                  That gives me 5 more places to go viral get more users. That I've never posted any of my content to.
                </p>

                <p>
                  So how can I do that? Well there are tools like post bridge that can help you but you need to make the content.
                </p>

                <p>
                  So how can you make it? There are plenty of ways to make it. For me since it's my own newsletter and I'm using the name I'm gonna just use simple photos and share ideas. Like a slideshow etc.
                </p>

                <p>
                  This way it be a video that you can share across all those last 4. So..
                </p>

                <p>
                  5 Text focused channels X, Linked In, Facebook, Threads , Medium, Pinterest (with images )<br/>
                  3 video focused channels - YouTube , Instagram , TikTok
                </p>

                <p>
                  1 "post" automatically sent to all different channels.
                </p>

                <p>
                  Daily… for the next 30 days and I bet I'll see results.
                </p>

                <p>
                  We will revisit this and see how good I can do with that!
                </p>

                <p>
                  For you … think of a way to get going on marketing.
                </p>

                <p>
                  But remember don't go crazy. What do I mean? pick 1-2 channels to heavily focus on while the others are just repurposing the content with AI prompts to format them for those channels.
                </p>

                <p>
                  So you write thread for X. Take that and turn it into a short video with AI, slideshow, etc for video and convert the thread into the correct formats for other channels.
                </p>

                <p>
                  All that matters is you start doing it.. do it for 30 days and I promise you you'll see results.
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
