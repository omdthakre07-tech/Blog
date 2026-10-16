import React from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types';
import { Layers, ArrowRight } from 'lucide-react';
import { getImageFallback } from '../assets/images';

interface CategoryBrowserProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 bg-[#0b0f0d] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Taxonomic & Temporal Domains</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight">
            Browse by Category
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Filter through specialized ecological guilds, deep-time geological eras, and historical human extinction events.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group relative rounded-sm bg-[#101713] border border-stone-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 cursor-pointer overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(category.id);
                }
              }}
            >
              {/* Background category image */}
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <img
                  src={category.featuredImage}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = getImageFallback(category.featuredImage);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101713] via-[#101713]/70 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                  <span className="uppercase tracking-widest text-[11px] text-amber-400/90 font-medium">
                    {category.badge}
                  </span>
                  <span className="font-mono text-stone-500 tabular-nums">
                    {category.count} Species
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold group-hover:text-amber-400 transition-colors mb-2">
                  {category.name}
                </h3>

                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-xs text-stone-300 font-medium group-hover:text-amber-400 transition-colors">
                  Explore Category Archives
                </span>
                <div className="w-7 h-7 rounded-sm bg-[#16231c] border border-stone-700/60 flex items-center justify-center text-stone-300 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
