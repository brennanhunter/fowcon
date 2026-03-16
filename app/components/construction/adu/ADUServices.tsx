'use client';

import { motion } from 'framer-motion';
import { FaHome, FaKey, FaLaptopHouse, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: FaUsers,
    title: 'In-Law Suites',
    description:
      'Keep family close with a fully independent living space — complete with kitchen, bathroom, and private entrance.',
  },
  {
    icon: FaKey,
    title: 'Rental Units',
    description:
      'Generate passive income with a code-compliant rental ADU. We handle design, permitting, and construction from start to finish.',
  },
  {
    icon: FaLaptopHouse,
    title: 'Home Offices & Studios',
    description:
      'A dedicated detached workspace designed for productivity — fully climate-controlled and wired for modern work.',
  },
  {
    icon: FaHome,
    title: 'Guest Houses',
    description:
      'Give your guests their own private retreat. Custom-designed to complement your property and lifestyle.',
  },
];

export default function ADUServices() {
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
            ADU Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From concept to keys, we manage every detail — design, engineering, permitting,
            and construction.
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
