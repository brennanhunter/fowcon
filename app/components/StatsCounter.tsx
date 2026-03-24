'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { FaHardHat, FaHome, FaUsers, FaCalendarAlt } from 'react-icons/fa';

interface Stat {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

const stats: Stat[] = [
  { icon: FaHome, end: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
  { icon: FaHardHat, end: 100, suffix: '+', label: 'Years Combined Experience', duration: 1.8 },
  { icon: FaUsers, end: 90, suffix: '%', label: 'Work Done In-House', duration: 1.5 },
  { icon: FaCalendarAlt, end: 2017, suffix: '', label: 'Founded', duration: 2 },
];

function CountUp({ end, suffix, duration }: { end: number; suffix: string; duration: number }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => {
        setDisplay(Math.round(value).toLocaleString());
      },
    });

    return () => controls.stop();
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="text-3xl md:text-4xl text-white/80 mb-3" />
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp end={stat.end} suffix={stat.suffix} duration={stat.duration} />
              </span>
              <span className="text-white/80 text-sm md:text-base font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
