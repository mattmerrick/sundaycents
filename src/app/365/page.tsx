import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Latest Daily Email - Matt Merrick',
  description: 'Yesterday\'s issue, formatted cleanly with the site\'s look and feel. One daily email, every day.',
  robots: 'index, follow',
}

function getYesterdaysDateString(): string {
  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ThreeSixtyFivePage() {
  const publishedDate = getYesterdaysDateString()

  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/"
            className="text-white hover:text-neutral-300 transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="w-full max-w-md">
            <EmailSignup variant="hero" placeholder="Enter your email" buttonLabel="Sign me up" buttonBgColor="#FFFFFF" buttonTextColor="#111111" note="No fluff. No spam. Unsubscribe anytime." />
          </div>
        </div>

        {/* Date */}
        <div className="text-center mb-10">
          <p className="text-sm" style={{color: '#6B7280'}}>Yesterday\'s Issue • {publishedDate}</p>
        </div>

        {/* Article Card */}
        <article className="rounded-2xl p-8 border shadow-xl max-w-none mx-auto" style={{backgroundColor: '#111111', border: '1px solid #6B7280'}}>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Acquiring users is the most crucial aspect for any business. As a solopreneur, it's the most crucial and difficult part.</p>

            <p>I was never a good marketing (I'm still not working on it), but if you are like me and trying to build a business solo.</p>

            <p>It's not easy... I have been writing this newsletter daily for the past 21 days, and I've seen a few things + know a few things from previous products.</p>

            <p>I know my time will get even less when I start my new job next week.</p>

            <p>So, how do you attract new users while you sleep?</p>

            <p>Automations..... and X Articles.</p>

            <p>Now... here me out. I recently published an article on X and it has done decent. You can read it here(make sure to like, comment etc it helps me out). The article was simple and it was my firt test at using it.</p>

            <p>My plan is simple. Write 1 post a day use it all on all socials in different formats....</p>

            <p>How? It's simple.</p>

            <p>I write my post/topic in a google doc. No edits, no AI, just me and my thoughts and the article/post I'm trying to publish.</p>

            <p>Once i finish, i'm ready for the next step. Cleaning it up.</p>

            <p>I run it through ChatGPT to fix grammar errors and punctuation errors. Then i re copy it to my google doc as a new verision.</p>

            <p>I have Grammarly Pro, so I take this time to check if ChatGPT made any errors and read over the blog post one more time before publishing it to X, LinkedIn, Medium, Threads, Reddit(if it makes sense) my blog, and now X articles.</p>

            <p>1 piece of writing, spread out to 6 different places. That's 6 times it can go viral all from 20-30 minutes of work.</p>

            <p>This is why AI is your friend as a solopreneur. I just completed my entire day of marketing in under half an hour. Allowing you to get back to what matters... building your business.</p>

            <p>For example; i use SuperX to schedule some of my content. THis allows me to focus on finding more content or simply just finishing a few things in the house.</p>

            <p>You can use chatgpt or any of the writing tools as well but none of them are as good as the Super X + chatgpt does a decent job for you.</p>

            <p>P.S. - I am putting together a free 5-day email course on soloprenurship, so look out for the invite to that.</p>
          </div>
        </article>
      </div>
    </main>
  )
}
