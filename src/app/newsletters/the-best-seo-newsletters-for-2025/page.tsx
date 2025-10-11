import type { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'The Best SEO Newsletters - SundayCents',
  description: 'Discover the best SEO newsletters to stay updated with search engine optimization trends, Google algorithm updates, and ranking strategies. Our curated list of top SEO newsletters.',
  keywords: 'best SEO newsletters, SEO newsletter, search engine optimization newsletter, Google SEO updates, SEO tips, digital marketing newsletter',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'The Best SEO Newsletters - SundayCents',
    description: 'Discover the best SEO newsletters to stay updated with search engine optimization trends and ranking strategies.',
    type: 'article',
    url: 'https://sundaycents.com/newsletters/the-best-seo-newsletters',
    siteName: 'SundayCents',
    publishedTime: '2025-01-25T00:00:00.000Z',
    authors: ['Matt Merrick'],
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'The Best SEO Newsletters - SundayCents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best SEO Newsletters - SundayCents',
    description: 'Discover the best SEO newsletters to stay updated with search engine optimization trends and ranking strategies.',
    images: ['/share.png'],
  },
}

export default function BestSEONewsletters() {
  const newsletters = [
    {
      name: 'Search Engine Land',
      founded: 2006,
      subscribers: '500K+',
      schedule: 'Daily',
      description: 'The leading publication for search engine optimization news and insights.',
      features: [
        'Google Algorithm Updates',
        'SEO Best Practices',
        'Industry News',
        'Case Studies',
        'Expert Interviews'
      ],
      whySubscribe: 'Essential reading for SEO professionals and digital marketers.',
      link: '#'
    },
    {
      name: 'Moz Top 10',
      founded: 2004,
      subscribers: '300K+',
      schedule: 'Weekly',
      description: 'Weekly roundup of the most important SEO news and updates.',
      features: [
        'Weekly SEO Roundup',
        'Algorithm Update Analysis',
        'Tool Updates',
        'Industry Insights',
        'Quick Reads'
      ],
      whySubscribe: 'Get the most important SEO news in a digestible weekly format.',
      link: '#'
    },
    {
      name: 'Ahrefs Digest',
      founded: 2011,
      subscribers: '200K+',
      schedule: 'Weekly',
      description: 'SEO insights and case studies from the Ahrefs team and community.',
      features: [
        'SEO Case Studies',
        'Link Building Tips',
        'Content Marketing',
        'Keyword Research',
        'Technical SEO'
      ],
      whySubscribe: 'Learn from real SEO case studies and proven strategies.',
      link: '#'
    },
    {
      name: 'SEMrush Newsletter',
      founded: 2008,
      subscribers: '400K+',
      schedule: 'Weekly',
      description: 'Digital marketing insights with a focus on SEO and competitive analysis.',
      features: [
        'SEO Strategies',
        'Competitive Analysis',
        'Content Marketing',
        'PPC Insights',
        'Market Research'
      ],
      whySubscribe: 'Comprehensive digital marketing insights with actionable SEO tips.',
      link: '#'
    },
    {
      name: 'Screaming Frog SEO Spider',
      founded: 2010,
      subscribers: '150K+',
      schedule: 'Monthly',
      description: 'Technical SEO insights and tool updates from the Screaming Frog team.',
      features: [
        'Technical SEO Tips',
        'Crawl Analysis',
        'Tool Updates',
        'Site Audit Insights',
        'Performance Optimization'
      ],
      whySubscribe: 'Master technical SEO with expert insights and tool guidance.',
      link: '#'
    },
    {
      name: 'Search Engine Journal',
      founded: 2003,
      subscribers: '600K+',
      schedule: 'Daily',
      description: 'Comprehensive SEO and digital marketing news and analysis.',
      features: [
        'SEO News',
        'Algorithm Updates',
        'Industry Analysis',
        'Expert Opinions',
        'Best Practices'
      ],
      whySubscribe: 'Stay informed with comprehensive SEO coverage and expert analysis.',
      link: '#'
    },
    {
      name: 'Backlinko',
      founded: 2013,
      subscribers: '250K+',
      schedule: 'Weekly',
      description: 'Advanced SEO strategies and link building techniques from Brian Dean.',
      features: [
        'Link Building Strategies',
        'Advanced SEO Tactics',
        'Content Marketing',
        'Case Studies',
        'Expert Insights'
      ],
      whySubscribe: 'Learn advanced SEO strategies from one of the industry\'s leading experts.',
      link: '#'
    },
    {
      name: 'Yoast SEO',
      founded: 2010,
      subscribers: '300K+',
      schedule: 'Weekly',
      description: 'WordPress SEO tips and insights from the Yoast team.',
      features: [
        'WordPress SEO',
        'Content Optimization',
        'Technical SEO',
        'Plugin Updates',
        'Best Practices'
      ],
      whySubscribe: 'Essential for WordPress users looking to optimize their sites for search engines.',
      link: '#'
    },
    {
      name: 'SearchPilot',
      founded: 2018,
      subscribers: '50K+',
      schedule: 'Monthly',
      description: 'Enterprise SEO insights and large-scale optimization strategies.',
      features: [
        'Enterprise SEO',
        'Large-scale Optimization',
        'Technical Insights',
        'Performance Analysis',
        'Industry Trends'
      ],
      whySubscribe: 'Advanced SEO strategies for large websites and enterprise clients.',
      link: '#'
    },
    {
      name: 'The SEO Mindset',
      founded: 2020,
      subscribers: '100K+',
      schedule: 'Weekly',
      description: 'Strategic SEO thinking and long-term optimization approaches.',
      features: [
        'Strategic SEO',
        'Long-term Planning',
        'Mindset & Psychology',
        'Business Growth',
        'Future Trends'
      ],
      whySubscribe: 'Develop the strategic thinking needed for long-term SEO success.',
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen style={{backgroundColor: '#FFFFFF'}}">
      <article className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <a 
              href="/newsletters" 
              className="style={{color: '#0070F3'}} hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
            >
              ← Back to Newsletters
            </a>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#111111'}} mb-6 leading-tight">
            The Best SEO Newsletters
          </h1>
          
          <div className="flex items-center style={{color: '#555555'}} text-sm mb-6">
            <span>January 25, 2025</span>
            <span className="mx-2">•</span>
            <span>by Matt Merrick</span>
          </div>
          
          <p className="text-xl style={{color: '#555555'}} leading-relaxed">
            Search engine optimization is constantly evolving, with Google algorithm updates, new ranking factors, and changing user behaviors. 
            Staying informed about SEO trends and best practices is crucial for anyone looking to improve their online visibility and organic traffic.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg style={{color: '#555555'}} leading-relaxed mb-6">
            Whether you're an SEO professional, digital marketer, content creator, or business owner, the right newsletters can keep you ahead 
            of algorithm changes and ranking updates. We've curated the top SEO newsletters that deliver actionable insights, industry news, 
            and proven strategies for improving search rankings.
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <p className="text-orange-800 font-medium mb-2">🔍 SEO Tip</p>
            <p className="text-orange-700">
              Google makes thousands of algorithm updates each year. Subscribe to multiple SEO newsletters to ensure you don't miss 
              important changes that could affect your rankings.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold style={{color: '#111111'}} mb-6">Table of Contents</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-2 style={{color: '#555555'}}">
              {newsletters.map((newsletter, index) => (
                <li key={index} className="flex items-center">
                  <span className="font-medium mr-3">{index + 1}.</span>
                  <a 
                    href={`#${newsletter.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:style={{color: '#0070F3'}} transition-colors"
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
                <h2 className="text-3xl font-bold style={{color: '#111111'}}">
                  {index + 1}. {newsletter.name}
                </h2>
                <div className="text-right text-sm style={{color: '#555555'}}">
                  <div>Founded: {newsletter.founded}</div>
                  <div>{newsletter.subscribers} subscribers</div>
                  <div>{newsletter.schedule}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-4">What is this newsletter about?</h3>
                  <p className="style={{color: '#555555'}} leading-relaxed mb-6">
                    {newsletter.description}
                  </p>

                  <h4 className="text-lg font-semibold style={{color: '#111111'}} mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {newsletter.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-orange-600 mr-2">✓</span>
                        <span className="style={{color: '#555555'}}">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">Why Subscribe?</h4>
                    <p className="text-orange-700">
                      {newsletter.whySubscribe}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold style={{color: '#111111'}} mb-4">Newsletter Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="style={{color: '#555555'}}">Founded:</span>
                      <span className="font-medium">{newsletter.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="style={{color: '#555555'}}">Subscribers:</span>
                      <span className="font-medium">{newsletter.subscribers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="style={{color: '#555555'}}">Schedule:</span>
                      <span className="font-medium">{newsletter.schedule}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 style={{color: '#FFFFFF'}} font-semibold py-3 px-4 rounded-lg transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold style={{color: '#111111'}} mb-6">Mastering SEO in 2025</h2>
          <p className="text-lg style={{color: '#555555'}} leading-relaxed mb-6">
            SEO success in 2025 requires staying informed about algorithm changes, understanding user intent, and implementing 
            best practices consistently. These newsletters provide the knowledge and insights you need to build a sustainable 
            organic traffic strategy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-3">For Beginners</h3>
              <p className="style={{color: '#555555'}}">
                Start with "Moz Top 10" and "Yoast SEO" for foundational knowledge and WordPress-specific guidance.
              </p>
            </div>
            
            <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-3">For Advanced SEOs</h3>
              <p className="style={{color: '#555555'}}">
                Consider "Backlinko," "SearchPilot," and "The SEO Mindset" for advanced strategies and enterprise-level insights.
              </p>
            </div>
          </div>

          <div className="mt-8 style={{backgroundColor: '#0070F3'}} rounded-lg p-6 style={{color: '#FFFFFF'}}">
            <h3 className="text-lg font-semibold mb-3">Ready to Improve Your SEO?</h3>
            <p className="mb-4">
              Stay ahead of algorithm updates and implement proven SEO strategies with insights from industry experts.
            </p>
            <a 
              href="/free-tools/seo-optimizer" 
              className="inline-block style={{backgroundColor: '#FFFFFF'}} style={{color: '#0070F3'}} font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try Our Free SEO Optimizer Tool
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <div className="style={{background: 'linear-gradient(to right, #0070F3, #FF5A5F)'}} rounded-lg p-8 style={{color: '#FFFFFF'}}">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with SundayCents</h2>
            <p className="style={{color: '#FFFFFF'}} mb-6">
              Get weekly insights on SEO, digital marketing, and online business growth delivered to your inbox.
            </p>
            <a 
              href="/subscribe" 
              className="inline-block style={{backgroundColor: '#FFFFFF'}} style={{color: '#0070F3'}} font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
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
