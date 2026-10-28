import React from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types/gym';
import { Check, Zap, Sparkles, ShieldCheck } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Transparent Pricing · No Hidden Lock-ins
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            Membership Built Around <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Your Lifestyle & Goals.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All plans include full 24/7 unrestricted access, luxury steam bath recovery sessions, locker amenities, and guidance from our certified coaches.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'glass-panel border-cyan-500/60 shadow-2xl shadow-cyan-950/50 bg-gradient-to-b from-slate-900/90 to-[#0b1526]/90 scale-[1.02] lg:-translate-y-2'
                  : 'glass-card border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div>
                <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                  {plan.duration}
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Tax included · 24/7 keycard enabled
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95'
                    : 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 hover:border-cyan-500/40'
                }`}
              >
                Join With {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom guarantee badge */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Not sure yet? Claim a free 1-Day VIP Trial Pass to inspect all equipment and steam bath facilities before joining.</span>
        </div>
      </div>
    </section>
  );
};
