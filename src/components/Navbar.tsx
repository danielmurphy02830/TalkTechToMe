import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Tv, 
  BookOpen, 
  ExternalLink,
  Code2,
  Video,
  FileText,
  User,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = '#trending';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1F2937] py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Mascot */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#FFBF00] flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform">
                🎙️
              </div>
              <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                TalkTech<span className="text-[#FFBF00]">ToMe</span>
              </span>
            </a>
          </div>

          {/* Hugging Face Style Global Search Input */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI tools, models, benchmarks, reviews..."
                className="w-full pl-9 pr-12 py-1.5 bg-[#111827] hover:bg-[#161F33] focus:bg-[#161F33] border border-[#1F2937] focus:border-slate-500 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
              />
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                <kbd className="text-[10px] font-mono text-slate-500 bg-[#1F2937] px-1.5 py-0.5 rounded border border-slate-700">
                  /
                </kbd>
              </div>
            </div>
          </form>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>About</span>
            </a>
            <a href="#channels" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-[#FFBF00]" />
              <span>Channels</span>
            </a>
            <a href="#latest-content" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Video className="w-3.5 h-3.5 text-slate-400" />
              <span>Videos & Blogs</span>
            </a>
            <a href="#career" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              <span>Career</span>
            </a>
            <a href="#collaborate" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              <span>Collaborate</span>
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={BRAND_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1F2937] text-slate-200 border border-[#1F2937] hover:border-slate-600 text-xs font-medium transition-all"
            >
              <Tv className="w-3.5 h-3.5 text-red-400" />
              <span>YouTube</span>
            </a>

            <a
              href="#collaborate"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFBF00] hover:bg-[#E6AC00] text-black text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collaborate</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#111827]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19] border-b border-[#1F2937] px-4 pt-3 pb-5 space-y-3">
          <form onSubmit={handleSearchSubmit} className="pt-1">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI tools, reviews..."
                className="w-full pl-8 pr-3 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-xs text-white placeholder-slate-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </form>

          <div className="flex flex-col space-y-2 pt-2 text-sm text-slate-200 font-medium">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827]"
            >
              <User className="w-4 h-4 text-slate-400" /> What is TalkTechToMe
            </a>
            <a 
              href="#channels" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827]"
            >
              <Sparkles className="w-4 h-4 text-[#FFBF00]" /> Official Channels & Sites
            </a>
            <a 
              href="#latest-content" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827]"
            >
              <Video className="w-4 h-4 text-slate-400" /> Latest Videos & Blogs
            </a>
            <a 
              href="#career" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827]"
            >
              <Briefcase className="w-4 h-4 text-slate-400" /> Career Journey
            </a>
            <a 
              href="#collaborate" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FFBF00] text-black font-bold"
            >
              <Sparkles className="w-4 h-4" /> Collaborate & Inquiries
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
