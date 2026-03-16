'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Kitchens',
    image: '/images/fakekitchen.jpg',
    href: '/construction/remodeling/kitchens',
    description: 'Custom designs that blend beauty with functionality.'
  },
  {
    title: 'Bathrooms',
    image: '/images/fakebathroom.jpg',
    href: '/construction/remodeling/bathrooms',
    description: 'Luxurious upgrades from vanities to full remodels.'
  },
  {
    title: 'Interiors',
    image: '/images/fakelivingroom.jpg',
    href: '/construction/remodeling/interiors',
    description: 'Living spaces reimagined to fit your lifestyle.'
  },
  {
    title: 'Flooring',
    image: '/images/floorfake.jpg',
    href: '/construction/remodeling/flooring',
    description: 'Premium flooring installed with precision and care.'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What We Build
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From kitchens to flooring, we transform every corner of your home with expert craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
