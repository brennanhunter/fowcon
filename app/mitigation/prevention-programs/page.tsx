import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import PreventionContent from '@/app/components/mitigation/PreventionContent';

export const metadata: Metadata = {
  title: 'Prevention Programs | Fowcon Inc',
  description:
    'Protect your Tampa Bay home before disaster strikes. Fowcon offers emergency planning resources, home inspection checklists, and referral partnerships for insurance agents and property managers.',
};

export default function PreventionProgramsPage() {
  return (
    <main>
      <AboutHero
        title="Prevention Programs"
        subtitle="The best restoration is the one you never need. Protect your home and build the right partnerships."
      />
      <PreventionContent />
    </main>
  );
}
