import type { Metadata } from 'next';
import ADUHero from '@/app/components/construction/adu/ADUHero';
import ADUServices from '@/app/components/construction/adu/ADUServices';
import ADUFAQ from '@/app/components/construction/adu/ADUFAQ';
import ADUCTA from '@/app/components/construction/adu/ADUCTA';

export const metadata: Metadata = {
  title: 'Accessory Dwelling Units (ADU) Tampa Bay | Fowcon Inc',
  description:
    'Custom ADU construction in Tampa Bay. Guest houses, in-law suites, rental units, and detached living spaces. Licensed general contractor. Free consultation.',
};

export default function ADUPage() {
  return (
    <main>
      <ADUHero />
      <ADUServices />
      <ADUFAQ />
      <ADUCTA />
    </main>
  );
}
