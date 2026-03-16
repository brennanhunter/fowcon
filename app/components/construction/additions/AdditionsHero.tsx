'use client';

import { motion } from 'framer-motion';

export default function AdditionsHero() {
  return (
    <section className="relative bg-primary-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Home Additions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-blue-200 text-lg max-w-2xl mx-auto"
        >
          Need more space? From room additions and second stories to sunrooms and garage
          conversions, we build seamless extensions that feel like they were always part of your
          home.
        </motion.p>
      </div>
    </section>
  );
}
