'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/maqadgkk', {
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

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', project: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="bg-primary-blue text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
                <h3 className="text-xl font-bold">Schedule Your Free Consultation</h3>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✓</div>
                    <h4 className="text-2xl font-bold text-primary-blue mb-2">Thank You!</h4>
                    <p className="text-gray-600">We&apos;ll be in touch within 24 hours to schedule your consultation.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-3 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-blue mb-1">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-blue mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-blue mb-1">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-semibold text-primary-blue mb-1">Tell Us About Your Project</label>
                      <textarea
                        id="project"
                        rows={3}
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full border border-gray-300 rounded px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                        placeholder="Kitchen remodel, bathroom update, etc."
                      />
                    </div>
                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-primary-blue text-white font-bold rounded hover:bg-blue-800 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Sending...' : 'Request Consultation'}
                    </button>
                    <p className="text-xs text-gray-500 text-center">No obligation. We&apos;ll contact you to find a convenient time.</p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
