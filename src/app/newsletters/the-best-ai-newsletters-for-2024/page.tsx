import type { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'The Best AI Newsletters - SundayCents',
  description: 'Discover the best AI newsletters to stay updated with artificial intelligence trends, tools, and insights. Our curated list of top AI newsletters for entrepreneurs and professionals.',
  keywords: 'best AI newsletters, AI newsletter, artificial intelligence newsletter, AI tools, AI trends, tech newsletters, AI updates, machine learning newsletter',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'The Best AI Newsletters - SundayCents',
    description: 'Discover the best AI newsletters to stay updated with artificial intelligence trends, tools, and insights.',
    type: 'article',
    url: 'https://sundaycents.com/newsletters/the-best-ai-newsletters',
    siteName: 'SundayCents',
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['Matt Merrick'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best AI Newsletters - SundayCents',
    description: 'Discover the best AI newsletters to stay updated with artificial intelligence trends, tools, and insights.',
  },
}

export default function BestAINewsletters() {
  const newsletters = [
    {
      name: 'TLDR AI',
      founded: 2023,
      subscribers: '1.2M+',
      schedule: 'Daily (Monday-Friday)',
      description: 'One of the biggest tech-focused newsletters expanded into AI with 500,000+ subscribers.',
      features: [
        'Headlines & Launches',
        'Research & Innovation', 
        'Engineering & Resources',
        'Miscellaneous',
        'Quick Links'
      ],
      whySubscribe: 'Fastest-growing newsletter in the AI space with the proven TLDR format.',
      link: '#'
    },
    {
      name: 'Healthcare AI News',
      founded: 2023,
      subscribers: '55K+',
      schedule: 'Weekly',
      description: 'Comprehensive coverage of AI in healthcare with unique formatting.',
      features: [
        'Healthcare Headlines',
        'Industry Updates',
        'Feature Articles',
        'Interesting Reads',
        'Tech Developments',
        'Venture Pipelines'
      ],
      whySubscribe: 'Essential for anyone interested in AI\'s impact on healthcare.',
      link: '#'
    },
    {
      name: 'The Rundown',
      founded: 2021,
      subscribers: '300K+',
      schedule: 'Daily',
      description: 'Finds AI news before you do with a solid database of best AI applications.',
      features: [
        'Breaking AI News',
        'Tool Database',
        'Industry Insights',
        'Early Access Content'
      ],
      whySubscribe: 'Trusted by readers from Microsoft, Tesla, NASA, and Meta.',
      link: '#'
    },
    {
      name: 'The Neurons',
      founded: 2021,
      subscribers: '250K+',
      schedule: 'Daily',
      description: 'Fast-growing newsletter focusing on how AI affects everyday life.',
      features: [
        'Daily AI Updates',
        'Real-world AI Applications',
        'Impact Analysis',
        'Practical Insights'
      ],
      whySubscribe: 'One of the most original AI newsletters with loyal readership.',
      link: '#'
    },
    {
      name: 'The AI Entrepreneurs',
      founded: 2021,
      subscribers: '75K+',
      schedule: 'Daily',
      description: 'Brings AI power to your email with premium ChatGPT prompts.',
      features: [
        '100+ ChatGPT Prompts',
        'Entrepreneur Focus',
        'AI Business Strategies',
        'Productivity Tips'
      ],
      whySubscribe: 'Get 100 premium prompts just for signing up - worth the subscription alone.',
      link: '#'
    },
    {
      name: 'Import AI',
      founded: 2018,
      subscribers: '36K+',
      schedule: 'Weekly',
      description: 'Weekly newsletter perfect for non-technical readers.',
      features: [
        'Non-technical Explanations',
        'Industry Overview',
        'Accessible Content',
        'Expert Insights'
      ],
      whySubscribe: 'Written by industry expert Jack since 2018 with deep AI knowledge.',
      link: '#'
    },
    {
      name: 'AI Weekly',
      founded: 2018,
      subscribers: 'Unknown',
      schedule: 'Weekly',
      description: 'Comprehensive weekly roundup of everything happening in AI.',
      features: [
        'Weekly AI Summary',
        'Industry Overview',
        'Compact Format',
        'Well-written Content'
      ],
      whySubscribe: 'Perfect for those who want AI insights without daily emails.',
      link: '#'
    },
    {
      name: 'The Copilot',
      founded: 2023,
      subscribers: '5K+',
      schedule: 'Weekly',
      description: 'Action-packed weekly email by Ex-McKinsey & MIT alumni.',
      features: [
        'Weekly AI Summary',
        'Executive Insights',
        'Strategic Analysis',
        'High-quality Content'
      ],
      whySubscribe: 'Rapidly growing with premium content from top-tier backgrounds.',
      link: '#'
    },
    {
      name: 'AI Tool Report',
      founded: 2023,
      subscribers: '100K+',
      schedule: 'Daily',
      description: 'Teaches productivity with AI tools, prompts, and strategies.',
      features: [
        'AI Productivity Tips',
        'Tool Reviews',
        'Prompt Strategies',
        'Practical Applications'
      ],
      whySubscribe: 'Learn to become a faster producer with proven AI strategies.',
      link: '#'
    },
    {
      name: 'Techpresso',
      founded: 2023,
      subscribers: '10K+',
      schedule: 'Daily',
      description: 'Machine learning-powered curation from 50+ tech news sites.',
      features: [
        'Personalized Content',
        'Machine Learning Curation',
        '50+ Source Aggregation',
        'Engagement-based Learning'
      ],
      whySubscribe: 'Say goodbye to manual news browsing with personalized tech content.',
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <a 
              href="/newsletters" 
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
            >
              ← Back to Newsletters
            </a>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Best AI Newsletters
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>January 15, 2025</span>
            <span className="mx-2">•</span>
            <span>by Matt Merrick</span>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            The world of AI has been moving fast, and it's hard to keep up even for the most dedicated professionals. 
            Thankfully, there are amazing authors and curators who have taken on the job of doing all the research for us, 
            allowing you to get the content you want in minutes instead of hours.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With so much content in the AI space, it only makes sense to sign up for the best artificial intelligence newsletters. 
            We've organized a comprehensive list of the top AI newsletters that will keep you informed, productive, and ahead of the curve.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-800 font-medium mb-2">💡 Pro Tip</p>
            <p className="text-blue-700">
              Subscribe to 2-3 newsletters that match your specific interests rather than trying to read them all. 
              Quality over quantity will save you time and keep you focused.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-2 text-gray-700">
              {newsletters.map((newsletter, index) => (
                <li key={index} className="flex items-center">
                  <span className="font-medium mr-3">{index + 1}.</span>
                  <a 
                    href={`#${newsletter.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {newsletter.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Newsletter Reviews */}
        <section className="space-y-12">
          {newsletters.map((newsletter, index) => (
            <div key={index} id={newsletter.name.toLowerCase().replace(/\s+/g, '-')} className="border-b border-gray-200 pb-12">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {index + 1}. {newsletter.name}
                </h2>
                <div className="text-right text-sm text-gray-600">
                  <div>Founded: {newsletter.founded}</div>
                  <div>{newsletter.subscribers} subscribers</div>
                  <div>{newsletter.schedule}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What is this newsletter about?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {newsletter.description}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {newsletter.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Why Subscribe?</h4>
                    <p className="text-green-700">
                      {newsletter.whySubscribe}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Newsletter Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founded:</span>
                      <span className="font-medium">{newsletter.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subscribers:</span>
                      <span className="font-medium">{newsletter.subscribers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schedule:</span>
                      <span className="font-medium">{newsletter.schedule}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Before You Go...</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In an industry as fast-moving as AI, it's virtually impossible to pick the single best AI newsletter as more come out daily. 
            The key is finding newsletters that align with your specific interests and goals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Entrepreneurs</h3>
              <p className="text-gray-700">
                Focus on newsletters like "The AI Entrepreneurs" and "AI Tool Report" that provide practical business applications and productivity tips.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Technical Professionals</h3>
              <p className="text-gray-700">
                Consider "TLDR AI" and "The Rundown" for in-depth technical insights and early access to new developments.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-3">Ready to Start Your Own AI Newsletter?</h3>
            <p className="mb-4">
              If you're AI-obsessed, there's no better time to start your own newsletter on AI. 
              The market is growing rapidly, and quality content is always in demand.
            </p>
            <a 
              href="/subscribe" 
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with SundayCents</h2>
            <p className="text-blue-100 mb-6">
              Get weekly insights on AI, productivity, and entrepreneurship delivered to your inbox.
            </p>
            <a 
              href="/subscribe" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe to SundayCents Newsletter
            </a>
          </div>
        </section>
      </article>

      {/* CTA Component */}
      <CTA />
    </main>
  )
}
