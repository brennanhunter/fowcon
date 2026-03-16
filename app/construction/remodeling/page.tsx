import type { Metadata } from 'next';
import RemodelingHub from '@/app/components/construction/RemodelingHub';

export const metadata: Metadata = {
  title: 'Remodeling Services | Fowcon Inc',
  description:
    'Expert home remodeling in Tampa Bay. Kitchens, bathrooms, flooring, and full interior renovations. Licensed & insured. Free consultation.',
};

export default function RemodelingPage() {
  return (
    <main>
      <RemodelingHub />
    </main>
  );
}
