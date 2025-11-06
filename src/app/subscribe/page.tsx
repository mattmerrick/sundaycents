import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Subscribe - Matt Merrick',
  description: 'Support Matt for $5/month or $50/year to keep it ad free.',
}

export default function SubscribePage() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col">
        <Header />

        <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Subscribe to support me.
          </h1>
          
          <p className="text-lg text-gray-700 mb-4 max-w-md">
            $5/month or $50/year — to keep this ad free.
          </p>

          <p className="text-base text-gray-600 mb-10 max-w-md">
            I’ll never run ads, sell sponsorships, or push paid promos.  
            This newsletter stays completely independent because of readers like you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://buy.stripe.com/7sY00i6T49rW2y2bYla7C03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-colors bg-gray-900 text-white hover:bg-gray-800"
            >
              Subscribe $5/month
            </Link>

            <Link 
              href="https://buy.stripe.com/6oU8wOdhs5bG8Wq7I5a7C04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300"
            >
              Subscribe $50/year
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <Link 
              href="https://medium.com/@mattmerrick"
              className="text-gray-900 hover:text-navy-600 transition-colors font-medium"
            >
              Medium
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="https://x.com/mattmerrick16"
              className="text-gray-900 hover:text-navy-600 transition-colors font-medium"
            >
              X
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="https://mattmerrick.com/latest"
              className="text-gray-900 hover:text-navy-600 transition-colors font-medium"
            >
              Latest
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href="/subscribe"
              className="text-gray-900 hover:text-navy-600 transition-colors font-medium"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
