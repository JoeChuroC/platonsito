'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { slideInVariants } from './variants';

export const AnimatedItem = ({ children, className, delay = 0 }: AnimationProps) => (
  <motion.div
    className={className}
    variants={slideInVariants}
    custom={delay} 
  >
    {children}
  </motion.div>
);