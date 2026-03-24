import type { Metadata } from 'next';
import StormWindContent from './StormWindContent';

export const metadata: Metadata = {
  title: 'Storm & Wind Damage Restoration Tampa Bay',
  description:
    'Emergency storm and wind damage restoration in Tampa Bay by Fowcon Construction. 24/7 board-up, roof repair, structural stabilization, and full reconstruction. Licensed general contractor. Call (833) 336-9266.',
  openGraph: {
    title: 'Storm & Wind Damage Restoration Tampa Bay | Fowcon Construction',
    description:
      '24/7 emergency storm damage restoration in Tampa Bay. Board-up, roof repair, structural stabilization, and full reconstruction.',
    url: 'https://fowconinc.com/mitigation/storm-wind',
  },
  alternates: {
    canonical: 'https://fowconinc.com/mitigation/storm-wind',
  },
};

export default function StormWindPage() {
  return <StormWindContent />;
}
