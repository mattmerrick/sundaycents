'use client'

import { useState } from 'react'

export default function BlogTitleGenerator() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('professional')
  const [titles, setTitles] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const titleTemplates = {
    professional: [
      'The Complete Guide to {topic}: Everything You Need to Know',
      'How to Master {topic} in 30 Days: A Step-by-Step Guide',
      'The Science Behind {topic}: What Research Tells Us',
      'Best Practices for {topic}: Lessons from Industry Leaders',
      'The Future of {topic}: Trends and Predictions for 2024',
      'Why {topic} Matters: The Business Case for Implementation',
      'Common {topic} Mistakes and How to Avoid Them',
      'The ROI of {topic}: Measuring Success and Impact',
      'Case Study: How [Company] Achieved Success with {topic}',
      'The Ultimate {topic} Checklist for Beginners'
    ],
    casual: [
      'What I Learned About {topic} (And Why It Changed Everything)',
      'The Truth About {topic} That Nobody Talks About',
      'My {topic} Journey: From Beginner to Expert',
      '5 Things I Wish I Knew About {topic} Before I Started',
      'Why Everyone\'s Wrong About {topic} (And What Actually Works)',
      'The {topic} Hack That Changed My Life',
      'Honest Thoughts on {topic}: What I Really Think',
      'How I Got Started with {topic} (And You Can Too)',
      'The {topic} Reality Check: What They Don\'t Tell You',
      'My Biggest {topic} Mistakes (And What I Learned)'
    ],
    clickbait: [
      'This {topic} Secret Will Blow Your Mind',
      'The {topic} Method That\'s Taking Over the Internet',
      'Why This {topic} Technique Is Going Viral',
      'The {topic} Hack That Millionaires Don\'t Want You to Know',
      'This {topic} Strategy Made Me $10,000 in 30 Days',
      'The {topic} Trick That Changed Everything',
      'Why Everyone\'s Obsessed with This {topic} Approach',
      'The {topic} Revelation That Will Change Your Life',
      'This {topic} Method Is Breaking the Internet',
      'The {topic} Secret That\'s Too Good to Ignore'
    ]
  }

  const generateTitles = async () => {
    if (!topic.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const templates = titleTemplates[tone as keyof typeof titleTemplates] || titleTemplates.professional
    
    const generatedTitles = templates
      .map(template => template.replace(/{topic}/g, topic))
      .slice(0, 10)
    
    setTitles(generatedTitles)
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copyTitle = (title: string) => {
    navigator.clipboard.writeText(title)
    alert('Title copied to clipboard!')
  }

  const copyAllTitles = () => {
    navigator.clipboard.writeText(titles.join('\n'))
    alert('All titles copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Blog Title Generator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Generate compelling blog post titles that grab attention and drive clicks. Perfect for content creators and bloggers.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Title Preferences</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Blog Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., productivity, digital marketing, personal finance"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="clickbait">Clickbait</option>
                </select>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Title Types</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li><strong>Professional:</strong> Authoritative, informative, SEO-friendly</li>
                  <li><strong>Casual:</strong> Personal, relatable, conversational</li>
                  <li><strong>Clickbait:</strong> Attention-grabbing, viral-worthy</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  Free uses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateTitles}
                  disabled={!topic.trim() || isGenerating || usageCount >= 3}
                  className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating...' : 'Generate Titles'}
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Generated Titles</h3>
                  {titles.length > 0 && (
                    <button
                      onClick={copyAllTitles}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy All
                    </button>
                  )}
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {titles.length > 0 ? (
                    titles.map((title, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer group"
                        onClick={() => copyTitle(title)}
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-white/90 text-sm leading-relaxed flex-1">
                            {title}
                          </p>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
                            <span className="text-white/60 text-xs">Copy</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-white/60">
                        Enter your topic and click "Generate Titles" to see blog title suggestions
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

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

          <div className="mt-8 bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">💡 Pro Tips for Blog Titles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Keep titles between 50-60 characters</li>
                <li>• Use numbers and power words</li>
                <li>• Include your target keyword</li>
                <li>• Test different variations</li>
              </ul>
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Make it clear what readers will learn</li>
                <li>• Create curiosity without being misleading</li>
                <li>• Use emotional triggers</li>
                <li>• A/B test your best options</li>
              </ul>
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
