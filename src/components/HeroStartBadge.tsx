import React from 'react'
import { NOISE_TEXTURE, HERO_BADGE_TEXT, HERO_PROFILE_IMGS } from '../data/globalData'

const HeroStartBadge = () => {
   return (
      <div className="contents">
         <div className="relative">
            <div aria-label="Variant 2" className="items-center flex size-min justify-center overflow-clip relative gap-[6px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(23,_23,_23)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]" style={{ "backgroundImage": "linear-gradient(233.105deg, rgb(5, 5, 5) 45.548%, rgb(0, 36, 65) 64.2609%, rgb(4, 12, 121) 74.7455%, rgb(68, 13, 139) 84.2771%, rgb(26, 23, 37) 100%)" }}>
               <div aria-label="noise" className="absolute h-[34px] left-0 top-[calc(50%-17px)] right-0 gap-[0px] shrink-[0] opacity-[0.32] rounded-[19.6875rem]">
                  <div aria-label="texture" className="absolute left-0 top-0 right-0 bottom-0">
                     <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src={NOISE_TEXTURE} className="block size-full overflow-clip aspect-[auto_2000_/_2000]" />
                     </div>
                  </div>
               </div>
               <div aria-label="Profiles" className="relative w-[60px] h-6 shrink-[0]">
                  <div aria-label="Profile" className="aspect-square overflow-hidden absolute left-0 top-0 bottom-0 shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px,_rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,_rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,_rgba(0,0,0,0.06)_0px_10px_10px_-3.75px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,_34,_34)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                     <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="QA Manager" src={HERO_PROFILE_IMGS[0]} className="block size-full object-cover overflow-clip aspect-[auto_908_/_792] rounded-[62.4375rem]" />
                     </div>
                  </div>
                  <div aria-label="Profile" className="aspect-square overflow-hidden absolute left-3 top-0 bottom-0 shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px,_rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,_rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,_rgba(0,0,0,0.06)_0px_10px_10px_-3.75px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,_34,_34)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                     <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Compliance Officer" src={HERO_PROFILE_IMGS[1]} className="block size-full object-cover overflow-clip aspect-[auto_956_/_816] rounded-[62.4375rem]" />
                     </div>
                  </div>
                  <div aria-label="Profile" className="overflow-hidden absolute w-6 h-6 left-[calc(60%-12px)] top-[calc(50%-12px)] shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px,_rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,_rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,_rgba(0,0,0,0.06)_0px_10px_10px_-3.75px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,_34,_34)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                     <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Support Supervisor" src={HERO_PROFILE_IMGS[2]} className="block size-full object-cover overflow-clip aspect-[auto_1108_/_1470] rounded-[62.4375rem]" />
                     </div>
                  </div>
                  <div aria-label="Profile" className="aspect-square overflow-hidden absolute left-9 top-0 bottom-0 shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px,_rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,_rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,_rgba(0,0,0,0.06)_0px_10px_10px_-3.75px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,_34,_34)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                     <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Call Center Agent" src={HERO_PROFILE_IMGS[3]} className="block size-full object-cover overflow-clip aspect-[auto_1176_/_1466] rounded-[62.4375rem]" />
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-start relative whitespace-pre h-[14px] shrink-[0]">
                  <p className="text-white text-[14px] tracking-[-0.56px] leading-[15.4px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>{HERO_BADGE_TEXT}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroStartBadge
