'use client'

import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-green-50 to-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 max-w-2xl mx-auto">
          A newsletter for{' '}
          <span className="bg-gradient-to-r from-primary-600 to-green-500 bg-clip-text text-transparent">
            go-getters
          </span>{' '}
          ready to build wealth and freedom.
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed max-w-md mx-auto">
          Ten insights every Sunday. Start building your financial future.
        </p>
        
        {/* Email Signup - Prominent and Centered */}
        <div className="mb-8">
          <EmailSignup />
        </div>
        
        {/* Visual Elements - Smaller and Decorative */}
        <div className="relative h-20 flex items-center justify-center">
          {/* Floating Icons - Smaller */}
          <div className="absolute -top-4 -left-8 text-2xl animate-bounce-slow">🚀</div>
          <div className="absolute -top-2 right-4 text-2xl animate-bounce-slow" style={{ animationDelay: '1s' }}>💰</div>
          <div className="absolute top-4 -right-8 text-2xl animate-bounce-slow" style={{ animationDelay: '2s' }}>📊</div>
          
          {/* Money Stack - Center */}
          <div className="relative z-10">
            <div className="text-4xl animate-float">💵</div>
            <div className="text-4xl animate-float absolute -top-2 left-6" style={{ animationDelay: '0.5s' }}>💵</div>
            <div className="text-4xl animate-float absolute -top-4 left-12" style={{ animationDelay: '1s' }}>💵</div>
          </div>
          
          {/* Growth Chart - Smaller */}
          <div className="absolute -bottom-2 left-8 flex items-end space-x-1">
            {[15, 25, 35, 45, 55].map((height, index) => (
              <div
                key={index}
                className="w-2 bg-gradient-to-t from-primary-600 to-green-400 rounded-t animate-grow"
                style={{
                  height: `${height}px`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
