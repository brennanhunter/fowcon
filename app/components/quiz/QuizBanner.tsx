'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Palette } from 'lucide-react';

const previewImages = [
  { src: '/images/quiz/results/modern.jpg', alt: 'Design style preview' },
  { src: '/images/quiz/results/coastal.jpg', alt: 'Design style preview' },
  { src: '/images/quiz/results/farmhouse.jpg', alt: 'Design style preview' },
  { src: '/images/quiz/results/bohemian.jpg', alt: 'Design style preview' },
];

export default function QuizBanner() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 text-primary-blue font-semibold uppercase tracking-widest text-sm px-4 py-2 rounded-full mb-4">
              <Palette size={16} />
              Free Design Tool
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Not sure where to start?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover your unique design personality — and get inspired for your next remodel.
            </p>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {previewImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-lg aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Stats + CTA */}
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-8">
              <span className="text-sm text-gray-500 font-medium">⏱ 60 seconds</span>
              <span className="text-sm text-gray-500 font-medium">✏️ 10 questions</span>
              <span className="text-sm text-gray-500 font-medium">🎨 8 styles</span>
            </div>
            <Link
              href="/design-style-quiz"
              className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg"
            >
              Take the Quiz
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
