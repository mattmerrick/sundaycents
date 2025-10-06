'use client'

import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'

export default function BudgetCalculatorPage() {
  const [income, setIncome] = useState('5000')
  const [housing, setHousing] = useState('1500')
  const [utilities, setUtilities] = useState('200')
  const [groceries, setGroceries] = useState('400')
  const [transportation, setTransportation] = useState('300')
  const [insurance, setInsurance] = useState('200')
  const [debt, setDebt] = useState('300')
  const [savings, setSavings] = useState('500')
  const [entertainment, setEntertainment] = useState('200')
  const [other, setOther] = useState('200')

  const calculateBudget = () => {
    const monthlyIncome = parseFloat(income) || 0
    const totalExpenses = 
      (parseFloat(housing) || 0) +
      (parseFloat(utilities) || 0) +
      (parseFloat(groceries) || 0) +
      (parseFloat(transportation) || 0) +
      (parseFloat(insurance) || 0) +
      (parseFloat(debt) || 0) +
      (parseFloat(savings) || 0) +
      (parseFloat(entertainment) || 0) +
      (parseFloat(other) || 0)

    const remaining = monthlyIncome - totalExpenses
    const savingsRate = monthlyIncome > 0 ? ((parseFloat(savings) || 0) / monthlyIncome * 100) : 0

    return {
      totalExpenses: totalExpenses.toFixed(2),
      remaining: remaining.toFixed(2),
      savingsRate: savingsRate.toFixed(1)
    }
  }

  const result = calculateBudget()

  return (
    <>
      <Head>
        <title>Free Budget Calculator 2025 - Monthly Budget Planner & Calculator</title>
        <meta name="description" content="Free budget calculator to create monthly budgets, track expenses, and manage personal finances. Use our budget calculator to plan your spending and save money." />
        <meta name="keywords" content="budget calculator, monthly budget calculator, budget planner, personal budget calculator, household budget calculator, budget tool, budget tracker" />
        <meta property="og:title" content="Free Budget Calculator 2025 - Monthly Budget Planner" />
        <meta property="og:description" content="Create and manage your monthly budget with our free budget calculator. Track expenses and plan your spending effectively." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Budget Calculator 2025" />
        <meta name="twitter:description" content="Create and manage your monthly budget with our free budget calculator tool." />
        <link rel="canonical" href="https://sundaycents.com/budget-calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Budget Calculator",
              "description": "Free budget calculator to create monthly budgets, track expenses, and manage personal finances",
              "url": "https://sundaycents.com/budget-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Monthly budget calculator",
                "Expense tracking",
                "Budget planning",
                "Personal finance management"
              ]
            })
          }}
        />
      </Head>
      <main className="min-h-screen style={{backgroundColor: '#FFFFFF'}} pb-footer">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold style={{color: '#111111'}} mb-4">
              Free Budget Calculator 2025 - Monthly Budget Planner & Personal Finance Tool
            </h1>
            <p className="text-xl style={{color: '#555555'}} max-w-3xl mx-auto">
              Take control of your finances with our free budget calculator. Create monthly budgets, track your income, 
              expenses, and savings to build a solid financial foundation. Our budget calculator is the best tool for personal finance management.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold style={{color: '#111111'}} mb-6">Monthly Budget Calculator - Personal Budget Planner Tool</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Monthly Income ($)
                    </label>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Housing/Rent ($)
                    </label>
                    <input
                      type="number"
                      value={housing}
                      onChange={(e) => setHousing(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Utilities ($)
                    </label>
                    <input
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Groceries ($)
                    </label>
                    <input
                      type="number"
                      value={groceries}
                      onChange={(e) => setGroceries(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Transportation ($)
                    </label>
                    <input
                      type="number"
                      value={transportation}
                      onChange={(e) => setTransportation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Insurance ($)
                    </label>
                    <input
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Debt Payments ($)
                    </label>
                    <input
                      type="number"
                      value={debt}
                      onChange={(e) => setDebt(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Savings ($)
                    </label>
                    <input
                      type="number"
                      value={savings}
                      onChange={(e) => setSavings(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Entertainment ($)
                    </label>
                    <input
                      type="number"
                      value={entertainment}
                      onChange={(e) => setEntertainment(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium style={{color: '#555555'}} mb-2">
                      Other Expenses ($)
                    </label>
                    <input
                      type="number"
                      value={other}
                      onChange={(e) => setOther(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-4">Budget Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="style={{color: '#555555'}}">Monthly Income:</span>
                    <span className="text-lg font-semibold text-green-600">${income}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="style={{color: '#555555'}}">Total Expenses:</span>
                    <span className="text-lg font-semibold">${result.totalExpenses}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="style={{color: '#555555'}}">Remaining:</span>
                    <span className={`text-lg font-semibold ${parseFloat(result.remaining) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${result.remaining}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="style={{color: '#555555'}}">Savings Rate:</span>
                    <span className="text-lg font-semibold style={{color: '#0070F3'}}">{result.savingsRate}%</span>
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
            <h2 className="text-3xl font-bold style={{color: '#111111'}} mb-6">How to Create an Effective Budget with Our Budget Calculator</h2>
            <p className="style={{color: '#555555'}} mb-6">
              A budget is your financial roadmap. Our free budget calculator helps you understand where your money goes, 
              identify spending patterns, and make informed decisions about your financial future. Use our budget calculator 
              to create a comprehensive monthly budget that works for your lifestyle.
            </p>
            
            <h3 className="text-2xl font-semibold style={{color: '#111111'}} mb-4">The 50/30/20 Budget Rule - Budget Calculator Method</h3>
            <p className="style={{color: '#555555'}} mb-4">
              A popular budgeting method that our budget calculator can help you implement. This rule divides your after-tax income into three categories:
            </p>
            <ul className="list-disc list-inside style={{color: '#555555'}} mb-6 space-y-2">
              <li><strong>50% for Needs:</strong> Housing, utilities, groceries, transportation, minimum debt payments - use our budget calculator to track these essential expenses</li>
              <li><strong>30% for Wants:</strong> Entertainment, dining out, hobbies, non-essential purchases - our budget calculator helps you allocate discretionary spending</li>
              <li><strong>20% for Savings:</strong> Emergency fund, retirement, debt payments above minimums - the budget calculator ensures you prioritize savings</li>
            </ul>

            <h3 className="text-2xl font-semibold style={{color: '#111111'}} mb-4">Best Budget Calculator Tips for 2025</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <p className="style={{color: '#555555'}}">
                <strong>Track Every Dollar with Budget Calculator:</strong> Use our budget calculator to see exactly where your money goes. 
                Our monthly budget calculator provides detailed expense tracking and helps you identify spending patterns. 
                Awareness is the first step to financial control.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <p className="style={{color: '#555555'}}">
                <strong>Pay Yourself First:</strong> Use our budget calculator to set aside savings before paying other expenses. 
                Our personal budget calculator ensures you're building wealth consistently by prioritizing savings in your monthly budget.
              </p>
            </div>

            <h3 className="text-2xl font-semibold style={{color: '#111111'}} mb-4">Why Choose Our Budget Calculator?</h3>
            <p className="style={{color: '#555555'}} mb-6">
              Our free budget calculator is designed to help you take control of your personal finances. Unlike other budget calculators, 
              ours provides real-time calculations, comprehensive expense tracking, and detailed budget analysis. Whether you're creating 
              your first budget or optimizing an existing one, our budget calculator gives you the tools you need for financial success.
            </p>

            <h3 className="text-2xl font-semibold style={{color: '#111111'}} mb-4">Budget Calculator vs Other Financial Tools</h3>
            <p className="style={{color: '#555555'}} mb-6">
              While there are many financial tools available, our budget calculator focuses specifically on helping you create and manage 
              monthly budgets effectively. Our tool combines the best features of budget planners, expense trackers, and personal finance 
              calculators into one comprehensive budget calculator solution.
            </p>

            <h3 className="text-2xl font-semibold style={{color: '#111111'}} mb-4">Related Financial Tools</h3>
            <p className="style={{color: '#555555'}} mb-4">
              Explore our other free financial calculators to complete your financial planning toolkit:
            </p>
            <ul className="list-disc list-inside style={{color: '#555555'}} mb-6 space-y-2">
              <li><a href="/investment-calculator" className="style={{color: '#0070F3'}} hover:underline">Investment Calculator</a> - Calculate investment returns and portfolio growth</li>
              <li><a href="/compound-interest-calculator" className="style={{color: '#0070F3'}} hover:underline">Compound Interest Calculator</a> - See how compound interest affects your savings</li>
              <li><a href="/retirement-calculator" className="style={{color: '#0070F3'}} hover:underline">Retirement Calculator</a> - Plan for your retirement and calculate savings needs</li>
              <li><a href="/tools" className="style={{color: '#0070F3'}} hover:underline">All Free Financial Tools</a> - Browse our complete collection of calculators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold style={{color: '#111111'}} mb-4">
            Master Your Money with Budget Calculator Tips & Weekly Advice
          </h2>
          <p className="text-lg style={{color: '#555555'}} mb-8 max-w-2xl mx-auto">
            Get practical budgeting advice, advanced budget calculator strategies, money-saving techniques, 
            and financial planning tips delivered to your inbox every Sunday. Learn how to use budget calculators effectively.
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
