import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export default function LatestEmail() {
  return (
    <div className="min-h-screen style={{backgroundColor: '#FFFFFF'}}">
      {/* Header with back button and signup */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/" 
            className="style={{color: '#0070F3'}} hover:text-blue-800 underline"
          >
            ← Back  Home
          </Link>
          <EmailSignup />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold style={{color: '#111111'}} mb-6 text-center">
            Today is the day we have been waiting for. Let's see what happens!
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Overview</h2>
          <p className="mb-4">
            U.S. markets ended higher yesterday:
          </p>
          <ul className="mb-6">
            <li>S&P 500 rose 0.47% to a record 6,615</li>
            <li>Nasdaq Composite gained 0.94% to 22,349 (sixth straight record close)</li>
            <li>Dow Jones inched up 0.11% to 45,883</li>
          </ul>
          <p className="mb-6">
            Optimism is centered on an imminent Fed rate cut. Globally, Asian stocks also set records, gold climbed to $3,677, Brent crude topped $67.60, and Bitcoin stayed near $115,000. In India, Nifty ended slightly lower at 25,069 after an 8-day run, while GIFT Nifty suggested a cautious open.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10 Things Moving the Markets</h2>
          <ol className="mb-6">
            <li className="mb-3"><strong>Stocks rally into Fed meeting</strong> – Investors are pricing in a 25bps cut, boosting growth names and pushing the Nasdaq to its sixth consecutive record.</li>
            <li className="mb-3"><strong>U.S.–China trade thaw</strong> – Talks resumed, with a potential TikTok deal in the mix. A breakthrough could ease tariffs and lift cross-border tech sentiment.</li>
            <li className="mb-3"><strong>Tesla insider buy</strong> – Elon Musk personally bought $1B of Tesla stock, a rare insider move that sent shares up 3.6%. Confidence signal in EV demand.</li>
            <li className="mb-3"><strong>Alphabet joins $3T club</strong> – Google's parent crossed $3 trillion in market cap, cementing AI as a key driver of big tech valuations.</li>
            <li className="mb-3"><strong>Fed cut odds hit 93%</strong> – Futures markets now see a near lock for a 25bps cut. Retail sales and industrial output data will be watched closely.</li>
            <li className="mb-3"><strong>Gold sets new high</strong> – Prices spiked to $3,679 as investors hedge with safe havens before the Fed decision.</li>
            <li className="mb-3"><strong>India–U.S. trade talks</strong> – Sixth round of discussions kicked off, spotlighting tariff relief in shrimp, textiles, pharma, and jewelry sectors.</li>
            <li className="mb-3"><strong>Mutual funds reshuffle</strong> – Fund managers rotated into autos (Maruti, M&M), banks (Kotak), and IT (Infosys), while trimming FMCG names like ITC and HUL.</li>
            <li className="mb-3"><strong>Oil prices lift on Russia talk</strong> – Brent crude rose on the possibility of tighter sanctions, keeping energy stocks on trader radars.</li>
            <li className="mb-3"><strong>Urban Company IPO buzz</strong> – The Indian startup goes public today, expected to debut with a 50% premium — strong demand for consumer-tech plays.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stock Spotlight: Tesla (TSLA)</h2>
          <p className="mb-2"><strong>Recommendation: Buy</strong></p>
          <ul className="mb-6">
            <li>Musk's $1B purchase is a strong insider confidence signal.</li>
            <li>Shares popped 3.6% yesterday, breaking above $400.</li>
            <li>Catalysts: EV adoption, autonomous AI integration, easing supply chain concerns if U.S.–China trade improves.</li>
            <li>Short-term upside: 10–15% possible if Fed easing boosts consumer spending.</li>
            <li>Risk: Regulatory and valuation-driven volatility.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Ahead</h2>
          <p className="mb-4">
            <strong>Key events:</strong> U.S. retail sales and industrial production, Fed meeting, UK jobless claims, Eurozone ZEW survey, India weekly Nifty expiry, AGMs for SAIL and BLS International, Euro Pratik Sales IPO opens.
          </p>
          
          <p className="mb-4">
            <strong>Stocks to watch:</strong>
          </p>
          <ul className="mb-4">
            <li>NCC (₹2,090 cr order)</li>
            <li>Adani Enterprises (₹4,081 cr ropeway project)</li>
            <li>Maruti Suzuki (launch of VICTORIS at ₹10.5–19.98 lakh)</li>
            <li>JSW Infra (30-year port concession)</li>
            <li>Thyrocare (debt restructuring risk)</li>
          </ul>

          <p className="mb-4">
            <strong>Hot sectors:</strong>
          </p>
          <ul className="mb-6">
            <li>AI & Tech → NVDA, AMD, MSFT</li>
            <li>EVs & Autonomy → TSLA, RIVN</li>
            <li>Clean Energy → OKLO, FSLR</li>
            <li>Financials → Kotak Bank, Bajaj Finance</li>
            <li>Precious Metals → gold/silver ETFs & miners</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="mb-0">
              <strong>Quick Tip:</strong> With rate cuts on the horizon, rate-sensitive sectors like real estate and banking could benefit most in the short term. Diversify, and lean into sectors aligned with monetary easing.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
