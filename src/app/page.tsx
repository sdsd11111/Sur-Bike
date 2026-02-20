import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutADN } from '@/components/AboutADN';
import { CinematicExperience } from '@/components/CinematicExperience';
import { ServicesTech } from '@/components/ServicesTech';
import { ProductGallery } from '@/components/ProductGallery';
import { CommunityLegacy } from '@/components/CommunityLegacy';
import { ContactLocation } from '@/components/ContactLocation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Header />
      <Hero />
      <AboutADN />
      <CinematicExperience />
      <ServicesTech />
      <ProductGallery />
      <CommunityLegacy />
      <ContactLocation />
      <Footer />
    </main>
  );
}
