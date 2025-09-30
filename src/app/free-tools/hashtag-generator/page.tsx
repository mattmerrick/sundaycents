'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

export default function HashtagGenerator() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [hashtags, setHashtags] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const popularHashtags = {
    instagram: [
      '#entrepreneur', '#business', '#startup', '#success', '#motivation',
      '#productivity', '#mindset', '#goals', '#inspiration', '#leadership',
      '#freedom', '#passiveincome', '#investing', '#wealth', '#finance',
      '#solopreneur', '#digitalmarketing', '#contentcreation', '#socialmedia'
    ],
    twitter: [
      '#entrepreneur', '#business', '#startup', '#productivity', '#mindset',
      '#leadership', '#success', '#motivation', '#investing', '#finance',
      '#solopreneur', '#digitalmarketing', '#content', '#growth', '#innovation'
    ],
    linkedin: [
      '#entrepreneur', '#business', '#leadership', '#productivity', '#innovation',
      '#startup', '#success', '#networking', '#professional', '#career',
      '#growth', '#strategy', '#management', '#teamwork', '#results'
    ],
    tiktok: [
      '#entrepreneur', '#business', '#startup', '#success', '#motivation',
      '#productivity', '#mindset', '#goals', '#inspiration', '#finance',
      '#investing', '#passiveincome', '#freedom', '#solopreneur', '#content'
    ]
  }

  const generateHashtags = async () => {
    if (!topic.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const baseHashtags = popularHashtags[platform as keyof typeof popularHashtags] || popularHashtags.instagram
    const topicWords = topic.toLowerCase().split(' ').filter(word => word.length > 2)
    
    // Generate topic-specific hashtags
    const topicHashtags = topicWords.map(word => `#${word}`)
    const relatedHashtags = baseHashtags.slice(0, 15 - topicHashtags.length)
    
    const generatedHashtags = [...topicHashtags, ...relatedHashtags].slice(0, 15)
    setHashtags(generatedHashtags)
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(' '))
    alert('Hashtags copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hashtag Generator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Generate relevant hashtags for your social media posts. Get more reach and engagement with the right hashtags.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                What's your post about?
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., productivity tips, business advice, motivation"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter/X</option>
                <option value="linkedin">LinkedIn</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-white/80 text-sm">
                Free uses remaining: {3 - usageCount}/3
              </div>
              <button
                onClick={generateHashtags}
                disabled={!topic.trim() || isGenerating || usageCount >= 3}
                className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Hashtags'}
              </button>
            </div>

            {hashtags.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Generated Hashtags</h3>
                  <button
                    onClick={copyHashtags}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Copy All
                  </button>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-all duration-200 cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(hashtag)}
                      >
                        {hashtag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {usageCount >= 3 && (
              <div className="mt-8 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Upgrade for Unlimited Access</h3>
                <p className="text-white/90 mb-4">
                  You've used all your free generations. Upgrade to continue using this tool unlimited times.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                  Upgrade Now
                </button>
              </div>
            )}
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
