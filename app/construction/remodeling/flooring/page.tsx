import type { Metadata } from 'next';
import FlooringHero from '@/app/components/flooring/FlooringHero';
import FlooringServices from '@/app/components/flooring/FlooringServices';
import FlooringWhyUs from '@/app/components/flooring/FlooringWhyUs';
import FlooringGallery from '@/app/components/flooring/FlooringGallery';
import FlooringFAQ from '@/app/components/flooring/FlooringFAQ';
import FlooringCTA from '@/app/components/flooring/FlooringCTA';

export const metadata: Metadata = {
  title: 'Flooring Installation Tampa Bay | Flooring Contractors Near Me',
  description:
    'Expert flooring installation in Tampa, St. Pete & Clearwater. Hardwood, tile, luxury vinyl & stone. Licensed contractor. FREE consultation — (833) 336-9266. Serving Tampa Bay.',
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
    <div>
      <FlooringHero />
      <FlooringServices />
      <FlooringWhyUs />
      <FlooringGallery />
      <FlooringFAQ />
      <FlooringCTA />
    </div>
  );
}
