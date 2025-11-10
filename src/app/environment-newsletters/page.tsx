import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '10 Environment Newsletters with Real Impact',
  description:
    'Discover environment newsletters that cover conservation, biodiversity, pollution control, and grassroots advocacy with clear action steps.',
  keywords: [
    'environment newsletters',
    'conservation newsletters',
    'biodiversity email updates',
    'pollution control newsletter',
    'environmental advocacy email',
  ],
  openGraph: {
    title: '10 Environment Newsletters with Real Impact',
    description:
      'Discover environment newsletters that cover conservation, biodiversity, pollution control, and grassroots advocacy with clear action steps.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Environment Newsletters with Real Impact',
    description:
      'Discover environment newsletters that cover conservation, biodiversity, pollution control, and grassroots advocacy with clear action steps.',
  },
}

export default function EnvironmentNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>10 Environment Newsletters with Real Impact</h1>

        <p>
          Environmental news stretches from wildlife corridors to waste audits. Social feeds rarely supply the nuance or
          sourcing needed for decisions.
        </p>

        <p>
          Focused newsletters gather field research, policy shifts, and funding leads in one dependable stream.
        </p>

        <p>
          Select a few titles that track your region or mission. Swap in new options when campaigns progress.
        </p>

        <h2>1. Mongabay Newsletter</h2>
        <p>
          Mongabay produces investigative conservation journalism. The newsletter rounds up rainforest protection,
          biodiversity studies, and indigenous stewardship stories.
        </p>
        <p>
          Conservation teams use it to brief donors and volunteers before site visits.
        </p>

        <h2>2. Inside Climate News: Inside Clean Energy</h2>
        <p>
          Inside Clean Energy covers pollution, renewable deployment, and grid resilience. Reporters offer interviews with
          scientists, local officials, and community advocates.
        </p>
        <p>
          Read it to connect national stories with neighborhood-level projects.
        </p>

        <h2>3. High Country News Digest</h2>
        <p>
          High Country News tracks public lands, water rights, and wildlife in the American West. The digest highlights
          investigative series and photo essays.
        </p>
        <p>
          Land managers and educators reference it when discussing policy with stakeholders.
        </p>

        <h2>4. Planet Tracker Radar</h2>
        <p>
          Planet Tracker blends financial analysis with ecosystem data. The Radar newsletter exposes unsustainable
          practices in fisheries, textiles, and plastics.
        </p>
        <p>
          Investors and NGOs cite its metrics in shareholder engagements.
        </p>

        <h2>5. Earthjustice Newsletter</h2>
        <p>
          Earthjustice shares legal updates on clean air, water safeguards, and wildlife litigation. Issues feature case
          progress, court filings, and volunteer openings.
        </p>
        <p>
          Supporters stay ready to submit comments or attend hearings.
        </p>

        <h2>6. The Revelator</h2>
        <p>
          The Center for Biological Diversity publishes The Revelator with investigative stories on wildlife, climate, and
          public lands.
        </p>
        <p>
          Expect long-form features that arm campaigners with clear talking points.
        </p>

        <h2>7. NRDC: OnEarth</h2>
        <p>
          OnEarth curates policy wins, community profiles, and science explainers from NRDC. The writing stays accessible
          and points to action items.
        </p>
        <p>
          Supporters forward it to friends and colleagues ahead of advocacy drives.
        </p>

        <h2>8. Grist Daily</h2>
        <p>
          Grist Daily blends environmental justice reporting with cultural coverage. Subscribers receive quick briefs and
          longer features on solutions.
        </p>
        <p>
          Nonprofit leaders rely on it to track intersectional campaigns.
        </p>

        <h2>9. Yale Environment 360 Digest</h2>
        <p>
          Yale Environment 360 delivers essays, videos, and expert interviews on biodiversity loss, ocean health, and
          climate resilience.
        </p>
        <p>
          Academics and practitioners use it to bring fresh research into workshops and classrooms.
        </p>

        <h2>10. Oceana Currents</h2>
        <p>
          Oceana Currents concentrates on marine conservation. Issues highlight policy wins, seafood fraud investigations,
          and campaign milestones.
        </p>
        <p>
          Coastal communities follow it for timely opportunities to advocate for healthier seas.
        </p>

        <h2>Plan Your Reading Cadence</h2>
        <p>
          Schedule a weekly block to review environmental newsletters and flag action items. Pair each takeaway with a
          deadline and owner.
        </p>

        <p>
          Prune subscriptions that duplicate content and invite fresh voices that fill gaps in geography or topic.
        </p>

        <p>
          A curated inbox keeps environmental work rooted in facts, people, and measurable wins.
        </p>
      </section>
    </main>
  )
}


