import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4KS Accountancy | Expert Accounting Services in London',
  description: 'Professional accounting, tax planning, and business advisory services for individuals and businesses in London. Trusted expertise, personalized service.',
  keywords: ['accountancy', 'accounting services', 'tax planning', 'London accountant', 'business advisory'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
