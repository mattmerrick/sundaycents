'use client'

import { useState } from 'react'

export default function EmailSubjectGenerator() {
  const [topic, setTopic] = useState('')
  const [emailType, setEmailType] = useState('newsletter')
  const [tone, setTone] = useState('professional')
  const [subjectLines, setSubjectLines] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const subjectTemplates = {
    newsletter: {
      professional: [
        'Weekly Insights: {topic} Trends You Need to Know',
        'Your {topic} Update: What\'s Happening This Week',
        'Industry Report: Latest {topic} Developments',
        'Expert Analysis: {topic} Market Update',
        'Weekly Roundup: {topic} News and Insights',
        'Market Update: {topic} Trends and Opportunities',
        'Professional Brief: {topic} Industry Insights',
        'Weekly Report: {topic} Analysis and Predictions',
        'Industry Update: {topic} Market Intelligence',
        'Weekly Insights: {topic} Professional Perspective'
      ],
      casual: [
        'Quick update on {topic} (you\'ll want to see this)',
        'What\'s new in {topic} this week?',
        'Hey! Here\'s what\'s happening with {topic}',
        'Your weekly {topic} roundup is here',
        'Just dropping by with some {topic} news',
        'Quick {topic} update (takes 2 mins to read)',
        'What I learned about {topic} this week',
        'Your friendly {topic} update',
        'Here\'s what\'s cool in {topic} right now',
        'Quick {topic} insights (no fluff)'
      ],
      urgent: [
        'URGENT: {topic} Update You Can\'t Miss',
        'Breaking: {topic} News Alert',
        'Time-Sensitive: {topic} Information',
        'Important {topic} Update (Action Required)',
        'Last Chance: {topic} Opportunity Closing Soon',
        'Deadline Alert: {topic} Update',
        'Final Notice: {topic} Information',
        'Immediate Action: {topic} Update',
        'Critical: {topic} Information Inside',
        'Urgent: {topic} Update for Today'
      ]
    },
    promotional: {
      professional: [
        'Exclusive {topic} Offer for Subscribers',
        'Special {topic} Deal: Limited Time Only',
        'Professional {topic} Solution Available',
        'Premium {topic} Service: 20% Off',
        'Business {topic} Package: Special Pricing',
        'Enterprise {topic} Solution: Exclusive Access',
        'Professional {topic} Tools: Discount Inside',
        'Premium {topic} Resources: Limited Offer',
        'Business {topic} Bundle: Special Rate',
        'Professional {topic} Service: Exclusive Deal'
      ],
      casual: [
        'Hey! Special {topic} deal just for you',
        'Your exclusive {topic} discount is here',
        'Limited time: {topic} offer inside',
        'Quick {topic} deal you\'ll love',
        'Your {topic} savings are waiting',
        'Special {topic} price (just for you)',
        'Don\'t miss this {topic} deal',
        'Your {topic} discount is ready',
        'Limited {topic} offer - grab it now',
        'Special {topic} deal inside'
      ],
      urgent: [
        'LAST CHANCE: {topic} Deal Expires Soon',
        'Final Hours: {topic} Discount Ending',
        'Urgent: {topic} Offer Closing Today',
        'Don\'t Miss: {topic} Deal Expires Tonight',
        'Last Call: {topic} Special Price',
        'Final Notice: {topic} Discount Ending',
        'Expires Soon: {topic} Limited Offer',
        'Today Only: {topic} Special Deal',
        'Last Day: {topic} Discount Available',
        'Final Hours: {topic} Offer Expiring'
      ]
    },
    educational: {
      professional: [
        'Learn: Advanced {topic} Strategies',
        'Educational: {topic} Best Practices',
        'Training: {topic} Professional Development',
        'Workshop: {topic} Skills Enhancement',
        'Course: {topic} Mastery Program',
        'Learning: {topic} Expert Techniques',
        'Education: {topic} Professional Skills',
        'Training: {topic} Advanced Methods',
        'Workshop: {topic} Professional Training',
        'Learning: {topic} Expert Knowledge'
      ],
      casual: [
        'Learn {topic} the easy way',
        'Quick {topic} lesson (you\'ll love this)',
        'Want to master {topic}? Start here',
        'Simple {topic} tips that work',
        'Learn {topic} without the overwhelm',
        'Your {topic} learning journey starts here',
        'Master {topic} with these simple steps',
        'Learn {topic} like a pro',
        'Easy {topic} tutorial inside',
        'Your {topic} learning guide'
      ],
      urgent: [
        'Limited Time: {topic} Training Access',
        'Exclusive: {topic} Learning Opportunity',
        'Final Days: {topic} Course Enrollment',
        'Last Chance: {topic} Training Program',
        'Limited Access: {topic} Educational Content',
        'Exclusive: {topic} Learning Experience',
        'Final Opportunity: {topic} Training',
        'Limited Time: {topic} Educational Access',
        'Last Call: {topic} Learning Program',
        'Final Days: {topic} Training Access'
      ]
    }
  }

  const generateSubjectLines = async () => {
    if (!topic.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const templates = subjectTemplates[emailType as keyof typeof subjectTemplates]?.[tone as keyof typeof subjectTemplates.newsletter] || subjectTemplates.newsletter.professional
    
    const generatedSubjects = templates
      .map(template => template.replace(/{topic}/g, topic))
      .slice(0, 10)
    
    setSubjectLines(generatedSubjects)
    setUsageCount(prev => prev + 1)
    setIsGenerating(false)
  }

  const copySubject = (subject: string) => {
    navigator.clipboard.writeText(subject)
    alert('Subject line copied to clipboard!')
  }

  const copyAllSubjects = () => {
    navigator.clipboard.writeText(subjectLines.join('\n'))
    alert('All subject lines copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Email Subject Line Generator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Generate high-converting email subject lines that increase open rates and drive engagement.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Email Preferences</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Topic/Content
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., productivity tips, business advice, newsletter"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Type
                </label>
                <select
                  value={emailType}
                  onChange={(e) => setEmailType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="newsletter">Newsletter</option>
                  <option value="promotional">Promotional</option>
                  <option value="educational">Educational</option>
                </select>
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
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  Free uses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={generateSubjectLines}
                  disabled={!topic.trim() || isGenerating || usageCount >= 3}
                  className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating...' : 'Generate Subject Lines'}
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white/10 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Generated Subject Lines</h3>
                  {subjectLines.length > 0 && (
                    <button
                      onClick={copyAllSubjects}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Copy All
                    </button>
                  )}
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {subjectLines.length > 0 ? (
                    subjectLines.map((subject, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer group"
                        onClick={() => copySubject(subject)}
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-white/90 text-sm leading-relaxed flex-1">
                            {subject}
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
                        Enter your topic and click "Generate Subject Lines" to see suggestions
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
            <h3 className="text-lg font-semibold text-white mb-4">💡 Email Subject Line Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Keep subject lines under 50 characters</li>
                <li>• Use action words and power words</li>
                <li>• Create curiosity without being misleading</li>
                <li>• Test different subject lines</li>
              </ul>
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Avoid spam trigger words</li>
                <li>• Personalize when possible</li>
                <li>• Use numbers and emojis sparingly</li>
                <li>• A/B test for best results</li>
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
