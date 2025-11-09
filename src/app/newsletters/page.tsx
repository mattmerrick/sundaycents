import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Guides - Matt Merrick',
  description: 'Browse curated newsletter guides across AI, investing, SEO, food, travel, coffee, and parenting niches.',
  keywords: [
    'newsletter guides',
    'best newsletters',
    'AI newsletters',
    'investing newsletters',
    'seo newsletters',
    'food newsletters',
    'travel newsletters',
    'coffee newsletters',
    'parenting newsletters'
  ],
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/newsletters',
  },
  openGraph: {
    title: 'Newsletter Guides - Matt Merrick',
    description: 'Browse curated newsletter guides across AI, investing, SEO, food, travel, coffee, and parenting niches.',
    type: 'website',
    url: 'https://www.mattmerrick.com/newsletters',
    siteName: 'Matt Merrick',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Newsletter Guides - Matt Merrick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter Guides - Matt Merrick',
    description: 'Browse curated newsletter guides across AI, investing, SEO, food, travel, coffee, and parenting niches.',
    images: ['/share.png'],
  },
}

export default function NewslettersPage() {
  const sections = [
    {
      title: 'AI & Data',
      items: [
        {
          title: 'The Best AI Newsletters',
          description: 'Daily and weekly AI rundowns plus research analysis for founders and operators.',
          href: '/newsletters/the-best-ai-newsletters-for-2024',
        },
        {
          title: '8 Deep Learning Newsletters that Keep Research Practical',
          description: 'Research digests, benchmark tracking, and deployment lessons for serious machine learning teams.',
          href: '/deep-learning-newsletters',
        },
        {
          title: '9 Automation Newsletters for Smarter Ops',
          description: 'Workflow design playbooks, RPA wins, and agent use cases that save hours.',
          href: '/automation-newsletters',
        },
        {
          title: '10 Data Science Newsletters with Real-World Value',
          description: 'Analytics roadmaps, tooling updates, and communication tactics from active data teams.',
          href: '/data-science-newsletters',
        },
        {
          title: '9 Future Tech Newsletters for Big Picture Thinkers',
          description: 'Emerging science, climate breakthroughs, and frontier startups shaping the next decade.',
          href: '/future-tech-newsletters',
        },
      ],
    },
    {
      title: 'Engineering & Development',
      items: [
        {
          title: 'The Best Tech Newsletters',
          description: 'Technology, startup, and product briefings that keep you ahead of industry shifts.',
          href: '/newsletters/the-best-tech-newsletters-for-2024',
        },
        {
          title: '9 Software Engineering Newsletters Worth Shipping to Your Inbox',
          description: 'Architecture diagrams, reliability stories, and management experiments for engineering leaders.',
          href: '/software-engineering-newsletters',
        },
        {
          title: '10 Developer Newsletters for Continuous Learning',
          description: 'Tutorials, repo highlights, and tooling news curated for active developers.',
          href: '/developer-newsletters',
        },
        {
          title: '9 Coding Newsletters for Leveling Up Fast',
          description: 'Beginner-friendly lessons, project prompts, and language tips for steady growth.',
          href: '/coding-newsletters',
        },
        {
          title: '8 Programming Newsletters for Polyglot Developers',
          description: 'Cross-language trends, system design primers, and research summaries that broaden skills.',
          href: '/programming-newsletters',
        },
        {
          title: '8 Web Dev Newsletters Designers and Engineers Trust',
          description: 'Frontend patterns, accessibility updates, and performance tactics for modern sites.',
          href: '/web-dev-newsletters',
        },
        {
          title: '9 Cloud Computing Newsletters for Modern Infra Teams',
          description: 'Provider release notes, FinOps guidance, and cloud-native stories for platform squads.',
          href: '/cloud-computing-newsletters',
        },
        {
          title: '8 API Newsletters for Product and Platform Teams',
          description: 'API design patterns, governance lessons, and developer experience strategies.',
          href: '/api-newsletters',
        },
        {
          title: '9 Open Source Newsletters for Builders and Maintainers',
          description: 'Maintainer spotlights, governance debates, and funding updates across the OSS world.',
          href: '/open-source-newsletters',
        },
      ],
    },
    {
      title: 'Security & Crypto',
      items: [
        {
          title: '9 Cybersecurity Newsletters Security Teams Depend On',
          description: 'Threat intelligence, incident playbooks, and governance news for security leaders.',
          href: '/cybersecurity-newsletters',
        },
        {
          title: '8 Blockchain Newsletters for Builders and Analysts',
          description: 'Protocol upgrades, governance votes, and on-chain data pulled into one feed.',
          href: '/blockchain-newsletters',
        },
        {
          title: '9 Crypto Newsletters for Daily Market Clarity',
          description: 'Market structure breakdowns, liquidity dashboards, and macro commentary for active traders.',
          href: '/crypto-newsletters',
        },
        {
          title: '8 Web3 Newsletters Mapping the Decentralized Internet',
          description: 'DAO proposals, NFT culture, and community design tactics for decentralized builders.',
          href: '/web3-newsletters',
        },
        {
          title: 'The Best SEO Newsletters',
          description: 'Search updates, algorithm notes, and tactical ranking playbooks from trusted editors.',
          href: '/newsletters/the-best-seo-newsletters-for-2025',
        },
      ],
    },
    {
      title: 'Finance & Business',
      items: [
        {
          title: 'The Best Investing Newsletters',
          description: 'Market research, macro takes, and portfolio ideas for retail and advanced investors.',
          href: '/newsletters/the-best-investing-newsletters-for-2024',
        },
      ],
    },
    {
      title: 'Food & Lifestyle',
      items: [
        {
          title: 'The Best Food Newsletters',
          description: 'Recipe gems, restaurant intel, and global food culture stories in one inbox.',
          href: '/food-newsletters',
        },
        {
          title: 'The Best Travel Newsletters',
          description: 'Flight deals, destination briefings, and slow-travel guides from trusted explorers.',
          href: '/travel-newsletters',
        },
        {
          title: 'The Best Coffee Newsletters',
          description: 'Brewing science, cafe culture, and sourcing updates for coffee obsessives.',
          href: '/coffee-newsletters',
        },
        {
          title: 'The Best Parenting Newsletters',
          description: 'Evidence-based parenting guidance for every stage, from toddlers to teens.',
          href: '/parenting-newsletters',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Newsletter Guides</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Newsletter Guides
          </h1>
          <p className="text-lg text-gray-600">
            Browse every newsletter roundup in one place. Pick a niche, click a guide, and find the emails worth your inbox space.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <Link href={item.href} className="block">
                      <span className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
