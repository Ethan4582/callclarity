'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LOGO_BLUR_IMG,
  NOISE_TEXTURE,
  FAQ_ITEMS,
  FAQ_SECTION_TITLE,
  FAQ_SECTION_SUBTITLE,
  FAQ_CONTACT_HREF,
} from '../../data/globalData';

// ─── Animation Variants ───────────────────────────────────────────────────────

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

// ─── Plus / X Icon ────────────────────────────────────────────────────────────

const PlusIcon = ({ open }: { open: boolean }) => (
  <div className="overflow-hidden relative w-5 h-5 shrink-0">
    <div className={`absolute w-5 h-5 left-0 top-0 transition-transform duration-300 ${open ? '-rotate-45' : 'rotate-0'}`}>
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="rgba(255,255,255,0.98)">
        <path d="M 10 2.5 C 10.46 2.5 10.833 2.873 10.833 3.333 L 10.833 9.167 L 16.667 9.167 C 17.127 9.167 17.5 9.54 17.5 10 C 17.5 10.46 17.127 10.833 16.667 10.833 L 10.833 10.833 L 10.833 16.667 C 10.833 17.127 10.46 17.5 10 17.5 C 9.54 17.5 9.167 17.127 9.167 16.667 L 9.167 10.833 L 3.333 10.833 C 2.873 10.833 2.5 10.46 2.5 10 C 2.5 9.54 2.873 9.167 3.333 9.167 L 9.167 9.167 L 9.167 3.333 C 9.167 2.873 9.54 2.5 10 2.5 Z" />
      </svg>
    </div>
  </div>
);

// ─── Noise Overlay ────────────────────────────────────────────────────────────

const NoiseOverlay = () => (
  <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.1]">
    <img src={NOISE_TEXTURE} className="block size-full overflow-clip" alt="" />
  </div>
);

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

const FaqItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="relative w-full"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className={[
          'items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-0 p-5 rounded-[1.125rem] text-left',
          'backdrop-blur-[5px] transition-colors duration-300',
          'after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-black/25 after:content-[\'\'] after:rounded-[1.125rem]',
          open ? 'bg-[rgb(23,23,23)]' : 'bg-[rgba(38,38,38,0.44)]',
        ].join(' ')}
        aria-expanded={open}
      >
        {/* Question row */}
        <div className="items-center flex h-min justify-between w-full gap-[10px] shrink-0">
          <p className="text-white text-[20px] tracking-[-0.8px] leading-[24px] font-inter text-left grow">
            {question}
          </p>
          <PlusIcon open={open} />
        </div>

        {/* Answer — animated */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden w-full"
            >
              <p className="text-white/50 text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter pt-3 pr-3 text-left">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <NoiseOverlay />
      </button>
    </motion.div>
  );
};

// ─── Section Badge ────────────────────────────────────────────────────────────

const SectionBadge = () => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="items-center flex size-min justify-center relative bg-[rgb(23,23,23)] gap-[5px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-[62.4375rem]
      after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,34,34)] after:content-[''] after:rounded-[62.4375rem]"
  >
    <div className="aspect-square overflow-hidden relative w-[18px] shadow-globe-badge z-[5] shrink-0 rounded-[12.435rem]
      bg-[linear-gradient(rgb(107,134,255)_0%,rgb(0,123,255)_48.4832%,rgb(0,47,255)_100%)]">
      <div className="absolute left-[-9px] right-[-7px] bottom-[-8px] aspect-[1.15385/1]">
        <div className="absolute inset-0">
          <img src={LOGO_BLUR_IMG} className="block size-full object-cover overflow-clip" alt="" />
        </div>
      </div>
    </div>
    <p className="text-white/90 text-[16px] tracking-[-0.8px] leading-[14.4px] font-inter whitespace-pre h-[14px]">
      Questions
    </p>
  </motion.div>
);

// ─── Left Column ──────────────────────────────────────────────────────────────

const LeftColumn = () => (
  <motion.div
    variants={fadeInLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="items-start self-stretch flex flex-col justify-between relative w-full md:w-px md:basis-0 md:grow shrink-0 gap-10 md:gap-0"
  >
    {/* Header */}
    <header className="items-start flex flex-col h-min justify-center relative w-full gap-[16px]">
      <SectionBadge />
      <div className="flex flex-col gap-[16px] w-full">
        <h2 className="text-white text-[32px] md:text-[48px] tracking-[-1.92px] md:tracking-[-2.88px] leading-[1.15] font-inter text-center md:text-left">
          {FAQ_SECTION_TITLE}
        </h2>
        <p className="text-[rgb(146,146,146)] text-[16px] tracking-[-0.8px] leading-[19.2px] font-inter text-center md:text-left max-w-[80%] mx-auto md:mx-0">
          {FAQ_SECTION_SUBTITLE}
        </p>
      </div>
    </header>

    {/* CTA */}
    <div className="flex flex-col gap-[16px]">
      <p className="text-[rgb(146,146,146)] text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter">
        Have more questions?
      </p>
      <a
        href={FAQ_CONTACT_HREF}
        className="items-center flex size-min justify-center overflow-hidden relative bg-[rgb(23,23,23)] gap-[8px] pt-3 pr-5 pb-3 pl-5 rounded-[0.9775rem]
          after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,34,34)] after:content-[''] after:rounded-[0.9775rem]"
        style={{ backgroundImage: 'linear-gradient(rgb(23,23,23) 0%, rgb(23,23,23) 100%)' }}
      >
        <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter whitespace-pre z-[10] shrink-0">
          Send an Email
        </p>
      </a>
    </div>
  </motion.div>
);

// ─── Right Column ─────────────────────────────────────────────────────────────

const RightColumn = () => (
  <motion.div
    variants={fadeInRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="items-center flex flex-col grow h-min justify-center relative w-full md:w-px md:basis-0 gap-[4px] shrink-0"
  >
    {FAQ_ITEMS.map((item, i) => (
      <FaqItem key={item.question} index={i} {...item} />
    ))}
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Faq = () => (
  <div>
    <section
      aria-label="FAQs"
      className="items-center flex h-min justify-center relative w-full gap-0 px-6 py-16 md:p-[100px] shrink-0"
    >
      <div
        aria-label="Content"
        className="items-start flex flex-col md:flex-row grow h-min justify-center relative w-px basis-0 gap-10 md:gap-[24px] max-w-[1000px] z-[1] shrink-0"
      >
        <LeftColumn />
        <RightColumn />
      </div>
    </section>
  </div>
);

export default Faq;