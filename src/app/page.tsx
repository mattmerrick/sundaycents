import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import HomepageStats from '@/components/HomepageStats'

export const metadata: Metadata = {
  title: 'Learn to Write Words That Sell | Matt Merrick',
  description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
  keywords: 'copywriting, persuasive writing, sales copy, newsletter business, writing to sell, Matt Merrick',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: 'https://www.mattmerrick.com/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Learn to Write Words That Sell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn to Write Words That Sell | Matt Merrick',
    description: 'Master the art of persuasive writing and build a $1M business through words. Join thousands learning to write copy that converts and scales.',
    images: ['https://www.mattmerrick.com/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            I’m writing a daily newsletter to prove you can build an audience with consistency
          </h1>

          <div className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
            <p>
              I share everything I learn — each day is different. The concept is simple.
            </p>
          </div>

          <div className="mt-6">
            <EmailSignup 
              variant="hero" 
              placeholder="Enter your email"
              buttonLabel="Sign me up"
              note="No fluff. No spam. Unsubscribe anytime."
              buttonBgColor="#FFFFFF"
              buttonTextColor="#111111"
            />
          </div>

          <div className="mt-6">
            <HomepageStats />
          </div>

        <section className="mt-10">
          <div className="space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              You may be wondering why on earth is this guy writing a newsletter every single day. The answer may surprise you or it may not.
            </p>
            <p>
              You see we have to go back to when i was born......Naw, I'm just kidding. Who has time to learn how to take my first step, go to my first basketball game, and go on my first date to the MOVIES without cell phones? Hello AIM (anyone). Yeah, we don't have time for that.
            </p>
            <p>
              You see what I have done my entire life is jump from idea to idea. I've made some money while doing it over the years. I killed it during the affiliate link rush and build a website on streaming PC's that was netting me good money. I got accepted into Amazon's Merch by Amazon early on and killed it while out of college. I build and sold newsletters to famous/not famous people(3 in total to be exact). I bought and sold NFTs like Crypto Punks, Kongz, and others while trading ETH to just lose it all and cash out to early. To most recently losing my job twice in 2 years while building my side businesses with AI.
            </p>
            <p>
              All of which netted me over $50,000 in just 1 year of running them. Ran out of money, had to sell my 401k , retirement, take out 2 loans, and max my credit cards + sell all 10 of my side hustles and 140+ of my domain names, all just to stay afloat.
            </p>
            <p>
              So you see I am all over the place. So for me, this newsletter is my next chapter. My fresh start.
            </p>
            <p>
              I have learned a lot over the years and I've bought into the guru's(experts) and everything in between. The truth is the only thing that matters is consistency. I would always jump from project to project, and then I'd ask myself, Could I have done better if I had just focused on one? I think so, and people would message me saying Matt, you switch too much what you're working on now.
            </p>
            <p>
              If you have read every single line of this, then I feel like you have to subscribe because now we are blood. I wrote my entire life story on the interwebs and have been building it up publicly. So if you were wondering why the hero of the page says what it does.
            </p>
            <p>
              Now you know....
            </p>
          </div>
        </section>
        </div>
      </main>

      <footer className="bg-neutral-950 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/blog"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/newsletters"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Newsletters
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Tools
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/free-tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Free Tools
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}