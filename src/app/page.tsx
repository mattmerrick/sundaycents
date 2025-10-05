import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HomepageStats from '@/components/HomepageStats'

export const metadata: Metadata = {
  title: 'Learn to Write Words That Sell | Matt Merrick',
  description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
  keywords: 'copywriting, persuasive writing, sales copy, newsletter business, writing to sell, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: 'https://www.mattmerrick.com/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Learn to Write Words That Sell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    images: ['https://www.mattmerrick.com/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-600 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Words That Sell: My $1M Writing Journey
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Teaching 64+ people the copywriting secrets that built million-dollar businesses. Follow my real journey to $1M.
          </p>
          
          <div className="mb-8">
            <EmailSignup variant="hero" />
          </div>
          
          <HomepageStats />
        </div>
      </main>
      
      {/* Free Prompts Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Subscribe & Get "Words Sell PDF" FREE
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The complete guide to building profitable bite-size digital products. Everything you need to create, price, and sell PDFs that make money from day one.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">What's Inside:</h3>
            <ul className="text-purple-100 space-y-2 text-left">
              <li>• <strong>Step-by-step guide</strong> to build tiny bite-sized PDFs</li>
              <li>• <strong>Top 100 proven ideas</strong> that are already selling</li>
              <li>• <strong>25 prompts</strong> to generate unlimited new ideas</li>
              <li>• <strong>Real examples</strong> of products doing this right now</li>
              <li>• <strong>Pricing strategies</strong> that maximize profits</li>
            </ul>
          </div>
          
          <div className="max-w-md mx-auto">
            <EmailSignup variant="hero" />
          </div>
        </div>
      </section>
      
      {/* Normal Style Page Below Hero */}
      <section className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Master the Art of Words That Sell
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn the exact copywriting techniques that turn readers into buyers, and discover how I'm building a $1M business by teaching others to write words that actually convert.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Topic 1 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ✍️ Copywriting That Converts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Learn the exact words, phrases, and psychological triggers that turn readers into buyers. From headlines that hook to CTAs that close—master the art of persuasive writing.
            </p>
          </div>
          
          {/* Topic 2 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Million-Dollar Writing Examples
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Real case studies of words that made millions. Analyze the copy that built empires—from sales pages that generated $50M+ to email sequences that converted thousands.
            </p>
          </div>
          
          {/* Topic 3 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📈 Building a $1M Writing Business
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Follow my journey as I scale from $0 to $1M through writing. Real numbers, real strategies, real lessons learned as I build a business teaching others to write words that sell.
            </p>
          </div>
          
          {/* Topic 4 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Psychology of Persuasion
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Master the psychological principles that make words irresistible. Learn how to tap into your reader's deepest desires and fears to create copy that they can't ignore.
            </p>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Ready to master the words that sell?
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            Join 64+ entrepreneurs learning to write copy that converts and building businesses through the power of persuasive writing.
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