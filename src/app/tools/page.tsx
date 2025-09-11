'use client'

import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailSignup from '@/components/EmailSignup'

export default function ToolsPage() {
  const tools = [
    {
      title: "Investment Calculator",
      description: "Calculate investment returns, portfolio growth, and see how your money can grow over time with compound interest.",
      link: "/investment-calculator",
      keywords: "investment calculator, investment return calculator, portfolio calculator"
    },
    {
      title: "Compound Interest Calculator", 
      description: "Discover the power of compound interest. Calculate how your savings and investments grow exponentially over time.",
      link: "/compound-interest-calculator",
      keywords: "compound interest calculator, compound interest formula, calculate compound interest"
    },
    {
      title: "Budget Calculator",
      description: "Take control of your finances with our budget calculator. Track income, expenses, and create a solid financial plan.",
      link: "/budget-calculator", 
      keywords: "budget calculator, monthly budget calculator, budget planner"
    },
    {
      title: "Retirement Calculator",
      description: "Plan your retirement with confidence. Calculate how much you need to save and what your retirement income could look like.",
      link: "/retirement-calculator",
      keywords: "retirement calculator, retirement planning calculator, how much to retire"
    }
  ]

  return (
    <>
      <Head>
        <title>Free Financial Tools & Calculators 2024 - Investment, Budget, Retirement</title>
        <meta name="description" content="Free financial tools and calculators for investment planning, budgeting, retirement planning, and compound interest. Professional-grade financial calculators at no cost." />
        <meta name="keywords" content="free financial tools, financial calculators, investment calculator, budget calculator, retirement calculator, compound interest calculator, personal finance tools" />
        <meta property="og:title" content="Free Financial Tools & Calculators 2024" />
        <meta property="og:description" content="Professional-grade financial calculators for investment planning, budgeting, and retirement planning. All tools are completely free." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Financial Tools & Calculators 2024" />
        <meta name="twitter:description" content="Professional-grade financial calculators for investment planning, budgeting, and retirement planning." />
        <link rel="canonical" href="https://sundaycents.com/tools" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free Financial Tools",
              "description": "Free financial tools and calculators for investment planning, budgeting, retirement planning, and compound interest",
              "url": "https://sundaycents.com/tools",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Investment Calculator",
                "Compound Interest Calculator", 
                "Budget Calculator",
                "Retirement Calculator"
              ]
            })
          }}
        />
      </Head>
      <main className="min-h-screen bg-white pb-footer">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Free Financial Tools & Calculators
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional-grade financial calculators to help you plan investments, create budgets, 
                and build wealth. All tools are completely free and designed to help you make informed financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {tool.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Keywords:</p>
                    <p className="text-sm text-gray-600">{tool.keywords}</p>
                  </div>
                  <a 
                    href={tool.link}
                    className="inline-block bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Use {tool.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Free Financial Tools?</h2>
              <p className="text-gray-600 mb-6">
                Our collection of free financial tools is designed to help you make informed decisions about your money. 
                Whether you're planning for retirement, creating a budget, or calculating investment returns, our calculators 
                provide accurate results to guide your financial planning.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional-Grade Calculations</h3>
              <p className="text-gray-600 mb-6">
                All our financial calculators use industry-standard formulas and methodologies. From compound interest calculations 
                to retirement planning projections, you can trust the accuracy of our results.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Completely Free</h3>
              <p className="text-gray-600 mb-6">
                Unlike many financial tools that require subscriptions or have hidden costs, all our calculators are completely free. 
                No registration required, no credit card needed - just accurate financial calculations at your fingertips.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy to Use</h3>
              <p className="text-gray-600 mb-6">
                Our financial tools are designed with simplicity in mind. Enter your information, get instant results, 
                and make informed decisions about your financial future.
              </p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Weekly Financial Tips & Tool Updates
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of readers who get actionable financial tips, new tool features, 
              and wealth-building strategies delivered to their inbox every Sunday.
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
