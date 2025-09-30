'use client'

import { useState } from 'react'

export default function CaptionWriter() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('professional')
  const [platform, setPlatform] = useState('instagram')
  const [length, setLength] = useState('medium')
  const [caption, setCaption] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const generateCaption = async () => {
    if (!topic.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Generate caption based on parameters
    const captions = {
      professional: {
        instagram: `🚀 ${topic.charAt(0).toUpperCase() + topic.slice(1)} is essential for success in today's competitive landscape. Here's what you need to know:\n\n✅ Key insights that can transform your approach\n✅ Actionable strategies you can implement today\n✅ Real-world examples of successful implementation\n\nWhat's your biggest challenge with ${topic}? Let me know in the comments below! 👇\n\n#${topic.replace(/\s+/g, '')} #business #success #entrepreneur #motivation`,
        twitter: `💡 ${topic.charAt(0).toUpperCase() + topic.slice(1)}: The game-changer you've been missing.\n\nHere's the truth most people don't want to hear about ${topic}...\n\nThread 🧵👇\n\n#${topic.replace(/\s+/g, '')} #business #entrepreneur`,
        linkedin: `Professional insight: ${topic.charAt(0).toUpperCase() + topic.slice(1)} is becoming increasingly important in our industry.\n\nKey observations:\n• Market trends are shifting\n• Consumer behavior is evolving\n• Technology is enabling new possibilities\n\nWhat strategies have you found most effective for ${topic}? I'd love to hear your thoughts.\n\n#${topic.replace(/\s+/g, '')} #professional #business #strategy`,
        tiktok: `POV: You finally understand ${topic} 🔥\n\nHere's what changed everything for me:\n\n1. Stop overthinking\n2. Take action NOW\n3. Learn from mistakes\n\nThe results? Life-changing 💯\n\n#${topic.replace(/\s+/g, '')} #success #motivation #entrepreneur`
      },
      casual: {
        instagram: `Okay, let's talk about ${topic}... 🤔\n\nI used to struggle with this SO much, but here's what I learned:\n\n✨ The secret nobody tells you\n✨ My biggest mistake (and how to avoid it)\n✨ What actually works\n\nDrop a comment if you've been there! 💬\n\n#${topic.replace(/\s+/g, '')} #real #authentic #life #growth`,
        twitter: `Unpopular opinion about ${topic}: 🤷‍♂️\n\nMost people are doing it wrong.\n\nHere's what I learned the hard way...\n\n#${topic.replace(/\s+/g, '')} #truth #realtalk`,
        linkedin: `Quick thoughts on ${topic}:\n\nHaving worked in this space for years, I've noticed a pattern that most people miss.\n\nIt's not about perfection—it's about progress.\n\nWhat's your experience been like?\n\n#${topic.replace(/\s+/g, '')} #career #insights #professional`,
        tiktok: `Hot take: ${topic} isn't what you think it is 🤯\n\nAfter trying EVERYTHING, here's what actually works:\n\n• Stop doing this ❌\n• Start doing this ✅\n• This changed my life 🚀\n\n#${topic.replace(/\s+/g, '')} #viral #trending #lifehack`
      },
      motivational: {
        instagram: `🔥 ${topic.charAt(0).toUpperCase() + topic.slice(1)} will change your life if you let it.\n\nBut here's the thing—most people give up before they see results.\n\nDon't be one of them.\n\nYour future self will thank you for starting today. 💪\n\nWhat's one step you'll take today? 👇\n\n#${topic.replace(/\s+/g, '')} #motivation #mindset #success #goals`,
        twitter: `You have two choices:\n\n1. Stay where you are\n2. Chase your dreams\n\n${topic.charAt(0).toUpperCase() + topic.slice(1)} starts with choice #2.\n\nWhich will you choose?\n\n#${topic.replace(/\s+/g, '')} #motivation #mindset #success`,
        linkedin: `Success in ${topic} isn't about luck—it's about consistency.\n\nEvery expert was once a beginner.\nEvery pro was once an amateur.\nEvery icon was once an unknown.\n\nYour time is coming. Keep going.\n\n#${topic.replace(/\s+/g, '')} #motivation #success #career #growth`,
        tiktok: `Plot twist: ${topic} isn't hard 🎭\n\nYou're just overthinking it!\n\nHere's the 3-step formula:\n\n1. Start ✅\n2. Don't stop ✅\n3. Trust the process ✅\n\nThat's it. You're welcome 💅\n\n#${topic.replace(/\s+/g, '')} #mindset #success #motivation`
      }
    }

    let selectedCaption = captions[tone as keyof typeof captions]?.[platform as keyof typeof captions.professional] || captions.professional.instagram

    // Adjust length
    if (length === 'short') {
      selectedCaption = selectedCaption.split('\n\n')[0] + '\n\n' + selectedCaption.split('\n\n').slice(-1)[0]
    } else if (length === 'long') {
      selectedCaption += '\n\n' + '💡 Pro tip: Consistency beats perfection every time.\n\n📈 Want more insights like this? Follow for daily value!\n\n#motivation #growth #success #entrepreneur'
    }

    setCaption(selectedCaption)
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copyCaption = () => {
    navigator.clipboard.writeText(caption)
    alert('Caption copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Caption Writer
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Generate engaging social media captions that drive engagement and build your audience.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  What's your post about?
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., productivity tips, morning routine, business advice"
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
                  <option value="motivational">Motivational</option>
                </select>
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

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Length
                </label>
                <select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="short">Short (1-2 sentences)</option>
                  <option value="medium">Medium (3-5 sentences)</option>
                  <option value="long">Long (6+ sentences)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  Free uses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateCaption}
                  disabled={!topic.trim() || isGenerating || usageCount >= 3}
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating...' : 'Generate Caption'}
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Generated Caption</h3>
                  {caption && (
                    <button
                      onClick={copyCaption}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy
                    </button>
                  )}
                </div>
                <div className="text-white/90 whitespace-pre-wrap leading-relaxed">
                  {caption || 'Your generated caption will appear here...'}
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
