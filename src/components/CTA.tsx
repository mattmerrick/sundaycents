import EmailSignup from './EmailSignup'

export default function CTA() {
  return (
    <section className='py-20' style={{backgroundColor: '#0070F3'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#FFFFFF'}}>
          Learn how I am building my daily newsletter to a million dollar business
        </h2>
        <p className="text-xl mb-10 leading-relaxed" style={{color: '#FFFFFF'}}>
          Get daily insights, real struggles, and real wins delivered to your inbox.
        </p>
        
        <EmailSignup variant="cta" />
      </div>
    </section>
  )
}
