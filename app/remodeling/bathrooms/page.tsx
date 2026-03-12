import type { Metadata } from 'next';
import BathroomHero from '@/app/components/bathroom/BathroomHero';
import BathroomServices from '@/app/components/bathroom/BathroomServices';
import BathroomWhyUs from '@/app/components/bathroom/BathroomWhyUs';
import BathroomGallery from '@/app/components/bathroom/BathroomGallery';
import BathroomFAQ from '@/app/components/bathroom/BathroomFAQ';
import BathroomCTA from '@/app/components/bathroom/BathroomCTA';

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Tampa Bay | Fowcon Inc',
  description:
    'Professional bathroom remodeling in Tampa Bay. Custom showers, vanities, tile work, and full renovations. Licensed & insured. Free consultation.',
};

export default function BathroomsPage() {
  return (
    <main>
      <BathroomHero />
      <BathroomServices />
      <BathroomWhyUs />
      <BathroomGallery />
      <BathroomFAQ />
      <BathroomCTA />
    </main>
  );
}
