import type { Metadata } from 'next';
import MoldContent from './MoldContent';

export const metadata: Metadata = {
  title: 'Mold Remediation Tampa Bay',
  description:
    'Professional mold remediation in Tampa Bay by Fowcon Construction. Free mold inspection, IICRC-certified technicians, lab-verified results, and full reconstruction. Call (833) 336-9266.',
  openGraph: {
    title: 'Mold Remediation Tampa Bay | Fowcon Construction',
    description:
      'Professional mold remediation in Tampa Bay. Free inspection, IICRC-certified technicians, and lab-verified results.',
    url: 'https://fowconinc.com/mitigation/mold',
  },
  alternates: {
    canonical: 'https://fowconinc.com/mitigation/mold',
  },
};

export default function MoldRemediationPage() {
  return <MoldContent />;
}
