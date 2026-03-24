import type { Metadata } from 'next';
import RemodelingHub from '@/app/components/construction/RemodelingHub';

export const metadata: Metadata = {
  title: 'Home Remodeling Services Tampa Bay | Kitchens, Bathrooms & More',
  description:
    'Expert home remodeling in Tampa Bay by Fowcon Construction. Kitchen renovations, bathroom remodels, flooring installation, and full interior renovations. Licensed general contractor. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'Home Remodeling Services Tampa Bay | Fowcon Construction',
    description:
      'Expert home remodeling in Tampa Bay. Kitchen renovations, bathroom remodels, flooring, and full interior renovations. Licensed & insured.',
    url: 'https://fowconinc.com/construction/remodeling',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/remodeling',
  },
};

export default function RemodelingPage() {
  return (
    <main>
      <RemodelingHub />
    </main>
  );
}
