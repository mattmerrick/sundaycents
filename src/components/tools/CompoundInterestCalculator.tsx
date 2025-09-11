'use client'

import { useState } from 'react'

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('1000')
  const [rate, setRate] = useState('5')
  const [time, setTime] = useState('10')
  const [compoundFrequency, setCompoundFrequency] = useState('12')

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal) || 0
    const r = parseFloat(rate) / 100 || 0
    const t = parseFloat(time) || 0
    const n = parseFloat(compoundFrequency) || 1

    const amount = p * Math.pow(1 + (r / n), n * t)
    const interest = amount - p

    return {
      amount: amount.toFixed(2),
      interest: interest.toFixed(2)
    }
  }

  const result = calculateCompoundInterest()

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Compound Interest Calculator</h2>
      <p className="text-gray-600 mb-6">See how your money grows with compound interest.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Principal Amount ($)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time Period (Years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Compound Frequency
          </label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Final Amount:</span>
            <span className="font-semibold">${result.amount}</span>
          </div>
          <div className="flex justify-between">
            <span>Interest Earned:</span>
            <span className="text-green-600 font-semibold">${result.interest}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
