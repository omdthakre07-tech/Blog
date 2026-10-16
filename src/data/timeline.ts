import { TimelineMilestone } from '../types';

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'ordovician-silurian',
    timeLabel: '~443 Million Years Ago',
    period: 'Late Ordovician',
    era: 'Paleozoic Era',
    millionYearsAgo: 443,
    type: 'mass-extinction',
    title: 'The Ordovician-Silurian Mass Extinction',
    headline: 'Glaciation and Sudden Thermal Reversals Wipe Out 85% of Marine Life',
    summary: 'The first of the "Big Five" mass extinctions. Enormous Gondwanan glaciers formed over the South Pole, draining epicontinental shallow seas, followed by rapid warming and intense oceanic anoxia.',
    causalFactors: [
      'Gondwana continental drift over the South Pole triggering extensive glaciation',
      'Dramatic drop in global sea levels destroying warm coastal shelf habitats',
      'Sudden post-glacial thermal pulse creating widespread toxic anoxic bottom waters'
    ],
    affectedLife: '85% of all marine species vanished, including massive die-offs of trilobites, brachiopods, graptolites, and archaic corals.',
    scientificConsensus: 'High consensus for a two-pulse extinction driven by glacial inception followed by post-glacial anoxia.'
  },
  {
    id: 'late-devonian',
    timeLabel: '~372 Million Years Ago',
    period: 'Late Devonian',
    era: 'Paleozoic Era',
    millionYearsAgo: 372,
    type: 'mass-extinction',
    title: 'The Kellwasser & Hangenberg Events',
    headline: 'Eutrophication, Anoxia, and the Fall of Armored Fish',
    summary: 'A prolonged multi-pulse biodiversity crisis spanning 20 million years. The proliferation of early land forests caused massive weathering and nutrient runoff, suffocating ancient oceans in algal blooms.',
    causalFactors: [
      'Rapid terrestrial land plant radiation driving intense silicate weathering and nutrient runoff',
      'Extreme ocean eutrophication and widespread oceanic dead zones (anoxia)',
      'Volcanic eruptions in the Viluy Traps of Siberia'
    ],
    affectedLife: '75% of all species eliminated. Armored placoderm fish (like Dunkleosteus) and ancient coral-stromatoporoid reef systems were annihilated.',
    scientificConsensus: 'Strong consensus that marine anoxia was the primary mechanism, driven by terrestrial soil evolution and volcanism.'
  },
  {
    id: 'end-permian',
    timeLabel: '~251.9 Million Years Ago',
    period: 'End-Permian',
    era: 'Paleozoic to Mesozoic Transition',
    millionYearsAgo: 251.9,
    type: 'mass-extinction',
    title: 'The Great Dying: The Mother of All Extinctions',
    headline: 'Siberian Flood Basalts Trigger Super-Greenhouse Catastrophe',
    summary: 'The most lethal event in biospheric history. Siberian Traps volcanic fissures unleashed over 3 million cubic kilometers of lava through coal basins, spewing immense volumes of greenhouse gases that brought multicellular life to the verge of total collapse.',
    causalFactors: [
      'Siberian Traps volcanic eruptions through rich coal and hydrocarbon deposits',
      'Extreme runaway global greenhouse warming (ocean temperatures reached 40°C / 104°F)',
      'Massive ocean acidification, total marine anoxia, and ozone layer stripping'
    ],
    affectedLife: '96% of all marine species and over 70% of terrestrial vertebrate families perished. Earth took 10 million years for biodiversity to recover.',
    scientificConsensus: 'Very high consensus that volcanic hyper-greenhouse conditions and ocean acidification caused this systemic biospheric collapse.'
  },
  {
    id: 'end-triassic',
    timeLabel: '~201.3 Million Years Ago',
    period: 'End-Triassic',
    era: 'Mesozoic Era',
    millionYearsAgo: 201.3,
    type: 'mass-extinction',
    title: 'The CAMP Volcanic Eruption & Breakup of Pangaea',
    headline: 'Clearing the Ecological Stage for the Age of Dinosaurs',
    summary: 'As the supercontinent Pangaea began rifting apart, the Central Atlantic Magmatic Province (CAMP) erupted. The resulting climate shifts wiped out competitive pseudosuchian archosaurs and large temnospondyl amphibians.',
    causalFactors: [
      'Intense carbon dioxide outgassing from CAMP flood basalts during Pangaean rifting',
      'Brief sulfur-induced volcanic winter followed by prolonged greenhouse warming',
      'Ocean acidification affecting calcifying marine organisms'
    ],
    affectedLife: 'Approximately 76% of all species disappeared. Crucially, non-dinosaur archosaurs vanished, allowing agile early dinosaurs to radiate globally.',
    scientificConsensus: 'Consensus connects the extinction pulses directly to pulsed CAMP volcanic episodes.'
  },
  {
    id: 'end-cretaceous-k-pg',
    timeLabel: '~66.0 Million Years Ago',
    period: 'End-Cretaceous (K-Pg Boundary)',
    era: 'Mesozoic to Cenozoic Transition',
    millionYearsAgo: 66,
    type: 'mass-extinction',
    title: 'The Chicxulub Asteroid Impact',
    headline: 'The End of Non-Avian Dinosaurs and the Dawn of Mammalian Primacy',
    summary: 'A 10-kilometer diameter carbonaceous chondrite asteroid slammed into the Yucatán Peninsula at 20 km/s. The impact vaporized sulfate-rich rock, igniting global wildfires and cloaking the planet in an impact winter that halted photosynthesis for over a year.',
    causalFactors: [
      'Asteroid impact at Chicxulub creating a 180-kilometer crater',
      'Sulfur aerosol and soot emissions creating multi-year global darkness and sub-zero freeze',
      'Deccan Traps flood basalt volcanism in modern India compounding climatic instability'
    ],
    affectedLife: '76% of all species eliminated. All non-avian dinosaurs, pterosaurs, ammonites, and giant marine mosasaurs perished. Small avian theropods (modern birds) and burrowing nocturnal mammals survived.',
    scientificConsensus: 'Overwhelming scientific consensus confirms the Chicxulub asteroid impact as the primary catastrophic trigger.'
  },
  {
    id: 'paleocene-titanoboa',
    timeLabel: '~58 Million Years Ago',
    period: 'Paleocene Epoch',
    era: 'Early Cenozoic Era',
    millionYearsAgo: 58,
    type: 'prehistoric-loss',
    title: 'Cooling of the Paleocene Greenhouse Swamps',
    headline: 'The Disappearance of Titanoboa and Giant Paleogene Squamates',
    summary: 'Roughly 8 million years after the K-Pg extinction, equatorial Colombia experienced humid tropical temperatures averaging 32°C. When this thermal anomaly subsided and Andean mountain building reconfigured drainage, the giant 13-meter snake Titanoboa vanished.',
    causalFactors: [
      'Gradual drop in equatorial temperatures reducing the metabolic efficiency of 1-ton ectotherms',
      'Tectonic restructuring of coastal swamp ecosystems and river basins',
      'Competition from evolving modern mammalian carnivores'
    ],
    affectedLife: 'Extinction of colossal squamates and archaic crocodylomorphs, paving the way for mammalian predators.',
    keySpeciesInvolved: ['Titanoboa cerrejonensis', 'Carbonemys cofrinii'],
    scientificConsensus: 'Strong agreement linking the maximum size of ectothermic reptiles to ambient paleoclimatic temperatures.'
  },
  {
    id: 'pliocene-megalodon',
    timeLabel: '~3.6 Million Years Ago',
    period: 'Late Pliocene',
    era: 'Cenozoic Era',
    millionYearsAgo: 3.6,
    type: 'prehistoric-loss',
    title: 'Pliocene Ocean Cooling & The Fall of Megalodon',
    headline: 'Collapse of Coastal Shelves Ends the 20-Million-Year Reign of the Megatooth Shark',
    summary: 'The closure of the Isthmus of Panama reshuffled global oceanic currents. Warm shallow nursery shelves cooled, polar ice sheets expanded, and baleen whales migrated to icy polar oceans where warm-water apex sharks could not sustain their massive energetic demands.',
    causalFactors: [
      'Formation of the Isthmus of Panama rerouting the Atlantic-Pacific oceanic heat conveyor',
      'Loss of warm, productive coastal nursery shelves to dropping sea levels',
      'Prey migration into polar waters and competitive pressure from ancestral great white sharks and orcas'
    ],
    affectedLife: 'Extinction of Otodus megalodon and numerous warm-adapted dwarf baleen whale species.',
    keySpeciesInvolved: ['Otodus megalodon', 'Cetotheriidae'],
    scientificConsensus: 'Consensus places extinction at ~3.6 Ma based on global dental bio-stratigraphy, refuting all modern survival myths.'
  },
  {
    id: 'quaternary-megafauna',
    timeLabel: '~50,000 to 10,000 Years Ago',
    period: 'Late Pleistocene',
    era: 'Quaternary Period',
    yearsAgo: 10000,
    type: 'prehistoric-loss',
    title: 'The Quaternary Megafaunal Extinction',
    headline: 'The Great Ice Age Die-Off: Mammoths, Sabertooths, and Giant Deer',
    summary: 'Across continents, more than 170 genera of large terrestrial animals (over 44 kg / 100 lbs) vanished as the Last Glacial Maximum ended. Rapid climate reorganization combined with the global expansion of Upper Paleolithic Homo sapiens equipped with sophisticated projectile weapons.',
    causalFactors: [
      'Climatic warming dismantling the high-protein mammoth steppe biome into boggy taiga',
      'Arrival and demographic expansion of specialized human hunters into naive habitats',
      'Trophic cascades: loss of keystone megaherbivores collapsed predator and scavenger guilds'
    ],
    affectedLife: 'Woolly mammoth, Smilodon, Irish elk, woolly rhinoceros, ground sloths, dire wolves, and giant glyptodonts.',
    keySpeciesInvolved: ['Mammuthus primigenius', 'Smilodon fatalis', 'Megaloceros giganteus'],
    scientificConsensus: 'High consensus that extinction was driven by a synergistic combination of climatic habitat shifts and human hunting.'
  },
  {
    id: 'historical-anthropocene',
    timeLabel: '1600 to 1936 CE',
    period: 'Historical Anthropocene',
    era: 'Modern Holocene',
    exactDate: '1662–1936 CE',
    type: 'historical-extinction',
    title: 'The Early Anthropocene Pulse: Island Naivety & Industrial Harvesting',
    headline: 'The Loss of the Dodo, Sea Cow, Great Auk, Passenger Pigeon, and Thylacine',
    summary: 'Documented in written historical records and museum archives. European maritime expansion, colonial bounty systems, invasive predator introductions, and industrial-scale market exploitation triggered rapid extinctions within human lifespans.',
    causalFactors: [
      'Invasive species introductions (pigs, rats, cats, macaques) decimating island ground nests',
      'Commercial market hunting enabled by firearms, steam locomotives, and telegraphs',
      'Institutional bounty programs targeting native predators (bounties on thylacines in Tasmania)',
      'Total lack of biological protections prior to 20th-century conservation treaties'
    ],
    affectedLife: 'Dodo (c. 1662–1693), Steller’s Sea Cow (1768), Great Auk (1844), Quagga (1883), Passenger Pigeon (1914), and Thylacine (1936).',
    keySpeciesInvolved: ['Raphus cucullatus', 'Hydrodamalis gigas', 'Pinguinus impennis', 'Ectopistes migratorius', 'Thylacinus cynocephalus'],
    scientificConsensus: 'Direct, documented historical causation with precise dates, eye-witness testimonies, and specimen catalog records.'
  }
];
