import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  BookOpen, 
  Sparkles, 
  Menu, 
  X, 
  ExternalLink, 
  Mail,
  Compass,
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b1329] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                TalkTech<span className="text-gradient-cyan">ToMe</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                by {BRAND_INFO.creator}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#topics" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Focus Areas
            </a>
            <a href="#media" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Videos & Articles
            </a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              About Dan
            </a>
            <a href="#collaborate" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Collaborations
            </a>
          </nav>

          {/* Action Links */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={BRAND_INFO.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a 
              href={BRAND_INFO.socials.substack} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Substack</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a 
              href="#collaborate"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
            >
              <span>Work Together</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1022]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <a 
              href="#topics" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Focus Areas
            </a>
            <a 
              href="#media" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Videos & Articles
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              About Dan Murphy
            </a>
            <a 
              href="#collaborate" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Collaborations & Contact
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a 
              href={BRAND_INFO.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold"
            >
              <Tv className="w-4 h-4" />
              YouTube
            </a>
            <a 
              href={BRAND_INFO.socials.substack} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              Substack
            </a>
          </div>

          <a 
            href="#collaborate"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm shadow-md"
          >
            <span>Partner / Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
