'use client';

import { motion } from 'framer-motion';
import {
  FaClipboardList,
  FaSearch,
  FaHandshake,
  FaWater,
  FaBolt,
  FaFireAlt,
  FaShieldAlt,
  FaPhone,
  FaCheckCircle,
} from 'react-icons/fa';

const emergencyPlanningItems = [
  { icon: FaWater, title: 'Water shut-off locations', description: 'Know where your main water valve is and how to shut it off quickly to prevent flooding.' },
  { icon: FaBolt, title: 'Electrical panel mapping', description: 'Label your breaker panel and know how to safely cut power during storms or emergencies.' },
  { icon: FaFireAlt, title: 'Fire escape routes', description: 'Establish and practice multiple escape routes from every room in your home.' },
  { icon: FaClipboardList, title: 'Insurance documentation', description: 'Keep an up-to-date home inventory with photos, receipts, and policy numbers in a safe, accessible location.' },
  { icon: FaShieldAlt, title: 'Emergency contact list', description: 'Have your insurance company, contractor (that\'s us!), plumber, and electrician on speed dial.' },
];

const inspectionChecklist = [
  { area: 'Roof & Gutters', items: ['Missing or damaged shingles', 'Clogged gutters and downspouts', 'Flashing around vents and chimneys'] },
  { area: 'Plumbing', items: ['Leaking faucets or pipes', 'Water heater condition and age', 'Slow drains indicating blockages'] },
  { area: 'HVAC & Ventilation', items: ['Air filter condition', 'Ductwork for mold or moisture', 'Proper bathroom and kitchen exhaust'] },
  { area: 'Exterior', items: ['Foundation cracks', 'Window and door seal integrity', 'Siding damage or rot'] },
  { area: 'Interior', items: ['Water stains on ceilings or walls', 'Musty odors indicating hidden mold', 'Proper grading around the foundation'] },
];

export default function PreventionContent() {
  return (
    <>
      {/* Emergency Planning */}
      <section id="emergency-planning" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full mb-4">
              <FaClipboardList className="text-primary-blue text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Planning</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The best time to prepare for a disaster is before it happens. A solid emergency plan
              can save you thousands in damage and weeks of stress.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyPlanningItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <item.icon className="text-primary-blue text-xl mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 bg-primary-blue/5 border border-primary-blue/10 rounded-lg p-6 text-center"
          >
            <p className="text-gray-700">
              <strong>Pro tip:</strong> Store a digital copy of your emergency plan and home inventory in the cloud.
              If your home is damaged, physical copies may be inaccessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Home Inspection */}
      <section id="home-inspection" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full mb-4">
              <FaSearch className="text-primary-blue text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Inspection Checklist</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Catching small problems early prevents big ones later. Use this checklist to walk
              through your home seasonally — or let us do it for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionChecklist.map((section, i) => (
              <motion.div
                key={section.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-lg border border-gray-100 p-6"
              >
                <h3 className="font-bold text-primary-blue mb-3">{section.area}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <FaCheckCircle className="text-primary-blue mt-0.5 shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-600 mb-4">
              Want a professional set of eyes? We offer complimentary home assessments for Tampa Bay homeowners.
            </p>
            <a
              href="tel:8333369266"
              className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              <FaPhone />
              Schedule an Assessment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Referral Partnerships */}
      <section id="referral-partnerships" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full mb-4">
              <FaHandshake className="text-primary-blue text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Referral Partnerships</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We partner with insurance agents, property managers, real estate professionals, and
              local businesses to provide fast, reliable restoration and remodeling services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Insurance Agents & Adjusters',
                description:
                  'We work directly with your clients to streamline the claims process. Detailed documentation, transparent pricing, and quality work that reflects well on your referral.',
              },
              {
                title: 'Property Managers',
                description:
                  'From emergency mitigation to tenant-ready renovations, we handle it all. One call, one point of contact, and reliable timelines your tenants and owners can count on.',
              },
              {
                title: 'Real Estate Professionals',
                description:
                  'Need a pre-listing refresh or post-inspection repairs? We offer fast-turnaround remodeling and repair services to help close deals with confidence.',
              },
              {
                title: 'Local Businesses & Contractors',
                description:
                  'We welcome partnerships with plumbers, electricians, roofers, and other trades. When your client needs restoration or remodeling, send them our way — and vice versa.',
              },
            ].map((partner, i) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{partner.title}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center bg-primary-blue rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Interested in Partnering?</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              We value relationships built on trust and mutual benefit. Reach out to discuss
              how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:claims@fowconinc.com?subject=Referral Partnership Inquiry"
                className="bg-white text-primary-blue font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Email Us
              </a>
              <a
                href="tel:8333369266"
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-primary-blue transition-colors inline-flex items-center justify-center"
              >
                (833) 336-9266
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
