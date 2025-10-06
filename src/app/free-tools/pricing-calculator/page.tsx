'use client'

import { useState } from 'react'

export default function PricingCalculator() {
  const [costPerUnit, setCostPerUnit] = useState('')
  const [timePerUnit, setTimePerUnit] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [desiredProfitMargin, setDesiredProfitMargin] = useState('30')
  const [results, setResults] = useState<{
    minimumPrice: number
    recommendedPrice: number
    breakEvenPrice: number
    profitPerUnit: number
  } | null>(null)

  const calculatePricing = () => {
    const cost = parseFloat(costPerUnit) || 0
    const time = parseFloat(timePerUnit) || 0
    const hourly = parseFloat(hourlyRate) || 0
    const margin = parseFloat(desiredProfitMargin) || 0

    // Calculate labor cost
    const laborCost = (time / 60) * hourly
    
    // Total cost per unit
    const totalCost = cost + laborCost
    
    // Break-even price
    const breakEvenPrice = totalCost
    
    // Minimum price (break-even + small profit)
    const minimumPrice = totalCost * 1.1
    
    // Recommended price based on desired profit margin
    const recommendedPrice = totalCost / (1 - margin / 100)
    
    // Profit per unit at recommended price
    const profitPerUnit = recommendedPrice - totalCost

    setResults({
      minimumPrice: Math.round(minimumPrice * 100) / 100,
      recommendedPrice: Math.round(recommendedPrice * 100) / 100,
      breakEvenPrice: Math.round(breakEvenPrice * 100) / 100,
      profitPerUnit: Math.round(profitPerUnit * 100) / 100
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold style={{color: '#FFFFFF'}} mb-6">
            Pricing Calculator
          </h1>
          <p className="text-xl style={{color: '#FFFFFF'}}/90 max-w-2xl mx-auto">
            Calculate the optimal price for your products or services based on costs, time, and desired profit margins.
          </p>
        </div>

        <div className="style={{backgroundColor: '#FFFFFF'}}/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Input Your Costs</h2>
              
              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Material/Product Cost per Unit ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={costPerUnit}
                  onChange={(e) => setCostPerUnit(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Time per Unit (minutes)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={timePerUnit}
                  onChange={(e) => setTimePerUnit(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Your Hourly Rate ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#FFFFFF'}} mb-2">
                  Desired Profit Margin (%)
                </label>
                <input
                  type="number"
                  step="1"
                  value={desiredProfitMargin}
                  onChange={(e) => setDesiredProfitMargin(e.target.value)}
                  placeholder="30"
                  className="w-full px-4 py-3 rounded-lg style={{backgroundColor: '#FFFFFF'}}/20 border border-white/30 style={{color: '#FFFFFF'}} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                onClick={calculatePricing}
                disabled={!costPerUnit || !timePerUnit || !hourlyRate}
                className="w-full style={{backgroundColor: '#FFFFFF'}} text-green-600 font-semibold px-6 py-3 rounded-lg hover:style={{backgroundColor: '#FFFFFF'}}/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Pricing
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold style={{color: '#FFFFFF'}} mb-6">Pricing Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold style={{color: '#FFFFFF'}} mb-4">Recommended Pricing</h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      ${results.recommendedPrice}
                    </div>
                    <p className="style={{color: '#FFFFFF'}}/80 text-sm">
                      This price achieves your {desiredProfitMargin}% profit margin
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium style={{color: '#FFFFFF'}}/80 mb-2">Minimum Price</h4>
                      <div className="text-xl font-bold text-yellow-400">
                        ${results.minimumPrice}
                      </div>
                      <p className="style={{color: '#FFFFFF'}}/60 text-xs">Break-even + 10%</p>
                    </div>

                    <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                      <h4 className="text-sm font-medium style={{color: '#FFFFFF'}}/80 mb-2">Break-Even</h4>
                      <div className="text-xl font-bold text-red-400">
                        ${results.breakEvenPrice}
                      </div>
                      <p className="style={{color: '#FFFFFF'}}/60 text-xs">No profit/loss</p>
                    </div>
                  </div>

                  <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium style={{color: '#FFFFFF'}}/80 mb-2">Profit per Unit</h4>
                    <div className="text-2xl font-bold text-green-400">
                      ${results.profitPerUnit}
                    </div>
                    <p className="style={{color: '#FFFFFF'}}/60 text-xs">
                      At recommended price
                    </p>
                  </div>

                  <div className="bg-blue-500/20 border style={{border: '1px solid #0070F3'}}/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold style={{color: '#FFFFFF'}} mb-2">💡 Pro Tips</h4>
                    <ul className="style={{color: '#FFFFFF'}}/90 text-sm space-y-1">
                      <li>• Consider market competition</li>
                      <li>• Test different price points</li>
                      <li>• Factor in overhead costs</li>
                      <li>• Review pricing quarterly</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="style={{backgroundColor: '#FFFFFF'}}/10 rounded-lg p-6 text-center">
                  <p className="style={{color: '#FFFFFF'}}/60">
                    Enter your costs and click "Calculate Pricing" to see results
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
