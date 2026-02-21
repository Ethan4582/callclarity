import React from 'react';
import {
  FOOTER_GRADIENT_IMG,
  LOGO_BLUR_IMG,
  ARROW_RIGHT_ICON,
  FOOTER_NAV_LINKS,
  FOOTER_PAGE_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '../../data/globalData';


interface LinkItem {
  label: string;
  href: string;
}


const FooterLogo = () => (
  <a
    href="/"
    aria-label="CallClarity Home"
    className="items-center flex size-min justify-center overflow-hidden relative bg-white/[0.15] gap-[6.87px] pt-[6.87px] pr-[13.75px] pb-[6.87px] pl-[6.87px] rounded-[1.718125rem]"
  >
  
    <div
      className="aspect-square overflow-hidden relative w-[27px] z-[5] shrink-0 rounded-[0.859375rem]"
      style={{
        backgroundImage: 'linear-gradient(rgb(107, 134, 255) 0%, rgb(0, 123, 255) 48.4832%, rgb(0, 47, 255) 100%)',
        boxShadow:
          'rgb(0,234,255) 1.96px -1.22px 16px 0px inset, rgb(38,0,255) -1.72px 1.48px 16px 0px inset, rgba(255,255,255,0.88) -9.09px 0.98px 161px 0px inset, rgb(255,255,255) 8.59px -0.74px 11px 0px inset, rgba(0,0,0,0.25) 0px 3.94px 32px 0px, rgba(0,0,0,0.25) 0px 7.85px 64px 0px',
      }}
    >
      <div className="absolute left-[-13px] right-[-9px] bottom-[-8px] aspect-[1.15385/1]">
        <div className="absolute inset-0">
          <img src={LOGO_BLUR_IMG} className="block size-full object-cover overflow-clip" alt="" />
        </div>
      </div>
    </div>


    <p className="text-white/90 text-[17px] tracking-[-0.51px] leading-[17px] font-geist whitespace-pre">
      <span className="font-medium">CallClarity</span>
    </p>
  </a>
);


const FooterCTA = ({ fullWidth }: { fullWidth?: boolean }) => (
  <a
    href="#"
    aria-label="Book a Demo"
    className={[
      'items-center flex justify-center overflow-hidden relative gap-[8px] pt-3 pr-3 pb-3 pl-5 rounded-[0.9775rem]',
      fullWidth ? 'w-full' : 'size-min',
    ].join(' ')}
    style={{
      backgroundImage:
        'linear-gradient(rgb(79, 43, 255) 0%, rgb(78, 33, 255) 17.436%, rgb(51, 0, 255) 46.6938%, rgb(42, 0, 212) 83.7363%, rgb(42, 0, 212) 99.6235%)',
      boxShadow:
        'rgba(126,33,255,0.72) 0px 0.602187px 1.08394px -1.25px, rgba(126,33,255,0.64) 0px 2.28853px 4.11936px -2.5px, rgba(126,33,255,0.25) 0px 10px 18px -3.75px, rgba(0,187,255,0.5) 0px -0.716573px 1.0032px -0.625px inset, rgba(0,187,255,0.5) 0px -18px 25.2px -2.5px inset, rgb(67,0,191) 0px 1.71px 8px 0px inset, rgb(20,0,82) 0px 0px 31px 1.87px inset',
    }}
  >
    <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter whitespace-pre z-[10] shrink-0">
      Book a Demo
    </p>
   
    <div className="aspect-square overflow-clip relative w-5 bg-white/10 shrink-0 rounded-md">
      <div className="aspect-square absolute w-[18px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="items-center flex size-full justify-center">
          <div className="size-full overflow-hidden">
            <img src={ARROW_RIGHT_ICON} className="block size-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  </a>
);


const FooterLink = ({ label, href }: LinkItem) => (
  <a
    href={href}
    className="items-center flex size-min justify-start overflow-hidden relative gap-[10px] opacity-80"
  >
    <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter whitespace-pre">
      {label}
    </p>
  </a>
);


const FooterLinkColumn = ({ title, links }: { title: string; links: LinkItem[] }) => (
  <div className="items-start flex flex-col h-min justify-start relative gap-[16px] shrink-0 w-full md:w-[165px]">
    <p className="text-white text-[20px] tracking-[-1px] leading-[20px] font-inter whitespace-pre">
      {title}
    </p>
    <div className="items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[12px] shrink-0">
      <div className="items-start flex flex-col size-min justify-center overflow-hidden relative gap-[14px] shrink-0">
        {links.map((link) => (
          <FooterLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  </div>
);


const FooterLegal = () => (
  <div
    className="items-start flex h-min justify-between relative w-full pt-5 pb-5 shrink-0
      after:border-t after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white/[0.04] after:content-['']"
  >
    <p className="text-[rgb(146,146,146)] text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter whitespace-pre shrink-0">
      CallClarity. All rights reserved. © 2025
    </p>
    <div />
  </div>
);


const Footer = () => (
  <div>
   
    <div className="grow relative w-0 h-0" />

    <div aria-label="Footer" className="items-center flex flex-col h-min justify-center relative w-full gap-0 shrink-0" style={{ order: 1002 }}>
  
      <div className="absolute h-[1350px] left-0 right-0 bottom-0 shrink-0 opacity-40">
        <div className="size-full overflow-hidden">
          <img src={FOOTER_GRADIENT_IMG} className="block size-full" alt="" />
        </div>
      </div>

      <div className="relative w-full z-[1] shrink-0">
        <footer
          aria-label="Desktop"
          className="items-center flex flex-col h-min justify-start overflow-hidden relative w-full gap-0 pt-11 px-6 md:px-11 pb-6"
        >
          <div className="items-center flex flex-col h-min justify-start relative w-full gap-0 max-w-[1400px] shrink-0">
            <div className="items-center flex flex-col h-min justify-start relative w-full gap-[80px] shrink-0">

            
              <div className="flex md:hidden flex-col w-full gap-[28px]">
             
                <div className="flex flex-col gap-[16px]">
                  <FooterLogo />
                  <p className="text-[rgb(146,146,146)] text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter">
                    AI-powered call analysis that ensures SOP compliance, detects risks, and automates QA across 100% of your calls.
                  </p>
                </div>

               
                <FooterCTA fullWidth />

              
                <div className="flex flex-col gap-[32px] w-full">
                  <FooterLinkColumn title="Navigation" links={FOOTER_NAV_LINKS} />
                  <FooterLinkColumn title="Pages" links={FOOTER_PAGE_LINKS} />
                  <FooterLinkColumn title="Socials" links={FOOTER_SOCIAL_LINKS} />
                </div>
              </div>

             
              <div className="hidden md:flex items-start h-min justify-start relative w-full gap-[100px] shrink-0">
              
                <div className="items-start flex flex-col grow h-min justify-start relative w-px basis-0 gap-[24px] shrink-0">
                  <div className="items-start flex flex-col h-min justify-center relative w-full gap-[16px] shrink-0">
                    <FooterLogo />
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full max-w-[45%] shrink-0">
                      <p className="text-[rgb(146,146,146)] text-[16px] tracking-[-0.64px] leading-[19.2px] font-inter">
                        AI-powered call analysis that ensures SOP compliance, detects risks, and automates QA across 100% of your calls.
                      </p>
                    </div>
                  </div>
                  <FooterCTA />
                </div>

            
                <div className="items-start flex grow h-min justify-end relative w-px basis-0 gap-[10px] shrink-0">
                  <FooterLinkColumn title="Navigation" links={FOOTER_NAV_LINKS} />
                  <FooterLinkColumn title="Pages" links={FOOTER_PAGE_LINKS} />
                  <FooterLinkColumn title="Socials" links={FOOTER_SOCIAL_LINKS} />
                </div>
              </div>

            
              <FooterLegal />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default Footer;