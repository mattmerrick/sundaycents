import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-6">
          <Link 
            href="http://x.com/mattmerrick16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Follow Me
          </Link>
         
          <Link 
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link 
            href="/subscribe"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Subscribe
          </Link>
        </div>
        <p className="text-gray-400 text-sm">
          Join the leaderboard and support this 365-day newsletter journey
        </p>
      </div>
    </footer>
  )
}