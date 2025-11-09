import type { Metadata } from 'next'
import Link from 'next/link'
import BlogNewsletterCTA from '@/components/BlogNewsletterCTA'
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

  const canonicalUrl = `https://www.mattmerrick.com/blog/${post.id}`

  return {
    title: post.seoTitle || `${post.title} - Matt Merrick`,
    description: post.seoDescription || `Read ${post.title} on Matt Merrick's blog about building a $1M solopreneur business`,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle || `${post.title} - Matt Merrick`,
      description: post.seoDescription || `Read ${post.title} on Matt Merrick's blog about building a $1M solopreneur business`,
      type: 'article',
      url: canonicalUrl,
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
    <main className='min-h-screen' style={{backgroundColor: '#FFFFFF'}}>
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
                "url": "https://mattmerrick.com/share.png"
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
      {/* Breadcrumbs */}
      <nav className="max-w-4xl mx-auto px-4 pt-8 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">
            {post.title}
          </li>
        </ol>
      </nav>
      
      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#111111'}}>
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-base mb-8" style={{color: '#555555'}}>
              <span className="font-medium" style={{color: '#0070F3'}}>{post.category}</span>
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

      {/* External Resources */}
      {post.resources && post.resources.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Explore the Resources Mentioned
            </h2>
            <ul className="space-y-3 text-lg text-blue-600">
              {post.resources.map(({ label, url }) => (
                <li key={url}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-800 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='py-16' style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}}>
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#111111'}}>
              Related Posts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className='p-6 rounded-lg hover:shadow-lg transition-shadow' style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}}
                >
                  <div className="text-sm font-medium mb-2" style={{color: '#0070F3'}}>
                    {relatedPost.category}
                  </div>
                  <h4 className="font-semibold mb-2 line-clamp-2" style={{color: '#111111'}}>
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm line-clamp-3" style={{color: '#555555'}}>
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogNewsletterCTA />

      <Footer />
    </main>
  )
}
