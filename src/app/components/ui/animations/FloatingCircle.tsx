'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { cn } from '@/lib/utils';

export const FloatingCircle = ({ className }: AnimationProps) => (
  <motion.div
    className={cn("rounded-full", className)}
    animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  />
);