'use client'

import { useState } from 'react'

interface SEOAnalysis {
  title: string
  metaDescription: string
  keywordDensity: number
  readabilityScore: number
  suggestions: string[]
  score: number
}

export default function SEOOptimizer() {
  const [content, setContent] = useState('')
  const [targetKeyword, setTargetKeyword] = useState('')
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [usageCount, setUsageCount] = useState(0)

  const analyzeContent = async () => {
    if (!content.trim() || !targetKeyword.trim()) return
    
    if (usageCount >= 3) {
      alert('You\'ve reached the free usage limit. Please upgrade to continue using this tool.')
      return
    }

    setIsAnalyzing(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Basic SEO analysis
    const wordCount = content.split(/\s+/).length
    const keywordCount = (content.toLowerCase().match(new RegExp(targetKeyword.toLowerCase(), 'g')) || []).length
    const keywordDensity = (keywordCount / wordCount) * 100
    
    // Calculate readability (simplified Flesch Reading Ease)
    const sentences = content.split(/[.!?]+/).length
    const syllables = content.split(/\s+/).reduce((acc, word) => acc + Math.max(1, word.length / 3), 0)
    const readabilityScore = Math.max(0, Math.min(100, 206.835 - (1.015 * (wordCount / sentences)) - (84.6 * (syllables / wordCount))))
    
    // Generate suggestions
    const suggestions: string[] = []
    
    if (content.length < 300) {
      suggestions.push('Content is too short. Aim for at least 300 words for better SEO.')
    }
    
    if (keywordDensity < 1) {
      suggestions.push('Keyword density is too low. Include your target keyword more naturally.')
    } else if (keywordDensity > 3) {
      suggestions.push('Keyword density is too high. Reduce keyword usage to avoid over-optimization.')
    }
    
    if (readabilityScore < 60) {
      suggestions.push('Content readability could be improved. Use shorter sentences and simpler words.')
    }
    
    if (!content.toLowerCase().includes(targetKeyword.toLowerCase())) {
      suggestions.push('Target keyword not found in content. Include it naturally in your text.')
    }
    
    if (sentences < 5) {
      suggestions.push('Consider adding more sentences for better content structure.')
    }
    
    if (wordCount < 500) {
      suggestions.push('Longer content typically performs better. Consider expanding to 500+ words.')
    }
    
    // Generate title and meta description
    const title = content.split('\n')[0]?.substring(0, 60) || `${targetKeyword} - Complete Guide`
    const metaDescription = content.substring(0, 155) + (content.length > 155 ? '...' : '')
    
    // Calculate overall score
    let score = 100
    if (content.length < 300) score -= 20
    if (keywordDensity < 1 || keywordDensity > 3) score -= 15
    if (readabilityScore < 60) score -= 10
    if (!content.toLowerCase().includes(targetKeyword.toLowerCase())) score -= 25
    if (wordCount < 500) score -= 10
    
    const analysis: SEOAnalysis = {
      title,
      metaDescription,
      keywordDensity: Math.round(keywordDensity * 100) / 100,
      readabilityScore: Math.round(readabilityScore),
      suggestions,
      score: Math.max(0, score)
    }
    
    setAnalysis(analysis)
    setUsageCount(prev => prev + 1)
    setIsAnalyzing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Fair'
    return 'Needs Work'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            SEO Content Optimizer
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Analyze and optimize your content for search engines. Improve rankings with our free SEO analyzer.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Content Input</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Target Keyword
                </label>
                <input
                  type="text"
                  value={targetKeyword}
                  onChange={(e) => setTargetKeyword(e.target.value)}
                  placeholder="e.g., productivity tips, business advice"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Content to Analyze
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Paste your content here for SEO analysis..."
                  rows={12}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
                <p className="text-white/60 text-xs mt-1">
                  {content.length} characters, {content.split(/\s+/).length} words
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  Free analyses remaining: {3 - usageCount}/3
                </div>
                <button
                  onClick={analyzeContent}
                  disabled={!content.trim() || !targetKeyword.trim() || isAnalyzing || usageCount >= 3}
                  className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">SEO Analysis</h2>
              
              {analysis ? (
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Overall Score</h3>
                      <span className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                        {analysis.score}/100
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-teal-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${analysis.score}%` }}
                      ></div>
                    </div>
                    <p className={`text-sm mt-2 ${getScoreColor(analysis.score)}`}>
                      {getScoreLabel(analysis.score)}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-white/80 mb-2">Keyword Density</h4>
                      <div className="text-xl font-bold text-blue-400">
                        {analysis.keywordDensity}%
                      </div>
                      <p className="text-white/60 text-xs">
                        Target: 1-3%
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-white/80 mb-2">Readability</h4>
                      <div className="text-xl font-bold text-purple-400">
                        {analysis.readabilityScore}/100
                      </div>
                      <p className="text-white/60 text-xs">
                        Flesch Reading Ease
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-white/80 mb-3">Suggested Meta Tags</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/60 text-xs mb-1">Title (60 chars)</p>
                        <p className="text-white/90 text-sm bg-white/10 p-2 rounded">
                          {analysis.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs mb-1">Meta Description (155 chars)</p>
                        <p className="text-white/90 text-sm bg-white/10 p-2 rounded">
                          {analysis.metaDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {analysis.suggestions.length > 0 && (
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-white mb-3">💡 Suggestions for Improvement</h4>
                      <ul className="text-white/90 text-sm space-y-2">
                        {analysis.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <p className="text-white/60">
                    Enter your content and target keyword, then click "Analyze Content" to see SEO insights
                  </p>
                </div>
              )}
            </div>
          </div>

          {usageCount >= 3 && (
            <div className="mt-8 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Upgrade for Unlimited Access</h3>
              <p className="text-white/90 mb-4">
                You've used all your free analyses. Upgrade to continue using this tool unlimited times.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Upgrade Now
              </button>
            </div>
          )}

          <div className="mt-8 bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">🎯 SEO Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Use target keyword in title and first paragraph</li>
                <li>• Maintain 1-3% keyword density</li>
                <li>• Write 300+ words for better rankings</li>
                <li>• Use headers (H1, H2, H3) for structure</li>
              </ul>
              <ul className="text-white/90 text-sm space-y-2">
                <li>• Keep title under 60 characters</li>
                <li>• Meta description should be 150-155 characters</li>
                <li>• Write for readability (60+ Flesch score)</li>
                <li>• Include internal and external links</li>
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
