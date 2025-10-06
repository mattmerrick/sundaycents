'use client'

import { useState } from 'react'

export default function ContentIdeasGenerator() {
  const [niche, setNiche] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [contentType, setContentType] = useState('posts')
  const [ideas, setIdeas] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const contentTemplates = {
    instagram: {
      posts: [
        'Behind-the-scenes of your {niche} process',
        '5 {niche} mistakes everyone makes (and how to avoid them)',
        'Before vs After: {niche} transformation',
        'The truth about {niche} that no one tells you',
        '3 {niche} tips that changed my life',
        'What I wish I knew about {niche} when I started',
        'Common {niche} myths debunked',
        'My {niche} routine that actually works',
        'Why {niche} is harder than people think',
        'The {niche} hack that saves me 2 hours daily'
      ],
      stories: [
        'Day in my life doing {niche}',
        'Polls: What\'s your biggest {niche} challenge?',
        'Quick {niche} tip in 15 seconds',
        'Swipe up for my {niche} guide',
        'Q&A about {niche}',
        'Rate my {niche} setup 1-10',
        'This or That: {niche} edition',
        'Your {niche} questions answered',
        'Behind the scenes: {niche} prep',
        'Sneak peek: {niche} project'
      ]
    },
    twitter: {
      posts: [
        'Unpopular opinion about {niche}:',
        'The {niche} advice I wish I heard 5 years ago',
        'Thread: 7 {niche} lessons I learned the hard way',
        'Hot take: {niche} is overrated because...',
        'If you\'re struggling with {niche}, read this:',
        'The {niche} industry doesn\'t want you to know this',
        'Why most {niche} advice is wrong',
        'The {niche} framework that changed everything',
        'Common {niche} mistakes that cost you money',
        'The {niche} mindset shift that changed my results'
      ],
      threads: [
        'Thread: My complete {niche} system',
        '🧵 The {niche} guide I wish I had when I started',
        'Thread: 10 {niche} mistakes that hold you back',
        '🧵 How I went from {niche} beginner to expert',
        'Thread: The psychology behind successful {niche}',
        '🧵 {niche} tools that actually work (not the hype)',
        'Thread: Why your {niche} isn\'t working',
        '🧵 The {niche} blueprint for beginners',
        'Thread: Advanced {niche} strategies that work',
        '🧵 {niche} case studies that blew my mind'
      ]
    },
    linkedin: {
      posts: [
        'Lessons learned from 5 years in {niche}',
        'The {niche} trend that\'s changing everything',
        'Why {niche} professionals need to adapt now',
        'My {niche} journey: from failure to success',
        'The {niche} skills that matter most in 2024',
        'How {niche} is evolving (and what it means for you)',
        'The {niche} mistake that cost me $10k',
        'What I learned from {niche} industry leaders',
        'The future of {niche} (my predictions)',
        'How to break into {niche} without experience'
      ],
      articles: [
        'The Complete Guide to {niche} Success',
        'How to Master {niche} in 30 Days',
        'The Psychology of {niche}: What Drives Success',
        'Breaking Down {niche}: A Data-Driven Analysis',
        'The {niche} Framework That Actually Works',
        'From Zero to {niche} Expert: My Journey',
        'The Hidden Costs of {niche} (And How to Avoid Them)',
        'Why {niche} Professionals Are in High Demand',
        'The {niche} Revolution: What You Need to Know',
        'Mastering {niche}: Lessons from Top Performers'
      ]
    },
    tiktok: {
      posts: [
        'POV: You finally understand {niche}',
        'This {niche} hack will change your life',
        'Things I wish I knew about {niche} before starting',
        'The {niche} truth nobody talks about',
        'How to get started with {niche} (beginner friendly)',
        'Common {niche} mistakes that are costing you money',
        'Why everyone is wrong about {niche}',
        'The {niche} secret that changed everything',
        'Day 1 of {niche} vs Day 100',
        'This {niche} trend is taking over social media'
      ],
      videos: [
        'Tutorial: How to {niche} like a pro',
        'Reacting to {niche} advice on the internet',
        'Testing viral {niche} hacks (do they work?)',
        'My {niche} setup tour',
        'Q&A: Everything you wanted to know about {niche}',
        'Before & After: My {niche} transformation',
        'The {niche} routine that changed my life',
        'Common {niche} myths vs reality',
        'How I made $X doing {niche}',
        'The {niche} app that changed everything'
      ]
    }
  } as const

  const generateIdeas = async () => {
    if (!niche.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    // Get templates based on platform and content type
    let templates: readonly string[] = []
    
    if (platform === 'instagram') {
      templates = contentTemplates.instagram[contentType as 'posts' | 'stories'] || contentTemplates.instagram.posts
    } else if (platform === 'twitter') {
      templates = contentTemplates.twitter[contentType as 'posts' | 'threads'] || contentTemplates.twitter.posts
    } else if (platform === 'linkedin') {
      templates = contentTemplates.linkedin[contentType as 'posts' | 'articles'] || contentTemplates.linkedin.posts
    } else if (platform === 'tiktok') {
      templates = contentTemplates.tiktok[contentType as 'posts' | 'videos'] || contentTemplates.tiktok.posts
    } else {
      templates = contentTemplates.instagram.posts
    }
    
    const generatedIdeas = templates
      .map(template => template.replace(/{niche}/g, niche.toLowerCase()))
      .slice(0, 10)
      .map(idea => idea.charAt(0).toUpperCase() + idea.slice(1))
    
    setIdeas(generatedIdeas)
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copyIdea = (idea: string) => {
    navigator.clipboard.writeText(idea)
    alert('Idea copied to clipboard!')
  }

  const copyAllIdeas = () => {
    navigator.clipboard.writeText(ideas.join('\n'))
    alert('All ideas copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Content Ideas Generator
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Never run out of content ideas again. Generate fresh, engaging content ideas tailored to your niche and platform.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Content Preferences</h2>
              
              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Your Niche/Topic
                </label>
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g., productivity, fitness, business, cooking"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Content Type
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="posts">Posts</option>
                  <option value="stories">Stories</option>
                  {platform === 'twitter' && <option value="threads">Threads</option>}
                  {platform === 'linkedin' && <option value="articles">Articles</option>}
                  {platform === 'tiktok' && <option value="videos">Videos</option>}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="style={{color: '#FFFFFF'}}/80 text-sm">
                  Free uses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateIdeas}
                  disabled={!niche.trim() || isGenerating || usageCount >= 3}
                  className="style={{backgroundColor: '#FFFFFF'}} text-purple-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating...' : 'Generate Ideas'}
                </button>
              </div>
            </div>

            <div>
              <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold style={{color: '#FFFFFF'}}">Content Ideas</h3>
                  {ideas.length > 0 && (
                    <button
                      onClick={copyAllIdeas}
                      className="style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy All
                    </button>
                  )}
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {ideas.length > 0 ? (
                    ideas.map((idea, index) => (
                      <div
                        key={index}
                        className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4 hover:style={{backgroundColor: '#FFFFFF'}}/20 transition-all duration-200 cursor-pointer group"
                        onClick={() => copyIdea(idea)}
                      >
                        <div className="flex items-start justify-between">
                          <p className="style={{color: '#FFFFFF'}}/90 text-sm leading-relaxed flex-1">
                            {idea}
                          </p>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
                            <span className="style={{color: '#FFFFFF'}}/60 text-xs">Copy</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="style={{color: '#FFFFFF'}}/60">
                        Enter your niche and click "Generate Ideas" to see content suggestions
                      </p>
                    </div>
                  )}
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
