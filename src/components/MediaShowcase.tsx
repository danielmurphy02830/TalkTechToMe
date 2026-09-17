import React, { useState } from 'react';
import { 
  Tv, 
  BookOpen, 
  Bookmark, 
  ExternalLink, 
  Play, 
  Calendar, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { FEATURED_MEDIA, BRAND_INFO, MediaItem } from '../data/content';

export const MediaShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'youtube' | 'substack' | 'medium'>('all');

  const filteredItems = activeFilter === 'all' 
    ? FEATURED_MEDIA 
    : FEATURED_MEDIA.filter(item => item.type === activeFilter);

  const getTypeBadge = (type: MediaItem['type']) => {
    switch (type) {
      case 'youtube':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-red-500/15 text-red-400 border border-red-500/30">
            <Tv className="w-3 h-3" /> YouTube Video
          </span>
        );
      case 'substack':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
            <BookOpen className="w-3 h-3" /> Substack Newsletter
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <Bookmark className="w-3 h-3" /> Medium Article
          </span>
        );
    }
  };

  return (
    <section id="media" className="py-20 bg-[#080d1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Channels & Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest Demos, Reviews & Writings
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Catch up on recent YouTube walkthroughs, analytical breakdowns on Substack, and deep dives published on Medium.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveFilter('youtube')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'youtube' 
                  ? 'bg-red-500 text-white font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              YouTube
            </button>
            <button
              onClick={() => setActiveFilter('substack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'substack' 
                  ? 'bg-orange-500 text-white font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Substack
            </button>
            <button
              onClick={() => setActiveFilter('medium')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'medium' 
                  ? 'bg-emerald-500 text-white font-semibold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Medium
            </button>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between group border border-slate-800 relative transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  {getTypeBadge(item.type)}
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {item.readTimeOrDuration}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer / Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-cyan-400 group-hover:underline flex items-center gap-1">
                  Read/Watch <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Channel Outbound Hub Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* YouTube Hub Card */}
          <div className="bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border border-red-900/30 rounded-2xl p-6 text-center sm:text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Tv className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">YouTube Channel</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Watch hands-on video teardowns of Synthesia, Cursor, and emerging AI tools.
              </p>
            </div>
            <a
              href={BRAND_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Substack Hub Card */}
          <div className="bg-gradient-to-br from-orange-950/40 via-slate-900 to-slate-900 border border-orange-900/30 rounded-2xl p-6 text-center sm:text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Substack Newsletter</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Weekly deep dives on AI tech, workflow optimizations, and pricing models.
              </p>
            </div>
            <a
              href={BRAND_INFO.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Subscribe on Substack</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Medium Publication Card */}
          <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-900/30 rounded-2xl p-6 text-center sm:text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Bookmark className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Medium Articles</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Articles and thought pieces on AI engineering, tool evolution, and strategy.
              </p>
            </div>
            <a
              href={BRAND_INFO.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Follow on Medium</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
