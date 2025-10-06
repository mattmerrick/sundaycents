import type { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'The Best Tech Newsletters - SundayCents',
  description: 'Discover the best tech newsletters to stay updated with technology trends, startup news, and innovation. Our curated list of top tech newsletters for professionals and enthusiasts.',
  keywords: 'best tech newsletters, technology newsletter, tech news, startup newsletter, innovation newsletter, tech trends, software newsletter',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'The Best Tech Newsletters - SundayCents',
    description: 'Discover the best tech newsletters to stay updated with technology trends, startup news, and innovation.',
    type: 'article',
    url: 'https://sundaycents.com/newsletters/the-best-tech-newsletters',
    siteName: 'SundayCents',
    publishedTime: '2024-01-25T00:00:00.000Z',
    authors: ['Matt Merrick'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best Tech Newsletters - SundayCents',
    description: 'Discover the best tech newsletters to stay updated with technology trends, startup news, and innovation.',
  },
}

export default function BestTechNewsletters() {
  const newsletters = [
    {
      name: 'The Hustle',
      founded: 2016,
      subscribers: '2.5M+',
      schedule: 'Daily (Weekdays)',
      description: 'Business and tech news with a focus on startups, entrepreneurship, and innovation.',
      features: [
        'Startup Stories',
        'Tech Industry News',
        'Business Insights',
        'Entrepreneur Interviews',
        'Market Analysis'
      ],
      whySubscribe: 'Perfect for entrepreneurs and tech professionals who want engaging business content.',
      link: '#'
    },
    {
      name: 'TechCrunch',
      founded: 2005,
      subscribers: '3M+',
      schedule: 'Daily',
      description: 'The leading source for startup and technology news with comprehensive coverage.',
      features: [
        'Startup Funding News',
        'Product Launches',
        'Tech Industry Analysis',
        'Venture Capital Updates',
        'Breaking Tech News'
      ],
      whySubscribe: 'Essential reading for anyone in tech, startups, or venture capital.',
      link: '#'
    },
    {
      name: 'The Information',
      founded: 2013,
      subscribers: '200K+',
      schedule: 'Daily',
      description: 'Premium tech journalism with in-depth analysis and exclusive reporting.',
      features: [
        'Exclusive Tech Stories',
        'In-depth Analysis',
        'Industry Reports',
        'Executive Interviews',
        'Premium Content'
      ],
      whySubscribe: 'High-quality journalism with exclusive insights into the tech industry.',
      link: '#'
    },
    {
      name: 'Stratechery',
      founded: 2013,
      subscribers: '150K+',
      schedule: 'Weekly',
      description: 'Strategic analysis of the tech industry and business models.',
      features: [
        'Strategic Analysis',
        'Business Model Insights',
        'Tech Industry Commentary',
        'Long-form Articles',
        'Platform Strategy'
      ],
      whySubscribe: 'Deep strategic thinking about technology and business from industry expert Ben Thompson.',
      link: '#'
    },
    {
      name: 'Axios Pro',
      founded: 2016,
      subscribers: '500K+',
      schedule: 'Daily',
      description: 'Concise tech and business news with smart brevity.',
      features: [
        'Quick Tech Updates',
        'Business News',
        'Policy Analysis',
        'Market Insights',
        'Bullet-point Format'
      ],
      whySubscribe: 'Get the most important tech news in a quick, digestible format.',
      link: '#'
    },
    {
      name: 'The Verge',
      founded: 2011,
      subscribers: '1M+',
      schedule: 'Daily',
      description: 'Technology, science, art, and culture coverage with engaging storytelling.',
      features: [
        'Product Reviews',
        'Tech Culture',
        'Science Coverage',
        'Design Analysis',
        'Entertainment Tech'
      ],
      whySubscribe: 'Comprehensive tech coverage with excellent writing and engaging content.',
      link: '#'
    },
    {
      name: 'Ars Technica',
      founded: 1998,
      subscribers: '400K+',
      schedule: 'Daily',
      description: 'Technology news and analysis with a focus on technical depth.',
      features: [
        'Technical Analysis',
        'Security News',
        'Hardware Reviews',
        'Scientific Coverage',
        'Policy Analysis'
      ],
      whySubscribe: 'For tech professionals who want detailed, technical coverage.',
      link: '#'
    },
    {
      name: 'Protocol',
      founded: 2020,
      subscribers: '300K+',
      schedule: 'Daily',
      description: 'Tech industry news with a focus on enterprise and B2B technology.',
      features: [
        'Enterprise Tech',
        'B2B Analysis',
        'Industry Trends',
        'Corporate News',
        'Professional Insights'
      ],
      whySubscribe: 'Essential for professionals working in enterprise technology and B2B markets.',
      link: '#'
    },
    {
      name: 'First Round Review',
      founded: 2013,
      subscribers: '100K+',
      schedule: 'Weekly',
      description: 'Insights and lessons from startup founders and operators.',
      features: [
        'Startup Lessons',
        'Founder Interviews',
        'Operational Insights',
        'Growth Strategies',
        'Leadership Content'
      ],
      whySubscribe: 'Learn from successful entrepreneurs and startup operators.',
      link: '#'
    },
    {
      name: 'MIT Technology Review',
      founded: 1899,
      subscribers: '500K+',
      schedule: 'Weekly',
      description: 'Authoritative coverage of emerging technologies and their impact.',
      features: [
        'Emerging Technologies',
        'Scientific Research',
        'Future Trends',
        'Innovation Analysis',
        'Academic Perspective'
      ],
      whySubscribe: 'Stay ahead of emerging technologies with MIT\'s authoritative analysis.',
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
            The Best Tech Newsletters
          </h1>
          
          <div className="flex items-center style={{color: '#555555'}} text-sm mb-6">
            <span>January 25, 2025</span>
            <span className="mx-2">•</span>
            <span>by Matt Merrick</span>
          </div>
          
          <p className="text-xl style={{color: '#555555'}} leading-relaxed">
            The technology industry moves at breakneck speed, with new innovations, startup launches, and market shifts happening daily. 
            Staying informed about tech trends is crucial for professionals, entrepreneurs, and anyone interested in the future of technology.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg style={{color: '#555555'}} leading-relaxed mb-6">
            Whether you're a software engineer, startup founder, investor, or simply tech-curious, the right newsletters can keep you 
            ahead of the curve. We've curated the top tech newsletters that deliver breaking news, deep analysis, and insights that matter 
            in the fast-paced world of technology.
          </p>
          
          <div className="bg-blue-50 border-l-4 style={{border: '1px solid #0070F3'}} p-6 rounded-r-lg">
            <p className="text-blue-800 font-medium mb-2">🚀 Tech Tip</p>
            <p className="text-blue-700">
              The tech industry changes rapidly. Subscribe to a mix of breaking news sources and analytical newsletters 
              to stay both informed and thoughtful about technology trends.
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
                        <span className="style={{color: '#0070F3'}} mr-2">✓</span>
                        <span className="style={{color: '#555555'}}">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Why Subscribe?</h4>
                    <p className="text-blue-700">
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
                  
                  <button className="w-full mt-6 style={{backgroundColor: '#0070F3'}} hover:bg-blue-700 style={{color: '#FFFFFF'}} font-semibold py-3 px-4 rounded-lg transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold style={{color: '#111111'}} mb-6">Staying Ahead in Tech</h2>
          <p className="text-lg style={{color: '#555555'}} leading-relaxed mb-6">
            The technology industry rewards those who stay informed and anticipate trends. These newsletters provide the insights, 
            analysis, and breaking news you need to navigate the ever-changing tech landscape successfully.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-3">For Startup Founders</h3>
              <p className="style={{color: '#555555'}}">
                Focus on "The Hustle," "TechCrunch," and "First Round Review" for startup news, funding updates, and founder insights.
              </p>
            </div>
            
            <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6">
              <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-3">For Tech Professionals</h3>
              <p className="style={{color: '#555555'}}">
                Consider "The Information," "Protocol," and "Ars Technica" for in-depth technical analysis and industry insights.
              </p>
            </div>
          </div>

          <div className="mt-8 style={{backgroundColor: '#0070F3'}} rounded-lg p-6 style={{color: '#FFFFFF'}}">
            <h3 className="text-lg font-semibold mb-3">Ready to Build in Tech?</h3>
            <p className="mb-4">
              Whether you're building the next unicorn startup or advancing your tech career, 
              staying informed is the first step to success in the technology industry.
            </p>
            <a 
              href="/free-tools" 
              className="inline-block style={{backgroundColor: '#FFFFFF'}} style={{color: '#0070F3'}} font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Tech Tools
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <div className="style={{background: 'linear-gradient(to right, #0070F3, #FF5A5F)'}} rounded-lg p-8 style={{color: '#FFFFFF'}}">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with SundayCents</h2>
            <p className="style={{color: '#FFFFFF'}} mb-6">
              Get weekly insights on tech trends, entrepreneurship, and innovation delivered to your inbox.
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
