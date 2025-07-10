'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { cn } from '@/lib/utils';

export const SparkleIcon = ({ children, className }: AnimationProps) => (
  <motion.div 
    className={cn("relative", className)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div 
          key={i}
          className="absolute h-1 w-1 bg-purple-300 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            x: [0, (i % 2 === 0 ? 30 : -30) * Math.random()],
            y: [0, (i % 2 === 0 ? -30 : 30) * Math.random()],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2 + i,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            top: `${50 + 15 * Math.sin(i * Math.PI / 2.5)}%`,
            left: `${50 + 15 * Math.cos(i * Math.PI / 2.5)}%`,
          }}
        />
      ))}
    </motion.div>
    {children}
  </motion.div>
);