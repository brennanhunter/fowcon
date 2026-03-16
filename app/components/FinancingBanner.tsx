'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign } from 'react-icons/fa';
import ConsultationModal from './ConsultationModal';

export default function FinancingBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary-blue/10 flex items-center justify-center">
              <FaDollarSign className="text-primary-blue text-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-blue mb-2">
              Flexible Financing Available
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Financing tailored to your specific project needs. Don&apos;t let budget hold you
              back — we work with you to find a plan that makes your project possible.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg whitespace-nowrap"
            >
              Ask About Financing
            </button>
          </div>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
