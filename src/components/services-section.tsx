import { Calculator, FileText, Users, TrendingUp, Building, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Tax Returns",
    description:
      "Self-assessment, corporation tax, and VAT returns handled accurately and submitted on time.",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Keep your records organised with our comprehensive bookkeeping services tailored to your business.",
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "From RTI submissions to payslips, we manage your payroll so you can focus on your team.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description:
      "Strategic financial advice to help you grow, plan, and make informed business decisions.",
  },
  {
    icon: Building,
    title: "Company Formation",
    description:
      "Start your business right with our company formation and registration services.",
  },
  {
    icon: ClipboardCheck,
    title: "Management Accounts",
    description:
      "Regular financial reports that give you clear insight into your business performance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From day-to-day bookkeeping to strategic business advice, we provide the full
            spectrum of accounting services your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-[#c9a66b]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9a66b]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#c9a66b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-[#c9a66b] hover:text-[#b8956a] font-semibold transition-colors"
          >
            View All Services
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
