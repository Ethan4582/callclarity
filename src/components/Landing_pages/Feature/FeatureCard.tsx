import React from 'react';
import { NOISE_TEXTURE } from '../../../data/globalData';
import { CollaborationIllustration, CustomizationIllustration, SiriIllustration } from './FeatureIllustrations';

interface FeatureCardProps {
   title: string;
   description: string;
   id: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, id }) => {
   const renderIllustration = () => {
      switch (id) {
         case 'collaboration':
            return <CollaborationIllustration />;
         case 'customization':
            return <CustomizationIllustration />;
         case 'siri':
            return <SiriIllustration />;
         default:
            return null;
      }
   };

   return (
      <div className="flex flex-col justify-end w-full h-[400px] bg-[#26262670] p-7 rounded-3xl relative overflow-hidden border border-black/25 after:absolute after:inset-0 after:border after:border-black/25 after:rounded-3xl after:pointer-events-none self-start">
         {/* Noise Texture */}
         <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
            <img src={NOISE_TEXTURE} alt="" className="w-full h-full object-cover" />
         </div>

         {/* Illustration Area */}
         <div className="relative grow basis-0 w-full mb-2.5">
            {renderIllustration()}
         </div>

         {/* Text Content */}
         <div className="flex flex-col w-full gap-2 relative z-[2]">
            <h3 className="text-white text-xl tracking-tighter leading-5 font-inter">
               {title}
            </h3>
            <p className="text-[#929292] text-base tracking-tight leading-[19.2px] font-inter">
               {description}
            </p>
         </div>
      </div>
   );
};

export default FeatureCard;
