import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HeroDayCounter from '@/components/HeroDayCounter'

export const metadata: Metadata = {
  title: 'Subscribe If you Want to Learn.',
  description: 'Get smarter every morning at 6am.',
  keywords: 'solopreneur, solo business, side hustle, audience building, newsletter, Matt Merrick, 5-day course',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/'
  },
  openGraph: {
    title: 'Subscribe if you want to learn. | Matt Merrick',
    description: 'Get smarter every morning at 6am.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Get smarter every morning at 6am',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get smarter every morning at 6am | Matt Merrick',
    description: 'A daily newsletter to make you think.',
    images: ['/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #040404 0%, #0c0c12 48%, #050505 100%)',
          color: '#f5f5f5',
        }}
      >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif text-white">
              <HeroDayCounter className="text-emerald-300 sm:text-emerald-400" /> of writing a daily newsletter
          </h1>

          <div className="mt-6">
            <EmailSignup
              variant="hero"
              placeholder="Enter your email"
              buttonLabel="Get the 6 AM Email &rarr;"
              note="No Spam. No Fluff. No AI. Unsubscribe Anytime."
              buttonBgColor="#f9fafb"
              buttonTextColor="#0f0f18"
            />
          </div>

          <div className="text-base sm:text-lg mt-6 text-blue-100/80">
          No Spam, No Fluff, No AI. <br></br><HeroDayCounter className="text-emerald-300 font-medium" /> of <Link href="/latest" className="text-blue-200 hover:text-blue-100 transition-colors underline font-medium">one email a day</Link>.
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-2xl p-8 sm:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.55)] space-y-6"
            style={{
              background: 'rgba(13,13,21,0.92)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What is this Newsletter?
            </h2>

            <p className="text-lg text-blue-100/90 leading-relaxed">
              Sup? My name is Matt and I have done lots of things on the internet over the years. But one thing I never did was stay consistent and stick to one product.
            </p>

            <p className="text-lg text-blue-100/90 leading-relaxed">
              So after having a rough time over a two-year period with no money, I knew it was time for a change. So I started this newsletter. It&apos;s my unfiltered, unapologetic, no rhyme or reason newsletter. I take a topic like water and turn it into a life lesson.
            </p>

            <p className="text-lg text-blue-100/90 leading-relaxed">
              The goal is simple: write this every single day for as many days as I need to make this my full-time income, then continue to write till I can&apos;t write anymore. Simple yet fun. You get it all daily. This newsletter isn&apos;t like any other.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/10" style={{ background: '#050505' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-300">
          <div className="flex justify-center space-x-8">
            <Link 
              href="https://medium.com/@mattmerrick"
              className="text-gray-200 hover:text-blue-200 transition-colors font-medium"
            >
              Medium
            </Link>
            <span className="text-gray-600">/</span>
            <Link 
              href="https://x.com/mattmerrick16"
              className="text-gray-200 hover:text-blue-200 transition-colors font-medium"
            >
              X
            </Link>
            <span className="text-gray-600">/</span>
            <Link 
              href="https://mattmerrick.com/latest"
              className="text-gray-200 hover:text-blue-200 transition-colors font-medium"
            >
              Latest
            </Link>
            <span className="text-gray-600">/</span>
            <Link 
              href="https://provenideas.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-200 transition-colors font-medium"
            >
              Proven Ideas
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}