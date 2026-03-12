'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function QuizBanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center border border-gray-100"
        >
          <p className="text-primary-blue font-semibold uppercase tracking-widest text-sm mb-2">
            Free Design Tool
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Take our 60-second Design Style Quiz to discover whether you lean Modern, Coastal,
            Mid-Century, Bohemian, or one of 8 possible styles — and get inspired for your next remodel.
          </p>
          <Link
            href="/design-style-quiz"
            className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg"
          >
            Take the Quiz
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
