'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface MitigationServicesProps {
  title: string;
  intro: string;
  services: string[];
  outro: string;
  image: string;
  imageAlt: string;
  secondTitle: string;
  secondParagraphs: string[];
  secondImage: string;
  secondImageAlt: string;
}

export default function MitigationServices({
  title,
  intro,
  services,
  outro,
  image,
  imageAlt,
  secondTitle,
  secondParagraphs,
  secondImage,
  secondImageAlt,
}: MitigationServicesProps) {
  return (
    <>
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
                {title}
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{intro}</p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-blue mt-1 shrink-0" />
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
              {outro && (
                <p className="text-gray-700 mt-6 leading-relaxed">{outro}</p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              {/* <Image src={image} alt={imageAlt} fill className="object-cover" /> */}
            </motion.div>
          </div>
        </div>
      </section>

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
              {/* <Image src={secondImage} alt={secondImageAlt} fill className="object-cover" /> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                {secondTitle}
              </h2>
              {secondParagraphs.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
