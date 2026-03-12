'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does a flooring installation take?',
    answer:
      "Most single-room installations take 1 to 2 days. A whole-home flooring project typically takes 3 to 5 days depending on the material, subfloor condition, and square footage. We\u2019ll give you a clear timeline during your consultation.",
  },
  {
    question: 'What type of flooring is best for Florida homes?',
    answer:
      "Florida\u2019s humidity and moisture make waterproof options like luxury vinyl plank (LVP), porcelain tile, and properly sealed hardwood popular choices. We\u2019ll help you pick the right material for each room based on traffic, moisture exposure, and your style preferences.",
  },
  {
    question: 'Do you remove old flooring?',
    answer:
      "Yes. We handle full tear-out and disposal of your existing flooring, including carpet, tile, laminate, and hardwood. Subfloor inspection and repair are included as part of every installation.",
  },
  {
    question: 'How much does new flooring cost?',
    answer:
      "Costs depend on the material, square footage, and subfloor condition. Luxury vinyl plank starts around $5\u2013$8 per square foot installed, while hardwood and natural stone range from $10\u2013$20+ per square foot. We provide a detailed estimate after measuring your space.",
  },
  {
    question: 'Can I stay in my home during the installation?',
    answer:
      "Absolutely. We work room by room when possible so you can continue using your home. We contain dust and debris and clean up at the end of each workday.",
  },
];

export default function FlooringFAQ() {
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
            Flooring FAQs
          </h2>
          <p className="text-gray-700 text-lg">
            Common questions from homeowners planning a flooring project.
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
