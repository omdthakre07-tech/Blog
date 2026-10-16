import React from 'react';
import { Article } from '../types';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { getImageFallback } from '../assets/images';

interface LatestArticlesProps {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
  onViewAllStories: () => void;
}

export const LatestArticles: React.FC<LatestArticlesProps> = ({
  articles,
  onSelectArticle,
  onViewAllStories,
}) => {
  // Take at least 6 distinct sample articles
  const displayedArticles = articles.slice(0, 6);

  const getCategoryName = (categoryId: string) => {
    return CATEGORIES.find((c) => c.id === categoryId)?.name || categoryId;
  };

  return (
    <section className="py-20 bg-[#0d1310] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              <span>Dispatches From The Field</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Paleontological Essays</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e6] font-medium tracking-tight">
              Latest Blog Articles
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              In-depth investigations, paleoclimatic reconstructions, and ecological post-mortems penned by scientists and historians.
            </p>
          </div>

          <button
            onClick={onViewAllStories}
            className="self-start md:self-end flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-400 hover:text-amber-300 transition-colors py-2 border-b border-amber-500/40 hover:border-amber-400 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
          >
            <span>Explore All Stories ({articles.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Articles Grid (Responsive, 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-[#111814] rounded-sm border border-stone-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-black/50"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16221c]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = getImageFallback(article.coverImage);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Label & Reading Time unboxed text */}
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

                  {/* Title */}
                  <h3
                    onClick={() => onSelectArticle(article.slug)}
                    className="font-editorial text-2xl text-[#f5f0e6] font-semibold group-hover:text-amber-400 transition-colors leading-snug cursor-pointer mb-3"
                  >
                    {article.title}
                  </h3>

                  {/* Short Excerpt */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer metadata & Link */}
                <div className="pt-4 border-t border-stone-800/80">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#1b2b22] border border-stone-700 flex items-center justify-center text-[10px] font-semibold text-amber-400 font-mono">
                        {article.author.avatarInitials}
                      </div>
                      <span className="text-stone-300 font-medium text-xs truncate max-w-[140px]">
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
                    <span>Read Article</span>
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
