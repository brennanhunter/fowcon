import type { Metadata } from 'next';
import ADUHero from '@/app/components/construction/adu/ADUHero';
import ADUServices from '@/app/components/construction/adu/ADUServices';
import ADUFAQ from '@/app/components/construction/adu/ADUFAQ';
import ADUCTA from '@/app/components/construction/adu/ADUCTA';

export const metadata: Metadata = {
  title: 'Accessory Dwelling Units (ADU) Tampa Bay',
  description:
    'Custom ADU construction in Tampa Bay by Fowcon Construction. Guest houses, in-law suites, rental units, and detached living spaces. Licensed general contractor. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'ADU Construction Tampa Bay | Fowcon Construction',
    description:
      'Custom ADU construction in Tampa Bay. Guest houses, in-law suites, rental units, and detached living spaces by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/adu',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/adu',
  },
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
