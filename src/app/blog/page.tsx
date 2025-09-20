import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'
import { getAllBlogPosts, getFeaturedPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog - Matt Merrick',
  description: 'Blog posts about building a $1M solopreneur business. Real stories, real struggles, real wins.',
  openGraph: {
    title: 'Blog - Matt Merrick',
    description: 'Blog posts about building a $1M solopreneur business. Real stories, real struggles, real wins.',
    type: 'website',
  },
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedPosts()

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories about building a $1M solopreneur business. The struggles, the wins, and everything in between.
            </p>
          </div>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl">
                    <div className="flex items-center space-x-4 text-sm text-blue-100 mb-4">
                      <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-100 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
          
          {/* All Blog Posts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Posts</h2>
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <span className="text-blue-400 text-sm font-medium mb-2 md:mb-0">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
          
          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Want More Content Like This?
            </h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Get daily insights about building a $1M solopreneur business delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <EmailSignup variant="cta" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
