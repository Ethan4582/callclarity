'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TESTIMONIALS,
  STAR_FULL,
  STAR_HALF,
  VERIFIED_BADGE_ICON,
  NOISE_TEXTURE,
} from '../../data/globalData';



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};



const StarRating = () => (
  <div className="items-center flex justify-center overflow-clip relative text-left w-min h-4 gap-[8px] shrink-0">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="aspect-square relative text-left w-4 shrink-0">
        <div className="items-center flex size-full justify-center text-left">
          <div className="size-full overflow-hidden fill-[rgb(42,_66,_255)]">
            <img src={STAR_FULL} className="block size-full" alt="star" />
          </div>
        </div>
      </div>
    ))}
    <div className="aspect-square relative text-left w-4 shrink-0">
      <div className="items-center flex size-full justify-center text-left">
        <div className="size-full overflow-hidden fill-[rgb(42,_66,_255)]">
          <img src={STAR_HALF} className="block size-full" alt="half star" />
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ data }: { data: typeof TESTIMONIALS[0] }) => (
  <div className="relative text-left w-[300px] md:w-[380px] lg:w-[442px] h-[207px] z-[10] flex-shrink-0">
    <div className="items-start flex flex-col h-full justify-start overflow-clip relative text-left w-full backdrop-blur-[5px] bg-[#262626]/44 gap-[12px] p-6 rounded-3xl after:border after:size-full after:pointer-events-none after:absolute after:text-left after:left-0 after:top-0 after:border-[#262626]/44 after:content-[''] after:rounded-3xl">

      <div className="flex flex-col justify-start absolute text-left whitespace-pre top-[10px] right-[10px] shrink-0 pointer-events-none">
        <p className="text-white/5 text-[120px] leading-[120px] font-lily">"</p>
      </div>


      <div className="absolute inset-0 z-[1] opacity-[0.1] pointer-events-none">
        <img src={NOISE_TEXTURE} className="block size-full overflow-clip aspect-square" alt="" />
      </div>


      <div className="items-start flex flex-col h-min justify-center overflow-clip relative text-left w-full gap-[16px] shrink-0 z-10">
        <StarRating />
        <p className="text-white text-[14px] md:text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter">
          {data.text}
        </p>
      </div>


      <div className="items-center flex h-min justify-center overflow-clip relative text-left w-full gap-[8px] pt-4 shrink-0 z-10 border-t border-white/10 mt-auto">
        <div className="aspect-square overflow-clip relative w-[38px] shrink-0 rounded-lg">
          <img src={data.profileImg} className="block size-full object-cover rounded-lg" alt={data.name} />
        </div>
        <div className="items-center flex flex-col grow h-min justify-center relative gap-[4px] shrink-0">
          <div className="items-center flex h-min justify-start relative w-full gap-[4px] shrink-0">
            <p className="font-medium text-white text-[16px] tracking-[-0.48px] leading-[16px] font-inter">{data.name}</p>
            <div className="relative w-[13px] h-[13px] shrink-0">
              <img src={VERIFIED_BADGE_ICON} alt="verified" className="w-full h-full" />
            </div>
          </div>
          <div className="flex justify-start relative text-left w-full shrink-0">
            <p className="text-white/70 text-[14px] tracking-[-0.56px] leading-[15.4px] font-inter">{data.role}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);



const MarqueeRow = ({ reverse, speed }: { reverse?: boolean; speed: number }) => (
  <div className="marquee-wrapper">
    <div className="marquee">
      <div
        className={`marquee-track${reverse ? ' reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <TestimonialCard key={`${reverse ? 'r' : 'f'}-${i}`} data={t} />
        ))}
      </div>
    </div>
  </div>
);



const Testimonial = () => (
  <div>
    <section
      aria-label="Testimonials"
      className="items-center flex flex-col h-min justify-center relative w-full bg-[#131314]/44 gap-[44px] pt-[100px] pb-11 shrink-0 rounded-[5rem] overflow-hidden"
    >

      <div className="items-center flex flex-col h-min justify-center relative w-full max-w-[1000px] z-[1] shrink-0 px-6 gap-[16px]">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="items-center flex size-min justify-center relative bg-[#171717] gap-[5px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-[62.4375rem]">
            <div className="aspect-square overflow-hidden relative w-[18px] shadow-globe-testimonial z-[5] shrink-0 rounded-[12.435rem] bg-[linear-gradient(rgb(107,134,255)_0%,rgb(0,123,255)_48.4832%,rgb(0,47,255)_100%)]">
              <div className="absolute left-[-9px] right-[-7px] bottom-[-8px] aspect-[1.15385/1]">
                <div className="absolute inset-0">
                  <img
                    src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9f676721f71c6a8a84b5dcea0885eb38746ba3a4.png%3Fwidth=360&height=312?generation=1771443083880491&alt=media"
                    className="block size-full object-cover overflow-clip"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p className="text-white/90 text-[16px] tracking-[-0.8px] leading-[14.4px] font-inter">Testimonials</p>
          </div>
        </motion.div>


        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-white text-[32px] md:text-[48px] tracking-[-1.92px] md:tracking-[-2.88px] leading-[1.1] font-inter"
        >
          See What People Are<br />Saying About Us
        </motion.h2>
      </div>

      <div className="w-full">

        <div className="flex flex-col items-center gap-5 md:hidden px-4 w-full">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={`mobile-${i}`}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full"
            >
              <div className="relative text-left w-full h-auto z-[10]">
                <div className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full backdrop-blur-[5px] bg-[#262626]/44 gap-[12px] p-5 rounded-3xl after:border after:size-full after:pointer-events-none after:absolute after:text-left after:left-0 after:top-0 after:border-[#262626]/44 after:content-[''] after:rounded-3xl">

                  <div className="flex flex-col justify-start absolute whitespace-pre top-[10px] right-[10px] shrink-0 pointer-events-none">
                    <p className="text-white/5 text-[120px] leading-[120px] font-lily">"</p>
                  </div>

                  <div className="absolute inset-0 z-[1] opacity-[0.1] pointer-events-none">
                    <img src={NOISE_TEXTURE} className="block size-full overflow-clip" alt="" />
                  </div>

                  <div className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-0 z-10">
                    <StarRating />
                    <p className="text-white text-[15px] tracking-[-0.5px] leading-[1.35] font-inter">{t.text}</p>
                  </div>

                  <div className="items-center flex h-min justify-start relative w-full gap-[8px] pt-4 shrink-0 z-10 border-t border-white/10">
                    <div className="aspect-square overflow-clip relative w-[38px] shrink-0 rounded-lg">
                      <img src={t.profileImg} className="block size-full object-cover rounded-lg" alt={t.name} />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex items-center gap-[4px]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.48px] leading-[16px] font-inter">{t.name}</p>
                        <div className="relative w-[13px] h-[13px] shrink-0">
                          <img src={VERIFIED_BADGE_ICON} alt="verified" className="w-full h-full" />
                        </div>
                      </div>
                      <p className="text-white/70 text-[14px] tracking-[-0.56px] leading-[15.4px] font-inter">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex flex-col gap-3 w-full"
        >
          <MarqueeRow speed={60} />
          <MarqueeRow reverse speed={75} />
        </motion.div>
      </div>
    </section>
  </div>
);

export default Testimonial;