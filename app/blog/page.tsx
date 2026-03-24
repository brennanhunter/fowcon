import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, trends, and insights on kitchen remodeling, bathroom renovations, home additions, and restoration from the Fowcon Construction team in Tampa Bay.',
  openGraph: {
    title: 'Blog | Fowcon Construction',
    description:
      'Tips, trends, and insights on home remodeling and restoration from Fowcon Construction.',
    url: 'https://fowconinc.com/blog',
  },
  alternates: {
    canonical: 'https://fowconinc.com/blog',
  },
};

export default function BlogPage() {
  return (
    <main>
      <AboutHero
        title="Blog"
        subtitle="Tips, trends, and insights from our team."
      />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-lg">
            No articles yet — check back soon!
          </p>
        </div>
      </section>
    </main>
  );
}
