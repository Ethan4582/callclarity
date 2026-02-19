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
} from '../data/globalData'

const HeroIllustration = () => {
   return (
      <div aria-label="Illustration" className="aspect-square relative w-[472px] shrink-[0] rounded-[3.375rem]">
         <div className="contents">
            <div className="absolute left-[-24px] right-[-78px] bottom-[-29px] z-[1]">
               <div aria-label="Variant 2" className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full bg-[rgb(23,_23,_23)] rounded-bl-[2.148125rem] rounded-br-[2.148125rem] rounded-tl-[1.825625rem] rounded-tr-[2.148125rem] shadow-[rgba(0,0,0,0.05)_0px_1.88116px_1.88116px_-0.125px,_rgba(0,0,0,0.05)_0px_4.45867px_4.45867px_-0.25px,_rgba(0,0,0,0.05)_0px_8.13308px_8.13308px_-0.375px,_rgba(0,0,0,0.06)_0px_13.5212px_13.5212px_-0.5px,_rgba(0,0,0,0.07)_0px_21.8357px_21.8357px_-0.625px,_rgba(0,0,0,0.09)_0px_35.7429px_35.7429px_-0.75px,_rgba(0,0,0,0.12)_0px_61.5468px_61.5468px_-0.875px,_rgba(0,0,0,0.18)_0px_112px_112px_-1px] gap-[6.87px] p-[6.87px]">
                  <div aria-label="Top" className="items-center flex h-min justify-between overflow-hidden relative w-full shrink-[0]">
                     <div aria-label="Name+Globe" className="items-center flex size-min justify-center overflow-hidden relative bg-black/15 gap-[6.87px] pt-[6.87px] pr-[13.75px] pb-[6.87px] pl-[6.87px] shrink-[0] rounded-[1.718125rem]">
                        <div aria-label="Globe" className="aspect-square overflow-hidden relative w-[27px] shadow-[rgb(0,234,255)_1.96px_-1.22px_16px_0px_inset,_rgb(38,0,255)_-1.72px_1.48px_16px_0px_inset,_rgba(255,255,255,0.88)_-9.09px_0.98px_161px_0px_inset,_rgb(255,255,255)_8.59px_-0.74px_11px_0px_inset,_rgba(11,0,77,0.19)_0px_0.906986px_0.906986px_-0.46875px,_rgba(11,0,77,0.18)_0px_2.14972px_2.14972px_-0.9375px,_rgba(11,0,77,0.18)_0px_3.92131px_3.92131px_-1.40625px,_rgba(11,0,77,0.17)_0px_6.51917px_6.51917px_-1.875px,_rgba(11,0,77,0.16)_0px_10.5279px_10.5279px_-2.34375px,_rgba(11,0,77,0.15)_0px_17.2332px_17.2332px_-2.8125px,_rgba(11,0,77,0.12)_0px_29.6743px_29.6743px_-3.28125px,_rgba(11,0,77,0.06)_0px_54px_54px_-3.75px,_rgba(0,0,0,0.25)_0px_3.94px_32px_0px,_rgba(0,0,0,0.25)_0px_7.85px_64px_0px,_rgb(30,0,179)_0px_7.11px_182px_0px] rotate-[122.536deg] z-[5] shrink-[0] rounded-[0.859375rem]" style={{ "backgroundImage": "linear-gradient(rgb(107, 134, 255) 0%, rgb(0, 123, 255) 48.4832%, rgb(0, 47, 255) 100%)" }}>
                           <div aria-label="Blur" className="absolute left-[-14px] right-[-14px] bottom-[-11px] aspect-[1.15385_/_1] rotate-[122.536deg]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                 <img src={LOGO_BLUR_IMG} className="block size-full object-cover overflow-clip aspect-[auto_360_/_312]" />
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                           <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{ "fontFamily": "Inter, sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_ILLUS_AI_LABEL}</p>
                        </div>
                     </div>
                  </div>
                  <div aria-label="Chat" className="items-center flex flex-col h-min justify-center overflow-hidden relative w-full bg-[rgb(15,_15,_15)] shadow-[rgba(8,8,8,0.25)_0px_29.21px_52px_0px] gap-[48.11px] p-[10.31px] shrink-[0] rounded-[1.718125rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(23,_23,_23)] after:content-[&quot;&quot;] after:rounded-[1.718125rem]">
                     <div aria-label="Content" className="items-center flex h-min justify-start overflow-hidden relative w-full bg-black/15 gap-[13.75px] p-[6.87px] z-[3] shrink-[0] rounded-[1.07375rem]">
                        <div aria-label="Chips" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.87px] shrink-[0]">
                           {HERO_ILLUS_CHIPS.map((chip) => (
                              <div key={chip} aria-label={chip} className="items-center flex size-min justify-center overflow-hidden relative bg-[rgb(23,_23,_23)] gap-[17.18px] pt-[8.59px] pr-[13.75px] pb-[8.59px] pl-[13.75px] shrink-[0] rounded-[0.644375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(20,_20,_20)] after:content-[&quot;&quot;] after:rounded-[0.644375rem]">
                                 <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                    <p className="font-medium text-white text-[16px] tracking-[-0.48px] leading-[16px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{chip}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div aria-label="Menu+Type" className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[34.37px] pt-0 pr-0 pb-0 pl-[13.75px] z-[3] shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                           <p className="text-[rgb(146,_146,_146)] text-[20px] tracking-[-1px] leading-[20px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(146, 146, 146)" }}>{HERO_ILLUS_PLACEHOLDER}</p>
                        </div>
                        <div aria-label="Menu" className="items-center flex h-min justify-between overflow-hidden relative w-full shrink-[0]">
                           <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.67px] shrink-[0]">
                              <div aria-label="Plus" className="items-center flex size-min justify-center overflow-hidden relative bg-black/32 gap-[13.23px] p-[6.61px] shrink-[0] rounded-[0.49625rem]">
                                 <div className="relative w-[19px] h-[19px] shrink-[0]">
                                    <div className="size-full">
                                       <div className="size-full overflow-hidden">
                                          <img src={HERO_ICON_PLUS} className="block size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div aria-label="Add" className="items-center flex justify-center overflow-hidden relative w-8 h-8 bg-black/32 gap-[13.23px] p-[6.61px] shrink-[0] rounded-[0.49625rem]">
                                 <div className="relative w-4 h-[19px] shrink-[0]">
                                    <div className="size-full">
                                       <div className="size-full overflow-hidden">
                                          <img src={HERO_ICON_ATTACH} className="block size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div aria-label="Web" className="items-center flex size-min justify-center overflow-hidden relative bg-black/32 gap-[13.57px_0.76px] p-[6.61px] shrink-[0] rounded-[0.49625rem]">
                                 <div className="relative w-[19px] h-[19px] shrink-[0]">
                                    <div className="size-full">
                                       <div className="size-full overflow-hidden">
                                          <img src={HERO_ICON_WEB} className="block size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div aria-label="Send+Speak Icon" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.87px] shrink-[0]">
                              <div aria-label="Speak Icon" className="items-center flex flex-col size-min justify-center overflow-hidden relative bg-[rgba(10,_10,_10,_0.55)] gap-[11.92px] p-[10.72px] shrink-[0] rounded-[74.390625rem]">
                                 <div className="relative w-6 h-6 shrink-[0] opacity-[0.38]">
                                    <div className="size-full">
                                       <div className="size-full overflow-hidden">
                                          <img src={HERO_ICON_MIC} className="block size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div aria-label="Send Icon" className="items-center flex flex-col justify-center overflow-hidden relative w-11 h-[45px] bg-black/55 gap-[11.92px] p-[10.72px] shrink-[0] rounded-[74.390625rem]">
                                 <div aria-label="send" className="aspect-square absolute w-[27px] left-[52%] top-[49%] translate-x-[-50%] translate-y-[-50%] -rotate-56 z-[1] shrink-[0]">
                                    <div className="items-center flex size-full justify-center max-h-full max-w-full">
                                       <div className="size-full overflow-hidden">
                                          <img src={HERO_ICON_SEND} className="block size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div aria-label="BG noise" className="absolute left-0 top-0 right-0 bottom-0 gap-[0px] z-[1] shrink-[0] opacity-[0.06]">
                        <div aria-label="texture" className="absolute left-0 top-0 right-0 bottom-0">
                           <div className="absolute left-0 top-0 right-0 bottom-0">
                              <img src={NOISE_TEXTURE} className="block size-full overflow-clip aspect-[auto_2000_/_2000]" />
                           </div>
                        </div>
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
