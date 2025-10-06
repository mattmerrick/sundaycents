'use client'

import { useState } from 'react'

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState('')
  const [costOfGoodsSold, setCostOfGoodsSold] = useState('')
  const [operatingExpenses, setOperatingExpenses] = useState('')
  const [otherExpenses, setOtherExpenses] = useState('')
  const [results, setResults] = useState<{
    grossProfit: number
    grossProfitMargin: number
    operatingProfit: number
    operatingProfitMargin: number
    netProfit: number
    netProfitMargin: number
  } | null>(null)

  const calculateProfitMargin = () => {
    const revenueNum = parseFloat(revenue) || 0
    const cogsNum = parseFloat(costOfGoodsSold) || 0
    const opExpNum = parseFloat(operatingExpenses) || 0
    const otherExpNum = parseFloat(otherExpenses) || 0

    if (revenueNum === 0) {
      alert('Please enter a revenue amount')
      return
    }

    const grossProfit = revenueNum - cogsNum
    const grossProfitMargin = (grossProfit / revenueNum) * 100

    const operatingProfit = grossProfit - opExpNum
    const operatingProfitMargin = (operatingProfit / revenueNum) * 100

    const netProfit = operatingProfit - otherExpNum
    const netProfitMargin = (netProfit / revenueNum) * 100

    setResults({
      grossProfit,
      grossProfitMargin,
      operatingProfit,
      operatingProfitMargin,
      netProfit,
      netProfitMargin,
    })
  }

  const resetCalculator = () => {
    setRevenue('')
    setCostOfGoodsSold('')
    setOperatingExpenses('')
    setOtherExpenses('')
    setResults(null)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const getMarginColor = (margin: number) => {
    if (margin >= 20) return 'text-green-600'
    if (margin >= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getMarginStatus = (margin: number) => {
    if (margin >= 20) return 'Excellent'
    if (margin >= 15) return 'Good'
    if (margin >= 10) return 'Average'
    if (margin >= 5) return 'Below Average'
    return 'Poor'
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold style={{color: '#111111'}} mb-4">
            Profit Margin Calculator
          </h1>
          <p className="text-xl style={{color: '#555555'}} max-w-2xl mx-auto">
            Calculate your business's profit margins to understand profitability and make better financial decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold style={{color: '#111111'}} mb-6">Enter Your Financial Data</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                  Total Revenue ($)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter total revenue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                  Cost of Goods Sold ($)
                </label>
                <input
                  type="number"
                  value={costOfGoodsSold}
                  onChange={(e) => setCostOfGoodsSold(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter COGS"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                  Operating Expenses ($)
                </label>
                <input
                  type="number"
                  value={operatingExpenses}
                  onChange={(e) => setOperatingExpenses(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter operating expenses"
                />
              </div>

              <div>
                <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                  Other Expenses ($)
                </label>
                <input
                  type="number"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter other expenses"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={calculateProfitMargin}
                  className="flex-1 style={{backgroundColor: '#0070F3'}} style={{color: '#FFFFFF'}} py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Calculate
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex-1 style={{backgroundColor: '#6B7280'}} style={{color: '#FFFFFF'}} py-2 px-4 rounded-md hover:style={{backgroundColor: '#FFFFFF', border: '1px solid #6B7280'}} transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold style={{color: '#111111'}} mb-6">Profit Margin Results</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Gross Profit */}
                <div className="border-l-4 style={{border: '1px solid #0070F3'}} pl-4">
                  <h3 className="text-lg font-semibold style={{color: '#111111'}}">Gross Profit</h3>
                  <p className="text-2xl font-bold style={{color: '#0070F3'}}">
                    {formatCurrency(results.grossProfit)}
                  </p>
                  <p className="text-sm style={{color: '#555555'}}">
                    Gross Profit Margin: 
                    <span className={`ml-2 font-semibold ${getMarginColor(results.grossProfitMargin)}`}>
                      {results.grossProfitMargin.toFixed(2)}% ({getMarginStatus(results.grossProfitMargin)})
                    </span>
                  </p>
                </div>

                {/* Operating Profit */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold style={{color: '#111111'}}">Operating Profit</h3>
                  <p className="text-2xl font-bold text-yellow-600">
                    {formatCurrency(results.operatingProfit)}
                  </p>
                  <p className="text-sm style={{color: '#555555'}}">
                    Operating Profit Margin: 
                    <span className={`ml-2 font-semibold ${getMarginColor(results.operatingProfitMargin)}`}>
                      {results.operatingProfitMargin.toFixed(2)}% ({getMarginStatus(results.operatingProfitMargin)})
                    </span>
                  </p>
                </div>

                {/* Net Profit */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold style={{color: '#111111'}}">Net Profit</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.netProfit)}
                  </p>
                  <p className="text-sm style={{color: '#555555'}}">
                    Net Profit Margin: 
                    <span className={`ml-2 font-semibold ${getMarginColor(results.netProfitMargin)}`}>
                      {results.netProfitMargin.toFixed(2)}% ({getMarginStatus(results.netProfitMargin)})
                    </span>
                  </p>
                </div>

                {/* Profitability Analysis */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold style={{color: '#111111'}} mb-2">Profitability Analysis</h4>
                  <ul className="text-sm style={{color: '#555555'}} space-y-1">
                    <li>• Gross margin shows product/service profitability</li>
                    <li>• Operating margin shows operational efficiency</li>
                    <li>• Net margin shows overall business profitability</li>
                    <li>• Industry average is typically 10-20% net margin</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="style={{color: '#6B7280'}}">
                  Enter your financial data and click "Calculate" to see your profit margins.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/free-tools" className="style={{color: '#0070F3'}} hover:text-blue-800">
            ← Back to Free Tools
          </a>
        </div>
      </div>
    </div>
  )
}