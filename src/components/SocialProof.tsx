export default function SocialProof() {
  const stats = [
    { number: '10,000+', label: 'Subscribers' },
    { number: '52', label: 'Issues Sent' },
    { number: '4.9/5', label: 'Reader Rating' }
  ]

  const testimonials = [
    {
      text: "Sunday Cents has completely changed how I think about money. The insights are gold!",
      author: "Sarah K., Entrepreneur"
    },
    {
      text: "I look forward to Sunday mornings now. Best financial newsletter I've ever read.",
      author: "Mike R., Software Engineer"
    },
    {
      text: "Short, actionable, and always valuable. Exactly what I need to start my week.",
      author: "Jessica L., Marketing Director"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div className="text-gray-600 font-medium">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
