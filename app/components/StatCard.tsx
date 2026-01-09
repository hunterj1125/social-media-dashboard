'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  platform: string;
  followers: number;
  change: number;
  icon: string;
  color: string;
}

function CountUpAnimation({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && mounted) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, mounted, motionValue, value]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString();
      }
    });
  }, [rounded]);

  return <span ref={ref} suppressHydrationWarning>0</span>;
}

export default function StatCard({ platform, followers, change, icon, color }: StatCardProps) {
  const isPositive = change >= 0;
  
  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [15, 28, 42, 55, 68, 73, 85, 92];

  return (
    <motion.div
      className={`relative overflow-hidden bg-gradient-to-br ${color} p-6 rounded-3xl shadow-2xl border-2 border-white/20 group`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated particles rising */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: particlePositions[i] + '%',
              y: '110%',
            }}
            animate={{
              y: '-10%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 rounded-3xl"
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="text-5xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {icon}
          </motion.div>
          <motion.div
            className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${
              isPositive
                ? 'bg-white/30 text-white'
                : 'bg-black/20 text-white'
            }`}
            animate={{
              scale: isPositive ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isPositive ? Infinity : 0,
              repeatDelay: 1,
            }}
          >
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: isPositive ? [-2, 2, -2] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d={isPositive ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </motion.svg>
            <span>{Math.abs(change)}%</span>
          </motion.div>
        </div>

        <motion.h3
          className="text-white/90 text-lg font-bold mb-2"
          whileHover={{ x: 5 }}
        >
          {platform}
        </motion.h3>

        <motion.div
          className="text-5xl font-extrabold text-white mb-1 tabular-nums"
          whileHover={{ scale: 1.05 }}
        >
          <CountUpAnimation value={followers} />
        </motion.div>

        <motion.p
          className="text-white/80 text-sm font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          followers
        </motion.p>
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{
          translateX: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}

