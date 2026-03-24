import type { Metadata } from 'next';
import InteriorsHero from '@/app/components/interiors/InteriorsHero';
import InteriorsServices from '@/app/components/interiors/InteriorsServices';
import InteriorsGallery from '@/app/components/interiors/InteriorsGallery';
import InteriorsFAQ from '@/app/components/interiors/InteriorsFAQ';
import InteriorsCTA from '@/app/components/interiors/InteriorsCTA';

export const metadata: Metadata = {
  title: 'Complete Interior Remodeling Tampa Bay',
  description:
    'Whole-home interior remodeling in Tampa Bay by Fowcon Construction. Living rooms, family rooms, home offices, laundry rooms, and more. Licensed & insured. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'Complete Interior Remodeling Tampa Bay | Fowcon Construction',
    description:
      'Whole-home interior remodeling in Tampa Bay. Living rooms, family rooms, home offices, and more by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/remodeling/interiors',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/remodeling/interiors',
  },
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
