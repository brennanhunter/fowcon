'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: "Darren Hawkins",
    text: "My wife and I were going through the process of getting our entire floors and kitchen redone because of water damage. This was being done through the most stressful time of our lives, with an upcoming wedding and kids starting school. If it wasn't for Zach and his team we would've gone crazy with worry. They were so helpful and understanding of our situation. I will absolutely be recommending them to my friends and family.",
    avatar: "D"
  },
  {
    name: "Maria Bennett",
    text: "I highly recommend this business. Their professionalism and quality of their work is outstanding, exceeding my expectations. From the beginning to the end great communication and attention to detail. All my questions and concerns quickly attended. Smooth work even through the end of year holidays.",
    avatar: "M"
  },
  {
    name: "Michelle Delaney",
    text: "We are extremely satisfied with Fowcon. The project manager, Lucca, was very professional and listened to what we wanted. His crew arrived early each day to complete the job in a timely, organized, and professional manner. Lucca offered suggestions for items we had not thought about. He definitely knows his job well. His crew was sure to cover the floors so no damage would be done to our home with their equipment, tools, and items to be installed. They work until the job is completed at our 100% satisfaction! After seeing their craftsmanship, we have decided to remodel our second bathroom! The customer service staff checked with us often to make sure everything was going well.",
    avatar: "M"
  },
  {
    name: "Darian Beglaw",
    text: "Very professional company, they took the time to create a custom design for me and explain every detail. I really loved how they gave me multiple different options with different budgets. The work they did in my kitchen was very high quality and it was done in a reasonable amount of time.",
    avatar: "D"
  },
  {
    name: "elmer BUARD",
    text: "FOWCON took over my home restoration project from another contractor and finished to perfection. The Project Manager Zack was extremely professional, customer service oriented and knowledgeable. He executed flawless and provided enormous quality control. If in a like situation or know of someone I would recommend FOWCON without hesitation.",
    avatar: "E"
  }
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const getVisibleReviews = useCallback(() => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % reviews.length);
    }
    return indices;
  }, [current]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = getVisibleReviews();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-primary-blue mb-4">
            Real results for Tampa Bay<br />
            homeowners since 2017.
          </h2>
          <p className="text-3xl md:text-4xl text-primary-blue mb-6">
            Don&apos;t take our word for it — <span className="italic">hear from our clients.</span>
          </p>
          <a 
            href="/contact" 
            className="text-orange-500 text-lg hover:text-orange-600 inline-flex items-center gap-2"
          >
            Work With Us &gt;
          </a>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 items-start"
        >
          {/* Google Reviews Badge */}
          <div className="flex flex-col items-center md:w-1/4 shrink-0">
            <div className="mb-2">
              <svg viewBox="0 0 48 48" className="w-16 h-16">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </div>
            <p className="font-semibold text-primary-blue">Google Reviews</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-3xl font-semibold text-primary-blue">4.9</span>
              <div className="flex text-yellow-400 text-xl">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Rotating Review Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {visible.map((reviewIndex) => (
                  <motion.div
                    key={reviewIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold shrink-0">
                        {reviews[reviewIndex].avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary-blue">{reviews[reviewIndex].name}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 shrink-0" viewBox="0 0 48 48">
                        <path fill="currentColor" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      </svg>
                    </div>
                    <div className="flex text-yellow-400 text-sm mb-3">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-gray-900 leading-relaxed text-sm line-clamp-6">{reviews[reviewIndex].text}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-primary-blue text-primary-blue flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors"
                aria-label="Previous reviews"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current ? 'bg-primary-blue w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review set ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-primary-blue text-primary-blue flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors"
                aria-label="Next reviews"
              >
                ›
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
