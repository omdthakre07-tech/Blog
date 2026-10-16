export interface FossilDiscovery {
  id: string;
  title: string;
  siteName: string;
  country: string;
  geologicalAge: string;
  primaryOrganisms: string[];
  image: string;
  summary: string;
  paleontologicalSignificance: string;
  keyFinds: string[];
  scientificInstitution: string;
  institutionalUrl: string;
}

export const FOSSIL_DISCOVERIES: FossilDiscovery[] = [
  {
    id: 'la-brea-tar-pits',
    title: 'Rancho La Brea: The Pleistocene Asphalt Graveyard',
    siteName: 'La Brea Tar Pits',
    country: 'United States (Los Angeles, California)',
    geologicalAge: 'Late Pleistocene to Holocene (50,000 to 11,000 years ago)',
    primaryOrganisms: ['Smilodon fatalis', 'Aenocyon dirus (Dire Wolf)', 'Mammut americanum', 'Paramylodon'],
    image: '/src/assets/images/animal_smilodon_1792088933463.jpg',
    summary: 'Naturally occurring crude petroleum asphalt seeps formed deceptive shallow pools that trapped thirsty herbivores. As trapped prey cried out, predators gathered and became ensnared in an extraordinary predator-trap dynamic.',
    paleontologicalSignificance: 'Over 3.5 million micro- and macro-fossils representing over 600 species of animals and plants, offering the most complete high-resolution record of Pleistocene terrestrial ecology in North America.',
    keyFinds: [
      'Over 166,000 catalogued bones of Smilodon fatalis representing more than 3,000 individuals',
      'Intact insect carapaces, plant pollen, seeds, and small rodent skulls preserved in pristine condition',
      'Specimens showing advanced healed bone trauma providing proof of cooperative pride care'
    ],
    scientificInstitution: 'La Brea Tar Pits & Natural History Museum of Los Angeles County',
    institutionalUrl: 'https://tarpits.org'
  },
  {
    id: 'siberian-permafrost-mammoths',
    title: 'Frozen in Time: The Permafrost Mummies of Yamal & Yakutia',
    siteName: 'Siberian Arctic Permafrost Deposits',
    country: 'Russia (Siberian Tundra & Arctic Coasts)',
    geologicalAge: 'Late Pleistocene (50,000 to 10,000 years ago)',
    primaryOrganisms: ['Mammuthus primigenius', 'Coelodonta antiquitatis (Woolly Rhino)', 'Canis lupus'],
    image: '/src/assets/images/hero_woolly_mammoth_1792088931363.jpg',
    summary: 'The sub-zero permafrost soils of Siberia act as cryogenic vaults, preventing microbial decay and preserving intact soft tissues, internal organs, mother’s milk in stomachs, and intact hair coats for tens of thousands of years.',
    paleontologicalSignificance: 'Enabled the direct sequencing of complete nuclear genomes, biochemical analysis of cold-adapted hemoglobin, and mapping of gastrointestinal micro-flora from animals that lived alongside Neanderthals.',
    keyFinds: [
      '"Lyuba" (discovered 2007, Yamal Peninsula): 41,800-year-old female mammoth calf preserved in near-flawless anatomical state',
      '"Yuka" (discovered 2010, Yakutia): 39,000-year-old juvenile mammoth with intact brain tissue and soft foot pads',
      'Sedimentary environmental DNA extracted directly from permafrost cores without needing fossil bones'
    ],
    scientificInstitution: 'Yakutian Academy of Sciences & Center for Paleogenetics, Stockholm',
    institutionalUrl: 'https://palaeogenetics.com'
  },
  {
    id: 'cerrejon-paleocene-basin',
    title: 'The Equatorial Greenhouse: The Cerrejón Coal Deposits',
    siteName: 'Cerrejón Open-Cast Coal Basin',
    country: 'Colombia (La Guajira Peninsula)',
    geologicalAge: 'Middle to Late Paleocene (~60 to 58 million years ago)',
    primaryOrganisms: ['Titanoboa cerrejonensis', 'Carbonemys cofrinii', 'Acherontisuchus', 'Giant Lungfish'],
    image: '/src/assets/images/animal_titanoboa_1792088974540.jpg',
    summary: 'Layers of claystone interspersed between open-pit coal seams in northeastern Colombia uncovered the world’s oldest recorded Neotropical rainforest, thriving in super-warm equatorial conditions 6 million years after dinosaurs died.',
    paleontologicalSignificance: 'Proved that tropical equatorial ecosystems not only survived but flourished under extreme greenhouse temperatures (30°C to 34°C), producing gigantic ectothermic squamates.',
    keyFinds: [
      'Dozens of articulated vertebrae of Titanoboa, the largest snake known to science',
      'Complete fossil carapaces of Carbonemys, a freshwater turtle with a shell measuring 1.72 meters (5 ft 8 in) across',
      'The earliest known fossil leaves with insect damage matching modern Amazonian forest families'
    ],
    scientificInstitution: 'Smithsonian Tropical Research Institute (STRI)',
    institutionalUrl: 'https://stri.si.edu'
  },
  {
    id: 'mare-aux-songes',
    title: 'The Subfossil Vault of Mauritius: Mare aux Songes',
    siteName: 'Mare aux Songes Marsh',
    country: 'Mauritius (Plaine Magnien)',
    geologicalAge: 'Mid-to-Late Holocene (~4,200 to 300 years ago)',
    primaryOrganisms: ['Raphus cucullatus (Dodo)', 'Cylindraspis (Giant Tortoises)', 'Aphanapteryx'],
    image: '/src/assets/images/animal_dodo_bird_1792088933115.jpg',
    summary: 'A shallow freshwater marsh near the southeastern coast of Mauritius where anoxic muds accumulated thousands of subfossil bones over millennia, including the greatest concentration of dodo remains ever uncovered.',
    paleontologicalSignificance: 'Allowed modern researchers to reconstruct the accurate skeletal anatomy, bone histology, sexual dimorphism, and environmental adaptations of the dodo prior to European human settlement.',
    keyFinds: [
      'Over 4,000 subfossil dodo bones including delicate cranial elements, sterna, and pelvic girdles',
      'Subfossil seeds of the endangered Tambalacoque (dodo tree) verifying mutualistic seed dispersal relationships',
      'Pollen cores providing a 4,000-year continuous record of Mauritian vegetation history and ancient mega-droughts'
    ],
    scientificInstitution: 'Natural History Museum of London & Mauritius Dodo Research Programme',
    institutionalUrl: 'https://www.nhm.ac.uk'
  }
];
