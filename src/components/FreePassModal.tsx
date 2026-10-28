import React, { useState } from 'react';
import { X, Check, Dumbbell, Sparkles, QrCode, Clock, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: preselectedProgram || 'Strength & Conditioning',
    timeSlot: 'Evening (5 PM - 9 PM)'
  });
  const [submittedPass, setSubmittedPass] = useState<{
    id: string;
    name: string;
    expiryDate: string;
    goal: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate pass
    const randomId = 'INF-' + Math.floor(100000 + Math.random() * 900000);
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 3);

    setSubmittedPass({
      id: randomId,
      name: formData.name,
      expiryDate: validUntil.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      goal: formData.goal
    });
  };

  const handleWhatsAppConfirm = () => {
    if (!submittedPass) return;
    const msg = `Hi Infinity Fitness, I generated a 1-Day VIP Pass!\nPass ID: ${submittedPass.id}\nName: ${submittedPass.name}\nGoal: ${submittedPass.goal}\nLocation: Centrum Heights, Ahmedabad. Looking forward to visiting!`;
    const url = `https://wa.me/${GYM_CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-lg rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedPass ? (
          /* Input Form */
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Sparkles className="w-4 h-4" />
              Complimentary 1-Day Trial Pass
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
              Experience Infinity Fitness.
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Get full access to all plate-loaded equipment, cardio zone, steam bath recovery suite, and trainer orientation for 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rohan Patel"
                  className="w-full glass-input px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98765 43210"
                  className="w-full glass-input px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 rounded-xl text-xs sm:text-sm text-white bg-slate-900"
                  >
                    <option value="Strength & Conditioning">Strength & Conditioning</option>
                    <option value="Muscle Building / Hypertrophy">Muscle Building</option>
                    <option value="Fat Loss & HIIT">Fat Loss & HIIT</option>
                    <option value="Personal Coaching (Male/Female)">Personal Coaching</option>
                    <option value="Aerobics & Zumba">Aerobics & Zumba</option>
                    <option value="Yoga & Recovery">Yoga & Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 rounded-xl text-xs sm:text-sm text-white bg-slate-900"
                  >
                    <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                    <option value="Afternoon (11 AM - 4 PM)">Afternoon (11 AM - 4 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                    <option value="Late Night (10 PM - 2 AM)">Late Night (10 PM - 2 AM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  Generate My VIP Pass
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-slate-500 mt-2">
                  No credit card required · Instant WhatsApp confirmation
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Generated Digital VIP Pass */
          <div className="p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                VIP Pass Activated!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Show this digital voucher at reception on the 2nd Floor, Centrum Heights.
              </p>
            </div>

            {/* Stylized Digital Card Pass */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#0c182c] to-black border-2 border-cyan-500/40 p-5 shadow-2xl relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-sm tracking-tight text-white font-['Outfit']">
                    INFINITY FITNESS
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  {submittedPass.id}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Pass Holder</div>
                  <div className="text-base font-bold text-white">{submittedPass.name}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Focus</div>
                    <div className="text-cyan-300 font-semibold">{submittedPass.goal}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Valid Until</div>
                    <div className="text-white font-mono">{submittedPass.expiryDate}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Centrum Heights, Chandlodiya</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>24 Hours</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirm}
                className="w-full py-3 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                Send Pass to WhatsApp Reception
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
