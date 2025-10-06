'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ThankYouPage() {
  if (typeof window !== 'undefined' && (window as any).datafast) {
    try {
      (window as any).datafast('signup_thank_you_viewed', {
        page: '/thank-you',
        referrer: document.referrer || '',
      })
    } catch {}
  }

  return (
    <main className='min-h-screen flex flex-col pb-footer' style={{backgroundColor: '#FFFFFF'}}>
      <Header />
      <section className="flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6" style={{color: '#111111'}}>
              You're in
            </h1>
            <p className="text-base sm:text-lg mb-6" style={{color: '#555555'}}>
              This is my 365-day journey of writing every single day. I'm doing this to push myself to stick to one thing, to build discipline, and to see what happens when you commit to something every day for a year.
            </p>
            <p className="text-base sm:text-lg mb-6" style={{color: '#555555'}}>
              I'll talk about money, life, struggles, side hustles, and whatever else is on my mind. No AI, just raw thoughts from someone trying to figure it out.
            </p>
            <p className="text-base sm:text-lg mb-6" style={{color: '#555555'}}>
              Look out for daily emails starting soon. Thanks for joining me on this journey.
            </p>
            <p className="text-sm italic" style={{color: '#6B7280'}}>
              P.S. This thank you page was written by ChatGPT. Could you tell? The good news is nothing I write in my newsletter is AI generated.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


