export default function ValueProposition() {
  const benefits = [
    {
      icon: '💡',
      title: 'Smart Insights',
      description: 'Actionable financial strategies from successful entrepreneurs and investors'
    },
    {
      icon: '📈',
      title: 'Market Moves',
      description: 'Key market trends and opportunities you need to know about'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Practical frameworks for building and achieving your financial goals'
    },
    {
      icon: '🔥',
      title: 'Hot Takes',
      description: 'Contrarian perspectives on wealth building and financial freedom'
    },
    {
      icon: '🛠️',
      title: 'Tools & Resources',
      description: 'Curated apps, books, and resources to accelerate your journey'
    },
    {
      icon: '🎪',
      title: 'Fun Reads',
      description: 'Entertaining stories and case studies that make learning enjoyable'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Get Every Sunday
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
