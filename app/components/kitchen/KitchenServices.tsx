'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  'Custom cabinetry & storage solutions',
  'Granite, quartz & marble countertops',
  'Backsplash design & installation',
  'Kitchen island builds & reconfigurations',
  'Plumbing & fixture upgrades',
  'Lighting design & electrical work',
  'Flooring replacement & refinishing',
  'Full gut renovations & layout changes'
];

export default function KitchenServices() {
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
                Complete Kitchen Remodeling Services
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                A kitchen remodel is one of the biggest upgrades you can make to your home — and one of the most complex. At Fowcon, we start every kitchen project with an in-home consultation where we look at your space, talk through what&apos;s working and what isn&apos;t, and put together a plan that fits both your goals and your budget.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We manage the entire project in-house — demolition, framing, plumbing, electrical, cabinetry, countertops, and finish work. One team, one project manager, and no subcontractor runaround. Our Tampa Bay kitchen remodeling services include:
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
                We pull all necessary permits, handle inspections, and manage every trade involved. You get one phone number to call with questions — that&apos;s it.
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
                src="/images/kitchens-b-a/Jim 1 After.jpeg"
                alt="Kitchen remodeling project"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality & Partnerships */}
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
                src="/images/kitchens-b-a/Parotto After.jpg"
                alt="Premium kitchen materials and craftsmanship"
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
                Premium Materials, Expert Craftsmanship
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                We&apos;ve partnered with trusted suppliers across the Tampa Bay area to bring you premium cabinetry, countertops, fixtures, and flooring at competitive prices. Our locally stocked materials mean shorter lead times and faster project completion — without sacrificing quality.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Every phase of your remodel is completed by trained, experienced, and thoroughly vetted contractors who take pride in their work. As a licensed Florida general contractor, we hold ourselves to the highest standards — and it shows in every finished kitchen we deliver.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether it&apos;s a modern open-concept layout, a classic farmhouse kitchen, or a sleek contemporary design, our team has the expertise to bring your vision to life. We&apos;ll present you with multiple design options at different price points so you can make informed decisions with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
