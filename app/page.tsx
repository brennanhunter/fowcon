import Hero from "./components/Hero";
import ReviewsSection from "./components/ReviewsSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import CertificationBanner from "./components/CertificationBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <ReviewsSection />
      <ServiceAreaSection />
      <CertificationBanner />
    </div>
  );
}
