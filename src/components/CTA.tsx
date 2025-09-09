import EmailSignup from './EmailSignup'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Start your Sunday with actionable wealth-building insights.
        </p>
        
        <EmailSignup variant="cta" />
      </div>
    </section>
  )
}
