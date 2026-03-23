'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    before: '/images/baths-b-a/Harroun M.B. 2 Before.jpg',
    after: '/images/baths-b-a/Harroun M.B. 2 After.jpg',
  },
  {
    id: 2,
    before: '/images/baths-b-a/Hansen 1 Before.jpeg',
    after: '/images/baths-b-a/Hansen 1 After.jpeg',
  },
  {
    id: 3,
    before: '/images/baths-b-a/Jones Before.jpg',
    after: '/images/baths-b-a/Jones After.jpg',
  },
  {
    id: 4,
    before: '/images/baths-b-a/Mann M.B. Before.jpg',
    after: '/images/baths-b-a/Mann M.B. After.jpg',
  },
  {
    id: 5,
    before: '/images/baths-b-a/Menendez Before.jpg',
    after: '/images/baths-b-a/Menendez After.jpg',
  },
  {
    id: 6,
    before: '/images/baths-b-a/Hansen 2 Before.jpeg',
    after: '/images/baths-b-a/Hansen 2 After.jpeg',
  },
  {
    id: 7,
    before: '/images/baths-b-a/Harroun H.B. Before.jpg',
    after: '/images/baths-b-a/Harroun H.B. After.jpg',
  },
  {
    id: 8,
    before: '/images/baths-b-a/Harroun M.B. 3 Before.jpg',
    after: '/images/baths-b-a/Harroun M.B. 3 After.jpg',
  },
  {
    id: 9,
    before: '/images/baths-b-a/Harroun M.B. Before.jpg',
    after: '/images/baths-b-a/Harroun M.B. 1-b After.jpg',
  },
  {
    id: 10,
    before: '/images/baths-b-a/Harroun P.B Before.jpg',
    after: '/images/baths-b-a/Harroun P.B. After.jpg',
  },
  {
    id: 11,
    before: '/images/baths-b-a/Larry Before.jpeg',
    after: '/images/baths-b-a/Larry After.jpeg',
  },
  {
    id: 12,
    before: '/images/baths-b-a/Rodgers Before.jpeg',
    after: '/images/baths-b-a/Rodgers 1 After.jpeg',
  },
  {
    id: 13,
    before: '/images/baths-b-a/Rodgers 2 Before.jpeg',
    after: '/images/baths-b-a/Rodgers 2 After.jpeg',
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
        {/* Both images rendered; animate opacity for crossfade */}
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
              alt={showAfter ? 'Bathroom after remodel' : 'Bathroom before remodel'}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Label pill */}
        <span
          className={`absolute top-3 left-3 text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full z-10 transition-colors duration-300 ${
            showAfter ? 'bg-primary-blue' : 'bg-black/60'
          }`}
        >
          {showAfter ? 'After' : 'Before'}
        </span>

        {/* Tap hint */}
        <span className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full z-10">
          Tap to {showAfter ? 'see before' : 'see after'}
        </span>
      </div>
    </motion.div>
  );
}

export default function BathroomGallery() {
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
            Our Bathroom Remodeling Work
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
