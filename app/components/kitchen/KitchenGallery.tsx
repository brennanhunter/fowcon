'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    before: '/images/kitchens-b-a/Archer Before.jpg',
    after: '/images/kitchens-b-a/Archer After.jpg',
  },
  {
    id: 2,
    before: '/images/kitchens-b-a/Candelario Before.jpg',
    after: '/images/kitchens-b-a/Candelario After.jpg',
  },
  {
    id: 3,
    before: '/images/kitchens-b-a/Draper 1 Before.jpg',
    after: '/images/kitchens-b-a/Draper 1 After.jpg',
  },
  {
    id: 4,
    before: '/images/kitchens-b-a/Draper 2 Before.jpg',
    after: '/images/kitchens-b-a/Draper 2 After.jpg',
  },
  {
    id: 5,
    before: '/images/kitchens-b-a/Jim Before.jpeg',
    after: '/images/kitchens-b-a/Jim 1 After.jpeg',
  },
  {
    id: 6,
    before: '/images/kitchens-b-a/Mann Kit. Before.jpg',
    after: '/images/kitchens-b-a/Mann Kit. After.jpg',
  },
  {
    id: 7,
    before: '/images/kitchens-b-a/Medina Kit. Before.jpg',
    after: '/images/kitchens-b-a/Medina Kit. After.jpg',
  },
  {
    id: 8,
    before: '/images/kitchens-b-a/Morris Kit. Before.jpg',
    after: '/images/kitchens-b-a/Morris Kit. After.jpg',
  },
  {
    id: 9,
    before: '/images/kitchens-b-a/Musgrave 1 Before.jpg',
    after: '/images/kitchens-b-a/Musgrave 1 After.jpg',
  },
  {
    id: 10,
    before: '/images/kitchens-b-a/Musgrave 2 Before.jpg',
    after: '/images/kitchens-b-a/Musgrave 2 After.jpg',
  },
  {
    id: 11,
    before: '/images/kitchens-b-a/Parotto Before.jpg',
    after: '/images/kitchens-b-a/Parotto After.jpg',
  },
  {
    id: 12,
    before: '/images/kitchens-b-a/Turner Before.jpeg',
    after: '/images/kitchens-b-a/Turner 1 After.jpeg',
  },
  {
    id: 13,
    before: '/images/kitchens-b-a/Vann Before.jpg',
    after: '/images/kitchens-b-a/Vann After.jpg',
  },
  {
    id: 14,
    before: '/images/kitchens-b-a/Waechter 2 Before.jpg',
    after: '/images/kitchens-b-a/Waechter 2 After.jpg',
  },
];

function BeforeAfterCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      <div
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
        onClick={() => setShowAfter((prev) => !prev)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={showAfter ? project.after : project.before}
              alt={showAfter ? 'Kitchen after remodel' : 'Kitchen before remodel'}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <span
          className={`absolute top-3 left-3 text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full z-10 transition-colors duration-300 ${
            showAfter ? 'bg-primary-blue' : 'bg-black/60'
          }`}
        >
          {showAfter ? 'After' : 'Before'}
        </span>

        <span className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full z-10">
          Tap to {showAfter ? 'see before' : 'see after'}
        </span>
      </div>
    </motion.div>
  );
}

export default function KitchenGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Our Kitchen Projects
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Tap any photo to toggle between before and after.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <BeforeAfterCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
