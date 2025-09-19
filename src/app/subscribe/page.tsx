import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Subscribe - Matt Merrick Newsletter',
  description: 'Support Matt\'s 365-day newsletter journey and join the leaderboard',
}

export default function SubscribePage() {
  const leaderboard = [
    { name: 'George', months: 1 },
    { name: 'Sarah', months: 1 },
    { name: 'Mike', months: 1 },
    { name: 'Jessica', months: 1 },
    { name: 'Alex', months: 1 },
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Support the Journey
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            You can subscribe to my newsletter for no benefit other than supporting this journey and being on the leaderboard.
          </p>
          
          {/* Subscription Option */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl border border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Support the Journey</h3>
              <p className="text-blue-100 mb-6">$5/month to support and join the leaderboard</p>
              <Link 
                href="https://buy.stripe.com/7sY00i6T49rW2y2bYla7C03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors block text-center"
              >
                Subscribe $5/month
              </Link>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8">Leaderboard</h2>
            <div className="space-y-4">
              {leaderboard.map((person, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
                  <span className="text-white font-medium">{person.name}</span>
                  <span className="text-gray-300">{person.months} month{person.months !== 1 ? 's' : ''} subscribed</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Join the leaderboard by subscribing to support this 365-day journey
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
