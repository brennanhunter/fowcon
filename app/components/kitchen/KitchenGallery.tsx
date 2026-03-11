'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Placeholder: Replace these with real project photos
const galleryImages = [
  '/images/fakekitchen.jpg',
  '/images/fakekitchen.jpg',
  '/images/fakekitchen.jpg',
  '/images/fakekitchen.jpg',
  '/images/fakekitchen.jpg',
  '/images/fakekitchen.jpg'
];

export default function KitchenGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-14"
        >
          Our Kitchen Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Kitchen project ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          * Placeholder images — real project photos coming soon.
        </p>
      </div>
    </section>
  );
}
