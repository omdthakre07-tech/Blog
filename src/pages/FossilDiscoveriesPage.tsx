import React, { useState } from 'react';
import { FOSSIL_DISCOVERIES, FossilDiscovery } from '../data/fossils';
import { Compass, ExternalLink, MapPin, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface FossilDiscoveriesPageProps {
  onSelectAnimal: (id: string) => void;
}

export const FossilDiscoveriesPage: React.FC<FossilDiscoveriesPageProps> = ({ onSelectAnimal }) => {
  const [selectedSite, setSelectedSite] = useState<FossilDiscovery>(FOSSIL_DISCOVERIES[0]);

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Stratigraphy & Excavation Localities</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Field Archives</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-medium tracking-tight">
            Fossil Discoveries & Ancient Beds
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            The extraordinary geologic formations, asphalt seeps, and permafrost strata that preserve the bones, feathers, and ancient DNA of our lost biosphere.
          </p>
        </div>

        {/* Hero Excavation Showcase Banner */}
        <div className="relative rounded-sm overflow-hidden border border-stone-800 bg-[#121914] mb-14 shadow-2xl">
          <div className="aspect-[21/9] w-full relative">
            <img
              src="/src/assets/images/fossil_discovery_1792088973646.jpg"
              alt="Paleontological excavation quarry with field researchers documenting fossil beds"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-[#0b0f0d]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                Field Stratigraphy
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl text-[#f5f0e6] font-medium">
                Reading Earth’s Stone Chapters
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 mt-2">
                Every fossil is a message cast into deep time. Discover the pivotal sites where paleontologists piece together lost ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Sites Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Interactive Site Selector List */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
              Featured Excavation Localities
            </h3>
            {FOSSIL_DISCOVERIES.map((site) => (
              <div
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className={`p-4 rounded-sm border transition-all cursor-pointer text-left ${
                  selectedSite.id === site.id
                    ? 'bg-[#18271e] border-amber-500/60 shadow-md'
                    : 'bg-[#111713] border-stone-800 hover:border-stone-700 text-stone-400'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium mb-1">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>{site.country}</span>
                </div>
                <h4 className="font-editorial text-lg text-[#f5f0e6] font-semibold mb-1">
                  {site.siteName}
                </h4>
                <p className="text-[11px] text-stone-400 line-clamp-2">
                  {site.geologicalAge}
                </p>
              </div>
            ))}
          </div>

          {/* Right 2 Columns: Detailed Selected Site View */}
          <div className="lg:col-span-2 rounded-sm bg-[#111713] border border-stone-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-1">
                  {selectedSite.country}
                </span>
                <h3 className="font-editorial text-3xl text-[#f5f0e6] font-semibold">
                  {selectedSite.title}
                </h3>
              </div>
              <a
                href={selectedSite.institutionalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium self-start sm:self-auto"
              >
                <span>Museum Database</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Geological Age and Organisms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-sm bg-[#151f18] border border-stone-800">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
                  Geological Epoch
                </span>
                <span className="text-sm font-semibold text-[#f5f0e6]">
                  {selectedSite.geologicalAge}
                </span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#151f18] border border-stone-800">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1">
                  Preserved Taxa
                </span>
                <span className="text-xs text-stone-200">
                  {selectedSite.primaryOrganisms.join(', ')}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                Deposit Formation & Geology
              </h4>
              <p className="text-stone-300 text-sm leading-relaxed">
                {selectedSite.summary}
              </p>
            </div>

            {/* Paleontological Significance */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                Paleontological Significance
              </h4>
              <p className="text-stone-300 text-sm leading-relaxed">
                {selectedSite.paleontologicalSignificance}
              </p>
            </div>

            {/* Key Finds */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                Major Landmark Discoveries
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                {selectedSite.keyFinds.map((find, idx) => (
                  <li key={idx} className="p-3 rounded-sm bg-[#141d17] border border-stone-800/80 flex items-start gap-2">
                    <span className="text-amber-500 font-mono">0{idx + 1}.</span>
                    <span>{find}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional Link Footer */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Primary Research Institution: <strong className="text-stone-200">{selectedSite.scientificInstitution}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
