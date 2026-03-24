'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does a home addition take?',
    answer:
      'Most home additions take 3–6 months from permitting to final walkthrough. A single-room addition on a slab can be closer to 3 months, while a second story or multi-room addition with complex structural work may take 5–6 months. We\'ll give you a detailed timeline specific to your project during your consultation.',
  },
  {
    question: 'Do I need a permit for a home addition?',
    answer:
      'Yes. All structural additions in Florida require building permits, engineering plans, and multiple inspections. As a licensed general contractor (CGC 1531101), we handle the entire permitting process — from engineering drawings to final inspection sign-off.',
  },
  {
    question: 'Will the addition match my existing home?',
    answer:
      'Absolutely. Our team carefully matches rooflines, siding, paint, trim, and finishes so the addition blends seamlessly with your existing home — inside and out. The goal is for it to look like it was always part of the original build.',
  },
  {
    question: 'Can I live in my home during construction?',
    answer:
      'In most cases, yes. We stage the work to minimize disruption and maintain safe access to your living areas. For larger projects like second-story additions, we\'ll discuss the best plan to keep your daily routine as normal as possible.',
  },
  {
    question: 'How much does a home addition cost?',
    answer:
      'Costs vary significantly based on size, complexity, and finishes. A simple room addition starts differently than a full second-story build. During your free consultation, we provide itemized estimates with multiple options at different price points — so you see exactly where every dollar goes.',
  },
  {
    question: 'Do you offer financing for additions?',
    answer:
      'Yes. We offer flexible financing options to help make your project achievable. We\'ll walk you through available plans during your consultation so you can find the right fit for your budget.',
  },
];

export default function AdditionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-3">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-primary-blue">{faq.question}</span>
                <FaChevronDown
                  className={`text-primary-blue text-sm transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
