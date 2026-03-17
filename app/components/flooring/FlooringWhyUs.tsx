'use client';

import { motion } from 'framer-motion';
import { FaPencilRuler, FaDollarSign, FaShieldAlt, FaClock } from 'react-icons/fa';

const reasons = [
  {
    icon: FaPencilRuler,
    title: 'We Know Every Material',
    description:
      "Hardwood, LVP, porcelain, natural stone — we install all of them. We\'ll help you pick the right floor for the room based on traffic, moisture, and how you live.",
  },
  {
    icon: FaDollarSign,
    title: 'Honest Pricing, No Add-Ons',
    description:
      "Our estimates include materials, labor, subfloor prep, and trim work. You see the full cost upfront — not a low number that balloons after demo day.",
  },
  {
    icon: FaShieldAlt,
    title: 'Proper Subfloor Prep',
    description:
      'New floors are only as good as what\'s underneath. We level, repair, and moisture-test every subfloor before installation — the step most installers skip.',
  },
  {
    icon: FaClock,
    title: 'Fast, Clean Installs',
    description:
      'We protect your furniture, contain dust, and get floors down efficiently. Most single-room installs are done in a day or two.',
  },
];

export default function FlooringWhyUs() {
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
            Why Tampa Bay Homeowners Trust Fowcon for Flooring
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Good flooring starts with proper prep work and the right material for the job. Here&apos;s how we get it right.
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
