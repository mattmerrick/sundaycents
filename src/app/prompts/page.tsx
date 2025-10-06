'use client'

import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptsPage() {
  return (
    <>
      <Head>
        <title>Ultimate Finance Prompts Pack - 1,000 AI Prompts for Making Money & Financial Success</title>
        <meta name="description" content="Get 1,000 professional AI prompts across 10 categories: budgeting, saving, debt payoff, retirement, stocks, alternatives, business finance, professional use, taxes, and fun. The ultimate prompt pack for anyone wanting to make money with AI." />
        <meta name="keywords" content="finance prompts, AI prompts, money making prompts, investment prompts, business finance prompts, financial advisor prompts, wealth building prompts" />
        <meta property="og:title" content="Ultimate Finance Prompts Pack - 1,000 AI Prompts for Making Money" />
        <meta property="og:description" content="1,000 professional AI prompts across 10 categories for personal finance, investing, and wealth building. Start making money with AI today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ultimate Finance Prompts Pack - 1,000 Prompts" />
        <meta name="twitter:description" content="1,000 professional AI prompts across 10 categories for personal finance, investing, and wealth building." />
        <link rel="canonical" href="https://sundaycents.com/prompts" />
      </Head>
      <main className="min-h-screen style={{backgroundColor: '#FFFFFF'}} pb-footer">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold style={{color: '#111111'}} mb-6">
              The Ultimate Finance Prompts Pack
            </h1>
            <p className="text-xl sm:text-2xl style={{color: '#555555'}} mb-8 max-w-3xl mx-auto">
              1,000 Professional AI Prompts Across 10 Categories: Budgeting, Saving, Debt Payoff, Retirement, Stocks & ETFs, Alternatives, Business Finance, Professional Use, Taxes, and Fun
            </p>
            <div className="style={{backgroundColor: '#FFFFFF'}} rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">$69</div>
                <div className="style={{color: '#6B7280'}} mb-6">One-time payment • Lifetime access</div>
                <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 style={{color: '#FFFFFF'}} font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Get Instant Access
                </button>
                <p className="text-sm style={{color: '#6B7280'}} mt-4">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} text-center mb-8">
              Tired of Generic AI Responses That Don't Help You Make Money?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">❌ What You're Getting Now</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Generic financial advice that doesn't apply to you</li>
                  <li>• Vague investment recommendations</li>
                  <li>• One-size-fits-all budgeting tips</li>
                  <li>• AI responses that sound like a textbook</li>
                  <li>• No actionable steps to actually make money</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">✅ What You'll Get With Our Prompts</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Specific, actionable financial strategies</li>
                  <li>• Personalized investment analysis</li>
                  <li>• Custom budget plans for your situation</li>
                  <li>• Professional-grade financial advice</li>
                  <li>• Step-by-step money-making strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} text-center mb-12">
              What's Inside: 1,000 Professional Finance Prompts (100 in Each Category)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Budgeting */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">💰 Budgeting (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Monthly budget creation & optimization</li>
                  <li>• Expense tracking & categorization</li>
                  <li>• Budget variance analysis</li>
                  <li>• Zero-based budgeting strategies</li>
                  <li>• Emergency fund planning</li>
                </ul>
              </div>

              {/* Saving */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">🏦 Saving (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Savings goal setting & tracking</li>
                  <li>• High-yield savings optimization</li>
                  <li>• Automated savings strategies</li>
                  <li>• Savings rate optimization</li>
                  <li>• Compound interest calculations</li>
                </ul>
              </div>

              {/* Debt Payoff */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">💳 Debt Payoff (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Debt snowball vs avalanche methods</li>
                  <li>• Debt consolidation strategies</li>
                  <li>• Credit score improvement plans</li>
                  <li>• Student loan optimization</li>
                  <li>• Mortgage payoff acceleration</li>
                </ul>
              </div>

              {/* Retirement */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">🏖️ Retirement (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• 401k & IRA optimization</li>
                  <li>• Retirement income planning</li>
                  <li>• Social Security strategies</li>
                  <li>• Early retirement planning</li>
                  <li>• Healthcare cost planning</li>
                </ul>
              </div>

              {/* Stocks & ETFs */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">📈 Stocks & ETFs (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Stock research & analysis</li>
                  <li>• ETF selection & comparison</li>
                  <li>• Portfolio allocation strategies</li>
                  <li>• Risk assessment frameworks</li>
                  <li>• Market timing techniques</li>
                </ul>
              </div>

              {/* Alternatives */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">🏠 Alternatives (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Real estate investment analysis</li>
                  <li>• REIT evaluation & selection</li>
                  <li>• Cryptocurrency strategies</li>
                  <li>• Commodities & precious metals</li>
                  <li>• Private equity & venture capital</li>
                </ul>
              </div>

              {/* Business Finance */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">🏢 Business Finance (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Cash flow analysis & forecasting</li>
                  <li>• Profitability optimization</li>
                  <li>• Fundraising pitch templates</li>
                  <li>• Financial modeling & projections</li>
                  <li>• Business valuation methods</li>
                </ul>
              </div>

              {/* Professional Use */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">👔 Professional Use (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Financial advisor client summaries</li>
                  <li>• Accountant audit preparation</li>
                  <li>• Wealth manager investment decks</li>
                  <li>• Report writing templates</li>
                  <li>• Client communication scripts</li>
                </ul>
              </div>

              {/* Taxes */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">📊 Taxes (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• Tax optimization strategies</li>
                  <li>• Deduction maximization</li>
                  <li>• Tax-loss harvesting</li>
                  <li>• Retirement account tax benefits</li>
                  <li>• Business tax planning</li>
                </ul>
              </div>

              {/* General/Fun */}
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold style={{color: '#111111'}} mb-4">🎯 General/Fun (100 Prompts)</h3>
                <ul className="style={{color: '#555555'}} space-y-2 text-sm">
                  <li>• "Explain like I'm 5" finance prompts</li>
                  <li>• Side hustle idea generators</li>
                  <li>• Market history simulations</li>
                  <li>• Financial goal setting frameworks</li>
                  <li>• Money mindset & psychology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} text-center mb-12">
              Why This Prompt Pack Will Transform Your Financial Success
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-2">Save Hours of Research</h3>
                  <p className="style={{color: '#555555'}}">Stop spending hours crafting the perfect prompts. Get instant access to proven, professional-grade prompts that deliver results.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <span className="style={{color: '#0070F3'}} text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-2">Get Specific, Actionable Advice</h3>
                  <p className="style={{color: '#555555'}}">No more generic responses. These prompts are designed to give you personalized, actionable financial strategies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <span className="text-purple-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-2">Professional-Grade Results</h3>
                  <p className="style={{color: '#555555'}}">Whether you're a financial advisor, investor, or entrepreneur, these prompts deliver professional-quality analysis and recommendations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <span className="text-orange-600 text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-2">Make More Money</h3>
                  <p className="style={{color: '#555555'}}">These prompts are specifically designed to help you identify opportunities, optimize strategies, and increase your wealth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} mb-8">
              Join Thousands of Finance Professionals Using AI to Make More Money
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">1,000</div>
                <div className="style={{color: '#555555'}}">Professional Prompts</div>
              </div>
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold style={{color: '#0070F3'}} mb-2">10</div>
                <div className="style={{color: '#555555'}}">Finance Categories</div>
              </div>
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$69</div>
                <div className="style={{color: '#555555'}}">One-Time Price</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} mb-8">
              Get Instant Access to All 100+ Prompts
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">$69</div>
                <div className="style={{color: '#6B7280'}} mb-6">One-time payment • Lifetime access</div>
                
                <div className="text-left mb-8">
                  <h3 className="text-xl font-semibold style={{color: '#111111'}} mb-4">What You Get:</h3>
                  <ul className="style={{color: '#555555'}} space-y-2">
                    <li>✅ 1,000 Professional Finance Prompts (100 per category)</li>
                    <li>✅ Budgeting Pack (100 prompts)</li>
                    <li>✅ Saving Pack (100 prompts)</li>
                    <li>✅ Debt Payoff Pack (100 prompts)</li>
                    <li>✅ Retirement Pack (100 prompts)</li>
                    <li>✅ Stocks & ETFs Pack (100 prompts)</li>
                    <li>✅ Alternatives Pack (100 prompts)</li>
                    <li>✅ Business Finance Pack (100 prompts)</li>
                    <li>✅ Professional Use Pack (100 prompts)</li>
                    <li>✅ Taxes Pack (100 prompts)</li>
                    <li>✅ General/Fun Pack (100 prompts)</li>
                    <li>✅ Bonus: Advanced Prompt Engineering Guide</li>
                    <li>✅ Lifetime Updates & New Prompts</li>
                    <li>✅ 30-Day Money-Back Guarantee</li>
                  </ul>
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 style={{color: '#FFFFFF'}} font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full">
                  Get Instant Access Now
                </button>
                <p className="text-sm style={{color: '#6B7280'}} mt-4">Secure payment • Instant download • 30-day guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-2">What AI models work with these prompts?</h3>
                <p className="style={{color: '#555555'}}">These prompts are optimized for ChatGPT, Claude, Gemini, and other leading AI models. Each prompt includes specific instructions for different models.</p>
              </div>
              
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-2">Do I get updates when you add new prompts?</h3>
                <p className="style={{color: '#555555'}}">Yes! You get lifetime access including all future prompt additions and updates at no extra cost.</p>
              </div>
              
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-2">Can I use these prompts for my business?</h3>
                <p className="style={{color: '#555555'}}">Absolutely! These prompts are designed for both personal use and professional financial services. Many financial advisors and wealth managers use these prompts with their clients.</p>
              </div>
              
              <div className="style={{backgroundColor: '#FFFFFF'}} rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold style={{color: '#111111'}} mb-2">What if I'm not satisfied?</h3>
                <p className="style={{color: '#555555'}}">We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase, no questions asked.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold style={{color: '#111111'}} mb-4">
              Ready to Start Making More Money with AI?
            </h2>
            <p className="text-xl style={{color: '#555555'}} mb-8">
              Join thousands of finance professionals who are already using these prompts to increase their wealth and help their clients succeed.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 style={{color: '#FFFFFF'}} font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Instant Access - $69
            </button>
            <p className="text-sm style={{color: '#6B7280'}} mt-4">30-day money-back guarantee • Lifetime access</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
