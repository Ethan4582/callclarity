import React from 'react'
import { HERO_SOCIAL_LABEL, HERO_SOCIAL_RATING, HERO_STAR_ICON } from '../data/globalData'

const HeroSocial = () => {
   return (
      <div aria-label="SocialProof" className="items-start flex flex-col size-min justify-start relative gap-[4px] shrink-[0] opacity-[0.95]">
         <div aria-label="They trust us" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
            <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{ "fontFamily": "Inter, sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_SOCIAL_LABEL}</p>
         </div>
         <div aria-label="Layout" className="items-center flex size-min justify-start relative gap-[8px] shrink-[0]">
            <div aria-label="Stars" className="items-center flex size-min justify-start relative gap-[8px] shrink-[0]">
               <div aria-label="Materials" className="items-center flex size-min justify-center overflow-hidden relative gap-[4px] shrink-[0]">
                  <div className="relative w-4 h-4 shrink-[0]">
                     <div className="contents">
                        <div className="inline-block size-full overflow-hidden text-white fill-white" style={{ "textDecoration": "rgb(255, 255, 255)" }}>
                           <img src={HERO_STAR_ICON} className="inline-block size-full" />
                        </div>
                     </div>
                  </div>
                  <div className="relative w-4 h-4 shrink-[0]">
                     <div className="contents">
                        <div className="inline-block size-full overflow-hidden text-white fill-white" style={{ "textDecoration": "rgb(255, 255, 255)" }}>
                           <img src={HERO_STAR_ICON} className="inline-block size-full" />
                        </div>
                     </div>
                  </div>
                  <div className="relative w-4 h-4 shrink-[0]">
                     <div className="contents">
                        <div className="inline-block size-full overflow-hidden text-white fill-white" style={{ "textDecoration": "rgb(255, 255, 255)" }}>
                           <img src={HERO_STAR_ICON} className="inline-block size-full" />
                        </div>
                     </div>
                  </div>
                  <div className="relative w-4 h-4 shrink-[0]">
                     <div className="contents">
                        <div className="inline-block size-full overflow-hidden text-white fill-white" style={{ "textDecoration": "rgb(255, 255, 255)" }}>
                           <img src={HERO_STAR_ICON} className="inline-block size-full" />
                        </div>
                     </div>
                  </div>
                  <div aria-label="Material V2" className="overflow-hidden relative w-[10px] h-4 shrink-[0]">
                     <div className="absolute left-0 top-0 right-[-6px] bottom-0">
                        <div className="contents">
                           <div className="inline-block size-full overflow-hidden text-white fill-white" style={{ "textDecoration": "rgb(255, 255, 255)" }}>
                              <img src={HERO_STAR_ICON} className="inline-block size-full" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div aria-label="4,9" className="flex flex-col justify-center relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-white text-[16px] leading-[24px]" style={{ "fontFamily": "\"DM Sans\", \"DM Sans Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_SOCIAL_RATING}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroSocial
