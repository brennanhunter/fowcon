'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaCheckCircle,
} from 'react-icons/fa';
import Image from 'next/image';

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '(833) 336-9266',
    href: 'tel:8333369266',
    note: 'Call to schedule a free consultation',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'claims@fowconinc.com',
    href: 'mailto:claims@fowconinc.com',
    note: 'We respond within 24 hours',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Service Area',
    value: 'Tampa Bay & Surrounding Areas',
    href: '/about/service-area',
    note: 'Tampa, St. Pete, Clearwater & more',
  },
  {
    icon: FaClock,
    label: 'Hours',
    value: 'Mon–Fri: 8am–6pm',
    note: 'Consultations by appointment',
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xvzzokev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Planning a kitchen remodel? Updating your bathroom? Refreshing your flooring?
                  Let&apos;s talk about your vision — consultations are always free.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="text-primary-blue" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-900 font-semibold hover:text-primary-blue transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold">{item.value}</p>
                        )}
                        {item.note && (
                          <p className="text-gray-500 text-sm">{item.note}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/fowconinc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary-blue hover:text-white transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.instagram.com/fowconinc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary-blue hover:text-white transition-colors"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <FaCheckCircle className="text-primary-blue text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="text-primary-blue font-semibold hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Phone Number *
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          What Can We Help With?
                        </label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        >
                          <option value="">Select a service...</option>
                          <optgroup label="Remodeling">
                            <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                            <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                            <option value="Flooring">Flooring</option>
                            <option value="Interior Remodeling">Interior Remodeling</option>
                          </optgroup>
                          <optgroup label="Restoration">
                            <option value="Water Damage">Water Damage</option>
                            <option value="Mold Remediation">Mold Remediation</option>
                            <option value="Storm & Wind Damage">Storm &amp; Wind Damage</option>
                            <option value="Fire & Smoke Damage">Fire &amp; Smoke Damage</option>
                          </optgroup>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                          placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                        />
                      </div>

                      {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 bg-primary-blue text-white font-bold rounded-md hover:bg-blue-800 transition-colors text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-xs text-gray-400 text-center">
                        No spam, no obligation. Your information stays with us.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Image */}
      <section className="relative">
        <div className="relative aspect-[16/7] md:aspect-[16/5]">
          <Image
            src="/images/fakekitchen.jpg"
            alt="Beautiful kitchen remodel by Fowcon in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-6xl mx-auto">
              <p className="text-white/70 text-sm uppercase tracking-widest mb-1">
                Tampa Bay&apos;s Trusted Remodeler
              </p>
              <p className="text-white text-xl md:text-2xl font-semibold">
                Let&apos;s build something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-primary-blue py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: '100+', label: 'Years Combined Experience' },
              { stat: '90%', label: 'Work Performed In-House' },
              { stat: 'Free', label: 'Consultations, Always' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-3xl font-bold text-white">{item.stat}</p>
                <p className="text-blue-200 text-sm mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration Note — subtle */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Dealing with water, fire, mold, or storm damage?{' '}
            <a href="tel:8333369266" className="text-primary-blue font-semibold hover:underline">
              Call (833) 336-9266
            </a>{' '}
            — we also offer 24/7 emergency restoration services.
          </p>
        </div>
      </section>
    </>
  );
}
