import { Article } from '../types';
import { IMAGES } from '../assets/images';

export const ARTICLES: Article[] = [
  {
    id: 'mammoth-steppe-collapse',
    slug: 'mammoth-steppe-collapse',
    title: 'The Mammoth Steppe Collapse: Climate Shifts vs. Megafauna Overkill',
    subtitle: 'Deciphering ancient DNA, radiocarbon dates, and dung fungus spores from the end of the Pleistocene.',
    excerpt: 'For over 100,000 years, the mammoth steppe was Earth’s largest terrestrial biome. How did rapid post-glacial warming and Paleolithic hunters combine to bring down the woolly mammoth?',
    category: 'ice-age-giants',
    author: {
      name: 'Dr. Evelyn Vance',
      role: 'Senior Paleoclimatologist & Quaternary Researcher',
      affiliation: 'Institute for Ancient Environmental Genomics',
      avatarInitials: 'EV'
    },
    publishedDate: 'March 14, 2026',
    readTimeMinutes: 8,
    coverImage: IMAGES.heroMammoth,
    coverCaption: 'Mammoth populations contracted northwards as the dry steppe-tundra converted into wet peat bogs and dense taiga.',
    featuredAnimalId: 'woolly-mammoth',
    keyTakeaways: [
      'The mammoth steppe was an arid, highly productive grassland maintained by megaherbivore grazing.',
      'Climate warming at the Bølling-Allerød interstadial initiated widespread biome fragmentation.',
      'Ancient sedimentary environmental DNA (eDNA) shows mammoth populations lingered longer in refugia than fossil bones indicated.',
      'Wrangel Island mammoths persisted until 4,000 years ago, succumbing to genomic meltdown and demographic isolation.'
    ],
    sections: [
      {
        id: 'the-lost-biome',
        heading: '1. The Lost Steppe-Tundra Biome',
        paragraphs: [
          'During the Late Pleistocene, an immense biome known as the mammoth steppe extended across northern latitudes from the British Isles across Central Eurasia and the Bering land bridge into the Yukon. Unlike today’s soggy, moss-dominated tundra and dense coniferous taiga, this ancient ecosystem was cold, arid, and bathed in bright sunlight.',
          'The ground was dominated by protein-dense grasses (Poaceae) and forbs such as Artemisia (sagebrush) and Ranunculus (buttercups). Massive herds of woolly mammoths, woolly rhinoceroses, steppe bison, and wild horses continually cropped the vegetation, churned the permafrost soils, and recycled essential nutrients through dung, maintaining a productive bio-engine.'
        ],
        pullQuote: 'The megafauna were not merely passive inhabitants of the steppe; they were the biome’s active ecosystem engineers.'
      },
      {
        id: 'the-two-hypotheses',
        heading: '2. The Debate: Overkill vs. Environmental Shift',
        paragraphs: [
          'For more than five decades, quaternary science has debated two polarizing hypotheses regarding the megafauna extinction. The "Overkill" hypothesis, popularized by Paul S. Martin in 1967, argued that expanding Upper Paleolithic hunters armed with bifacial stone projectile points rapidly over-harvested naive megaherbivores.',
          'Conversely, the "Climate/Habitat" hypothesis posits that rapid post-glacial climatic amelioration caused heavy winter snowfalls, waterlogged ground, and the replacement of nutrient-rich grasses with unpalatable mosses and shrub tundra that could not support immense animals requiring hundreds of pounds of daily forage.'
        ]
      },
      {
        id: 'edna-revolution',
        heading: '3. What Modern Ancient DNA Reveals',
        paragraphs: [
          'The advent of sedimentary ancient DNA (sedaDNA) has revolutionized this debate. By sequencing genetic fragments preserved directly in Siberian and Yukon permafrost cores, researchers have mapped the disappearance of mammoths with unprecedented precision.',
          'The data confirm that climate warming initiated a dramatic shrinkage and fragmentation of suitable habitat patches. As mammoth numbers dropped into isolated pockets, growing human hunting pressures dealt the coup de grâce, cutting off migration corridors and eliminating local breeding groups.'
        ],
        highlightBox: {
          title: 'The Wrangel Island Anomaly',
          text: 'On remote Wrangel Island in the Arctic Ocean, a colony of woolly mammoths survived until approximately 2000 BCE—long after the pyramids of Egypt were erected. Whole-genome sequencing reveals that this population suffered severe inbreeding depression and lost genes responsible for scent reception and insulin regulation.'
        }
      },
      {
        id: 'ecological-lessons',
        heading: '4. Lessons for the Modern Anthropocene',
        paragraphs: [
          'The fate of the woolly mammoth demonstrates that large, slow-reproducing animals are exceptionally vulnerable when climatic stress and human persecution intersect. When an apex herbivore is removed, the entire vegetative architecture can permanently collapse into a low-diversity state.'
        ]
      }
    ],
    tags: ['Paleoclimatology', 'Mammuthus', 'Ancient DNA', 'Ice Age', 'Pleistocene'],
    sources: [
      {
        title: 'Late Quaternary megafaunal extinctions: What ancient genomics reveals',
        institution: 'Nature Reviews Genetics',
        year: 2022,
        url: 'https://www.nature.com'
      },
      {
        title: 'Sedimentary environmental DNA reveals Arctic megafaunal persistence',
        institution: 'Nature',
        year: 2021,
        url: 'https://www.nature.com/articles/s41586-021-04016-x'
      }
    ],
    relatedArticleSlugs: ['island-fragility-dodo', 'giants-of-pleistocene-smilodon', 'big-five-mass-extinctions']
  },
  {
    id: 'island-fragility-dodo',
    slug: 'island-fragility-dodo',
    title: 'Island Fragility: Why the Dodo Vanished in Less Than a Century',
    subtitle: 'The ecological mechanisms that transformed an evolutionary marvel into an emblem of extinction.',
    excerpt: 'The popular caricature of the dodo as a foolish, clumsy bird is scientifically wrong. The true tragedy lies in the acute vulnerability of insular island ecosystems to introduced alien species.',
    category: 'extinct-birds',
    author: {
      name: 'Julian Thorne, M.Sc.',
      role: 'Avian Paleontologist & Island Biogeography Curator',
      affiliation: 'Mascarene Natural History Collaborative',
      avatarInitials: 'JT'
    },
    publishedDate: 'February 28, 2026',
    readTimeMinutes: 7,
    coverImage: IMAGES.dodoBird,
    coverCaption: 'Subfossil bone excavations at Mare aux Songes provide rich anatomical evidence of the dodo’s specialized adaptation to Mauritius.',
    featuredAnimalId: 'dodo',
    keyTakeaways: [
      'The dodo was a giant ground pigeon, perfectly adapted to the seasonal climatic extremes of Mauritius.',
      'Island tameness (lack of innate fear of terrestrial mammals) left adults and ground nests defenseless.',
      'Introduced pigs, rats, and monkeys—not human hunting alone—were the lethal agents of extinction.',
      'The Mare aux Songes subfossil bone bed reveals ancient resilience to drought before human arrival.'
    ],
    sections: [
      {
        id: 'dispelling-the-myth',
        heading: '1. Dispelling the "Dumb Bird" Myth',
        paragraphs: [
          'For centuries, popular culture has unfairly maligned Raphus cucullatus as an evolutionary failure—a slow, brainless bird so unfit for life that extinction was inevitable. Modern paleobiology paints a radically different portrait.',
          'CT scanning of the endocranial cavity of the Oxford Dodo skull reveals an endocranial volume and brain-to-body proportion virtually identical to modern, highly intelligent homing pigeons. Its olfactory bulb was enlarged, allowing it to locate fallen fruits and nuts on the rainforest floor by scent.'
        ],
        pullQuote: 'The dodo was not a failure of evolution; it was a triumphant success of island specialization.'
      },
      {
        id: 'ecological-naivety',
        heading: '2. The Evolution of Island Tameness',
        paragraphs: [
          'Mauritius is an isolated volcanic island formed approximately 8 million years ago. Before human arrival, it possessed zero native terrestrial mammals—no feline predators, canids, or rodents. The only predators were giant raptors such as the extinct Mauritian caracara.',
          'Over millions of years, the dodo’s ancestors lost their energetically expensive flight musculature and grew larger. With no ground predators, fear-avoidance behaviors were evolutionarily expensive and were selected against. When Dutch and Portuguese sailors landed, the birds displayed curiosity rather than flight.'
        ]
      },
      {
        id: 'the-real-culprits',
        heading: '3. The Unseen Invaders',
        paragraphs: [
          'While hungry crews did hunt dodos for fresh provisions, historical records indicate dodo meat was tough and greasy ("kermisvogel"). Human culinary appetites were not the primary driver of extinction.',
          'The fatal blow came from livestock and invasive species introduced to the island: pigs, crab-eating macaques, and black rats. Dodos laid only one egg per year in a vulnerable ground nest lined with palm fronds. Introduced wild boars and macaques devoured every clutch across the island, preventing any recruitment of new generations.'
        ]
      },
      {
        id: 'extinction-date',
        heading: '4. Pinpointing the Final Moments',
        paragraphs: [
          'The last credible sighting was recorded in 1662 by Volkert Evertsz, a Dutch mariner stranded on an offshore islet. While unconfirmed sightings lingered for several decades, rigorous mathematical statistical modeling by Roberts and Solow (2003) places the most probable extinction year around 1693.'
        ]
      }
    ],
    tags: ['Island Ecology', 'Dodo', 'Ornithology', 'Mauritius', 'Invasive Species'],
    sources: [
      {
        title: 'Flight of the Dodo: Avian Endocranial Morphology and Olfactory Specialization',
        institution: 'Zoological Journal of the Linnean Society',
        year: 2016,
        url: 'https://academic.oup.com'
      },
      {
        title: 'Extinction dynamics of insular columbids',
        institution: 'Nature',
        year: 2003,
        url: 'https://www.nature.com/articles/426245a'
      }
    ],
    relatedArticleSlugs: ['from-billions-to-none-passenger-pigeon', 'mammoth-steppe-collapse', 'stellers-sea-cow-tragedy']
  },
  {
    id: 'from-billions-to-none-passenger-pigeon',
    slug: 'from-billions-to-none-passenger-pigeon',
    title: 'From Billions to None: The Rapid Fall of the North American Passenger Pigeon',
    subtitle: 'How industrial technology, telegraph networks, and market slaughter erased 5 billion birds in 40 years.',
    excerpt: 'At its zenith, the passenger pigeon accounted for over a quarter of all land birds in North America. Its sudden extinction remains the starkest reminder that overwhelming abundance provides no immunity against industrial exploitation.',
    category: 'recently-extinct',
    author: {
      name: 'Marcus Sterling',
      role: 'Historical Ecologist & Wildlife Conservation Historian',
      affiliation: 'Center for Anthropocene Studies',
      avatarInitials: 'MS'
    },
    publishedDate: 'January 19, 2026',
    readTimeMinutes: 9,
    coverImage: IMAGES.passengerPigeon,
    coverCaption: 'Martha, the last passenger pigeon, who lived alone at the Cincinnati Zoo until her passing on September 1, 1914.',
    featuredAnimalId: 'passenger-pigeon',
    keyTakeaways: [
      'In the mid-19th century, single migrating flocks contained an estimated 1 to 3 billion birds.',
      'The expansion of railroads and the telegraph allowed commercial hunters to track and ambush nesting colonies.',
      'The Allee effect: the species could not stimulate reproduction or defend young once flock density collapsed.',
      'The tragedy catalyzed the modern American conservation movement and federal wildlife protections.'
    ],
    sections: [
      {
        id: 'the-sky-darkeners',
        heading: '1. The Flocks That Darkened the Sun',
        paragraphs: [
          'In the early 1800s, naturalists John James Audubon and Alexander Wilson witnessed migrating passenger pigeon flocks that stretched across the horizon like immense dark rivers. Wilson described a flight in Kentucky that took four hours to pass, estimating its numbers at over 2.2 billion individuals.',
          'The flapping of millions of wings generated a roar comparable to distant thunder, creating localized gale-force drafts that stirred forest canopies. Entire branches snapped under the sheer weight of roosting birds.'
        ],
        pullQuote: 'The air was literally filled with pigeons; the light of noon-day was obscured as by an eclipse.'
      },
      {
        id: 'the-machinery-of-destruction',
        heading: '2. The Industrialization of the Hunt',
        paragraphs: [
          'For centuries, Native American nations harvested squabs from nesting sites with sustainable reverence. What destroyed the species was the confluence of two 19th-century technological revolutions: the telegraph and the national railroad grid.',
          'Professional market hunters monitored telegraph dispatches to track the precise location of communal nestings in Michigan, Ohio, and Pennsylvania. Hundreds of thousands of birds were slaughtered daily with nets, swivel guns, sulfur torches, and tree felling, then packed in barrels of ice and shipped by rail to urban markets in New York and Chicago for pennies per bird.'
        ]
      },
      {
        id: 'the-allee-effect',
        heading: '3. The Allee Effect and Reproductive Collapse',
        paragraphs: [
          'Why couldn’t a species with billions of members withstand hunting? Evolutionary biologists identify the "Allee effect" as the primary driver. Passenger pigeons were obligate colonial breeders that required millions of conspecifics to trigger mating rituals, synchronize egg laying, and swamp local natural predators.',
          'Once commercial hunting fragmented the mega-colonies into small, dispersed groups of dozens or hundreds, the birds ceased mating successfully. Hawk and mammal predation wiped out the sparse remaining nests.'
        ]
      },
      {
        id: 'martha-legacy',
        heading: '4. Martha and the Birth of Conservation Law',
        paragraphs: [
          'By the turn of the century, the wild skies were silent. The last known individual was "Martha," named after First Lady Martha Washington, who lived out her days in an aviary at the Cincinnati Zoo. When she died on September 1, 1914, she was promptly frozen in a 300-pound block of ice and shipped by express train to the Smithsonian.',
          'The grief and shock of her death shattered the Victorian assumption that wildlife was limitless. Within four years, the United States Congress passed the landmark Migratory Bird Treaty Act of 1918, which remains the cornerstone of international avian conservation law today.'
        ]
      }
    ],
    tags: ['Passenger Pigeon', 'Anthropocene', 'Conservation', 'Ornithology', 'Audubon'],
    sources: [
      {
        title: 'Genomic analysis of the passenger pigeon boom-bust demography',
        institution: 'Science',
        year: 2017,
        url: 'https://www.science.org'
      },
      {
        title: 'The historic extermination of Ectopistes migratorius',
        institution: 'Smithsonian National Museum of Natural History',
        year: 2024,
        url: 'https://naturalhistory.si.edu'
      }
    ],
    relatedArticleSlugs: ['island-fragility-dodo', 'final-howl-thylacine', 'stellers-sea-cow-tragedy']
  },
  {
    id: 'final-howl-thylacine',
    slug: 'final-howl-thylacine',
    title: 'The Final Howl: Revisiting the Extinction and Genetic Legacy of the Thylacine',
    subtitle: 'From government bounties to modern de-extinction ethics: the ongoing story of the Tasmanian tiger.',
    excerpt: 'Equipped with a marsupial pouch, tiger stripes, and an 80-degree jaw gape, the thylacine was an evolutionary masterpiece. A century after its slaughter, modern science is piecing together its lost genome.',
    category: 'recently-extinct',
    author: {
      name: 'Dr. Alistair Campbell',
      role: 'Director of Marsupial Evolution Studies',
      affiliation: 'Australasian Paleontological Research Center',
      avatarInitials: 'AC'
    },
    publishedDate: 'January 04, 2026',
    readTimeMinutes: 8,
    coverImage: IMAGES.thylacine,
    coverCaption: 'Historical photograph analysis confirms the thylacine possessed extraordinary cranial convergence with placental wolves.',
    featuredAnimalId: 'thylacine',
    keyTakeaways: [
      'The thylacine is one of biology’s most striking examples of convergent evolution.',
      'Government and private bounties paid out over 2,180 pelts between 1888 and 1909.',
      'The last documented individual died in Hobart Zoo on September 7, 1936, just 59 days after the species received legal protection.',
      'High-coverage RNA sequencing of museum specimens has revealed unexpected insights into marsupial gene regulation.'
    ],
    sections: [
      {
        id: 'convergent-perfection',
        heading: '1. A Masterpiece of Convergent Evolution',
        paragraphs: [
          'If you placed the skull of a thylacine next to the skull of a gray wolf (Canis lupus), even trained biologists must inspect the palate and dental formula carefully to tell them apart. Yet the thylacine was a marsupial, more closely related to a kangaroo than to a canine.',
          'Their common ancestor lived more than 160 million years ago in the Jurassic Period. Separated by continental drift, both lineages independently arrived at the same cursorial predatory anatomy, canine teeth, and carnassial shear.'
        ],
        pullQuote: 'The thylacine was the crowning evolutionary achievement of Australasian marsupial carnivory.'
      },
      {
        id: 'the-bounty-holocaust',
        heading: '2. The Eradication Campaign',
        paragraphs: [
          'When European colonists introduced fine-wool Merino sheep into Tasmania in the 1820s, poor flock management led to heavy losses from feral domestic dogs, harsh weather, and mismanagement. Rather than addressing dog predation, pastoralists scapegoated the native thylacine.',
          'The Van Diemen’s Land Company introduced private bounties in 1830, followed in 1888 by an official Tasmanian Government bounty of £1 per adult carcass (worth roughly $150 today). Over the next twenty years, the state paid out bounties on 2,184 thylacines, destroying the breeding core of the population.'
        ]
      },
      {
        id: 'the-cynical-protection',
        heading: '3. Protection 59 Days Too Late',
        paragraphs: [
          'In July 1936, the Tasmanian government finally declared the thylacine a protected species under wildlife conservation regulations. The gesture was tragically cynical: just 59 days later, on the freezing night of September 7, 1936, the last captive thylacine—known to history as "Benjamin"—died of hypothermia and neglect in Beaumaris Zoo, Hobart.',
          'Repeated scientific expeditions into the dense southwest Tasmanian wilderness have yielded zero verified physical evidence of surviving wild populations.'
        ]
      },
      {
        id: 'ancient-rna-deextinction',
        heading: '4. The Genetic Resurrection Debate',
        paragraphs: [
          'In recent years, researchers at the University of Melbourne and the Karolinska Institute successfully sequenced both nuclear DNA and preserved RNA from a 130-year-old thylacine specimen stored in Stockholm. This breakthrough has fueled high-profile commercial efforts to resurrect the species using CRISPR genome editing on fat-tailed dunnarts.',
          'Yet ethicists and conservationists caution that bringing back an engineered hybrid cannot undo the historical tragedy, nor can it thrive without the pristine, contiguous ecosystems the original animal inhabited.'
        ]
      }
    ],
    tags: ['Thylacine', 'Tasmanian Tiger', 'Marsupials', 'Convergent Evolution', 'De-extinction'],
    sources: [
      {
        title: 'Historical and genetic demography of Thylacinus cynocephalus',
        institution: 'Nature Ecology & Evolution',
        year: 2018,
        url: 'https://www.nature.com'
      },
      {
        title: 'Recovering RNA from an extinct species: The Stockholm thylacine',
        institution: 'Genome Research / Cold Spring Harbor',
        year: 2023,
        url: 'https://genome.cshlp.org'
      }
    ],
    relatedArticleSlugs: ['giants-of-pleistocene-smilodon', 'from-billions-to-none-passenger-pigeon', 'island-fragility-dodo']
  },
  {
    id: 'giants-of-pleistocene-smilodon',
    slug: 'giants-of-pleistocene-smilodon',
    title: 'Giants of the Pleistocene: How Saber-Toothed Cats Ruled Prehistoric Americas',
    subtitle: 'Biomechanics, bite forces, and the social behavior of Smilodon fatalis revealed by asphalt seeps.',
    excerpt: 'Equipped with 28-centimeter sabers, Smilodon fatalis was designed for sudden, violent grappling rather than prolonged pursuit. How did this hypercarnivore bring down prey three times its size?',
    category: 'extinct-mammals',
    author: {
      name: 'Dr. Carlos Mendoza',
      role: 'Curator of Vertebrate Paleontology',
      affiliation: 'Rancho La Brea Research Foundation',
      avatarInitials: 'CM'
    },
    publishedDate: 'December 12, 2025',
    readTimeMinutes: 7,
    coverImage: IMAGES.smilodon,
    coverCaption: 'Smilodon’s massive forelimbs were engineered to wrestle large megafauna to the ground before applying its delicate, serrated sabers.',
    featuredAnimalId: 'smilodon',
    keyTakeaways: [
      'Smilodon’s canine teeth were thin and laterally compressed, vulnerable to snapping if twisted.',
      'Its forelimb bones were up to 30% denser than those of a modern African lion.',
      'Bite force at the molars was weaker than a lion, but reinforced neck muscles provided downward stabbing power.',
      'Pathological bone lesions prove injured cats were supported by their social groups for months.'
    ],
    sections: [
      {
        id: 'the-biomechanics-of-the-saber',
        heading: '1. The Precision Weapon: Canine Biomechanics',
        paragraphs: [
          'Smilodon fatalis upper canines measured up to 28 cm (11 inches) from root to tip. However, finite element analysis (FEA) computer models reveal a surprising structural limitation: the teeth were flattened from side to side like surgical daggers. While exceptionally sharp, they were brittle when subjected to lateral torsional stress.',
          'If a prey animal thrashed violently while Smilodon held it with its jaws, the sabers risked shattering. To compensate, Smilodon evolved immensely muscular shoulders and forelimbs to pin prey down completely before biting.'
        ],
        pullQuote: 'Smilodon did not chase prey over miles; it stalked silently, tackled with brutal force, and severed the carotid artery in seconds.'
      },
      {
        id: 'social-cooperation',
        heading: '2. Compassion in the Tar Pits',
        paragraphs: [
          'The Rancho La Brea asphalt seeps in Los Angeles have yielded bones from more than 3,000 Smilodon individuals. Paleopathologists examining these remains have documented healed fractures, severe degenerative arthritis, and crippling hip dysplasia.',
          'In a solitary predator like a modern leopard, a fractured limb means certain starvation within days. In Smilodon, fossils show that individuals lived for months or years after catastrophic injuries, their bones healing thick callus tissue. This provides definitive evidence of cooperative social pride structure, where healthy cats shared kills with injured pack members.'
        ]
      },
      {
        id: 'the-fatal-flaw',
        heading: '3. The Specialization Trap',
        paragraphs: [
          'Extreme physical specialization is an evolutionary superpower until the environment shifts. Smilodon was built exclusively to ambush and butcher giant, slow-moving herbivores: ground sloths, juvenile mammoths, and ancient horses.',
          'At the end of the Last Glacial Maximum (~11,000 years ago), human hunters arrived and climate reorganized ecosystems. When megaherbivore populations collapsed, modern wolves and cougars adapted by hunting swift white-tailed deer and rabbits. Smilodon, with its heavy skeleton and short bobtail, could not catch small, fast prey and followed its victims into extinction.'
        ]
      }
    ],
    tags: ['Smilodon', 'Paleontology', 'La Brea', 'Biomechanics', 'Pleistocene Megafauna'],
    sources: [
      {
        title: 'Comparative predatory biomechanics in Smilodon fatalis and Panthera leo',
        institution: 'PNAS',
        year: 2012,
        url: 'https://www.pnas.org'
      },
      {
        title: 'Social behavior inferred from bone paleopathology in fossil felids',
        institution: 'PLOS ONE',
        year: 2019,
        url: 'https://journals.plos.org'
      }
    ],
    relatedArticleSlugs: ['mammoth-steppe-collapse', 'oceanic-reign-megalodon', 'final-howl-thylacine']
  },
  {
    id: 'oceanic-reign-megalodon',
    slug: 'oceanic-reign-megalodon',
    title: 'Oceanic Reign: The Paleobiology and Climatic Vulnerability of Megalodon',
    subtitle: 'Warm-blooded metabolism, colossal teeth, and the mid-Pliocene ocean cooling that ended 20 million years of apex dominance.',
    excerpt: 'Otodus megalodon reached 18 meters in length and generated bite forces exceeding 100,000 Newtons. Yet this formidable marine super-predator could not survive the cooling of Pliocene oceans.',
    category: 'marine-animals',
    author: {
      name: 'Dr. Serena Brooks',
      role: 'Principal Marine Paleobiologist',
      affiliation: 'Global Oceanic Paleontology Consortium',
      avatarInitials: 'SB'
    },
    publishedDate: 'November 20, 2025',
    readTimeMinutes: 8,
    coverImage: IMAGES.megalodon,
    coverCaption: 'Fossil tooth chemistry reveals Otodus megalodon maintained an internal body temperature warmer than ambient seawater.',
    featuredAnimalId: 'megalodon',
    keyTakeaways: [
      'Megalodon belongs to the extinct megatooth shark family Otodontidae, not the modern great white lineage.',
      'Recent clumped isotope analyses demonstrate megalodon was endothermic (warm-blooded).',
      'It required colossal caloric intake from lipid-rich baleen whales and pinnipeds.',
      'Extinction occurred 3.6 million years ago—63 million years after non-avian dinosaurs and well before humans.'
    ],
    sections: [
      {
        id: 'taxonomy-and-identity',
        heading: '1. True Identity: Not a Great White Shark',
        paragraphs: [
          'For over a century, popular media classified megalodon as Carcharodon megalodon, treating it as an overgrown direct ancestor of the modern great white shark (Carcharodon carcharias). Extensive dental phylogenetic studies have corrected this mistake.',
          'Megalodon belongs to the family Otodontidae, an archaic lineage of megatooth sharks whose teeth possess distinct side-cusplets in early stages and fine, regular serrations. The modern great white shark is actually a member of the lamnid family, descended from the broad-toothed mako shark (Carcharodon hastalis).'
        ]
      },
      {
        id: 'warm-blooded-superpredator',
        heading: '2. The Energetic Cost of Being Warm-Blooded',
        paragraphs: [
          'A landmark study published in PNAS in 2023 examined "clumped isotopes" of carbon and oxygen preserved within fossil megalodon enameloid. The results established that megalodon maintained an internal body temperature approximately 7°C (13°F) warmer than the surrounding seawater.',
          'While regional endothermy allowed megalodon to swim faster and hunt in temperate waters, it demanded an immense metabolic fire. A 50-ton shark required millions of calories daily, necessitating continuous predation upon blubber-rich marine mammals.'
        ],
        pullQuote: 'Warm-bloodedness made megalodon a faster hunter, but it bound the shark to an extraordinarily high caloric baseline.'
      },
      {
        id: 'the-pliocene-collapse',
        heading: '3. The Pliocene Ocean Reorganization',
        paragraphs: [
          'During the mid-Pliocene (~3.6 million years ago), the closure of the Central American Seaway altered global ocean currents. Polar ice caps expanded, global sea levels dropped, and productive coastal nursery shelves contracted.',
          'Baleen whales adapted by migrating into the nutrient-rich, freezing waters of the Arctic and Antarctic oceans. Megalodon could not follow them into polar waters without expending unsustainable thermal energy. Starved of prey on dwindling tropical shelves and competing with agile early ancestors of modern killer whales and great white sharks, the species vanished forever.'
        ]
      }
    ],
    tags: ['Megalodon', 'Marine Biology', 'Paleontology', 'Pliocene', 'Sharks'],
    sources: [
      {
        title: 'Endothermic physiology of the extinct megatooth shark Otodus megalodon',
        institution: 'PNAS',
        year: 2023,
        url: 'https://www.pnas.org'
      },
      {
        title: 'The timing and causes of the extinction of Otodus megalodon',
        institution: 'PeerJ',
        year: 2019,
        url: 'https://peerj.com'
      }
    ],
    relatedArticleSlugs: ['stellers-sea-cow-tragedy', 'big-five-mass-extinctions', 'giants-of-pleistocene-smilodon']
  },
  {
    id: 'stellers-sea-cow-tragedy',
    slug: 'stellers-sea-cow-tragedy',
    title: 'The 27-Year Tragedy: The Rapid Extermination of Steller\'s Sea Cow',
    subtitle: 'How an ice-age maritime giant went from scientific discovery to total annihilation in less than three decades.',
    excerpt: 'Measuring up to 10 meters in length and weighing over 10 tons, Hydrodamalis gigas grazed peacefully in the kelp beds of the Bering Sea. Discovered in 1741, by 1768 not a single individual remained on Earth.',
    category: 'recently-extinct',
    author: {
      name: 'Dr. Henrik Lindqvist',
      role: 'Subarctic Marine Ecologist',
      affiliation: 'Nordic Institute for Marine Historical Ecology',
      avatarInitials: 'HL'
    },
    publishedDate: 'October 15, 2025',
    readTimeMinutes: 7,
    coverImage: IMAGES.stellersSeaCow,
    coverCaption: 'Steller’s sea cow lived in close family groups, grazing on underwater kelp canopies around the Commander Islands.',
    featuredAnimalId: 'stellers-sea-cow',
    keyTakeaways: [
      'Steller\'s sea cow was discovered by Georg Wilhelm Steller in November 1741 following a shipwreck.',
      'It was completely toothless, chewing kelp between two hard keratinous plates.',
      'Russian maritime fur hunters slaughtered the docile giants for meat, lard, and skin.',
      'The entire global population of ~2,000 individuals was wiped out in just 27 years.'
    ],
    sections: [
      {
        id: 'discovery-in-the-fog',
        heading: '1. Shipwreck on Bering Island',
        paragraphs: [
          'In the autumn of 1741, the Russian Great Northern Expedition led by Danish explorer Vitus Bering was wrecked upon an uninhabited, gale-swept island between Kamchatka and Alaska. As scurvy claimed Bering and many crewmen, the expedition’s German naturalist, Georg Wilhelm Steller, explored the rocky shoreline.',
          'There, grazing peacefully among giant brown kelp fronds in the freezing surf, Steller encountered colossal creatures resembling overturned wooden boats. Measuring nearly 30 feet long, they were the world’s only cold-adapted, subarctic sirenians.'
        ]
      },
      {
        id: 'a-docile-giant',
        heading: '2. Anatomy of a Giant Kelp Grazer',
        paragraphs: [
          'Hydrodamalis gigas was an extraordinary evolutionary specialist. It possessed no teeth; instead, it masticated tough kelp fronds using two grooved, horny keratinous grinding plates. Its forelimbs lacked fingers entirely, forming rugged cartilaginous paddles used to balance against surf-battered rocks.',
          'Its skin was nearly three inches thick, corrugated like aged oak bark to resist jagged rocks and grinding drift ice. Because of thick fat layers and high buoyancy, the creature could not dive, floating helpless at the water’s surface.'
        ],
        pullQuote: 'They showed extraordinary affection for one another; when one was harpooned, its companions rushed to assist and push it away from the boats.'
      },
      {
        id: 'the-annihilation',
        heading: '3. 27 Years to Oblivion',
        paragraphs: [
          'Word quickly reached the fur-trading ports of Okhotsk and Petropavlovsk: the Commander Islands contained thousands of docile giants whose red beef tasted like prime veal and whose fat did not spoil in salt barrels.',
          'For Russian hunters pursuing valuable sea otter and fur seal pelts across the Bering Sea, Bering Island became an essential slaughterhouse and supply depot. Men rowed out in wooden baidarkas, embedded heavy iron harpoons into the peaceful animals, and dragged them ashore to be butchered.',
          'By 1768—just twenty-seven years after Georg Steller first put ink to paper describing them—the very last sea cow was harpooned and killed.'
        ]
      }
    ],
    tags: ['Marine Extinctions', 'Sirenians', 'Bering Sea', 'Georg Steller', 'Anthropocene'],
    sources: [
      {
        title: 'Historical marine ecology and the extinction of the North Pacific sea cow',
        institution: 'Ecosystems',
        year: 2011,
        url: 'https://link.springer.com'
      },
      {
        title: 'Georg Wilhelm Steller: De Bestiis Marinis (The Beasts of the Sea)',
        institution: 'Smithsonian Libraries Cultural Heritage Series',
        year: 2021,
        url: 'https://library.si.edu'
      }
    ],
    relatedArticleSlugs: ['island-fragility-dodo', 'from-billions-to-none-passenger-pigeon', 'oceanic-reign-megalodon']
  },
  {
    id: 'big-five-mass-extinctions',
    slug: 'big-five-mass-extinctions',
    title: 'The Big Five: How Earth\'s Mass Extinctions Shaped the Evolutionary Tree',
    subtitle: 'From the Late Ordovician glaciation to the asteroid impact that ended the Age of Reptiles.',
    excerpt: 'Over 99% of all species that ever lived are now extinct. Five catastrophic geological events repeatedly reset the biosphere—clearing ecological niches and birthing new lineages of life.',
    category: 'ancient-reptiles',
    author: {
      name: 'Prof. Nathan Reed',
      role: 'Chair of Historical Paleontology & Stratigraphy',
      affiliation: 'Geological Society Research Center',
      avatarInitials: 'NR'
    },
    publishedDate: 'September 08, 2025',
    readTimeMinutes: 10,
    coverImage: IMAGES.fossilDiscovery,
    coverCaption: 'Paleontologists examine boundary layer strata containing iridium anomalies and fossil disruption horizons.',
    keyTakeaways: [
      'Mass extinctions are defined by the loss of over 75% of global species within a geologically brief window.',
      'The End-Permian ("The Great Dying") wiped out ~95% of marine life and 70% of terrestrial vertebrates.',
      'The End-Cretaceous impact (66 Ma) eliminated non-avian dinosaurs, opening ecological space for mammals and birds.',
      'Non-avian dinosaurs and Ice Age mammals did NOT coexist; they were separated by more than 60 million years.'
    ],
    sections: [
      {
        id: 'defining-mass-extinction',
        heading: '1. What Constitutes a Mass Extinction?',
        paragraphs: [
          'Background extinction is a normal, constant process in evolutionary biology: species naturally disappear at an average rate of roughly 1 to 5 species per million species years. A "mass extinction" is qualitatively different: a catastrophic global pulse where more than 75% of all species across diverse taxonomic groups vanish in a geologically short window (often under 100,000 years).',
          'In 1982, paleontologists Jack Sepkoski and David Raup analyzed the marine fossil record and identified the "Big Five" catastrophic boundary events.'
        ]
      },
      {
        id: 'the-big-five-chronology',
        heading: '2. The Big Five Cataclysms',
        paragraphs: [
          '1. End-Ordovician (~443 Ma): Intense global glaciation followed by rapid warming caused sea-level drops that decimated 85% of marine invertebrate species.',
          '2. Late Devonian (~372 Ma): Widespread ocean anoxia, likely triggered by rapid land plant evolution causing massive nutrient runoff and algal blooms, eliminating 75% of marine life including giant placoderm fish.',
          '3. End-Permian (~252 Ma): "The Great Dying." The most apocalyptic extinction in Earth history. The Siberian Traps erupted millions of cubic kilometers of flood basalt, spewing sulfur dioxide and carbon dioxide that caused super-greenhouse heating, ocean acidification, and catastrophic ozone collapse. Approximately 96% of marine species and 70% of terrestrial vertebrate families were annihilated.',
          '4. End-Triassic (~201 Ma): Massive volcanism in the Central Atlantic Magmatic Province (CAMP) during the breakup of Pangaea, clearing ecological space for early dinosaurs.',
          '5. End-Cretaceous / K-Pg (~66 Ma): The impact of a 10-kilometer asteroid at Chicxulub, Mexico, combined with Deccan Traps volcanism, plunged Earth into nuclear winter. All non-avian dinosaurs, pterosaurs, and marine reptiles vanished.'
        ],
        pullQuote: 'Without the K-Pg impact 66 million years ago, non-avian dinosaurs would likely have continued dominating, and mammals would have remained small nocturnal burrowers.'
      },
      {
        id: 'birds-and-dinosaurs',
        heading: '3. Clarifying Common Chronological Misconceptions',
        paragraphs: [
          'One of the most persistent public misunderstandings is the belief that dinosaurs and Ice Age mammals (like woolly mammoths and saber-toothed cats) lived together. In reality, non-avian dinosaurs went extinct 66 million years ago, whereas woolly mammoths and Smilodon evolved only hundreds of thousands of years ago—separated by an immense 60-million-year chasm.',
          'Furthermore, modern birds are direct living avian dinosaurs (theropods). When you look at an eagle, a penguin, or a sparrow, you are looking at a living dinosaur that survived the K-Pg mass extinction.'
        ],
        highlightBox: {
          title: 'Are We in the Sixth Mass Extinction?',
          text: 'Modern human activities—habitat loss, industrial agriculture, climate change, and pollution—have accelerated species extinction rates to 100 to 1,000 times background historical rates. Unlike previous events caused by volcanism or asteroids, the current crisis is driven entirely by one biological species.'
        }
      }
    ],
    tags: ['Mass Extinction', 'K-Pg Boundary', 'Paleontology', 'Evolution', 'Geology'],
    sources: [
      {
        title: 'Mass extinctions in the marine fossil record',
        institution: 'Science / Sepkoski & Raup',
        year: 1982,
        url: 'https://www.science.org'
      },
      {
        title: 'Causes and consequences of the End-Permian extinction',
        institution: 'Nature Geoscience',
        year: 2021,
        url: 'https://www.nature.com'
      },
      {
        title: 'The K-Pg boundary and dinosaur extinction',
        institution: 'American Museum of Natural History',
        year: 2023,
        url: 'https://www.amnh.org'
      }
    ],
    relatedArticleSlugs: ['mammoth-steppe-collapse', 'oceanic-reign-megalodon', 'from-billions-to-none-passenger-pigeon']
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug || a.id === slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  if (!categoryId || categoryId === 'all') return ARTICLES;
  return ARTICLES.filter(a => a.category === categoryId);
}
