import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '10 Climate Newsletters Worth Reading Now',
  description:
    'A curated list of climate newsletters covering policy, science, finance, and community resilience for informed readers.',
  keywords: [
    'climate newsletters',
    'climate policy email',
    'climate science briefings',
    'climate finance newsletter',
    'resilience newsletters',
  ],
  openGraph: {
    title: '10 Climate Newsletters Worth Reading Now',
    description:
      'A curated list of climate newsletters covering policy, science, finance, and community resilience for informed readers.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Climate Newsletters Worth Reading Now',
    description:
      'A curated list of climate newsletters covering policy, science, finance, and community resilience for informed readers.',
  },
}

export default function ClimateNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>10 Climate Newsletters Worth Reading Now</h1>

        <p>
          Climate news moves fast. Headlines shift from global treaties to local flooding in a single day, and shallow
          takes spread before fact checks land.
        </p>

        <p>
          Trusted newsletters slow the scroll. They gather verified data, track policy drafts, and surface frontline
          voices that rarely trend.
        </p>

        <p>
          Start with two or three titles below. Rotate subscriptions each quarter to match the projects and campaigns on
          your calendar.
        </p>

        <h2>1. Heated</h2>
        <p>
          Journalist Emily Atkin publishes Heated for readers who want accountability reporting on fossil fuel
          influence. Each issue dissects lobbying moves, regulatory filings, and PR spin.
        </p>
        <p>
          Subscribers receive deep dives that connect climate science with political power maps.
        </p>

        <h2>2. The Climate Brink</h2>
        <p>
          Climate scientist Zeke Hausfather and tech leader Andrew Freedman co-write The Climate Brink with plain-language
          breakdowns of warming trends. Charts and open datasets back every claim.
        </p>
        <p>
          Read it to stay current on IPCC updates and emerging measurement tools.
        </p>

        <h2>3. Carbon Brief Daily</h2>
        <p>
          Carbon Brief Daily compiles top headlines from around the world. It links to primary sources and highlights
          data-heavy analyses from researchers and agencies.
        </p>
        <p>
          The concise briefing lands early so policy teams and newsroom editors can plan coverage.
        </p>

        <h2>4. Canary Media Current</h2>
        <p>
          Canary Media focuses on clean energy deployment. The Current newsletter distills grid upgrades, storage
          breakthroughs, and state-level regulatory moves.
        </p>
        <p>
          Product managers and investors use it to track market momentum across solar, wind, and transmission.
        </p>

        <h2>5. Drilled</h2>
        <p>
          Drilled pairs investigative reporting with legal analysis of climate accountability cases. Issues include
          transcripts, document excerpts, and contextual timelines.
        </p>
        <p>
          Activists and litigators rely on its archive when preparing public comment campaigns.
        </p>

        <h2>6. Nexus Media News</h2>
        <p>
          Nexus Media News spotlights climate justice stories that mainstream outlets overlook. The newsletter lifts up
          community planners, tribal leaders, and public health advocates.
        </p>
        <p>
          Expect practical examples of resilience projects and local policy wins.
        </p>

        <h2>7. Volts</h2>
        <p>
          David Roberts writes Volts with sharp analysis of energy policy debates. He interrogates legislative language
          and interviews experts who shape implementation.
        </p>
        <p>
          The mix of podcasts and transcripts fits both commuters and desk-based readers.
        </p>

        <h2>8. Bloomberg Green Daily</h2>
        <p>
          Bloomberg Green Daily blends market coverage with climate science reporting. Analysts track carbon pricing,
          climate risk disclosures, and sustainable finance trends.
        </p>
        <p>
          Executives subscribe for timely intel ahead of board briefings and investor updates.
        </p>

        <h2>9. Warm Regards</h2>
        <p>
          Warm Regards approaches climate storytelling through personal narratives. Episodes and emails feature
          scientists, activists, and artists reflecting on lived experience.
        </p>
        <p>
          The tone feels intimate and stays grounded in published research.
        </p>

        <h2>10. The Cooler Earth</h2>
        <p>
          The Cooler Earth tracks corporate climate commitments with scorecards and timeline reminders. Editors call out
          greenwashing and highlight verifiable progress.
        </p>
        <p>
          Sustainability officers forward it to cross-functional teams ahead of quarterly reviews.
        </p>

        <h2>Build a Focused Reading Routine</h2>
        <p>
          Create a dedicated folder in your inbox and set rules that route climate emails into that space. Batch-read
          them during the same time block each week.
        </p>

        <p>
          Pin one actionable takeaway per issue in a shared document. Revisit the list at monthly planning meetings and
          assign owners for follow-up.
        </p>

        <p>
          Curated newsletters turn sprawling climate news into a steady flow of context and accountability. Treat the
          inbox as a briefing room that fuels informed action.
        </p>
      </section>
    </main>
  )
}


