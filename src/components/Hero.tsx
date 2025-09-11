'use client'

import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Stay Ahead of the Money Game in Just 5 Minutes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
          A weekly roundup of the 10 most important things you need to know about wealth, investing, and financial freedom
          </p>
          <EmailSignup />
         
        </div>
      </div>
    </section>
  )
}
