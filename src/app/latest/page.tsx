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
               Day 41 -  starting power forward #41
              </h1>
            </div>

            {/* Email Content */}
            <div className="px-4 py-6 bg-white">
              <div className="text-gray-800 text-sm leading-relaxed space-y-4 font-serif">
                <p>
                  Number 41... That was my basketball number. It's what i've played my entire life.
                </p>

                <p>
                  Basketball taught me a lot, and I'm grateful for it. I learned how to be a team player, how to go through life always busy and so much more.
                </p>

                <p>
                  Its a great memory I have now in my old age. It makes you think and say Was it worth it. All those hours "wasted" going to the gym late at night, getting up jump shots,and  hitting the weight room to work on my foot speed. I don't regret any of it and I think it shaped me to be who I am today....
                </p>

                <p>
                  a broke 37-year-old who doesn't know what to do with his life, can't keep a job, and had to sell everything to keep his family afloat.
                </p>

                <p>
                  So yeah basketball taught me a lot... haha
                </p>

                <p>
                  But in all seriousness.... I do not regret playing and I loved every second of it. Now I am older and all I wanna do is teach my kids how to play.
                </p>

                <p>
                  Some things come into your life that you just know is a benefit for you. You find your spouse, you start that new job, you get your d-1 scholarship for sports, and you build a Micro SaaS that does 10k MRR.
                </p>

                <p>
                  It doesn't matter what it is, everything in life creates who you are. So next time you are thinking... what is this gonna do for me take a second and reflect on that. Maybe in that moment you don't see it working out, but who knows when the time will come to meet and be around someone smarter than me.
                </p>

                <p>
                  Keep building, Keep going. you got this. Remember I wasn't always good at basketball... I worked at it. Yea I had the height and some skills but I worked on my craft. You need to do the same. It's the same thing i'm doing with this writing. Write every day and see what happens.
                </p>

                <p>
                  Just remember... you gotta try to see results.
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
