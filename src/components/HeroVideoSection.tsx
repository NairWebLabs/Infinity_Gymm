import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ArrowRight, PhoneCall, Maximize2, Minimize2, Flame, MapPin, Eye } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface HeroVideoSectionProps {
  onOpenPassModal: () => void;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ onOpenPassModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:07');
  const [cinemaMode, setCinemaMode] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 7;
    setProgress((current / total) * 100);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);

    if (videoRef.current.duration) {
      const dmins = Math.floor(total / 60);
      const dsecs = Math.floor(total % 60);
      setDuration(`${dmins}:${dsecs < 10 ? '0' : ''}${dsecs}`);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const total = videoRef.current.duration || 7;
    videoRef.current.currentTime = pos * total;
  };

  return (
    <section className="relative w-full bg-[#06090f] overflow-hidden border-b border-slate-800/80 pt-6 pb-16">
      {/* Background ambient lighting matching the Infinity illuminated neon blue */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Kicker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              OPEN 24/7/365 · AKHBAR NAGAR, AHMEDABAD
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              2nd Floor, Centrum Heights
            </span>
          </div>

          {/* Quick Focus / Cinema Mode switch */}
          <button
            onClick={() => setCinemaMode(!cinemaMode)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 border border-slate-700 hover:border-cyan-400/60 text-slate-200 hover:text-white transition-all backdrop-blur-md"
          >
            {cinemaMode ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Show Information</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cinematic Video Focus</span>
              </>
            )}
          </button>
        </div>

        {/* Main Hero Container: High-Impact Video Theater with Glassmorphic Floating Overlays */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_60px_-15px_rgba(6,182,212,0.3)] bg-black group">
          {/* Razor Sharp Video Canvas (No heavy dark overlays!) */}
          <div className={`relative w-full transition-all duration-700 ease-out ${
            cinemaMode ? 'h-[75vh]' : 'h-[62vh] sm:h-[68vh] lg:h-[72vh]'
          }`}>
            <video
              ref={videoRef}
              src="/assets/aistudio/Camera_zooming_into_gym_sign_6e77457d_de313b0f.mp4"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
              playsInline
              muted={isMuted}
              autoPlay
              loop
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Subtle Vignette along the extreme edges ONLY - keeping the center 100% visible and vivid */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#06090f] via-[#06090f]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

            {/* Floating Top Video Status Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>COSMIC ENTRANCE · EARTH TO INFINITY FITNESS</span>
              </div>
            </div>

            {/* Interactive Player Controls in top-right */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-xl">
              <button
                onClick={togglePlay}
                className="p-2 text-slate-200 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                title={isPlaying ? "Pause" : "Play"}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
              </button>

              <button
                onClick={handleReplay}
                className="p-2 text-slate-200 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                title="Replay from Earth to Sign"
                aria-label="Replay video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMute}
                className="p-2 text-slate-200 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </button>

              <div className="h-4 w-px bg-white/20 mx-1" />

              <span className="text-[11px] font-mono text-slate-300 px-2">
                {currentTime} / {duration}
              </span>
            </div>

            {/* Scrubber Progress Bar at bottom of video */}
            <div
              onClick={handleSeek}
              className="absolute bottom-0 inset-x-0 h-1.5 bg-white/20 hover:h-3 cursor-pointer transition-all z-30"
              title="Seek timeline"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] relative"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>

            {/* Overlaid Hero Content (Hidden when user activates Cinema Mode) */}
            {!cinemaMode && (
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
                <div className="max-w-3xl pointer-events-auto animate-in fade-in duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/75 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Ahmedabad's Premier 24-Hour Training Club
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08] mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    THE ONLY WAY <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 text-glow-cyan">
                      TO FIT.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-100 max-w-2xl font-medium leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Step inside Centrum Heights. Heavy plate-loaded strength stations, luxury eucalyptus steam bath recovery, certified personal coaches, and dedicated creator photo studio.
                  </p>

                  {/* Primary CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenPassModal}
                      className="px-6 py-3 text-xs sm:text-sm uppercase tracking-wider font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                    >
                      <span>Claim Free 1-Day Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="#amenities"
                      className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-black/80 hover:bg-black border border-white/20 rounded-xl backdrop-blur-xl transition-all flex items-center gap-2 hover:border-cyan-400/50"
                    >
                      <span>Explore Facilities</span>
                    </a>

                    <a
                      href={`tel:${GYM_CONTACT.phone}`}
                      className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 bg-black/60 rounded-xl border border-white/10 backdrop-blur-md transition-colors flex items-center gap-2"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{GYM_CONTACT.phoneFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Artistic Glassy Spec Deck Below Video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Google Verified Rating
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Outfit'] flex items-baseline gap-1">
              ★ {GYM_CONTACT.googleRating}
              <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </div>
            <div className="text-xs text-slate-300 mt-1 font-sans">
              474+ Member Reviews
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Unrestricted Access
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-['Outfit']">
              24 / 7 / 365
            </div>
            <div className="text-xs text-slate-300 mt-1 font-sans">
              Train Early Morning or Late Night
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-blue-500/20 hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Athletic Recovery
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-['Outfit']">
              Steam Bath
            </div>
            <div className="text-xs text-slate-300 mt-1 font-sans">
              Deep Muscle Detox & Relief
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-sky-500/20 hover:border-sky-500/50 transition-all flex flex-col justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Physique Studio
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-['Outfit']">
              Photo Room
            </div>
            <div className="text-xs text-slate-300 mt-1 font-sans">
              Studio Ring Lights & Mirrors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
