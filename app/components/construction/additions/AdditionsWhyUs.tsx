'use client';

import { motion } from 'framer-motion';
import { FaDraftingCompass, FaFileInvoiceDollar, FaUsers, FaShieldAlt, FaHardHat, FaClipboardCheck } from 'react-icons/fa';

const trustPoints = [
  {
    icon: FaDraftingCompass,
    title: 'Designed Around Your Home',
    description:
      'Every addition is custom-designed to match your existing structure — rooflines, siding, finishes, and architectural style. The goal is seamless, not "added on."',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Transparent, Itemized Pricing',
    description:
      'You\'ll see every cost before we break ground — structural work, materials, permitting fees, inspections. No surprises, no hidden change orders.',
  },
  {
    icon: FaUsers,
    title: 'One In-House Team, Start to Finish',
    description:
      '90% of our work is done by our own crew. One project manager coordinates everything — demolition, framing, electrical, plumbing, and finish work. No juggling subcontractors.',
  },
  {
    icon: FaShieldAlt,
    title: 'Licensed & Fully Insured',
    description:
      'Fowcon holds a Florida General Contractor license (CGC 1531101) and carries full liability and workers\' comp insurance. Your home and your investment are protected.',
  },
  {
    icon: FaHardHat,
    title: 'We Handle All Permitting & Engineering',
    description:
      'Home additions require structural engineering, foundation work, and multiple inspections. We manage the entire permit process with the county — you don\'t lift a finger.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Built to Florida Code — Every Time',
    description:
      'Wind loads, hurricane strapping, energy codes, impact requirements — Florida has some of the strictest building codes in the country. We know them inside and out.',
  },
];

export default function AdditionsWhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Why Homeowners Trust Fowcon With Additions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A home addition is one of the biggest investments you&apos;ll make. Here&apos;s why Tampa Bay families choose us to get it right.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <item.icon className="text-xl text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
