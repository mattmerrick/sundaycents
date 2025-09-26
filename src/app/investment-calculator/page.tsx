'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'

export default function InvestmentCalculatorPage() {
  const [initialAmount, setInitialAmount] = useState('10000')
  const [monthlyContribution, setMonthlyContribution] = useState('500')
  const [annualReturn, setAnnualReturn] = useState('7')
  const [years, setYears] = useState('10')

  const calculateInvestment = () => {
    const principal = parseFloat(initialAmount) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const rate = parseFloat(annualReturn) / 100 / 12 || 0
    const months = parseFloat(years) * 12 || 0

    const futureValueLump = principal * Math.pow(1 + rate, months)
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
    <>
      <Head>
        <title>Free Investment Calculator 2025 - Calculate Investment Returns & Growth</title>
        <meta name="description" content="Free investment calculator to calculate investment returns, compound interest, and portfolio growth. Plan your financial future with our advanced investment calculator tool." />
        <meta name="keywords" content="investment calculator, investment return calculator, portfolio calculator, investment growth calculator, compound interest calculator, financial calculator" />
        <meta property="og:title" content="Free Investment Calculator 2025 - Calculate Investment Returns" />
        <meta property="og:description" content="Calculate your investment returns and portfolio growth with our free investment calculator. Plan your financial future today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Investment Calculator 2025" />
        <meta name="twitter:description" content="Calculate investment returns and portfolio growth with our free investment calculator tool." />
        <link rel="canonical" href="https://sundaycents.com/investment-calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Investment Calculator",
              "description": "Free investment calculator to calculate investment returns, compound interest, and portfolio growth",
              "url": "https://sundaycents.com/investment-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Calculate investment returns",
                "Compound interest calculation",
                "Portfolio growth projection",
                "Monthly contribution planning"
              ]
            })
          }}
        />
      </Head>
      <main className="min-h-screen bg-white pb-footer">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Free Investment Calculator 2025 - Calculate Investment Returns & Portfolio Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our free investment calculator to calculate investment returns, compound interest, and portfolio growth. 
              Plan your financial future with our advanced investment calculator tool that helps you understand how your money can grow over time.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Return Calculator - Calculate Your Portfolio Growth</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Investment ($)
                  </label>
                  <input
                    type="number"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Total Value:</span>
                    <span className="text-2xl font-bold text-green-600">${result.totalValue}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Total Invested:</span>
                    <span className="text-lg font-semibold">${result.totalInvested}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Total Gains:</span>
                    <span className="text-lg font-semibold text-green-600">${result.totalGains}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Our Free Investment Calculator</h2>
            <p className="text-gray-600 mb-6">
              Our free investment calculator is the best tool to calculate investment returns and understand how your money can grow over time. 
              Whether you're planning for retirement, saving for a house, or building wealth, this investment return calculator 
              gives you a clear picture of your potential returns and portfolio growth.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Calculator Features</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Calculate compound interest on your investments automatically</li>
              <li>Factor in regular monthly contributions to your portfolio</li>
              <li>See total gains vs. total invested with detailed breakdown</li>
              <li>Plan for different time horizons and investment periods</li>
              <li>Adjust expected returns based on your risk tolerance and investment strategy</li>
              <li>Compare different investment scenarios and contribution amounts</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Best Investment Calculator Tips for 2025</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <p className="text-gray-700">
                <strong>Start Early with Investment Calculator:</strong> The power of compound interest works best over long periods. 
                Use our investment calculator to see how even small amounts invested early can grow significantly over time. 
                Calculate investment returns to understand the impact of time on your portfolio.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <p className="text-gray-700">
                <strong>Diversify Your Portfolio:</strong> Don't put all your eggs in one basket. 
                Use our investment return calculator to model different asset allocations and see how diversification 
                affects your overall returns. Spread your investments across different asset classes to reduce risk.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Investment Calculator?</h3>
            <p className="text-gray-600 mb-6">
              Our free investment calculator is designed to help you make informed financial decisions. 
              Unlike other investment calculators, ours provides real-time calculations and comprehensive 
              analysis of your investment growth potential. Whether you're a beginner investor or experienced 
              portfolio manager, our investment return calculator gives you the insights you need.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Calculator vs Other Financial Tools</h3>
            <p className="text-gray-600 mb-6">
              While there are many financial calculators available, our investment calculator focuses specifically 
              on helping you calculate investment returns and understand portfolio growth. Our tool combines 
              the best features of compound interest calculators, portfolio calculators, and investment growth 
              calculators into one comprehensive solution.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Related Financial Tools</h3>
            <p className="text-gray-600 mb-4">
              Explore our other free financial calculators to complete your financial planning toolkit:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><a href="/compound-interest-calculator" className="text-blue-600 hover:underline">Compound Interest Calculator</a> - See how compound interest affects your investments</li>
              <li><a href="/budget-calculator" className="text-blue-600 hover:underline">Budget Calculator</a> - Plan your monthly budget and track expenses</li>
              <li><a href="/retirement-calculator" className="text-blue-600 hover:underline">Retirement Calculator</a> - Plan for your retirement and calculate savings needs</li>
              <li><a href="/tools" className="text-blue-600 hover:underline">All Free Financial Tools</a> - Browse our complete collection of calculators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Weekly Investment Calculator Tips & Market Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who get actionable financial tips every Sunday. 
            Learn about market trends, investment strategies, portfolio management, and wealth-building techniques. 
            Get exclusive access to advanced investment calculator strategies and market analysis.
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignup variant="cta" />
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
