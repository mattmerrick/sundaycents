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
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Thank you for signing up
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Look out for an email from Sunday Cents on Sunday. Thanks for joining.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              To make sure you get every issue, move our email to your primary inbox.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              You can reply to any email with questions. We read every message.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


