import React, { useState, useEffect, useRef } from 'react';
import { Animal, Article } from '../types';
import { Search, X, Compass, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { getImageFallback } from '../assets/images';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  animals: Animal[];
  articles: Article[];
  onSelectAnimal: (id: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  animals,
  articles,
  onSelectAnimal,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'animals' | 'articles'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredAnimals = animals.filter(
    (a) =>
      !q ||
      a.commonName.toLowerCase().includes(q) ||
      a.scientificName.toLowerCase().includes(q) ||
      a.nativeRange.toLowerCase().includes(q) ||
      a.briefDescription.toLowerCase().includes(q) ||
      a.geologicalEpoch.toLowerCase().includes(q)
  );

  const filteredArticles = articles.filter(
    (a) =>
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );

  const showAnimals = activeTab === 'all' || activeTab === 'animals';
  const showArticles = activeTab === 'all' || activeTab === 'articles';
  const totalResults = (showAnimals ? filteredAnimals.length : 0) + (showArticles ? filteredArticles.length : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#111713] rounded-sm border border-stone-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by animal name, scientific name, epoch, or topic..."
            className="w-full bg-transparent text-sm sm:text-base text-stone-100 placeholder-stone-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-white text-xs px-2 py-1 bg-stone-800 rounded-sm"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-stone-400 hover:text-white hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-4 py-2.5 bg-[#0d1310] border-b border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-[#1b2f23] text-amber-300 font-medium' : 'hover:text-stone-200'
              }`}
            >
              All ({filteredAnimals.length + filteredArticles.length})
            </button>
            <button
              onClick={() => setActiveTab('animals')}
              className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                activeTab === 'animals' ? 'bg-[#1b2f23] text-amber-300 font-medium' : 'hover:text-stone-200'
              }`}
            >
              Species ({filteredAnimals.length})
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                activeTab === 'articles' ? 'bg-[#1b2f23] text-amber-300 font-medium' : 'hover:text-stone-200'
              }`}
            >
              Articles ({filteredArticles.length})
            </button>
          </div>

          <span className="text-[11px] text-stone-500 hidden sm:inline">
            Press ESC to exit
          </span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {totalResults === 0 ? (
            <div className="py-12 text-center">
              <p className="text-stone-400 text-sm mb-2">No results matching "{query}"</p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try searching for "Mammoth", "Dodo", "Smilodon", "K-Pg", "Pleistocene", or "Island".
              </p>
            </div>
          ) : (
            <>
              {/* Animals Group */}
              {showAnimals && filteredAnimals.length > 0 && (
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold mb-2.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Extinct Animals ({filteredAnimals.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredAnimals.map((animal) => (
                      <div
                        key={animal.id}
                        onClick={() => {
                          onSelectAnimal(animal.id);
                          onClose();
                        }}
                        className="p-3 rounded-sm bg-[#141b16] hover:bg-[#1a251e] border border-stone-800/80 hover:border-amber-500/50 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={animal.image}
                            alt=""
                            className="w-12 h-12 rounded-sm object-cover bg-stone-900 shrink-0"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.triedFallback) {
                                target.dataset.triedFallback = 'true';
                                target.src = getImageFallback(animal.image);
                              }
                            }}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-editorial text-base text-[#f5f0e6] font-semibold group-hover:text-amber-400">
                                {animal.commonName}
                              </span>
                              <span className="text-xs italic text-stone-400 font-serif">
                                ({animal.scientificName})
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                              {animal.nativeRange} · {animal.periodOrDate.split('(')[0]}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Group */}
              {showArticles && filteredArticles.length > 0 && (
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Scientific Articles ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => {
                          onSelectArticle(article.slug);
                          onClose();
                        }}
                        className="p-3 rounded-sm bg-[#141b16] hover:bg-[#1a251e] border border-stone-800/80 hover:border-amber-500/50 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[10px] text-amber-400/90 font-medium uppercase tracking-wider mb-0.5">
                            <span>{article.category}</span>
                            <span aria-hidden="true" className="text-stone-600">·</span>
                            <span className="text-stone-400">{article.readTimeMinutes} min read</span>
                          </div>
                          <h4 className="font-editorial text-base text-[#f5f0e6] font-semibold group-hover:text-amber-400 line-clamp-1">
                            {article.title}
                          </h4>
                          <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                            {article.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
