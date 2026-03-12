import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import CareersContent from '@/app/components/about/CareersContent';

export const metadata: Metadata = {
  title: 'Careers | Fowcon Inc',
  description:
    'Join the Fowcon team. We are hiring skilled tradespeople, project managers, and restoration technicians in the Tampa Bay area. Competitive pay, growth opportunities, and a team-first culture.',
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
