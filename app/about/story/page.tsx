import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import StoryContent from '@/app/components/about/StoryContent';

export const metadata: Metadata = {
  title: 'Our Story | Fowcon Inc',
  description:
    'Learn about Fowcon — restoring hope and homes since 2017. Over 100 years of combined experience in restoration, construction, and remodeling across the Tampa Bay area.',
};

export default function StoryPage() {
  return (
    <main>
      <AboutHero
        title="Our Story"
        subtitle="From restoration roots to full-service remodeling — built on trust, craftsmanship, and heart."
      />
      <StoryContent />
    </main>
  );
}
