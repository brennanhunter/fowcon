'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  'Hardwood flooring installation',
  'Hardwood refinishing &amp; restoration',
  'Porcelain &amp; ceramic tile installation',
  'Luxury vinyl plank (LVP) &amp; tile',
  'Natural stone — marble, travertine &amp; slate',
  'Waterproof flooring for kitchens &amp; baths',
  'Subfloor repair &amp; leveling',
  'Baseboard &amp; trim installation',
];

export default function FlooringServices() {
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
                Complete Flooring Services
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                New floors change everything about a room — the look, the feel, even the acoustics. Whether you&apos;re updating a single room or reflooring your entire home, Fowcon delivers expert installation with meticulous attention to detail and clean, professional results.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We work with every major flooring material and handle the full scope of work from subfloor preparation to final trim. Our flooring services include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-blue mt-1 shrink-0" />
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                We remove your old flooring, prep the subfloor, and install your new floors — one crew, one project manager, zero hassle.
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
                src="/images/floorfake.jpg"
                alt="Flooring installation project"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials & Expertise */}
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
                src="/images/floorfake.jpg"
                alt="Premium flooring materials"
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
                The Right Material for Every Space
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Choosing the right flooring means matching durability, style, and budget to the room&apos;s purpose. Our team helps you navigate the options — from the warmth of solid hardwood in living areas to waterproof luxury vinyl in kitchens and bathrooms, or natural stone in entryways that make a lasting first impression.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                We source materials from trusted manufacturers and local suppliers, giving you access to a wide selection without the long lead times. Whether you already know what you want or need help deciding, we&apos;ll walk you through samples, costs, and maintenance considerations so you can choose with confidence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every installation starts with proper subfloor preparation — leveling, moisture testing, and repair when needed. It&apos;s the unglamorous work that determines whether your floors look and perform their best for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
