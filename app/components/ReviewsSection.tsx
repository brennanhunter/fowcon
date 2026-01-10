'use client';

import { motion } from 'framer-motion';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "elmer BUARD",
      time: "8 months ago",
      rating: 5,
      text: "FOWCON took over my home restoration project from another contractor and finished to perfection. The Project Manager Zack was...",
      avatar: "E"
    },
    {
      name: "Jacqueline Williams",
      time: "8 months ago",
      rating: 5,
      text: "We had a major water leak at the end of July that caused extensive damage throughout our home, including the kitchen. Everything had to be torn out...",
      avatar: "J"
    },
    {
      name: "Dominick DeVivo",
      time: "8 months ago",
      rating: 5,
      text: "Recently our home flooded, and we were referred to Fowcon by our insurance provider for remediation. From day one, our mitigation...",
      avatar: "D"
    }
  ];

  return (
    <section className="py-16 bg-white">
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
            Tailored construction and<br />
            emergency services solutions—
          </h2>
          <p className="text-3xl md:text-4xl text-primary-blue mb-6">
            Done <span className="italic">Free of Worry</span> from start to finish.
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
          <div className="flex flex-col items-center md:w-1/4">
            <div className="mb-2">
              <svg viewBox="0 0 48 48" className="w-16 h-16">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </div>
            <p className="font-semibold text-gray-800">Google Reviews</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-3xl font-semibold">4.9</span>
              <div className="flex text-yellow-400 text-xl">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 48 48">
                    <path fill="currentColor" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
                <div className="flex text-yellow-400 text-sm mb-2">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                <button className="text-primary-blue text-xs mt-2 hover:underline">Read more</button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
