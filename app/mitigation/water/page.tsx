import type { Metadata } from 'next';
import WaterDamageContent from './WaterDamageContent';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Tampa Bay',
  description:
    'Emergency water damage restoration in Tampa Bay by Fowcon Construction. 24/7 water extraction, structural drying, mold prevention, and full reconstruction. Licensed & IICRC-certified. Call (833) 336-9266.',
  openGraph: {
    title: 'Water Damage Restoration Tampa Bay | Fowcon Construction',
    description:
      '24/7 emergency water damage restoration in Tampa Bay. Water extraction, structural drying, mold prevention, and full reconstruction.',
    url: 'https://fowconinc.com/mitigation/water',
  },
  alternates: {
    canonical: 'https://fowconinc.com/mitigation/water',
  },
};

export default function WaterDamagePage() {
  return <WaterDamageContent />;
}
