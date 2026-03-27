'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xvzzokev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'chat-widget',
          preferredContact: 'text',
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 3000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Message Tooltip */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 5 }}
            className="fixed bottom-8 right-24 z-50 bg-primary-blue text-white px-4 py-3 rounded-lg shadow-xl max-w-[200px]"
          >
            <p className="text-sm font-semibold">Questions? We&apos;ll text you back!</p>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary-blue"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 40px rgba(37, 99, 235, 0.8), 0 0 80px rgba(37, 99, 235, 0.5)',
            '0 0 60px rgba(37, 99, 235, 1), 0 0 120px rgba(37, 99, 235, 0.7)',
            '0 0 40px rgba(37, 99, 235, 0.8), 0 0 80px rgba(37, 99, 235, 0.5)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gray-100 text-gray-800 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  F
                </div>
                <span className="font-semibold text-sm">Fowcon Construction</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 bg-gray-50 min-h-[400px] flex flex-col">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">✓</div>
                  <h4 className="text-xl font-bold text-primary-blue mb-1">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expect a text from us shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Company Message Bubble */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-10 h-10 shrink-0 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                      F
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        Enter your information, and our team will text you shortly during our office hours:
                      </p>
                      <p className="text-gray-600 text-sm font-semibold mt-2">
                        Monday–Friday 8 a.m - 5 p.m
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 mt-auto">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={2}
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                      />
                    </div>
                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
