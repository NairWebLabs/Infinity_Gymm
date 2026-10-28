import React, { useState } from 'react';
import { GYM_SERVICES } from '../data/gymData';
import { GymService } from '../types/gym';
import { Dumbbell, Users, Activity, Heart, ArrowUpRight, CheckCircle2, Filter } from 'lucide-react';

interface ServicesSectionProps {
  onOpenPassModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPassModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 13 Services', icon: Activity },
    { id: 'strength', label: 'Strength & Hypertrophy', icon: Dumbbell },
    { id: 'coaching', label: 'Coaching & Programs', icon: Users },
    { id: 'aerobics', label: 'Cardio, Aerobics & Zumba', icon: Activity },
    { id: 'wellness', label: 'Nutrition & Yoga', icon: Heart }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? GYM_SERVICES
      : GYM_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5" />
              Comprehensive Training Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Elite Services For Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Fitness Milestone.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            From beginner fundamentals and fat loss to bodybuilding, Zumba, and personalized nutrition, our coaches deliver results with science and passion.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid with Modern Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: GymService) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40 group relative overflow-hidden"
            >
              {/* Subtle accent hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                  <span className="font-semibold text-cyan-400 uppercase tracking-wider">
                    {service.targetGoal}
                  </span>
                  <span className="text-slate-500">
                    {service.duration} · {service.intensity} Intensity
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenPassModal(service.name)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>Book Free Trial Session</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <span className="text-[11px] text-slate-500">All levels welcome</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
