"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do your services cost?",
    answer:
      "We offer fixed, transparent pricing with no hidden fees. Costs vary depending on your needs — a simple self-assessment starts from £150, while business packages are tailored to your requirements. We'll always provide a clear quote upfront before any work begins.",
  },
  {
    question: "Do I need to be based in London to use your services?",
    answer:
      "Not at all. We serve clients across the entire UK using cloud-based accounting software and video calls. Location is no barrier to receiving excellent accounting support.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "We work with all major cloud accounting platforms including Xero, QuickBooks, and FreeAgent. We'll recommend the best solution for your needs or work with your existing software.",
  },
  {
    question: "How do I send you my documents?",
    answer:
      "We make it easy with secure cloud storage and email. You can also use apps to snap photos of receipts. We'll set up a system that works best for you during onboarding.",
  },
  {
    question: "What's included in your bookkeeping service?",
    answer:
      "Our bookkeeping service includes transaction categorisation, bank reconciliation, monthly management reports, VAT preparation, and ongoing support. We tailor the service to match your business needs.",
  },
  {
    question: "Can you help if I'm behind on my taxes?",
    answer:
      "Absolutely. We regularly help clients catch up on overdue returns and can liaise with HMRC on your behalf. The sooner you get in touch, the sooner we can help resolve the situation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers. If you don't see what you're looking for,
            get in touch.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#c9a66b] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
