"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PRICING_ORB_IMG,
  PRICING_BADGE_TEXT,
  PRICING_HEADING,
  PRICING_SUBTITLE,
  PRICING_CTA_QUESTION,
  PRICING_CTA_BUTTON_TEXT,
  PRICING_CTA_BUTTON_HREF,
  PRICING_PLANS,
  type PricingPlan,
} from "../../data/globalData";



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};



const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-white shrink-0 mt-0.5"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowForwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3.5 h-3.5 mt-[1px]"
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);


const OrbIcon = ({ size = 24 }: { size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    <img
      src={PRICING_ORB_IMG}
      alt=""
      className="object-cover"
      style={{
        width: "100%",
        height: "100%",
        transform: "scale(3.35)",
        transformOrigin: "center center",
      }}
    />
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5 text-[13px] text-white font-medium">
    <CheckIcon />
    {text}
  </li>
);

const PricingCard = ({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const periodLabel = isYearly ? "Yearly Subscription" : plan.subscriptionLabel;

  // Pro Plan Styling
  if (plan.isPro) {
    return (
      <div className="relative flex flex-col p-5 rounded-2xl bg-[#0f0f11] border border-blue-900/30 overflow-hidden shadow-2xl h-full">
        {/* Blue background gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-70"></div>
        {/* Bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-48 pro-glow-bottom pointer-events-none" />

        <div className="mb-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1f] border border-white/10 mb-3">
            <OrbIcon size={20} />
            <span className="text-xs font-medium text-white font-inter">
              {plan.name}
            </span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl leading-none font-medium text-white font-inter">
              {price}
            </span>
          </div>
          <p className="text-[13px] text-gray-300 mt-1 font-medium font-inter">
            {periodLabel}
          </p>
        </div>

        {/* Blue gradient button for Pro */}
        <button className="relative z-10 w-full py-2.5 rounded-xl btn-gradient text-white font-medium hover:opacity-90 transition-all mb-5 flex items-center justify-center gap-1.5 text-sm cursor-pointer font-inter shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          {plan.buttonText}
          <ArrowForwardIcon />
        </button>

        <ul className="space-y-2 flex-1 relative z-10">
          {plan.features.map((feature) => (
            <FeatureItem key={feature} text={feature} />
          ))}
        </ul>
        <div className="mt-5 pt-0 relative z-10">
          <p className="text-[11px] text-[#6b7280] font-medium font-inter">
            {plan.bottomText}
          </p>
        </div>
      </div>
    );
  }

  // Basic / Team Plan Styling
  return (
    <div className="group relative flex flex-col p-5 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] transition-all duration-300 h-full">
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#161616] border border-white/5 mb-3">
          <OrbIcon size={20} />
          <span className="text-xs font-medium text-gray-200 font-inter">
            {plan.name}
          </span>
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-3xl leading-none font-medium text-white font-inter">
            {price}
          </span>
        </div>
        <p className="text-[13px] text-gray-400 mt-1 font-medium font-inter">
          {periodLabel}
        </p>
      </div>
      <button className="w-full py-2.5 rounded-xl border border-white/10 bg-[#121212] text-white font-medium hover:bg-white/5 transition-colors mb-5 text-sm cursor-pointer font-inter">
        {plan.buttonText}
      </button>
      <ul className="space-y-2 flex-1">
        {plan.features.map((feature) => (
          <FeatureItem key={feature} text={feature} />
        ))}
      </ul>
      <div className="mt-5 pt-0">
        <p className="text-[11px] text-[#525252] font-medium font-inter">
          {plan.bottomText}
        </p>
      </div>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────────────── */

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="text-white font-inter w-full flex flex-col items-center px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-white/10 mb-3"
        >
          <OrbIcon size={18} />
          <span className="text-16px font-medium text-gray-300 font-inter">
            {PRICING_BADGE_TEXT}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-medium tracking-tight mb-3 text-white leading-[1.1] whitespace-pre-wrap"
        >
          {PRICING_HEADING}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-text-secondary text-sm md:text-base max-w-lg mx-auto mb-6 font-normal whitespace-pre-wrap"
        >
          {PRICING_SUBTITLE}
        </motion.p>

        {/* Monthly / Yearly Toggle */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center p-1 rounded-full bg-[#121212] border border-white/10 relative mb-8"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer font-inter ${!isYearly
                ? "text-white btn-gradient shadow-lg relative z-10"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer font-inter ${isYearly
                ? "text-white btn-gradient shadow-lg relative z-10"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Yearly
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10"
      >
        {PRICING_PLANS.map((plan) => (
          <motion.div key={plan.name} variants={fadeInUp} className="h-full">
            <PricingCard plan={plan} isYearly={isYearly} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Question */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md mx-auto mb-8 px-4"
      >
        <div className="flex items-center justify-between p-1.5 pl-5 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f]">
          <span className="text-sm font-medium text-white font-inter">
            {PRICING_CTA_QUESTION}
          </span>
          <a
            href={PRICING_CTA_BUTTON_HREF}
            className="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#1a1a1a] text-white hover:bg-[#252525] transition-colors border border-white/5 font-inter no-underline"
          >
            {PRICING_CTA_BUTTON_TEXT}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingPlans;