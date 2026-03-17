'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ConsultationModal from '@/app/components/ConsultationModal';

export default function KitchenHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <Image
        src="/images/fakekitchen.jpg"
        alt="Beautiful custom kitchen remodel"
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
              Kitchen Remodeling
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Full-service kitchen remodeling in Tampa Bay — from layout and design to cabinets, countertops, and finishing touches.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 py-4 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg"
            >
              Get a Free Kitchen Consultation
            </button>
          </motion.div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
