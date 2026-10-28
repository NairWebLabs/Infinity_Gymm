import React, { useState } from 'react';
import { GYM_AMENITIES } from '../data/gymData';
import { Check, Sparkles, Flame, Camera, Clock, Dumbbell, ChevronRight } from 'lucide-react';

interface VirtualTourProps {
  onOpenPassModal: () => void;
}

export const VirtualTourShowcase: React.FC<VirtualTourProps> = ({ onOpenPassModal }) => {
  const [selectedAmenityId, setSelectedAmenityId] = useState(GYM_AMENITIES[0].id);

  const activeAmenity = GYM_AMENITIES.find((a) => a.id === selectedAmenityId) || GYM_AMENITIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case '24-7-access':
        return <Clock className="w-4 h-4 text-cyan-400" />;
      case 'steam-bath':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'photo-room':
        return <Camera className="w-4 h-4 text-sky-400" />;
      case 'certified-trainers':
        return <Dumbbell className="w-4 h-4 text-blue-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="amenities" className="py-24 relative bg-[#090d16] overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              World-Class Amenities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Designed For Progress. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Built For Comfort.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Every square foot of Infinity Fitness has been engineered to provide an elite training experience, from heavy plate-loaded stations to private post-workout recovery.
          </p>
        </div>

        {/* Amenity Segmented Navigation Buttons */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
          {GYM_AMENITIES.map((amenity) => {
            const isActive = amenity.id === selectedAmenityId;
            return (
              <button
                key={amenity.id}
                onClick={() => setSelectedAmenityId(amenity.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                {getIcon(amenity.id)}
                {amenity.title}
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Display Card */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Visual Frame */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] bg-black overflow-hidden group">
            <img
              src={activeAmenity.image}
              alt={activeAmenity.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-black/30" />
            
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white">
              {getIcon(activeAmenity.id)}
              {activeAmenity.subtitle}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-black/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/5">
              <span>Infinity Fitness Gym Facility Preview</span>
              <span className="text-cyan-400">Centrum Heights, Ahmedabad</span>
            </div>
          </div>

          {/* Details & Specs Frame */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-[#0b101b]/95">
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">
                {activeAmenity.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] mb-4">
                {activeAmenity.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeAmenity.description}
              </p>

              {/* Key Features checklist */}
              <div className="space-y-3 mb-8">
                {activeAmenity.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPassModal}
                className="px-6 py-3 text-xs uppercase tracking-wider font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center gap-2"
              >
                Experience In Person
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400">
                Free 1-Day Trial Pass Included
              </span>
            </div>
          </div>
        </div>

        {/* 3 Secondary Mini-Feature Callouts with Real Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Steam Bath Detox</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Highly praised in member reviews for soothing sore muscles and speeding up athletic recovery after heavy workouts.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Camera className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Dedicated Photo Studio</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Purpose-built space with optimal studio lighting and full-length mirrors to document your physique progress without crowding.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">24/7 Zero Restrictions</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              No closing announcements or cutoffs. Train late night or early morning with full AC and high security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
