import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Ideas — Find Your Next Product Idea | Matt Merrick',
  description: '10 copy-ready prompts to help you discover, validate, and shape profitable solopreneur ideas using AI.',
  robots: 'index, follow',
  openGraph: {
    title: 'Prompt Ideas — Find Your Next Product Idea | Matt Merrick',
    description: '10 copy-ready prompts for discovering and validating profitable ideas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Ideas — Find Your Next Product Idea | Matt Merrick',
    description: '10 copy-ready prompts for discovering and validating profitable ideas.',
  },
}

export default function PromptIdeas() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
          Prompt Ideas
        </h1>
        <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
          10 copy‑ready prompts you can paste into your favorite chat AI to find and shape a winning idea.
        </p>

        <section className="mt-8 space-y-8">
          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">1) 🧩 Reverse‑Feature from Billion‑Dollar Companies</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Pick 3 billion‑dollar SaaS companies serving [audience]. For each, identify one narrow, high‑usage feature that power users rely on but is underserved for [niche]. Propose a standalone micro‑SaaS that clones only that feature. Include: idea name, ICP, painful job‑to‑be‑done, why now, data sources/APIs needed, MVP spec (screens + actions), pricing (good/better/best), and a 14‑day path to first 10 paying users.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">2) 🧠 Pain‑Point Mining from Real Conversations</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                I am a [role]. Mine high‑signal complaints from Reddit, Twitter, community forums, G2/Capterra reviews, and support threads about [task]. Cluster pains by theme and severity. For each cluster, propose one tiny tool: input → process → output, time saved per week, willingness to pay estimate, where those users hang out, and the lowest‑effort channel to reach them.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">3) 📊 Spreadsheet → SaaS Converter</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Find 10 popular public Google Sheets/Notion templates used by [role] to achieve [outcome]. For each, design a micro‑SaaS replacement: required inputs (schema), core logic/algorithm, key validations, outputs/exports, and a 1‑week build plan. Add pricing, churn risks, and a simple upsell (templates, reports, or team seats).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">4) 🤖 API Piggyback Automations</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Using APIs from [platforms: e.g., Google Workspace, Slack, Shopify, Stripe], propose 10 automations that remove 90% of a repetitive workflow for [role]. For each: trigger, actions, required scopes/permissions, edge cases, rate‑limit strategy, failure alerts, and how to ship V1 as CLI/Zapier/Make before a full UI.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">5) 🛡️ Compliance Copilot</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Identify 5 compliance tasks in [industry] with clear rules and high penalty for mistakes (e.g., SOC2, HIPAA, GDPR, PCI). Propose a copilot that validates documents/processes against checklists. Include: rule sources, mapping to evidence, risk scoring method, suggested remediation output, and an MVP limited to one critical control.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">6) 🌐 Community Unbundling</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Surface 10 high‑signal threads across subreddit/Slack/Discord where [role] complains about [task]. Cluster by recurring obstacles and propose one purpose‑built tool per cluster. For each tool: data inputs, decision logic, output format, success metric, first paid user path (cold DM template or comment + landing page outline).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">7) 💸 High‑LTV Micro‑Niches</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                List 15 micro‑niches with high ARPU and low competition where [skill] creates leverage (e.g., legal ops for solo attorneys, RevOps for B2B agencies). For each: must‑have problem, buying trigger, where they congregate, first outreach channel, and a wedge product that can be built in 1 week.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">8) 📡 Buying‑Signal First Ideas</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Generate 10 ideas derived from strong buying signals: recurring search trends, job postings, RFPs, changelog mentions, and vendor sunsets. Provide the signal source link, 2‑sentence solution sketch, realistic pricing, and a plan to acquire 10 users in 14 days using only the channel where the signal appears.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">9) 🔒 AI Wrapper with a Moat</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                Propose 10 AI tools that are more than a thin wrapper by adding proprietary data or workflow hooks. For each: unique data we can capture on day one, compounding feedback loop, reasons users return weekly, and one sticky feature that competitors can’t easily copy.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">10) 🕐 One‑Hour MVP Blueprint</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 text-neutral-200 text-sm overflow-x-auto">
              <p>
                For the idea: [describe in 1 sentence], outline a one‑hour MVP using no‑code/low‑code. Specify stack, required integrations, sample data, the single success metric, how to collect payments immediately, and a short checklist to get the first 5 users to try it today.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}


