import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import CareersContent from '@/app/components/about/CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Fowcon Construction team. Hiring skilled tradespeople, project managers, and restoration technicians in Tampa Bay. Competitive pay, growth opportunities, and a team-first culture.',
  openGraph: {
    title: 'Careers at Fowcon Construction',
    description:
      'Join the Fowcon team. Hiring skilled tradespeople, project managers, and restoration technicians in Tampa Bay.',
    url: 'https://fowconinc.com/about/careers',
  },
  alternates: {
    canonical: 'https://fowconinc.com/about/careers',
  },
};

export default function CareersPage() {
  return (
    <main>
      <AboutHero
        title="Careers at Fowcon"
        subtitle="Build your career with a team that builds with care."
      />
      <CareersContent />
    </main>
  );
}
