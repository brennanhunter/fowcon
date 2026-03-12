'use client';

import { motion } from 'framer-motion';
import { FaHardHat, FaUsers, FaCheckCircle, FaHandsHelping } from 'react-icons/fa';

const milestones = [
  {
    year: '2017',
    title: 'Fowcon Is Founded',
    description:
      'Fowcon Restoration launches in Tampa Bay with a clear purpose — to restore hope in individuals, families, and businesses impacted by traumatic property losses.',
  },
  {
    year: '2018–2019',
    title: 'Building Our Reputation',
    description:
      'By tackling everything from small water losses to large-scale catastrophic events, our team builds a reputation for reliability, quality, and compassion across the Tampa Bay area.',
  },
  {
    year: '2020–2022',
    title: 'Growing Through Adversity',
    description:
      'Through hurricanes, storms, and unprecedented challenges, Fowcon proves its resilience — managing some of the largest catastrophic losses in recent memory while maintaining our commitment to every homeowner.',
  },
  {
    year: '2023–Present',
    title: 'Expanding Into Remodeling',
    description:
      'With 100+ years of combined team experience in construction and restoration, Fowcon expands into full-service remodeling — kitchens, bathrooms, flooring, and whole-home interiors — bringing the same craftsmanship and care to dream home projects.',
  },
];

const stats = [
  { icon: FaHardHat, value: '100+', label: 'Years Combined Experience' },
  { icon: FaUsers, value: '90%', label: 'Work Done In-House' },
  { icon: FaCheckCircle, value: 'IICRC', label: 'Certified Firm' },
  { icon: FaHandsHelping, value: '2017', label: 'Founded' },
];

export default function StoryContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Restoring Hope and Homes Since 2017</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Fowcon, our journey began in 2017 with a clear purpose — to restore hope in individuals, families,
              and businesses impacted by traumatic losses through the art of restoration. What sets us apart is not
              just our dedication to exceptional service, but the heart and expertise we bring to every project.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Though relatively young as a company, our team boasts over 100 years of combined experience in
              restoration, construction, and mitigation. We have weathered every storm, from the smallest water loss
              to managing some of the largest catastrophic losses in recent memory. That same expertise now powers
              our full-service remodeling division — kitchens, bathrooms, flooring, interiors, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-blue py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="text-3xl mx-auto mb-2 text-blue-200" />
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow -translate-x-1/2 z-10 mt-1" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block bg-primary-blue text-white text-sm font-bold px-3 py-1 rounded mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our mission is simple yet profound — to help restore hope in the lives of those we serve by restoring
              their homes and businesses. We uphold integrity, honesty, and compassion in everything we do, aiming to
              rebuild not just structures but the faith and trust of families and businesses affected by adversity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', description: 'We do what we say we will do. Transparent pricing, honest timelines, and straightforward communication — every time.' },
              { title: 'Craftsmanship', description: 'With 90% of our work performed in-house by our own trained and vetted team, quality is never outsourced.' },
              { title: 'Compassion', description: 'Whether it is a dream remodel or an emergency restoration, we treat every homeowner like family and every home like our own.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-primary-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Excellence</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our commitment to excellence is demonstrated through our certifications and licensing. Every restoration
              and remodeling project is overseen by a Fowcon Project Manager ensuring meticulous attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: 'IICRC Certified Firm', sub: 'Industry-standard restoration practices' },
                { label: 'Licensed General Contractor', sub: 'CGC 1531101' },
                { label: 'Mold Remediation License', sub: 'MRSR2151' },
                { label: 'Fully Insured', sub: 'Complete liability coverage' },
              ].map((cert, i) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-5 w-56"
                >
                  <FaCheckCircle className="text-primary-blue text-xl mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">{cert.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
