import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Compass, Feather } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, id?: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore Animals' },
    { id: 'stories', label: 'Extinction Stories' },
    { id: 'fossils', label: 'Fossil Discoveries' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f0d]/95 backdrop-blur-md border-b border-stone-800/80 shadow-lg shadow-black/20'
          : 'bg-[#0b0f0d]/80 backdrop-blur-sm border-b border-stone-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            <div className="w-10 h-10 rounded-sm bg-[#16271f] border border-[#2b4d3d] flex items-center justify-center text-amber-500 group-hover:border-amber-500/60 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* Stylized fossil trilobite / mammoth footprint geometry */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl tracking-wider text-[#f5f0e6] font-semibold uppercase group-hover:text-amber-400 transition-colors">
                LOST SPECIES
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-sans-clean -mt-1">
                Natural History Journal
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-stone-300 hover:text-[#f5f0e6]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Search Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              aria-label="Search extinct species and articles"
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#131d18] border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-[#f5f0e6] transition-all text-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Search className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Search archive</span>
              <kbd className="hidden lg:inline text-[10px] bg-stone-900 border border-stone-700 px-1.5 py-0.5 rounded text-stone-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => onNavigate('explore')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gradient-to-r from-[#1b3a2b] to-[#12281d] border border-[#2b5942] hover:border-amber-500/50 text-[#f5f0e6] text-xs font-medium tracking-wide uppercase transition-all shadow-sm hover:shadow-amber-950/20 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Catalog</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-sm bg-[#131d18] border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1411] border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-base rounded-sm transition-colors ${
                  currentView === item.id
                    ? 'bg-[#182a20] text-amber-400 font-semibold'
                    : 'text-stone-300 hover:bg-[#131d18] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-stone-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm bg-[#16271f] border border-stone-800 text-stone-200 text-sm"
            >
              <Search className="w-4 h-4 text-amber-500" />
              <span>Search Database</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
