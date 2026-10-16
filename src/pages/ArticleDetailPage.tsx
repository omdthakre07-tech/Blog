import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES, getArticleBySlug } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArrowLeft, Clock, Calendar, User, Share2, Copy, Twitter, Mail, Check, ChevronLeft, ChevronRight, Bookmark, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { getImageFallback } from '../assets/images';

interface ArticleDetailPageProps {
  slug: string;
  onNavigateBack: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectAnimal: (id: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigateBack,
  onSelectArticle,
  onSelectAnimal,
}) => {
  const article = getArticleBySlug(slug) || ARTICLES[0];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${article.title} – LOST SPECIES Journal`;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryName = CATEGORIES.find((c) => c.id === article.category)?.name || article.category;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="min-h-screen bg-[#0b0f0d] text-stone-200">
      {/* Reading Progress Indicator Bar */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-stone-900 z-30">
        <div
          className="h-full bg-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-400 mb-8 pb-4 border-b border-stone-800">
          <button
            onClick={onNavigateBack}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Stories Archive
          </button>
          <span aria-hidden="true" className="text-stone-600">/</span>
          <span className="text-stone-400">{categoryName}</span>
          <span aria-hidden="true" className="text-stone-600">/</span>
          <span className="text-amber-400/90 truncate max-w-[200px] sm:max-w-md font-medium">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          {/* Unboxed Metadata kicker */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">
            <span>{categoryName}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>{article.readTimeMinutes} min read</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>{article.publishedDate}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-medium tracking-tight leading-[1.1] mb-4 text-balance">
            {article.title}
          </h1>

          <p className="font-editorial text-lg sm:text-xl text-stone-300 italic max-w-3xl leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Author Card & Social Share Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1b2f23] border border-stone-700 flex items-center justify-center font-mono text-sm text-amber-400 font-semibold">
                {article.author.avatarInitials}
              </div>
              <div>
                <span className="block font-medium text-stone-200 text-sm">
                  {article.author.name}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {article.author.role} · {article.author.affiliation}
                </span>
              </div>
            </div>

            {/* Social Share Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#131d18] border border-stone-800 hover:border-amber-500/40 text-stone-300 text-xs transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-500" />}
                <span>{copied ? 'Link Copied' : 'Copy'}</span>
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-[#131d18] border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white transition-colors"
                aria-label="Share on X / Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`}
                className="p-2 rounded-sm bg-[#131d18] border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white transition-colors"
                aria-label="Share via Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="relative rounded-sm overflow-hidden border border-stone-800 bg-[#121914] mb-12 shadow-2xl">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full aspect-[16/9] object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = getImageFallback(article.coverImage);
              }
            }}
          />
          <figcaption className="p-3.5 bg-[#0e1411] border-t border-stone-800/80 text-xs text-stone-400">
            {article.coverCaption}
          </figcaption>
        </figure>

        {/* Table of Contents & Key Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Table of Contents */}
          <div className="p-5 rounded-sm bg-[#111713] border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Table of Contents</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {article.sections.map((sec, i) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="text-stone-300 hover:text-amber-400 text-left transition-colors cursor-pointer line-clamp-1"
                  >
                    {sec.heading}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('scientific-citations')}
                  className="text-stone-400 hover:text-amber-400 text-left transition-colors cursor-pointer"
                >
                  Scientific Citations
                </button>
              </li>
            </ul>
          </div>

          {/* Key Takeaways Box */}
          <div className="md:col-span-2 p-5 rounded-sm bg-[#121c16] border border-[#234232]">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
              Core Scientific Takeaways
            </h3>
            <ul className="space-y-2 text-xs text-stone-200">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Article Content Stream */}
        <div className="space-y-12">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold tracking-tight">
                {section.heading}
              </h2>

              <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Editorial Pull Quote */}
              {section.pullQuote && (
                <blockquote className="my-8 py-6 px-6 sm:px-8 border-y border-stone-800 bg-[#101612] text-center">
                  <p className="font-editorial italic text-xl sm:text-2xl text-[#f5f0e6] max-w-2xl mx-auto leading-relaxed">
                    "{section.pullQuote}"
                  </p>
                </blockquote>
              )}

              {/* Highlight Box */}
              {section.highlightBox && (
                <div className="p-5 rounded-sm bg-[#131f18] border border-stone-800 my-6">
                  <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    {section.highlightBox.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                    {section.highlightBox.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-wrap items-center gap-2">
          <span className="text-xs text-stone-500 uppercase tracking-wider mr-2">Taxonomic Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-400 hover:text-amber-400 bg-[#121914] px-2.5 py-1 rounded-sm border border-stone-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Scientific Sources Section */}
        <section id="scientific-citations" className="mt-12 pt-8 border-t border-stone-800">
          <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold mb-4">
            Institutional References & Peer-Reviewed Sources
          </h3>
          <div className="space-y-3">
            {article.sources.map((src, idx) => (
              <div key={idx} className="p-4 rounded-sm bg-[#101612] border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h4 className="font-medium text-stone-200 text-sm">{src.title}</h4>
                  <p className="text-stone-400 mt-0.5">
                    {src.institution} {src.year ? `(${src.year})` : ''}
                  </p>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold self-start sm:self-auto shrink-0"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Previous / Next Article Navigation Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle.slug)}
              className="p-4 rounded-sm bg-[#111713] border border-stone-800 hover:border-amber-500/40 text-left transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-1 text-[11px] text-stone-500 mb-1">
                <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Previous Investigation</span>
              </div>
              <h4 className="font-editorial text-lg text-[#f5f0e6] group-hover:text-amber-400 line-clamp-1">
                {prevArticle.title}
              </h4>
            </button>
          ) : <div />}

          {nextArticle ? (
            <button
              onClick={() => onSelectArticle(nextArticle.slug)}
              className="p-4 rounded-sm bg-[#111713] border border-stone-800 hover:border-amber-500/40 text-right transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-end gap-1 text-[11px] text-stone-500 mb-1">
                <span>Next Investigation</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h4 className="font-editorial text-lg text-[#f5f0e6] group-hover:text-amber-400 line-clamp-1">
                {nextArticle.title}
              </h4>
            </button>
          ) : <div />}
        </div>
      </div>
    </article>
  );
};
