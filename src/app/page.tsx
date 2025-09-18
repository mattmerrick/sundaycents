import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Finly Bot - Your Complete Financial Content Feed',
  description: 'Real-time financial monitoring: Insider trading, crypto markets, stock movements, and financial news. Join our Telegram bot for instant alerts.',
  keywords: 'Finly Bot, financial bot, insider trading, crypto alerts, stock alerts, financial news, Telegram bot, real-time markets',
  authors: [{ name: 'Finly Bot' }],
  creator: 'Finly Bot',
  publisher: 'Finly Bot',
  robots: 'index, follow',
  openGraph: {
    title: 'Finly Bot - Your Complete Financial Content Feed',
    description: 'Real-time financial monitoring: Insider trading, crypto markets, stock movements, and financial news. Join our Telegram bot for instant alerts.',
    type: 'website',
    siteName: 'Finly Bot',
    url: 'https://morningmarkets.net',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Finly Bot Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finly Bot - Your Complete Financial Content Feed',
    description: 'Real-time financial monitoring: Insider trading, crypto markets, stock movements, and financial news. Join our Telegram bot for instant alerts.',
    images: ['/twitter-image'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Finly Bot
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Your Complete Financial Content Feed
          </p>
          <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
            Real-time monitoring of insider trading, crypto markets, stock movements, and financial news. 
            Get instant alerts delivered to your Telegram.
          </p>
          <Link 
            href="https://t.me/finlybott"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            Join Telegram Bot →
          </Link>
        </div>
      </section>

      {/* Real-Time Monitoring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ⚡ Real-Time Monitoring
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Insider Trading</h3>
              <p className="text-gray-600 mb-4">Form 4 filings from SEC</p>
              <div className="text-sm text-blue-600 font-medium">Every 3 minutes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">₿</div>
              <h3 className="text-xl font-semibold mb-3">Crypto Markets</h3>
              <p className="text-gray-600 mb-4">Top 5 crypto movers</p>
              <div className="text-sm text-blue-600 font-medium">Every 2 minutes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Stock Markets</h3>
              <p className="text-gray-600 mb-4">Major stock movements</p>
              <div className="text-sm text-blue-600 font-medium">Every 2 minutes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-3">Financial News</h3>
              <p className="text-gray-600 mb-4">Latest market news</p>
              <div className="text-sm text-blue-600 font-medium">Every 5 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Alerts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📱 Sample Alerts
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🚨</span>
                <span className="font-semibold text-red-600">MEGA TRADE</span>
              </div>
              <p className="text-gray-800">
                <strong>TSLA</strong> - Elon Musk bought 1,000,000 shares at $400.00 
                (Total: $400M) - <a href="#" className="text-blue-600 underline">SEC Filing</a>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">₿</span>
                <span className="font-semibold text-orange-600">CRYPTO ALERT</span>
              </div>
              <p className="text-gray-800">
                <strong>BTC</strong> Bitcoin +8.5% to $115,000 (24h: +$9,000) 
                Market Cap: $2.2T
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-semibold text-green-600">STOCK ALERT</span>
              </div>
              <p className="text-gray-800">
                <strong>AAPL</strong> Apple Inc. +4.2% to $225.50 
                Volume: 45M shares
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📰</span>
                <span className="font-semibold text-blue-600">NEWS ALERT</span>
              </div>
              <p className="text-gray-800">
                Fed signals potential rate cut in Q2 2024 - <a href="#" className="text-blue-600 underline">Read More</a>
                <br />
                <span className="text-sm text-gray-600">Tags: #FED #RATES #ECONOMY</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎯 Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Smart Filtering</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Insider: All trades (significance indicators)</li>
                <li>• Crypto: Only moves &gt;5%</li>
                <li>• Stocks: Only moves &gt;3%</li>
                <li>• News: All relevant financial news</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Twitter-Ready Format</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Clean, professional formatting</li>
                <li>• Automatic hashtag generation</li>
                <li>• Easy sharing format</li>
                <li>• Source links included</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3">Source Verification</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• SEC links for insider trades</li>
                <li>• Direct news article links</li>
                <li>• Real-time API sources</li>
                <li>• Verified data sources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Significance Indicators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🚨 Significance Indicators
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">MEGA TRADE</h3>
              <p className="text-red-700">Insider trades &gt;$10M</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Large Trade</h3>
              <p className="text-yellow-700">Insider trades &gt;$1M</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Direction</h3>
              <p className="text-green-700">Clear buy/sell indicators</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our Telegram bot and never miss important market movements again.
          </p>
          <Link 
            href="https://t.me/finlybott"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            Join Telegram Bot →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}