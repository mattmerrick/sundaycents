import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HomepageStats from '@/components/HomepageStats'

export const metadata: Metadata = {
  title: 'Subscribe to My Newsletter | Matt Merrick',
  description: 'Subscribe to My Daily Newsletter | Matt Merrick',
  keywords: 'Matt Merrick, newsletter, daily',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Matt Merrick. A daily newsletter',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: 'https://www.mattmerrick.com/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - A daily newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Merrick. A daily newsletter',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
    images: ['https://www.mattmerrick.com/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-600 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Can this daily newsletter turn into a million dollar business? Let's find out
          </h1>
          
          <div className="mb-8">
            <EmailSignup variant="hero" />
          </div>
          
          <HomepageStats />
        </div>
      </main>
      
      {/* Normal Style Page Below Hero */}
      <section className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What You'll Learn
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Raw insights into building a million dollar newsletter business from the ground up
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Topic 1 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Revenue Strategies
            </h3>
            <p className="text-gray-700 leading-relaxed">
              How I plan on turning this newsletter into a million dollar business. Real tactics, real numbers, real results as they happen.
            </p>
          </div>
          
          {/* Topic 2 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📈 Subscriber → Buyer Psychology
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Deep insights into what drives subscribers to become buyers. The psychology behind email marketing that actually converts.
            </p>
          </div>
          
          {/* Topic 3 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🔥 Raw Updates
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Everything going on behind the scenes. The wins, the failures, the pivots, and the lessons learned in real-time.
            </p>
          </div>
          
          {/* Topic 4 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🛠️ Tools & Tactics
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The exact tools, strategies, and tactics I'm using to grow this business. No fluff, just what actually works.
            </p>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Ready to follow along on this journey?
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignup variant="hero" />
          </div>
        </div>
      </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/blog"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="/newsletters"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Newsletters
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="/tools"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Tools
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="/free-tools"
              className="text-white hover:text-blue-300 transition-colors font-medium"
            >
              Free Tools
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}