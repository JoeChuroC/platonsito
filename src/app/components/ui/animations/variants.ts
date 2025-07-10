import { Variants } from 'framer-motion';

/**
 * Variantes base reutilizables para animaciones
 */
export const baseVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      staggerChildren: 0.2
    }
  }
};


export const slideInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeInOut', 
      delay 
    }
  })
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20, x: 30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};
