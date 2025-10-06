'use client'

import { useState } from 'react'

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState('')
  const [variableCosts, setVariableCosts] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [results, setResults] = useState<{
    breakEvenUnits: number
    breakEvenRevenue: number
    contributionMargin: number
    contributionMarginRatio: number
  } | null>(null)

  const calculateBreakEven = () => {
    const fixed = parseFloat(fixedCosts) || 0
    const variable = parseFloat(variableCosts) || 0
    const price = parseFloat(sellingPrice) || 0

    if (price <= variable) {
      alert('Selling price must be greater than variable costs per unit')
      return
    }

    const contributionMargin = price - variable
    const contributionMarginRatio = (contributionMargin / price) * 100
    const breakEvenUnits = fixed / contributionMargin
    const breakEvenRevenue = breakEvenUnits * price

    setResults({
      breakEvenUnits: Math.ceil(breakEvenUnits),
      breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
      contributionMargin: Math.round(contributionMargin * 100) / 100,
      contributionMarginRatio: Math.round(contributionMarginRatio * 100) / 100
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Break-Even Calculator
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Calculate how many units you need to sell to break even and start making a profit.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Input Your Costs</h2>
              
              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Fixed Costs ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={fixedCosts}
                  onChange={(e) => setFixedCosts(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="style={{color: '#FFFFFF'}}/60 text-xs mt-1">
                  Rent, salaries, insurance, etc. (costs that don't change with sales)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Variable Costs per Unit ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={variableCosts}
                  onChange={(e) => setVariableCosts(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="style={{color: '#FFFFFF'}}/60 text-xs mt-1">
                  Materials, labor, shipping, etc. (costs that increase with each sale)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Selling Price per Unit ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p className="style={{color: '#FFFFFF'}}/60 text-xs mt-1">
                  How much you charge customers for each unit
                </p>
              </div>

              <button
                onClick={calculateBreakEven}
                disabled={!fixedCosts || !variableCosts || !sellingPrice}
                className="w-full style={{backgroundColor: '#FFFFFF'}} text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Break-Even Point
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Break-Even Analysis</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">Break-Even Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">
                          {results.breakEvenUnits}
                        </div>
                        <p className="style={{color: '#FFFFFF'}}/80 text-sm">Units to Sell</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold style={{color: '#0070F3'}} mb-1">
                          ${results.breakEvenRevenue.toLocaleString()}
                        </div>
                        <p className="style={{color: '#FFFFFF'}}/80 text-sm">Revenue Needed</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium style={{color: '#FFFFFF'}}/80 mb-2">Contribution Margin</h4>
                      <div className="text-xl font-bold text-green-400">
                        ${results.contributionMargin}
                      </div>
                      <p className="style={{color: '#FFFFFF'}}/60 text-xs">Per unit profit</p>
                    </div>

                    <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium style={{color: '#FFFFFF'}}/80 mb-2">Margin Ratio</h4>
                      <div className="text-xl font-bold text-purple-400">
                        {results.contributionMarginRatio}%
                      </div>
                      <p className="style={{color: '#FFFFFF'}}/60 text-xs">Profit percentage</p>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold style={{color: '#FFFFFF'}} mb-2">💡 What This Means</h4>
                    <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-1">
                      <li>• You need to sell {results.breakEvenUnits} units to break even</li>
                      <li>• Each unit contributes ${results.contributionMargin} to fixed costs</li>
                      <li>• After {results.breakEvenUnits} units, every sale is pure profit</li>
                      <li>• Your profit margin is {results.contributionMarginRatio}%</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold style={{color: '#FFFFFF'}} mb-2">🎯 Next Steps</h4>
                    <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-1">
                      <li>• Set sales targets above break-even point</li>
                      <li>• Track monthly sales vs. break-even units</li>
                      <li>• Consider ways to reduce fixed or variable costs</li>
                      <li>• Test higher prices to improve margins</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6 text-center">
                  <p className="style={{color: '#FFFFFF'}}/60">
                    Enter your costs and click "Calculate Break-Even Point" to see results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/free-tools" 
            className="style={{color: '#FFFFFF'}}/80 hover:style={{color: '#FFFFFF'}} transition-colors"
          >
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </main>
  )
}
