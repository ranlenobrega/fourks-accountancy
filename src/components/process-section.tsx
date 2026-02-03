import { MessageSquare, FileSearch, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description:
      "We start with a free, no-obligation chat to understand your needs and explain how we can help.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Review & Quote",
    description:
      "We review your situation and provide a clear, fixed-fee quote with no hidden costs.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Onboarding",
    description:
      "We set up your accounts, gather the necessary information, and get everything in order.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Ongoing Support",
    description:
      "We handle your accounting needs and provide proactive advice to keep you on track.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Straightforward Process
          </h2>
          <p className="text-gray-400 text-lg">
            Getting started is easy. Here's how we work together to manage your finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-xl p-8 h-full">
                <div className="text-[#c9a66b] text-5xl font-bold opacity-20 mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#c9a66b]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-8 h-8 text-[#c9a66b]/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
