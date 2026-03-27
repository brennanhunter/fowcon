import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import BlogContent from './BlogContent';
import { client } from '@/sanity/lib/client';
import { featuredPostQuery, nonFeaturedPostsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Blog | Fowcon Construction',
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

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string }; alt?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { _id: string; title: string }[];
}

export default async function BlogPage() {
  const [featured, posts]: [Post | null, Post[]] = await Promise.all([
    client.fetch(featuredPostQuery),
    client.fetch(nonFeaturedPostsQuery),
  ]);

  return (
    <div>
      <AboutHero
        title="Blog"
        subtitle="Tips, trends, and insights on remodeling and restoration from our Tampa Bay team."
      />
      <BlogContent featured={featured} posts={posts} />
    </div>
  );
}
