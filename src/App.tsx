import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedAnimals } from './components/FeaturedAnimals';
import { CategoryBrowser } from './components/CategoryBrowser';
import { LatestArticles } from './components/LatestArticles';
import { ExtinctionTimeline } from './components/ExtinctionTimeline';
import { DidYouKnow } from './components/DidYouKnow';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ScientificReferencesModal } from './components/ScientificReferencesModal';
import { LegalModal } from './components/LegalModal';

import { AnimalDetailPage } from './pages/AnimalDetailPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { ExploreAnimalsPage } from './pages/ExploreAnimalsPage';
import { FossilDiscoveriesPage } from './pages/FossilDiscoveriesPage';
import { AboutPage } from './pages/AboutPage';

import { ANIMALS } from './data/animals';
import { ARTICLES } from './data/articles';
import { CategoryId } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedAnimalId, setSelectedAnimalId] = useState<string>('woolly-mammoth');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('mammoth-steppe-collapse');
  const [initialCategory, setInitialCategory] = useState<CategoryId | 'all'>('all');
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  // Parse URL Hash on initial load and handle browser popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentView('home');
        return;
      }

      if (hash.startsWith('animal/')) {
        const id = hash.replace('animal/', '');
        setSelectedAnimalId(id);
        setCurrentView('animal');
      } else if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        setSelectedArticleSlug(slug);
        setCurrentView('article');
      } else if (hash.startsWith('category/')) {
        const cat = hash.replace('category/', '') as CategoryId;
        setInitialCategory(cat);
        setCurrentView('explore');
      } else if (['explore', 'stories', 'fossils', 'about', 'timeline', 'home'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const navigateTo = (view: string, idOrSlug?: string) => {
    if (view === 'animal' && idOrSlug) {
      setSelectedAnimalId(idOrSlug);
      window.location.hash = `animal/${idOrSlug}`;
      setCurrentView('animal');
    } else if (view === 'article' && idOrSlug) {
      setSelectedArticleSlug(idOrSlug);
      window.location.hash = `article/${idOrSlug}`;
      setCurrentView('article');
    } else {
      window.location.hash = view === 'home' ? '' : view;
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: CategoryId) => {
    setInitialCategory(catId);
    navigateTo('explore');
  };

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-stone-200 flex flex-col font-sans-clean antialiased selection:bg-[#1f382a] selection:text-[#f5f0e6]">
      {/* Persistent Sticky Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* Section B: Hero Section */}
            <HeroSection
              onExplore={() => navigateTo('explore')}
              onReadStories={() => navigateTo('stories')}
            />

            {/* Section C: Featured Extinct Animals */}
            <FeaturedAnimals
              animals={ANIMALS}
              onSelectAnimal={(id) => navigateTo('animal', id)}
              onViewAll={() => navigateTo('explore')}
            />

            {/* Section D: Browse by Category */}
            <CategoryBrowser
              onSelectCategory={handleSelectCategory}
            />

            {/* Section E: Latest Blog Articles */}
            <LatestArticles
              articles={ARTICLES}
              onSelectArticle={(slug) => navigateTo('article', slug)}
              onViewAllStories={() => navigateTo('stories')}
            />

            {/* Section F: Extinction Timeline */}
            <ExtinctionTimeline />

            {/* Section G: Did You Know? */}
            <DidYouKnow />

            {/* Section H: Newsletter Subscription */}
            <Newsletter />
          </div>
        )}

        {currentView === 'explore' && (
          <ExploreAnimalsPage
            onSelectAnimal={(id) => navigateTo('animal', id)}
            initialCategory={initialCategory}
          />
        )}

        {currentView === 'stories' && (
          <BlogListingPage
            onSelectArticle={(slug) => navigateTo('article', slug)}
            initialCategory={initialCategory}
          />
        )}

        {currentView === 'animal' && (
          <AnimalDetailPage
            animalId={selectedAnimalId}
            onNavigateBack={() => navigateTo('explore')}
            onSelectAnimal={(id) => navigateTo('animal', id)}
            onSelectArticle={(slug) => navigateTo('article', slug)}
          />
        )}

        {currentView === 'article' && (
          <ArticleDetailPage
            slug={selectedArticleSlug}
            onNavigateBack={() => navigateTo('stories')}
            onSelectArticle={(slug) => navigateTo('article', slug)}
            onSelectAnimal={(id) => navigateTo('animal', id)}
          />
        )}

        {currentView === 'fossils' && (
          <FossilDiscoveriesPage
            onSelectAnimal={(id) => navigateTo('animal', id)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onOpenReferences={() => setReferencesOpen(true)}
            onExplore={() => navigateTo('explore')}
          />
        )}
      </main>

      {/* Section I: Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenReferences={() => setReferencesOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Global Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        animals={ANIMALS}
        articles={ARTICLES}
        onSelectAnimal={(id) => navigateTo('animal', id)}
        onSelectArticle={(slug) => navigateTo('article', slug)}
      />

      <ScientificReferencesModal
        isOpen={referencesOpen}
        onClose={() => setReferencesOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
