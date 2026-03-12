'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What rooms do you remodel besides kitchens and bathrooms?',
    answer:
      "We remodel living rooms, family rooms, home offices, laundry rooms, dining rooms, entryways, and more. If it\u2019s inside your home, we can redesign and rebuild it.",
  },
  {
    question: 'How long does a whole-home interior remodel take?',
    answer:
      "It depends on the scope. A single room typically takes 1 to 3 weeks. A multi-room or whole-home project can take 4 to 8 weeks or more depending on structural changes, material lead times, and permitting. We\u2019ll provide a detailed timeline during your consultation.",
  },
  {
    question: 'Can I remodel just one room at a time?',
    answer:
      "Absolutely. Many homeowners start with the room that needs the most attention and plan additional rooms over time. We\u2019re happy to work at whatever pace fits your budget and schedule.",
  },
  {
    question: 'Do you handle the design or do I need to hire a separate designer?',
    answer:
      "We handle everything in-house. Our team works with you during the design consultation to understand your style, needs, and budget \u2014 then we create a custom plan. No need to hire a separate designer.",
  },
  {
    question: 'How much does interior remodeling cost?',
    answer:
      "Costs vary based on the number of rooms, scope of work, and materials chosen. A single room refresh might start around $8,000\u2013$15,000, while a comprehensive multi-room remodel can range from $30,000\u2013$80,000+. We provide a detailed, no-obligation estimate after your free consultation.",
  },
];

export default function InteriorsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Interior Remodeling FAQs
          </h2>
          <p className="text-gray-700 text-lg">
            Common questions about whole-home and room-by-room remodeling.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-primary-blue pr-4">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-primary-blue shrink-0 transition-transform duration-300 ${
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
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
