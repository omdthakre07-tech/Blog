import React from 'react';
import { Compass, BookOpen, Shield, FileText, Mail, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenReferences: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenReferences,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#080c0a] border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#16271f] border border-[#2b4d3d] flex items-center justify-center text-amber-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="font-editorial text-2xl font-semibold text-[#f5f0e6] tracking-wider uppercase">
                LOST SPECIES
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Discover the Giants That Time Forgot. A dedicated natural history documentary and paleobiological journal illuminating extinct lineages, deep-time ecology, and conservation imperative.
            </p>

            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <p>Curated in collaboration with university paleontological archives.</p>
              <p>Strictly peer-reviewed citations. Non-commercial scientific education.</p>
            </div>
          </div>

          {/* Col 3: Explore Animals Quicklinks */}
          <div>
            <h4 className="font-editorial text-base text-[#f5f0e6] uppercase tracking-wider mb-4 font-semibold">
              Explore Animals
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('animal', 'woolly-mammoth')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Woolly Mammoth
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('animal', 'dodo')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Dodo Bird
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('animal', 'thylacine')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Tasmanian Tiger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('animal', 'passenger-pigeon')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Passenger Pigeon
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('animal', 'great-auk')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Great Auk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('animal', 'smilodon')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Saber-toothed Cat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="text-amber-400 hover:text-amber-300 font-medium pt-1 block"
                >
                  View All 11 Species →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Scientific Stories */}
          <div>
            <h4 className="font-editorial text-base text-[#f5f0e6] uppercase tracking-wider mb-4 font-semibold">
              Research Stories
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('article', 'mammoth-steppe-collapse')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  The Mammoth Steppe
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('article', 'island-fragility-dodo')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Island Fragility: Dodo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('article', 'oceanic-reign-megalodon')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Megalodon Paleobiology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('article', 'big-five-mass-extinctions')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  The Big Five Cataclysms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fossils')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Famous Fossil Quarries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stories')}
                  className="text-amber-400 hover:text-amber-300 font-medium pt-1 block"
                >
                  All 8 Research Articles →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Institutional & Citations */}
          <div>
            <h4 className="font-editorial text-base text-[#f5f0e6] uppercase tracking-wider mb-4 font-semibold">
              Scientific Standards
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button
                  onClick={onOpenReferences}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>Scientific References</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  About Lost Species
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('contact')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <span>Contact Editorial Board</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-stone-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Terms of Use & Citation
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-800/80">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-2">
                External Research Portals
              </span>
              <div className="flex flex-col gap-1.5 text-[11px] text-stone-400">
                <a
                  href="https://www.nhm.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Natural History Museum, London</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://naturalhistory.si.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Smithsonian NMNH</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://www.iucnredlist.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>IUCN Red List of Threatened Species</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} LOST SPECIES Natural History Journal. All educational and historical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>WCAG 2.1 AA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Zero Synthetic Clutter</span>
            <span aria-hidden="true">·</span>
            <span>Public Domain & Specimen Archives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
