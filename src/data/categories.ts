import { Category } from '../types';
import { IMAGES } from '../assets/images';

export const CATEGORIES: Category[] = [
  {
    id: 'ice-age-giants',
    name: 'Ice Age Giants',
    slug: 'ice-age-giants',
    description: 'Colossal cold-adapted megafauna that dominated the Pleistocene mammoth steppe and vanished as glaciers retreated.',
    count: 4,
    badge: 'Pleistocene Megafauna',
    featuredImage: IMAGES.heroMammoth
  },
  {
    id: 'extinct-birds',
    name: 'Extinct Birds',
    slug: 'extinct-birds',
    description: 'Avian species lost to rapid habitat transformation, insular vulnerability, and intensive human harvesting.',
    count: 3,
    badge: 'Avian Biogeography',
    featuredImage: IMAGES.dodoBird
  },
  {
    id: 'marine-animals',
    name: 'Prehistoric Marine Animals',
    slug: 'marine-animals',
    description: 'Oceanic leviathans and specialized marine vertebrates from warm Miocene shelf seas to subarctic kelp canopies.',
    count: 2,
    badge: 'Oceanic Paleontology',
    featuredImage: IMAGES.megalodon
  },
  {
    id: 'ancient-reptiles',
    name: 'Ancient Reptiles',
    slug: 'ancient-reptiles',
    description: 'Enormous predatory squamates and archaic archosaurs that ruled post-dinosaur equatorial waterways.',
    count: 1,
    badge: 'Paleogene & Mesozoic',
    featuredImage: IMAGES.titanoboa
  },
  {
    id: 'extinct-mammals',
    name: 'Extinct Mammals',
    slug: 'extinct-mammals',
    description: 'Remarkable mammalian lineages across the Cenozoic, from saber-toothed hypercarnivores to giant marsupials.',
    count: 5,
    badge: 'Mammalian Evolution',
    featuredImage: IMAGES.smilodon
  },
  {
    id: 'recently-extinct',
    name: 'Recently Extinct Species',
    slug: 'recently-extinct',
    description: 'Species lost within recorded human history between the 17th and 20th centuries, documented in museum archives.',
    count: 5,
    badge: 'Anthropocene Records',
    featuredImage: IMAGES.thylacine
  }
];
