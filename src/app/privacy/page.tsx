'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

export default function PrivacyPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen style={{backgroundColor: '#FFFFFF'}} flex flex-col pb-footer">
      <Header />
      <section className="flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left lg:max-w-2xl">
            <button onClick={() => router.back()} className="text-black underline mb-4">Back</button>
            <h1 className="text-3xl sm:text-4xl font-extrabold style={{color: '#111111'}} leading-tight mb-4">Privacy</h1>
            <p className="text-base sm:text-lg style={{color: '#555555'}}">
              I will never sell or share your email with companies. You can unsubscribe at any time using the link in any email.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


