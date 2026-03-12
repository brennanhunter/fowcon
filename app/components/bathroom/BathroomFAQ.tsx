'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does a typical bathroom remodel take?',
    answer:
      "Most bathroom remodels take between 2 and 4 weeks depending on scope. A cosmetic refresh \u2014 new tile, fixtures, and paint \u2014 can be completed in about 2 weeks. A full gut renovation with layout changes, plumbing relocation, or structural work typically takes 3 to 4 weeks. We\u2019ll give you a clear timeline before we start.",
  },
  {
    question: 'Do I need permits for a bathroom remodel in Florida?',
    answer:
      "Yes \u2014 any work involving plumbing, electrical, or structural changes requires permits in most Florida municipalities. As a licensed general contractor, Fowcon handles all permitting and inspections so you don\u2019t have to worry about code compliance.",
  },
  {
    question: 'Can I still use my home during the remodel?',
    answer:
      "Absolutely. We take steps to contain dust and minimize disruption. If you have a second bathroom, you can continue your daily routine with minimal impact. If it\u2019s your only bathroom, we\u2019ll work with you to schedule the project in the most convenient way possible.",
  },
  {
    question: 'How much does a bathroom remodel cost?',
    answer:
      'Costs vary based on the size of the bathroom, the scope of work, and the materials you choose. A standard guest bathroom remodel typically starts around $12,000–$18,000, while a full master bath renovation can range from $20,000–$40,000 or more. We provide a detailed, no-obligation estimate after your free consultation.',
  },
  {
    question: 'Do you offer financing for bathroom remodels?',
    answer:
      'Yes. We work with lending partners to offer flexible financing options so you can get the bathroom you want without putting everything on hold. Ask about available plans during your consultation.',
  },
];

export default function BathroomFAQ() {
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
            Bathroom Remodeling FAQs
          </h2>
          <p className="text-gray-700 text-lg">
            Common questions from homeowners planning a bathroom remodel.
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
