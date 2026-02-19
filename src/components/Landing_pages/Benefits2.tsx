"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const benefitsData = [
  {
    title: "SOP Adherence",
    description:
      "Checks conversations against SOPs to ensure agents follow company policies and required steps.",
  },
  {
    title: "Risk Detection",
    description:
      "Detects compliance risks like missed disclosures, risky statements, and policy violations.",
  },
  {
    title: "100% Coverage",
    description:
      "Automates QA coverage by reviewing 100% of interactions instead of manual sampling.",
  },
  {
    title: "Insights & Coaching",
    description:
      "Provides sentiment and performance insights to help improve agent coaching and resolution quality.",
  },
];

const SectionHeader = () => (
  <header
    aria-label="Header"
    className="items-center flex flex-col h-min justify-center relative w-full gap-[16px]"
  >
    <div className="contents">
      <div className="relative">
        <motion.div
          variants={fadeInUp}
          aria-label="Variant 1"
          className="items-center flex size-min justify-center relative bg-[#171717] gap-[5px] pt-[6px] pr-3 pb-[6px] pl-[6px] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-[62.4375rem] bg-[linear-gradient(29deg,rgb(23,23,23)_0%,rgb(23,23,23)_25%,rgb(23,23,23)_50%,rgb(23,23,23)_75%,rgb(23,23,23)_100%)]"
        >
          <div
            aria-label="Globe"
            className="aspect-square overflow-hidden relative w-[18px] z-[5] shrink-[0] rounded-[12.435rem] shadow-[rgb(0,234,255)_1.23px_-0.77px_16px_0px_inset,_rgb(38,0,255)_-1.08px_0.94px_16px_0px_inset,_rgba(255,255,255,0.88)_-5.73px_0.62px_161px_0px_inset,_rgb(255,255,255)_5.43px_-0.46px_11px_0px_inset,_rgba(11,0,77,0.19)_0px_0.906986px_0.906986px_-0.46875px,_rgba(11,0,77,0.18)_0px_2.14972px_2.14972px_-0.9375px,_rgba(11,0,77,0.18)_0px_3.92131px_3.92131px_-1.40625px,_rgba(11,0,77,0.17)_0px_6.51917px_6.51917px_-1.875px,_rgba(11,0,77,0.16)_0px_10.5279px_10.5279px_-2.34375px,_rgba(11,0,77,0.15)_0px_17.2332px_17.2332px_-2.8125px,_rgba(11,0,77,0.12)_0px_29.6743px_29.6743px_-3.28125px,_rgba(11,0,77,0.06)_0px_54px_54px_-3.75px,_rgba(0,0,0,0.25)_0px_2.48px_32px_0px,_rgba(0,0,0,0.25)_0px_4.95px_64px_0px,_rgb(30,0,179)_0px_4.49px_182px_0px] bg-[linear-gradient(rgb(107,134,255)_0%,rgb(0,123,255)_48.4832%,rgb(0,47,255)_100%)]"
          >
            <div
              aria-label="Blur"
              className="absolute left-[-9px] right-[-7px] bottom-[-8px] aspect-[1.15385/1]"
            >
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <img
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9f676721f71c6a8a84b5dcea0885eb38746ba3a4.png%3Fwidth=360&amp;height=312?generation=1771443083880491&amp;alt=media"
                  className="block size-full object-cover overflow-clip aspect-[auto_360/312]"
                />
              </div>
            </div>
          </div>
          <div
            aria-label="Text"
            className="items-center flex size-min justify-center relative gap-[3px] shrink-[0]"
          >
            <div className="flex flex-col justify-start relative whitespace-pre h-[14px] shrink-[0]">
              <p className="text-white/90 text-[16px] tracking-[-0.8px] leading-[14.4px] font-sans decoration-white/90">
                Application Context
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div
      aria-label="H2+Subtitle"
      className="items-center flex flex-col h-min justify-center relative w-full gap-[16px] shrink-[0]"
    >
      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full max-w-full md:max-w-[80%] shrink-[0]">
        <motion.h2
          variants={fadeInUp}
          className="text-center text-white text-[32px] md:text-[48px] tracking-[-1.92px] md:tracking-[-2.88px] leading-[38px] md:leading-[52.8px] font-sans decoration-white"
        >
          AI conversation analysis platform that reviews customer support calls
          and chats
        </motion.h2>
      </div>
    </div>
  </header>
);

