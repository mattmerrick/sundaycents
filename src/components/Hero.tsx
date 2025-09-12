'use client'

import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            📰 TLDR Money
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Get smarter about money in 5 minutes.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            A free daily email with summaries of the most important stories in markets 📈, personal finance 💳, business 💼, and policy 🏛.
          </p>
          <EmailSignup />
        </div>
      </div>
    </section>
  )
}
