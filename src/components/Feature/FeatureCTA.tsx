import React from 'react';
import { FEATURE_CTA_DATA, NOISE_TEXTURE } from '../../data/globalData';

const FeatureCTA = () => {
   return (
      <div className="flex flex-col items-center justify-center w-full px-5 md:px-[250px] relative">
         <div className="relative w-full">
            <div className="flex flex-col md:flex-row items-center justify-center bg-[#0f0f0f] gap-4 p-4 md:p-2 rounded-[1.375rem] relative overflow-hidden after:absolute after:inset-0 after:border after:border-[#222222] after:rounded-[1.375rem] after:pointer-events-none text-center md:text-left">
               {/* Content */}
               <div className="flex flex-col grow basis-0 gap-1 pl-2 z-[1]">
                  <p className="text-white text-lg tracking-tight leading-[19.8px] font-inter">
                     {FEATURE_CTA_DATA.question}
                  </p>
               </div>

               {/* Noise Texture */}
               <div className="absolute -inset-x-[2px] -top-[319px] -bottom-[201px] opacity-[0.06] pointer-events-none">
                  <img src={NOISE_TEXTURE} alt="" className="w-full h-full object-cover" />
               </div>

               {/* Action */}
               <div className="relative shrink-0 w-full md:w-auto">
                  <a
                     href={FEATURE_CTA_DATA.buttonHref}
                     className="flex items-center justify-center bg-[#171717] px-5 py-3 rounded-[0.9775rem] border border-[#222222] relative transition-all hover:opacity-80 w-full"
                  >
                     <span className="text-white text-base tracking-tight leading-[19.2px] font-inter z-[10]">
                        {FEATURE_CTA_DATA.buttonText}
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeatureCTA;
