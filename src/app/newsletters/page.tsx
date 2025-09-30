import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Articles - SundayCents',
  description: 'Discover the best newsletters and learn how to create successful email marketing campaigns. Expert insights on newsletter strategies and top industry newsletters.',
  keywords: 'newsletter articles, email marketing, best newsletters, newsletter strategy, email campaigns, newsletter tips',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'Newsletter Articles - SundayCents',
    description: 'Discover the best newsletters and learn how to create successful email marketing campaigns.',
    type: 'website',
    url: 'https://sundaycents.com/newsletters',
    siteName: 'SundayCents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter Articles - SundayCents',
    description: 'Discover the best newsletters and learn how to create successful email marketing campaigns.',
  },
}

export default function NewslettersPage() {
  const articles = [
    {
      title: 'The Best AI Newsletters',
      excerpt: 'Discover the top AI newsletters to stay updated with artificial intelligence trends, tools, and insights for entrepreneurs and professionals.',
      slug: 'the-best-ai-newsletters',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI & Technology',
      featured: true,
      image: '/newsletters/ai-newsletters.jpg'
    },
    {
      title: 'The Best Investing Newsletters',
      excerpt: 'Stay informed about markets, stocks, and investment strategies with our curated list of top investment newsletters.',
      slug: 'the-best-investing-newsletters',
      date: 'January 20, 2025',
      readTime: '10 min read',
      category: 'Finance & Investing',
      featured: false,
      image: '/newsletters/investing-newsletters.jpg'
    },
    {
      title: 'The Best Tech Newsletters',
      excerpt: 'Stay ahead of technology trends, startup news, and innovation with the best tech newsletters for professionals.',
      slug: 'the-best-tech-newsletters',
      date: 'January 25, 2025',
      readTime: '9 min read',
      category: 'AI & Technology',
      featured: false,
      image: '/newsletters/tech-newsletters.jpg'
    },
    {
      title: 'The Best SEO Newsletters',
      excerpt: 'Stay updated with search engine optimization trends, Google algorithm updates, and ranking strategies.',
      slug: 'the-best-seo-newsletters',
      date: 'January 25, 2025',
      readTime: '8 min read',
      category: 'Digital Marketing',
      featured: false,
      image: '/newsletters/seo-newsletters.jpg'
    }
  ]

  const categories = [
    'All Articles',
    'AI & Technology',
    'Finance & Investing',
    'Digital Marketing',
    'Business Strategy', 
    'Tools & Resources',
    'Case Studies'
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
              Newsletter Articles
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the best newsletters, learn email marketing strategies, and get insights 
              from successful newsletter creators and entrepreneurs.
            </p>
          </div>

          {/* Featured Article */}
          {articles.find(article => article.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                {(() => {
                  const featured = articles.find(article => article.featured)!
                  return (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                          <span className="text-white/80 text-sm">{featured.category}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {featured.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed mb-6">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
                          <span>{featured.date}</span>
                          <span>•</span>
                          <span>{featured.readTime}</span>
                        </div>
                        <Link
                          href={`/newsletters/${featured.slug}`}
                          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 hover:scale-105"
                        >
                          Read Article →
                        </Link>
                      </div>
                      <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                        <span className="text-white/60">Article Image</span>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    index === 0 
                      ? 'bg-white text-blue-600' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-white/60 text-xs mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <Link
                  href={`/newsletters/${article.slug}`}
                  className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Want More Newsletter Insights?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get weekly insights on newsletter strategies, email marketing tips, and business growth 
                delivered directly to your inbox.
              </p>
              <Link 
                href="/subscribe"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-200 hover:scale-105"
              >
                Subscribe to SundayCents Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
