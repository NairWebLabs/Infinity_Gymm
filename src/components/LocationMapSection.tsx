import React, { useState } from 'react';
import { GYM_CONTACT } from '../data/gymData';
import { MapPin, Navigation, Phone, MessageSquare, Copy, Check, Clock, Shield, Compass, Sparkles } from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState<'standard' | 'directions'>('standard');

  const copyAddress = () => {
    navigator.clipboard.writeText(GYM_CONTACT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${GYM_CONTACT.whatsapp}?text=Hello%20Infinity%20Fitness%2C%20I%20would%20like%20to%20visit%20the%20gym%20at%20Centrum%20Heights%20and%20claim%20my%20trial%20pass.`;

  return (
    <section id="location" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Prime Location & Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Easy To Reach. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Centrum Heights, Ahmedabad.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Situated on Chandlodiya Road in Swatantra Senani Nagar, directly accessible from Vadaj, Akhbar Nagar, and Naranpura.
          </p>
        </div>

        {/* Map Container with Modern Effects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact & Landmark Specs Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-7 sm:p-8 border border-slate-700/60 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-6">
                <Clock className="w-3.5 h-3.5" />
                Open 24 Hours · Every Day
              </div>

              {/* Exact Address */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Facility Address
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-sm text-slate-100 font-medium leading-relaxed mb-3">
                    {GYM_CONTACT.address}
                  </p>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Key Landmark & Parking Notes */}
              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Floor Location:</strong> 2nd Floor, Centrum Heights with high-speed elevator access.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Dedicated Parking:</strong> Ample two-wheeler & four-wheeler basement/premises parking available.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white">Nearby Hubs:</strong> Akhbar Nagar Circle, Vadaj Terminus, Naranpura Cross Roads.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <a
                href={GYM_CONTACT.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Start Google Navigation
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-950/60 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Us
                </a>

                <a
                  href={`tel:${GYM_CONTACT.phone}`}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {GYM_CONTACT.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Modern Styled Interactive Map Viewport */}
          <div className="lg:col-span-7 glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl relative min-h-[420px] flex flex-col">
            {/* Top map control bar */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-white">Live Facility Location</span>
                <span className="text-slate-500 hidden sm:inline">· 23.0664° N, 72.5451° E</span>
              </div>
              <a
                href={GYM_CONTACT.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
              >
                <span>View Full Map</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative flex-1 w-full min-h-[380px] bg-slate-950">
              <iframe
                title="Infinity Fitness Gym Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8354922648833!2d72.5451249758784!3d23.066465014682057!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x395e8484931a238b%3A0xc3f5e921b790d931!2sInfinity%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1740000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.9]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto glass-panel p-3 rounded-xl border border-white/10 shadow-lg text-xs max-w-sm pointer-events-none">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Infinity Fitness Gym
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  2nd Floor, Centrum Heights, Chandlodiya Road
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
