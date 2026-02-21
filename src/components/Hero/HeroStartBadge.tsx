import React from 'react'
import { NOISE_TEXTURE, HERO_BADGE_TEXT, HERO_PROFILE_IMGS } from '../../data/globalData'

const PROFILES = [
   { alt: 'QA Manager', pos: 'left-0 top-0 bottom-0 aspect-square' },
   { alt: 'Compliance Officer', pos: 'left-3 top-0 bottom-0 aspect-square' },
   { alt: 'Support Supervisor', pos: 'w-6 h-6 left-[calc(60%-12px)] top-[calc(50%-12px)]' },
   { alt: 'Call Center Agent', pos: 'left-9 top-0 bottom-0 aspect-square' },
]

const HeroStartBadge = () => {
   return (
      <div className="relative">
         <div
            aria-label="Variant 2"
            className="items-center flex size-min justify-center overflow-clip relative gap-[6px] py-[6px] pr-3 pl-[6px] rounded-full gradient-badge-bg border-overlay-dark"
         >
        
            <div aria-label="noise" className="absolute h-[34px] left-0 top-[calc(50%-17px)] right-0 shrink-0 opacity-[0.32] rounded-[19.6875rem]">
               <div className="noise-overlay">
                  <img src={NOISE_TEXTURE} alt="" />
               </div>
            </div>

           
            <div aria-label="Profiles" className="relative w-[60px] h-6 shrink-0">
               {PROFILES.map((p, i) => (
                  <div key={i} className={`overflow-hidden absolute hero-profile-shadow hero-profile-border ${p.pos}`}>
                     <img alt={p.alt} src={HERO_PROFILE_IMGS[i]} className="block size-full object-cover rounded-full" />
                  </div>
               ))}
            </div>

           
            <p className="hero-badge-text relative whitespace-pre h-[14px] shrink-0">{HERO_BADGE_TEXT}</p>
         </div>
      </div>
   )
}

export default HeroStartBadge
