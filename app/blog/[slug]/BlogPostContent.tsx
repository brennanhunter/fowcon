'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortableText, type PortableTextBlock } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string }; alt?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { _id: string; title: string }[];
  body?: PortableTextBlock[];
}

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).width(1200).height(675).fit('crop').url()}
            alt={value.alt ?? ''}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-400 mt-2">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-primary-blue mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-primary-blue mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold text-primary-blue mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-700 leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary-blue pl-5 italic text-gray-600 my-6 bg-blue-50 py-3 pr-4 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-5 ml-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-5 ml-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-blue underline hover:opacity-75"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <article>
      {/* Hero image */}
      {post.mainImage && (
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-100">
          <Image
            src={urlFor(post.mainImage).width(1800).height(900).fit('crop').url()}
            alt={post.mainImage.alt ?? post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-4xl mx-auto"
          >
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur text-white px-3 py-1 rounded"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Nav bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200"
          >
            <Link
              href="/blog"
              className="text-sm font-bold text-primary-blue hover:underline"
            >
              ← Back to Blog
            </Link>
            {post.publishedAt && (
              <span className="text-sm text-gray-400">
                {formatDate(post.publishedAt)}
              </span>
            )}
          </motion.div>

          {/* Title (if no hero image) */}
          {!post.mainImage && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-primary-blue mb-6"
            >
              {post.title}
            </motion.h1>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl text-gray-500 leading-relaxed mb-10 font-light border-l-4 border-primary-blue pl-5"
            >
              {post.excerpt}
            </motion.p>
          )}

          {/* Body */}
          {post.body && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <PortableText value={post.body} components={portableTextComponents} />
            </motion.div>
          )}

          {/* Footer nav */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-bold text-primary-blue hover:underline"
            >
              ← Back to all articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to come to you, assess the work, and give you a straight answer on what it takes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary-blue font-bold rounded hover:bg-gray-100 transition-colors text-lg"
              >
                Schedule Free Consultation
              </Link>
              <a
                href="tel:833-336-9266"
                className="px-10 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-lg"
              >
                (833) 336-9266
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
