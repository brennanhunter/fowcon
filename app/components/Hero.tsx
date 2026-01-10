'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    image: '/videos/drone-hero-1.mp4',
    isVideo: true,
    title: 'Your Trusted Partner',
    subtitle: 'In Home Remodeling',
    subtitle2: 'and Restoration'
  },
  {
    image: '/hero/hero-image-2.jpg',
    isVideo: false,
    title: 'Create and Build',
    subtitle: 'Your Dream Kitchen',
    subtitle2: ''
  },
  {
    image: '/hero/hero-image-3.jpg',
    isVideo: false,
    title: 'Relax in Your Luxurious',
    subtitle: 'Custom Bathroom',
    subtitle2: ''
  },
  {
    image: '/hero/hero-image-4.jpg',
    isVideo: false,
    title: 'Water, Mold, Wind, Fire.',
    subtitle: "We're Your Recovery Solution",
    subtitle2: ''
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setHasLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {slide.isVideo ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <div
              className={`absolute inset-0 ${index === 2 || index === 3 ? 'bg-primary-blue' : ''} ${index === 1 ? 'bg-center' : index === 2 ? 'bg-center' : index === 3 ? 'bg-bottom' : 'bg-top'}`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: index === 2 || index === 3 ? 'center' : undefined,
                backgroundSize: index === 2 || index === 3 ? 'contain' : 'cover',
                backgroundRepeat: index === 2 || index === 3 ? 'no-repeat' : undefined
              }}
            />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-end pb-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <motion.h1
                key={`text-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 40 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-white ${index === 1 || index === 2 || index === 3 ? 'text-right' : 'text-left'}`}
                style={{
                  textShadow: '0 0 3px #193F75, 0 0 3px #193F75, 0 0 3px #193F75, 0 0 3px #193F75, 0 0 3px #193F75, 0 0 3px #193F75'
                }}
              >
                {slide.title}<br />
                {slide.subtitle}
                {slide.subtitle2 && <><br />{slide.subtitle2}</>}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
