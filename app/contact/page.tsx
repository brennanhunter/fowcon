import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import ContactContent from '@/app/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Fowcon Inc',
  description:
    'Get in touch with Fowcon for remodeling or restoration services in Tampa Bay. Call (833) 336-9266, email claims@fowconinc.com, or fill out our contact form for a free consultation.',
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
