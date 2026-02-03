import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
import WhoWeHelp from "@/components/who-we-help";
import ProcessSection from "@/components/process-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhoWeHelp />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
