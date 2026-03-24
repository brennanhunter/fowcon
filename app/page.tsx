import type { Metadata } from "next";
import Hero from "./components/Hero";
import CertificationBanner from "./components/CertificationBanner";
import StatsCounter from "./components/StatsCounter";
import ServicesOverview from "./components/ServicesOverview";
import ProcessSection from "./components/ProcessSection";
import FinancingBanner from "./components/FinancingBanner";
import ReviewsSection from "./components/ReviewsSection";
import QuizBanner from "./components/quiz/QuizBanner";
import ServiceAreaSection from "./components/ServiceAreaSection";
import ClosingCTA from "./components/ClosingCTA";

export const metadata: Metadata = {
  title: "Fowcon Construction | Kitchen & Bathroom Remodeling Tampa Bay",
  description:
    "Tampa Bay's top-rated kitchen and bathroom remodeling contractor. Full home renovations, additions, ADUs, flooring, and emergency restoration. Licensed general contractor. Free consultation — (833) 336-9266.",
  openGraph: {
    title: "Fowcon Construction | Kitchen & Bathroom Remodeling Tampa Bay",
    description:
      "Tampa Bay's top-rated kitchen and bathroom remodeling contractor. Full home renovations, additions, ADUs, and emergency restoration. Licensed & insured.",
    url: "https://fowconinc.com",
  },
  alternates: {
    canonical: "https://fowconinc.com",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <CertificationBanner />
      <StatsCounter />
      <ServicesOverview />
      <ReviewsSection />
      <ProcessSection />
      <FinancingBanner />
      <QuizBanner />
      <ServiceAreaSection />
      <ClosingCTA />
    </div>
  );
}
