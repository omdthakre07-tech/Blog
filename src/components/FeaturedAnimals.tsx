import React from 'react';
import { Animal } from '../types';
import { ArrowRight, Globe, Clock } from 'lucide-react';

interface FeaturedAnimalsProps {
  animals: Animal[];
  onSelectAnimal: (id: string) => void;
  onViewAll: () => void;
}

export const FeaturedAnimals: React.FC<FeaturedAnimalsProps> = ({
  animals,
  onSelectAnimal,
  onViewAll,
}) => {
  // Target the 6 animals requested specifically in 3.C
  const targetIds = [
    'woolly-mammoth',
    'dodo',
    'thylacine',
    'passenger-pigeon',
    'great-auk',
    'smilodon'
  ];

  const featured = targetIds
    .map((id) => animals.find((a) => a.id === id))
    .filter((a): a is Animal => Boolean(a));

  return (
    <section className="py-20 bg-[#0d1310] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              <span>Curated Natural Archives</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Primary Specimens</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight">
              Featured Extinct Animals
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Examine six of natural history’s most influential lost species, from Pleistocene apex predators to fragile insular island dwellers.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="self-start md:self-end flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-400 hover:text-amber-300 transition-colors py-2 border-b border-amber-500/40 hover:border-amber-400 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
          >
            <span>View Full Archive (11 Species)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((animal) => (
            <article
              key={animal.id}
              className="group bg-[#111814] rounded-sm border border-stone-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-black/50"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16221c]">
                <img
                  src={animal.image}
                  alt={`${animal.commonName} (${animal.scientificName})`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-transparent to-transparent opacity-80" />
                
                {/* Quiet unboxed period kicker over bottom edge of media */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-stone-300 font-medium">
                  <span className="flex items-center gap-1.5 drop-shadow-md">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{animal.periodOrDate.split('(')[0].trim()}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Taxonomy Header */}
                  <div className="mb-2">
                    <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold group-hover:text-amber-400 transition-colors">
                      {animal.commonName}
                    </h3>
                    <p className="text-xs italic text-amber-500/90 font-serif tracking-wide mt-0.5">
                      {animal.scientificName}
                    </p>
                  </div>

                  {/* Native Range unboxed metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                    <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span className="line-clamp-1">{animal.nativeRange}</span>
                  </div>

                  {/* Brief Description */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                    {animal.briefDescription}
                  </p>
                </div>

                {/* Card Action Link */}
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
      </div>
    </section>
  );
};
