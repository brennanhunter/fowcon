'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import ConsultationModal from '@/app/components/ConsultationModal';

export default function InteriorsCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Home&apos;s Interior?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and get a custom design plan for any room in your home — no pressure, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-primary-blue font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg cursor-pointer"
              >
                Schedule Free Consultation
              </button>
              <a
                href="tel:8333369266"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary-blue transition-colors text-lg flex items-center justify-center gap-2"
              >
                <FaPhone />
                (833) 336-9266
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
