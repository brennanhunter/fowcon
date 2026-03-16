'use client';

import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaSun, FaWarehouse } from 'react-icons/fa';

const services = [
  {
    icon: FaHome,
    title: 'Room Additions',
    description:
      'Expand your living space with a custom room addition — bedrooms, family rooms, or home offices built to match your existing home.',
  },
  {
    icon: FaBuilding,
    title: 'Second Story Additions',
    description:
      'Maximize your lot by building up. We handle full second-story additions with structural engineering and seamless integration.',
  },
  {
    icon: FaSun,
    title: 'Sunrooms & Enclosed Patios',
    description:
      'Enjoy Florida living year-round with a custom sunroom or enclosed patio — designed for comfort and built to code.',
  },
  {
    icon: FaWarehouse,
    title: 'Garage Conversions',
    description:
      'Transform unused garage space into functional living areas — guest suites, home gyms, studios, and more.',
  },
];

export default function AdditionsServices() {
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
            Addition Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We handle every phase — from design and permitting to construction and final
            inspection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-blue/10 flex items-center justify-center">
                <service.icon className="text-primary-blue text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-primary-blue mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
