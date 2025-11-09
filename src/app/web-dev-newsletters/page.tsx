import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '8 Web Dev Newsletters Designers and Engineers Trust',
  description:
    'Web development newsletters featuring frontend trends, performance tactics, accessibility, and UX patterns for modern teams.',
  keywords: [
    'web dev newsletters',
    'web development newsletter',
    'frontend email list',
    'responsive design tips',
    'web performance newsletter',
  ],
}

export default function WebDevNewslettersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-lg">
        <h1>8 Web Dev Newsletters Designers and Engineers Trust</h1>

        <p>
          Web development thrives on fast feedback. Browsers roll out features. Frameworks refine patterns. These newsletters
          capture the important shifts so your team stays sharp.
        </p>

        <p>
          Editors focus on hands-on examples, performance wins, and accessibility updates. You get practical advice ready for
          your next sprint or client build.
        </p>

        <p>
          Sign up for two today. Test one technique each week. Track results in Lighthouse or your favorite analytics dashboard.
        </p>

        <h2>1. Smashing Magazine Newsletter</h2>
        <p>
          Smashing Magazine delivers long-form web dev guides twice a month. It covers CSS techniques, design systems, and backend
          integrations written by experienced practitioners.
        </p>
        <p>
          Each edition includes upcoming workshops and community events you can attend online.
        </p>

        <h2>2. WebOps Weekly</h2>
        <p>
          WebOps Weekly highlights site reliability for the web stack. Expect articles on deployment pipelines, Jamstack builds,
          and performance monitoring.
        </p>
        <p>
          Teams use it to refine CI/CD pipelines and share lessons with their DevOps counterparts.
        </p>

        <h2>3. CSS Weekly</h2>
        <p>
          CSS Weekly collects tips on layout, typography, and new CSS specs. The curator filters the best demos and CodePens so
          you can copy patterns straight into your projects.
        </p>
        <p>
          Designers and engineers both benefit, especially when building design systems.
        </p>

        <h2>4. UI Dev Newsletter</h2>
        <p>
          UI Dev shares lessons on JavaScript frameworks, state management, and testing. The writing stays practical and includes
          code samples with each send.
        </p>
        <p>
          It is perfect for engineers balancing React, Vue, and Svelte work.
        </p>

        <h2>5. Web Performance Calendar</h2>
        <p>
          Tim Kadlec and the performance community run a seasonal email series each December. Each day features a deep dive on
          speed, from Core Web Vitals to real-user monitoring.
        </p>
        <p>
          Archive all entries in your performance playbook for year-round reference.
        </p>

        <h2>6. Accessibility Weekly</h2>
        <p>
          Accessibility Weekly curates articles, audits, and tools focused on inclusive design. It keeps teams accountable for
          meeting WCAG standards.
        </p>
        <p>
          Each email features job postings and conferences so you can plug into the accessibility community.
        </p>

        <h2>7. Jamstacked</h2>
        <p>
          Brian Rinaldi&apos;s Jamstacked newsletter tracks modern static and edge-first architectures. It covers headless CMS launches,
          build tools, and real-world case studies.
        </p>
        <p>
          Use it when evaluating whether to ship the next site with static generation or serverless functions.
        </p>

        <h2>8. Build UX</h2>
        <p>
          Build UX combines interaction design with frontend implementation. You get teardown videos, component libraries, and
          UX research summaries.
        </p>
        <p>
          It is ideal for teams who want tighter collaboration between designers and engineers.
        </p>

        <h2>Keep Experiments Visible</h2>
        <p>
          Create a shared changelog for frontend experiments. Note which newsletter sparked the idea, what you tested, and the
          outcome on metrics like conversion or load time.
        </p>
        <p>
          This builds a repeatable loop championing curiosity while grounding it in measurable gains.
        </p>
      </section>
    </main>
  )
}

