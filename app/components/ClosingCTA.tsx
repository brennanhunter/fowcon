'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import ConsultationModal from './ConsultationModal';

export default function ClosingCTA() {
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
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Kitchen remodel, bathroom upgrade, storm damage, or something bigger — we&apos;ll come to you, assess the work, and give you a straight answer on what it takes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-primary-blue font-bold rounded hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Free Consultation
            </button>
            <a
              href="tel:833-336-9266"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-lg inline-flex items-center gap-3"
            >
              <FaPhone />
              833-336-9266
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">Available 24/7 — Call anytime or schedule at your convenience.</p>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
