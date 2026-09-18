import React from 'react';
import { 
  Heart, 
  ExternalLink, 
  Cpu, 
  Sparkles, 
  Database, 
  ArrowRight,
  Tv,
  BookOpen,
  Bookmark
} from 'lucide-react';
import { 
  HF_TRENDING_MODELS, 
  HF_TRENDING_SPACES, 
  HF_TRENDING_DATASETS, 
  BRAND_INFO 
} from '../data/content';

export const TrendingSection: React.FC = () => {
  return (
    <section id="trending" className="py-16 bg-[#0B0F19] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Emoji */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2.5">
            Trending on <span className="inline-block px-2 py-0.5 rounded bg-[#FFBF00] text-black text-xl">🎙️</span> this week
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Most explored AI tool evaluations, video walkthroughs, and technical deep dives.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Models / AI Tools */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2 px-1">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>AI Models & Tools</span>
            </div>

            <div className="space-y-2.5">
              {HF_TRENDING_MODELS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3.5 rounded-xl bg-[#111827] hover:bg-[#161F33] border border-[#1F2937] hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-white group-hover:text-[#FFBF00] transition-colors flex items-center gap-1.5 truncate">
                      <span>{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0 ml-2">
                      ❤️ {item.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate">{item.category}</span>
                    <span className="text-slate-500 shrink-0">{item.updated}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-2 text-center">
              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Browse 50+ tool reviews &rarr;
              </a>
            </div>
          </div>

          {/* Column 2: Spaces / Vibrant Gradient Video Cards */}
          <div id="spaces" className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2 px-1">
              <Sparkles className="w-4 h-4 text-[#FFBF00]" />
              <span>Spaces / Video Demos</span>
            </div>

            <div className="space-y-2.5">
              {HF_TRENDING_SPACES.map((space) => (
                <a
                  key={space.id}
                  href={space.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-xl bg-gradient-to-r ${space.gradient} hover:opacity-95 shadow-md hover:shadow-lg transition-all group text-white transform hover:-translate-y-0.5`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                      {space.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-black/25 backdrop-blur-sm shrink-0">
                      <Heart className="w-3 h-3 fill-current" /> {space.likes}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/90 line-clamp-2 leading-relaxed">
                    {space.description}
                  </p>
                </a>
              ))}
            </div>

            <div className="pt-2 text-center">
              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Browse all video walkthroughs &rarr;
              </a>
            </div>
          </div>

          {/* Column 3: Datasets / Publications & Articles */}
          <div id="articles" className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2 px-1">
              <Database className="w-4 h-4 text-slate-400" />
              <span>Articles & Publications</span>
            </div>

            <div className="space-y-2.5">
              {HF_TRENDING_DATASETS.map((data) => (
                <a
                  key={data.id}
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3.5 rounded-xl bg-[#111827] hover:bg-[#161F33] border border-[#1F2937] hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-white group-hover:text-[#FFBF00] transition-colors truncate">
                      {data.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0 ml-2">
                      ❤️ {data.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-slate-500">{data.updated}</span>
                    <span className="font-mono text-slate-400">{data.views} views</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-2 text-center">
              <a
                href={BRAND_INFO.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Browse Substack newsletter &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
