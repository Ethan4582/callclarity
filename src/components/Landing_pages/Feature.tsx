'use client'
import React from 'react';
import { FEATURE_CARDS } from '../../data/globalData';
import FeatureHeader from '../Feature/FeatureHeader';
import FeatureCard from '../Feature/FeatureCard';
import FeatureCTA from '../Feature/FeatureCTA';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

const Feature = () => {
  return (
    <section id="features" aria-label="Features" className="flex flex-col items-center justify-center relative w-full gap-[44px] p-5 py-16 md:p-[100px] overflow-hidden">
  
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex justify-center"
      >
        <FeatureHeader />
      </motion.div>

    
      <div className="flex flex-col items-center justify-center w-full gap-[44px] max-w-[1000px] z-[1]">
     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 w-full">
          {FEATURE_CARDS.map((card: any, index: number) => (
            <motion.div
              key={card.id}
              variants={fadeWithDelay(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full flex"
            >
              <FeatureCard
                id={card.id}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>

      
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full relative z-[10]"
        >
          <FeatureCTA />
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;