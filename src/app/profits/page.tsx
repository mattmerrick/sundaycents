import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consistency Milestones - Matt Merrick',
  description: 'I am writing daily. Here are the most important consistency milestones grounded in research and popular challenges.',
  keywords: 'consistency, habit formation, milestones, 66 days, 100-day challenge, identity-based habits',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
}

function getCurrentDayNumber(): number {
  const startDate = new Date('2025-09-19T00:00:00-05:00')
  const now = new Date()
  const timeDiffMs = now.getTime() - startDate.getTime()
  const daysDiff = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24))
  return daysDiff >= 0 ? daysDiff + 1 : 0
}

export default function ConsistencyMilestonesPage() {
  const dayNumber = getCurrentDayNumber()
  
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="style={{color: '#FFFFFF'}} hover:style={{color: '#FFFFFF'}} transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{color: '#FFFFFF'}}>
              I am on Day {dayNumber}
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{color: '#6B7280'}}>
              Here are some important milestones while trying to be consistent
            </p>
          </div>

          <div className="rounded-2xl p-8 border shadow-xl space-y-8" style={{backgroundColor: '#111111', border: '1px solid #6B7280'}}>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#FFFFFF'}}>The Research-Backed Milestone</h2>
              <p className="leading-relaxed" style={{color: '#E5E7EB'}}>
                <strong>66 days (on average) to automaticity</strong> — In a 12-week study by Lally et al. (2009), habits took a median of ~66 days to feel automatic, with a wide range from <strong>18 to 254 days</strong>. Missing one day did not meaningfully affect long-term formation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#FFFFFF'}}>Popular (But Useful) Milestones</h2>
              <ul className="list-disc list-inside space-y-2" style={{color: '#E5E7EB'}}>
                <li><strong>7 days</strong>: One full week. You’ve proven you can show up. Friction drops.</li>
                <li><strong>21 days</strong>: The famous myth. Not science, but a good early checkpoint.</li>
                <li><strong>28–30 days</strong>: Four weeks/a month. You start to see compounding and clearer identity shifts.</li>
                <li><strong>66 days</strong>: Evidence-based target for many people, not a hard rule.</li>
                <li><strong>75 days</strong>: Popular “75 Hard” challenge length (discipline + multiple daily actions).</li>
                <li><strong>90 days</strong>: One quarter. Systems feel stable; results begin to reflect consistency.</li>
                <li><strong>100 days</strong>: The 100‑Day Challenge. Powerful for public accountability and momentum.</li>
                <li><strong>6 months</strong>: Lifestyle territory. Variability is normal; process resilience matters.</li>
                <li><strong>365 days</strong>: Identity locked in. A year of reps creates undeniable proof.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#FFFFFF'}}>What to Expect as You Progress</h2>
              <ul className="list-disc list-inside space-y-2" style={{color: '#E5E7EB'}}>
                <li><strong>Early days</strong>: High friction, high variance. Focus on tiny wins and fixed time blocks.</li>
                <li><strong>Weeks 2–4</strong>: Routine stabilizes. Track streaks; reduce decision fatigue with checklists.</li>
                <li><strong>Days 30–66</strong>: Results compound. Expect plateaus; avoid overfitting to motivation.</li>
                <li><strong>Post‑66</strong>: Behavior feels more automatic. Systems &gt; goals; consistency survives low‑energy days.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#FFFFFF'}}>Practical Tips to Stay Consistent</h2>
              <ul className="list-disc list-inside space-y-2" style={{color: '#E5E7EB'}}>
                <li><strong>Anchor it</strong>: Same time, same place. Reduce variables.</li>
                <li><strong>Make it binary</strong>: Done/not done. Avoid vague targets.</li>
                <li><strong>Lower the bar</strong>: Minimum viable rep (e.g., 5 minutes) keeps the streak alive.</li>
                <li><strong>Public scoreboard</strong>: Share progress. Accountability multiplies effort.</li>
                <li><strong>Miss once, never twice</strong>: Slips happen; compound recovery, not guilt.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#FFFFFF'}}>Where I Am Today</h2>
              <p className="leading-relaxed" style={{color: '#E5E7EB'}}>
                Today is <strong>Day {dayNumber}</strong>. I’m tracking progress publicly and focusing on <strong>consistency over intensity</strong>. The goal is to make the action automatic — the outcomes will follow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
