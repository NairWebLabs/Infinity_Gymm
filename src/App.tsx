import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { Navbar } from './components/Navbar';
import { HeroVideoSection } from './components/HeroVideoSection';
import { VirtualTourShowcase } from './components/VirtualTourShowcase';
import { ServicesSection } from './components/ServicesSection';
import { BmiCalculator } from './components/BmiCalculator';
import { ClientPhotoGallery } from './components/ClientPhotoGallery';
import { LiveCrowdMeter } from './components/LiveCrowdMeter';
import { ReviewsSection } from './components/ReviewsSection';
import { MembershipPlans } from './components/MembershipPlans';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { FreePassModal } from './components/FreePassModal';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { GYM_CONTACT } from './data/gymData';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();

  // Initialize Lenis smooth scroll & GSAP integrations
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Subtle GSAP reveal for ambient glass cards on load
    gsap.fromTo(
      '.glass-card',
      { opacity: 0.85, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out' }
    );

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenPassModal = (programName?: string) => {
    setSelectedProgram(programName);
    setIsPassModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-slate-950">
      {/* Top Navbar adhering to Top Bar contract */}
      <Navbar onOpenPassModal={() => handleOpenPassModal()} />

      {/* Hero Section with Zooming Entrance Video */}
      <main className="flex-1">
        <HeroVideoSection onOpenPassModal={() => handleOpenPassModal()} />

        {/* Facility & Amenities Tour (Generated images + Real Steam Bath & Photo Room) */}
        <VirtualTourShowcase onOpenPassModal={() => handleOpenPassModal()} />

        {/* All 13 Real Services from Google Maps Profile */}
        <ServicesSection onOpenPassModal={handleOpenPassModal} />

        {/* Client Photo Gallery (Bento Layout with Lightbox) */}
        <ClientPhotoGallery />

        {/* Health & Caloric Needs / BMI Assessment Tool */}
        <BmiCalculator onSelectRecommendedProgram={handleOpenPassModal} />

        {/* Live Popular Times / Crowd Meter (Recreating Google Maps live graph) */}
        <LiveCrowdMeter />

        {/* Transparent Membership Plans */}
        <MembershipPlans onSelectPlan={(plan) => handleOpenPassModal(plan)} />

        {/* Google 4.8 Rating Reviews with Topic Chips */}
        <ReviewsSection />

        {/* Interactive Google Map & Directions */}
        <LocationMapSection />
      </main>

      {/* Authoritative Footer */}
      <Footer />

      {/* Free 1-Day Trial Pass Modal */}
      <FreePassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        preselectedProgram={selectedProgram}
      />

      {/* Floating Sticky Quick Actions (WhatsApp & Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp direct chat button with pulsing indicator */}
        <a
          href={`https://wa.me/${GYM_CONTACT.whatsapp}?text=Hi%20Infinity%20Fitness%2C%20I%20would%20like%20to%20inquire%20about%20a%20membership%20and%20claim%20my%20free%201-day%20pass.`}
          target="_blank"
          rel="noreferrer"
          className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          title="Chat on WhatsApp (096248 82555)"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300" />
          <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
        </a>

        {/* Call button */}
        <a
          href={`tel:${GYM_CONTACT.phone}`}
          className="p-3.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          title="Call Infinity Fitness"
          aria-label="Call gym reception"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
