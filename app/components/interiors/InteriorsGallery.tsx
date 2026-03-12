'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/images/fakelivingroom.jpg', alt: 'Living room remodel' },
  { id: 2, src: '/images/fakelivingroom.jpg', alt: 'Family room renovation' },
  { id: 3, src: '/images/fakelivingroom.jpg', alt: 'Home office remodel' },
  { id: 4, src: '/images/fakelivingroom.jpg', alt: 'Laundry room upgrade' },
  { id: 5, src: '/images/fakelivingroom.jpg', alt: 'Interior renovation project' },
  { id: 6, src: '/images/fakelivingroom.jpg', alt: 'Complete interior remodel' },
];

export default function InteriorsGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Interior Remodeling Projects
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Browse recent interior remodels completed by Fowcon across the Tampa Bay area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
