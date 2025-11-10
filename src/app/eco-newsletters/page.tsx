import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '10 Eco Newsletters for Everyday Action',
  description:
    'Eco newsletters that translate sustainability trends into daily habits, local activism, and ethical purchasing decisions.',
  keywords: [
    'eco newsletters',
    'eco friendly email',
    'sustainable living newsletters',
    'ethical shopping newsletter',
    'low waste newsletter',
  ],
  openGraph: {
    title: '10 Eco Newsletters for Everyday Action',
    description:
      'Eco newsletters that translate sustainability trends into daily habits, local activism, and ethical purchasing decisions.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Eco Newsletters for Everyday Action',
    description:
      'Eco newsletters that translate sustainability trends into daily habits, local activism, and ethical purchasing decisions.',
  },
}

export default function EcoNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>10 Eco Newsletters for Everyday Action</h1>

        <p>
          Sustainable living advice can feel scattered across apps and comment threads. Most people need concise
          guidance, trusted brands, and real price checks.
        </p>

        <p>
          These eco newsletters deliver simple routines, vetted products, and local organizing updates without fluff.
        </p>

        <p>
          Choose a mix that supports your household goals, whether that means reducing waste, building community gardens,
          or adjusting travel habits.
        </p>

        <h2>1. Brightly Eco</h2>
        <p>
          Brightly Eco reviews low-waste products, kitchen swaps, and recycling tips. The newsletter features price
          comparisons and honest pros and cons.
        </p>
        <p>
          Readers appreciate the community spotlights that celebrate small lifestyle wins.
        </p>

        <h2>2. The Good Trade Daily Good</h2>
        <p>
          The Daily Good curates ethical brands, mindful routines, and community-driven stories. Each issue offers
          practical lists with links to transparent makers.
        </p>
        <p>
          Expect playlists, recipes, and guided reflections that ground eco habits in daily life.
        </p>

        <h2>3. Low Impact Movement</h2>
        <p>
          Low Impact Movement focuses on minimal waste practices, thrift finds, and DIY repairs. The newsletter includes
          templates for tracking resource use.
        </p>
        <p>
          It suits renters, students, and families starting zero-waste challenges.
        </p>

        <h2>4. Intersectional Environmentalist</h2>
        <p>
          Intersectional Environmentalist highlights activists and educators who link social justice with climate action.
          Issues promote events, petitions, and reading lists.
        </p>
        <p>
          The perspective broadens how readers plan eco projects within their communities.
        </p>

        <h2>5. Ethical Unicorn</h2>
        <p>
          Ethical Unicorn blends investigative essays with actionable swaps. Topics include ethical fashion, tech privacy,
          and mutual aid.
        </p>
        <p>
          Each send features verified resources for further learning.
        </p>

        <h2>6. Beam Impact Dispatch</h2>
        <p>
          Beam Impact connects everyday purchases with vetted nonprofits. The Dispatch newsletter shares impact reports,
          brand profiles, and volunteer openings.
        </p>
        <p>
          Readers track donations tied to each shopping choice.
        </p>

        <h2>7. Going Zero Waste Newsletter</h2>
        <p>
          Author Kathryn Kellogg shares approachable zero-waste advice, meal plans, and travel hacks. Her newsletter
          includes printable checklists and seasonal challenges.
        </p>
        <p>
          Families adopt the templates to reduce landfill trips.
        </p>

        <h2>8. Atmos Brief</h2>
        <p>
          Atmos blends art, culture, and environmental storytelling. The Brief highlights essays, photography, and
          grassroots campaigns.
        </p>
        <p>
          The mix inspires readers to connect ecological care with creativity.
        </p>

        <h2>9. Earth Hero Community</h2>
        <p>
          Earth Hero collects product roundups, carbon reduction challenges, and discount alerts. The community newsletter
          explains certifications and material sourcing.
        </p>
        <p>
          It helps shoppers compare options without greenwashing.
        </p>

        <h2>10. Make Change</h2>
        <p>
          Make Change covers ethical finance, conscious travel, and local activism. Expect interviews, how-to guides, and
          links to grassroots funds.
        </p>
        <p>
          Readers finish each issue with concrete next steps.
        </p>

        <h2>Build Eco Habits That Stick</h2>
        <p>
          Set a weekly reminder to scan newsletters and pick one action item. Track progress in a shared note or bullet
          journal.
        </p>

        <p>
          Rotate subscriptions when your needs evolve, from apartment composting to electric vehicle research.
        </p>

        <p>
          An intentional inbox keeps eco goals grounded in real stories, not idealized wish lists.
        </p>
      </section>
    </main>
  )
}


