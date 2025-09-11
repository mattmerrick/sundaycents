'use client'

import { useState } from 'react'

export default function InvestmentCalculator() {
  const [initialAmount, setInitialAmount] = useState('10000')
  const [monthlyContribution, setMonthlyContribution] = useState('500')
  const [annualReturn, setAnnualReturn] = useState('7')
  const [years, setYears] = useState('10')

  const calculateInvestment = () => {
    const principal = parseFloat(initialAmount) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const rate = parseFloat(annualReturn) / 100 / 12 || 0
    const months = parseFloat(years) * 12 || 0

    // Future value of lump sum
    const futureValueLump = principal * Math.pow(1 + rate, months)
    
    // Future value of monthly contributions
    const futureValueMonthly = monthly * ((Math.pow(1 + rate, months) - 1) / rate)
    
    const totalValue = futureValueLump + futureValueMonthly
    const totalInvested = principal + (monthly * months)
    const totalGains = totalValue - totalInvested

    return {
      totalValue: totalValue.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      totalGains: totalGains.toFixed(2)
    }
  }

  const result = calculateInvestment()

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Calculator</h2>
      <p className="text-gray-600 mb-6">Calculate your investment growth over time.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Initial Investment ($)
          </label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Contribution ($)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Return (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Total Value:</span>
            <span className="font-semibold">${result.totalValue}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Invested:</span>
            <span>${result.totalInvested}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Gains:</span>
            <span className="text-green-600 font-semibold">${result.totalGains}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
