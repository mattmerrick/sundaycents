import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '365 Days of Writing - Matt Merrick',
  description: 'Follow my 365-day journey of writing an email a day to get better at writing emails.',
  keywords: 'Matt Merrick, 365 days, writing, email, solopreneur, journey',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
}

export default function ThreeSixtyFivePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/"
            className="inline-block text-primary-400 hover:text-primary-300 transition-colors mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">365 days of writing an email a day to get better at writing emails</h1>
          <p className="text-gray-400 text-lg">
            My daily journey of building a solopreneur business
          </p>
        </div>

        {/* Email 3 */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Email #3</h2>
              <span className="text-sm text-gray-400">Find your customers</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                At the end of the day everything is a sell. You are selling something. It can range from liking an Instagram photo of your family to selling a digital product to your email list.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                You are always doing something that involves a sale.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                The hardest part isn't the sale.... It's finding the right customers. Yesterday, Justin Welsh published his weekly newsletter, which is a big inspiration to me. He has figured out this solo business model and he really understands how to market.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                You can read his entire issue here: <a href="#" className="text-primary-400 hover:text-primary-300">Leverage is the solopreneur cheat code</a>
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                In a nutshell he broke down exactly how you need to build an audience and i'm gonna steal some of his tactics to grow my followings over the next few months.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                He said this:
              </p>
              
              <blockquote className="border-l-4 border-primary-400 pl-6 my-6 italic text-gray-300">
                "But now I follow the 5-12-3 rule, which makes my life a heck of a lot easier. Every piece of content must work in 5 seconds (the hook grabs attention), remain relevant 12 months later (try your best for evergreen value), and function across at least three platforms (repurposing)."
              </blockquote>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                So it got me thinking. I need to focus on this in my space and start producing high quality content I can share across all socials.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                SO it's time to lock in and grow my customer base(subscribers) to a level that most haven't seen.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I have 3 new subscribers from yesterday and my content is starting to be seen by a bigger audience. I plan to keep growing this newsletter and as mentioned before this is my only focus.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Have a good Sunday & talk tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Email 2 */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Email #2</h2>
              <span className="text-sm text-gray-400">Building towards 50k</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                It's been a crazy 2 years since i joined the X community of indie hackers.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I've built lots of stuff and had plenty of failures. But i've had quite a few successes.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Niche Tools, Build The Idea, Under2k, to name a few. All of which did well for me.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                The best one ? Niche Tools. Did over 50k in total sales. I also sold it and bought it back( a story for another day).
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Why am I saying all this? Simple. This newsletter's goal is to generate 50k in revenue in one year. We are only on day 2. So we got a long way to go.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I also don't want to sell sponsorships and want to keep this personal. We will see how i sprinkle in some of these ideas.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I wanna work on my storytelling. It's an art form that i'd love to master. Keeping you reading to the very last line. I know how quickly I move on the next thing.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                So what is the goal of this newsletter? It's simple. Improve everyday & build it into a 1 million dollar business. How? Not sure but i'm ready to try.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                So we keep writing and we will see what it brings me.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Until tomorrow!
              </p>
            </div>
          </div>
        </div>

        {/* Email 1 */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Email #1</h2>
              <span className="text-sm text-gray-400">The beginning</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                I promise this is the last time i'm swapping topics! Look if you have followed me you know i go from one thing to another. The crazy thing is I always wanted to stick to one thing and one thing only for a year.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I've had plenty of people tell me I need to and show people about different ways i talk and write and just really be myself. Talk about what i want on X, post what i want on here and just not worry about the money and fame.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                So here's the deal. Today is Issue #1. I am going to write for the next 365 days about anything I want. I'll focus on what i'm interested on like finance news, crypto, ideas, side hustles etc but sometimes I may talk about how my kids were horrible and what i looked up as a dad. The point is, i'm just gonna write everyday and see what happens. I'll also post it to medium and see the type of following I grow just talking about my thoughts.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I hope you follow me on the journey. See you tomorrow with topic #1
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Share this with a friend because this is gonna get juicy. Oh i'm gonna be transparent also. So today we have 32 subscribers.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Let's document it all.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center py-12">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 border-dashed">
            <h3 className="text-xl font-semibold text-white mb-4">More Emails Coming Soon</h3>
            <p className="text-gray-400">
              This page will be updated daily with new email entries as the journey continues.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
