import Hero from "./components/Hero";
import CertificationBanner from "./components/CertificationBanner";
import ServicesOverview from "./components/ServicesOverview";
import ProcessSection from "./components/ProcessSection";
import ReviewsSection from "./components/ReviewsSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <CertificationBanner />
      <ServicesOverview />
      <ReviewsSection />
      <ProcessSection />
      <ServiceAreaSection />
      <ClosingCTA />
    </div>
  );
}
