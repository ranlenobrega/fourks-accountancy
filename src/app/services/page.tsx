import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Building,
  ClipboardCheck,
  Receipt,
  Shield,
  PiggyBank,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Self-Assessment Tax Returns",
    description:
      "We handle your personal tax return from start to finish, ensuring accuracy and maximising your allowances. No more stress at deadline time.",
    features: ["Income calculation", "Expense claims", "HMRC submission", "Deadline reminders"],
  },
  {
    icon: Building,
    title: "Corporation Tax",
    description:
      "Complete corporation tax services for limited companies, including calculation, planning, and timely submission to HMRC.",
    features: ["Tax calculation", "CT600 preparation", "Tax planning advice", "HMRC liaison"],
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Keep your financial records organised and up-to-date. We handle the numbers so you can focus on running your business.",
    features: ["Transaction recording", "Bank reconciliation", "Monthly reports", "Cloud accounting"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "From RTI submissions to payslips, we manage your entire payroll process. Your employees get paid correctly and on time.",
    features: ["Payslip generation", "RTI submissions", "Pension auto-enrolment", "Year-end reporting"],
  },
  {
    icon: Receipt,
    title: "VAT Returns",
    description:
      "Accurate VAT calculations and timely submissions. We ensure you're compliant and help you understand your VAT position.",
    features: ["Quarterly returns", "MTD compliance", "VAT registration", "Scheme advice"],
  },
  {
    icon: ClipboardCheck,
    title: "Management Accounts",
    description:
      "Regular financial reports that give you clear insight into your business performance and help you make informed decisions.",
    features: ["Monthly/quarterly reports", "KPI tracking", "Cash flow analysis", "Budget comparison"],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description:
      "Strategic financial advice to help you grow your business. From tax planning to growth strategy, we're your trusted advisor.",
    features: ["Tax planning", "Growth strategy", "Financial forecasting", "Business structure"],
  },
  {
    icon: FileCheck,
    title: "Company Formation",
    description:
      "Start your business the right way. We handle Companies House registration and set up your accounting systems from day one.",
    features: ["Companies House filing", "Registered office", "Initial setup", "Compliance guidance"],
  },
  {
    icon: Shield,
    title: "HMRC Investigations",
    description:
      "If HMRC comes knocking, we're in your corner. We handle all correspondence and work to achieve the best possible outcome.",
    features: ["HMRC liaison", "Document preparation", "Representation", "Dispute resolution"],
  },
  {
    icon: PiggyBank,
    title: "Tax Planning",
    description:
      "Proactive tax planning to minimise your liability legally. We help you keep more of what you earn.",
    features: ["Allowance optimisation", "Timing strategies", "Structure advice", "Annual reviews"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Comprehensive Accounting Solutions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From day-to-day bookkeeping to strategic business advice, we provide the full spectrum of
            accounting services your business needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <service.icon className="w-7 h-7 text-[#c9a66b]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-[#c9a66b] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#c9a66b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-white/90 text-lg mb-8">
            Book a free consultation and we'll help you identify the right services for your
            situation. No obligation, just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[#c9a66b] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
