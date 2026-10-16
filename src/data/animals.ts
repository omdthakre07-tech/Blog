import { Animal } from '../types';
import { IMAGES } from '../assets/images';

export const ANIMALS: Animal[] = [
  {
    id: 'woolly-mammoth',
    slug: 'woolly-mammoth',
    commonName: 'Woolly Mammoth',
    scientificName: 'Mammuthus primigenius',
    categories: ['ice-age-giants', 'extinct-mammals'],
    periodOrDate: 'Pleistocene to Mid-Holocene (~300,000 – 4,000 years ago)',
    exactExtinctionWindow: 'Mainland populations vanished ~10,000 BP; isolated relic colony on Wrangel Island survived until ~4,000 BP (c. 2000 BCE)',
    nativeRange: 'Circumpolar mammoth steppe across Northern Eurasia, Siberia, and North America',
    image: IMAGES.heroMammoth,
    imageCaption: 'Woolly mammoth traversing the cold, arid Pleistocene mammoth steppe under low Arctic sunlight.',
    briefDescription: 'A colossal cold-adapted proboscidean draped in dual-layered fur and armed with spiraling ivory tusks up to 4.2 meters long.',
    introduction: 'The woolly mammoth (Mammuthus primigenius) is the quintessential icon of the Pleistocene Ice Age. Evolving in northeastern Siberia roughly 300,000 years ago from the earlier steppe mammoth (Mammuthus trogontherii), this species was exquisitely adapted to the hyper-arid, nutrient-rich herbaceous grasslands known to science as the mammoth steppe.',
    physicalSpecs: {
      estimatedHeightOrLength: '2.7 to 3.4 meters (8.9 to 11.2 ft) shoulder height in mature bulls',
      estimatedMass: '4,000 to 6,000 kg (4.4 to 6.6 short tons)',
      distinguishingFeatures: [
        'Curved, helical tusks measuring up to 4.2 m (13.8 ft) in older males',
        'Dual-layer pelage: coarse guard hairs up to 90 cm long over a dense, insulating underwool',
        'Small ear pinnae (only ~30 cm) and short tail to minimize heat loss in sub-zero winds',
        'High, domed cranium and fatty hump over the shoulders storing seasonal lipids'
      ],
      sexualDimorphism: 'Bulls were significantly larger than matriarchal cows, with tusks up to twice as heavy and pronounced cranial crests.'
    },
    habitatAndDistribution: 'The woolly mammoth inhabited the mammoth steppe (steppe-tundra), an immense biome stretching uninterrupted from the British Isles across Central Asia and the exposed Bering land bridge to Atlantic Canada. This biome was characterized by cold, arid winters, minimal snow accumulation, and rich vegetation dominated by perennial grasses, herbs, and dwarf willows.',
    dietAndEcology: 'Analysis of stomach contents from permafrost mummies indicates a herbivorous diet consisting of 70–90% cold-tolerant grasses (Poaceae) and sedges (Cyperaceae), supplemented by high-protein forbs (Artemisia, Ranunculus), mosses, and woody willow shoots. A full-grown adult processed up to 180 kg of fibrous biomass daily, shaping the vegetation structure and nutrient cycling of the northern hemisphere.',
    geologicalEpoch: 'Late Pleistocene to Mid-Holocene Epoch (Quaternary Period)',
    extinctionTimeline: 'Continental extinction occurred in pulses between 14,000 and 10,000 years before present as the Bølling-Allerød warming melted glaciers and replaced dry steppes with boggy taiga and mossy tundra. However, isolated refugia lingered: a small population survived on St. Paul Island, Alaska until ~5,600 BP, while the ultimate relic herd persisted on Wrangel Island in the Arctic Ocean until approximately 4,000 years ago (~2000 BCE).',
    extinctionCauses: {
      primaryDrivers: [
        'Rapid climatic warming driving vegetation change and biome loss',
        'Replacement of protein-rich arid steppes by unpalatable moss tundra and deep waterlogged snow',
        'Expanding Upper Paleolithic human hunting pressure compounding demographic decline',
        'Severe genetic bottlenecking, inbreeding, and genomic meltdown in island refugia'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Genomic and radiocarbon data strongly indicate a lethal synergistic interplay: climate shifts fragmented the mammoth steppe, and human hunting drove vulnerable, depleted populations over the brink of extinction.'
    },
    fossilEvidence: {
      keySites: [
        'Severnaya Zemlya & Yamal Peninsula, Siberia (mummified calves "Lyuba" and "Khroma")',
        'Berelekh Mammoth Graveyard, Yakutia (remains of over 140 individuals)',
        'Wrangel Island, Chukchi Sea (last surviving Holocene specimens)'
      ],
      specimenPreservation: 'Exceptional mummification in Siberian permafrost preserving intact muscles, gut contents, skin, hair, and high-coverage nuclear DNA.',
      notableSpecimens: '"Lyuba" (discovered 2007 in Yamal), a 41,800-year-old female calf preserved in near-perfect anatomical detail.'
    },
    humanRelationship: 'Mammoths were deeply entwined with human culture. Upper Paleolithic peoples hunted them for marrow and meat, carved dwellings from their mandibles and ribs (as seen at Mezhyrich, Ukraine), and immortalized them in Chauvet and Rouffignac cave art.',
    facts: [
      'Wrangel Island mammoths were still alive while the Great Pyramid of Giza was being constructed in Egypt.',
      'Their blood possessed mutated hemoglobin alleles with modified oxygen release that functioned efficiently at freezing temperatures.',
      'A mammoth’s tusks grew continuously in annual layers, preserving an isotopic chronological diary of its nutritional health, seasons, and migrations.'
    ],
    sources: [
      {
        title: 'Complete genomes reveal signatures of demographic change and inbreeding in the last woolly mammoths',
        institution: 'Current Biology / Cell Press',
        year: 2015,
        url: 'https://www.cell.com/current-biology/fulltext/S0960-9822(15)00399-4'
      },
      {
        title: 'Woolly mammoth profile & fossil collections',
        institution: 'Natural History Museum, London',
        year: 2024,
        url: 'https://www.nhm.ac.uk/discover/the-woolly-mammoth.html'
      },
      {
        title: 'The extinction of the woolly mammoth',
        institution: 'Smithsonian National Museum of Natural History',
        year: 2023,
        url: 'https://naturalhistory.si.edu/research/paleobiology'
      }
    ],
    relatedAnimalIds: ['smilodon', 'irish-elk', 'thylacine']
  },
  {
    id: 'dodo',
    slug: 'dodo',
    commonName: 'Dodo',
    scientificName: 'Raphus cucullatus',
    categories: ['extinct-birds', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (extinct c. 1662–1693 CE)',
    exactExtinctionWindow: 'Last widely accepted live sighting in 1662 (Volkert Evertsz); statistical extinction confidence window points to 1693 CE',
    nativeRange: 'Endemic solely to the volcanic island of Mauritius in the Indian Ocean',
    image: IMAGES.dodoBird,
    imageCaption: 'The Dodo foraging along the damp, moss-covered volcanic forest floor of primeval Mauritius.',
    briefDescription: 'A heavy, flightless columbid bird that evolved in island isolation, famous worldwide as an emblem of human-induced extinction.',
    introduction: 'The dodo (Raphus cucullatus) was an endemic, flightless bird restricted exclusively to the 2,040-square-kilometer island of Mauritius. Phylogenetic analyses of ancient mitochondrial DNA have confirmed that the dodo was a giant, ground-dwelling dove whose closest living relative is the Nicobar pigeon (Caloenas nicobarica).',
    physicalSpecs: {
      estimatedHeightOrLength: 'Approximately 1.0 meter (3.3 ft) in standing height',
      estimatedMass: '10.2 to 17.5 kg (22 to 39 lbs), with dramatic seasonal fat fluctuations',
      distinguishingFeatures: [
        'Robust, hooked beak measuring up to 23 cm with a greenish-yellow keratin sheath',
        'Atrophied, tiny wings with just a few soft, plume-like feathers incapable of powered flight',
        'Stout, yellow legs with four strong talons adapted for walking over uneven basalt rocks',
        'Tuft of curled tail feathers and featherless grayish facial mask'
      ],
      sexualDimorphism: 'Males possessed slightly longer beaks and heavier tarsometatarsi than females.'
    },
    habitatAndDistribution: 'The dodo inhabited the coastal dry lowland forests and palm savannas of Mauritius, particularly in the south and west of the island where freshwater streams drained volcanic slopes into lagoons.',
    dietAndEcology: 'Isotopic and anatomical evidence indicates the dodo consumed fallen hard-shelled fruits, seeds, palm nuts (such as from the tambalacoque tree), bulbs, and potentially small crabs or fallen marine invertebrates during the wet monsoon season.',
    geologicalEpoch: 'Holocene Epoch (Cenozoic Era)',
    extinctionTimeline: 'First documented by Dutch sailors in 1598, the dodo survived barely seven decades of European contact. The last universally accepted eyewitness record was made by shipwrecked sailor Volkert Evertsz in 1662, though Bayesian modeling places its final extinction around 1693.',
    extinctionCauses: {
      primaryDrivers: [
        'Predation of eggs and nestlings by introduced invasive pigs, crab-eating macaques, and black rats',
        'Loss of forest cover and nesting grounds due to early colonial timber harvesting',
        'Opportunistic hunting and provisioning by passing maritime crews'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'While historical accounts often blamed hungry sailors, modern paleobiological research proves that introduced invasive mammals (especially pigs and rats) ravaging ground nests were the ultimate cause of the dodo’s demise.'
    },
    fossilEvidence: {
      keySites: [
        'Mare aux Songes marsh, southeastern Mauritius (thousands of subfossil bones deposited over 4,000 years)',
        'Oxford University Museum of Natural History (the "Oxford Dodo", preserving dried skin and soft tissue)'
      ],
      specimenPreservation: 'Subfossil bones in anoxic marsh mud; only one head and foot survive with mummified soft tissue in European collections.',
      notableSpecimens: 'The Oxford Dodo head and foot (specimen OUMNH 11605), the world’s only surviving soft-tissue remains.'
    },
    humanRelationship: 'Having evolved without terrestrial mammalian predators, dodos exhibited ecological naivety ("island tameness"), walking up to human visitors without instinctual fear. They were quickly immortalized in popular culture, including Lewis Carroll’s Alice in Wonderland.',
    facts: [
      'The dodo was not a clumsy, sluggish caricature; bone histological studies reveal it was an agile, muscular bird adapted to rough volcanic terrain.',
      'The dodo underwent seasonal molts, shedding its plumage entirely after the breeding season, which explains why historical Dutch drawings depicted drastically different looking birds.',
      'Its closest living relative is the shimmering, iridescent Nicobar pigeon of Southeast Asia.'
    ],
    sources: [
      {
        title: 'The osteology, plumage and ecology of the Dodo: A modern anatomical review',
        institution: 'Zoological Journal of the Linnean Society',
        year: 2016,
        url: 'https://academic.oup.com/zoolinnean'
      },
      {
        title: 'Dodo subfossil collections at Mare aux Songes',
        institution: 'Natural History Museum, London',
        year: 2023,
        url: 'https://www.nhm.ac.uk/discover/the-dodo.html'
      },
      {
        title: 'Raphus cucullatus Red List Assessment',
        institution: 'IUCN Red List of Threatened Species',
        year: 2021,
        url: 'https://www.iucnredlist.org'
      }
    ],
    relatedAnimalIds: ['passenger-pigeon', 'great-auk', 'woolly-mammoth']
  },
  {
    id: 'thylacine',
    slug: 'thylacine',
    commonName: 'Tasmanian Tiger',
    scientificName: 'Thylacinus cynocephalus',
    categories: ['extinct-mammals', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (Declared extinct in 1936 CE)',
    exactExtinctionWindow: 'Last authenticated individual died on September 7, 1936 at Beaumaris Zoo in Hobart, Tasmania',
    nativeRange: 'Mainland Australia, New Guinea (prehistoric), and the island of Tasmania in historical times',
    image: IMAGES.thylacine,
    imageCaption: 'The Thylacine standing in the damp, fern-carpeted eucalyptus wilderness of western Tasmania.',
    briefDescription: 'The largest known modern carnivorous marsupial, celebrated for its 80-degree jaw gape, dorsal tiger stripes, and backward-facing pouch.',
    introduction: 'The thylacine (Thylacinus cynocephalus), commonly known as the Tasmanian tiger or Tasmanian wolf, was an extraordinary example of convergent evolution. Despite being a marsupial related to kangaroos and wombats, it independently evolved a skull morphology, dental formula, and predatory niche remarkably analogous to placental canids such as the gray wolf.',
    physicalSpecs: {
      estimatedHeightOrLength: '50 to 60 cm (20 to 24 in) at the shoulder; 100 to 130 cm head-to-tail body length',
      estimatedMass: '15 to 30 kg (33 to 66 lbs)',
      distinguishingFeatures: [
        '15 to 20 dark brown transverse stripes across the rump, lower back, and base of the tail',
        'Inflexible, stiff tail that merged seamlessly into the base of the spine, preventing wagging',
        'Astonishing jaw articulation capable of opening to an angle of 80 to 90 degrees',
        'Females possessed a backward-facing abdominal pouch with four teats to protect young while foraging'
      ],
      sexualDimorphism: 'Adult males were approximately 10 to 15% heavier with broader craniums than mature females.'
    },
    habitatAndDistribution: 'While prehistoric fossils confirm the thylacine lived across mainland Australia and New Guinea, historical populations were confined to Tasmania’s coastal heathlands, open dry eucalyptus forests, and rugged western rainforest margins.',
    dietAndEcology: 'As a solitary, nocturnal ambush predator, the thylacine hunted small-to-medium vertebrates including pademelons, Bennett’s wallabies, wombats, and ground-nesting birds. Biomechanical studies indicate its jaws were relatively weak for hunting sheep, refuting colonial pastoral claims.',
    geologicalEpoch: 'Late Pleistocene to Historical Anthropocene (extinct 1936)',
    extinctionTimeline: 'Disappeared from mainland Australia roughly 3,000–2,000 years ago, likely following the introduction of the dingo and mid-Holocene climatic aridification. On Tasmania, an intensive government and private wool-grower bounty system between 1888 and 1909 paid out over 2,180 bounties, driving the species into terminal population collapse.',
    extinctionCauses: {
      primaryDrivers: [
        'Relentless government and private bounty extermination campaigns (1830–1914)',
        'Habitat fragmentation and competition with introduced domestic pastoral dogs',
        'Distemper-like viral disease epizootic sweeping through remaining populations around 1910',
        'Severe genetic isolation and low pre-existing heterozygosity'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Direct human persecution through systematic bounties—falsely scapegoating the animal for domestic sheep predation—was the undisputed primary driver of extinction.'
    },
    fossilEvidence: {
      keySites: [
        'Naracoorte Caves, South Australia (abundant Pleistocene mainland fossils)',
        'Murchison River & Thylacine Hole, Nullarbor Plain (mummified cave specimens)',
        'Tasmanian Museum and Art Gallery, Hobart (historical pelts and skeletal series)'
      ],
      specimenPreservation: 'Museum skins, articulated osteological skeletons, and alcohol-preserved pouch young with high-fidelity nuclear DNA.',
      notableSpecimens: 'The Nullarbor cave mummy (discovered 1990), naturally desiccated with skin, fur, and tongue preserved after ~4,500 years.'
    },
    humanRelationship: 'Indigenous Tasmanian Australians (Palawa) coexisted with the thylacine for millennia and called it "Coorinna" or "Kanunnah". European pastoralists viewed it with hostility, branding it a bloodthirsty sheep-slayer and pursuing it to complete annihilation.',
    facts: [
      'Both female and male thylacines had pouches: the female’s held and nursed joeys, while the male’s pouch acted as a protective sheath during hunts.',
      'When threatened or cornered, a thylacine could perform an unusual bipedal hop, resting on its stiff tail and hind legs like a kangaroo.',
      'September 7 is officially commemorated in Australia as National Threatened Species Day in solemn memory of the last thylacine’s death in 1936.'
    ],
    sources: [
      {
        title: 'Genome of the Tasmanian tiger provides insights into the evolution and demography of an extinct marsupial predator',
        institution: 'Nature Ecology & Evolution',
        year: 2018,
        url: 'https://www.nature.com/articles/s41559-017-0417-y'
      },
      {
        title: 'Thylacinus cynocephalus species profile',
        institution: 'Smithsonian Institution Archives',
        year: 2022,
        url: 'https://siarchives.si.edu'
      },
      {
        title: 'Extinction history of the Thylacine',
        institution: 'Tasmanian Museum and Art Gallery',
        year: 2024,
        url: 'https://www.tmag.tas.gov.au'
      }
    ],
    relatedAnimalIds: ['smilodon', 'woolly-mammoth', 'quagga']
  },
  {
    id: 'smilodon',
    slug: 'smilodon',
    commonName: 'Saber-toothed Cat',
    scientificName: 'Smilodon fatalis',
    categories: ['ice-age-giants', 'extinct-mammals'],
    periodOrDate: 'Pleistocene Epoch (~2.5 million to 10,000 years ago)',
    exactExtinctionWindow: 'Disappeared at the close of the Last Glacial Maximum, approximately 10,000–9,000 BCE (~11,000 BP)',
    nativeRange: 'North and South America, ranging from Alaska down to the southern cone of Chile',
    image: IMAGES.smilodon,
    imageCaption: 'A powerful Smilodon fatalis surveying open woodlands from a limestone ledge in Pleistocene North America.',
    briefDescription: 'A heavy-bodied hypercarnivore equipped with serrated 28 cm canines, built to wrestle and swiftly dispatch Pleistocene mega-herbivores.',
    introduction: 'Smilodon fatalis was one of the most specialized and devastating apex predators of the Cenozoic Era. Unlike modern pantherines (lions, tigers, and jaguars) that rely on a prolonged suffocating neck bite, Smilodon evolved an ambush-and-pin strategy, utilizing massive forelimbs to immobilize giant prey before delivering a rapid, lethal shearing bite to the carotid vessels and trachea.',
    physicalSpecs: {
      estimatedHeightOrLength: '1.0 to 1.2 meters (3.3 to 4.0 ft) shoulder height; 1.75 meters (5.7 ft) body length',
      estimatedMass: '160 to 280 kg (350 to 620 lbs); the South American species Smilodon populator exceeded 400 kg',
      distinguishingFeatures: [
        'Elongated, laterally compressed upper canine teeth up to 28 cm (11 in) in length including root',
        'Extremely robust, muscular humeral and radial forelimb bones far denser than any living big cat',
        'Short, bobtail-like tail, indicating it was an ambush predator rather than a high-speed pursuit hunter',
        'Specialized cranial joints allowing a 128-degree jaw gape to accommodate the massive sabers'
      ],
      sexualDimorphism: 'Minimal sexual size dimorphism; males and females possessed virtually identical body mass and saber tooth lengths.'
    },
    habitatAndDistribution: 'Smilodon fatalis inhabited brushy woodlands, riparian canyons, scrublands, and forest edges throughout the Americas where ample cover permitted close-range ambush attacks.',
    dietAndEcology: 'Stable isotope analysis of fossil collagen from asphalt deposits demonstrates that Smilodon preyed primarily on large herbivorous megafauna, including juvenile mammoths, bison (Bison antiquus), ground sloths (Paramylodon), ancient horses (Equus occidentalis), and camelids (Camelops).',
    geologicalEpoch: 'Late Pleistocene Epoch (Quaternary Period)',
    extinctionTimeline: 'Extinction occurred approximately 11,000 to 10,000 calibrated years ago during the Quaternary Megafaunal Extinction, precisely synchronized with the sudden collapse of North American mega-herbivore populations.',
    extinctionCauses: {
      primaryDrivers: [
        'Total collapse of large prey populations (ground sloths, horses, camels, and bison)',
        'Climatic shifts transitioning woodlands into dense closed boreal forests or arid plains',
        'Competitive exclusion and direct competition with arriving Clovis and Paleo-Indian human hunters'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Because Smilodon was an extreme hyper-specialist adapted exclusively for immobilizing and butchering giant herbivores, it could not pivot to hunting swift, small prey when mega-herbivores vanished.'
    },
    fossilEvidence: {
      keySites: [
        'La Brea Tar Pits, Los Angeles, California (over 166,000 individual bones representing 3,000+ Smilodon cats)',
        'Talara Tar Seeps, Peru',
        'Friesenhahn Cave, Texas'
      ],
      specimenPreservation: 'Pristine asphaltic preservation at Rancho La Brea providing complete ontogenetic series from cubs to geriatric individuals.',
      notableSpecimens: 'Specimen LACMHC 2001-2, showing healed osteological fractures indicating social pack behavior and cooperative care.'
    },
    humanRelationship: 'Coexisted with Paleo-Indian peoples in North America and early hunter-gatherers in South America for several centuries. Human weapon marks and carved bones testify to direct interaction and competition for the same prey species.',
    facts: [
      'Despite popular belief, Smilodon was not closely related to true modern tigers; it belonged to an entirely distinct extinct felid subfamily, the Machairodontinae.',
      'Its bite force at the back molars was actually weaker than a modern lion, but its massive neck musculature allowed it to drive its knife-like canines downward with crushing torque.',
      'Healed broken bones in thousands of La Brea fossils prove that wounded or disabled sabertooths were fed by members of their social group, confirming pack living.'
    ],
    sources: [
      {
        title: 'Bite club: comparative bite force in big cats and Smilodon',
        institution: 'Proceedings of the National Academy of Sciences (PNAS)',
        year: 2012,
        url: 'https://www.pnas.org'
      },
      {
        title: 'Smilodon fatalis collection records',
        institution: 'La Brea Tar Pits & Museum / NHMLAC',
        year: 2024,
        url: 'https://tarpits.org'
      },
      {
        title: 'Saber-toothed cat fossil archives',
        institution: 'American Museum of Natural History (AMNH)',
        year: 2023,
        url: 'https://www.amnh.org'
      }
    ],
    relatedAnimalIds: ['woolly-mammoth', 'irish-elk', 'thylacine']
  },
  {
    id: 'passenger-pigeon',
    slug: 'passenger-pigeon',
    commonName: 'Passenger Pigeon',
    scientificName: 'Ectopistes migratorius',
    categories: ['extinct-birds', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (Extinct 1914 CE)',
    exactExtinctionWindow: 'The last documented living individual, a female named "Martha", died on September 1, 1914 at the Cincinnati Zoo',
    nativeRange: 'Deciduous and mixed forests of Eastern and Central North America, from the Great Lakes to the Gulf Coast',
    image: IMAGES.passengerPigeon,
    imageCaption: 'The Passenger Pigeon perched quietly on an oak branch in the ancient deciduous canopy of eastern North America.',
    briefDescription: 'Once the most populous bird species on Earth with flocks numbering up to 3 to 5 billion individuals that darkened American skies for days.',
    introduction: 'The passenger pigeon (Ectopistes migratorius) represents the fastest, most catastrophic population crash of a terrestrial vertebrate in documented human history. In the early 19th century, an estimated 3 to 5 billion passenger pigeons accounted for 25 to 40% of the total land bird population of North America.',
    physicalSpecs: {
      estimatedHeightOrLength: '39 to 42 cm (15.5 to 16.5 in) total length; wingspan of 60 to 65 cm',
      estimatedMass: '260 to 340 grams (9.2 to 12.0 oz)',
      distinguishingFeatures: [
        'Streamlined, bullet-shaped body with long, pointed wings adapted for sustained flight speeds over 100 km/h',
        'Iridescent bronze, violet, and green neck feathering that flashed under direct forest light',
        'Striking slate-blue plumage on the head and back contrasted with rich reddish-fawn breast',
        'Intense, fiery crimson irises and deep pink feet'
      ],
      sexualDimorphism: 'Females were slightly smaller and duller, displaying brownish-gray chests and muted neck iridescence.'
    },
    habitatAndDistribution: 'The species relied entirely on the expansive primary mast-producing deciduous forests of eastern North America, especially vast tracts of American beech, white oak, and chestnut.',
    dietAndEcology: 'Obligate nomadic consumers of mast crops: acorns, beechnuts, chestnuts, berries, and weed seeds. Their hyper-dense nesting colonies altered forest ecology by breaking branches, depositing nutrient-rich guano, and clearing forest floors for fire-adapted saplings.',
    geologicalEpoch: 'Holocene Epoch (Extinct in the early 20th century)',
    extinctionTimeline: 'Between 1870 and 1890, commercial market hunting aided by telegraph networks and railroads decimated every major nesting colony. By 1900, the last wild bird was shot in Pike County, Ohio. The final captive bird, "Martha," died at 1:00 PM on September 1, 1914.',
    extinctionCauses: {
      primaryDrivers: [
        'Unregulated industrial-scale commercial market harvesting for cheap meat in eastern cities',
        'Expansion of railroads and telegraph networks enabling hunters to locate and wipe out entire nesting sites',
        'Severe deforestation of prime eastern hardwood forests containing ancient oak and beech mast',
        'Allee effect: the species required massive colonial density to stimulate social breeding and fend off predators'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Industrialized market slaughter directly intercepted breeding colonies, and once flock numbers dropped below critical thresholds, social breeding instincts collapsed entirely.'
    },
    fossilEvidence: {
      keySites: [
        'Pleistocene cave and karst deposits across the Midwestern and Southeastern United States',
        'Smithsonian National Museum of Natural History (Martha specimen USNM 223433)'
      ],
      specimenPreservation: 'Hundreds of historical study skins, taxidermy mounts, skeletal preparations, and frozen tissue samples in global museum archives.',
      notableSpecimens: '"Martha," mounted and permanently preserved in the Smithsonian Institution in Washington, D.C.'
    },
    humanRelationship: 'Indigenous peoples sustainably harvested squabs (young pigeons) from colonies for millennia. In the 19th century, Euro-American market hunters used nets, sulfur torches, shotguns, and cannons to slaughter hundreds of thousands daily for urban meat markets.',
    facts: [
      'John James Audubon recorded a single flock passing overhead for three consecutive days in 1813, estimating it contained over 1.1 billion birds.',
      'Their extinction directly catalyzed the birth of modern wildlife conservation legislation, including the landmark Migratory Bird Treaty Act of 1918.',
      'Genomic sequencing by modern geneticists revealed that passenger pigeons had low effective population diversity despite their billions of numbers, making them vulnerable to sudden crashes.'
    ],
    sources: [
      {
        title: 'Genomic analysis of the passenger pigeon reveals selective sweeps and boom-bust demographic history',
        institution: 'Science Magazine / AAAS',
        year: 2017,
        url: 'https://www.science.org/doi/10.1126/science.aao0960'
      },
      {
        title: 'Martha and the Passenger Pigeon collections',
        institution: 'Smithsonian National Museum of Natural History',
        year: 2024,
        url: 'https://naturalhistory.si.edu'
      },
      {
        title: 'The Great Passenger Pigeon hunt and modern conservation',
        institution: 'American Museum of Natural History',
        year: 2022,
        url: 'https://www.amnh.org'
      }
    ],
    relatedAnimalIds: ['dodo', 'great-auk', 'quagga']
  },
  {
    id: 'great-auk',
    slug: 'great-auk',
    commonName: 'Great Auk',
    scientificName: 'Pinguinus impennis',
    categories: ['extinct-birds', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (Extinct 1844 CE)',
    exactExtinctionWindow: 'The last confirmed mating pair was killed on the volcanic islet of Eldey off the coast of Iceland on June 3, 1844',
    nativeRange: 'Cold subarctic coastal waters and isolated rocky islands across the North Atlantic (Canada, Greenland, Iceland, Norway, British Isles)',
    image: IMAGES.greatAuk,
    imageCaption: 'The Great Auk perched stoically on a cold North Atlantic cliff face, displaying its hydrodynamic plumage.',
    briefDescription: 'The original "penguin" of the northern hemisphere: a magnificent, flightless maritime pelagic diving bird that plunged to depths of over 100 meters.',
    introduction: 'The great auk (Pinguinus impennis) was the only modern flightless alcid of the North Atlantic. Standing up to 85 cm tall, it was so hydrodynamic that sailors likened its swimming speed to that of a marine fish. Long before European explorers encountered southern penguins, the word "penguin" specifically designated this northern seabird.',
    physicalSpecs: {
      estimatedHeightOrLength: '75 to 85 cm (30 to 33 in) tall',
      estimatedMass: '5.0 to 5.5 kg (11 to 12 lbs)',
      distinguishingFeatures: [
        'Sleek, waterproof black plumage across back and head with a pristine white belly',
        'Large, prominent white patch between the base of the bill and each eye during summer breeding',
        'Heavy, laterally compressed grooved black beak adapted for gripping slippery pelagic fish',
        'Vestigial, 15 cm flipper-like wings that served as powerful underwater hydrofoils'
      ],
      sexualDimorphism: 'Males possessed slightly deeper bill grooves and marginally greater body weight.'
    },
    habitatAndDistribution: 'The open, cold oceanic waters of the North Atlantic. For breeding, the birds required very specific, remote rocky offshore islands with low shelving rock faces that allowed flightless birds to hop out of breaking waves.',
    dietAndEcology: 'Piscivorous specialist feeding on schooling fatty fish such as Atlantic menhaden, capelin, and crustaceans. Their deep diving abilities permitted them to exploit prey niches unavailable to other North Atlantic seabirds.',
    geologicalEpoch: 'Holocene Epoch (Extinct in 1844)',
    extinctionTimeline: 'Historically breeding by the millions on Funk Island off Newfoundland and St. Kilda off Scotland. By 1800, commercial feather harvesting, egg collecting, and oil rendering decimated every accessible colony. The final pair was strangled on Eldey Island, Iceland, on June 3, 1844, by fishermen hired by museum specimen collectors.',
    extinctionCauses: {
      primaryDrivers: [
        'Massive commercial harvesting for down feathers and oil by transatlantic fishing fleets',
        'Extreme colonial concentration: only a tiny handful of predator-free islands possessed the gentle slopes needed for breeding',
        'Destruction of nesting rocks by volcanic eruptions (such as the submergence of Geirfuglasker in 1830)',
        'Frenzy by 19th-century museums and wealthy private collectors offering bounties for the final skins and eggs'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Industrial exploitation for feathers and meat, followed by a perverse speculative collector bubble for museum rarities, sealed the fate of the last wild colonies.'
    },
    fossilEvidence: {
      keySites: [
        'Funk Island, Newfoundland (thousands of bones excavated from former rendering pits)',
        'Eldey Island, Iceland',
        'St. Kilda archipelago, Outer Hebrides'
      ],
      specimenPreservation: '78 taxidermy skins, 75 eggs, and 24 complete articulated skeletons survive in world natural history institutions.',
      notableSpecimens: 'The Eldey Island internal organs preserved in spirits in the Natural History Museum of Denmark.'
    },
    humanRelationship: 'Native American Maritime Archaic peoples revered the great auk, burying ritual garments fashioned from auk skins. Later European fishermen used thousands of live auks as fuel and provisions on the Grand Banks.',
    facts: [
      'The scientific genus name of southern penguins (Sphenisciformes) was borrowed from the great auk, whose original Celtic and Norse vernacular name was "penguin" (white head).',
      'Pairs laid only a single large, pear-shaped pyriform egg each year; its conical shape prevented it from rolling off cliff edges into the sea.',
      'The slaughter on Eldey Island in 1844 was commissioned directly by a Danish merchant collecting specimens for European museums.'
    ],
    sources: [
      {
        title: 'Genetic diversity and demography of the Great Auk Pinguinus impennis',
        institution: 'Genes / MDPI',
        year: 2019,
        url: 'https://www.mdpi.com/journal/genes'
      },
      {
        title: 'The Great Auk in museum archives',
        institution: 'Natural History Museum, London',
        year: 2023,
        url: 'https://www.nhm.ac.uk'
      },
      {
        title: 'Pinguinus impennis extinction documentation',
        institution: 'IUCN Red List of Threatened Species',
        year: 2020,
        url: 'https://www.iucnredlist.org'
      }
    ],
    relatedAnimalIds: ['passenger-pigeon', 'dodo', 'stellers-sea-cow']
  },
  {
    id: 'megalodon',
    slug: 'megalodon',
    commonName: 'Megalodon',
    scientificName: 'Otodus megalodon',
    categories: ['marine-animals', 'extinct-mammals'],
    periodOrDate: 'Miocene to Pliocene Epochs (~23 to 3.6 million years ago)',
    exactExtinctionWindow: 'Extinct around 3.6 million years ago, coinciding with Pliocene ocean cooling and cetacean radiation',
    nativeRange: 'Cosmopolitan distribution across warm and temperate coastal oceans and epicontinental shelf seas worldwide',
    image: IMAGES.megalodon,
    imageCaption: 'Otodus megalodon cruising through sunlit Miocene shallow shelf waters hunting ancient cetaceans.',
    briefDescription: 'The largest macropredatory shark in Earth history, bearing serrated triangular teeth up to 18 cm (7 inches) long and an estimated bite force of over 100,000 Newtons.',
    introduction: 'Otodus megalodon was an apex marine super-predator that dominated global oceans for nearly 20 million years. Far from being merely a giant great white shark, modern phylogenetic paleontology places megalodon in the extinct family Otodontidae, an offshoot of megatooth sharks that originated during the early Eocene.',
    physicalSpecs: {
      estimatedHeightOrLength: '15 to 20 meters (50 to 66 ft) total length in mature females',
      estimatedMass: '40,000 to 60,000 kg (44 to 66 metric tons)',
      distinguishingFeatures: [
        'Massive, thick triangular teeth with fine serrations and a robust V-shaped root measuring up to 18.8 cm (7.4 in)',
        'Enormous cartilaginous jaw spanning 2.7 to 3.4 meters wide, capable of swallowing whole marine mammals',
        'Regional endothermy (warm-bloodedness), maintaining an internal body temperature 7°C above ambient water',
        'Hydrodynamic fusiform body with broad pectoral fins for stabilizing tremendous kinetic mass'
      ],
      sexualDimorphism: 'Females were substantially larger than males, a typical adaptation in elasmobranchs for gestating large embryos.'
    },
    habitatAndDistribution: 'Inhabited warm subtropical and tropical coastal shelf waters, lagoons, and oceanic seaways with abundant populations of prehistoric baleen whales and pinnipeds.',
    dietAndEcology: 'Specialized apex predator targeting medium-to-large marine mammals: primitive mysticete whales (Cetotheriidae), sperm whale relatives, sirenians, and sea turtles. Fossil whale vertebrae and ribs regularly display deep megalodon gouges and serration scars.',
    geologicalEpoch: 'Early Miocene to Late Pliocene Epochs (Neogene Period)',
    extinctionTimeline: 'Fossil tooth records globally indicate megalodon went extinct approximately 3.6 million years ago during the mid-Pliocene epoch. It did NOT survive into human history or modern times.',
    extinctionCauses: {
      primaryDrivers: [
        'Pliocene climatic cooling and the formation of polar ice sheets shrinking warm ocean shelves',
        'Migration of baleen whales to productive, cold polar seas where megalodon could not maintain thermo-efficiency',
        'Emergence of energetic competitors, including the ancestors of the great white shark (Carcharodon carcharias) and early predatory toothed dolphins/killer whales'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Climatic cooling, drop in global sea levels, and the shift of prey species to polar waters crippled this tropical-adapted apex predator, leading to its complete demise 3.6 Ma.'
    },
    fossilEvidence: {
      keySites: [
        'Calvert Cliffs, Maryland, USA (Miocene marine sediment teeth and vertebrae)',
        'Yorktown Formation, North Carolina, USA',
        'Pisco Formation, Peru (articulated vertebral columns and whale predation bones)'
      ],
      specimenPreservation: 'Primarily durable enameled teeth and calcified vertebral centra; shark cartilage rarely fossilizes.',
      notableSpecimens: 'An articulated vertebral column comprising 141 vertebrae found in the Royal Belgian Institute of Natural Sciences.'
    },
    humanRelationship: 'Humans never encountered living megalodon; non-avian dinosaurs had vanished 63 million years before it appeared, and modern humans evolved millions of years after its extinction. Fossil teeth were historically interpreted as petrified dragon tongues ("glossopetrae").',
    facts: [
      'A single megalodon jaw contained approximately 276 teeth arranged in five successive rows, constantly shedding and replacing worn teeth throughout its life.',
      'Biomechanical modeling estimates its bite force at 108,500 to 182,000 Newtons—over six times greater than Tyrannosaurus rex.',
      'Recent calcium isotope studies published in 2023 prove megalodon was endothermic (warm-blooded), which required enormous caloric intake.'
    ],
    sources: [
      {
        title: 'Endothermic physiology of the extinct megatooth shark Otodus megalodon',
        institution: 'Proceedings of the National Academy of Sciences (PNAS)',
        year: 2023,
        url: 'https://www.pnas.org/doi/10.1073/pnas.2218153120'
      },
      {
        title: 'Megalodon paleobiology and extinction timeline',
        institution: 'Natural History Museum, London',
        year: 2024,
        url: 'https://www.nhm.ac.uk/discover/megalodon--the-truth-about-the-largest-shark-that-ever-lived.html'
      },
      {
        title: 'Fossil Shark Research Division',
        institution: 'Smithsonian National Museum of Natural History',
        year: 2023,
        url: 'https://naturalhistory.si.edu'
      }
    ],
    relatedAnimalIds: ['titanoboa', 'stellers-sea-cow', 'smilodon']
  },
  {
    id: 'irish-elk',
    slug: 'irish-elk',
    commonName: 'Irish Elk',
    scientificName: 'Megaloceros giganteus',
    categories: ['ice-age-giants', 'extinct-mammals'],
    periodOrDate: 'Pleistocene to Early Holocene (~400,000 to 7,700 years ago)',
    exactExtinctionWindow: 'Western European populations collapsed ~10,600 BP; Ural Mountain and Siberian refugia survived until ~7,700 years ago (~5700 BCE)',
    nativeRange: 'Grasslands and open woodlands across Eurasia, from Ireland and Spain across Russia to Lake Baikal',
    image: IMAGES.irishElk,
    imageCaption: 'The Irish Elk Megaloceros giganteus with its colossal palmate rack spanning 3.65 meters across an autumn peatland.',
    briefDescription: 'The largest deer species to ever walk the Earth, renowned for the most massive antlers known in evolutionary history, weighing up to 40 kilograms.',
    introduction: 'Megaloceros giganteus, widely misnamed the "Irish Elk," was neither exclusively Irish nor an elk. It was a giant true cervid whose closest living genetic relative is the European fallow deer (Dama dama). Its spectacular palmate antlers spanned up to 3.65 meters (12 feet) from tip to tip.',
    physicalSpecs: {
      estimatedHeightOrLength: '2.1 meters (6.9 ft) shoulder height; total height with antlers up to 3.2 meters',
      estimatedMass: '550 to 700 kg (1,200 to 1,550 lbs)',
      distinguishingFeatures: [
        'Tremendous palmate antlers spanning up to 3.65 m (12 ft) across and weighing up to 40 kg (88 lbs)',
        'Broad, high thoracic vertebrae supporting massive nuchal neck and shoulder muscles',
        'Long, slender cursorial legs built for efficient movement over vast open plains',
        'Pale venter and dark dorsal cape illustrated in Paleolithic cave paintings'
      ],
      sexualDimorphism: 'Extreme: only the stags possessed antlers; females were hornless and approximately 30% lighter.'
    },
    habitatAndDistribution: 'Open parkland grasslands, forest-steppe, and dry shrub tundras that provided ample open space for stags to navigate without tangling their vast antlers in dense forest canopies.',
    dietAndEcology: 'Selective browser and grazer feeding on calcium- and phosphorus-rich vegetation: high-quality willow shoots, meadow grasses, forbs, and pondweeds necessary to grow their immense antlers every spring.',
    geologicalEpoch: 'Late Pleistocene to Early Holocene (Quaternary Period)',
    extinctionTimeline: 'During the Younger Dryas cold reversal (~10,600 BP), the sudden decline in mineral-rich forage caused antler malformation and population collapse in Ireland and Western Europe. However, radiocarbon dating in 2004 revealed that Siberian populations persisted well into the mid-Holocene (~7,700 BP).',
    extinctionCauses: {
      primaryDrivers: [
        'Post-glacial afforestation: dense closed-canopy deciduous forests replaced open plains, restricting stag mobility',
        'Climatic nutritional stress: decline in calcium and phosphate plant minerals needed for annual antler synthesis',
        'Human hunting during the Mesolithic as human populations expanded eastward across Siberia'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Habitat alteration as forests closed in, combined with the immense metabolic demand of growing 40 kg antlers every year during changing vegetative conditions, caused the species to succumb.'
    },
    fossilEvidence: {
      keySites: [
        'Ballybetagh Bog, County Dublin, Ireland (hundreds of exceptionally preserved skeletons in marl)',
        'Ural Mountains, Russia (Holocene surviving specimens)',
        'Neumark-Nord, Germany'
      ],
      specimenPreservation: 'Pristine complete skeletons embedded in alkaline lacustrine marl beneath peat bogs.',
      notableSpecimens: 'The magnificent skeleton mounted in the Natural History Museum of Ireland, Dublin.'
    },
    humanRelationship: 'Hunted by Upper Paleolithic humans. European hunter-gatherers painted detailed portraits of Megaloceros in the caves of Lascaux and Cougnac in France, showing its distinctive hump and dark shoulder flash.',
    facts: [
      'The stag grew its entire 40 kg rack of antlers from scratch every year in just a few months, representing one of the fastest bone growth rates in the animal kingdom.',
      'To grow the antlers, the stags suffered temporary physiological osteoporosis, pulling minerals from their own leg bones to deposit in the antlers.',
      'Fossils are so common in Irish bogs because stags weakened after autumn ruts often broke through thin ice over lakes and drowned.'
    ],
    sources: [
      {
        title: 'Pleistocene to Holocene extinction dynamics in giant deer and mammoths',
        institution: 'Nature',
        year: 2004,
        url: 'https://www.nature.com/articles/nature02890'
      },
      {
        title: 'The Giant Irish Deer collection',
        institution: 'National Museum of Ireland – Natural History',
        year: 2023,
        url: 'https://www.museum.ie'
      },
      {
        title: 'Cervid paleontology and antler biomechanics',
        institution: 'American Museum of Natural History',
        year: 2022,
        url: 'https://www.amnh.org'
      }
    ],
    relatedAnimalIds: ['woolly-mammoth', 'smilodon', 'quagga']
  },
  {
    id: 'quagga',
    slug: 'quagga',
    commonName: 'Quagga',
    scientificName: 'Equus quagga quagga',
    categories: ['extinct-mammals', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (Extinct 1883 CE)',
    exactExtinctionWindow: 'The last wild specimen was shot in the late 1870s; the final captive individual died on August 12, 1883 at Artis Royal Zoo in Amsterdam',
    nativeRange: 'The arid Karoo and southern grasslands of the Cape Province, South Africa',
    image: IMAGES.quagga,
    imageCaption: 'The Quagga grazing on dry Karoo brush under the vast golden skies of South Africa.',
    briefDescription: 'A unique subspecies of plains zebra exhibiting striking brown coat coloration with crisp zebra striping confined only to its head, neck, and forequarters.',
    introduction: 'The quagga (Equus quagga quagga) was an enigmatic southern African equid. Long debated whether it was a distinct species, ancient DNA sequencing performed in 1984—the first ancient DNA ever extracted from an extinct animal—settled the controversy, proving the quagga was a southern geographic subspecies of the plains zebra that diverged between 120,000 and 290,000 years ago.',
    physicalSpecs: {
      estimatedHeightOrLength: '1.25 to 1.35 meters (4.1 to 4.4 ft) shoulder height; 2.5 meters length',
      estimatedMass: '250 to 300 kg (550 to 660 lbs)',
      distinguishingFeatures: [
        'Vivid black-and-cream stripes limited strictly to the head, neck, and shoulders',
        'Chestnut-brown or yellowish-brown solid coat across the torso, flanks, and hindquarters',
        'Pure unstriped creamy-white belly, legs, and tail',
        'Erect, striped mane with black tipped dorsal line'
      ],
      sexualDimorphism: 'Stallions and mares had very similar size, with stallions possessing slightly more defined cranial crests.'
    },
    habitatAndDistribution: 'Arid scrublands, grassy plains, and high-altitude plateau of the Karoo and southern Orange Free State in South Africa.',
    dietAndEcology: 'Herbivorous grazer adapted to cropping tough, fibrous perennial tussock grasses, facilitating pasture succession for more delicate antelopes like springboks.',
    geologicalEpoch: 'Holocene Epoch (Extinct in 1883)',
    extinctionTimeline: 'Intensively hunted throughout the 19th century by European colonists and commercial hide hunters. By 1878, the quagga was exterminated in the wild. The last captive specimen died in Artis Zoo, Amsterdam, on August 12, 1883, unnoticed by authorities who did not realize she was the final quagga on Earth.',
    extinctionCauses: {
      primaryDrivers: [
        'Mass commercial extermination by Boer and British settlers for meat and leather hides',
        'Systematic eradication to eliminate grazing competition with domestic sheep and cattle',
        'Fencing of grazing lands cutting off nomadic seasonal migrations between high and low veld'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'Uncontrolled commercial firearm hunting and agricultural habitat encroachment completely wiped out the population within a single century.'
    },
    fossilEvidence: {
      keySites: [
        'Historical Karoo fossil deposits, South Africa',
        'Naturalis Biodiversity Center, Leiden, Netherlands',
        'Artis Zoo archives, Amsterdam'
      ],
      specimenPreservation: '23 taxidermy mounts, several skeletons, and preserved skins in museum collections worldwide.',
      notableSpecimens: 'The world’s only known photograph of a live quagga, taken of a mare at London Zoo in 1870.'
    },
    humanRelationship: 'The indigenous Khoisan people called it "quagga," an onomatopoeic representation of its distinctive barking whinny. Settlers aggressively exterminated herds to clear pastures for merino sheep.',
    facts: [
      'The quagga was the first extinct animal whose DNA was successfully extracted and sequenced by science (Higuchi et al., 1984).',
      'The Quagga Project in South Africa is selectively breeding plains zebras that display reduced striping to recreate a phenotype identical to the original animal.',
      'Because they were once so common, colonial settlers regularly used quaggas as pack animals and to guard sheep herds from predators.'
    ],
    sources: [
      {
        title: 'Mitochondrial DNA sequences from the extinct quagga',
        institution: 'Nature',
        year: 1984,
        url: 'https://www.nature.com/articles/312282a0'
      },
      {
        title: 'Equus quagga quagga Red List Profile',
        institution: 'IUCN Red List of Threatened Species',
        year: 2018,
        url: 'https://www.iucnredlist.org'
      },
      {
        title: 'The Quagga specimen archives',
        institution: 'Natural History Museum, London',
        year: 2023,
        url: 'https://www.nhm.ac.uk'
      }
    ],
    relatedAnimalIds: ['thylacine', 'passenger-pigeon', 'irish-elk']
  },
  {
    id: 'stellers-sea-cow',
    slug: 'stellers-sea-cow',
    commonName: "Steller's Sea Cow",
    scientificName: 'Hydrodamalis gigas',
    categories: ['marine-animals', 'recently-extinct'],
    periodOrDate: 'Holocene Epoch (Extinct 1768 CE)',
    exactExtinctionWindow: 'Exterminated in 1768 CE, just 27 years after its discovery by Western science in 1741',
    nativeRange: 'Commander Islands (Bering and Copper Islands) in the cold subarctic Bering Sea; historically circum-North Pacific',
    image: IMAGES.stellersSeaCow,
    imageCaption: "Steller's Sea Cow grazing peacefully in the frigid, giant kelp forests of the Bering Sea.",
    briefDescription: 'A colossal 9-meter subarctic sirenian related to dugongs, completely toothless, that fed on kelp canopies in icy coastal waters.',
    introduction: "Steller's sea cow (Hydrodamalis gigas) was by far the largest sirenian that ever lived, dwarfing modern manatees and dugongs. Discovered by German naturalist Georg Wilhelm Steller in 1741 following the shipwreck of the Vitus Bering expedition on Bering Island, it survived barely 27 years before being completely exterminated by Russian fur traders.",
    physicalSpecs: {
      estimatedHeightOrLength: '8.0 to 10.0 meters (26 to 33 ft) in length',
      estimatedMass: '8,000 to 11,000 kg (8.8 to 12.1 metric tons)',
      distinguishingFeatures: [
        'Wrinkled, bark-like black hide measuring up to 7.5 cm thick, providing insulation and protection against jagged rocks and sea ice',
        'Completely toothless: chewed kelp using two keratinous masticatory plates inside the palate and lower jaw',
        'Forelimbs lacked finger phalanges, ending in stump-like flippers used for walking along shallow sea floor and tearing kelp',
        'Large, whale-like horizontal tail fluke with a notched center'
      ],
      sexualDimorphism: 'Little noted by Steller; both sexes exhibited enormous body girth and thick epidermal layers.'
    },
    habitatAndDistribution: 'Shallow coastal kelp forests (dominated by giant kelp Alaria and Laminaria) in the ice-free shallows around Bering and Copper Islands.',
    dietAndEcology: 'Obligate kelp specialist. Because of its extreme buoyancy, the animal could not submerge completely, keeping its head and back continuously near the surface while grazing on shallow kelp beds.',
    geologicalEpoch: 'Late Pleistocene to Historical Anthropocene (1768)',
    extinctionTimeline: 'First documented in November 1741. Word of its delicious, beef-like meat and easily rendered fat spread quickly among Siberian maritime fur hunters heading to the Aleutians. Hunted with iron harpoons from rowboats, the last sea cow was recorded killed in 1768.',
    extinctionCauses: {
      primaryDrivers: [
        'Relentless hunting by Russian fur traders and sealers using the Commander Islands as a provisioning station',
        'Extreme tameness, high buoyancy, and inability to submerge or escape hunting boats',
        'Trophic cascade: hunting of sea otters may have caused sea urchin population explosions that devoured the kelp forests needed by the sea cow'
      ],
      evidenceStrength: 'High Consensus',
      summary: 'A tiny relic population of roughly 1,500 to 2,000 animals was systematically slaughtered for provisions within three decades of discovery.'
    },
    fossilEvidence: {
      keySites: [
        'Bering Island coastal dunes and beaches (subfossil bone deposits)',
        'Aleutian Islands and coastal California (Pleistocene fossil records)',
        'Zoological Museum of the Russian Academy of Sciences, St. Petersburg'
      ],
      specimenPreservation: 'Articulated subfossil skeletons and keratinous chewing plates; pieces of preserved skin preserved in St. Petersburg.',
      notableSpecimens: 'Georg Wilhelm Steller’s original field manuscript and detailed anatomical drawings published posthumously in 1751.'
    },
    humanRelationship: 'Georg Steller lived among them for nine months in 1741–1742 and recorded that the animals demonstrated intense social bonds, with companions attempting to rescue harpooned herd members and mates visiting the shore where their partners had been dragged.',
    facts: [
      'Steller’s sea cow could not dive underwater; it was so buoyant that it floated like an inverted boat on the surface of the sea.',
      'Its hide was described by Steller as resembling the bark of an ancient oak tree, studded with unique parasitic sea-cow lice.',
      'Its extinction is considered one of the earliest documented historical examples of a marine trophic cascade.'
    ],
    sources: [
      {
        title: 'The ecology, exploitation and extinction of Steller’s sea cow Hydrodamalis gigas',
        institution: 'Ecosystems & Marine Biology / Springer',
        year: 2011,
        url: 'https://link.springer.com'
      },
      {
        title: 'Hydrodamalis gigas Red List extinction evaluation',
        institution: 'IUCN Red List of Threatened Species',
        year: 2019,
        url: 'https://www.iucnredlist.org'
      },
      {
        title: 'Steller’s sea cow specimen collections',
        institution: 'Smithsonian National Museum of Natural History',
        year: 2023,
        url: 'https://naturalhistory.si.edu'
      }
    ],
    relatedAnimalIds: ['great-auk', 'megalodon', 'dodo']
  },
  {
    id: 'titanoboa',
    slug: 'titanoboa',
    commonName: 'Titanoboa',
    scientificName: 'Titanoboa cerrejonensis',
    categories: ['ancient-reptiles'],
    periodOrDate: 'Middle to Late Paleocene Epoch (~60 to 58 million years ago)',
    exactExtinctionWindow: 'Extinct ~58 million years ago as hyperthermal conditions shifted and cooler Neotropical climates prevailed',
    nativeRange: 'Equatorial South America (Cerrejón coal basin in modern-day La Guajira, Colombia)',
    image: IMAGES.titanoboa,
    imageCaption: 'Titanoboa cerrejonensis gliding through the dense, warm swamps of Paleocene South America.',
    briefDescription: 'The largest snake ever discovered: a 13-meter leviathan weighing 1.1 metric tons that ruled tropical swamps 6 million years after non-avian dinosaurs went extinct.',
    introduction: 'Discovered in 2009 in the open-pit coal mines of Cerrejón, Colombia, Titanoboa cerrejonensis is the largest terrestrial predator of the Paleocene Epoch. Living roughly 6 million years after the Cretaceous-Paleogene (K-Pg) extinction eliminated non-avian dinosaurs, Titanoboa filled the apex carnivore vacancy in the warmest rainforest ecosystem known in Earth history.',
    physicalSpecs: {
      estimatedHeightOrLength: '12.8 to 14.3 meters (42 to 47 ft) in total length',
      estimatedMass: 'Approximately 1,135 kg (1.25 short tons)',
      distinguishingFeatures: [
        'Body diameter at its thickest cross-section reached 1.0 meter (3.3 ft), roughly hip-height to an adult human',
        'Dozens of robust vertebrae with specialized zygosphene-zygantrum articulations preventing spinal twist under extreme constriction',
        'Elongated, flexible jaws equipped with recurved, needle-sharp teeth adapted for trapping large aquatic vertebrates',
        'Ectothermic thermal physiology requiring an ambient equatorial temperature of 30°C to 34°C'
      ],
      sexualDimorphism: 'Females in boine snakes are typically substantially larger than males, a trait inferred for Titanoboa.'
    },
    habitatAndDistribution: 'Extensive brackish coastal swamps, mangrove estuaries, and oxbow river lakes in what is now northern Colombia during the Paleocene thermal maximum.',
    dietAndEcology: 'Predominantly aquatic apex piscivore and carnivore. It preyed upon giant lungfish, giant side-necked turtles (Carbonemys, with shells 1.7 m across), and dyrosaurid crocodylomorphs (Acherontisuchus) that shared its warm waters.',
    geologicalEpoch: 'Paleocene Epoch (Paleogene Period, Cenozoic Era)',
    extinctionTimeline: 'Disappeared roughly 58 million years ago as the thermal anomaly of the early Paleocene subsided and tectonic uplift began reconfiguring northern South American hydrology.',
    extinctionCauses: {
      primaryDrivers: [
        'Gradual cooling of equatorial temperatures below the metabolic threshold needed to sustain a 1,100 kg ectotherm',
        'Drainage and contraction of the vast Cerrejón swamp basin due to early Andean tectonic activity',
        'Diversification and competition from newly evolving mammalian and modern crocodilian lineages'
      ],
      evidenceStrength: 'Moderate Evidence',
      summary: 'As a giant ectothermic reptile, Titanoboa required sustained equatorial temperatures averaging 32°C. When climate cooled, its thermal requirements became unsustainable.'
    },
    fossilEvidence: {
      keySites: [
        'Cerrejón Coal Mine, La Guajira Peninsula, Colombia',
        'Smithsonian Tropical Research Institute (STRI) fossil archives, Panama'
      ],
      specimenPreservation: 'Fossilized vertebrae, cranial elements, and associated fauna found in claystone layers between coal seams.',
      notableSpecimens: 'Vertebra specimen UF 23795, revealing vertebrae twice the size of those of the largest living green anaconda.'
    },
    humanRelationship: 'Humans never encountered Titanoboa; it lived and died almost 58 million years before the emergence of genus Homo. Its discovery helped scientists reconstruct ancient greenhouse climate models.',
    facts: [
      'Titanoboa was longer than a standard city transit bus and heavier than a small car.',
      'Its immense size served as a biological "paleo-thermometer," allowing geoscientists to calculate that the Paleocene tropics were 3 to 4°C warmer than today.',
      'Unlike the Cretaceous dinosaurs that preceded it, Titanoboa coexisted with the earliest primitive mammals, which scurried beneath its coils as small insectivores.'
    ],
    sources: [
      {
        title: 'Giant boid snake from the Palaeocene neotropics reveals hotter past equatorial temperatures',
        institution: 'Nature',
        year: 2009,
        url: 'https://www.nature.com/articles/nature07671'
      },
      {
        title: 'Cerrejón Paleontology & Titanoboa research',
        institution: 'Smithsonian Tropical Research Institute',
        year: 2023,
        url: 'https://stri.si.edu'
      },
      {
        title: 'Fossil reptile discoveries in South America',
        institution: 'Natural History Museum, London',
        year: 2024,
        url: 'https://www.nhm.ac.uk'
      }
    ],
    relatedAnimalIds: ['megalodon', 'smilodon', 'woolly-mammoth']
  }
];

export function getAnimalById(id: string): Animal | undefined {
  return ANIMALS.find(a => a.id === id || a.slug === id);
}

export function getAnimalsByCategory(categoryId: string): Animal[] {
  if (!categoryId || categoryId === 'all') return ANIMALS;
  return ANIMALS.filter(a => a.categories.includes(categoryId as any));
}
