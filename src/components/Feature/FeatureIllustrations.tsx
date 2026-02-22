'use client'
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';
import { LOGO_BLUR_IMG } from '../../data/globalData';
import Globe from "../Globe";

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

         while (mounted) {
            await globeControls.start({
               left: globeTarget1.left,
               top: globeTarget1.top,
               transition: { duration: 1.1, ease: 'easeInOut' as const },
            });

            avatar1Controls.start({ opacity: 1, scale: 1.03 });

            await wait(450);
            avatar1Controls.start({ opacity: 0, scale: 1 });
            await wait(200);

            await globeControls.start({
               left: globeTarget2.left,
               top: globeTarget2.top,
               transition: { duration: 1.3, ease: 'easeInOut' as const },
            });

            avatar2Controls.start({ opacity: 1, scale: 1.03 });
            await wait(450);
            avatar2Controls.start({ opacity: 0, scale: 1 });
            await wait(200);

            await globeControls.start({
               left: initialLeft,
               top: initialTop,
               transition: { duration: 1.0, ease: 'easeInOut' as const },
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

function easeInOut(t: number) {
   return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const TRAVEL_DURATION = 600;
const WAIT_DURATION = 900;

export const CustomizationIllustration = () => {
   const [progress, setProgress] = useState(0);
   const [direction, setDirection] = useState<1 | -1>(1);
   const [waiting, setWaiting] = useState(false);
   const rafRef = useRef<number>(0);
   const startRef = useRef<number | null>(null);
   const stateRef = useRef({ progress: 0, direction: 1 as 1 | -1, waiting: false });

   useEffect(() => {
      let waitTimer: ReturnType<typeof setTimeout>;

      const startWait = () => {
         stateRef.current.waiting = true;
         setWaiting(true);
         waitTimer = setTimeout(() => {
            stateRef.current.direction = stateRef.current.direction === 1 ? -1 : 1;
            stateRef.current.waiting = false;
            setDirection(stateRef.current.direction as 1 | -1);
            setWaiting(false);
            startRef.current = null;
            rafRef.current = requestAnimationFrame(animate);
         }, WAIT_DURATION);
      };

      const animate = (ts: number) => {
         if (stateRef.current.waiting) return;
         if (!startRef.current) startRef.current = ts;
         const elapsed = ts - startRef.current;
         const t = Math.min(elapsed / TRAVEL_DURATION, 1);
         const et = easeInOut(t);

         const p = stateRef.current.direction === 1 ? et : 1 - et;
         stateRef.current.progress = p;
         setProgress(p);

         if (t >= 1) {
            startWait();
            return;
         }
         rafRef.current = requestAnimationFrame(animate);
      };

      rafRef.current = requestAnimationFrame(animate);
      return () => {
         cancelAnimationFrame(rafRef.current!);
         clearTimeout(waitTimer);
      };
   }, []);

   const translateX = progress * 24;
   const textOpacity = 0.34 + progress * 0.66;
   const trackOpacity = progress;

   const toggles = [
      { label: "Smart Variations", active: true },
      { label: "Style Recommendations", active: true },
      { label: "Dynamic Personalization", active: "animated" as const },
   ];

   return (
      <div style={{
         position: "relative", width: "100%", height: 268,
         display: "flex", flexDirection: "column", alignItems: "center",
         justifyContent: "center", gap: 12,
      }}>
         <div style={{ position: "absolute", inset: 0, top: -25, bottom: -26, opacity: 0.55, zIndex: 0 }}>
         </div>

         <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
            {toggles.map((toggle, i) => {
               const isAnimated = toggle.active === "animated";
               const isOn = toggle.active === true;
               const currentProgress = isAnimated ? progress : (isOn ? 1 : 0);

               return (
                  <div key={i} style={{
                     display: "flex", alignItems: "center",
                     background: "rgba(23,22,31,0.85)",
                     backdropFilter: "blur(2px)",
                     gap: 12, padding: "5px 16px 5px 5px",
                     borderRadius: 999,
                     border: "1px solid rgba(255,255,255,0.10)",
                     opacity: 1,
                     flexShrink: 0,
                  }}>
                     <div style={{
                        width: 54, height: 30, borderRadius: 999,
                        display: "flex", alignItems: "center",
                        padding: 3,
                        border: "1px solid #424242",
                        position: "relative",
                        justifyContent: "flex-start",
                        background: `linear-gradient(135deg, rgba(11,11,26,0.9) 0%, rgba(26,26,58,${0.5 + currentProgress * 0.5}) 100%)`,
                     }}>
                        <div style={{
                           width: 24, height: 24, borderRadius: "50%",
                           flexShrink: 0,
                           position: "relative",
                           zIndex: 5,
                           transform: `translateX(${isAnimated ? translateX : (isOn ? 24 : 0)}px)`,
                           willChange: "transform",
                           overflow: "hidden",
                           background: isOn || isAnimated
                              ? undefined
                              : "linear-gradient(to bottom, #444, #222)",
                        }}
                           className={isOn || isAnimated ? "shadow-globe-testimonial bg-globe-gradient" : ""}
                        >
                           {(isOn || isAnimated) && (
                              <div className="absolute -left-[12px] -right-[10px] -bottom-[11px] aspect-[1.15385/1]">
                                 <img src={LOGO_BLUR_IMG} alt="Globe blur" className="w-full h-full object-cover" />
                              </div>
                           )}
                        </div>
                     </div>

                     <p style={{
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        margin: 0,
                        color: isAnimated
                           ? `rgba(255,255,255,${textOpacity})`
                           : isOn
                              ? "#fff"
                              : "rgba(255,255,255,0.34)",
                        transition: "color 0.2s ease",
                        whiteSpace: "nowrap",
                     }}>
                        {toggle.label}
                     </p>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export const SiriIllustration = () => (
   <div className="relative w-full h-full grow basis-0">
      <div className="absolute inset-x-[-32px] inset-y-[-26px] rotate-180 opacity-55">
         <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbbef72c68688c2cee6f89ac2a541d8062e082f28.svg?generation=1771443656567992&alt=media" alt="" className="w-full h-full" />
      </div>

      <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-[1]">
         <div className="flex items-center self-stretch bg-siri-input p-2 pr-[14px] pl-[10px] rounded-xl border border-white/10 backdrop-blur-[2px]">
            <p className="text-white text-[17px] tracking-tight leading-[22px]">Ask Callclarity...</p>
         </div>
         <div className="w-[206px] bg-[#17161f] p-[11px] rounded-[0.875rem] border border-white/10 backdrop-blur-[2px]">
            <p className="text-[#999999] tracking-tight leading-[15.6px] text-sm">
               I'm here to help with anything you need. Whether it's answering questions, organizing tasks, or just having a chat, feel free to ask. I'm ready to assist!
            </p>
         </div>
      </div>

      <motion.div
         className="absolute w-[45px] aspect-square left-1/2 -translate-x-1/2 bottom-[26px] rounded-full z-[1] rotate-[101deg] shadow-globe-testimonial bg-globe-gradient flex items-center justify-center p-0 m-0"
         animate={{
            scale: [0.7, 1.15, 0.7],
            filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"],
         }}
         transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
         }}
      >
         <div className="absolute w-[180px] h-[180px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full pointer-events-none flex items-center justify-center">
            <Globe degrees={320} duration={1} />
         </div>
      </motion.div>
   </div>
);
