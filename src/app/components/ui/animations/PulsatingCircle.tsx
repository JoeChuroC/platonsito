'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { cn } from '@/lib/utils';

export const PulsatingCircle = ({ className }: AnimationProps) => (
  <motion.div
    className={cn("rounded-full", className)}
    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  />
);