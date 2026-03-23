'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ConsultationModal from '../ConsultationModal';

const categories = [
  {
    title: 'Kitchens',
    image: '/images/kitchens-b-a/Waechter 1 After.jpg',
    href: '/construction/remodeling/kitchens',
    description:
      'From custom cabinetry to full gut renovations, we design and build kitchens that are as functional as they are beautiful.',
  },
  {
    title: 'Bathrooms',
    image: '/images/baths-b-a/Harroun M.B. 2 After.jpg',
    href: '/construction/remodeling/bathrooms',
    description:
      'Luxurious upgrades from walk-in showers to complete bathroom transformations. Your personal retreat starts here.',
  },
  {
    title: 'Flooring',
    image: '/images/floorfake.jpg',
    href: '/construction/remodeling/flooring',
    description:
      'Hardwood, tile, luxury vinyl, and natural stone — installed with precision by our in-house flooring specialists.',
  },
  {
    title: 'Interiors',
    image: '/images/fakelivingroom.jpg',
    href: '/construction/remodeling/interiors',
    description:
      'Living rooms, home offices, laundry rooms, and more — reimagined to fit your lifestyle and elevate your home.',
  },
];

export default function RemodelingHub() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-blue py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Remodeling Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto"
          >
            Kitchens, bathrooms, flooring, and full interior renovations — handled by our in-house
            crews from demo to final walkthrough. Licensed Florida general contractor serving Tampa
            Bay and surrounding areas.
          </motion.p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={cat.href} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 leading-relaxed">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary-blue font-semibold mt-2 group-hover:gap-3 transition-all">
                    Learn More <FaArrowRight className="text-sm" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            Ready to Start Your Remodel?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and let&apos;s discuss how we can bring your vision to
            life — on time, on budget, and built to last.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
