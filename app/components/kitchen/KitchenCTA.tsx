'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from '@/app/components/ConsultationModal';

export default function KitchenCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-primary-blue">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Kitchen
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            We&apos;ll come to your home, look at the space, and put together a plan with real numbers — not a ballpark guess.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-white text-primary-blue font-bold rounded hover:bg-gray-100 transition-colors text-lg"
          >
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
