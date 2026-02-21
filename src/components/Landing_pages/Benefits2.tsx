'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Globe from '../Globe';
import { NOISE_TEXTURE, ARROW_RIGHT_ICON, BENEFITS_DATA } from '../../data/globalData';



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};


interface Benefit {
  title: string;
  description: string;
}



const NoiseOverlay = ({ opacity = 'opacity-[0.1]', className = '' }: { opacity?: string; className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none z-[1] ${opacity} ${className}`}>
    <img src={NOISE_TEXTURE} className="block size-full overflow-clip" alt="" />
  </div>
);



const SectionHeader = () => (
  <header
    aria-label="Header"
    className="items-center flex flex-col h-min justify-center relative w-full gap-[16px]"
  >
  
    <motion.div
      variants={fadeInUp}
      aria-label="Badge"
      className="items-center flex size-min justify-center relative bg-[#171717] gap-[5px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-[62.4375rem]
        after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-[62.4375rem]"
    >
     
      <Globe variant="badge" />

    
      <div className="items-center flex size-min justify-center relative gap-[3px] shrink-0">
        <p className="text-white/90 text-[16px] tracking-[-0.8px] leading-[14.4px] font-inter whitespace-pre h-[14px]">
          Simple Benefits
        </p>
      </div>
    </motion.div>

    
    <div className="items-center flex flex-col h-min justify-center relative w-full gap-[16px] shrink-0">
      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full max-w-full md:max-w-[80%] shrink-0">
        <motion.h2
          variants={fadeInUp}
          className="text-center text-white text-[32px] md:text-[48px] tracking-[-1.92px] md:tracking-[-2.88px] leading-[38px] md:leading-[52.8px] font-inter"
        >
          AI conversation analysis platform that reviews customer support calls and chats
        </motion.h2>
      </div>
    </div>
  </header>
);


const BenefitCard = ({ benefit }: { benefit: Benefit }) => (
  <motion.div variants={fadeInUp} className="self-start justify-self-start relative w-full">
    <div
      aria-label="Card"
      className="items-start flex flex-col h-min justify-start overflow-clip relative w-full backdrop-blur-[10px]
        bg-[rgba(38,38,38,0.44)] gap-[60px] p-7 rounded-3xl
        after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-black/25 after:content-[''] after:rounded-3xl"
    >
      <NoiseOverlay />

  
      <div
        aria-label="Icon"
        className="items-center flex size-min justify-center overflow-clip relative gap-[10px] p-[10px] shrink-0 rounded-2xl
          after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(54,54,54)] after:content-[''] after:rounded-2xl
          bg-[linear-gradient(211.476deg,rgb(0,0,0)_2.3%,rgb(0,36,66)_41.6%,rgb(4,12,122)_57.4%,rgb(68,13,140)_76.5%,rgba(23,23,23,0.95)_100%)]"
      >
        <div className="relative rotate-[76.0644deg] shrink-0">
          <Globe />
        </div>
      </div>

      
      <div className="items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[8px] shrink-0">
        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-0">
          <h3 className="text-left text-white text-[24px] tracking-[-0.48px] leading-[31.2px] font-inter">
            {benefit.title}
          </h3>
        </div>
        <div className="flex flex-col justify-start relative w-full shrink-0">
          <p className="text-[#929292] text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);



const CTABlock = () => (
  <motion.div
    variants={fadeInUp}
    aria-label="CTA"
    className="items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[10px] px-0 md:px-[250px] shrink-0"
  >
    <div className="relative w-full">
      <div
        className="items-center flex h-min justify-center overflow-hidden relative w-full bg-[#0f0f0f] gap-[16px] p-2 rounded-[1.375rem]
          after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-[1.375rem]"
      >
       
        <div className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[4px] pl-2 z-[1] shrink-0">
          <p className="text-left text-white text-[18px] tracking-[-0.9px] leading-[19.8px] font-inter w-full">
            Are you ready?
          </p>
        </div>

        <NoiseOverlay opacity="opacity-[0.06]" className="top-[-319px] bottom-[-201px] left-[-2px] right-[-2px] inset-auto" />

      
        <div className="relative shrink-0">
          <a
            href="#"
            aria-label="Get Started"
            className="items-center flex size-min justify-center overflow-hidden relative btn-cta-primary gap-[8px] pt-3 pr-3 pb-3 pl-5 rounded-[0.9775rem]"
          >
            <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter whitespace-pre z-[10] shrink-0">
              Get Started
            </p>
            <div className="aspect-square overflow-clip relative w-5 bg-[rgba(38,38,38,0.44)] shrink-0 rounded-md">
              <div className="aspect-square absolute w-[18px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="items-center flex size-full justify-center">
                  <div className="size-full overflow-hidden">
                    <img src={ARROW_RIGHT_ICON} className="block size-full" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);


const Benefits2 = () => (
  <div>
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      aria-label="Benefits-2"
      className="items-center flex h-min justify-center relative w-full gap-0 px-4 py-16 md:p-[100px] shrink-0"
    >
      <div
        aria-label="Content"
        className="items-center flex flex-col grow h-min justify-center relative w-full gap-[44px] max-w-[1000px] z-[1] shrink-0"
      >
        <SectionHeader />

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Grid+CTA"
          className="items-center flex flex-col h-min justify-center relative w-full gap-[44px] shrink-0"
        >
        
          <div className="grid h-min justify-center relative w-full grid-cols-1 md:grid-cols-2 gap-[8px] shrink-0">
            {BENEFITS_DATA.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>

          <CTABlock />
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default Benefits2;