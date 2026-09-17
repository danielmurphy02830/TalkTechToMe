import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopicPillars } from './components/TopicPillars';
import { MediaShowcase } from './components/MediaShowcase';
import { AboutSection } from './components/AboutSection';
import { CollaborationSection } from './components/CollaborationSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#080d1a] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TopicPillars />
        <MediaShowcase />
        <AboutSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
