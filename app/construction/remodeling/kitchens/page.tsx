import type { Metadata } from 'next';
import KitchenHero from '@/app/components/kitchen/KitchenHero';
import KitchenServices from '@/app/components/kitchen/KitchenServices';
import KitchenWhyUs from '@/app/components/kitchen/KitchenWhyUs';
import KitchenGallery from '@/app/components/kitchen/KitchenGallery';
import KitchenFAQ from '@/app/components/kitchen/KitchenFAQ';
import KitchenCTA from '@/app/components/kitchen/KitchenCTA';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling | Fowcon Inc',
  description: 'Custom kitchen remodeling in Tampa Bay. From countertops to full gut renovations, Fowcon delivers expert craftsmanship and stunning results.',
};

export default function Page() {
  return (
    <div>
      <KitchenHero />
      <KitchenServices />
      <KitchenWhyUs />
      <KitchenGallery />
      <KitchenFAQ />
      <KitchenCTA />
    </div>
  );
}
