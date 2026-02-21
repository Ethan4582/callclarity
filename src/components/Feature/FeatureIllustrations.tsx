// import React from 'react';
// import { LOGO_BLUR_IMG } from '../../data/globalData';
'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LOGO_BLUR_IMG } from '../../data/globalData';

export const CollaborationIllustration = () => {
 
  const globeControls = useAnimation();
  const avatar1Controls = useAnimation();
  const avatar2Controls = useAnimation();

  
  const containerW = 279; 
  const containerH = 274; 
  const globeW = 54; 
  const avatarW = 85; 


  const globeInitialLeft = 42; 
  const globeInitialTop = 39; 
  const globeInitialTranslateX = 36.5391;
  const globeInitialTranslateY = 36.7982;


  const initialLeft = globeInitialLeft + globeInitialTranslateX;
  const initialTop = globeInitialTop + globeInitialTranslateY;

  
  const avatar1Left = 23;
  const avatar1Top = 22;

 
  const avatar2Left = containerW - 23 - avatarW; 
  const avatar2Top = containerH - 22 - avatarW; 

 
  const avatarCenterOffset = (avatarW - globeW) / 2; 

  const globeTarget1 = {
    left: avatar1Left + avatarCenterOffset, 
    top: avatar1Top + avatarCenterOffset, 
  };

  const globeTarget2 = {
    left: avatar2Left + avatarCenterOffset, 
    top: avatar2Top + avatarCenterOffset,    
  };

  
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    let mounted = true;

    async function runLoop() {
      if (!mounted) return;

      await globeControls.start({
        left: initialLeft,
        top: initialTop,
        transition: { duration: 0 },
      });

      // infinite loop
      while (mounted) {
      
        await globeControls.start({
          left: globeTarget1.left,
          top: globeTarget1.top,
          transition: { duration: 1.1, ease: 'easeInOut' },
        });

     
        avatar1Controls.start({ opacity: 1, scale: 1.03 });
       
        await wait(450);
        avatar1Controls.start({ opacity: 0, scale: 1 });
        await wait(200);

     
        await globeControls.start({
          left: globeTarget2.left,
          top: globeTarget2.top,
          transition: { duration: 1.3, ease: 'easeInOut' },
        });

     
        avatar2Controls.start({ opacity: 1, scale: 1.03 });
        await wait(450);
        avatar2Controls.start({ opacity: 0, scale: 1 });
        await wait(200);

       
        await globeControls.start({
          left: initialLeft,
          top: initialTop,
          transition: { duration: 1.0, ease: 'easeInOut' },
        });

       
        await wait(350);
      }
    }

    runLoop();

    return () => {
      mounted = false;
    };
  }, [
    globeControls,
    avatar1Controls,
    avatar2Controls,
    initialLeft,
    initialTop,
    globeTarget1.left,
    globeTarget1.top,
    globeTarget2.left,
    globeTarget2.top,
  ]);

  return (
    <div className="relative w-full h-full grow basis-0">
      <div className="absolute -inset-[32px] inset-y-[-26px] inset-x-[-32px] rotate-180 opacity-55">
        <img
          src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbbef72c68688c2cee6f89ac2a541d8062e082f28.svg?generation=1771443656567992&alt=media"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute w-[279px] h-[274px] left-1/2 top-[50.0935%] -translate-x-1/2 -translate-y-1/2"
        style={{ position: 'relative' }}
      >
        <div
          className="absolute h-[93px] inset-x-[-9px] top-1/2 -translate-y-1/2 bg-[#17161f] rotate-44 rounded-full border border-[#4545451a] overflow-hidden"
          style={{ left: 0 }}
        />

        <div
          className="absolute w-[223px] h-[222px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 223 222'></svg>")`,
          }}
        />

      
        <motion.div
          className="absolute w-[54px] aspect-square rounded-full z-[1] shadow-globe-testimonial bg-globe-gradient"
         
          animate={globeControls}
          style={{
            left: initialLeft,
            top: initialTop,
            position: 'absolute',
           
            transformOrigin: 'center',
          }}
        >
          <div className="absolute -left-[28px] -right-[23px] -bottom-[24px] aspect-[1.15385/1]">
            <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

       
        <div
          className="absolute w-[85px] aspect-square left-[23px] top-[22px] rounded-full border border-[#2f2e36] z-[1] overflow-hidden bg-profile-gradient-1"
          style={{ position: 'absolute' }}
        >
          <div className="absolute left-1/2 bottom-[-38px] -translate-x-1/2 flex flex-col items-center gap-1">
            <div
              className="w-[42px] h-[42px] bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.157 42.157'><path d='M 21.079 0 C 32.72 0 42.157 9.437 42.157 21.079 C 42.157 32.72 32.72 42.157 21.079 42.157 C 9.437 42.157 0 32.72 0 21.079 C 0 9.437 9.437 0 21.079 0 Z' fill='rgb(230, 230, 230)'></path></svg>")`,
              }}
            />
            <div className="w-20 h-[65px] bg-[#e6e6e6] rounded-t-full" />
          </div>

    
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ opacity: 0, scale: 1 }}
            animate={avatar1Controls}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.18), transparent 50%)',
            }}
            transition={{ duration: 0.35 }}
          />
        </div>

      
        <div
          className="absolute w-[85px] aspect-square right-[23px] bottom-[22px] rounded-full border border-[#2f2e36] z-[1] overflow-hidden bg-profile-gradient-2"
          style={{ position: 'absolute', left: avatar2Left, top: avatar2Top }}
        >
          <div className="absolute left-1/2 bottom-[-38px] -translate-x-1/2 flex flex-col items-center gap-1">
            <div
              className="w-[42px] h-[42px] bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.157 42.157'><path d='M 21.079 0 C 32.72 0 42.157 9.437 42.157 21.079 C 42.157 32.72 32.72 42.157 21.079 42.157 C 9.437 42.157 0 32.72 0 21.079 C 0 9.437 9.437 0 21.079 0 Z' fill='rgb(230, 230, 230)'></path></svg>")`,
              }}
            />
            <div className="w-20 h-[65px] bg-[#e6e6e6] rounded-t-full" />
          </div>

        
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ opacity: 0, scale: 1 }}
            animate={avatar2Controls}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.18), transparent 50%)',
            }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationIllustration;


export const CustomizationIllustration = () => (
   <div className="absolute w-full h-[268px] left-0 top-[40.5%] -translate-y-1/2 z-[1] flex flex-col items-center justify-center gap-2.5">
      <div className="absolute inset-0 top-[-25px] bottom-[-26px] opacity-55 z-[1]">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa31ec80f5c2c1c6b07cab4bf8aba24c71a948713.svg?generation=1771443656579004&alt=media" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 relative z-[1]">
         {/* Toggles */}
         {[
            { label: 'Smart Variations', active: true, opacity: 1, gradient: 'bg-profile-gradient-1' },
            { label: 'Style Recommendations', active: true, opacity: 1, gradient: 'bg-profile-gradient-1' },
            { label: 'Dynamic Personalization', active: false, opacity: 0.65, gradient: '' }
         ].map((toggle, i) => (
            <div key={i} className={`flex items-center bg-[#17161f] backdrop-blur-[2px] gap-2 p-1 pr-3 rounded-full border border-white/10 shrink-0 ${toggle.opacity < 1 ? 'opacity-[0.65]' : ''}`}>
               <div
                  className={`w-[65px] h-7 rounded-full flex items-center p-[3px] border border-[#424242] shadow-inner relative justify-end ${toggle.active ? toggle.gradient : ''}`}
               >
                  <div className={`w-7 aspect-square rounded-full shadow-globe-testimonial z-[5] ${toggle.active ? 'bg-globe-gradient' : 'bg-gradient-to-b from-[#d8ddff] via-[#cfdbff] to-[#cfd1ff]'}`}
                     style={{
                        transform: !toggle.active ? 'translateX(-13px)' : 'none'
                     }}>
                     {toggle.active && (
                        <div className="absolute -inset-x-3.5 -bottom-3 aspect-[1.15385/1]">
                           <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
                        </div>
                     )}
                  </div>
               </div>
               <p className={`text-base tracking-tight leading-tight ${toggle.active ? 'text-white' : 'text-white/34'}`}>
                  {toggle.label}
               </p>
            </div>
         ))}
      </div>
   </div>
);

