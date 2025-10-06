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
    <main className='min-h-screen' style={{backgroundColor: '#111111'}}>
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="transition-colors flex items-center hover:style={{color: '#FFFFFF'}}" style={{color: '#6B7280'}}
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8" style={{color: '#FFFFFF'}}>
            Support the Journey
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{color: '#6B7280'}}>
            You can subscribe to my newsletter for no benefit other than supporting this journey and being on the leaderboard.
          </p>
          
          {/* Subscription Option */}
          <div className="max-w-md mx-auto mb-16">
            <div className='p-8 rounded-2xl' style={{background: 'linear-gradient(to bottom right, #0070F3, #FF5A5F)', border: '1px solid #0070F3'}}>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#FFFFFF'}}>Support the Journey</h3>
              <p className="mb-6" style={{color: '#FFFFFF'}}>$5/month to support and join the leaderboard</p>
              <Link 
                href="https://buy.stripe.com/7sY00i6T49rW2y2bYla7C03"
                target="_blank"
                rel="noopener noreferrer"
                className='w-full py-3 rounded-lg font-bold transition-colors block text-center hover:bg-gray-50' style={{backgroundColor: '#FFFFFF', color: '#0070F3'}}
              >
                Subscribe $5/month
              </Link>
            </div>
          </div>

          {/* Leaderboard */}
          <div className='p-8 rounded-2xl' style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}}>
            <h2 className="text-3xl font-bold mb-8" style={{color: '#111111'}}>Leaderboard</h2>
            <div className="space-y-4">
              {leaderboard.map((person, index) => (
                <div key={index} className='flex justify-between items-center p-4 rounded-lg' style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}}>
                  <span className="font-medium" style={{color: '#111111'}}>{person.name}</span>
                  <span style={{color: '#6B7280'}}>{person.months} month{person.months !== 1 ? 's' : ''} subscribed</span>
                </div>
              ))}
            </div>
            <p className="text-sm mt-6" style={{color: '#6B7280'}}>
              Join the leaderboard by subscribing to support this 365-day journey
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
