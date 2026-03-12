'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const primaryAreas = [
  'Tampa',
  'St. Petersburg',
  'Clearwater',
  'Westchase',
  'Brandon',
  'Riverview',
  'Wesley Chapel',
  'Land O\u2019 Lakes',
];

const extendedAreas = [
  'Sarasota',
  'Bradenton',
  'Lakeland',
  'New Port Richey',
  'Palm Harbor',
  'Largo',
  'Dunedin',
  'Oldsmar',
  'Temple Terrace',
  'Plant City',
];

export default function ServiceAreaContent() {
  return (
    <>
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tampa Bay and Beyond</h2>
              <p className="text-gray-600 text-lg mb-6">
                Fowcon serves the Tampa Bay area, the surrounding West Coast, and Greater Florida for both
                remodeling and restoration projects. Whether you need a kitchen renovation in Clearwater or
                emergency water mitigation in Brandon, our team is ready.
              </p>
              <p className="text-gray-600">
                For large-scale restoration and catastrophic loss projects, our service area extends across the
                entire state of Florida. Contact us to confirm availability in your area.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <Image
                src="/images/florida-image.png"
                alt="Fowcon service area — Florida map highlighting Tampa Bay"
                width={600}
                height={400}
                className="w-full h-auto max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Primary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-blue" />
                Primary Service Area
              </h3>
              <ul className="space-y-3">
                {primaryAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-primary-blue rounded-full shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Extended */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                Extended Service Area
              </h3>
              <ul className="space-y-3">
                {extendedAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-500 mt-12"
          >
            Don&apos;t see your area? Contact us — we cover projects across Greater Florida for restoration and large-scale remodeling.
          </motion.p>
        </div>
      </section>
    </>
  );
}
