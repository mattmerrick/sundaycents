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
    <main className='min-h-screen' style={{background: 'linear-gradient(to bottom right, #0070F3, #FF5A5F)'}}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: '#FFFFFF'}}>
            Blog Title Generator
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#FFFFFF'}}>
            Generate compelling blog post titles that grab attention and drive clicks. Perfect for content creators and bloggers.
          </p>
        </div>

        <div className='backdrop-blur-sm rounded-2xl p-8 shadow-xl' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6" style={{color: '#FFFFFF'}}>Title Preferences</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                  Blog Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., productivity, digital marketing, personal finance"
                  className='w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50' style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#FFFFFF'}}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#FFFFFF'}}>
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className='w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50' style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#FFFFFF'}}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="clickbait">Clickbait</option>
                </select>
              </div>

              <div className='rounded-lg p-4' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <h3 className="text-lg font-semibold mb-3" style={{color: '#FFFFFF'}}>Title Types</h3>
                <ul className="text-sm space-y-2" style={{color: '#FFFFFF'}}>
                  <li><strong>Professional:</strong> Authoritative, informative, SEO-friendly</li>
                  <li><strong>Casual:</strong> Personal, relatable, conversational</li>
                  <li><strong>Clickbait:</strong> Attention-grabbing, viral-worthy</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm" style={{color: '#FFFFFF'}}>
                  Free uses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateTitles}
                  disabled={!topic.trim() || isGenerating || usageCount >= 3}
                   className='font-semibold px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90' style={{backgroundColor: '#FFFFFF', color: '#0070F3'}}
                >
                  {isGenerating ? 'Generating...' : 'Generate Titles'}
                </button>
              </div>
            </div>

            <div>
              <div className='rounded-lg p-6 h-full' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold" style={{color: '#FFFFFF'}}>Generated Titles</h3>
                  {titles.length > 0 && (
                    <button
                      onClick={copyAllTitles}
                       className='hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200' style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF'}}
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
                         className='rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer group' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
                        onClick={() => copyTitle(title)}
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-sm leading-relaxed flex-1" style={{color: '#FFFFFF'}}>
                            {title}
                          </p>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
                            <span className="text-xs" style={{color: '#FFFFFF'}}>Copy</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p style={{color: '#FFFFFF'}}>
                        Enter your topic and click "Generate Titles" to see blog title suggestions
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {usageCount >= 3 && (
            <div className='mt-8 border rounded-lg p-6' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)'}}>
              <h3 className="text-lg font-semibold mb-2" style={{color: '#FFFFFF'}}>Upgrade for Unlimited Access</h3>
              <p className="mb-4" style={{color: '#FFFFFF'}}>
                You've used all your free generations. Upgrade to continue using this tool unlimited times.
              </p>
              <button className='font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-yellow-600' style={{backgroundColor: '#FF5A5F', color: '#FFFFFF'}}>
                Upgrade Now
              </button>
            </div>
          )}

          <div className='mt-8 border rounded-lg p-6' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)'}}>
            <h3 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>💡 Pro Tips for Blog Titles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-2" style={{color: '#FFFFFF'}}>
                <li>• Keep titles between 50-60 characters</li>
                <li>• Use numbers and power words</li>
                <li>• Include your target keyword</li>
                <li>• Test different variations</li>
              </ul>
              <ul className="text-sm space-y-2" style={{color: '#FFFFFF'}}>
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
             className="transition-colors hover:text-white" style={{color: '#FFFFFF'}}
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
