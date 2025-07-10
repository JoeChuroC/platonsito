'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';

export const FloatingElement = ({ children, className }: AnimationProps) => (
  <motion.div
    className={className}
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);