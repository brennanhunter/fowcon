import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import FAQContent from '@/app/components/about/FAQContent';

export const metadata: Metadata = {
  title: 'FAQs | Fowcon Inc',
  description:
    'Frequently asked questions about Fowcon remodeling and restoration services. Learn about our process, licensing, service areas, insurance claims, and more.',
};

export default function FAQPage() {
  return (
    <main>
      <AboutHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Fowcon."
      />
      <FAQContent />
    </main>
  );
}