const BenefitCard = ({
  benefit,
}: {
  benefit: { title: string; description: string };
}) => (
  <motion.div
    variants={fadeInUp}
    className="self-start justify-self-start relative w-full"
  >
    <div
      aria-label="Variant 1"
      className="items-start flex flex-col h-min justify-start overflow-clip relative w-full backdrop-blur-[10px] bg-[rgba(38,38,38,0.44)] gap-[60px] p-7 rounded-3xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-black/25 after:content-[''] after:rounded-3xl"
    >
      <div
        aria-label="noise"
        className="absolute left-0 top-0 right-0 bottom-0 gap-[0px] z-[1] shrink-[0] opacity-[0.1]"
      >
        <div
          aria-label="texture"
          className="absolute left-0 top-0 right-0 bottom-0"
        >
          <div className="absolute left-0 top-0 right-0 bottom-0">
            <img
              src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fec5a86420a6baa2fa0ca5c8585412548d70651c1.png%3Fwidth=2000&amp;height=2000?generation=1771443083894503&amp;alt=media"
              className="block size-full overflow-clip aspect-[auto_2000/2000]"
            />
          </div>
        </div>
      </div>
      <div
        aria-label="Globe"
        className="items-center flex size-min justify-center overflow-clip relative gap-[10px] p-[10px] shrink-[0] rounded-2xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(54,54,54)] after:content-[''] after:rounded-2xl bg-[linear-gradient(211.476deg,rgb(0,0,0)_2.29918%,rgb(0,36,66)_41.6414%,rgb(4,12,122)_57.3615%,rgb(68,13,140)_76.464%,rgba(23,23,23,0.95)_100%)]"
      >
        <div className="relative w-12 h-12 rotate-[76.0644deg] shrink-[0]">
          <div
            aria-label="Variant 1"
            className="size-full overflow-hidden relative shadow-[rgb(0,234,255)_3.41px_-2.14px_16px_0px_inset,_rgb(38,0,255)_-3px_2.61px_16px_0px_inset,_rgba(255,255,255,0.88)_-15.91px_1.72px_161px_0px_inset,_rgb(255,255,255)_15.08px_-1.28px_11px_0px_inset,_rgba(11,0,77,0.13)_0px_0px_0px_-1.25px,_rgba(11,0,77,0.13)_0px_0px_0px_-2.5px,_rgba(0,0,0,0.25)_0px_0px_32px_0px,_rgba(0,0,0,0.25)_0px_0px_64px_0px,_rgb(30,0,179)_0px_0px_62px_0px] rounded-[34.541875rem] bg-[linear-gradient(rgb(107,134,255)_0%,rgb(0,123,255)_48.4832%,rgb(0,47,255)_100%)]"
          >
            <div
              aria-label="Blur"
              className="absolute left-[-20px] right-[-14px] bottom-[-13px] aspect-[1.15385/1]"
            >
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <img
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9f676721f71c6a8a84b5dcea0885eb38746ba3a4.png%3Fwidth=360&amp;height=312?generation=1771443083880491&amp;alt=media"
                  className="block size-full object-cover overflow-clip aspect-[auto_360/312]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-label="Text"
        className="items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[8px] shrink-[0]"
      >
        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
          <h3 className="text-left text-white text-[24px] tracking-[-0.48px] leading-[31.2px] font-sans decoration-white">
            {benefit.title}
          </h3>
        </div>
        <div className="flex flex-col justify-start relative w-full shrink-[0]">
          <p className="text-[#929292] text-[16px] tracking-[-0.64px] leading-[19.2px] font-sans decoration-[#929292]">
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
    aria-label="CTA Question"
    className="items-center flex flex-col h-min justify-center overflow-clip relative w-full gap-[10px] pt-0 md:pr-[250px] pb-0 md:pl-[250px] px-0 shrink-[0]"
  >
    <div className="contents">
      <div className="relative w-full">
        <div
          aria-label="Variant 2"
          className="items-center flex h-min justify-center overflow-hidden relative w-full bg-[#0f0f0f] gap-[16px] p-2 rounded-[1.375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[#222222] after:content-[''] after:rounded-[1.375rem]"
        >
          <div
            aria-label="Text"
            className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[4px] pt-0 pr-0 pb-0 pl-2 z-[1] shrink-[0]"
          >
            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
              <p className="text-left text-white text-[18px] tracking-[-0.9px] leading-[19.8px] font-sans decoration-white">
                Are you ready?
              </p>
            </div>
          </div>
          <div
            aria-label="noise"
            className="absolute left-[-2px] top-[-319px] right-[-2px] bottom-[-201px] gap-[0px] shrink-[0] opacity-[0.06]"
          >
            <div
              aria-label="texture"
              className="absolute left-0 top-0 right-0 bottom-0"
            >
              <div className="absolute left-0 top-0 right-0 bottom-0">
                <img
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fec5a86420a6baa2fa0ca5c8585412548d70651c1.png%3Fwidth=2000&amp;height=2000?generation=1771443083894503&amp;alt=media"
                  className="block size-full overflow-clip aspect-[auto_2000/2000]"
                />
              </div>
            </div>
          </div>
          <div className="relative shrink-[0]">
            <a
              href="https://framer.link/RmHInmd"
              aria-label="Desktop/primary"
              className="items-center flex size-min justify-center overflow-hidden relative shadow-[rgba(126,33,255,0.72)_0px_0.602187px_1.08394px_-1.25px,_rgba(126,33,255,0.64)_0px_2.28853px_4.11936px_-2.5px,_rgba(126,33,255,0.25)_0px_10px_18px_-3.75px,_rgba(0,187,255,0.5)_0px_-0.716573px_1.0032px_-0.625px_inset,_rgba(0,187,255,0.5)_0px_-2.17306px_3.04228px_-1.25px_inset,_rgba(0,187,255,0.5)_0px_-5.74439px_8.04214px_-1.875px_inset,_rgba(0,187,255,0.5)_0px_-18px_25.2px_-2.5px_inset,_rgb(67,0,191)_0px_1.71px_8px_0px_inset,_rgb(20,0,82)_0px_0px_31px_1.87px_inset,_rgba(4,0,61,0.38)_0px_0.777251px_0.777251px_-0.583333px,_rgba(4,0,61,0.37)_0px_1.98722px_1.98722px_-1.16667px,_rgba(4,0,61,0.36)_0px_3.98394px_3.98394px_-1.75px,_rgba(4,0,61,0.33)_0px_7.55216px_7.55216px_-2.33333px,_rgba(4,0,61,0.28)_0px_15.0114px_15.0114px_-2.91667px,_rgba(4,0,61,0.17)_0px_33px_33px_-3.5px] text-[#0000ee] gap-[8px] pt-3 pr-3 pb-3 pl-5 rounded-[0.9775rem] bg-[linear-gradient(rgb(79,43,255)_0%,rgb(78,33,255)_17.436%,rgb(51,0,255)_46.6938%,rgb(42,0,212)_83.7363%,rgb(42,0,212)_99.6235%)] decoration-[#0000ee]"
            >
              <div className="flex flex-col justify-start relative whitespace-pre z-[10] shrink-[0]">
                <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px] font-sans decoration-white">
                  Get Started
                </p>
              </div>
              <div
                aria-label="Arrow"
                className="aspect-square overflow-clip relative w-5 bg-[rgba(38,38,38,0.44)] shrink-[0] rounded-md"
              >
                <div
                  aria-label="right arrow alt"
                  className="aspect-square absolute w-[18px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                >
                  <div className="items-center flex size-full justify-center max-h-full max-w-full">
                    <div className="size-full overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7864961deed91e384cb1663d7420e822e59fc4f1.svg?generation=1771443083880465&amp;alt=media"
                        className="block size-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Benefits2 = () => {
  return (
    <div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        aria-label="Benefits-2"
        className="items-center flex h-min justify-center relative w-full gap-[0px] px-4 py-16 md:p-[100px] shrink-[0]"
      >
        <div
          aria-label="content"
          className="items-center flex flex-col grow h-min justify-center relative w-full gap-[44px] max-w-[1000px] z-[1] shrink-[0]"
        >
          <div className="contents">
            <SectionHeader />
          </div>
          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-label="Grid+CTA"
            className="items-center flex flex-col h-min justify-center relative w-full gap-[44px] shrink-[0]"
          >
            <div
              aria-label="Benefit Cards"
              className="grid h-min justify-center relative w-full grid-cols-1 md:grid-cols-2 gap-[8px] shrink-[0]"
            >
              {benefitsData.map((benefit, index) => (
                <div key={index} className="contents">
                  <BenefitCard benefit={benefit} />
                </div>
              ))}
            </div>
            <CTABlock />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Benefits2;