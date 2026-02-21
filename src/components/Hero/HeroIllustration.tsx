import React from 'react'
import Hero_component from './hero_componet'
import {
   LOGO_BLUR_IMG,
   NOISE_TEXTURE,
   HERO_ILLUS_AI_LABEL,
   HERO_ILLUS_CHIPS,
   HERO_ILLUS_PLACEHOLDER,
   HERO_ICON_PLUS,
   HERO_ICON_ATTACH,
   HERO_ICON_WEB,
   HERO_ICON_MIC,
   HERO_ICON_SEND,
} from '../../data/globalData'
import Globe from '../Globe'

const TOOLBAR_ICONS = [
   { label: 'Plus', src: HERO_ICON_PLUS, w: 'w-[19px] h-[19px]' },
   { label: 'Add', src: HERO_ICON_ATTACH, w: 'w-4 h-[19px]', outer: 'w-8 h-8' },
   { label: 'Web', src: HERO_ICON_WEB, w: 'w-[19px] h-[19px]' },
]

const HeroIllustration = () => {
   return (
      <div aria-label="Illustration" className="aspect-square relative w-[472px] shrink-0 rounded-[3.375rem]">
         {/* Card Container */}
         <div className="absolute left-[-24px] right-[-78px] bottom-[-29px] z-[1]">
            <div
               aria-label="Variant 2"
               className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full bg-[rgb(23,23,23)] rounded-bl-[2.148125rem] rounded-br-[2.148125rem] rounded-tl-[1.825625rem] rounded-tr-[2.148125rem] hero-card-shadow gap-[6.87px] p-[6.87px]"
            >
               {/* Top — AI Label */}
               <div aria-label="Top" className="items-center flex h-min justify-between overflow-hidden relative w-full shrink-0">
                  <div aria-label="Name+Globe" className="items-center flex size-min justify-center overflow-hidden relative bg-black/15 gap-[2px] pr-[13.75px] pl-[6.87px] rounded-[1.718125rem]">
                     <Globe className='scale-60' duration={3} degrees={40} />
                     <p className="hero-btn-text relative whitespace-pre shrink-0">{HERO_ILLUS_AI_LABEL}</p>
                  </div>
               </div>

               {/* Chat Area */}
               <div
                  aria-label="Chat"
                  className="items-center flex flex-col h-min justify-center overflow-hidden relative w-full bg-[rgb(15,15,15)] hero-chat-shadow gap-[48.11px] p-[10.31px] shrink-0 rounded-[1.718125rem] border-overlay-chat"
               >
                  {/* Chips */}
                  <div aria-label="Content" className="items-center flex h-min justify-start overflow-hidden relative w-full bg-black/15 gap-[13.75px] p-[6.87px] z-[3] shrink-0 rounded-[1.07375rem]">
                     <div aria-label="Chips" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.87px] shrink-0">
                        {HERO_ILLUS_CHIPS.map((chip) => (
                           <div key={chip} aria-label={chip} className="hero-illus-chip">
                              <p>{chip}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Input + Toolbar */}
                  <div aria-label="Menu+Type" className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[34.37px] pl-[13.75px] z-[3] shrink-0">
                     <p className="hero-subtitle text-[20px] tracking-[-1px] leading-5 relative whitespace-pre-wrap w-full shrink-0">{HERO_ILLUS_PLACEHOLDER}</p>

                     <div aria-label="Menu" className="items-center flex h-min justify-between overflow-hidden relative w-full shrink-0">
                        {/* Left Icons */}
                        <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.67px] shrink-0">
                           {TOOLBAR_ICONS.map(({ label, src, w, outer }) => (
                              <div key={label} aria-label={label} className={`hero-illus-icon-btn ${outer ?? ''}`}>
                                 <div className={`relative shrink-0 ${w}`}>
                                    <img src={src} className="hero-illus-icon-img" alt="" />
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Right — Mic + Send */}
                        <div aria-label="Send+Speak Icon" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.87px] shrink-0">
                           <div aria-label="Speak Icon" className="items-center flex flex-col size-min justify-center overflow-hidden relative bg-[rgba(10,10,10,0.55)] gap-[11.92px] p-[10.72px] shrink-0 rounded-full">
                              <div className="relative w-6 h-6 shrink-0 opacity-[0.38]">
                                 <img src={HERO_ICON_MIC} className="hero-illus-icon-img" alt="" />
                              </div>
                           </div>
                           <div aria-label="Send Icon" className="items-center flex flex-col justify-center overflow-hidden relative w-11 h-[45px] bg-black/55 gap-[11.92px] p-[10.72px] shrink-0 rounded-full">
                              <img
                                 aria-label="send"
                                 src={HERO_ICON_SEND}
                                 className="aspect-square absolute w-[27px] left-[52%] top-[49%] -translate-x-1/2 -translate-y-1/2 -rotate-56 z-[1] block"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Noise Overlay */}
                  <div aria-label="BG noise" className="absolute inset-0 z-[1] shrink-0 opacity-[0.06]">
                     <div className="noise-overlay">
                        <img src={NOISE_TEXTURE} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Hero_component />
      </div>
   )
}

export default HeroIllustration
