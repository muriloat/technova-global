import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesOverview />
        <IndustriesSection />
        <WhyChooseUs />
        <Testimonials />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
