import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Sticky Navigation */}
      <div className='fixed bottom-0 left-0 right-0 z-50' style={{backgroundColor: '#FFFFFF', borderTop: '1px solid #6B7280'}}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/"
              className="transition-colors font-medium hover:text-gray-900" style={{color: '#555555'}}
            >
              Subscribe
            </Link>
            <span style={{color: '#6B7280'}}>|</span>
            <Link 
              href="/blog"
              className="transition-colors font-medium hover:text-gray-900" style={{color: '#555555'}}
            >
              Blog
            </Link>
            <span style={{color: '#6B7280'}}>|</span>
            <Link 
              href="/tools"
              className="transition-colors font-medium hover:text-gray-900" style={{color: '#555555'}}
            >
              Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className='py-8 pb-20' style={{backgroundColor: '#0070F3', borderTop: '1px solid #0070F3'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <Link 
              href="http://x.com/mattmerrick16"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white" style={{color: '#FFFFFF'}}
            >
              Follow Me
            </Link>
           
            <Link 
              href="/privacy"
              className="transition-colors hover:text-white" style={{color: '#FFFFFF'}}
            >
              Privacy
            </Link>
          </div>
          
          {/* Tools Section */}
          <div className="mb-6">
            <p className="text-sm" style={{color: '#FFFFFF'}}>
              The tools I use: <a href="https://emailoctopus.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Email Octopus</a> (email), <a href="https://datafa.st" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">DataFast</a> ($9/mo), <a href="https://typefully.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Typefully</a> ($149/year)
            </p>
          </div>
          
            <p className="text-sm" style={{color: '#FFFFFF'}}>
            Join the leaderboard and support this 365-day newsletter journey
          </p>
        </div>
      </footer>
    </>
  )
}