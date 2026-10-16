import React, { useState } from 'react';
import { ANIMALS } from '../data/animals';
import { CATEGORIES } from '../data/categories';
import { Animal, CategoryId } from '../types';
import { Search, Globe, Clock, ArrowRight, LayoutGrid, Table, ShieldCheck } from 'lucide-react';
import { getImageFallback } from '../assets/images';

interface ExploreAnimalsPageProps {
  onSelectAnimal: (id: string) => void;
  initialCategory?: CategoryId | 'all';
}

export const ExploreAnimalsPage: React.FC<ExploreAnimalsPageProps> = ({
  onSelectAnimal,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredAnimals = ANIMALS.filter((animal) => {
    const matchesCategory = selectedCategory === 'all' || animal.categories.includes(selectedCategory as CategoryId);
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      animal.commonName.toLowerCase().includes(q) ||
      animal.scientificName.toLowerCase().includes(q) ||
      animal.nativeRange.toLowerCase().includes(q) ||
      animal.briefDescription.toLowerCase().includes(q) ||
      animal.geologicalEpoch.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Comprehensive Zoological Catalog</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Extinct Taxa Series</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-medium tracking-tight">
            Explore Extinct Animals
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            From the ice-age mammoth steppe to isolated Indian Ocean atolls, explore eleven thoroughly documented species that once defined their ecosystems.
          </p>
        </div>

        {/* Toolbar & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by common name, genus, or range..."
                className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#121914] border border-stone-800 text-stone-100 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-0.5 bg-[#121914] border border-stone-800 rounded-sm self-start sm:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-sm transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#1e3427] text-amber-300' : 'text-stone-400 hover:text-white'
                }`}
                title="Card Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-sm transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#1e3427] text-amber-300' : 'text-stone-400 hover:text-white'
                }`}
                title="Comparative Table View"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-sm text-xs transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1b3a2b] text-[#f5f0e6] font-semibold border border-[#377254]'
                  : 'bg-[#121914] text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              All Lineages ({ANIMALS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-sm text-xs transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1b3a2b] text-[#f5f0e6] font-semibold border border-[#377254]'
                    : 'bg-[#121914] text-stone-400 hover:text-white border border-stone-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 pb-2 border-b border-stone-800/60">
          <span>Displaying {filteredAnimals.length} species monographs</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
            >
              Reset Category
            </button>
          )}
        </div>

        {/* Content Presentation: Grid or Table */}
        {filteredAnimals.length === 0 ? (
          <div className="py-20 text-center rounded-sm bg-[#111713] border border-stone-800">
            <p className="text-sm text-stone-400 mb-2">No species found matching your filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#18271e] text-amber-400 text-xs font-semibold rounded-sm border border-stone-700"
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <article
                key={animal.id}
                className="group bg-[#111814] rounded-sm border border-stone-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-black/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16221c]">
                  <img
                    src={animal.image}
                    alt={`${animal.commonName} (${animal.scientificName})`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = getImageFallback(animal.image);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-stone-300 font-medium">
                    <span className="flex items-center gap-1.5 drop-shadow-md">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{animal.periodOrDate.split('(')[0].trim()}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold group-hover:text-amber-400 transition-colors">
                        {animal.commonName}
                      </h3>
                      <p className="text-xs italic text-amber-500/90 font-serif tracking-wide mt-0.5">
                        {animal.scientificName}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                      <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span className="line-clamp-1">{animal.nativeRange}</span>
                    </div>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                      {animal.briefDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 uppercase tracking-widest font-mono">
                      CAT. #{animal.id.toUpperCase().slice(0, 6)}
                    </span>
                    <button
                      onClick={() => onSelectAnimal(animal.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Comparative Scientific Table View */
          <div className="overflow-x-auto rounded-sm border border-stone-800 bg-[#111713]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0e1410] border-b border-stone-800 text-stone-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4">Taxon & Common Name</th>
                  <th className="p-4">Scientific Name</th>
                  <th className="p-4">Geological Epoch</th>
                  <th className="p-4">Estimated Mass</th>
                  <th className="p-4">Extinction Horizon</th>
                  <th className="p-4 text-right">Monograph</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {filteredAnimals.map((animal) => (
                  <tr
                    key={animal.id}
                    className="hover:bg-[#151f19] transition-colors cursor-pointer group"
                    onClick={() => onSelectAnimal(animal.id)}
                  >
                    <td className="p-4 font-editorial text-base text-[#f5f0e6] font-semibold group-hover:text-amber-400">
                      {animal.commonName}
                    </td>
                    <td className="p-4 italic text-stone-400 font-serif">
                      {animal.scientificName}
                    </td>
                    <td className="p-4 text-stone-300">
                      {animal.geologicalEpoch}
                    </td>
                    <td className="p-4 text-stone-300 tabular-nums">
                      {animal.physicalSpecs.estimatedMass}
                    </td>
                    <td className="p-4 text-amber-400/90 font-mono text-[11px]">
                      {animal.exactExtinctionWindow.split(';')[0]}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectAnimal(animal.id);
                        }}
                        className="text-amber-400 hover:text-amber-300 font-semibold"
                      >
                        Inspect →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
