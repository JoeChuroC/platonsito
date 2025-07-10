// lib/animation-variants.ts
import type { Variants } from 'framer-motion';

// Definir el tipo CardVariant basado en las claves de CARD_VARIANTS
export type CardVariant = keyof typeof CARD_VARIANTS;

// Variantes de animación para cards
export const CARD_VARIANTS = {
  default: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { y: -6 },
    staggerDelay: 0.1,
    cardStyles: "p-6 flex flex-col h-full border bg-card hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md"
  },
  service: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { y: -6 },
    staggerDelay: 0.1,
    cardStyles: "p-6 flex flex-col h-full border bg-card hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md"
  },
  feature: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
    whileHover: { scale: 1.02, y: -4 },
    staggerDelay: 0.15,
    cardStyles: "p-8 flex flex-col h-full border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 shadow-lg hover:shadow-xl rounded-xl"
  },
  testimonial: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
    whileHover: { scale: 1.01 },
    staggerDelay: 0.2,
    cardStyles: "p-6 flex flex-col h-full border bg-card hover:bg-card/90 transition-all duration-400 shadow-md hover:shadow-lg rounded-lg"
  },
  product: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    whileHover: { y: -8, scale: 1.01 },
    staggerDelay: 0.12,
    cardStyles: "p-6 flex flex-col h-full border bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70 transition-all duration-300 shadow-sm hover:shadow-xl rounded-lg"
  },
  blog: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { y: -4 },
    staggerDelay: 0.08,
    cardStyles: "overflow-hidden flex flex-col h-full border bg-card hover:bg-card/90 transition-all duration-300 shadow-sm hover:shadow-md rounded-lg"
  },
  pricing: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    whileHover: { y: -10, scale: 1.02 },
    staggerDelay: 0.1,
    cardStyles: "p-8 flex flex-col h-full border-2 bg-card hover:bg-card/80 hover:border-primary/50 transition-all duration-400 shadow-lg hover:shadow-2xl rounded-xl"
  }
} as const;

// Variantes para diferentes secciones
export const SECTION_VARIANTS = {
  services: {
    container: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  features: {
    container: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  },
  testimonials: {
    container: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }
} as const;

// Variantes de texto animado
export const TEXT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Variantes de contenedor
export const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};