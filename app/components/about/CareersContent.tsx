'use client';

import { motion } from 'framer-motion';
import {
  FaHardHat,
  FaTools,
  FaHandshake,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaMedkit,
  FaUmbrellaBeach,
  FaChartLine,
  FaCheckCircle,
} from 'react-icons/fa';

const benefits = [
  { icon: FaMedkit, title: 'Full Benefits Package', description: 'Medical, dental, vision, and life insurance for you and your family.' },
  { icon: FaShieldAlt, title: '401k Plan', description: 'Retirement savings plan to help you build your future.' },
  { icon: FaUmbrellaBeach, title: 'Generous PTO', description: '10 days paid time off in your first year, growing to 20 days with tenure.' },
  { icon: FaGraduationCap, title: 'Growth & Training', description: 'IICRC training, ongoing development, and a promote-from-within culture.' },
  { icon: FaUsers, title: 'Collaborative Culture', description: 'An agile, fast-paced environment where every team member\u2019s contributions are valued.' },
  { icon: FaChartLine, title: 'Career Advancement', description: 'Clear paths for professional growth — we invest in people who show up with a strong work ethic and a desire to learn.' },
];

const openings = [
  {
    title: 'Project Director',
    type: 'Full-Time',
    description:
      'Lead and oversee multiple restoration and remodeling projects across Tampa Bay. Manage project managers, ensure quality standards, and drive client satisfaction from start to finish.',
    qualifications: [
      'Extensive experience in restoration or construction management',
      'Strong leadership and communication skills',
      'IICRC certification preferred but not required',
    ],
  },
  {
    title: 'Project Manager',
    type: 'Full-Time',
    description:
      'Manage individual restoration and remodeling projects end-to-end. Serve as the single point of contact for clients, coordinate crews, and maintain timelines and budgets.',
    qualifications: [
      'Experience in restoration, construction, or mitigation',
      'Excellent organizational and client-facing skills',
      'IICRC certification preferred but not required',
    ],
  },
  {
    title: 'Mitigation Technician',
    type: 'Full-Time',
    description:
      'Respond to water, mold, fire, and storm damage emergencies. Perform extraction, drying, containment, demolition, and other mitigation tasks under Project Manager supervision.',
    qualifications: [
      'Ability to work in a fast-paced, physical environment',
      'IICRC certification preferred but not required',
      'Valid driver\u2019s license and reliable transportation',
    ],
  },
];

const interviewSteps = [
  { step: '1', title: 'Apply Online or Email', description: 'Submit your resume and a brief introduction. No deadlines — apply when you\u2019re ready.' },
  { step: '2', title: 'Phone Interview', description: 'A quick conversation to learn about your experience and what you\u2019re looking for.' },
  { step: '3', title: 'In-Person Interviews', description: 'Two in-person interviews to meet the team and see if we\u2019re a great mutual fit.' },
  { step: '4', title: 'Offer & Background Check', description: 'Hiring decisions are made by group consensus — hiring manager, general manager, and ownership.' },
];

export default function CareersContent() {
  return (
    <>
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team of Restoration &amp; Remodeling Experts</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Fowcon, we are more than just a restoration and remodeling company — we are a team of dedicated
              professionals with a passion for serving our community. With over 100 years of combined experience in
              restoration, construction, and mitigation, our expertise ranges from managing small water losses to
              handling some of the largest catastrophic losses in recent memory.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our mission is simple yet powerful — to help restore hope in individuals, families, and businesses
              after a traumatic loss by restoring their homes or businesses to their former glory. We believe in
              upholding our core values of Integrity, Honesty, and Compassion.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unlike many companies, we are an IICRC-certified firm and a fully licensed general contractor. Our
              commitment to quality and excellence drives us to perform 90% of our jobs in-house, with our own
              trained and vetted team. Every project is overseen by a dedicated Fowcon Project Manager, ensuring
              top-notch service from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Culture &amp; Benefits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We foster an agile, fast-paced work environment where collaboration and passion drive our success.
              We take care of our people so they can take care of our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-lg p-6 border border-gray-100"
              >
                <benefit.icon className="text-primary-blue text-2xl mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Positions</h2>
            <p className="text-gray-600 text-lg">
              No application deadlines — submit your application when you&apos;re ready to start an exciting career with Fowcon.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-100 p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <span className="text-xs font-semibold bg-primary-blue/10 text-primary-blue px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.qualifications.map((qual) => (
                    <li key={qual} className="flex items-start gap-2 text-gray-600 text-sm">
                      <FaCheckCircle className="text-primary-blue mt-0.5 shrink-0" />
                      {qual}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            Our Hiring Process
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-500 mt-10"
          >
            We seek candidates with a good attitude, strong work ethic, and a willingness to learn and grow within our team.
          </motion.p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaHardHat className="text-primary-blue text-4xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join the Team?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Be part of a passionate team dedicated to restoring hope and homes for our community.
              Send us your resume and take the first step toward a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:claims@fowconinc.com?subject=Career%20Inquiry"
                className="bg-primary-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <FaTools />
                Email Your Resume
              </a>
              <a
                href="tel:8333369266"
                className="border-2 border-primary-blue text-primary-blue font-semibold px-8 py-4 rounded-md hover:bg-primary-blue hover:text-white transition-colors text-lg inline-flex items-center justify-center"
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
