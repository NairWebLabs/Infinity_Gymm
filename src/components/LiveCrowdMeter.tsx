import React, { useState } from 'react';
import { POPULAR_TIMES_DATA, GYM_CONTACT } from '../data/gymData';
import { Clock, Users, Activity, Sparkles, Moon, Sun, Info } from 'lucide-react';

export const LiveCrowdMeter: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Wednesday');
  const [hoveredHour, setHoveredHour] = useState<{ hour: string; occupancy: number; label: string } | null>(null);

  const days = Object.keys(POPULAR_TIMES_DATA);
  const currentData = POPULAR_TIMES_DATA[selectedDay] || POPULAR_TIMES_DATA['Wednesday'];

  return (
    <section id="crowd-meter" className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Context & 24/7 Perks */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Live Activity Tracker
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
              Plan Your Workout <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Around Peak Hours.
              </span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Infinity Fitness is open 24 hours daily. Track our typical floor volume throughout the week to choose between high-energy group vibes or quiet late-night lifting.
            </p>

            {/* Quick Insights Box */}
            <div className="glass-card rounded-xl p-5 border border-slate-800 space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ideal Quiet Hours</div>
                  <div className="text-[11px] text-slate-400">10:00 AM – 4:00 PM & Midnight – 5:00 AM</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Peak Community Hours</div>
                  <div className="text-[11px] text-slate-400">7:00 PM – 9:00 PM (Lively training atmosphere)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Workout Duration</div>
                  <div className="text-[11px] text-slate-400">Members typically spend 1 to 2 hours here</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-time crowd patterns synthesized from Google Maps member data.</span>
            </div>
          </div>

          {/* Right Column: Google Maps Style Popular Times Graph */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl">
            {/* Graph Header with Day Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    Live Status: 6 PM
                    <span className="text-[11px] font-normal text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Less busy than usual
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">Infinity Fitness Centrum Heights</div>
                </div>
              </div>

              {/* Day Segmented Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      selectedDay === day
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Hover details badge */}
            <div className="h-8 my-4 flex items-center justify-between text-xs">
              {hoveredHour ? (
                <div className="text-cyan-300 font-semibold flex items-center gap-2 animate-in fade-in duration-150">
                  <span>{hoveredHour.hour}:</span>
                  <span className="text-white">{hoveredHour.occupancy}% Occupancy</span>
                  <span className="text-slate-400">({hoveredHour.label})</span>
                </div>
              ) : (
                <div className="text-slate-400 italic">
                  Hover or tap any bar below to view hourly volume
                </div>
              )}
              <span className="text-slate-500 text-[11px]">Updated today</span>
            </div>

            {/* Interactive Bar Chart */}
            <div className="h-44 sm:h-52 flex items-end justify-between gap-1 sm:gap-2 pt-6 pb-2 px-1 border-b border-slate-800">
              {currentData.map((item, idx) => {
                const isCurrentLiveHour = item.hour === '6 PM' && selectedDay === 'Wednesday';
                const isPeak = item.occupancy >= 80;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredHour(item)}
                    onMouseLeave={() => setHoveredHour(null)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                  >
                    {/* Live Pin marker if 6 PM */}
                    {isCurrentLiveHour && (
                      <div className="absolute -top-7 flex flex-col items-center animate-bounce">
                        <span className="text-[9px] font-bold text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-400 whitespace-nowrap">
                          NOW
                        </span>
                        <div className="w-1 h-1 bg-cyan-400 rotate-45 -mt-0.5" />
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      style={{ height: `${item.occupancy}%` }}
                      className={`w-full max-w-[16px] rounded-t-sm transition-all duration-300 ${
                        isCurrentLiveHour
                          ? 'bg-gradient-to-t from-cyan-500 to-sky-300 shadow-lg shadow-cyan-400/50'
                          : isPeak
                          ? 'bg-gradient-to-t from-blue-700 to-cyan-500/80 group-hover:from-blue-600 group-hover:to-cyan-400'
                          : 'bg-slate-700/60 group-hover:bg-cyan-500/50'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* X-Axis labels */}
            <div className="flex justify-between text-[10px] text-slate-500 pt-2 font-mono">
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>12 AM</span>
              <span>3 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
