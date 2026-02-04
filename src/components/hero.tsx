import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://eu.chat-img.sintra.ai/c6165eb5-c75c-45fe-ad44-a3ddab52998e/08e28d43-8b81-42ff-ba91-3415f56973b9/IMG_1243.png"
          alt="London skyline illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://eu.chat-img.sintra.ai/c6165eb5-c75c-45fe-ad44-a3ddab52998e/a661d297-50c2-497d-840d-af6f74396a92/4Ks_LOGO_cropped.png"
            alt="4KS Accountancy Ltd"
            className="h-32 sm:h-40 w-auto mb-8"
          />
          
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-4">
            Professional Accounting Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl">
            Expert Tax Services for Individuals & Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            From self-assessment to company accounts, we handle your finances with precision
            and care. Personal service, professional results — across the UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a66b] hover:bg-[#b8956a] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+447792301759"
              className="inline-flex items-center justify-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-600">
            <a
              href="tel:+447792301759"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-[#c9a66b]" />
              +44 7792 301759
            </a>
            <a
              href="https://wa.me/447792301759"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-[#c9a66b]" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}