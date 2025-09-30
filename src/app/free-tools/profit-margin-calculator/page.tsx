import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profit Margin Calculator - Free Tool | SundayCents',
  description: 'Calculate profit margins for your business. Free profit margin calculator for entrepreneurs and business owners.',
  keywords: 'profit margin calculator, business calculator, profit analysis, gross profit, net profit, business tools',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'Profit Margin Calculator - Free Tool | SundayCents',
    description: 'Calculate profit margins for your business with our free calculator.',
    type: 'website',
    url: 'https://sundaycents.com/free-tools/profit-margin-calculator',
    siteName: 'SundayCents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profit Margin Calculator - Free Tool | SundayCents',
    description: 'Calculate profit margins for your business with our free calculator.',
  },
}

'use client'

import { useState } from 'react'

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState('')
  const [costOfGoodsSold, setCostOfGoodsSold] = useState('')
  const [operatingExpenses, setOperatingExpenses] = useState('')
  const [otherExpenses, setOtherExpenses] = useState('')
  const [results, setResults] = useState<{
    grossProfit: number
    grossMargin: number
    operatingProfit: number
    operatingMargin: number
    netProfit: number
    netMargin: number
  } | null>(null)

  const calculateProfitMargins = () => {
    const rev = parseFloat(revenue) || 0
    const cogs = parseFloat(costOfGoodsSold) || 0
    const operating = parseFloat(operatingExpenses) || 0
    const other = parseFloat(otherExpenses) || 0

    if (rev <= 0) {
      alert('Revenue must be greater than 0')
      return
    }

    const grossProfit = rev - cogs
    const grossMargin = (grossProfit / rev) * 100
    
    const operatingProfit = grossProfit - operating
    const operatingMargin = (operatingProfit / rev) * 100
    
    const netProfit = operatingProfit - other
    const netMargin = (netProfit / rev) * 100

    setResults({
      grossProfit: Math.round(grossProfit * 100) / 100,
      grossMargin: Math.round(grossMargin * 100) / 100,
      operatingProfit: Math.round(operatingProfit * 100) / 100,
      operatingMargin: Math.round(operatingMargin * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100,
      netMargin: Math.round(netMargin * 100) / 100
    })
  }

  const getMarginColor = (margin: number) => {
    if (margin >= 20) return 'text-green-500'
    if (margin >= 10) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getMarginLabel = (margin: number) => {
    if (margin >= 20) return 'Excellent'
    if (margin >= 15) return 'Good'
    if (margin >= 10) return 'Average'
    if (margin >= 5) return 'Below Average'
    return 'Poor'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Profit Margin Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Calculate your business profit margins and understand your financial performance.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Financial Input</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Total Revenue ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Total sales or income from all sources
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Cost of Goods Sold ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={costOfGoodsSold}
                  onChange={(e) => setCostOfGoodsSold(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Direct costs: materials, labor, manufacturing
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Operating Expenses ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={operatingExpenses}
                  onChange={(e) => setOperatingExpenses(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Rent, salaries, utilities, marketing, etc.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Other Expenses ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Interest, taxes, one-time expenses
                </p>
              </div>

              <button
                onClick={calculateProfitMargins}
                disabled={!revenue}
                className="w-full bg-white text-violet-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Profit Margins
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Profit Margin Analysis</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Gross Profit Margin</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Gross Profit:</span>
                      <span className="text-xl font-bold text-green-400">
                        ${results.grossProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Gross Margin:</span>
                      <span className={`text-xl font-bold ${getMarginColor(results.grossMargin)}`}>
                        {results.grossMargin}%
                      </span>
                    </div>
                    <p className="text-white/60 text-xs mt-2">
                      {getMarginLabel(results.grossMargin)} • Revenue minus direct costs
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Operating Profit Margin</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Operating Profit:</span>
                      <span className="text-xl font-bold text-blue-400">
                        ${results.operatingProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Operating Margin:</span>
                      <span className={`text-xl font-bold ${getMarginColor(results.operatingMargin)}`}>
                        {results.operatingMargin}%
                      </span>
                    </div>
                    <p className="text-white/60 text-xs mt-2">
                      {getMarginLabel(results.operatingMargin)} • After operating expenses
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Net Profit Margin</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Net Profit:</span>
                      <span className="text-xl font-bold text-purple-400">
                        ${results.netProfit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Net Margin:</span>
                      <span className={`text-xl font-bold ${getMarginColor(results.netMargin)}`}>
                        {results.netMargin}%
                      </span>
                    </div>
                    <p className="text-white/60 text-xs mt-2">
                      {getMarginLabel(results.netMargin)} • Final profit after all expenses
                    </p>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">💡 Industry Benchmarks</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• Excellent: 20%+ net margin</li>
                      <li>• Good: 15-20% net margin</li>
                      <li>• Average: 10-15% net margin</li>
                      <li>• Below Average: 5-10% net margin</li>
                      <li>• Poor: Below 5% net margin</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <p className="text-white/60">
                    Enter your financial data and click "Calculate Profit Margins" to see results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="text-white/80 hover:text-white transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
