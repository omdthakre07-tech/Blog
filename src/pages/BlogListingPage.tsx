import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { Article } from '../types';
import { Search, Clock, Calendar, ArrowRight, Filter, BookOpen } from 'lucide-react';

interface BlogListingPageProps {
  onSelectArticle: (slug: string) => void;
  initialCategory?: string;
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({
  onSelectArticle,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'reading-time'>('newest');

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      art.title.toLowerCase().includes(q) ||
      art.subtitle.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.author.name.toLowerCase().includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  }).sort((a, b) => {
    if (sortBy === 'reading-time') {
      return b.readTimeMinutes - a.readTimeMinutes;
    }
    // newest default
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
  });

  const getCategoryName = (catId: string) => {
    return CATEGORIES.find((c) => c.id === catId)?.name || catId;
  };

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Natural History Journal</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Scientific Monographs</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-medium tracking-tight">
            Extinction Stories & Essays
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Scholarly articles exploring prehistoric extinctions, paleobiology, genomic breakthroughs, and ecological lessons for the modern era.
          </p>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, author, or keyword..."
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

            {/* Sorting Switcher */}
            <div className="flex items-center gap-2 self-start md:self-auto text-xs text-stone-400">
              <span>Sort by:</span>
              <div className="inline-flex p-0.5 bg-[#121914] border border-stone-800 rounded-sm">
                <button
                  onClick={() => setSortBy('newest')}
                  className={`px-3 py-1 rounded-sm transition-colors cursor-pointer ${
                    sortBy === 'newest' ? 'bg-[#1b2f23] text-amber-300 font-medium' : 'hover:text-stone-200'
                  }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => setSortBy('reading-time')}
                  className={`px-3 py-1 rounded-sm transition-colors cursor-pointer ${
                    sortBy === 'reading-time' ? 'bg-[#1b2f23] text-amber-300 font-medium' : 'hover:text-stone-200'
                  }`}
                >
                  Longest Read
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs (Functional buttons per constitution) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-sm text-xs transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1b3a2b] text-[#f5f0e6] font-semibold border border-[#377254]'
                  : 'bg-[#121914] text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              All Topics ({ARTICLES.length})
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

        {/* Articles Count Status */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 pb-2 border-b border-stone-800/60">
          <span>Showing {filteredArticles.length} scientific articles</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Articles List / Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center rounded-sm bg-[#111713] border border-stone-800">
            <BookOpen className="w-8 h-8 text-stone-600 mx-auto mb-3" />
            <h3 className="font-editorial text-2xl text-[#f5f0e6] font-medium mb-1">
              No Articles Found
            </h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto mb-4">
              We couldn't find any articles matching your search criteria. Try clearing your search or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#18271e] hover:bg-[#203629] text-amber-400 text-xs font-semibold rounded-sm border border-stone-700 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-[#111814] rounded-sm border border-stone-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-black/50"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16221c]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-2.5">
                      <span className="uppercase tracking-wider text-amber-400/90 font-medium text-[11px]">
                        {getCategoryName(article.category)}
                      </span>
                      <span aria-hidden="true" className="text-stone-600">·</span>
                      <span className="flex items-center gap-1 text-[11px] text-stone-400">
                        <Clock className="w-3 h-3 text-stone-500" />
                        <span>{article.readTimeMinutes} min read</span>
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectArticle(article.slug)}
                      className="font-editorial text-2xl text-[#f5f0e6] font-semibold group-hover:text-amber-400 transition-colors leading-snug cursor-pointer mb-3"
                    >
                      {article.title}
                    </h3>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800/80">
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#1b2b22] border border-stone-700 flex items-center justify-center text-[10px] font-semibold text-amber-400 font-mono">
                          {article.author.avatarInitials}
                        </div>
                        <span className="text-stone-300 font-medium text-xs truncate max-w-[130px]">
                          {article.author.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-500">
                        {article.publishedDate}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectArticle(article.slug)}
                      className="w-full flex items-center justify-between pt-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                    >
                      <span>Read Investigation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
