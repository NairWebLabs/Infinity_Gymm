import React from 'react';
import { Dumbbell, MapPin, Phone, Clock, MessageSquare, ArrowUp, ExternalLink } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Lockup */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#080b11] rounded-[6px] flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-['Outfit']">
                INFINITY <span className="text-cyan-400">FITNESS</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              Ahmedabad’s premier 24-hour training gym located in Centrum Heights. Combining competition-grade biomechanical equipment, steam bath recovery suites, dedicated creator studio, and certified personal coaches.
            </p>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Open 24/7/365
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-[11px] font-semibold">
                ★ 4.8 / 5.0 (474 Reviews)
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Cinematic Intro
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-cyan-400 transition-colors">
                  Facility Tour & Steam Bath
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  All 13 Training Services
                </a>
              </li>
              <li>
                <a href="#crowd-meter" className="hover:text-cyan-400 transition-colors">
                  Live Popular Times
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Programs */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Popular Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Personal Training (Male & Female)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  12-Week Body Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Strength & Olympic Weightlifting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Zumba & Aerobic Classes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Steam Bath Post-Workout Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Visit Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs">
                  2nd Floor, Centrum Heights, Chandlodiya Rd, Ahmedabad 380013
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${GYM_CONTACT.phone}`} className="hover:text-white transition-colors">
                  {GYM_CONTACT.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${GYM_CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: 096248 82555
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#04060b] py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-[11px]">
            © {new Date().getFullYear()} Infinity Fitness Gym. All rights reserved. Registered Trade Mark.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://infinityfitnessgym.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-[11px]"
            >
              <span>infinityfitnessgym.co.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
