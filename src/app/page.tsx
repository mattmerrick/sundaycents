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
              You may be wondering <strong>why on earth is this guy writing a newsletter every single day</strong>. <strong>The answer may suprise you</strong> or it may not.
            </p>
            <p>
              You see we have to go back to when i was born......<strong>Naw i'm just kidding</strong> who has time to learn how me taking my first step, going to my first basketball game, going on my first date to the MOVIES without cell phones. Hello AIM (anyone). <strong>Yea we don't got time for that.</strong>
            </p>
            <p>
              You see what I have done my entire life is <strong>jump from idea to idea</strong>. I've made some money while doing it over the years. I killed it during the <strong>affiliate link rush</strong> and build a website on streaming PC's that was netting me good money. I got accepted into <strong>Amazon's merch by amazon</strong> early on and killed it while out of college. I <strong>build and sold newsletters</strong> to famous/not famous people(3 in total to be exact). I bought and sold <strong>NFTs like Crypto Punks, Kongz</strong>, and others while trading ETH to just lose it all and cash out to early. To most recently <strong>losing my job twice in 2 years</strong> while building my side businesses with AI.
            </p>
            <p>
              All of which netted me over <strong>$50,000 in just 1 year</strong> of running them. Ran out of money had to <strong>sell my 401k , retirement, take out 2 loans and max my credit cards + Sell all 10 of my side hustles and 140+ of my domain names</strong> all just to stay afloat.
            </p>
            <p>
              So you see I am all over the place. So for me <strong>this newsletter is my next chapter. My fresh start.</strong>
            </p>
            <p>
              I have learned alot of the years and i've bought into the guru's(experts) and everything in between. <strong>The truth is the only thing that matters is conisenty.</strong> I always would jump project to project and then i'd ask myself could I have done better with just <strong>focus on one</strong>. I think so and people would message me saying Matt you switch to much what you working on now.
            </p>
            <p>
              If you have read every single line of this then I feel like you <strong>have to subscribe</strong> because now we are blood. I wrote my entire life story on the interwebs and have been building in public about it. So if you were wondering why the hero of the page says what it does.
            </p>
            <p>
              <strong>Now you know....</strong>
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