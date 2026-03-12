import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import ServiceAreaContent from '@/app/components/about/ServiceAreaContent';

export const metadata: Metadata = {
  title: 'Service Area | Fowcon Inc',
  description:
    'Fowcon serves Tampa, St. Petersburg, Clearwater, Westchase, and the greater Tampa Bay area for remodeling and restoration. Contact us to confirm service in your area.',
};

export default function ServiceAreaPage() {
  return (
    <main>
      <AboutHero
        title="Our Service Area"
        subtitle="Proudly serving Tampa Bay, the surrounding West Coast, and Greater Florida."
      />
      <ServiceAreaContent />
    </main>
  );
}