export const SiriIllustration = () => (
   <div className="relative w-full h-full grow basis-0">
      <div className="absolute inset-x-[-32px] inset-y-[-26px] rotate-180 opacity-55">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbbef72c68688c2cee6f89ac2a541d8062e082f28.svg?generation=1771443656567992&alt=media" alt="" className="w-full h-full" />
      </div>

      <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-[1]">
         <div className="flex items-center self-stretch bg-siri-input p-2 pr-[14px] pl-[10px] rounded-xl border border-white/10 backdrop-blur-[2px]">
            <p className="text-white text-[17px] tracking-tight leading-[22px]">Ask ChatFrame...</p>
         </div>
         <div className="w-[206px] bg-[#17161f] p-[11px] rounded-[0.875rem] border border-white/10 backdrop-blur-[2px]">
            <p className="text-[#999999] tracking-tight leading-[15.6px] text-sm">
               I'm here to help with anything you need. Whether it's answering questions, organizing tasks, or just having a chat, feel free to ask. I'm ready to assist!
            </p>
         </div>
      </div>

      {/* Globe */}
      <div
         className="absolute w-[45px] aspect-square left-1/2 -translate-x-1/2 bottom-[26px] rounded-full z-[1] rotate-[101deg] scale-[1.1] shadow-globe-testimonial bg-globe-gradient"
      >
         <div className="absolute -inset-x-6 -bottom-5 aspect-[1.15385/1] rotate-[102deg] scale-[1.1]">
            <img src={LOGO_BLUR_IMG} alt="" className="w-full h-full object-cover" />
         </div>
      </div>
   </div>
);

