import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Activity, Flame } from 'lucide-react';

interface BmiCalculatorProps {
  onSelectRecommendedProgram: (programName: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onSelectRecommendedProgram }) => {
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(74);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<'sedentary' | 'moderate' | 'active'>('moderate');

  // BMI Calculation
  const heightInMeters = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightInMeters * heightInMeters)).toFixed(1));

  let category = 'Normal';
  let categoryColor = 'text-emerald-400';
  let recommendedProgram = 'General Fitness Training';
  let programDescription = 'Maintain functional mobility, cardiovascular endurance, and progressive compound strength.';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-cyan-400';
    recommendedProgram = 'Muscle Building & Hypertrophy';
    programDescription = 'Hypertrophy-focused training with progressive overload paired with a high-protein caloric surplus.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Optimal Range';
    categoryColor = 'text-emerald-400';
    recommendedProgram = 'Strength Training & Athletic Conditioning';
    programDescription = 'Competition-grade Olympic lifts, barbell mastery, and lean muscle definition.';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    categoryColor = 'text-amber-400';
    recommendedProgram = 'Fat Loss Training & HIIT';
    programDescription = 'High-metabolic conditioning circuits, sled pushes, and interval resistance to accelerate fat oxidation.';
  } else {
    category = 'High BMI';
    categoryColor = 'text-rose-400';
    recommendedProgram = '12-Week Body Transformation Program';
    programDescription = 'Personalized 1-on-1 coaching, nutrition roadmap, body composition tracking, and safe joint-friendly progression.';
  }

  // Estimated BMR / Maintenance Calories
  const bmr =
    gender === 'male'
      ? Math.round(10 * weightKg + 6.25 * heightCm - 5 * 28 + 5)
      : Math.round(10 * weightKg + 6.25 * heightCm - 5 * 28 - 161);

  const multiplier = activityLevel === 'sedentary' ? 1.2 : activityLevel === 'moderate' ? 1.55 : 1.75;
  const maintenanceCalories = Math.round(bmr * multiplier);

  return (
    <section className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-700/60 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                Fitness Assessment Tool
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] mb-4">
                Calculate Your Health Metric.
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                Instant body mass index and estimated maintenance calorie target calculated using scientific formula. Discover your ideal Infinity training path.
              </p>

              {/* Sliders */}
              <div className="space-y-6">
                {/* Gender Toggle */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-300 w-24">Gender:</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        gender === 'male'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        gender === 'female'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Height:</span>
                    <span className="text-cyan-400 font-mono">{heightCm} cm ({Math.floor(heightCm / 30.48)}' {Math.round((heightCm % 30.48) / 2.54)}")</span>
                  </div>
                  <input
                    type="range"
                    min="130"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* Weight */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Weight:</span>
                    <span className="text-cyan-400 font-mono">{weightKg} kg ({Math.round(weightKg * 2.20462)} lbs)</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Output & Recommendation */}
            <div className="lg:col-span-6 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                      Body Mass Index (BMI)
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      {bmi}
                    </div>
                    <div className={`text-xs font-semibold mt-1 ${categoryColor}`}>
                      {category}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                      Est. Daily Calories
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
                      {maintenanceCalories}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      kcal / day maintenance
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="pt-6">
                  <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommended Program
                  </div>
                  <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2">
                    {recommendedProgram}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {programDescription}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onSelectRecommendedProgram(recommendedProgram)}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Trial In This Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
