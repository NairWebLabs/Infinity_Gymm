import React, { useState } from 'react';
import { Camera, Maximize2, X, Sparkles, MapPin } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
  span?: string;
}

export const ClientPhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: 'photo-1',
      title: '24/7 Plate-Loaded Strength Zone',
      category: 'Main Gym Floor',
      src: '/src/assets/images/gym_strength_floor_1793194483348.jpg',
      description: 'Heavy dumbbells, power cages, linear leg presses, and Olympic platforms under ambient electric blue illumination.',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'photo-2',
      title: 'Luxury Steam Bath Recovery Suite',
      category: 'Recovery & Wellness',
      src: '/src/assets/images/gym_steam_recovery_1793194484794.jpg',
      description: 'Therapeutic heated steam room designed for post-workout muscle de-tensioning and holistic recovery.',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'photo-3',
      title: 'Dedicated Creator Photo Room',
      category: 'Physique Studio',
      src: '/src/assets/images/gym_dedicated_photo_room_1793194484771.jpg',
      description: 'Professional ring lights, floor-to-ceiling mirror arrays, and textured backdrop for progress documentation.',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'photo-4',
      title: 'Certified Personal Trainer Coaching',
      category: 'Personal Coaching',
      src: '/src/assets/images/gym_trainer_coaching_1793194483697.jpg',
      description: '1-on-1 personalized form correction, biomechanical alignment, and motivational pacing.',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'photo-5',
      title: 'Infinity Fitness Reception & Floor',
      category: 'Centrum Heights Facility',
      src: '/assets/aistudio/Screenshot_2026-10-28-18-35-25-53_4466ea87.jpg',
      description: 'The real entrance counter, member check-in lounge, and multi-tier workout zones in Ahmedabad.',
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section id="gallery" className="py-24 relative bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              Facility Gallery & Atmosphere
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              An Architectural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Fitness Sanctuary.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Take a visual tour inside Infinity Fitness at Centrum Heights. Premium materials, high ceilings, hygienic zones, and equipment configured for maximum efficiency.
          </p>
        </div>

        {/* Artistic Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px]">
          {photos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-800/80 bg-slate-900 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 ${
                item.span || ''
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-[#080b11]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Floating Expand button */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                <Maximize2 className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30 inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300/80 line-clamp-1 mt-1 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-4xl w-full glass-panel rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/70 hover:bg-black rounded-full border border-white/10 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-1">
                {activePhoto.category}
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
