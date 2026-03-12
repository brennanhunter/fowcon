'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

const generalFaqs: FAQ[] = [
  {
    question: 'What areas does Fowcon serve?',
    answer:
      'We primarily serve the Tampa Bay area including Tampa, St. Petersburg, Clearwater, Westchase, Brandon, Riverview, Wesley Chapel, and Land O\u2019 Lakes. For restoration and large-scale projects, we serve the greater Central Florida and West Coast regions.',
  },
  {
    question: 'Is Fowcon licensed and insured?',
    answer:
      'Yes. Fowcon holds a General Contractor license (CGC 1531101), a Mold Remediation license (MRSR2151), and is an IICRC-certified firm. We are fully insured for all remodeling and restoration work.',
  },
  {
    question: 'Do you use subcontractors?',
    answer:
      'We perform approximately 90% of our work in-house with our own trained and vetted team. This gives us direct control over quality, timelines, and communication on every project.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Contact us by phone at (833) 336-9266 or email claims@fowconinc.com to schedule a free consultation. We will evaluate your project, discuss your vision and budget, and provide a detailed estimate.',
  },
];

const remodelingFaqs: FAQ[] = [
  {
    question: 'What types of remodeling projects does Fowcon handle?',
    answer:
      'We offer full-service remodeling including kitchens, bathrooms, flooring, and whole-home interiors (living rooms, family rooms, home offices, laundry rooms). From design through completion, our team handles it all.',
  },
  {
    question: 'How long does a typical kitchen or bathroom remodel take?',
    answer:
      'Timelines vary by scope. A bathroom refresh may take 2\u20133 weeks, while a full kitchen gut renovation can take 6\u20138 weeks or more. During your consultation, we provide a realistic timeline based on your specific project.',
  },
  {
    question: 'Do you help with design selections?',
    answer:
      'Yes! Our team can guide you through material selections, layout planning, and design choices. We also have a free Design Style Quiz on our website to help you discover your style preferences before your consultation.',
  },
  {
    question: 'Can I live in my home during a remodel?',
    answer:
      'In most cases, yes. We work to minimize disruption to your daily life and can phase projects to keep parts of your home functional. For larger whole-home projects, we will discuss the best plan during consultation.',
  },
];

const restorationFaqs: FAQ[] = [
  {
    question: 'What should I do immediately after water, fire, or storm damage?',
    answer:
      'Call us at (833) 336-9266 right away. We offer emergency response and can begin mitigation quickly to prevent further damage. Document what you can with photos and contact your insurance company.',
  },
  {
    question: 'Does Fowcon work with insurance companies?',
    answer:
      'Absolutely. We have extensive experience working directly with insurance companies and can help navigate the claims process. Our detailed documentation and transparent pricing make the approval process smoother for homeowners.',
  },
  {
    question: 'What is the difference between mitigation and restoration?',
    answer:
      'Mitigation is the immediate response — stopping the damage, extracting water, boarding up openings, and preventing mold growth. Restoration is the rebuild phase — repairing or replacing damaged structures, finishes, and systems to return your home to its pre-loss condition (or better).',
  },
  {
    question: 'Do you handle mold remediation?',
    answer:
      'Yes. Fowcon is licensed for mold remediation (MRSR2151) and IICRC-certified. We follow strict containment, HEPA filtration, and lab-verified protocols to safely and completely remove mold from your property.',
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left cursor-pointer group"
      >
        <span className="text-gray-900 font-semibold pr-4 group-hover:text-primary-blue transition-colors">
          {faq.question}
        </span>
        <FaChevronDown
          className={`text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-5 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQGroupProps {
  title: string;
  faqs: FAQ[];
  delay?: number;
}

function FAQGroup({ title, faqs, delay = 0 }: FAQGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="bg-white rounded-lg border border-gray-100 px-6">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 space-y-14">
        <FAQGroup title="General" faqs={generalFaqs} />
        <FAQGroup title="Remodeling" faqs={remodelingFaqs} delay={0.1} />
        <FAQGroup title="Restoration & Mitigation" faqs={restorationFaqs} delay={0.2} />
      </div>
    </section>
  );
}
