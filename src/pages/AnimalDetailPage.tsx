import React, { useEffect } from 'react';
import { Animal, Article } from '../types';
import { getAnimalById, ANIMALS } from '../data/animals';
import { ARTICLES } from '../data/articles';
import { ArrowLeft, Clock, Globe, ShieldAlert, Award, BookOpen, ExternalLink, ArrowRight, Share2, Compass } from 'lucide-react';
import { getImageFallback } from '../assets/images';

interface AnimalDetailPageProps {
  animalId: string;
  onNavigateBack: () => void;
  onSelectAnimal: (id: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const AnimalDetailPage: React.FC<AnimalDetailPageProps> = ({
  animalId,
  onNavigateBack,
  onSelectAnimal,
  onSelectArticle,
}) => {
  const animal = getAnimalById(animalId) || ANIMALS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update document title for SEO
    document.title = `${animal.commonName} (${animal.scientificName}) – LOST SPECIES Journal`;
  }, [animal]);

  // Find related articles mentioning this animal
  const relatedArticles = ARTICLES.filter(
    (art) => art.featuredAnimalId === animal.id || art.category === animal.categories[0]
  ).slice(0, 2);

  // Find related animals
  const relatedAnimals = animal.relatedAnimalIds
    .map((id) => getAnimalById(id))
    .filter((a): a is Animal => Boolean(a));

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Direct link to specimen monograph copied to clipboard.');
  };

  return (
    <article className="min-h-screen bg-[#0b0f0d] text-stone-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation & share */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-800">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Animal Catalog</span>
          </button>

          <button
            onClick={copyShareLink}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 transition-colors px-3 py-1.5 rounded-sm bg-[#121914] border border-stone-800 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Share Specimen</span>
          </button>
        </div>

        {/* 1. Header & Taxonomy */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-3">
            <span>Natural History Monograph</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Taxon #{animal.id.toUpperCase().slice(0, 8)}</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#f5f0e6] font-medium tracking-tight mb-2">
            {animal.commonName}
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-amber-400/90 tracking-wide">
            {animal.scientificName}
          </p>
          <p className="text-stone-400 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            {animal.briefDescription}
          </p>
        </header>

        {/* 2. Hero Image Presentation */}
        <figure className="relative rounded-sm overflow-hidden border border-stone-800 bg-[#121914] mb-12 shadow-2xl">
          <img
            src={animal.image}
            alt={`${animal.commonName} (${animal.scientificName})`}
            className="w-full aspect-[16/9] object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = getImageFallback(animal.image);
              }
            }}
          />
          <figcaption className="p-4 bg-[#0e1411] border-t border-stone-800/80 text-xs text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>{animal.imageCaption}</span>
            <span className="text-[11px] text-stone-500 font-mono">SPECIMEN ARCHIVE #2026-{animal.id.toUpperCase().slice(0, 4)}</span>
          </figcaption>
        </figure>

        {/* Accession Quick Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-sm bg-[#111713] border border-stone-800 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1">
              Geological Era & Epoch
            </span>
            <span className="font-editorial text-lg text-[#f5f0e6] font-medium block">
              {animal.geologicalEpoch}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1">
              Documented Range
            </span>
            <span className="font-editorial text-lg text-[#f5f0e6] font-medium block">
              {animal.nativeRange}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1">
              Extinction Horizon
            </span>
            <span className="font-editorial text-lg text-amber-400/90 font-medium block">
              {animal.exactExtinctionWindow.split(';')[0]}
            </span>
          </div>
        </div>

        {/* Main Monograph Sections Grid */}
        <div className="space-y-12">
          {/* 3. Introduction */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              1. Introduction & Evolutionary Context
            </h2>
            <div className="text-stone-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>{animal.introduction}</p>
            </div>
          </section>

          {/* 4. Physical Characteristics and Size */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              2. Physical Characteristics & Size
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-sm bg-[#131d17] border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-amber-400 block mb-1">
                  Estimated Height / Length
                </span>
                <span className="font-editorial text-xl text-[#f5f0e6] font-medium">
                  {animal.physicalSpecs.estimatedHeightOrLength}
                </span>
              </div>
              <div className="p-5 rounded-sm bg-[#131d17] border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-amber-400 block mb-1">
                  Estimated Body Mass
                </span>
                <span className="font-editorial text-xl text-[#f5f0e6] font-medium">
                  {animal.physicalSpecs.estimatedMass}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                Key Morphological & Anatomical Adaptations
              </h3>
              <ul className="space-y-2 text-sm text-stone-300">
                {animal.physicalSpecs.distinguishingFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#101612] p-3 rounded-sm border border-stone-800/80">
                    <span className="text-amber-500 font-mono text-xs mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {animal.physicalSpecs.sexualDimorphism && (
              <p className="mt-4 text-xs text-stone-400 italic">
                <strong className="text-stone-300 not-italic">Sexual Dimorphism:</strong> {animal.physicalSpecs.sexualDimorphism}
              </p>
            )}
          </section>

          {/* 5. Habitat and Geographical Distribution */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              3. Habitat & Geographical Distribution
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {animal.habitatAndDistribution}
            </p>
          </section>

          {/* 6. Diet and Behavior */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              4. Diet & Ecological Role
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {animal.dietAndEcology}
            </p>
          </section>

          {/* 7 & 8. Geological Period and Extinction Horizon */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              5. Temporal Era & When It Became Extinct
            </h2>
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-stone-100">Epoch Classification: </strong>
                {animal.periodOrDate}
              </p>
              <p>
                <strong className="text-stone-100">Extinction Boundary & Uncertainty: </strong>
                {animal.extinctionTimeline}
              </p>
            </div>
          </section>

          {/* 9. Causes of Extinction & Strength of Scientific Evidence */}
          <section className="border-b border-stone-800 pb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold">
                6. Main Causes of Extinction
              </h2>
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-[#14261c] px-3 py-1 rounded-sm border border-[#2b5942]">
                Evidence: {animal.extinctionCauses.evidenceStrength}
              </span>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {animal.extinctionCauses.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {animal.extinctionCauses.primaryDrivers.map((driver, idx) => (
                <div key={idx} className="p-3.5 rounded-sm bg-[#16211a] border border-stone-800 text-xs text-stone-200 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{driver}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Fossil Evidence or Historical Records */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              7. Fossil Evidence & Specimen Records
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              {animal.fossilEvidence.specimenPreservation}
            </p>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                Key Excavation Localities:
              </span>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {animal.fossilEvidence.keySites.map((site, idx) => (
                  <li key={idx} className="p-2 rounded-sm bg-[#111713] border border-stone-800">
                    {site}
                  </li>
                ))}
              </ul>
            </div>

            {animal.fossilEvidence.notableSpecimens && (
              <div className="mt-4 p-3 bg-[#131e17] rounded-sm border border-stone-800/80 text-xs">
                <span className="text-amber-400 font-semibold block mb-0.5">Notable Preserved Specimen:</span>
                <span className="text-stone-200">{animal.fossilEvidence.notableSpecimens}</span>
              </div>
            )}
          </section>

          {/* 11. Relationship with Humans */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              8. Relationship With Humans
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {animal.humanRelationship}
            </p>
          </section>

          {/* 12. Interesting Facts */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              9. Verified Scientific Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {animal.facts.map((fact, idx) => (
                <div key={idx} className="p-4 rounded-sm bg-[#121914] border border-stone-800 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-amber-500 mb-2">#0{idx + 1}</span>
                  <p className="text-xs text-stone-200 leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 13. Scientific Sources and Further Reading */}
          <section className="border-b border-stone-800 pb-10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-4">
              10. Scientific Sources & Peer-Reviewed Literature
            </h2>
            <div className="space-y-3">
              {animal.sources.map((src, idx) => (
                <div key={idx} className="p-4 rounded-sm bg-[#101612] border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-medium text-stone-200 text-sm">{src.title}</h4>
                    <p className="text-stone-400 mt-0.5">
                      {src.institution} {src.year ? `· ${src.year}` : ''}
                    </p>
                  </div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold self-start sm:self-auto shrink-0"
                  >
                    <span>Verify Journal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 14. Related Animal Articles & Taxa */}
          <section className="pt-2">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold mb-6">
              11. Related Species & Associated Essays
            </h2>

            {/* Related Animals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {relatedAnimals.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectAnimal(rel.id)}
                  className="p-4 rounded-sm bg-[#121914] border border-stone-800 hover:border-amber-500/50 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <img
                    src={rel.image}
                    alt={rel.commonName}
                    className="w-full aspect-video object-cover rounded-sm mb-3 group-hover:scale-102 transition-transform"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = getImageFallback(rel.image);
                      }
                    }}
                  />
                  <div>
                    <h4 className="font-editorial text-lg text-[#f5f0e6] font-semibold group-hover:text-amber-400">
                      {rel.commonName}
                    </h4>
                    <p className="text-[11px] italic text-stone-400 font-serif mb-2">
                      {rel.scientificName}
                    </p>
                  </div>
                  <span className="text-xs text-amber-400 flex items-center gap-1 font-medium mt-2">
                    <span>Inspect Monograph</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              ))}
            </div>

            {/* Related Research Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-4 border-t border-stone-800">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-4">
                  Associated Field Investigations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onSelectArticle(art.slug)}
                      className="p-4 rounded-sm bg-[#101713] border border-stone-800 hover:border-amber-500/40 cursor-pointer transition-colors"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-amber-500/90 font-medium block mb-1">
                        {art.category} · {art.readTimeMinutes} min read
                      </span>
                      <h4 className="font-editorial text-base text-[#f5f0e6] font-semibold line-clamp-1 mb-1">
                        {art.title}
                      </h4>
                      <p className="text-xs text-stone-400 line-clamp-2">
                        {art.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </article>
  );
};
