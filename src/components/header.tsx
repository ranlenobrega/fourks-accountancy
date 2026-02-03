"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <img
              src="https://eu.chat-img.sintra.ai/c6165eb5-c75c-45fe-ad44-a3ddab52998e/a661d297-50c2-497d-840d-af6f74396a92/4Ks_LOGO_cropped.png"
              alt="4KS Accountancy Ltd"
              className="h-20 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#c9a66b] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+447792301759"
              className="flex items-center text-gray-700 hover:text-[#c9a66b] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+44 7792 301759</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#c9a66b] hover:bg-[#b8956a] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#c9a66b] transition-colors font-medium px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+447792301759"
                className="flex items-center text-gray-700 hover:text-[#c9a66b] transition-colors px-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">+44 7792 301759</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#c9a66b] hover:bg-[#b8956a] text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-center mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
