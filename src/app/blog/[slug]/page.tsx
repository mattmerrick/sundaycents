import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts, getAllBlogPosts, type BlogPost } from '@/lib/blog-posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.id,
  }))
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
    <main className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.seoDescription || post.excerpt,
            "author": {
              "@type": "Person",
              "name": "Matt Merrick",
              "url": "https://mattmerrick.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Matt Merrick",
              "url": "https://mattmerrick.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mattmerrick.com/opengraph-image.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://mattmerrick.com/blog/${post.id}`
            },
            "articleSection": post.category,
            "keywords": post.tags.join(", "),
            "wordCount": post.content.split(' ').length,
            "timeRequired": post.readTime,
            "inLanguage": "en-US"
          })
        }}
      />
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/blog" 
          className="text-gray-600 hover:text-black transition-colors flex items-center"
        >
          ← Back to Blog
        </Link>
      </div>
      
      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-base text-gray-600 mb-8">
              <span className="text-blue-600 font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="prose prose-xl prose-gray max-w-none leading-relaxed
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:font-extrabold
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:font-bold
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:font-semibold
              prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-7
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ul:mb-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Component */}
      <CTA />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Related Posts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="text-blue-600 text-sm font-medium mb-2">
                    {relatedPost.category}
                  </div>
                  <h4 className="text-black font-semibold mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
