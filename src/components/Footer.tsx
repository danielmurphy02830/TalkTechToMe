import React from 'react';
import { 
  Sparkles, 
  Tv, 
  BookOpen, 
  Bookmark, 
  Globe, 
  Mail, 
  Heart,
  Cloud,
  ArrowUp
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 text-slate-400 text-xs py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#080d1a] rounded-[6.5px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                TalkTech<span className="text-cyan-400">ToMe</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Clear insights into the software shaping our future: text-to-video apps, AI coding assistants, demos, pricing, and honest appraisals.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-red-400 flex items-center justify-center border border-slate-800 transition-colors"
                title="YouTube"
              >
                <Tv className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-orange-400 flex items-center justify-center border border-slate-800 transition-colors"
                title="Substack"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 flex items-center justify-center border border-slate-800 transition-colors"
                title="Medium"
              >
                <Bookmark className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 flex items-center justify-center border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 flex items-center justify-center border border-slate-800 transition-colors"
                title="Dan Murphy's Personal Site"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#topics" className="hover:text-cyan-400 transition-colors">Focus Areas & Demos</a>
              </li>
              <li>
                <a href="#media" className="hover:text-cyan-400 transition-colors">YouTube, Substack & Medium</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Dan Murphy</a>
              </li>
              <li>
                <a href="#collaborate" className="hover:text-cyan-400 transition-colors">Collaborate & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Infrastructure & Host badge */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">
              Cloud Infrastructure
            </h4>
            <div className="p-3 rounded-xl bg-[#0a0f1d] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-xs">Google Cloud Platform</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Engineered for GCP Cloud Run container execution with GoDaddy DNS routing for <span className="text-cyan-300 font-mono">talktechtome.co.uk</span>.
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Domain: talktechtome.co.uk</span>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                Back to top <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} TalkTechToMe &bull; Dan Murphy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${BRAND_INFO.contactEmail}`} className="hover:text-slate-400">
              {BRAND_INFO.contactEmail}
            </a>
            <span>&bull;</span>
            <a href="https://danmurphy.life" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              danmurphy.life
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
