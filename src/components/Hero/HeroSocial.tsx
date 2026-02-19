import React from 'react'
import { HERO_SOCIAL_LABEL, HERO_SOCIAL_RATING, HERO_STAR_ICON } from '../../data/globalData'

const TOTAL_STARS = 5

const HeroSocial = () => {
   return (
      <div aria-label="SocialProof" className="items-center md:items-start flex flex-col size-min justify-start relative gap-1 shrink-0 opacity-95">
         {/* Label */}
         <p className="hero-social-label whitespace-pre shrink-0">{HERO_SOCIAL_LABEL}</p>

         {/* Stars + Rating */}
         <div className="items-center flex size-min justify-start relative gap-2 shrink-0">
            <div className="items-center flex size-min justify-center overflow-hidden relative gap-1 shrink-0">
               {Array.from({ length: TOTAL_STARS }).map((_, i) => (
                  <div key={i} className="hero-social-star">
                     <img src={HERO_STAR_ICON} alt={`Star ${i + 1}`} />
                  </div>
               ))}
            </div>
            <p className="hero-social-rating whitespace-pre shrink-0">{HERO_SOCIAL_RATING}</p>
         </div>
      </div>
   )
}

export default HeroSocial
