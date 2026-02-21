import React from 'react';
import { FEATURE_BADGE_TEXT, FEATURE_HEADING, LOGO_BLUR_IMG } from '../../data/globalData';

const FeatureHeader = () => {
   return (
      <header className="flex flex-col items-center justify-center relative w-full gap-4">
         {/* Badge */}
         <div className="relative">
            <div
               className="flex items-center justify-center bg-[#171717] gap-[5px] pt-1.5 pr-3 pb-1.5 pl-1.5 rounded-full relative after:absolute after:inset-0 after:border after:border-[#222222] after:rounded-full after:pointer-events-none"
            >
               <div
                  className="w-[18px] aspect-square rounded-full relative overflow-hidden z-[5] shadow-globe-testimonial bg-globe-gradient"
               >
                  <div className="absolute -left-[9px] -right-[7px] -bottom-[8px] aspect-[1.15385/1]">
                     <img src={LOGO_BLUR_IMG} alt="Globe blur" className="w-full h-full object-cover" />
                  </div>
               </div>
               <p className="text-white/90 text-base tracking-tight leading-[14.4px] font-inter">
                  {FEATURE_BADGE_TEXT}
               </p>
            </div>
         </div>

         {/* Title */}
         <div className="flex flex-col items-center justify-center w-full gap-4">
            <h2 className="text-center text-white text-3xl md:text-[48px] tracking-tight md:tracking-[-2.88px] leading-tight md:leading-[52.8px] max-w-[590px] font-inter px-4 md:px-0">
               {FEATURE_HEADING}
            </h2>
         </div>
      </header>
   );
};

export default FeatureHeader;
