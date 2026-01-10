'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceAreaSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right md:pr-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-blue leading-tight">
              Serving The Tampa Bay Area,<br />
              Surrounding West Coast,<br />
              and Greater Florida
            </h2>
          </motion.div>

          {/* Florida Map Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <Image 
              src="/images/florida-image.png" 
              alt="Florida service area map" 
              width={600} 
              height={400}
              className="w-full h-auto max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
