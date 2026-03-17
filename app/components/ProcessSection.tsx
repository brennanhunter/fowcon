'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaPencilRuler, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import ConsultationModal from './ConsultationModal';

const steps = [
  {
    icon: FaPhone,
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your home, listen to your vision, and assess the space. No pressure — just honest advice and a clear scope of work.'
  },
  {
    icon: FaPencilRuler,
    number: '02',
    title: 'Design, Plan & Estimate',
    description: 'We put together a scope of work with material selections, a project timeline, and an itemized estimate. No surprises down the road.'
  },
  {
    icon: FaHardHat,
    number: '03',
    title: 'Build-Out',
    description: 'Our licensed crew handles the work — on schedule, within budget, and with daily updates so you always know where things stand.'
  },
  {
    icon: FaCheckCircle,
    number: '04',
    title: 'Final Walkthrough',
    description: 'Before we call it done, we walk through every detail with you. If something isn\'t right, we fix it.'
  }
];

export default function ProcessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-3">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From the first phone call to the final walkthrough, we make the construction process simple and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-200" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-5 rounded-full bg-primary-blue flex items-center justify-center">
                <step.icon className="text-white text-2xl" />
              </div>

              {/* Step number */}
              <span className="text-sm font-bold text-orange-500 tracking-wider uppercase">
                Step {step.number}
              </span>

              <h3 className="text-xl font-bold text-primary-blue mt-2 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg"
          >
            Schedule Your Free Consultation
          </button>
        </motion.div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
