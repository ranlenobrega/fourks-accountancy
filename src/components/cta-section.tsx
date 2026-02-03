import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#c9a66b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Book a free, no-obligation consultation today. We'll discuss your needs and show you
          how we can help simplify your accounting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#c9a66b] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="tel:+447792301759"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Phone className="mr-2 w-5 h-5" />
            +44 7792 301759
          </a>
        </div>
      </div>
    </section>
  );
}
