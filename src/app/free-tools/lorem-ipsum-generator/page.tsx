'use client'

import { useState } from 'react'

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3)
  const [sentences, setSentences] = useState(5)
  const [words, setWords] = useState(10)
  const [generatedText, setGeneratedText] = useState('')
  const [textType, setTextType] = useState('paragraphs')
  const [usageCount, setUsageCount] = useState(0)

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'at', 'vero', 'eos',
    'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'blanditiis',
    'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores',
    'quas', 'molestias', 'excepturi', 'sint', 'obcaecati', 'cupiditate', 'similique'
  ]

  const generateLoremText = async () => {
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    let result = ''

    if (textType === 'paragraphs') {
      for (let p = 0; p < paragraphs; p++) {
        let paragraph = ''
        const sentencesInParagraph = Math.floor(Math.random() * 4) + 3 // 3-6 sentences per paragraph
        
        for (let s = 0; s < sentencesInParagraph; s++) {
          const wordsInSentence = Math.floor(Math.random() * 10) + 5 // 5-14 words per sentence
          let sentence = ''
          
          for (let w = 0; w < wordsInSentence; w++) {
            const word = loremWords[Math.floor(Math.random() * loremWords.length)]
            if (w === 0) {
              sentence += word.charAt(0).toUpperCase() + word.slice(1)
            } else {
              sentence += ' ' + word
            }
          }
          sentence += '.'
          paragraph += sentence + ' '
        }
        
        result += paragraph.trim() + '\n\n'
      }
    } else if (textType === 'sentences') {
      for (let s = 0; s < sentences; s++) {
        const wordsInSentence = Math.floor(Math.random() * 10) + 5
        let sentence = ''
        
        for (let w = 0; w < wordsInSentence; w++) {
          const word = loremWords[Math.floor(Math.random() * loremWords.length)]
          if (w === 0) {
            sentence += word.charAt(0).toUpperCase() + word.slice(1)
          } else {
            sentence += ' ' + word
          }
        }
        sentence += '.'
        result += sentence + ' '
      }
    } else if (textType === 'words') {
      for (let w = 0; w < words; w++) {
        const word = loremWords[Math.floor(Math.random() * loremWords.length)]
        if (w === 0) {
          result += word.charAt(0).toUpperCase() + word.slice(1)
        } else {
          result += ' ' + word
        }
      }
    }

    setGeneratedText(result.trim())
    setUsageCount(prev => prev + 1)
  }

  const copyText = () => {
    navigator.clipboard.writeText(generatedText)
    alert('Lorem Ipsum text copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Lorem Ipsum Generator
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Generate Lorem Ipsum placeholder text instantly. Perfect for designers, developers, and content creators.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Generator Options</h2>
              
              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Text Type
                </label>
                <select
                  value={textType}
                  onChange={(e) => setTextType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="paragraphs">Paragraphs</option>
                  <option value="sentences">Sentences</option>
                  <option value="words">Words</option>
                </select>
              </div>

              {textType === 'paragraphs' && (
                <div>
                  <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                    Number of Paragraphs: {paragraphs}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={paragraphs}
                    onChange={(e) => setParagraphs(parseInt(e.target.value))}
                    className="w-full h-2 style={{backgroundColor: '#FFFFFF'}}/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs style={{color: '#FFFFFF'}}/60 mt-1">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>
              )}

              {textType === 'sentences' && (
                <div>
                  <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                    Number of Sentences: {sentences}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={sentences}
                    onChange={(e) => setSentences(parseInt(e.target.value))}
                    className="w-full h-2 style={{backgroundColor: '#FFFFFF'}}/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs style={{color: '#FFFFFF'}}/60 mt-1">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>
              )}

              {textType === 'words' && (
                <div>
                  <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                    Number of Words: {words}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={words}
                    onChange={(e) => setWords(parseInt(e.target.value))}
                    className="w-full h-2 style={{backgroundColor: '#FFFFFF'}}/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs style={{color: '#FFFFFF'}}/60 mt-1">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="style={{color: '#FFFFFF'}}/80 text-sm">
                  Free generations remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateLoremText}
                  disabled={usageCount >= 3}
                  className="style={{backgroundColor: '#FFFFFF'}} text-sky-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Lorem Ipsum
                </button>
              </div>
            </div>

            <div>
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold style={{color: '#FFFFFF'}}">Generated Text</h3>
                  {generatedText && (
                    <button
                      onClick={copyText}
                      className="style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy Text
                    </button>
                  )}
                </div>
                
                <div className="style={{color: '#FFFFFF'}}/90 leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {generatedText || 'Your Lorem Ipsum text will appear here...'}
                </div>
              </div>
            </div>
          </div>

          {usageCount >= 3 && (
            <div className="mt-8 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-2">Upgrade for Unlimited Access</h3>
              <p className="style={{color: '#FFFFFF'}}/90 mb-4">
                You've used all your free generations. Upgrade to continue using this tool unlimited times.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Upgrade Now
              </button>
            </div>
          )}

          <div className="mt-8 bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">📝 About Lorem Ipsum</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Used as placeholder text in design</li>
                <li>• Originated from classical Latin literature</li>
                <li>• Helps focus on layout and typography</li>
                <li>• Standard in publishing and web design</li>
              </ul>
              <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-2">
                <li>• Prevents distraction from actual content</li>
                <li>• Used in mockups and prototypes</li>
                <li>• Helps test text flow and spacing</li>
                <li>• Industry standard since the 1500s</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="style={{color: '#FFFFFF'}}/80 hover:style={{color: '#FFFFFF'}} transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
