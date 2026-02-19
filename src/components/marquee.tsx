import React from 'react'
import { motion } from 'framer-motion'

// ─── Logo Components ──────────────────────────────────────────────────────────

const LogoAirLab = () => (
   <div className="flex items-center gap-1 opacity-70">
      <div className="relative w-[15px] h-4 shrink-0">
         <div className="absolute top-px left-[calc(46.6%-3px)] w-[6px] h-2 bg-white rounded-bl-sm rounded-tr-sm -rotate-[23deg] overflow-clip" />
         <div className="absolute bottom-0 left-2 w-1 h-[6px] bg-white rounded-bl-sm rounded-tr-sm -rotate-[23deg] overflow-clip" />
         <div className="absolute bottom-[5px] left-px w-1 h-[5px] bg-white rounded-bl-sm rounded-tr-sm -rotate-[4deg] overflow-clip" />
      </div>
      <span className="text-[20px] font-medium italic text-white font-poppins leading-4 tracking-[-1.2px]">AirLab</span>
   </div>
)

const LogoLumean = () => (
   <div className="flex items-center gap-1 opacity-70">
      <div className="relative w-[23px] h-4 shrink-0">
         <svg viewBox="0 0 10 13" className="absolute top-px left-[2px] w-[10px] h-[13px] fill-white opacity-70">
            <path d="M 8.901 0.786 C 8.831 0.423 8.406 0.258 8.11 0.48 L 2.75 4.5 L 1.014 3.285 C 0.687 3.056 0.237 3.283 0.227 3.682 L 0.023 12.052 C 0.013 12.454 0.458 12.702 0.795 12.483 L 9.718 6.683 C 9.888 6.572 9.975 6.369 9.936 6.17 Z" />
         </svg>
         <svg viewBox="0 0 10 13" className="absolute top-px left-3 w-[10px] h-[13px] fill-white opacity-70 rotate-180">
            <path d="M 8.901 0.786 C 8.831 0.423 8.406 0.258 8.11 0.48 L 2.75 4.5 L 1.014 3.285 C 0.687 3.056 0.237 3.283 0.227 3.682 L 0.023 12.052 C 0.013 12.454 0.458 12.702 0.795 12.483 L 9.718 6.683 C 9.888 6.572 9.975 6.369 9.936 6.17 Z" />
         </svg>
      </div>
      <span className="text-[20px] text-white font-joan leading-4 tracking-[-1.2px]">Lumean</span>
   </div>
)

const LogoCraftnet = () => (
   <div className="flex items-center gap-1 opacity-70">
      <div className="relative w-[15px] h-4 shrink-0">
         <svg viewBox="0 0 6 6" className="absolute top-0 left-[6px] w-[6px] h-[6px] fill-white opacity-70">
            <path d="M 3.004 0 C 4.663 0 6.008 1.345 6.008 3.004 C 6.008 4.663 4.663 6.008 3.004 6.008 C 1.345 6.008 0 4.663 0 3.004 C 0 1.345 1.345 0 3.004 0 Z" />
         </svg>
         <svg viewBox="0 0 11 10" className="absolute top-[6px] left-px w-[11px] h-[10px] fill-white opacity-70">
            <path d="M 1.102 1.083 C 0.698 0.687 0.979 0 1.545 0 L 6.109 0 C 6.28 0 6.444 0.069 6.563 0.193 L 10.911 4.684 C 10.968 4.743 11 4.822 11 4.904 L 11 9.368 C 11 9.717 10.717 10 10.368 10 L 7.009 10 C 6.66 10 6.377 9.717 6.377 9.368 L 6.377 6.401 C 6.377 6.316 6.343 6.235 6.282 6.176 Z" />
         </svg>
      </div>
      <span className="text-[20px] font-medium text-white font-inter leading-4 tracking-[-0.8px]">Craftnet</span>
   </div>
)

const LogoAventra = () => (
   <div className="flex items-center gap-1 opacity-70 " >
      <div className="relative w-[15px] h-4 shrink-0">
         <div className="absolute left-[6px] -bottom-px w-[6px] h-4 bg-white rounded-bl-sm rounded-tr-sm -rotate-[23deg] opacity-70 overflow-clip" />
         <svg viewBox="0 0 6 6" className="absolute top-[10px] left-0 w-[6px] h-[6px] fill-white opacity-70">
            <path d="M 2.991 0 C 4.643 0 5.982 1.339 5.982 2.991 C 5.982 4.643 4.643 5.982 2.991 5.982 C 1.339 5.982 0 4.643 0 2.991 0 Z" />
         </svg>
      </div>
      <span className="text-[20px] font-medium text-white font-intel leading-4 tracking-[-1.2px]">Aventra</span>
   </div>
)

const baseLogos = [LogoAirLab, LogoLumean, LogoCraftnet, LogoAventra]
const logoList = [...baseLogos, ...baseLogos]

// ─── Marquee Component ────────────────────────────────────────────────────────

const Marquee = () => {
   return (
      <div className="w-full flex flex-col items-center justify-center gap-6 pb-6 overflow-hidden">
         <p className="text-[14px] tracking-[-0.56px] leading-[15.4px] text-[rgb(146,146,146)] font-inter">
            Trusted by companies worldwide
         </p>

         <div className="relative w-full overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-[120px] z-[2] pointer-events-none bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-[120px] z-[2] pointer-events-none bg-gradient-to-l from-[#111] via-[#111]/80 to-transparent" />

            {/* Scrolling Track */}
            <div className="flex">
               <div className="flex gap-10 md:gap-20 animate-marquee-infinite whitespace-nowrap">
                  {[...logoList, ...logoList].map((Logo, i) => (
                     <div key={i} className="shrink-0">
                        <Logo />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Marquee