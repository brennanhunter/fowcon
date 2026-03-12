import type { Metadata } from 'next';
import FlooringHero from '@/app/components/flooring/FlooringHero';
import FlooringServices from '@/app/components/flooring/FlooringServices';
import FlooringWhyUs from '@/app/components/flooring/FlooringWhyUs';
import FlooringGallery from '@/app/components/flooring/FlooringGallery';
import FlooringFAQ from '@/app/components/flooring/FlooringFAQ';
import FlooringCTA from '@/app/components/flooring/FlooringCTA';

export const metadata: Metadata = {
  title: 'Flooring Installation & Refinishing Tampa Bay | Fowcon Inc',
  description:
    'Professional flooring installation in Tampa Bay. Hardwood, tile, luxury vinyl, and natural stone. Licensed & insured. Free consultation.',
};

export default function FlooringPage() {
  return (
    <main>
      <FlooringHero />
      <FlooringServices />
      <FlooringWhyUs />
      <FlooringGallery />
      <FlooringFAQ />
      <FlooringCTA />
    </main>
  );
}
