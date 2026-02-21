import React from 'react';
import { LOGO_BLUR_IMG } from '../../../data/globalData';

export const CollaborationIllustration = () => (
   <div className="relative w-full h-full grow basis-0">
      <div className="absolute -inset-[32px] inset-y-[-26px] inset-x-[-32px] rotate-180 opacity-55">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbbef72c68688c2cee6f89ac2a541d8062e082f28.svg?generation=1771443656567992&alt=media" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute w-[279px] h-[274px] left-1/2 top-[50.0935%] -translate-x-1/2 -translate-y-1/2">
         <div className="absolute h-[93px] inset-x-[-9px] top-1/2 -translate-y-1/2 bg-[#17161f] rotate-44 rounded-full border border-[#4545451a] overflow-hidden" />
         <div className="absolute w-[223px] h-[222px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover"
            style={{ backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 223 222'></svg>")` }} />

         {/* Globe */}
         <div
            className="absolute w-[54px] aspect-square left-[42px] top-[39px] rounded-full z-[1] shadow-globe-testimonial bg-globe-gradient"
            style={{
               transform: 'translate3d(36.5391px, 36.7982px, 0px)'
            }}
         >
            <div className="absolute -left-[28px] -right-[23px] -bottom-[24px] aspect-[1.15385/1]">
               <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
            </div>
         </div>

         {/* Profile Avatars */}
         <div
            className="absolute w-[85px] aspect-square left-[23px] top-[22px] rounded-full border border-[#2f2e36] z-[1] overflow-hidden bg-profile-gradient-1"
         >
            <div className="absolute left-1/2 bottom-[-38px] -translate-x-1/2 flex flex-col items-center gap-1">
               <div className="w-[42px] h-[42px] bg-no-repeat bg-contain" style={{ backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.157 42.157'><path d='M 21.079 0 C 32.72 0 42.157 9.437 42.157 21.079 C 42.157 32.72 32.72 42.157 21.079 42.157 C 9.437 42.157 0 32.72 0 21.079 C 0 9.437 9.437 0 21.079 0 Z' fill='rgb(230, 230, 230)'></path></svg>")` }} />
               <div className="w-20 h-[65px] bg-[#e6e6e6] rounded-t-full" />
            </div>
         </div>

         <div
            className="absolute w-[85px] aspect-square right-[23px] bottom-[22px] rounded-full border border-[#2f2e36] z-[1] overflow-hidden bg-profile-gradient-2"
         >
            <div className="absolute left-1/2 bottom-[-38px] -translate-x-1/2 flex flex-col items-center gap-1">
               <div className="w-[42px] h-[42px] bg-no-repeat bg-contain" style={{ backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.157 42.157'><path d='M 21.079 0 C 32.72 0 42.157 9.437 42.157 21.079 C 42.157 32.72 32.72 42.157 21.079 42.157 C 9.437 42.157 0 32.72 0 21.079 C 0 9.437 9.437 0 21.079 0 Z' fill='rgb(230, 230, 230)'></path></svg>")` }} />
               <div className="w-20 h-[65px] bg-[#e6e6e6] rounded-t-full" />
            </div>
         </div>
      </div>
   </div>
);

export const CustomizationIllustration = () => (
   <div className="absolute w-full h-[268px] left-0 top-[40.5%] -translate-y-1/2 z-[1] flex flex-col items-center justify-center gap-2.5">
      <div className="absolute inset-0 top-[-25px] bottom-[-26px] opacity-55 z-[1]">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa31ec80f5c2c1c6b07cab4bf8aba24c71a948713.svg?generation=1771443656579004&alt=media" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 relative z-[1]">
         {/* Toggles */}
         {[
            { label: 'Smart Variations', active: true, opacity: 1, gradient: 'bg-profile-gradient-1' },
            { label: 'Style Recommendations', active: true, opacity: 1, gradient: 'bg-profile-gradient-1' },
            { label: 'Dynamic Personalization', active: false, opacity: 0.65, gradient: '' }
         ].map((toggle, i) => (
            <div key={i} className={`flex items-center bg-[#17161f] backdrop-blur-[2px] gap-2 p-1 pr-3 rounded-full border border-white/10 shrink-0 ${toggle.opacity < 1 ? 'opacity-[0.65]' : ''}`}>
               <div
                  className={`w-[65px] h-7 rounded-full flex items-center p-[3px] border border-[#424242] shadow-inner relative justify-end ${toggle.active ? toggle.gradient : ''}`}
               >
                  <div className={`w-7 aspect-square rounded-full shadow-globe-testimonial z-[5] ${toggle.active ? 'bg-globe-gradient' : 'bg-gradient-to-b from-[#d8ddff] via-[#cfdbff] to-[#cfd1ff]'}`}
                     style={{
                        transform: !toggle.active ? 'translateX(-13px)' : 'none'
                     }}>
                     {toggle.active && (
                        <div className="absolute -inset-x-3.5 -bottom-3 aspect-[1.15385/1]">
                           <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
                        </div>
                     )}
                  </div>
               </div>
               <p className={`text-base tracking-tight leading-tight ${toggle.active ? 'text-white' : 'text-white/34'}`}>
                  {toggle.label}
               </p>
            </div>
         ))}
      </div>
   </div>
);

export const SiriIllustration = () => (
   <div className="relative w-full h-full grow basis-0">
      <div className="absolute inset-x-[-32px] inset-y-[-26px] rotate-180 opacity-55">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbbef72c68688c2cee6f89ac2a541d8062e082f28.svg?generation=1771443656567992&alt=media" alt="" className="w-full h-full" />
      </div>

      <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-[1]">
         <div className="flex items-center self-stretch bg-siri-input p-2 pr-[14px] pl-[10px] rounded-xl border border-white/10 backdrop-blur-[2px]">
            <p className="text-white text-[17px] tracking-tight leading-[22px]">Ask ChatFrame...</p>
         </div>
         <div className="w-[206px] bg-[#17161f] p-[11px] rounded-[0.875rem] border border-white/10 backdrop-blur-[2px]">
            <p className="text-[#999999] tracking-tight leading-[15.6px] text-sm">
               I'm here to help with anything you need. Whether it's answering questions, organizing tasks, or just having a chat, feel free to ask. I'm ready to assist!
            </p>
         </div>
      </div>

      {/* Globe */}
      <div
         className="absolute w-[45px] aspect-square left-1/2 -translate-x-1/2 bottom-[26px] rounded-full z-[1] rotate-[101deg] scale-[1.1] shadow-globe-testimonial bg-globe-gradient"
      >
         <div className="absolute -inset-x-6 -bottom-5 aspect-[1.15385/1] rotate-[102deg] scale-[1.1]">
            <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
         </div>
      </div>
   </div>
);

