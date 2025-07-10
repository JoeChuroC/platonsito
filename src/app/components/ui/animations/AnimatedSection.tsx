'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { fadeInVariants } from './variants';

export const AnimatedSection = ({ children, className }: AnimationProps) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible" 
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInVariants}
  >
    {children}
  </motion.div>
);
