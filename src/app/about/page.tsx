import { Award, Users, Clock, Target } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring accuracy and compliance in all our work.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "You're not just a number. We take the time to understand your unique situation and provide tailored solutions.",
  },
  {
    icon: Clock,
    title: "Responsive Support",
    description:
      "Questions don't wait for office hours. We're accessible and responsive when you need us.",
  },
  {
    icon: Target,
    title: "Proactive Approach",
    description:
      "We don't just react to problems—we anticipate them and help you plan for the future.",
  },
];

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Retention" },
  { value: "24hr", label: "Response Time" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a66b] font-medium tracking-wide uppercase mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Trusted Accounting Partner
          </h1>
          <p
