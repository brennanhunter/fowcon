'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does a kitchen remodel take?',
    answer: 'Most kitchen remodels take 4–8 weeks depending on scope. A countertop and cabinet refresh can be done in 2–3 weeks, while a full gut renovation may take 8–12 weeks. We\'ll give you a clear timeline during your consultation.'
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes. As a licensed Florida general contractor, we handle all necessary permits for plumbing, electrical, and structural work. You don\'t need to worry about any of the paperwork.'
  },
  {
    question: 'Can I stay in my home during the remodel?',
    answer: 'In most cases, yes. We set up dust barriers and work to minimize disruption. For full gut renovations, we\'ll discuss the best plan to keep your daily routine as normal as possible.'
  },
  {
    question: 'What does a kitchen remodel cost?',
    answer: 'Kitchen remodels vary widely based on scope and materials. We provide multiple design options at different price points during your consultation so you can choose what fits your budget.'
  },
  {
    question: 'Do you offer financing?',
    answer: 'We can discuss financing options during your consultation. We work with homeowners to find solutions that make their dream kitchen achievable.'
  }
];

export default function KitchenFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-14"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-primary-blue">{faq.question}</span>
                <FaChevronDown className={`text-primary-blue shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
