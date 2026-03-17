'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is an ADU?',
    answer:
      'An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It can be attached or detached from the main home and typically includes its own kitchen, bathroom, and living area.',
  },
  {
    question: 'Are ADUs legal in Florida?',
    answer:
      'Yes. Florida has passed legislation encouraging ADU construction. Local regulations vary by county, but we navigate the permitting process for you to ensure full compliance.',
  },
  {
    question: 'How long does it take to build an ADU?',
    answer:
      'Timelines depend on the size, complexity, and local permitting requirements. During your consultation, we\'ll outline a realistic schedule tailored to your specific project.',
  },
  {
    question: 'Do you offer financing for ADU construction?',
    answer:
      'We offer financing tailored to your specific project needs. Ask about available plans during your consultation.',
  },
];

export default function ADUFAQ() {
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
