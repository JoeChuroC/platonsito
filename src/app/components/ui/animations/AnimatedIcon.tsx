// components/ui/animations/AnimatedIcon.tsx
'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { useHoverAnimation } from './useHoverAnimation';

export const AnimatedIcon = ({ children, className }: AnimationProps) => {
  const { isHovered, hoverHandlers } = useHoverAnimation();
  
  return (
    <motion.div
      className={className}
      {...hoverHandlers}
      animate={
        isHovered 
          ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } 
          : { scale: 1, rotate: 0 }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};