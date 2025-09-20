import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'
import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts, type BlogPost } from '@/lib/blog-posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Matt Merrick',
    }
  }

  return {
    title: post.seoTitle || `${post.title} - Matt Merrick`,
    description: post.seoDescription || `Read ${post.title} on Matt Merrick's blog about building a $1M solopreneur business`,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.seoTitle || `${post.title} - Matt Merrick`,
      description: post.seoDescription || `Read ${post.title} on Matt Merrick's blog about building a $1M solopreneur business`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Matt Merrick'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || `${post.title} - Matt Merrick`,
      description: post.seoDescription || `Read ${post.title} on Matt Merrick's blog about building a $1M solopreneur business`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/blog" 
          className="text-gray-400 hover:text-white transition-colors flex items-center"
        >
          ← Back to Blog
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-base text-gray-400 mb-12">
              <span className="text-blue-400 font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join 100's of others learning about solopreneurship every day
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Get daily insights about building a $1M solopreneur business delivered to your inbox. 
              Real stories from someone actually doing it.
            </p>
            <div className="max-w-md mx-auto">
              <EmailSignup variant="cta" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="prose prose-xl prose-invert max-w-none text-white leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Related Posts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="text-blue-400 text-sm font-medium mb-2">
                    {relatedPost.category}
                  </div>
                  <h4 className="text-white font-semibold mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Newsletter CTA */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Want more content like this?
            </h3>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Join 100's of others learning about solopreneurship every day. 
              Get daily insights delivered to your inbox.
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
