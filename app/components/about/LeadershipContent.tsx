'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const leadership: TeamMember[] = [
  {
    name: 'Leadership Team',
    title: 'Fowcon Inc.',
    bio: 'Our leadership team brings together decades of experience in restoration, construction, and project management. Every member of our leadership is hands-on — from walking job sites to personally overseeing project quality. This is how we maintain the standards that have defined Fowcon since 2017.',
    image: '/images/fakelivingroom.jpg',
  },
];

const values = [
  {
    title: 'Hands-On Leadership',
    description:
      'Our leadership team is on job sites, not behind desks. Every project gets direct oversight from experienced professionals who know the work inside and out.',
  },
  {
    title: 'Team-First Culture',
    description:
      'We perform 90% of our work in-house with our own trained and vetted team. When you hire Fowcon, you get Fowcon — not a rotating cast of subcontractors.',
  },
  {
    title: 'Dedicated Project Managers',
    description:
      'Every restoration and remodeling project is overseen by a dedicated Fowcon Project Manager who serves as your single point of contact from start to finish.',
  },
  {
    title: 'Community Commitment',
    description:
      'We live and work in Tampa Bay. Our reputation matters to us because our neighbors are our clients. We build trust one project at a time.',
  },
];

export default function LeadershipContent() {
  return (
    <>
      {/* Team Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The People Behind Fowcon</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With over 100 years of combined experience in restoration, construction, and mitigation, our
              team has the expertise to handle any project — from emergency storm damage to dream kitchen remodels.
            </p>
          </motion.div>

          {/* Placeholder Team Cards */}
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-blue font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="flex gap-3 mt-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-blue transition-colors">
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary-blue transition-colors">
                        <FaEnvelope className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note about team photos */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-400 text-sm mt-8 italic"
          >
            Individual team member profiles and photos coming soon.
          </motion.p>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            How We Lead
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-primary-blue mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
