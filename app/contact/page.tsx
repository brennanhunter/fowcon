import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import ContactContent from '@/app/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Fowcon Construction for kitchen remodeling, bathroom renovations, or restoration services in Tampa Bay. Call (833) 336-9266, email claims@fowconinc.com, or request a free consultation online.',
  openGraph: {
    title: 'Contact Fowcon Construction | Tampa Bay Remodeling',
    description:
      'Get in touch with Fowcon for remodeling or restoration. Call (833) 336-9266, email claims@fowconinc.com, or request a free consultation.',
    url: 'https://fowconinc.com/contact',
  },
  alternates: {
    canonical: 'https://fowconinc.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <AboutHero
        title="Contact Us"
        subtitle="Ready to start your project? Have a question? We'd love to hear from you."
      />
      <ContactContent />
    </main>
  );
}
