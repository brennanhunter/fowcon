'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from '../../ConsultationModal';

export default function ADUCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-primary-blue">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Building an ADU?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to explore your options. We&apos;ll walk your property,
            discuss your goals, and outline a plan that works for your budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-primary-blue font-bold rounded hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Free Consultation
            </button>
            <a
              href="tel:833-336-9266"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-lg"
            >
              833-336-9266
            </a>
          </div>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
