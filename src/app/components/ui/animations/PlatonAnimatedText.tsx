// PlatonBrandAnimationStandalone.tsx
import React from 'react';
import { motion } from 'framer-motion';

const PlatonBrandAnimationStandalone: React.FC = () => {
  const word = "PLATON";
  const letters = Array.from(word);

  // Animation variants for the container (the whole word)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Small stagger for individual letter entry
      },
    },
  };

  // Animation variants for each individual letter
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 }, // Start slightly transparent, lower, and smaller
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        mass: 0.8,
      },
    },
    // The "pop" or "pulse" effect for visual emphasis
    pulse: {
      // Animate text color and a subtle shadow for the "glow"
      color: ["#FFFFFF", "#CCCCCC", "#FFFFFF"], // White to light gray and back
      textShadow: [
        "0 0 5px rgba(255,255,255,0)", // No initial shadow
        "0 0 15px rgba(255,255,255,0.8)", // Stronger shadow
        "0 0 5px rgba(255,255,255,0)" // Back to subtle
      ],
      transition: {
        duration: 2.5, // Duration of one pulse cycle
        repeat: Infinity, // Loop indefinitely
        repeatType: "mirror" as const, // Smooth back and forth
        ease: "easeInOut",
        delay: 1.5, // Start pulsing after the initial letters have appeared
      },
    },
  };

  return (
    // This div will typically be placed within your login/register page structure.
    // It provides the black background and centers the content.
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black p-4">
      {/* Container for the animated PLATON word */}
      <motion.div
        className="flex mb-10" // flex for horizontal layout, mb-10 for spacing below logo
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            // Tailwind classes for large, bold, white text with tight spacing
            className="text-8xl md:text-9xl font-extrabold text-white tracking-tight leading-none"
            variants={letterVariants}
            animate="pulse" // Apply the pulsing animation after initial appearance
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Placeholder for your login/register form content */}
      {/* This example uses basic HTML elements, replace with your actual form */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Acceso a PLATON</h2>
        
        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="mb-6 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        {/* Submit Button */}
        <button 
          className="w-full bg-black text-white py-3 px-4 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
        >
          Iniciar Sesión
        </button>
        
        {/* Register Link */}
        <p className="mt-4 text-sm text-gray-600">
          ¿No tienes cuenta? <a href="#" className="text-black hover:underline font-medium">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default PlatonBrandAnimationStandalone;