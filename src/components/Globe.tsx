'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_BLUR_IMG } from '../data/globalData';

interface GlobeProps {
   /**
    * Defines the preset styles for the globe.
    * 'card' is larger with specific offsets.
    * 'badge' is smaller for UI badges.
    */
   variant?: 'card' | 'badge';
   /** Optional size override (e.g., 'w-10 h-10') */
   size?: string;
   /** Additional classes for the container */
   className?: string;
   /** Animation duration in seconds (default: 10) */
   duration?: number;
   /** Rotation degrees (default: 90) */
   degrees?: number;
}

/**
 * Animated Globe component with a gradient background and blurred logo overlay.
 */
const Globe: React.FC<GlobeProps> = ({
   variant = 'card',
   size,
   className = '',
   duration = 10,
   degrees = 90
}) => {
   const isBadge = variant === 'badge';

   // Default sizes and shadow classes based on variant
   const defaultSize = isBadge ? 'w-[18px] h-[18px]' : 'w-12 h-12';
   const shadowClass = isBadge ? 'shadow-globe-badge' : 'shadow-globe-card';
   const roundedClass = isBadge ? 'rounded-[12.435rem]' : 'rounded-[34.5rem]';

   // Inner image offsets vary by size/variant
   const innerClass = isBadge
      ? "left-[-9px] right-[-7px] bottom-[-8px]"
      : "left-[-20px] right-[-14px] bottom-[-13px]";

   return (
      <div className={`relative ${size || defaultSize} ${className} shrink-0`}>
         <motion.div
            animate={{
               rotate: [0, degrees, -degrees, 0],
            }}
            transition={{
               duration: duration,
               repeat: Infinity,
               ease: "easeInOut" as const,
            }}
            className={`size-full overflow-hidden relative ${shadowClass} ${roundedClass}
          bg-[linear-gradient(rgb(107,134,255)_0%,rgb(0,123,255)_48.4832%,rgb(0,47,255)_100%)]`}
         >
            <div className={`absolute ${innerClass} aspect-[1.15385/1]`}>
               <div className="absolute inset-0">
                  <img
                     src={LOGO_BLUR_IMG}
                     className="block size-full object-cover overflow-clip"
                     alt="Rotating Globe"
                  />
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default Globe;
