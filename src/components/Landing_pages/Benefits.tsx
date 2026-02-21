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
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

// Subcomponents for mockups to keep main component clean
const ChatListMockup = () => (
  <div className="flex flex-col gap-2.5 p-2.5 min-h-[358px] mt-11 w-full bg-black rounded-t-[3.4rem] shadow-2xl overflow-hidden relative border-t border-white/10">
    <div className="flex flex-col gap-2.5 px-2.5 translate-y-[10px]">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex relative items-center justify-between p-3.5 rounded-xl bg-[#121212] border border-[#262626]/40 h-[65px] z-10 w-full mb-1">
          <div className="absolute inset-0 opacity-20 pointer-events-none rounded-[inherit]">
            <img src={NOISE_TEXTURE} alt="" className="w-full h-full object-cover rounded-[inherit] mix-blend-overlay" />
          </div>
          <div className="flex items-center gap-3 relative z-[1]">
            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#00ff51]' : 'bg-white'}`} style={{ boxShadow: i % 2 === 0 ? '0 0 10px #00ff51' : 'none' }} />
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-medium leading-none mb-1">Message</span>
              <span className="text-white/70 text-[14px] leading-none">Community</span>
            </div>
          </div>
          <span className="text-white text-[16px] font-medium relative z-[1]">{i % 2 === 0 ? 'New' : '12m'}</span>
        </div>
      ))}
    </div>
  </div>
)

const AppScreenMockup = () => {
  const chips = ["ChatFrame AI", "Access", "Application", "Works like siri", "Work smarter"]
  return (
    <div className="flex flex-col gap-2.5 p-2.5 min-h-[358px] mb-8 w-full bg-black rounded-t-[3.4rem] shadow-2xl overflow-hidden relative border-t border-white/10">
      <div className="flex gap-2.5 mt-8 overflow-hidden px-2 -translate-x-[40px] z-10">
        {chips.map((c, i) => (
          <div key={i} className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full border border-[#222]/55 ${i % 2 === 0 ? 'bg-[#171717]/40 text-white/60' : 'bg-gradient-to-tr from-black to-[#4702a1] text-white/90'} text-sm`}>
            {c}
          </div>
        ))}
      </div>
      <div className="flex gap-2.5 overflow-hidden px-2 -translate-x-[60px] z-10">
        {chips.reverse().map((c, i) => (
          <div key={i} className={`flex items-center whitespace-nowrap px-3 py-2 rounded-full border border-[#222]/55 ${i % 2 !== 0 ? 'bg-[#171717]/40 text-white/60' : 'bg-gradient-to-tr from-black to-[#4702a1] text-white/90'} text-sm`}>
            {c}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-36 h-36 rounded-[2.1rem] bg-[#262626]/40 backdrop-blur-sm border border-[#363636] flex items-center justify-center relative shadow-xl">
          <Globe size="w-[88px] h-[88px] aspect-square z-[5] rounded-full" />
        </div>
        <span className="text-white text-base font-medium">ChatFrame</span>
      </div>
    </div>
  )
}

const VoiceChatMockup = () => (
  <div className="flex flex-col items-center gap-7 pt-11 px-8 min-h-[358px] w-full bg-black rounded-t-[3.4rem] shadow-2xl overflow-hidden relative border-t border-white/10">
    <div className="flex flex-col gap-1 w-full z-10">
      <div className="w-full bg-gradient-to-tr from-[#001629] via-[#000552] to-[#4702a1] px-3.5 pt-2.5 pb-2.5 rounded-2xl border border-white/10 opacity-80 backdrop-blur-sm">
        <p className="text-white text-lg tracking-tight">Ask ChatFrame...</p>
      </div>
      <div className="w-full bg-[#17161f]/70 p-3.5 rounded-2xl border border-white/10 backdrop-blur-sm">
        <p className="text-[#929292] text-sm leading-relaxed">
          I'm here to help with anything you need. Whether it's answering questions, organizing tasks, or just having a chat, feel free to ask. I'm ready to assist!
        </p>
      </div>
    </div>
    <div className="relative mt-auto w-[79px] h-[79px] shrink-0 mb-4 z-10">
      <Globe size="w-[79px] h-[79px] aspect-square rounded-full" degrees={240} duration={10} />
    </div>
  </div>
)

const MockupContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full max-w-[452px] h-[390px] shrink-0 flex items-end justify-center rounded-[2.3rem] overflow-hidden bg-[#262626]/40 px-10">
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />
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