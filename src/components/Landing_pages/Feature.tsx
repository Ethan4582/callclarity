import React from 'react';
import { FEATURE_CARDS } from '../../data/globalData';
import FeatureHeader from '../Feature/FeatureHeader';
import FeatureCard from '../Feature/FeatureCard';
import FeatureCTA from '../Feature/FeatureCTA';

const Feature = () => {
  return (
    <section id="features" aria-label="Features" className="flex flex-col items-center justify-center relative w-full gap-[44px] p-[100px]">
      {/* Header Section */}
      <FeatureHeader />

      {/* Grid + CTA Section */}
      <div className="flex flex-col items-center justify-center w-full gap-[44px] max-w-[1000px] z-[1]">
        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {FEATURE_CARDS.map((card: any) => (
            <FeatureCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <FeatureCTA />
      </div>
    </section>
  );
};

export default Feature;