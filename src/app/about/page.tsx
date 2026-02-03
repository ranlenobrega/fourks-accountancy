import { Users, Award, Clock, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About 4KS Accountancy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're a team of dedicated professionals committed to helping businesses and individuals achieve their financial goals.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide exceptional accounting services, 4KS Accountancy has grown to become a trusted partner for businesses across London and beyond.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that every client deserves personalized attention and expert guidance. Our team combines years of experience with a modern approach to accounting, ensuring you receive the best possible service.
              </p>
              <p className="text-gray-600">
                Whether you're a startup looking for guidance or an established business seeking to optimize your finances, we're here to help you succeed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Client-Focused', desc: 'Your success is our priority. We tailor our services to meet your unique needs.' },
              { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in everything we do.' },
              { icon: Clock, title: 'Reliability', desc: 'Count on us to deliver accurate, timely services every time.' },
              { icon: Target, title: 'Integrity', desc: 'We operate with complete transparency and honesty.' },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white/90 mb-8">
            Let's discuss how we can help you achieve your financial goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
