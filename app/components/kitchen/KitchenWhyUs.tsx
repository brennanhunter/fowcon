'use client';

import { motion } from 'framer-motion';

const whyUs = [
  {
    title: 'Your Kitchen, Your Layout',
    description: 'We don\'t work from templates. Every kitchen design starts with how you actually use the space — your cooking habits, your storage needs, your morning routine.'
  },
  {
    title: 'Upfront, Itemized Estimates',
    description: 'You\'ll see exactly what every cabinet, countertop, and fixture costs before we start. We give you options at different price points so you stay in control.'
  },
  {
    title: 'One Crew, Start to Finish',
    description: 'Our in-house team handles demo, framing, plumbing, electrical, and finish work. You deal with one project manager — not five different subcontractors.'
  },
  {
    title: 'Licensed General Contractor',
    description: 'Fowcon holds a Florida general contractor license (CGC 1531101) and carries full insurance. Permits, inspections, code compliance — we handle all of it.'
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
