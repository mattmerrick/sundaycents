import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator - Return on Investment Tool | SundayCents',
  description: 'Calculate return on investment (ROI) for your business investments. Free ROI calculator for entrepreneurs and investors.',
  keywords: 'ROI calculator, return on investment, investment calculator, business ROI, investment analysis, financial tools',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'SundayCents',
  robots: 'index, follow',
  openGraph: {
    title: 'ROI Calculator - Return on Investment Tool | SundayCents',
    description: 'Calculate return on investment (ROI) for your business investments.',
    type: 'website',
    url: 'https://sundaycents.com/free-tools/roi-calculator',
    siteName: 'SundayCents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculator - Return on Investment Tool | SundayCents',
    description: 'Calculate return on investment (ROI) for your business investments.',
  },
}

'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [finalValue, setFinalValue] = useState('')
  const [timePeriod, setTimePeriod] = useState('')
  const [timeUnit, setTimeUnit] = useState('years')
  const [results, setResults] = useState<{
    totalReturn: number
    roi: number
    annualizedROI: number
    profitLoss: number
    timeInYears: number
  } | null>(null)

  const calculateROI = () => {
    const initial = parseFloat(initialInvestment) || 0
    const final = parseFloat(finalValue) || 0
    const time = parseFloat(timePeriod) || 0

    if (initial <= 0) {
      alert('Initial investment must be greater than 0')
      return
    }

    const totalReturn = final - initial
    const roi = (totalReturn / initial) * 100
    
    // Convert time to years for annualized calculation
    let timeInYears = time
    if (timeUnit === 'months') timeInYears = time / 12
    if (timeUnit === 'days') timeInYears = time / 365
    
    const annualizedROI = timeInYears > 0 ? (Math.pow(final / initial, 1 / timeInYears) - 1) * 100 : 0

    setResults({
      totalReturn: Math.round(totalReturn * 100) / 100,
      roi: Math.round(roi * 100) / 100,
      annualizedROI: Math.round(annualizedROI * 100) / 100,
      profitLoss: totalReturn,
      timeInYears: Math.round(timeInYears * 100) / 100
    })
  }

  const getROIColor = (roi: number) => {
    if (roi > 0) return 'text-green-500'
    return 'text-red-500'
  }

  const getROILabel = (roi: number) => {
    if (roi >= 50) return 'Excellent'
    if (roi >= 20) return 'Very Good'
    if (roi >= 10) return 'Good'
    if (roi >= 0) return 'Positive'
    return 'Negative'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-500 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ROI Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Calculate return on investment (ROI) for your business investments and projects.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Investment Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Initial Investment ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Amount you initially invested
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Final Value ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={finalValue}
                  onChange={(e) => setFinalValue(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="text-white/60 text-xs mt-1">
                  Current value of your investment
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Time Period
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Time Unit
                  </label>
                  <select
                    value={timeUnit}
                    onChange={(e) => setTimeUnit(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>

              <button
                onClick={calculateROI}
                disabled={!initialInvestment || !finalValue}
                className="w-full bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate ROI
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">ROI Analysis</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Return on Investment</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80">Total ROI:</span>
                      <span className={`text-3xl font-bold ${getROIColor(results.roi)}`}>
                        {results.roi > 0 ? '+' : ''}{results.roi}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Total Return:</span>
                      <span className={`text-xl font-bold ${getROIColor(results.profitLoss)}`}>
                        {results.profitLoss > 0 ? '+' : ''}${results.totalReturn.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs">
                      {getROILabel(results.roi)} • {results.timeInYears} years
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Annualized ROI</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Annualized Return:</span>
                      <span className={`text-xl font-bold ${getROIColor(results.annualizedROI)}`}>
                        {results.annualizedROI > 0 ? '+' : ''}{results.annualizedROI}%
                      </span>
                    </div>
                    <p className="text-white/60 text-xs">
                      Average annual return over {results.timeInYears} years
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-white/80 mb-2">Investment Growth</h4>
                      <div className="text-lg font-bold text-blue-400">
                        {((parseFloat(finalValue) / parseFloat(initialInvestment)) * 100).toFixed(1)}%
                      </div>
                      <p className="text-white/60 text-xs">
                        Total growth
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-white/80 mb-2">Time Period</h4>
                      <div className="text-lg font-bold text-purple-400">
                        {results.timeInYears}
                      </div>
                      <p className="text-white/60 text-xs">
                        Years invested
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">💡 ROI Interpretation</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      <li>• <strong>50%+:</strong> Excellent investment</li>
                      <li>• <strong>20-49%:</strong> Very good return</li>
                      <li>• <strong>10-19%:</strong> Good investment</li>
                      <li>• <strong>0-9%:</strong> Positive but low return</li>
                      <li>• <strong>Negative:</strong> Loss on investment</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <p className="text-white/60">
                    Enter your investment details and click "Calculate ROI" to see results
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
