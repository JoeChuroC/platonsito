'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';

export const ScrollIndicator = ({ children, className }: AnimationProps) => (
  <motion.div
    className={className}
    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);