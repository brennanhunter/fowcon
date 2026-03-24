import type { Metadata } from 'next';
import FireSmokeContent from './FireSmokeContent';

export const metadata: Metadata = {
  title: 'Fire & Smoke Damage Restoration Tampa Bay',
  description:
    'Emergency fire and smoke damage restoration in Tampa Bay by Fowcon Construction. Board-up, soot cleanup, deodorization, and full home reconstruction. Licensed & IICRC-certified. Call (833) 336-9266.',
  openGraph: {
    title: 'Fire & Smoke Damage Restoration Tampa Bay | Fowcon Construction',
    description:
      '24/7 fire and smoke damage restoration in Tampa Bay. Emergency response, soot cleanup, and full home reconstruction.',
    url: 'https://fowconinc.com/mitigation/fire-smoke',
  },
  alternates: {
    canonical: 'https://fowconinc.com/mitigation/fire-smoke',
  },
};

export default function FireSmokePage() {
  return <FireSmokeContent />;
}
