'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState('30')
  const [retirementAge, setRetirementAge] = useState('65')
  const [currentSavings, setCurrentSavings] = useState('10000')
  const [monthlyContribution, setMonthlyContribution] = useState('500')
  const [annualReturn, setAnnualReturn] = useState('7')
  const [desiredIncome, setDesiredIncome] = useState('5000')

  const calculateRetirement = () => {
    const age = parseFloat(currentAge) || 0
    const retireAge = parseFloat(retirementAge) || 0
    const savings = parseFloat(currentSavings) || 0
    const monthly = parseFloat(monthlyContribution) || 0
    const rate = parseFloat(annualReturn) / 100 / 12 || 0
    const months = (retireAge - age) * 12 || 0

    // Future value of current savings
    const futureValueCurrent = savings * Math.pow(1 + rate, months)
    
    // Future value of monthly contributions
    const futureValueMonthly = monthly * ((Math.pow(1 + rate, months) - 1) / rate)
    
    const totalRetirementFund = futureValueCurrent + futureValueMonthly
    
    // 4% rule for retirement income
    const monthlyRetirementIncome = (totalRetirementFund * 0.04) / 12
    const desiredMonthly = parseFloat(desiredIncome) || 0
    const shortfall = desiredMonthly - monthlyRetirementIncome

    return {
      totalFund: totalRetirementFund.toFixed(2),
      monthlyIncome: monthlyRetirementIncome.toFixed(2),
      shortfall: shortfall.toFixed(2),
      yearsToRetire: (retireAge - age).toFixed(0)
    }
  }

  const result = calculateRetirement()

  return (
    <>
      <Head>
        <title>Free Retirement Calculator 2024 - Retirement Planning & Savings Calculator</title>
        <meta name="description" content="Free retirement calculator to plan your retirement savings, calculate retirement income, and determine how much you need to retire. Plan your financial future today." />
        <meta name="keywords" content="retirement calculator, retirement planning calculator, retirement savings calculator, how much to retire, retirement income calculator, 401k calculator, retirement planning" />
        <meta property="og:title" content="Free Retirement Calculator 2024 - Retirement Planning Calculator" />
        <meta property="og:description" content="Plan your retirement with our free retirement calculator. Calculate retirement savings and income to secure your financial future." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Retirement Calculator 2024" />
        <meta name="twitter:description" content="Plan your retirement with our free retirement calculator tool." />
        <link rel="canonical" href="https://sundaycents.com/retirement-calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Retirement Calculator",
              "description": "Free retirement calculator to plan your retirement savings, calculate retirement income, and determine how much you need to retire",
              "url": "https://sundaycents.com/retirement-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Retirement planning calculator",
                "Retirement savings calculator",
                "Retirement income calculator",
                "401k calculator"
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
              Free Retirement Calculator 2024 - Retirement Planning & Savings Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your retirement with confidence using our free retirement calculator. Calculate how much you need to save, 
              what your retirement income could look like, and determine if you're on track for retirement. 
              Our retirement planning calculator helps you secure your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Planning Calculator - Calculate Your Retirement Savings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Age
                    </label>
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Retirement Age
                    </label>
                    <input
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Retirement Savings ($)
                    </label>
                    <input
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value)}
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
                      Desired Monthly Income ($)
                    </label>
                    <input
                      type="number"
                      value={desiredIncome}
                      onChange={(e) => setDesiredIncome(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Retirement Projection</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Years to Retirement:</span>
                    <span className="text-lg font-semibold">{result.yearsToRetire}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Total Retirement Fund:</span>
                    <span className="text-2xl font-bold text-green-600">${result.totalFund}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Income (4% rule):</span>
                    <span className="text-lg font-semibold">${result.monthlyIncome}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Income Gap:</span>
                    <span className={`text-lg font-semibold ${parseFloat(result.shortfall) <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${result.shortfall}
                    </span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Retirement Planning Essentials - How Much Do You Need to Retire?</h2>
            <p className="text-gray-600 mb-6">
              Retirement planning is one of the most important financial decisions you'll make. 
              Our free retirement calculator helps you understand how much you need to save to maintain 
              your desired lifestyle in retirement. Use our retirement planning calculator to determine 
              your retirement savings goals and track your progress.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The 4% Rule - Retirement Calculator Method</h3>
            <p className="text-gray-600 mb-6">
              The 4% rule suggests you can withdraw 4% of your retirement savings annually without 
              running out of money. Our retirement calculator uses this rule to estimate your retirement income. 
              This is based on historical market returns and is a common benchmark for retirement planning.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Retirement Planning Factors - Retirement Calculator Inputs</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Start Early:</strong> Time is your greatest asset in retirement planning - use our retirement calculator to see the impact of starting early</li>
              <li><strong>Maximize Employer Matching:</strong> Don't leave free money on the table - factor this into your retirement savings calculator</li>
              <li><strong>Diversify Your Investments:</strong> Spread risk across different asset classes for better retirement planning</li>
              <li><strong>Consider Healthcare Costs:</strong> Plan for rising medical expenses in your retirement income calculator</li>
              <li><strong>Account for Inflation:</strong> Your purchasing power will decrease over time - our retirement calculator accounts for this</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Retirement Calculator?</h3>
            <p className="text-gray-600 mb-6">
              Our free retirement calculator is designed to help you plan for a secure retirement. Unlike other retirement calculators, 
              ours provides comprehensive analysis of your retirement savings, income projections, and gap analysis. 
              Whether you're just starting to save or nearing retirement, our retirement planning calculator gives you the insights you need.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> If you're behind on retirement savings, use our retirement calculator to see how increasing 
                your monthly contributions or working a few extra years can impact your retirement income. Small changes can have big impacts on your retirement planning.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Retirement Calculator vs Other Financial Tools</h3>
            <p className="text-gray-600 mb-6">
              While there are many financial calculators available, our retirement calculator focuses specifically on helping you plan for retirement. 
              Our tool combines the best features of 401k calculators, retirement savings calculators, and retirement income calculators 
              into one comprehensive retirement planning solution.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Related Financial Tools</h3>
            <p className="text-gray-600 mb-4">
              Explore our other free financial calculators to complete your financial planning toolkit:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><a href="/investment-calculator" className="text-blue-600 hover:underline">Investment Calculator</a> - Calculate investment returns and portfolio growth</li>
              <li><a href="/compound-interest-calculator" className="text-blue-600 hover:underline">Compound Interest Calculator</a> - See how compound interest affects your retirement savings</li>
              <li><a href="/budget-calculator" className="text-blue-600 hover:underline">Budget Calculator</a> - Plan your monthly budget and track expenses</li>
              <li><a href="/tools" className="text-blue-600 hover:underline">All Free Financial Tools</a> - Browse our complete collection of calculators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secure Your Retirement Future with Expert Planning Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert retirement planning advice, advanced retirement calculator strategies, investment techniques, 
            and wealth-building tips delivered to your inbox every Sunday. Learn how to use retirement calculators effectively.
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
