import React from 'react'
import { HERO_TITLE_LINE1, HERO_TITLE_LINE2, HERO_SUBTITLE } from '../../data/globalData'

const HeroTitle = () => {
   return (
      <div aria-label="H1+Subtitle" className="items-center md:items-start flex flex-col h-min justify-center relative w-full gap-4 max-w-full md:max-w-[94%] shrink-0">
         <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full text-center md:text-left">
            <h1 className="hero-heading text-4xl md:text-[54px] md:leading-[54px]">{HERO_TITLE_LINE1}</h1>
            <h1 className="hero-heading text-4xl md:text-[54px] md:leading-[54px]">{HERO_TITLE_LINE2}</h1>
         </div>
         <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full max-w-[90%] md:max-w-[70%] text-center md:text-left">
            <p className="hero-subtitle">{HERO_SUBTITLE}</p>
         </div>
      </div>
   )
}

export default HeroTitle
