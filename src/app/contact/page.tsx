"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://alluring-encouragement-production.up.railway.app/public/lead_v3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.get("email"),
            name: formData.get("name"),
            details: `Service Interest: ${formData.get("service")}\n\nMessage: ${formData.get(
              "message"
            )}`,
            knowledge_profile_id: "c6165eb5-c75c-45fe-ad44-a3ddab52998e",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your accounting needs? We're here to help. Reach out for a free,
            no-obligation consultation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a quick question or want to discuss your accounting needs in
                detail, we're always happy to hear from you. Choose the contact method that works
                best for you.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+447792301759"
                  className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+44 7792 301759</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/447792301759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+44 7792 301759</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quick responses during business hours
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@4ksaccountancy.co.uk"
                  className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@4ksaccountancy.co.uk</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Serving clients across the UK</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Remote services available nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for getting in touch. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a66b] focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a66b] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a66b] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Tax Returns">Tax Returns</option>
                      <option value="Bookkeeping">Bookkeeping</option>
                      <option value="Payroll">Payroll Services</option>
                      <option value="Business Advisory">Business Advisory</option>
                      <option value="Company Formation">Company Formation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a66b] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your accounting needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#c9a66b] hover:bg-[#b8956a] text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-600 text-center">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
