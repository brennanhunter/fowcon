import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import CertificationBanner from "./components/CertificationBanner";

const StatsCounter = dynamic(() => import("./components/StatsCounter"));
const ServicesOverview = dynamic(() => import("./components/ServicesOverview"));
const ReviewsSection = dynamic(() => import("./components/ReviewsSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const FinancingBanner = dynamic(() => import("./components/FinancingBanner"));
const QuizBanner = dynamic(() => import("./components/quiz/QuizBanner"));
const ServiceAreaSection = dynamic(() => import("./components/ServiceAreaSection"));
const ClosingCTA = dynamic(() => import("./components/ClosingCTA"));

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
