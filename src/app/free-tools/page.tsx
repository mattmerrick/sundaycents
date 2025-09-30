import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Tools - SundayCents',
  description: 'Free tools for entrepreneurs, content creators, and business owners. Social media tools, content generators, business calculators, and more.',
  keywords: 'free tools, social media tools, content creation, business tools, productivity tools',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Free Tools - SundayCents',
    description: 'Free tools for entrepreneurs, content creators, and business owners.',
    type: 'website',
  },
}

export default function FreeToolsPage() {
  const toolCategories = [
    {
      name: 'Social Media Tools',
      description: 'Generate hashtags, captions, and content ideas for your social media',
      icon: '📱',
      color: 'bg-pink-500',
      tools: [
        { name: 'Hashtag Generator', path: '/free-tools/hashtag-generator', description: 'Generate relevant hashtags for your posts' },
        { name: 'Caption Writer', path: '/free-tools/caption-writer', description: 'AI-powered social media captions' },
        { name: 'Content Ideas Generator', path: '/free-tools/content-ideas-generator', description: 'Never run out of content ideas again' }
      ]
    },
    {
      name: 'Content Creation',
      description: 'Tools to help you create engaging content for your audience',
      icon: '✍️',
      color: 'bg-blue-500',
      tools: [
        { name: 'Blog Title Generator', path: '/free-tools/blog-title-generator', description: 'Generate compelling blog post titles' },
        { name: 'Email Subject Generator', path: '/free-tools/email-subject-generator', description: 'Create click-worthy email subject lines' },
        { name: 'SEO Optimizer', path: '/free-tools/seo-optimizer', description: 'Optimize your content for search engines' },
        { name: 'Text Counter', path: '/free-tools/text-counter', description: 'Count characters, words, and sentences' },
        { name: 'Lorem Ipsum Generator', path: '/free-tools/lorem-ipsum-generator', description: 'Generate placeholder text for designs' }
      ]
    },
    {
      name: 'Business Tools',
      description: 'Essential calculators and tools for running your business',
      icon: '💼',
      color: 'bg-green-500',
      tools: [
        { name: 'Pricing Calculator', path: '/free-tools/pricing-calculator', description: 'Calculate optimal pricing for your products' },
        { name: 'Profit Margin Calculator', path: '/free-tools/profit-margin-calculator', description: 'Calculate your profit margins' },
        { name: 'Break-Even Calculator', path: '/free-tools/break-even-calculator', description: 'Find your break-even point' },
        { name: 'ROI Calculator', path: '/free-tools/roi-calculator', description: 'Calculate return on investment' }
      ]
    },
    {
      name: 'Productivity Tools',
      description: 'Tools to help you stay organized and productive',
      icon: '⚡',
      color: 'bg-purple-500',
      tools: [
        { name: 'Task Prioritizer', path: '/free-tools/task-prioritizer', description: 'Prioritize your tasks with AI' },
        { name: 'Time Tracker', path: '/free-tools/time-tracker', description: 'Track and analyze your time usage' },
        { name: 'Goal Tracker', path: '/free-tools/goal-tracker', description: 'Set and track your goals' }
      ]
    },
    {
      name: 'Financial Tools',
      description: 'Financial calculators and planning tools',
      icon: '💰',
      color: 'bg-yellow-500',
      tools: [
        { name: 'Compound Interest Calculator', path: '/compound-interest-calculator', description: 'Calculate compound interest growth' },
        { name: 'Investment Calculator', path: '/investment-calculator', description: 'Plan your investment strategy' },
        { name: 'Retirement Calculator', path: '/retirement-calculator', description: 'Plan for your retirement' },
        { name: 'Budget Calculator', path: '/budget-calculator', description: 'Create and manage your budget' }
      ]
    },
    {
      name: 'Design & Utility Tools',
      description: 'Tools for designers, developers, and general productivity',
      icon: '🎨',
      color: 'bg-indigo-500',
      tools: [
        { name: 'Color Palette Generator', path: '/free-tools/color-palette-generator', description: 'Generate beautiful color palettes' },
        { name: 'Password Generator', path: '/free-tools/password-generator', description: 'Generate secure passwords' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="text-white/80 hover:text-white transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Free Tools for Entrepreneurs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to grow your business, create content, and stay productive. 
              All tools are completely free to use.
            </p>
          </div>
          
          {/* Tool Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center text-2xl text-white mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                    <p className="text-white/80 text-sm">{category.tools.length} tools</p>
                  </div>
                </div>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <Link
                      key={toolIndex}
                      href={tool.path}
                      className="block bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-all duration-200 hover:scale-105"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white text-sm">{tool.name}</h3>
                          <p className="text-white/70 text-xs">{tool.description}</p>
                        </div>
                        <div className="text-white/60">→</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Need More Advanced Features?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get unlimited access to all tools plus premium features with our pro plan.
              </p>
              <Link 
                href="/subscribe"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-200 hover:scale-105"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
