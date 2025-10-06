import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Profits - Matt Merrick',
  description: 'Track the total earnings from my daily newsletter journey. Real transparency on newsletter monetization.',
  keywords: 'Matt Merrick, newsletter profits, email marketing revenue, newsletter earnings, solopreneur income',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  openGraph: {
    title: 'Newsletter Profits - Matt Merrick',
    description: 'Track the total earnings from my daily newsletter journey. Real transparency on newsletter monetization.',
    type: 'website',
  },
}

export default function ProfitsPage() {
  return (
    <main className="min-h-screen style={{backgroundColor: '#0070F3'}}">
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
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
              Newsletter Profits
            </h1>
            <p className="text-xl style={{color: '#FFFFFF'}} max-w-2xl mx-auto">
              Total transparency on earnings from my daily newsletter journey
            </p>
          </div>
          
          {/* Earnings Card */}
          <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-xl p-12 border border-white/20 shadow-xl text-center mb-16">
            <div className="text-6xl font-bold style={{color: '#FFFFFF'}} mb-4">$0</div>
            <div className="text-2xl style={{color: '#FFFFFF'}} mb-2">Total Earnings from This Newsletter</div>
            <div className="text-blue-200">Updated daily with real numbers</div>
          </div>
          
          {/* Progress Section */}
          <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl mb-16">
            <h2 className="text-2xl font-bold style={{color: '#FFFFFF'}} mb-6 text-center">Revenue Breakdown</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}} mb-2">$0</div>
                <div className="style={{color: '#FFFFFF'}}">Sponsorships</div>
                <div className="text-sm text-blue-200">Paid partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}} mb-2">$0</div>
                <div className="style={{color: '#FFFFFF'}}">Affiliate Sales</div>
                <div className="text-sm text-blue-200">Product recommendations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold style={{color: '#FFFFFF'}} mb-2">$0</div>
                <div className="style={{color: '#FFFFFF'}}">Direct Sales</div>
                <div className="text-sm text-blue-200">My own products</div>
              </div>
            </div>
          </div>
          
          {/* Goals Section */}
          <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl text-center">
            <h2 className="text-2xl font-bold style={{color: '#FFFFFF'}} mb-6">The Goal</h2>
            <div className="text-4xl font-bold style={{color: '#FFFFFF'}} mb-4">$1,000,000</div>
            <p className="style={{color: '#FFFFFF'}} text-lg mb-6">
              Target revenue from this newsletter business
            </p>
            <div className="text-blue-200">
              Building a million-dollar business, one email at a time
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
