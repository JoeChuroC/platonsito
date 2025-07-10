'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { imageVariants } from './variants';

export const AnimatedImageContainer = ({ children, className }: AnimationProps) => (
  <motion.div className={className} variants={imageVariants}>
    {children}
  </motion.div>
);