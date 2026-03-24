import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import StoryContent from '@/app/components/about/StoryContent';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn about Fowcon Construction — restoring hope and homes since 2017. Over 100 years of combined experience in restoration, construction, and remodeling across Tampa Bay.',
  openGraph: {
    title: 'Our Story | Fowcon Construction',
    description:
      'Restoring hope and homes since 2017. Over 100 years of combined experience in restoration, construction, and remodeling in Tampa Bay.',
    url: 'https://fowconinc.com/about/story',
  },
  alternates: {
    canonical: 'https://fowconinc.com/about/story',
  },
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
