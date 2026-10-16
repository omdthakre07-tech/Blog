import React from 'react';
import { ShieldCheck, BookOpen, Compass, Award, ExternalLink, Globe } from 'lucide-react';

interface AboutPageProps {
  onOpenReferences: () => void;
  onExplore: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenReferences, onExplore }) => {
  return (
    <div className="min-h-screen bg-[#0b0f0d] text-stone-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <span>Natural History Mission & Editorial Policy</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-medium tracking-tight mb-4">
            About LOST SPECIES
          </h1>
          <p className="font-editorial italic text-xl text-amber-400/90 leading-relaxed">
            "Discover the Giants That Time Forgot."
          </p>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 text-sm sm:text-base text-stone-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold">
              Our Mission
            </h2>
            <p>
              LOST SPECIES is an independent natural history journal and digital archive dedicated to the science of paleontology, historical biology, and extinction ecology. We present the extraordinary creatures that once inhabited our planet not as mythic monsters or cartoon curiosities, but as sophisticated, flesh-and-blood organisms exquisitely adapted to their ancient biomes.
            </p>
            <p>
              By uniting peer-reviewed academic literature with cinematic documentary presentation, we strive to make the deep-time history of Earth accessible, rigorous, and awe-inspiring.
            </p>
          </section>

          {/* Core Scientific Standards */}
          <section className="p-6 rounded-sm bg-[#111713] border border-stone-800 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Scientific Accuracy Charter</span>
            </div>
            <h3 className="font-editorial text-2xl text-[#f5f0e6] font-semibold">
              How We Ensure Factual Integrity
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-500 font-mono font-bold">•</span>
                <span>
                  <strong className="text-stone-100">Zero Fabricated Data:</strong> Every anatomical measurement, radiocarbon date, and extinction horizon is referenced from peer-reviewed paleontology journals and museum accession catalogues.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-500 font-mono font-bold">•</span>
                <span>
                  <strong className="text-stone-100">Deep Time Chronological Precision:</strong> We strictly avoid temporal anachronisms. Non-avian dinosaurs went extinct 66 million years ago; Ice Age mammals (like mammoths and saber-toothed cats) appeared tens of millions of years later. They did not coexist.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-500 font-mono font-bold">•</span>
                <span>
                  <strong className="text-stone-100">Avian Evolutionary Lineage:</strong> We clearly note that modern birds are living theropod dinosaurs—the sole surviving branch of Dinosauria that weathered the K-Pg impact.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-500 font-mono font-bold">•</span>
                <span>
                  <strong className="text-stone-100">Consensus vs. Hypothesis:</strong> Where scientific debate exists—such as the exact relative weight of human overkill versus climate change in the Pleistocene die-off—we explicitly articulate both sides with the current evidentiary balance.
                </span>
              </li>
            </ul>
          </section>

          {/* Conservation Connection */}
          <section className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e6] font-semibold">
              Why Extinction History Matters Today
            </h2>
            <p>
              Looking back is not an exercise in idle nostalgia. The historical mechanisms that erased the passenger pigeon in four decades, eliminated the dodo in seven, and drove the thylacine to a cold cage in 1936 are operating right now across our modern biosphere.
            </p>
            <p>
              By understanding the cascade of events that trigger ecological tipping points—habitat fragmentation, island naivety, trophic collapse, and the Allee effect—we gain irreplaceable tools to defend the species currently fighting for survival.
            </p>
          </section>

          {/* Editorial Board Callout */}
          <section className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-500 block">
                Primary Sources
              </span>
              <span className="font-editorial text-lg text-[#f5f0e6]">
                Smithsonian NMNH · Natural History Museum London · AMNH · IUCN
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenReferences}
                className="px-4 py-2 rounded-sm bg-[#141e17] hover:bg-[#1c2e22] border border-stone-700 text-amber-400 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inspect Bibliography
              </button>
              <button
                onClick={onExplore}
                className="px-4 py-2 rounded-sm bg-[#1b3a2b] hover:bg-[#254f3a] border border-[#377254] text-[#f5f0e6] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Explore Species
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
