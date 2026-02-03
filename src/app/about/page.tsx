import { Award, Users, Clock, Target } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring accuracy and compliance in all our work.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "You're not just a number. We take the time to understand your unique situation and provide tailored solutions.",
  },
  {
    icon: Clock,
    title: "Responsive Support",
    description:
      "Questions don't wait for office hours. We're accessible and responsive when you need us.",
  },
  {
    icon: Target,
    title: "Proactive Approach",
    description:
      "We don't just react to problems—we anticipate them and help you plan for the future.",
  },
];

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Retention" },
  { value: "24hr", label: "Response Time" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Trusted Accounting Partner
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're more than just number crunchers. We're your financial partners,
            committed to helping you succeed.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Accounting Services Built on Trust
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At 4KS Accountancy, we believe that good accounting is about
                  more than just compliance—it's about giving you the clarity
                  and confidence to make better business decisions.
                </p>
                <p>
                  We work with individuals and businesses across the UK,
                  providing personalised accounting services that fit your
                  specific needs. Whether you're a sole trader filing your first
                  tax return or a growing business needing comprehensive
                  financial support, we're here to help.
                </p>
                <p>
                  Our approach is simple: we take the time to understand your
                  situation, explain things in plain English, and provide
                  proactive advice that helps you stay ahead. No jargon, no
                  surprises, just straightforward accounting you can rely on.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-[#c9a66b] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 text-lg">
              We're committed to delivering exceptional service built on these
              core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#c9a66b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#c9a66b]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose 4KS Accountancy?
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fixed, Transparent Fees
                </h3>
                <p className="text-gray-600">
                  No hourly billing surprises. You'll know exactly what you're
                  paying upfront, with clear quotes and no hidden costs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Accessible & Responsive
                </h3>
                <p className="text-gray-600">
                  Reach us by phone, WhatsApp, or email. We respond quickly and
                  keep you informed throughout the process.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  UK-Wide Service
                </h3>
                <p className="text-gray-600">
                  Using cloud-based systems, we serve clients across the entire
                  UK. Location is no barrier to great accounting support.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Plain English Advice
                </h3>
                <p className="text-gray-600">
                  We explain things clearly, without jargon. You'll always
                  understand your financial position and the advice we give.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#c9a66b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's start with a conversation. Book a free consultation and
            discover how we can help with your accounting needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[#c9a66b] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
