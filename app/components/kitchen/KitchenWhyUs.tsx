'use client';

import { motion } from 'framer-motion';

const whyUs = [
  {
    title: 'Personalized Design',
    description: 'We don\'t do cookie-cutter. Every kitchen is designed around how you cook, entertain, and live.'
  },
  {
    title: 'Transparent Pricing',
    description: 'Multiple options at different price points so you get exactly what fits your budget — no surprises.'
  },
  {
    title: 'Licensed & Insured',
    description: 'Florida-licensed general contractor with full insurance. Your home is protected from start to finish.'
  },
  {
    title: 'On-Time Delivery',
    description: 'We set realistic timelines and stick to them. Daily updates keep you informed every step of the way.'
  }
];

export default function KitchenWhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary-blue text-center mb-14"
        >
          Why Homeowners Choose Fowcon
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary-blue mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
