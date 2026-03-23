'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ConsultationModal from '@/app/components/ConsultationModal';

export default function BathroomHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <Image
        src="/images/baths-b-a/Harroun M.B. 1-a After.jpg"
        alt="Beautiful custom bathroom remodel by Fowcon"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Bathroom Remodeling
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Complete bathroom remodels for Tampa Bay homeowners — tile, plumbing, fixtures, and everything in between.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 py-4 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg"
            >
              Get a Free Bathroom Consultation
            </button>
          </motion.div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
