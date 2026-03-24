import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import LeadershipContent from '@/app/components/about/LeadershipContent';

export const metadata: Metadata = {
  title: 'Leadership Team',
  description:
    'Meet the leadership team behind Fowcon Construction. Over 100 years of combined experience in restoration, construction, and remodeling in Tampa Bay.',
  openGraph: {
    title: 'Leadership Team | Fowcon Construction',
    description:
      'Meet the experienced leadership team behind Fowcon Construction in Tampa Bay.',
    url: 'https://fowconinc.com/about/leadership',
  },
  alternates: {
    canonical: 'https://fowconinc.com/about/leadership',
  },
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
