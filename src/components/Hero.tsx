'use client'

import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left lg:max-w-3xl">
          
          <p className="text-base sm:text-lg text-gray-600 mb-6">
          A newsletter for anyone who want to earn big, invest smarter, and live life financially free: 10 gems every Sunday.
          </p>
          <EmailSignup />
         
        </div>
      </div>
    </section>
  )
}
