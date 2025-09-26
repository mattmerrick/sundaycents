'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'

export default function CompoundInterestCalculatorPage() {
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
    <>
      <Head>
        <title>Free Compound Interest Calculator 2025 - Calculate Compound Interest Online</title>
        <meta name="description" content="Free compound interest calculator to calculate compound interest on investments, savings, and loans. See how compound interest grows your money over time with our advanced calculator." />
        <meta name="keywords" content="compound interest calculator, compound interest formula, compound interest calculator online, calculate compound interest, compound interest rate calculator, compound interest investment calculator" />
        <meta property="og:title" content="Free Compound Interest Calculator 2025 - Calculate Compound Interest" />
        <meta property="og:description" content="Calculate compound interest on investments and savings with our free compound interest calculator. See how your money grows over time." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Compound Interest Calculator 2025" />
        <meta name="twitter:description" content="Calculate compound interest on investments and savings with our free compound interest calculator tool." />
        <link rel="canonical" href="https://sundaycents.com/compound-interest-calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Compound Interest Calculator",
              "description": "Free compound interest calculator to calculate compound interest on investments, savings, and loans",
              "url": "https://sundaycents.com/compound-interest-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Calculate compound interest",
                "Compound interest formula calculator",
                "Investment compound interest",
                "Savings compound interest calculator"
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
              Free Compound Interest Calculator 2025 - Calculate Compound Interest Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the power of compound interest with our free compound interest calculator. 
              Calculate compound interest on investments, savings, and loans. See how your money can grow exponentially 
              over time with our advanced compound interest calculator tool.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compound Interest Calculator - Calculate Compound Interest Formula</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Principal Amount ($)
                  </label>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Compound Frequency
                  </label>
                  <select
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  >
                    <option value="1">Annually</option>
                    <option value="2">Semi-annually</option>
                    <option value="4">Quarterly</option>
                    <option value="12">Monthly</option>
                    <option value="365">Daily</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compound Interest Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Final Amount:</span>
                    <span className="text-2xl font-bold text-green-600">${result.amount}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Interest Earned:</span>
                    <span className="text-lg font-semibold text-green-600">${result.interest}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Compound Interest - The Eighth Wonder of the World</h2>
            <p className="text-gray-600 mb-6">
              Compound interest is often called the "eighth wonder of the world" because of its 
              incredible power to grow wealth over time. Our compound interest calculator helps you understand 
              how compound interest works and calculate compound interest on your investments. Unlike simple interest, 
              compound interest earns returns on both your principal and previously earned interest.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Compound Interest Works - Compound Interest Formula</h3>
            <p className="text-gray-600 mb-6">
              When you invest money, you earn interest on your initial investment. With compound interest, 
              you also earn interest on the interest you've already earned. This creates a snowball effect 
              that accelerates your wealth building over time. Use our compound interest calculator to see 
              the compound interest formula in action and calculate compound interest for any investment scenario.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Factors That Affect Compound Interest Calculation</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Principal Amount:</strong> The initial amount you invest - use our compound interest calculator to see how different amounts grow</li>
              <li><strong>Interest Rate:</strong> The annual percentage rate you earn - higher rates compound faster</li>
              <li><strong>Time:</strong> How long your money compounds (the most powerful factor) - time is compound interest's best friend</li>
              <li><strong>Compounding Frequency:</strong> How often interest is calculated and added - daily, monthly, or annually</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compound Interest Calculator vs Simple Interest</h3>
            <p className="text-gray-600 mb-6">
              Our compound interest calculator shows the dramatic difference between compound interest and simple interest. 
              While simple interest only calculates interest on the principal amount, compound interest calculates 
              interest on both the principal and previously earned interest. This difference becomes more significant over time.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Time is your greatest ally in compound interest. Use our compound interest calculator 
                to see how starting to invest just 10 years earlier can result in significantly more wealth, even with smaller amounts. 
                The compound interest formula shows exponential growth over time.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Best Compound Interest Calculator Features</h3>
            <p className="text-gray-600 mb-6">
              Our free compound interest calculator is the best tool to calculate compound interest online. 
              Unlike other compound interest calculators, ours provides real-time calculations, multiple compounding 
              frequencies, and detailed breakdowns of how your money grows over time.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Related Financial Tools</h3>
            <p className="text-gray-600 mb-4">
              Explore our other free financial calculators to complete your financial planning toolkit:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><a href="/investment-calculator" className="text-blue-600 hover:underline">Investment Calculator</a> - Calculate investment returns and portfolio growth</li>
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
            Master Compound Interest Strategies & Calculator Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly insights on maximizing compound interest, advanced compound interest calculator strategies, 
            investment techniques, and wealth-building tips delivered to your inbox every Sunday. 
            Learn how to use compound interest calculators effectively.
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
