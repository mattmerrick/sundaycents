export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-6">
          <a href="https://x.com/mattmerrick16" target="_blank" rel="noopener noreferrer" className="text-black underline">Follow me</a>
          <a href="/tools" className="text-black underline">Free Tools</a>
          <a href="/privacy" className="text-black underline">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
