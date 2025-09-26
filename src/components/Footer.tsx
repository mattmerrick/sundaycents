import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Sticky Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Subscribe
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Blog
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/tools"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-blue-800 border-t border-blue-700 py-8 pb-20">
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
          </div>
          
          {/* Tools Section */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm">
              The tools I use: <a href="https://emailoctopus.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Email Octopus</a> (email), <a href="https://datafa.st" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">DataFast</a> ($9/mo), <a href="https://typefully.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Typefully</a> ($149/year)
            </p>
          </div>
          
          <p className="text-gray-400 text-sm">
            Join the leaderboard and support this 365-day newsletter journey
          </p>
        </div>
      </footer>
    </>
  )
}