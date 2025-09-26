'use client'

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Can a daily email build a brand? Let's find out.
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Follow my 365-day experiment of building a $1M solopreneur business through daily emails. Real insights, real struggles, real wins.
          </p>
        </div>
      </div>
    </section>
  )
}