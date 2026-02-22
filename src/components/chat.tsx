'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  CHAT_BADGE_TEXT,
  CHAT_HEADING,
  CHAT_SUBTITLE,
  CHAT_TITLE,
  CHAT_PLACEHOLDER,
  CHAT_TASKS,
  CHAT_NAV_LINKS,
  LOGO_BLUR_IMG,
  CHAT_ACTION_ICONS,
  CHAT_MIC_ICON,
  CHAT_SEND_ICON_URL,
} from '../data/globalData'
import Globe from './Globe'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

const fadeWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, delay } },
})

const Chat = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <section
        aria-label="Callclarity-UI"
        className="items-center flex h-min justify-center relative w-full pt-16 px-5 md:pt-[100px] md:pr-[100px] md:pb-0 md:pl-[100px] shrink-[0]"
      >
        <div
          aria-label="Content"
          className="items-center flex flex-col grow h-min justify-center relative w-full md:w-px md:basis-0 gap-[30px] md:gap-[55px] max-w-[1000px] z-[1] shrink-[0]"
        >

          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-label="Header"
            className="items-center flex flex-col h-min justify-center relative w-full gap-[16px]"
          >
            <div className="relative">
              <div
                aria-label="Variant 1"
                className="items-center flex size-min justify-center relative bg-neutral-[23] bg-[#171717] gap-[5px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-full after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-full"
              >
                <div
                  className="w-[18px] aspect-square rounded-full relative overflow-hidden z-[5] shadow-globe-testimonial bg-globe-gradient shrink-0"
                >
                  <div aria-label="Blur" className="absolute -left-[9px] -right-[7px] -bottom-[8px] aspect-[1.15385/1]">
                    <img
                      src={LOGO_BLUR_IMG}
                      alt="Globe blur"
                      className="block size-full object-cover overflow-clip aspect-[auto_360/312]"
                    />
                  </div>
                </div>
                <div aria-label="Text" className="items-center flex size-min justify-center relative gap-[3px] shrink-0">
                  <div className="flex flex-col justify-start relative whitespace-pre h-[14px] shrink-0">
                    <p className="text-white/90 text-[16px] tracking-tight leading-[14.4px] font-inter">
                      {CHAT_BADGE_TEXT}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-label="H2+subtitle"
              className="items-center flex flex-col h-min justify-center relative w-full gap-[16px] z-[1] shrink-0 mt-4"
            >
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full md:max-w-[48%] shrink-0">
                <h2 className="text-center text-white text-4xl md:text-[48px] tracking-tight md:tracking-translate-[-2.88px] leading-tight md:leading-[52.8px] font-inter">
                  {CHAT_HEADING}
                </h2>
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full md:max-w-[42%] shrink-0 mt-2">
                <p className="text-center text-[#929292] text-base tracking-tight leading-[19.2px] font-inter">
                  {CHAT_SUBTITLE}
                </p>
              </div>
            </div>
          </motion.header>

          <div
            aria-label="Dashboard Frame"
            className="items-center flex justify-center relative w-full h-[639px] gap-[10px] mt-8"
          >
            <div className="absolute w-full left-0 top-0 z-[1]">
              <div
                aria-label="Callclarity UI"
                className="items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[10px] rounded-[1.25rem]"
              >
                <div
                  aria-label="Linear Fill"
                  className="items-center flex flex-col justify-end overflow-clip relative w-full h-[640px] gap-[10px] pt-0 px-2 md:px-[100px] md:pr-[100px] md:pb-[120px] pb-10 md:pl-[100px] shrink-0"
                  style={{ backgroundImage: "linear-gradient(0deg, rgba(15, 15, 15, 0) 0%, rgb(15, 15, 15) 100%)" }}
                >
                  <div
                    aria-label="Content"
                    className="items-center flex flex-col size-min justify-center relative gap-[38px] shrink-0"
                  >
                    <div
                      aria-label="Name+Chat"
                      className="items-center flex flex-col h-min justify-center relative w-full md:w-[800px] gap-[34px] shrink-0"
                    >
                      <motion.div
                        variants={fadeWithDelay(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4"
                      >
                        <div aria-label="Globe Wrapper" className="relative w-[94px] aspect-square shrink-0 flex items-center justify-center p-0 m-0">
                          <motion.div
                            className="absolute w-[370px] h-[370px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full pointer-events-none flex items-center justify-center z-[1]"
                            animate={{
                              scale: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut" as const,
                            }}
                          >
                            <Globe degrees={320} duration={2} className="scale-[3]" />
                          </motion.div>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-0 opacity-95">
                          <h2 className="text-center text-white text-3xl md:text-[48px] tracking-tight md:tracking-[-2.88px] leading-tight md:leading-[52.8px] font-inter">
                            {CHAT_TITLE}
                          </h2>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={fadeWithDelay(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        aria-label="Chat UI"
                        className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full md:w-[585px] bg-[#141414] shadow-2xl gap-[8px] p-[5px] md:p-[5.03px] translate-y-2 max-w-full shrink-0 opacity-85 rounded-[1.625rem]"
                      >
                        <div
                          aria-label="Chat"
                          className="items-center flex flex-col h-min justify-center overflow-hidden relative w-full bg-[#0f0f0f] shadow-lg gap-[45px] p-[7.55px] shrink-0 rounded-[1.2575rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#0a0a0a] after:content-[''] after:rounded-[1.2575rem]"
                        >

                          <div className="items-center flex h-min justify-start overflow-hidden relative w-full bg-black/15 p-[5.03px] z-[3] shrink-0 rounded-[0.78625rem]">
                            <div className="items-center flex grow h-min justify-start overflow-x-auto relative w-full gap-[14px] shrink-[0] scrollbar-hide">
                              <div className="items-center flex min-w-max justify-center overflow-hidden relative gap-[2.41px] shrink-0">
                                {CHAT_TASKS.map((task, idx) => (
                                  <div
                                    key={idx}
                                    className="items-center flex size-min justify-center overflow-hidden relative bg-[#121212] gap-[12.58px] py-[6.28px] px-2 md:px-[10.06px] shrink-0 rounded-[0.471875rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#141414] after:content-[''] after:rounded-[0.471875rem]"
                                  >
                                    <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
                                      <p className="text-white tracking-tight leading-[12px] font-inter text-xs">
                                        {task}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[12px] pl-2 md:pl-[10.06px] z-[3] shrink-0">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-0">
                              <p className="text-[#525252] text-[16px] tracking-tight leading-[16px] font-inter text-left">
                                {CHAT_PLACEHOLDER}
                              </p>
                            </div>
                            <div className="items-center flex h-min justify-between overflow-hidden relative w-full shrink-0 pr-2">
                              <div className="items-center flex size-min justify-center overflow-hidden relative gap-[4.82px] shrink-0">

                                {CHAT_ACTION_ICONS.map((path, i) => (
                                  <div
                                    key={i}
                                    className="items-center flex size-min justify-center overflow-hidden relative bg-black/30 w-[23px] h-[23px] shrink-0 rounded-sm"
                                  >
                                    <svg viewBox="0 0 14 14" overflow="visible" className="w-3.5 h-3.5 fill-white">
                                      <path d={path} />
                                    </svg>
                                  </div>
                                ))}
                              </div>
                              <div className="items-center flex size-min justify-center overflow-hidden relative gap-[4.82px] shrink-0">

                                <div className="items-center flex flex-col size-min justify-center overflow-hidden relative bg-[#0a0a0a]/55 p-[7.85px] shrink-0 rounded-full">
                                  <svg viewBox="0 0 18 18" overflow="visible" className="w-[18px] h-[18px] fill-white opacity-40">
                                    <path d={CHAT_MIC_ICON} />
                                  </svg>
                                </div>
                                <div className="items-center flex flex-col justify-center overflow-hidden relative w-8 h-[33px] bg-black/55 p-[7.85px] shrink-0 rounded-full">
                                  <div aria-label="send" className="aspect-square absolute w-5 left-[52%] top-[49%] -translate-x-1/2 -translate-y-1/2 -rotate-[56deg] z-[1] shrink-0">
                                    <img src={CHAT_SEND_ICON_URL} className="block size-full" alt="Send" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div aria-label="noise" className="absolute -inset-0.5 pointer-events-none z-[1] opacity-5">
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fec5a86420a6baa2fa0ca5c8585412548d70651c1.png?width=2000&height=2000" className="block size-full object-cover" alt="" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    variants={fadeWithDelay(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    aria-label="Desktop"
                    className="items-center flex flex-col md:flex-row h-min justify-center absolute top-px w-full left-0 backdrop-blur-md gap-[10px] py-4 px-5 md:py-[18px] md:px-11 z-[1] shrink-0 after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#171717] after:content-['']"
                  >
                    <div aria-label="Content" className="items-center flex flex-col md:flex-row grow h-min justify-between relative w-full md:w-px md:basis-0 max-w-[1000px] gap-4 md:gap-0 shrink-0">


                      <div className="relative shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                        <a href="/" aria-label="Variant 1" className="items-center flex size-min justify-center overflow-hidden relative bg-[#5e5e5e]/15 text-[#0000ee] gap-[6.87px] p-[6.87px] rounded-full hover:opacity-80 transition-opacity">
                          <div aria-label="Globe" className="aspect-square overflow-hidden relative w-[27px] shadow-globe-testimonial bg-globe-gradient z-[5] shrink-0 rounded-full">
                            <div aria-label="Blur" className="absolute -left-[13px] -right-[9px] -bottom-[8px] aspect-[1.15385/1]">
                              <img src={LOGO_BLUR_IMG} className="block size-full object-cover overflow-clip" alt="Globe blur" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-0">
                            <p className="text-white/90 text-[17px] tracking-tight leading-[17px] font-geist">
                              <span className="font-medium">Callclarity</span>
                            </p>
                          </div>
                        </a>
                      </div>


                      <div aria-label="CTAs" className="items-center flex flex-col sm:flex-row grow h-min justify-center md:justify-end relative w-full md:w-px md:basis-0 gap-[10px] shrink-0">
                        {CHAT_NAV_LINKS.map((link, idx) => (
                          <div key={idx} className="relative shrink-0 w-full sm:w-auto">
                            <a
                              href={link.href}
                              aria-label={link.isPrimary ? "Desktop/primary" : "Desktop/secondary"}
                              className={`items-center w-full sm:w-auto flex size-min justify-center overflow-hidden relative gap-[8px] py-3 px-5 rounded-[0.9775rem] transition-opacity hover:opacity-90 ${link.isPrimary
                                ? "bg-gradient-to-r from-[#4f2bff] via-[#3300ff] to-[#2a00d4] shadow-lg text-white"
                                : "bg-[#171717] text-white border border-[#222] after:absolute after:inset-0 after:border after:border-[#222222] after:rounded-[0.9775rem] after:pointer-events-none"
                                }`}
                            >
                              <div className="flex flex-col justify-start relative whitespace-pre z-[10] shrink-0">
                                <p className="text-white text-[16px] tracking-tight leading-[19.2px] font-inter">
                                  {link.label}
                                </p>
                              </div>
                              {link.isPrimary && (
                                <div aria-label="Arrow" className="aspect-square overflow-clip relative w-5 bg-white/20 shrink-0 rounded-md flex items-center justify-center">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7864961deed91e384cb1663d7420e822e59fc4f1.svg?generation=1771443083880465&alt=media" className="block w-[18px] h-[18px]" alt="arrow" />
                                </div>
                              )}
                            </a>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Chat