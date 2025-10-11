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
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Blog - Matt Merrick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Matt Merrick',
    description: 'Blog posts about building a $1M solopreneur business. Real stories, real struggles, real wins.',
    images: ['/share.png'],
  },
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedPosts()

  return (
    <main className='min-h-screen' style={{backgroundColor: '#111111'}}>
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="transition-colors flex items-center hover:style={{color: '#FFFFFF'}}" style={{color: '#6B7280'}}
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: '#FFFFFF'}}>
              Blog
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{color: '#6B7280'}}>
              Real stories about building a $1M solopreneur business. The struggles, the wins, and everything in between.
            </p>
          </div>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8" style={{color: '#FFFFFF'}}>Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className='p-8 rounded-2xl' style={{background: 'linear-gradient(to bottom right, #0070F3, #FF5A5F)'}}>
                    <div className="flex items-center space-x-4 text-sm mb-4" style={{color: '#FFFFFF'}}>
                      <span className='px-3 py-1 rounded-full text-xs font-medium' style={{backgroundColor: '#FFFFFF', color: '#0070F3'}}>
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4" style={{color: '#FFFFFF'}}>
                      <Link href={`/blog/${post.id}`} className="transition-colors hover:style={{color: '#0070F3'}}" style={{color: '#FFFFFF'}}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="mb-6 leading-relaxed" style={{color: '#FFFFFF'}}>
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center transition-colors font-medium hover:style={{color: '#0070F3'}}" style={{color: '#FFFFFF'}}
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
            <h2 className="text-2xl font-bold mb-8" style={{color: '#FFFFFF'}}>All Posts</h2>
            {blogPosts.map((post) => (
              <article key={post.id} className='p-8 rounded-2xl transition-colors hover:border-blue-400' style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <span className="text-sm font-medium mb-2 md:mb-0" style={{color: '#0070F3'}}>
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm" style={{color: '#6B7280'}}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 transition-colors hover:style={{color: '#0070F3'}}" style={{color: '#111111'}}>
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="mb-6 leading-relaxed" style={{color: '#555555'}}>
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center transition-colors font-medium hover:style={{color: '#0070F3'}}" style={{color: '#0070F3'}}
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
          
          {/* Newsletter CTA */}
          <div className='mt-20 p-12 rounded-2xl text-center' style={{background: 'linear-gradient(to right, #0070F3, #FF5A5F)'}}>
            <h3 className="text-3xl font-bold mb-6" style={{color: '#FFFFFF'}}>
              Want More Content Like This?
            </h3>
            <p className="mb-10 text-lg leading-relaxed max-w-2xl mx-auto" style={{color: '#FFFFFF'}}>
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
