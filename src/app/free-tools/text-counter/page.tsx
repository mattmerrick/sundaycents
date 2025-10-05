'use client'

import { useState, useEffect } from 'react'

export default function TextCounter() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  })

  useEffect(() => {
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0
    const readingTime = Math.ceil(words / 200) // Average reading speed: 200 words per minute

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime
    })
  }, [text])

  const clearText = () => {
    setText('')
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
    alert('Text copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Text Counter
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Count characters, words, sentences, and more. Perfect for writers, content creators, and social media posts.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">Your Text</h2>
                <div className="flex gap-2">
                  <button
                    onClick={copyText}
                    disabled={!text.trim()}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Copy
                  </button>
                  <button
                    onClick={clearText}
                    disabled={!text.trim()}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Clear
                  </button>
                </div>
              </div>
              
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={15}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Text Statistics</h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Characters (with spaces)</span>
                    <span className="text-2xl font-bold text-blue-400">{stats.characters.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Characters (no spaces)</span>
                    <span className="text-2xl font-bold text-green-400">{stats.charactersNoSpaces.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Words</span>
                    <span className="text-2xl font-bold text-purple-400">{stats.words.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Sentences</span>
                    <span className="text-2xl font-bold text-pink-400">{stats.sentences.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Paragraphs</span>
                    <span className="text-2xl font-bold text-yellow-400">{stats.paragraphs.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Reading Time</span>
                    <span className="text-2xl font-bold text-orange-400">
                      {stats.readingTime} min{stats.readingTime !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs mt-1">
                    Based on 200 words per minute
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white mb-2">📝 Writing Guidelines</h3>
                <ul className="text-white/90 text-xs space-y-1">
                  <li>• <strong>Tweet:</strong> 280 characters max</li>
                  <li>• <strong>Meta Description:</strong> 150-155 characters</li>
                  <li>• <strong>Email Subject:</strong> 50 characters or less</li>
                  <li>• <strong>Blog Post:</strong> 300+ words for SEO</li>
                  <li>• <strong>Paragraph:</strong> 3-5 sentences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="text-white/80 hover:text-white transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
