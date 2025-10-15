import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thank You - Matt Merrick Newsletter',
  description: 'Thank you for subscribing to Matt\'s 365-day newsletter journey',
  robots: 'noindex, nofollow',
  alternates: { canonical: 'https://www.mattmerrick.com/subscriber-thank-you' }
}

export default function SubscriberThankYouPage() {
  return (
    <main className="min-h-screen style={{backgroundColor: '#111111'}}">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="style={{color: '#6B7280'}} hover:style={{color: '#FFFFFF'}} transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-12">
            Thank You
          </h1>
          
          <div className="style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}} p-8 rounded-2xl border style={{border: '1px solid #6B7280'}} text-left">
            <p className="text-lg style={{color: '#6B7280'}} mb-6 leading-relaxed">
              Thank you so much for subscribing to my writing. I know I'm trash but I promise I will improve.
            </p>
            
            <p className="text-lg style={{color: '#6B7280'}} mb-6 leading-relaxed">
              I also didn't wanna use companies like Substack or Beehiiv to write my daily newsletter and to get sponsorships etc. I wanted to have this subscriber feature and keep all the profits while also making it a fun game.
            </p>
            
            <p className="text-lg style={{color: '#6B7280'}} mb-6 leading-relaxed">
              So thanks. Let's see how long you can last.
            </p>
            
            <p className="text-lg style={{color: '#6B7280'}} mb-6 leading-relaxed">
              After the 365 days I'll most likely do something for the long term subscribers but shhh don't tell anyone. I want people to subscribe because they want to not because they get something in the end.
            </p>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/"
              className="inline-block style={{backgroundColor: '#0070F3'}} style={{color: '#FFFFFF'}} px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
