/**
 * Data types for LOST SPECIES - Natural History Journal
 */

export type CategoryId = 
  | 'ice-age-giants'
  | 'extinct-birds'
  | 'marine-animals'
  | 'ancient-reptiles'
  | 'extinct-mammals'
  | 'recently-extinct';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  count: number;
  badge: string;
  featuredImage: string;
}

export interface ScientificSource {
  title: string;
  institution: string;
  year?: number | string;
  url: string;
  doi?: string;
  note?: string;
}

export interface Animal {
  id: string;
  slug: string;
  commonName: string;
  scientificName: string;
  categories: CategoryId[];
  periodOrDate: string;
  exactExtinctionWindow: string;
  nativeRange: string;
  image: string;
  imageCaption: string;
  briefDescription: string;
  
  // Detailed Section fields
  introduction: string;
  physicalSpecs: {
    estimatedHeightOrLength: string;
    estimatedMass: string;
    distinguishingFeatures: string[];
    sexualDimorphism?: string;
  };
  habitatAndDistribution: string;
  dietAndEcology: string;
  geologicalEpoch: string;
  extinctionTimeline: string;
  extinctionCauses: {
    primaryDrivers: string[];
    evidenceStrength: 'High Consensus' | 'Moderate Evidence' | 'Scientific Debate';
    summary: string;
  };
  fossilEvidence: {
    keySites: string[];
    specimenPreservation: string;
    notableSpecimens?: string;
  };
  humanRelationship: string;
  facts: string[];
  sources: ScientificSource[];
  relatedAnimalIds: string[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
  figureCaption?: string;
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: CategoryId;
  author: {
    name: string;
    role: string;
    affiliation: string;
    avatarInitials: string;
  };
  publishedDate: string;
  readTimeMinutes: number;
  coverImage: string;
  coverCaption: string;
  featuredAnimalId?: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  tags: string[];
  sources: ScientificSource[];
  relatedArticleSlugs: string[];
}

export interface TimelineMilestone {
  id: string;
  timeLabel: string;
  period: string;
  era: string;
  millionYearsAgo?: number;
  yearsAgo?: number;
  exactDate?: string;
  type: 'mass-extinction' | 'prehistoric-loss' | 'historical-extinction';
  title: string;
  headline: string;
  summary: string;
  causalFactors: string[];
  affectedLife: string;
  keySpeciesInvolved?: string[];
  scientificConsensus: string;
}

export interface DidYouKnowFact {
  id: string;
  species: string;
  scientificName: string;
  fact: string;
  explanation: string;
  source: string;
  sourceUrl: string;
  category: CategoryId;
}
