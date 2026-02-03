import { User, Briefcase, Store, Building2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Individuals",
    description: "Self-assessment, personal tax planning, and financial advice for individuals.",
  },
  {
    icon: Briefcase,
    title: "Freelancers & Contractors",
    description: "Specialist support for self-employed professionals and contractors.",
  },
  {
    icon: Store,
    title: "Small Businesses",
    description: "Comprehensive accounting for sole traders and small limited companies.",
  },
  {
    icon: Building2,
    title: "Growing SMEs",
    description: "Scalable solutions for established businesses looking to expand.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">Who We Help</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tailored Services for Every Client
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you're an individual filing a tax return or a growing business needing
            comprehensive support, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-[#c9a66b]/30 transition-colors"
            >
              <div className="w-16 h-16 bg-[#c9a66b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-[#c9a66b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
