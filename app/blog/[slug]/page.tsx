import type { Metadata } from 'next';
import { type PortableTextBlock } from 'next-sanity';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery, allPostsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import BlogPostContent from './BlogPostContent';

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string }; alt?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { _id: string; title: string }[];
  body?: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: { asset: { _ref: string } };
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(allPostsQuery);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};

  const metaTitle = post.seo?.metaTitle ?? post.title;
  const metaDescription = post.seo?.metaDescription ?? post.excerpt;
  const ogImageSource = post.seo?.ogImage ?? post.mainImage;

  return {
    title: `${metaTitle} | Fowcon Construction`,
    description: metaDescription,
    alternates: {
      canonical: `https://fowconinc.com/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://fowconinc.com/blog/${slug}`,
      images: ogImageSource
        ? [urlFor(ogImageSource).width(1200).height(630).fit('crop').url()]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImageSource
        ? [urlFor(ogImageSource).width(1200).height(630).fit('crop').url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
