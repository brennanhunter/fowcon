'use client';

import { motion } from 'framer-motion';

export default function ADUHero() {
  return (
    <section className="relative bg-primary-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Accessory Dwelling Units
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-blue-200 text-lg max-w-2xl mx-auto"
        >
          Add value and versatility to your property with a custom-built ADU. Perfect for guest
          houses, in-law suites, rental income, or a private home office — built by a licensed
          general contractor.
        </motion.p>
      </div>
    </section>
  );
}
