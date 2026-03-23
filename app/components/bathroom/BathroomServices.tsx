'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  'Walk-in shower design & installation',
  'Freestanding & soaking tub upgrades',
  'Custom vanities & cabinetry',
  'Tile work — floors, walls & accents',
  'Plumbing fixture upgrades',
  'Lighting & ventilation improvements',
  'Accessibility & aging-in-place modifications',
  'Full gut renovations & layout changes'
];

export default function BathroomServices() {
  return (
    <>
      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Complete Bathroom Remodeling Services
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Bathroom remodeling in Tampa Bay requires a contractor who understands wet-area construction — waterproofing, proper tile slope, moisture management, and Florida building code. At Fowcon, every bathroom remodel starts with a site visit where we assess the existing conditions and talk through what you want the finished space to look and feel like.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We handle every trade under one roof — plumbing, electrical, tile, drywall, paint, and finish work. One crew, one schedule, one project manager keeping it all on track. Our bathroom remodeling services include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-blue mt-1 shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                Permits, inspections, plumbing rough-ins, waterproofing — we handle everything so you don&apos;t have to chase down separate contractors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/baths-b-a/Hansen 1 After.jpeg"
                alt="Completed bathroom remodeling project"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality & Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/images/baths-b-a/Harroun P.B. After.jpg"
                alt="Premium bathroom materials and finishes"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Where Details Make the Difference
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Bathrooms demand precision. Waterproofing, tile layout, drain placement, ventilation — every detail matters. Our experienced crews specialize in bathroom remodeling and understand how to build spaces that look stunning and hold up for decades.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                We work with trusted local suppliers for tile, stone, fixtures, and vanities — giving you access to premium materials without the premium wait times. From classic subway tile to large-format porcelain, frameless glass enclosures to rainfall showerheads, we&apos;ll help you select finishes that match your style.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Need to make your bathroom more accessible? We also specialize in aging-in-place modifications including grab bars, curbless showers, comfort-height toilets, and wider doorways — all designed to blend seamlessly into your new bathroom&apos;s aesthetic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
