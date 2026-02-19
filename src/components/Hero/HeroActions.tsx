import React from 'react'
import {
   HERO_CTA_PRIMARY_LABEL,
   HERO_CTA_PRIMARY_HREF,
   HERO_CTA_SECONDARY_LABEL,
   HERO_CTA_SECONDARY_HREF,
   ARROW_RIGHT_ICON,
} from '../../data/globalData'

const HeroActions = () => {
   return (
      <button aria-label="CTA's" className="items-center flex flex-col md:flex-row h-min justify-start relative text-center w-full md:w-auto bg-black/0 gap-4 md:gap-[10px] shrink-0">
         {/* Primary CTA */}
         <a
            href={HERO_CTA_PRIMARY_HREF}
            aria-label="Desktop/primary"
            className="items-center flex w-full md:w-max justify-center overflow-hidden relative text-center hero-primary-btn-bg hero-primary-btn-shadow text-[var(--primary-blue)] gap-2 py-3 pr-3 pl-5 rounded-[0.9775rem]"
         >
            <p className="hero-btn-text relative text-center whitespace-pre z-10 shrink-0">{HERO_CTA_PRIMARY_LABEL}</p>
            <div aria-label="Arrow" className="aspect-square overflow-clip relative text-center w-5 bg-[rgba(38,38,38,0.44)] shrink-0 rounded-md">
               <img src={ARROW_RIGHT_ICON} alt="" className="absolute w-[18px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block" />
            </div>
         </a>

         {/* Secondary CTA */}
         <a
            href={HERO_CTA_SECONDARY_HREF}
            aria-label="Desktop/secondery"
            className="items-center flex w-full md:w-max justify-center overflow-hidden relative text-center bg-[rgb(23,23,23)] hero-secondary-btn-bg text-[var(--primary-blue)] gap-2 py-3 px-5 rounded-[0.9775rem] border-overlay-secondary"
         >
            <p className="hero-btn-text relative text-center whitespace-pre z-10 shrink-0">{HERO_CTA_SECONDARY_LABEL}</p>
         </a>
      </button>
   )
}

export default HeroActions
