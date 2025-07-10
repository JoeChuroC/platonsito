import { useState } from 'react';

/**
 * Hook personalizado para manejar animaciones al hacer hover
 */
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return {
    isHovered,
    hoverHandlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }
  };
};