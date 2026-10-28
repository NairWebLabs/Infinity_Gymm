import React, { useState } from 'react';
import { Menu, X, Dumbbell, Clock, Phone, MapPin } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface NavbarProps {
  onOpenPassModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080b11]/85 backdrop-blur-xl transition-all duration-300">
      {/* Top micro banner for 24/7 status and location */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-xs text-slate-400 border-b border-slate-800/40 bg-black/30">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            Open 24 Hours / 7 Days
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            Centrum Heights, Chandlodiya, Ahmedabad
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${GYM_CONTACT.phone}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            {GYM_CONTACT.phoneFormatted}
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            ★ {GYM_CONTACT.googleRating}
            <span className="text-slate-400 font-normal">({GYM_CONTACT.googleReviewCount} Google reviews)</span>
          </span>
        </div>
      </div>

      {/* Main Top Bar following Top Bar Contract: 3 Zones */}
      <div className="flex items-center justify-between gap-8 px-6 lg:px-8 py-3.5 max-w-7xl mx-auto">
        {/* Zone 1: Brand Wordmark element */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#0b101b] rounded-[7px] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-['Outfit'] flex items-center gap-1.5 leading-none">
              INFINITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FITNESS</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium font-sans mt-0.5">
              The Only Way To Fit
            </span>
          </div>
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#services" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#amenities" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Facilities
          </a>
          <a href="#crowd-meter" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Live Hours
          </a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Reviews
          </a>
          <a href="#location" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Location
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPassModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-wider font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-300 hover:to-blue-300 transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            Claim 1-Day VIP Pass
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0b101b]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            About & Introduction
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Services (13 Programs)
          </a>
          <a
            href="#amenities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Facilities & Steam Recovery
          </a>
          <a
            href="#crowd-meter"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Live Popular Times
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Verified Google Reviews (4.8 ★)
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Location & Directions
          </a>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="w-full py-3 text-center text-sm uppercase tracking-wider font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-md"
            >
              Claim 1-Day VIP Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
