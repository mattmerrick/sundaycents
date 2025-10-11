import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tools I Use - Matt Merrick',
  description: 'The tools I use to build my $1M solopreneur business. Email Octopus, DataFast, and Typefully.',
  keywords: 'Matt Merrick, tools, solopreneur, business tools, email marketing, analytics',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Tools I Use - Matt Merrick',
    description: 'The tools I use to build my $1M solopreneur business. Email Octopus, DataFast, and Typefully.',
    type: 'website',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Tools I Use - Matt Merrick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools I Use - Matt Merrick',
    description: 'The tools I use to build my $1M solopreneur business. Email Octopus, DataFast, and Typefully.',
    images: ['/share.png'],
  },
}

export default function ToolsPage() {
  const tools = [
    {
      name: 'Email Octopus',
      description: 'Email marketing platform for sending newsletters and managing subscribers',
      url: 'https://emailoctopus.com/?urli=6jMWh',
      price: 'Free Plan',
      category: 'Email Marketing',
      icon: '📧',
      features: [
        'Newsletter management',
        'Subscriber analytics',
        'Email automation',
        'Template library'
      ]
    },
    {
      name: 'DataFast',
      description: 'Analytics and tracking platform for website performance and user behavior',
      url: 'https://datafa.st/?via=matt',
      price: '$9/month',
      category: 'Analytics',
      icon: '📊',
      features: [
        'Website analytics',
        'User tracking',
        'Performance metrics',
        'Real-time data'
      ]
    },
    {
      name: 'Typefully',
      description: 'Social media management and scheduling platform for Twitter/X',
      url: 'https://typefully.com/?via=newslettermm',
      price: '$12.50/month',
      category: 'Social Media',
      icon: '🐦',
      features: [
        'Tweet scheduling',
        'Thread creation',
        'Analytics dashboard',
        'Content calendar'
      ]
    }
  ]

  const totalMonthlyCost = 9 + 12.50 // $21.50/month

  return (
    <main className="min-h-screen style={{backgroundColor: '#0070F3'}}">
          {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="style={{color: '#FFFFFF'}} hover:style={{color: '#FFFFFF'}} transition-colors flex items-center"
          >
            ← Back to Home
          </Link>
          <Link 
            href="/free-tools" 
            className="style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Free Tools →
          </Link>
        </div>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
              Tools I Use to Build This Business
            </h1>
            <p className="text-xl style={{color: '#FFFFFF'}} max-w-2xl mx-auto">
              The complete toolkit for building a $1M solopreneur business. 
              Total monthly cost: <span className="font-semibold style={{color: '#FFFFFF'}}">${totalMonthlyCost}/month</span>
            </p>
          </div>
          
          {/* Tools Grid */}
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {tools.map((tool, index) => (
              <div key={index} className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold style={{color: '#FFFFFF'}} mb-2">{tool.name}</h2>
                      <span className="text-sm style={{color: '#FFFFFF'}} style={{backgroundColor: '#FFFFFF'}}/10 px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold style={{color: '#FFFFFF'}}">{tool.price}</div>
                    <div className="text-sm style={{color: '#FFFFFF'}}">per month</div>
                  </div>
                </div>
                
                <p className="text-blue-50 leading-relaxed mb-6">
                  {tool.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-50 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block style={{backgroundColor: '#FFFFFF'}}/20 hover:style={{backgroundColor: '#FFFFFF'}}/30 style={{color: '#FFFFFF'}} font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Visit {tool.name} →
                </a>
              </div>
            ))}
          </div>
          
          {/* Cost Breakdown */}
          <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl text-center">
            <h2 className="text-2xl font-bold style={{color: '#FFFFFF'}} mb-4">Monthly Cost Breakdown</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}}">$0</div>
                <div className="style={{color: '#FFFFFF'}}">Email Octopus</div>
                <div className="text-sm text-blue-200">Free Plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}}">$9</div>
                <div className="style={{color: '#FFFFFF'}}">DataFast</div>
                <div className="text-sm text-blue-200">Analytics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}}">$12.50</div>
                <div className="style={{color: '#FFFFFF'}}">Typefully</div>
                <div className="text-sm text-blue-200">Social Media</div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6">
              <div className="text-4xl font-bold style={{color: '#FFFFFF'}} mb-2">$21.50</div>
              <div className="style={{color: '#FFFFFF'}} text-lg">Total Monthly Cost</div>
              <div className="text-sm text-blue-200 mt-2">
                Building a $1M business for less than $22/month
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
