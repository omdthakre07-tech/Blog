import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'ice-age-giants',
    name: 'Ice Age Giants',
    slug: 'ice-age-giants',
    description: 'Colossal cold-adapted megafauna that dominated the Pleistocene mammoth steppe and vanished as glaciers retreated.',
    count: 4,
    badge: 'Pleistocene Megafauna',
    featuredImage: '/src/assets/images/hero_woolly_mammoth_1792088931363.jpg'
  },
  {
    id: 'extinct-birds',
    name: 'Extinct Birds',
    slug: 'extinct-birds',
    description: 'Avian species lost to rapid habitat transformation, insular vulnerability, and intensive human harvesting.',
    count: 3,
    badge: 'Avian Biogeography',
    featuredImage: '/src/assets/images/animal_dodo_bird_1792088933115.jpg'
  },
  {
    id: 'marine-animals',
    name: 'Prehistoric Marine Animals',
    slug: 'marine-animals',
    description: 'Oceanic leviathans and specialized marine vertebrates from warm Miocene shelf seas to subarctic kelp canopies.',
    count: 2,
    badge: 'Oceanic Paleontology',
    featuredImage: '/src/assets/images/animal_megalodon_1792088952387.jpg'
  },
  {
    id: 'ancient-reptiles',
    name: 'Ancient Reptiles',
    slug: 'ancient-reptiles',
    description: 'Enormous predatory squamates and archaic archosaurs that ruled post-dinosaur equatorial waterways.',
    count: 1,
    badge: 'Paleogene & Mesozoic',
    featuredImage: '/src/assets/images/animal_titanoboa_1792088974540.jpg'
  },
  {
    id: 'extinct-mammals',
    name: 'Extinct Mammals',
    slug: 'extinct-mammals',
    description: 'Remarkable mammalian lineages across the Cenozoic, from saber-toothed hypercarnivores to giant marsupials.',
    count: 5,
    badge: 'Mammalian Evolution',
    featuredImage: '/src/assets/images/animal_smilodon_1792088933463.jpg'
  },
  {
    id: 'recently-extinct',
    name: 'Recently Extinct Species',
    slug: 'recently-extinct',
    description: 'Species lost within recorded human history between the 17th and 20th centuries, documented in museum archives.',
    count: 5,
    badge: 'Anthropocene Records',
    featuredImage: '/src/assets/images/animal_thylacine_1792088932933.jpg'
  }
];
