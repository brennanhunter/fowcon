import type { Metadata } from 'next';
import AdditionsHero from '@/app/components/construction/additions/AdditionsHero';
import AdditionsServices from '@/app/components/construction/additions/AdditionsServices';
import AdditionsFAQ from '@/app/components/construction/additions/AdditionsFAQ';
import AdditionsCTA from '@/app/components/construction/additions/AdditionsCTA';

export const metadata: Metadata = {
  title: 'Home Additions Tampa Bay | Fowcon Inc',
  description:
    'Professional home additions in Tampa Bay. Room additions, second stories, sunrooms, and more. Licensed general contractor. Free consultation.',
};

export default function AdditionsPage() {
  return (
    <main>
      <AdditionsHero />
      <AdditionsServices />
      <AdditionsFAQ />
      <AdditionsCTA />
    </main>
  );
}
