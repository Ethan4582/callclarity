'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  NEW_BENEFITS_BADGE,
  NEW_BENEFITS_HEADING,
  NEW_BENEFITS_CARDS,
  NEW_BENEFITS_CTA_LABEL,
  NEW_BENEFITS_CTA_HREF,
  NOISE_TEXTURE,
} from '../../data/globalData'
import Globe from '../Globe'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

// Subcomponents for mockups to keep main component clean
const ChatListMockup = () => {
  const items = [
    { status: 'green', time: 'New', gradient: true },
    { status: 'white', time: '12m', gradient: false },
    { status: 'green', time: 'New', gradient: true },
    { status: 'white', time: '12m', gradient: false },
    { status: 'green', time: 'New', gradient: true },
    { status: 'white', time: '18m', gradient: false },
    { status: 'green', time: 'New', gradient: true },
    { status: 'white', time: '24m', gradient: false },
  ]

  // Double items for seamless infinite scroll
  const scrollingItems = [...items, ...items]

  return (
    <div className="flex flex-col p-2.5 min-h-[358px] mt-11 w-full bg-black rounded-t-[3.4rem] overflow-hidden relative border-t border-[#1a1a1a]">

      {/* Background blueish gradient at the bottom behind the scrolling items */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1b1c61]/40 to-transparent z-[5] pointer-events-none" />

      {/* Top blur fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex flex-col gap-2.5 px-2.5 translate-y-[10px] relative z-10"
        animate={{ y: [0, -600] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {scrollingItems.map((item, i) => (
          <div
            key={i}
            className={`flex relative items-center justify-between p-3.5 rounded-xl border border-[#262626]/40 h-[65px] shrink-0 z-10 w-full mb-1 overflow-hidden ${item.gradient
              ? 'bg-[#101010]'
              : 'bg-[#121212]'
              }`}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none rounded-[inherit]">
              <img src={NOISE_TEXTURE} alt="" className="w-full h-full object-cover rounded-[inherit] mix-blend-overlay" />
            </div>

            {/* Colorful custom gradient overlay matching the image */}
            {item.gradient && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#5a1bdf]/40 via-[#103eb8]/40 to-transparent mix-blend-screen pointer-events-none" />
            )}

            <div className="flex items-center gap-3 relative z-[1]">
              <div
                className={`w-2 h-2 rounded-full ${item.status === 'green' ? 'bg-[#00ff51]' : 'bg-white'}`}
                style={{ boxShadow: item.status === 'green' ? '0 0 10px #00ff51' : 'none' }}
              />
              <div className="flex flex-col">
                <span className="text-white text-[16px] font-medium leading-none mb-1 text-shadow-sm">Message</span>
                <span className="text-white/70 text-[14px] leading-none">Community</span>
              </div>
            </div>
            <span className="text-white text-[16px] font-medium relative z-[1]">{item.time}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom blur fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent z-20 pointer-events-none" />
    </div>
  )
}

const Chip = ({ text, isGradient }: { text: string, isGradient: boolean }) => (
  <div className={`flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-full border border-white/[0.06] ${isGradient ? 'bg-gradient-to-r from-[#170533] to-[#040145] text-white shadow-[0_0_15px_rgba(71,2,161,0.2)]' : 'bg-[#111111]/30 text-[#666666]'} text-[13px] tracking-tight`}>
    {text}
  </div>
)

