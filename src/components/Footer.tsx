export default function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Archive', href: '#archive' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy', href: '#privacy' }
  ]

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">
              Sunday Cents
            </h3>
            <p className="text-gray-400">
              Building wealth, one Sunday at a time.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sunday Cents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
