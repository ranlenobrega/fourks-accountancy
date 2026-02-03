import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "4KS Accountancy | Professional Accounting Services in the UK",
  description:
    "Expert tax services, bookkeeping, payroll, and business advisory for individuals and SMEs across the UK. Personal service, professional results.",
  keywords: [
    "accountancy",
    "tax services",
    "bookkeeping",
    "payroll",
    "UK accountant",
    "small business accounting",
  ],
  icons: {
    icon: "https://eu.chat-img.sintra.ai/c6165eb5-c75c-45fe-ad44-a3ddab52998e/cf9e5b60-db9a-4154-9f80-9127c5acf2f1/4Ks_LOGO.png",
  },
  openGraph: {
    title: "4KS Accountancy | Professional Accounting Services",
    description:
      "Expert tax services, bookkeeping, payroll, and business advisory for individuals and SMEs across the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "4KS Accountancy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body
        className={`${raleway.variable} ${openSans.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
