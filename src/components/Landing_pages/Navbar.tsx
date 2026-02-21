'use client';
import React, { useState } from 'react';
import { NAV_LINKS } from '../../data/globalData';
import { LOGO_BLUR_IMG } from '../../data/globalData';
import Globe from '../Globe';



const NavLogo = () => (
  <a href="/" aria-label="Home" className="logo-container">
    <Globe variant="badge" degrees={40} duration={5} className="scale-140 " />
    <div className="flex flex-col justify-start relative shrink-0">
      <p className="text-white/90 pl-2text-[17px] tracking-[-0.51px] leading-[17px] font-geist">
        <span className="font-medium">CallClarity</span>
      </p>
    </div>
  </a>
);


const DesktopLinks = () => (
  <div className="items-center hidden md:flex size-min justify-center overflow-hidden relative gap-7 shrink-0">
    {NAV_LINKS.map(({ label, href }) => (
      <div key={label} className="nav-link-container">
        <a href={href} className="nav-link">
          <div className="flex flex-col justify-start relative shrink-0">
            <p className="nav-link-text">{label}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
);



const HamburgerIcon = ({ open, onClick }: { open: boolean; onClick: () => void }) => (
  <button
    aria-label={open ? 'Close menu' : 'Open menu'}
    onClick={onClick}
    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0 focus:outline-none"
  >
    {open ? (
    
      <span className="text-white text-2xl leading-none font-light select-none">✕</span>
    ) : (
 
      <>
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
      </>
    )}
  </button>
);



const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col px-6 pt-5 pb-10 md:hidden">
    
      <div className="flex items-center justify-between mb-10">
        <NavLogo />
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="text-white text-xl w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          ✕
        </button>
      </div>

   
      <nav className="flex flex-col gap-[0px]">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={onClose}
            className="text-white text-[28px] tracking-[-0.5px] leading-[1.2] font-inter py-4
              border-b border-white/[0.06] last:border-0 opacity-90 hover:opacity-100 transition-opacity"
          >
            {label}
          </a>
        ))}
      </nav>

    
      <div className="mt-auto">
        <a
          href="#"
          onClick={onClose}
          className="btn-signin flex items-center justify-center w-full py-3 rounded-2xl"
        >
          <p className="nav-link-text">Sign In</p>
        </a>
      </div>
    </div>
  );
};



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
  
      <div className="fixed left-0 top-0 right-0 z-50 shrink-0 order-first">
        <nav aria-label="Main Navigation" className="nav-container">
          <div aria-label="Content" className="nav-content">

         
            <div className="items-center flex size-min justify-center relative gap-[10px] shrink-0">
              <div className="relative shrink-0">
                <NavLogo />
              </div>
            </div>

            <DesktopLinks />

       
            <div className="relative shrink-0 hidden md:block">
              <a href="/" aria-label="Sign In" className="btn-signin">
                <div className="flex flex-col justify-start relative z-10 shrink-0">
                  <p className="nav-link-text">Sign In</p>
                </div>
              </a>
            </div>

           
            <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
          </div>
        </nav>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;