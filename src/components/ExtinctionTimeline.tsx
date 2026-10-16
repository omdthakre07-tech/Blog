import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/timeline';
import { TimelineMilestone } from '../types';
import { Clock, AlertTriangle, ShieldCheck, HelpCircle, ChevronRight, Info } from 'lucide-react';

export const ExtinctionTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mass-extinction' | 'prehistoric-loss' | 'historical-extinction'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('end-permian');

  const filteredMilestones = TIMELINE_MILESTONES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section className="py-20 bg-[#0b0f0d] border-b border-stone-800" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Chronology of Vanished Worlds</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight">
            Extinction Timeline
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Distinguishing planetary mass extinctions, deep-time prehistoric losses, and rapid historical extinctions across 450 million years.
          </p>
        </div>

        {/* Critical Scientific Note Banner */}
        <div className="mb-10 p-4 rounded-sm bg-[#121c16] border border-[#234232] max-w-4xl mx-auto flex items-start gap-3.5 text-xs text-stone-300">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-amber-300">Essential Chronological Fact: </span>
            Non-avian dinosaurs vanished approximately 66 million years ago at the K-Pg boundary. Ice Age megafauna—such as woolly mammoths and saber-toothed cats—evolved only within the last several hundred thousand years. They did not coexist; they are separated by an immense 60-million-year gap. Furthermore, modern birds are direct living descendants of theropod dinosaurs.
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional buttons per constitution) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <div className="inline-flex p-1 bg-[#121914] border border-stone-800 rounded-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1e3427] text-amber-300 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              All Events ({TIMELINE_MILESTONES.length})
            </button>
            <button
              onClick={() => setActiveFilter('mass-extinction')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'mass-extinction'
                  ? 'bg-[#1e3427] text-amber-300 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Geological Mass Extinctions (The Big 5)
            </button>
            <button
              onClick={() => setActiveFilter('prehistoric-loss')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'prehistoric-loss'
                  ? 'bg-[#1e3427] text-amber-300 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Prehistoric Species Losses
            </button>
            <button
              onClick={() => setActiveFilter('historical-extinction')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'historical-extinction'
                  ? 'bg-[#1e3427] text-amber-300 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Recent Historical (1600–1936)
            </button>
          </div>
        </div>

        {/* Timeline Visual Rail */}
        <div className="relative border-l border-stone-800 ml-4 sm:ml-8 md:ml-32 space-y-8 pl-6 sm:pl-8">
          {filteredMilestones.map((item, index) => {
            const isExpanded = expandedId === item.id;
            
            // Clean typographic badge labels based on category
            const typeLabel = 
              item.type === 'mass-extinction' ? 'Geological Mass Cataclysm' :
              item.type === 'prehistoric-loss' ? 'Prehistoric Megafaunal Loss' : 'Recorded Historical Extinction';

            return (
              <div key={item.id} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    item.type === 'mass-extinction'
                      ? 'bg-amber-500 border-[#0b0f0d]'
                      : item.type === 'historical-extinction'
                      ? 'bg-rose-500 border-[#0b0f0d]'
                      : 'bg-emerald-500 border-[#0b0f0d]'
                  }`}
                />

                {/* Left Timestamp for desktop */}
                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                  <span className="font-mono text-xs text-amber-400/90 font-medium">
                    {item.timeLabel.split('(')[0].replace('~', '')}
                  </span>
                </div>

                {/* Milestone Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`p-6 rounded-sm bg-[#111713] border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'border-amber-500/50 shadow-lg shadow-black/40'
                      : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span className="md:hidden font-mono text-amber-400 font-medium">
                        {item.timeLabel}
                      </span>
                      <span className="md:hidden" aria-hidden="true">·</span>
                      <span className="uppercase tracking-wider text-[11px] text-stone-400">
                        {item.era} / {item.period}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className={`text-[11px] font-medium ${
                        item.type === 'mass-extinction' ? 'text-amber-400' :
                        item.type === 'historical-extinction' ? 'text-rose-400' : 'text-emerald-400'
                      }`}>
                        {typeLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-amber-500/90 text-xs sm:text-sm font-medium mb-3">
                    {item.headline}
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expanded Geological Analysis */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-stone-800/80 space-y-4">
                      {/* Causal Mechanisms */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-amber-400 font-medium mb-2">
                          Key Drivers & Environmental Mechanisms
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-300">
                          {item.causalFactors.map((factor, i) => (
                            <li key={i} className="flex items-start gap-2 bg-[#16211a] p-2.5 rounded-sm border border-stone-800">
                              <span className="text-amber-500 shrink-0 font-mono">0{i + 1}.</span>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Affected Biosphere */}
                      <div className="bg-[#141d18] p-3 rounded-sm border border-stone-800/60 text-xs">
                        <span className="text-stone-400 uppercase tracking-wider text-[10px] block mb-1">
                          Biospheric Impact
                        </span>
                        <p className="text-stone-200">
                          {item.affectedLife}
                        </p>
                      </div>

                      {/* Scientific Consensus Level */}
                      <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-800/40">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Scientific Evidence: <strong className="text-stone-200 font-medium">{item.scientificConsensus}</strong></span>
                        </div>
                        {item.keySpeciesInvolved && (
                          <div className="text-[11px] text-stone-400 italic">
                            Featured taxa: {item.keySpeciesInvolved.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
