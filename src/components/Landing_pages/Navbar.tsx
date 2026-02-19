'use client';
import React, { useState } from 'react';
import { NAV_LINKS } from '../../data/globalData';
import { LOGO_BLUR_IMG } from '../../data/globalData';

// ─── Logo ─────────────────────────────────────────────────────────────────────

const NavLogo = () => (
  <a href="/" aria-label="Home" className="logo-container">
    <div aria-label="Globe" className="globe-icon">
      <div className="absolute left-[-13px] right-[-9px] bottom-[-8px] aspect-[1.15385/1]">
        <div className="absolute inset-0">
          <img
            src={LOGO_BLUR_IMG}
            className="block size-full object-cover overflow-clip"
            alt="Globe Blur"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start relative shrink-0">
      <p className="text-white/90 text-[17px] tracking-[-0.51px] leading-[17px] font-geist">
        <span className="font-medium">CallClarity</span>
      </p>
    </div>
  </a>
);

// ─── Desktop nav links ────────────────────────────────────────────────────────

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

// ─── Hamburger icon ───────────────────────────────────────────────────────────

const HamburgerIcon = ({ open, onClick }: { open: boolean; onClick: () => void }) => (
  <button
    aria-label={open ? 'Close menu' : 'Open menu'}
    onClick={onClick}
    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0 focus:outline-none"
  >
    {open ? (
      /* X icon */
      <span className="text-white text-2xl leading-none font-light select-none">✕</span>
    ) : (
      /* Three bars */
      <>
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
        <span className="w-5 h-[1.5px] bg-white rounded-full block" />
      </>
    )}
  </button>
);

// ─── Mobile dropdown ──────────────────────────────────────────────────────────

const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col px-6 pt-5 pb-10 md:hidden">
      {/* Top row: logo left + close right */}
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

      {/* Nav links — left-aligned, large */}
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

      {/* CTA at the bottom */}
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

// ─── Main Navbar ──────────────────────────────────────────────────────────────

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Fixed bar */}
      <div className="fixed left-0 top-0 right-0 z-50 shrink-0 order-first">
        <nav aria-label="Main Navigation" className="nav-container">
          <div aria-label="Content" className="nav-content">

            {/* Logo — always visible */}
            <div className="items-center flex size-min justify-center relative gap-[10px] shrink-0">
              <div className="relative shrink-0">
                <NavLogo />
              </div>
            </div>

            {/* Desktop: center links */}
            <DesktopLinks />

            {/* Desktop: Sign In CTA */}
            <div className="relative shrink-0 hidden md:block">
              <a href="/" aria-label="Sign In" className="btn-signin">
                <div className="flex flex-col justify-start relative z-10 shrink-0">
                  <p className="nav-link-text">Sign In</p>
                </div>
              </a>
            </div>

            {/* Mobile: hamburger trigger */}
            <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
          </div>
        </nav>
      </div>

      {/* Mobile fullscreen menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;