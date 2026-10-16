import React from 'react';
import { Compass, BookOpen, Clock, Globe } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onReadStories: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onReadStories }) => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
      {/* Background Hero Image with measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_woolly_mammoth_1792088931363.jpg"
          alt="Woolly mammoth traversing a vast prehistoric Ice Age tundra with distant snowcapped peaks"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-[#0b0f0d]/65 to-[#0b0f0d]/30" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f0d]/40 to-[#0b0f0d]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Clean unboxed editorial kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400/90 font-medium mb-6">
          <span>Natural History Journal</span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span>Earth Epochs & Extinctions</span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span>Volume XIV</span>
        </div>

        {/* Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#f5f0e6] font-medium leading-[1.05] max-w-4xl uppercase mb-6 text-balance">
          THE WORLD THEY LEFT BEHIND
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance">
          Journey through lost worlds and discover the extraordinary creatures that once called our planet home.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#1b3a2b] hover:bg-[#234b38] border border-[#356f52] text-[#f5f0e6] text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-black/40 hover:shadow-emerald-950/40 flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Explore Extinct Animals</span>
          </button>

          <button
            onClick={onReadStories}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#131d18]/90 hover:bg-[#1a2922] border border-stone-700/80 hover:border-stone-500 text-stone-200 hover:text-white text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <BookOpen className="w-4 h-4 text-stone-300" />
            <span>Read Their Stories</span>
          </button>
        </div>

        {/* Operational Context Strip */}
        <div className="mt-16 pt-8 border-t border-stone-800/80 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-400">Archived Lineages</span>
            <span className="text-xl font-editorial font-semibold text-[#f5f0e6] tabular-nums mt-0.5">11 Species</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-400">Deep Time Span</span>
            <span className="text-xl font-editorial font-semibold text-[#f5f0e6] tabular-nums mt-0.5">60M Years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-400">Mass Cataclysms</span>
            <span className="text-xl font-editorial font-semibold text-[#f5f0e6] tabular-nums mt-0.5">5 Big Events</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-400">Scientific Sources</span>
            <span className="text-xl font-editorial font-semibold text-amber-400/90 tabular-nums mt-0.5">Peer-Reviewed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
