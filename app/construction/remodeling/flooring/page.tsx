import type { Metadata } from 'next';
import FlooringHero from '@/app/components/flooring/FlooringHero';
import FlooringServices from '@/app/components/flooring/FlooringServices';
import FlooringWhyUs from '@/app/components/flooring/FlooringWhyUs';
import FlooringGallery from '@/app/components/flooring/FlooringGallery';
import FlooringFAQ from '@/app/components/flooring/FlooringFAQ';
import FlooringCTA from '@/app/components/flooring/FlooringCTA';

export const metadata: Metadata = {
  title: 'Flooring Installation & Refinishing Tampa Bay',
  description:
    'Professional flooring installation in Tampa Bay by Fowcon Construction. Hardwood, tile, luxury vinyl, and natural stone. Licensed & insured. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'Flooring Installation & Refinishing Tampa Bay | Fowcon Construction',
    description:
      'Professional flooring installation in Tampa Bay. Hardwood, tile, luxury vinyl, and natural stone by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/remodeling/flooring',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/remodeling/flooring',
  },
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
