'use client'

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .weather-icon {
          position: absolute;
          font-size: 4rem;
          opacity: 0.15;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      {/* Floating weather icons */}
      <div className="weather-icon" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>🌩️</div>
      <div className="weather-icon" style={{ top: '15%', right: '15%', animationDelay: '2s' }}>⛈️</div>
      <div className="weather-icon" style={{ bottom: '20%', left: '20%', animationDelay: '4s' }}>🌪️</div>
      <div className="weather-icon" style={{ bottom: '15%', right: '10%', animationDelay: '3s' }}>⚡</div>
      <div className="weather-icon" style={{ top: '50%', left: '5%', animationDelay: '1s' }}>☁️</div>
      <div className="weather-icon" style={{ top: '40%', right: '8%', animationDelay: '5s' }}>🌧️</div>

      <div 
        className="max-w-4xl mx-auto w-full text-center relative z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '4rem 2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
          }}
        >
          Working on the perfect weather bot
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl">
            so a hedge fund hires me
          </span>
        </h1>

        {/* Call to action */}
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Check it out 🚀
        </p>

        {/* CTA Button */}
        <a
          href="https://t.me/weathertrader"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 text-xl sm:text-2xl font-bold text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 10px 25px rgba(102, 126, 234, 0.5)',
          }}
        >
          Join on Telegram 💬
        </a>

        {/* Subtle tagline */}
        <p className="mt-8 text-gray-600 text-sm sm:text-base">
          Follow the journey. Join the revolution. 🌦️
        </p>
      </div>
    </main>
  )
}
