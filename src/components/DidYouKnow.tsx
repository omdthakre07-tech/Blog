import React, { useState } from 'react';
import { DID_YOU_KNOW_FACTS } from '../data/facts';
import { Sparkles, ArrowLeft, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';

export const DidYouKnow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length);
  };

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 1 + DID_YOU_KNOW_FACTS.length) % DID_YOU_KNOW_FACTS.length);
  };

  const current = DID_YOU_KNOW_FACTS[currentIndex];

  return (
    <section className="py-20 bg-[#0d1310] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              <span>Verified Scientific Curiosities</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Fact-Checked Natural History</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight">
              Did You Know?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Fascinating insights into the physiology, behavior, and genetics of lost animals, cross-referenced against peer-reviewed literature.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs text-stone-400 font-mono mr-2">
              <strong className="text-amber-400">{currentIndex + 1}</strong> / {DID_YOU_KNOW_FACTS.length}
            </span>
            <button
              onClick={prevFact}
              aria-label="Previous fact"
              className="p-2.5 rounded-sm bg-[#121914] border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextFact}
              aria-label="Next fact"
              className="p-2.5 rounded-sm bg-[#121914] border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Fact Showcase Card */}
        <div className="relative rounded-sm bg-[#111713] border border-stone-800 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-xl shadow-black/40">
          <div className="max-w-4xl">
            {/* Subject Label */}
            <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
              <span className="uppercase tracking-wider font-semibold text-amber-400">
                {current.species}
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="italic font-serif text-stone-400">
                {current.scientificName}
              </span>
            </div>

            {/* Core Fact Statement */}
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#f5f0e6] font-medium leading-tight mb-6">
              "{current.fact}"
            </blockquote>

            {/* Scientific Explanation */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
              {current.explanation}
            </p>

            {/* Source Reference Link */}
            <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Primary Research Citation: <strong className="text-stone-200 font-medium">{current.source}</strong></span>
              </div>

              <a
                href={current.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <span>Read Institutional Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Quick-Pick Grid of facts */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DID_YOU_KNOW_FACTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-sm text-left transition-all border cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#1b2f23] border-amber-500/50 text-[#f5f0e6]'
                  : 'bg-[#101612] border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className="text-[10px] font-mono block text-amber-500/80 mb-1">
                FACT #0{idx + 1}
              </span>
              <span className="text-xs font-semibold block truncate">
                {item.species}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
