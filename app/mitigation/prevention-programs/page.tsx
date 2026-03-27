import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import PreventionContent from '@/app/components/mitigation/PreventionContent';

export const metadata: Metadata = {
  title: 'Prevention Programs',
  description:
    'Protect your Tampa Bay home before disaster strikes. Fowcon Construction offers emergency planning resources, home inspection checklists, and referral partnerships for insurance agents and property managers.',
  openGraph: {
    title: 'Prevention Programs | Fowcon Construction',
    description:
      'Emergency planning resources and prevention programs to protect your Tampa Bay property. Partnerships for insurance agents and property managers.',
    url: 'https://fowconinc.com/mitigation/prevention-programs',
  },
  alternates: {
    canonical: 'https://fowconinc.com/mitigation/prevention-programs',
  },
};

export default function PreventionProgramsPage() {
  return (
    <div>
      <AboutHero
        title="Prevention Programs"
        subtitle="The best restoration is the one you never need. Protect your home and build the right partnerships."
      />
      <PreventionContent />
    </div>
  );
}
