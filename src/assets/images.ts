// Direct ES module imports for Vite bundling
import heroMammoth from './images/hero_woolly_mammoth_1792088931363.jpg';
import dodoBird from './images/animal_dodo_bird_1792088933115.jpg';
import thylacine from './images/animal_thylacine_1792088932933.jpg';
import smilodon from './images/animal_smilodon_1792088933463.jpg';
import passengerPigeon from './images/animal_passenger_pigeon_1792088933785.jpg';
import greatAuk from './images/animal_great_auk_1792088951292.jpg';
import megalodon from './images/animal_megalodon_1792088952387.jpg';
import irishElk from './images/animal_irish_elk_1792088951886.jpg';
import quagga from './images/animal_quagga_1792088952930.jpg';
import stellersSeaCow from './images/animal_stellers_sea_cow_1792088953535.jpg';
import titanoboa from './images/animal_titanoboa_1792088974540.jpg';
import fossilDiscovery from './images/fossil_discovery_1792088973646.jpg';

export const IMAGES = {
  heroMammoth,
  dodoBird,
  thylacine,
  smilodon,
  passengerPigeon,
  greatAuk,
  megalodon,
  irishElk,
  quagga,
  stellersSeaCow,
  titanoboa,
  fossilDiscovery,
};

export function getImageFallback(src?: string): string {
  if (!src) return '/images/hero_woolly_mammoth_1792088931363.jpg';
  const filename = src.split('/').pop() || '';
  const cleanName = filename.replace(/-[A-Za-z0-9_-]{8}\.jpg$/, '.jpg');
  return `/images/${cleanName}`;
}

export default IMAGES;
