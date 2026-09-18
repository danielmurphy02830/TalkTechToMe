import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingSection } from './components/TrendingSection';
import { HubFeatureSection } from './components/HubFeatureSection';
import { ModalitiesAndProfile } from './components/ModalitiesAndProfile';
import { CareerSection } from './components/CareerSection';
import { CollaborationSection } from './components/CollaborationSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100 antialiased selection:bg-[#FFBF00] selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrendingSection />
        <HubFeatureSection />
        <ModalitiesAndProfile />
        <CareerSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
