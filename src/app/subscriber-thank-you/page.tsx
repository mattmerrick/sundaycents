import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thank You - Matt Merrick Newsletter',
  description: 'Thank you for subscribing to Matt\'s 365-day newsletter journey',
}

export default function SubscriberThankYouPage() {
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12">
            Thank You
          </h1>
          
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-left">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Thank you so much for subscribing to my writing. I know I'm trash but I promise I will improve.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I also didn't wanna use companies like Substack or Beehiiv to write my daily newsletter and to get sponsorships etc. I wanted to have this subscriber feature and keep all the profits while also making it a fun game.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              So thanks. Let's see how long you can last.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              After the 365 days I'll most likely do something for the long term subscribers but shhh don't tell anyone. I want people to subscribe because they want to not because they get something in the end.
            </p>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
