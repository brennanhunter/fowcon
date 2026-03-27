'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string }; alt?: string };
  excerpt?: string;
  publishedAt?: string;
  categories?: { _id: string; title: string }[];
}

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

interface Props {
  featured: Post | null;
  posts: Post[];
}

export default function BlogContent({ featured, posts }: Props) {
  return (
    <div>
      {/* Featured Article */}
      {featured && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-primary-blue mb-8"
            >
              Featured Article
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                href={`/blog/${featured.slug.current}`}
                className="group grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                  {featured.mainImage ? (
                    <Image
                      src={urlFor(featured.mainImage).width(900).height(600).fit('crop').url()}
                      alt={featured.mainImage.alt ?? featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  {featured.categories && featured.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.categories.map((cat) => (
                        <span
                          key={cat._id}
                          className="text-xs font-semibold uppercase tracking-wider bg-primary-blue text-white px-3 py-1 rounded"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold text-primary-blue mb-4 leading-snug">
                    {featured.title}
                  </h3>

                  {featured.excerpt && (
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    {featured.publishedAt && (
                      <span className="text-sm text-gray-400">
                        {formatDate(featured.publishedAt)}
                      </span>
                    )}
                    <span className="px-6 py-2.5 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-sm">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {posts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-primary-blue mb-8"
            >
              {featured ? 'More Articles' : 'All Articles'}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-200 h-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {post.mainImage ? (
                        <Image
                          src={urlFor(post.mainImage).width(600).height(338).fit('crop').url()}
                          alt={post.mainImage.alt ?? post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((cat) => (
                            <span
                              key={cat._id}
                              className="text-xs font-semibold uppercase tracking-wider bg-primary-blue text-white px-2.5 py-0.5 rounded"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-blue-800 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        {post.publishedAt && (
                          <span className="text-xs text-gray-400">
                            {formatDate(post.publishedAt)}
                          </span>
                        )}
                        <span className="text-xs font-bold text-primary-blue group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!featured && posts.length === 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-lg">No articles yet — check back soon!</p>
          </div>
        </section>
      )}

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
    </div>
  );
}
