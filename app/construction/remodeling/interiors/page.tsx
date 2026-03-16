import type { Metadata } from 'next';
import InteriorsHero from '@/app/components/interiors/InteriorsHero';
import InteriorsServices from '@/app/components/interiors/InteriorsServices';
import InteriorsGallery from '@/app/components/interiors/InteriorsGallery';
import InteriorsFAQ from '@/app/components/interiors/InteriorsFAQ';
import InteriorsCTA from '@/app/components/interiors/InteriorsCTA';

export const metadata: Metadata = {
  title: 'Complete Interior Remodeling Tampa Bay | Fowcon Inc',
  description:
    'Whole-home interior remodeling in Tampa Bay. Living rooms, family rooms, home offices, laundry rooms & more. Licensed & insured. Free consultation.',
};

export default function InteriorsPage() {
  return (
    <main>
      <InteriorsHero />
      <InteriorsServices />
      <InteriorsGallery />
      <InteriorsFAQ />
      <InteriorsCTA />
    </main>
  );
}