const AppScreenMockup = () => {
  const chips = ["Callclarity AI", "Access", "Application", "Works like siri", "Work smarter"]
  const chipsRow1 = [...chips, ...chips, ...chips, ...chips]
  const chipsRow2 = [...chips, ...chips, ...chips, ...chips].reverse()
  const chipsRow3 = [...chips.slice(1), ...chips, ...chips, ...chips]
  return (
    <div className="flex flex-col p-2.5 min-h-[358px] mt-11 w-full bg-black rounded-t-[3.4rem] overflow-hidden relative border-t border-[#1a1a1a]">
      {/* Top blur fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <div className="absolute top-1/2 left-0 right-0 -translate-y-[65%] flex flex-col gap-3.5 z-10 w-full overflow-visible opacity-90">
        <motion.div
          className="flex gap-3 px-2 w-max"
          animate={{ x: [0, -500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {chipsRow1.map((c, i) => (
            <Chip key={`r1-${i}`} text={c} isGradient={i % 4 === 2} />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3 px-2 w-max"
          animate={{ x: [-500, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 1 }}
        >
          {chipsRow2.map((c, i) => (
            <Chip key={`r2-${i}`} text={c} isGradient={i % 5 === 1} />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3 px-2 w-max"
          animate={{ x: [0, -500] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {chipsRow3.map((c, i) => (
            <Chip key={`r3-${i}`} text={c} isGradient={i % 4 === 0} />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-[45%] flex flex-col items-center gap-4 z-30">
        <div className="w-[124px] h-[124px] rounded-[1.8rem] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-[12px] border border-white/10 flex items-center justify-center relative shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Globe size="w-[80px] h-[80px] aspect-square z-[5] rounded-full" />
        </div>
        <span className="text-white text-[15px] font-medium tracking-tight">Callclarity</span>
      </div>

      {/* Bottom blur fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none" />
    </div>
  )
}

const VoiceChatMockup = () => (
  <div className="flex flex-col items-center gap-7 pt-11 px-8 min-h-[358px] w-full bg-black rounded-t-[3.4rem] shadow-2xl overflow-hidden relative border-t border-white/10">
    <div className="flex flex-col gap-1 w-full z-10">
      <div className="w-full bg-gradient-to-tr from-[#001629] via-[#000552] to-[#4702a1] px-3.5 pt-2.5 pb-2.5 rounded-2xl border border-white/10 opacity-80 backdrop-blur-sm">
        <p className="text-white text-lg tracking-tight">Ask Callclarity...</p>
      </div>
      <div className="w-full bg-[#17161f]/70 p-3.5 rounded-2xl border border-white/10 backdrop-blur-sm">
        <p className="text-[#929292] text-sm leading-relaxed">
          I'm here to help with anything you need. Whether it's answering questions, organizing tasks, or just having a chat, feel free to ask. I'm ready to assist!
        </p>
      </div>
    </div>
    <motion.div
      className="absolute w-[45px] aspect-square left-1/2 -translate-x-1/2 bottom-[50px] rounded-full z-[1] rotate-[101deg] shadow-globe-testimonial bg-globe-gradient flex items-center justify-center p-0 m-0"
      animate={{
        scale: [0.7, 1.85, 0.7],
        filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute w-[180px] h-[180px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full pointer-events-none flex items-center justify-center">
        <Globe degrees={320} duration={1} />
      </div>
    </motion.div>
  </div>
)

const MockupContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full max-w-[452px] h-[390px] shrink-0 flex items-end justify-center rounded-[2.3rem] overflow-hidden bg-[#141414]/80 px-10 border border-white/5 shadow-2xl">
    {/* Blue glow at the bottom behind the phone */}
    <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1d2799]/40 via-[#0e1040]/10 to-transparent pointer-events-none z-0" />
    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#101968]/50 to-transparent pointer-events-none z-0" />
    <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay">
      <img src={NOISE_TEXTURE} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="relative w-full z-10 flex h-full items-end">
      {children}
    </div>
  </div>
)

const Benefits = () => {
  return (
    <section aria-label="Benefits-1" className="flex items-center justify-center w-full min-h-screen py-24 px-5 md:p-[100px] overflow-hidden bg-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center w-full max-w-[1000px] gap-12 md:gap-[100px] z-[1]"
      >

        {/* Header */}
        <motion.header
          variants={fadeInUp}
          className="flex flex-col items-center w-full gap-4 text-center"
        >
          <div className="flex items-center justify-center bg-[#171717] gap-1.5 py-1.5 px-3 rounded-full border border-[#222]">
            <Globe variant="badge" />
            <span className="text-white/90 text-sm md:text-base font-medium">{NEW_BENEFITS_BADGE}</span>
          </div>
          <h2 className="text-white text-4xl md:text-[48px] tracking-tight md:tracking-[-2.88px] leading-tight md:leading-[52.8px] font-inter whitespace-pre-wrap max-w-2xl">
            {NEW_BENEFITS_HEADING}
          </h2>
        </motion.header>

        {/* Cards Wrapper */}
        <div className="flex flex-col items-center w-full gap-20 md:gap-[100px]">
          {NEW_BENEFITS_CARDS.map((card, index) => {
            const isEven = index % 2 !== 0;

            // Text Content Block
            const TextContent = (
              <motion.div variants={isEven ? fadeInLeft : fadeInRight} className="flex flex-col items-start justify-center gap-5 w-full md:max-w-md">
                <div className="flex flex-wrap items-center gap-2.5">
                  {card.chips.map((chip, idx) => (
                    <div key={idx} className={`flex items-center justify-center px-3 py-2 rounded-full border border-[#222] text-sm md:text-base text-white/90 ${idx === 0 ? 'bg-gradient-to-tr from-black via-[#001629] to-[#4702a1]' : 'bg-[#171717]'}`}>
                      {chip}
                    </div>
                  ))}
                </div>
                <h2 className="text-white text-3xl md:text-[48px] tracking-tight md:tracking-[-2.88px] leading-tight md:leading-[52.8px] font-inter whitespace-pre-wrap">
                  {card.title}
                </h2>
                <a href={NEW_BENEFITS_CTA_HREF} className="group flex items-center gap-2 py-3 px-5 rounded-[0.9rem] bg-gradient-to-r from-[#4f2bff] via-[#3300ff] to-[#2a00d4] hover:opacity-90 transition-opacity shadow-lg text-white mt-2">
                  <span className="text-base tracking-tight font-medium">{NEW_BENEFITS_CTA_LABEL}</span>
                  <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </motion.div>
            );

            // Mockup Block
            const MockupContent = (
              <motion.div variants={isEven ? fadeInRight : fadeInLeft} className="w-full flex justify-center md:max-w-[452px]">
                <MockupContainer>
                  {card.imageType === 'chat-list' && <ChatListMockup />}
                  {card.imageType === 'app-screen' && <AppScreenMockup />}
                  {card.imageType === 'voice-chat' && <VoiceChatMockup />}
                </MockupContainer>
              </motion.div>
            );

            return (
              <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full gap-10 md:gap-[80px]`}>
                {MockupContent}
                {TextContent}
              </div>
            )
          })}
        </div>

      </motion.div>
    </section>
  )
}

export default Benefits