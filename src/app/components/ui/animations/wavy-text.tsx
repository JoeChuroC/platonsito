'use client';

import { motion } from 'framer-motion';

interface WavyTextProps {
  text: string;
  className?: string;
}

const WavyText = ({ text, className }: WavyTextProps) => {
  return (
    <span
      className={`inline-flex justify-center items-center text-primary ${className}`}
      style={{ color: 'var(--text-primary)' }}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-primary"
          style={{ color: 'var(--text-primary)' }}
          animate={{
            y: [-5, 5, -3, 3, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default WavyText;