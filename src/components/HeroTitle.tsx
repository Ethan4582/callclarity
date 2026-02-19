import React from 'react'
import { HERO_TITLE_LINE1, HERO_TITLE_LINE2, HERO_SUBTITLE } from '../data/globalData'

const HeroTitle = () => {
   return (
      <div aria-label="H1+Subtitle" className="items-start flex flex-col h-min justify-center relative w-full gap-[16px] max-w-[94%] shrink-[0]">
         <div className="contents">
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full">
               <h1 className="text-white text-[54px] tracking-[-3.24px] leading-[54px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_TITLE_LINE1}</h1>
               <h1 className="text-white text-[54px] tracking-[-3.24px] leading-[54px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_TITLE_LINE2}</h1>
            </div>
         </div>
         <div className="contents">
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full max-w-[70%]">
               <p className="text-[rgb(146,_146,_146)] text-[16px] tracking-[-0.8px] leading-[19.2px]" style={{ "fontFamily": "Inter, sans-serif", "textDecoration": "rgb(146, 146, 146)" }}>{HERO_SUBTITLE}</p>
            </div>
         </div>
      </div>
   )
}

export default HeroTitle
