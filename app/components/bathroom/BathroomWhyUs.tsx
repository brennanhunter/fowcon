'use client';

import { motion } from 'framer-motion';
import { FaPencilRuler, FaDollarSign, FaShieldAlt, FaClock } from 'react-icons/fa';

const reasons = [
  {
    icon: FaPencilRuler,
    title: 'Wet-Area Specialists',
    description:
      'Bathrooms are the most detail-sensitive rooms in the house. Waterproofing, tile slope, drain placement, ventilation — our crews know exactly what it takes to build a bathroom that holds up.',
  },
  {
    icon: FaDollarSign,
    title: 'Clear, Itemized Pricing',
    description:
      "You\'ll get a line-by-line estimate covering every tile, fixture, and labor hour before we swing a hammer. What we quote is what you pay.",
  },
  {
    icon: FaShieldAlt,
    title: 'Fully Licensed & Permitted',
    description:
      'We pull all required permits, schedule inspections, and ensure your bathroom meets Florida building code. License CGC 1531101.',
  },
  {
    icon: FaClock,
    title: 'Minimal Disruption',
    description:
      'We know being down a bathroom is tough. We plan the work to keep downtime short and communicate daily so you always know where things stand.',
  },
];

export default function BathroomWhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Why Tampa Bay Homeowners Choose Fowcon for Bathrooms
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Bathrooms require a different level of precision than any other room. Here&apos;s why our clients trust us with theirs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <reason.icon className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-primary-blue text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
