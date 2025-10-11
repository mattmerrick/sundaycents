import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: '5‑Day Solopreneur Crash Course + Daily Newsletter | Matt Merrick',
  description: 'Learn how to turn one idea into a real business — without investors, employees, or burnout. Get the free 5‑Day Crash Course in Solopreneurship plus the daily newsletter.',
  keywords: 'solopreneur, solo business, side hustle, audience building, newsletter, Matt Merrick, 5-day course',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: '5‑Day Solopreneur Crash Course + Daily Newsletter | Matt Merrick',
    description: 'Turn one idea into a real business. Free 5‑day course + daily newsletter.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://mattmerrick.com',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - 5‑Day Solopreneur Crash Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5‑Day Solopreneur Crash Course + Daily Newsletter | Matt Merrick',
    description: 'Turn one idea into a real business. Free 5‑day course + daily newsletter.',
    images: ['/share.png'],
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Learn how to turn one idea into a real business — without investors, employees, or burnout.
          </h1>

          <section className="mt-6">
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">✉️ What You’ll Get</h2>
            <div className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Join 74 creators, builders, and dreamers getting my free 5‑Day Crash Course in Solopreneurship, plus my daily newsletter that teaches you how to:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3"><span>💰</span><span>Build something that actually makes money right away</span></li>
                <li className="flex gap-3"><span>📈</span><span>Grow your audience from scratch</span></li>
                <li className="flex gap-3"><span>⚙️</span><span>Automate and scale without losing your mind</span></li>
                <li className="flex gap-3"><span>🧠</span><span>Learn the real lessons from doing it solo</span></li>
              </ul>
              <p>
                It’s based on my personal experience — 3+ years of learning, studying, and building — focused on helping you make money right away with simple, proven steps.
              </p>
              <p>
                Every day for 5 days, you’ll get one short, powerful email that helps you go from idea → launch → first customer.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">🗓️ 5‑Day Solopreneur Email Course</h2>
            <ul className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-2">
              <li><span className="text-white">Day 1:</span> Picking the Idea — Stop overthinking. Choose one problem you know and validate fast.</li>
              <li><span className="text-white">Day 2:</span> Marketing Your Idea — Attention first. Share in public on X, Reddit, and LinkedIn.</li>
              <li><span className="text-white">Day 3:</span> Automations & Tools — Set up simple automations so one person works like a team.</li>
              <li><span className="text-white">Day 4:</span> Building a Routine — Design a weekly cadence to stay consistent without burnout.</li>
              <li><span className="text-white">Day 5:</span> Scaling Solo — Price, systemize, and reinvest to grow without hiring.
              </li>
            </ul>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mt-4">
              Each lesson is ~5 minutes, actionable, and includes real tools, templates, and examples you can use instantly.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">💡 Why I Built This</h2>
            <div className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I’m a solopreneur just like you — learning, building, and sharing every day. Everything here comes from my personal experience shipping real products to real customers.
              </p>
              <p>
                It’s the distilled playbook from 3+ years of learning, studying, and testing ideas — focused on helping you get to revenue fast. No fluff, no funnels, just clarity and action.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">📬 Plus: My Daily Newsletter</h2>
            <ul className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-2">
              <li className="flex gap-3"><span>🧰</span><span>Building products that run on autopilot</span></li>
              <li className="flex gap-3"><span>✍️</span><span>Writing content that sells</span></li>
              <li className="flex gap-3"><span>🌱</span><span>Growing an audience organically</span></li>
              <li className="flex gap-3"><span>⏱️</span><span>Staying consistent even when motivation dies</span></li>
            </ul>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mt-4">
              Short, practical, and made to help you win solo.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">🔑 Get Instant Access</h2>
            <ul className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-2">
              <li className="flex gap-3"><span>✅</span><span>Free 5‑Day Crash Course</span></li>
              <li className="flex gap-3"><span>✅</span><span>Daily Solopreneur Newsletter</span></li>
              <li className="flex gap-3"><span>✅</span><span>Access to tools, templates, and community insights</span></li>
            </ul>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mt-4">
              📩 Enter your email below and start Day 1 instantly.
            </p>
            <div className="mt-6">
              <EmailSignup
                variant="hero"
                placeholder="Enter your email"
                buttonLabel="→ Get the Free Course + Newsletter"
                note="No spam. Unsubscribe anytime."
                buttonBgColor="#FFFFFF"
                buttonTextColor="#111111"
              />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-neutral-950 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/blog"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/newsletters"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Newsletters
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Tools
            </Link>
            <span className="text-neutral-500">/</span>
            <Link 
              href="/free-tools"
              className="text-white hover:text-neutral-300 transition-colors font-medium"
            >
              Free Tools
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}