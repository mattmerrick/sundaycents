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
            Turning This Newsletter Into a $1M Business
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Learn how to write words that sell and scale your audience. Follow my real-time journey from $0 to $1M — with daily lessons on copywriting, content strategy, and building a profitable newsletter business.
          </p>
          
          <div className="mb-8">
            <EmailSignup variant="hero" />
          </div>
          
          <HomepageStats />
        </div>
      </main>
      
      {/* Daily Journey Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            My 2025 Newsletter Journey: Day by Day
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Follow my real-time journey as I build a million-dollar newsletter business. Every day I share what I'm learning, what's working, and what's not in my quest to reach $1M in revenue.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">What You'll See Daily:</h3>
            <ul className="space-y-2 text-left text-white">
              <li>• <strong>Real revenue numbers</strong> from my newsletter business</li>
              <li>• <strong>Subscriber growth tactics</strong> that actually work in 2025</li>
              <li>• <strong>Content strategies</strong> that drive engagement and sales</li>
              <li>• <strong>Monetization experiments</strong> and their results</li>
              <li>• <strong>Behind-the-scenes</strong> of building a media business</li>
            </ul>
          </div>
          
          <div className="max-w-md mx-auto">
            <EmailSignup variant="hero" />
          </div>
        </div>
      </section>
      
      {/* Normal Style Page Below Hero */}
      <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Building a Million-Dollar Newsletter Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm documenting every step of building a million-dollar newsletter business in 2025. From day one subscriber growth to advanced monetization strategies—you'll see the real numbers, real failures, and real wins as I scale to $1M.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Topic 1 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📧 Newsletter Growth Strategies
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Watch me grow from 64 subscribers to 10,000+ in 2025. I'm testing viral growth hacks, social media strategies, and content frameworks that actually work for newsletter businesses today.
            </p>
          </div>
          
          {/* Topic 2 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Monetization & Revenue Streams
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm building 5+ revenue streams from my newsletter in 2025: sponsorships, affiliate marketing, digital products, consulting, and course sales. Watch me test different pricing strategies and see which ones actually work.
            </p>
          </div>
          
          {/* Topic 3 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📈 Real-Time Business Building
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm tracking every metric publicly: monthly revenue, subscriber count, open rates, conversion rates. See my weekly experiments, A/B tests, and the exact tactics that move the needle in 2025.
            </p>
          </div>
          
          {/* Topic 4 */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Copywriting That Converts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm testing different copywriting frameworks in 2025: email sequences, sales pages, and social media posts. See which psychological triggers and conversion tactics actually work for modern newsletter businesses.
            </p>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Ready to build your own million-dollar newsletter business?
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            Join entrepreneurs who are learning to scale their audience, monetize their content, and build profitable newsletter businesses from scratch.
          </p>
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