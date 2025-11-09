import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '9 Software Engineering Newsletters Worth Shipping to Your Inbox',
  description:
    'Software engineering newsletters covering architecture, reliability, management, and tooling so teams can ship better software.',
  keywords: [
    'software engineering newsletters',
    'software architecture email',
    'engineering management newsletter',
    'devops newsletter',
    'software delivery tips',
  ],
}

export default function SoftwareEngineeringNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>9 Software Engineering Newsletters Worth Shipping to Your Inbox</h1>

        <p>
          Software changes daily. New frameworks launch. Incident reviews surface hard lessons. These newsletters keep
          engineers sharp without adding noise.
        </p>

        <p>
          Editors share architecture diagrams, postmortems, and management experiments. You get the context needed to
          improve code quality and delivery speed.
        </p>

        <p>
          Subscribe, then set a weekly reading block. Bring one idea into sprint planning and ship a small improvement fast.
        </p>

        <h2>1. Pointer</h2>
        <p>
          Cassidy Williams curates Pointer with three links every weekday. Topics cover frontend craft, developer tools,
          and team leadership notes.
        </p>
        <p>
          The short format makes it easy to keep pace. Many teams share it in their engineering Slack channel every morning.
        </p>

        <h2>2. Pragmatic Engineer</h2>
        <p>
          Gergely Orosz writes Pragmatic Engineer for managers and senior ICs. He dissects compensation data, hiring trends,
          and platform architecture decisions inside big tech firms.
        </p>
        <p>
          Paid issues dive deep into engineering culture and org design. Use them to benchmark your own processes.
        </p>

        <h2>3. ByteByteGo</h2>
        <p>
          Alex Xu&apos;s ByteByteGo explains system design concepts with diagrams. Weekly issues break down distributed systems,
          microservices, queues, and caching patterns.
        </p>
        <p>
          Engineers use it for interview prep and refresher training. The visuals make complex ideas digestible.
        </p>

        <h2>4. LeadDev Newsletter</h2>
        <p>
          LeadDev focuses on engineering leadership. Expect articles on delegation, roadmap planning, and performance reviews.
          Each send includes new conference talks and community events.
        </p>
        <p>
          Managers forward it to tech leads who are leveling up into people leadership.
        </p>

        <h2>5. Increment Dispatch</h2>
        <p>
          Stripe&apos;s Increment magazine runs a dispatch after each themed issue. You get essays on topics like reliability,
          documentation, and testing culture.
        </p>
        <p>
          The writing stays polished. Treat it like a quarterly book club for your engineering org.
        </p>

        <h2>6. SRE Weekly</h2>
        <p>
          David Dawson curates SRE Weekly for reliability engineers. It includes incident writeups, tooling updates, and thought
          pieces on on-call life.
        </p>
        <p>
          The newsletter highlights practical runbooks and monitoring techniques you can apply right away.
        </p>

        <h2>7. Console</h2>
        <p>
          Console reviews new developer tools every week. Founders share their roadmap, and the team rates usability for engineers.
        </p>
        <p>
          You get early access invites and discount codes. Keep it handy when evaluating stack upgrades.
        </p>

        <h2>8. TLDR</h2>
        <p>
          TLDR condenses dev news into a quick read. Sections cover programming, dev tools, science, and security. Each item explains
          why it matters.
        </p>
        <p>
          Many engineers read it during their morning coffee to stay current without doomscrolling.
        </p>

        <h2>9. StaffEng Dispatch</h2>
        <p>
          StaffEng documents the journeys of staff-plus engineers. It shares promotions, project stories, and communication habits
          from leaders across the industry.
        </p>
        <p>
          Aspiring staff engineers study these narratives to plan their own growth paths.
        </p>

        <h2>Turn Reading into Better Shipping</h2>
        <p>
          Add a newsletter review section to retro. Ask one teammate to share a takeaway every week. Vote on one experiment to run
          before the next retro.
        </p>
        <p>
          This keeps the team learning together and turns inbox time into production improvements.
        </p>
      </section>
    </main>
  )
}

