import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import LeadershipContent from '@/app/components/about/LeadershipContent';

export const metadata: Metadata = {
  title: 'Leadership | Fowcon Inc',
  description:
    'Meet the leadership team behind Fowcon Inc. Over 100 years of combined experience in restoration, construction, and remodeling in Tampa Bay.',
};

export default function LeadershipPage() {
  return (
    <main>
      <AboutHero
        title="Our Leadership"
        subtitle="Experienced professionals who are on-site, not just on-call."
      />
      <LeadershipContent />
    </main>
  );
}
