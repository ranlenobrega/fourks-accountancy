import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://eu.chat-img.sintra.ai/c6165eb5-c75c-45fe-ad44-a3ddab52998e/cf9e5b60-db9a-4154-9f80-9127c5acf2f1/4Ks_LOGO.png"
              alt="4KS Accountancy"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional accounting services for individuals and businesses across the UK.
              Personal service, professional results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a66b]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a66b]">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Tax Returns</li>
              <li className="text-gray-400">Bookkeeping</li>
              <li className="text-gray-400">Payroll Services</li>
              <li className="text-gray-400">Business Advisory</li>
              <li className="text-gray-400">Company Formation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c9a66b]">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+447792301759"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-[#c9a66b]" />
                  +44 7792 301759
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447792301759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-3 text-[#c9a66b]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@4ksaccountancy.co.uk"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#c9a66b]" />
                  info@4ksaccountancy.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} 4KS Accountancy. All rights reserved. Powered by{" "}
    <a
      href="https://rn-digitalworld.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c9a66b] hover:text-white transition-colors"
    >
      RN Digital World
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}
