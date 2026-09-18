import React from 'react';
import { 
  Laptop, 
  ExternalLink,
  Tv,
  BookOpen,
  Bookmark,
  ArrowUp
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F19] border-t border-[#1F2937] text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-[#1F2937]">
          
          {/* Left Theme Selector Column */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <button 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1F2937] text-slate-300 text-xs font-mono hover:bg-[#161F33] transition-colors"
            >
              <Laptop className="w-3.5 h-3.5 text-slate-400" />
              <span>Dark theme</span>
            </button>

            <div className="text-xs text-slate-500 font-mono space-y-1">
              <div>Domain: talktechtome.co.uk</div>
              <div>GCP Cloud Run &bull; London</div>
            </div>
          </div>

          {/* Column 1: Website */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Website
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">What is TalkTechToMe</a>
              </li>
              <li>
                <a href="#channels" className="hover:text-white transition-colors">Official Channels & Sites</a>
              </li>
              <li>
                <a href="#latest-content" className="hover:text-white transition-colors">Latest Videos & Blogs</a>
              </li>
              <li>
                <a href="#career" className="hover:text-white transition-colors">Career Timeline</a>
              </li>
              <li>
                <a href="#collaborate" className="hover:text-white transition-colors">Contact / Collab</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Creator & Story */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Creator
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dan Murphy</a>
              </li>
              <li>
                <a 
                  href={BRAND_INFO.socials.personal} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  danmurphy.life <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Head of SRE @ PwC</span>
              </li>
              <li>
                <span className="text-slate-500">20+ Years in Tech</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Publications
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a 
                  href={BRAND_INFO.socials.substack} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Substack <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href={BRAND_INFO.socials.medium} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Medium <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href={BRAND_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  YouTube Demos <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-white transition-colors">
                  Sitemap XML
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="col-span-1 md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Social & Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a 
                  href={BRAND_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={BRAND_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Tv className="w-3.5 h-3.5 text-red-400" /> YouTube Channel
                </a>
              </li>
              <li>
                <a 
                  href={BRAND_INFO.socials.substack} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-orange-400" /> Substack Newsletter
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${BRAND_INFO.contactEmail}`} 
                  className="hover:text-white transition-colors truncate font-mono text-[11px]"
                >
                  {BRAND_INFO.contactEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} TalkTechToMe &bull; Dan Murphy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by Google Cloud Run</span>
            <span>&bull;</span>
            <button 
              onClick={scrollToTop} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
