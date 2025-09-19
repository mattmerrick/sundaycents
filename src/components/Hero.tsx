'use client'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Morning Markets
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what's moving the market.
          </p>
        </div>
      </div>
    </section>
  )
}