import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  SlidersHorizontal, 
  ExternalLink,
  Flame,
  Star,
  Download
} from 'lucide-react';
import { BRAND_INFO, HF_EXPLORER_TASKS, HF_EXPLORER_MODELS, HFModel } from '../data/content';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Main');
  const [selectedTask, setSelectedTask] = useState('Text-to-Video');
  const [paramFilter, setParamFilter] = useState('Agentic');

  const filteredModels = selectedTask === 'All' 
    ? HF_EXPLORER_MODELS 
    : HF_EXPLORER_MODELS.filter(m => 
        selectedTask === 'Text-to-Video' ? m.category.toLowerCase().includes('video') :
        selectedTask === 'AI Coding' ? m.category.toLowerCase().includes('code') || m.category.toLowerCase().includes('ide') || m.category.toLowerCase().includes('terminal') :
        true
      );

  return (
    <section className="pt-8 pb-14 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hugging Face Split Card Container */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Brand & Hero Headline */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1F2937] bg-gradient-to-b from-[#111827] to-[#0D121F]">
              <div>
                {/* Creator Header with Main Image */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="relative">
                    <img
                      src="/media/main-image.jpg"
                      alt="Dan Murphy - TalkTechToMe"
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#FFBF00] shadow-lg shadow-[#FFBF00]/15"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FFBF00] flex items-center justify-center text-xs shadow-sm">
                      🎙️
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white font-mono">{BRAND_INFO.creator}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FFBF00]/20 text-[#FFBF00] border border-[#FFBF00]/30 font-bold">
                        PRO CREATOR
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      @{BRAND_INFO.username} &bull; Head of SRE
                    </p>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                  The AI tools platform shaping our future.
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  The independent platform where developers, creators, and leaders explore in-depth AI tool reviews, agentic coding benchmarks, and video synthesis demonstrations.
                </p>
              </div>

              {/* Hero CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#trending"
                  className="px-5 py-2.5 rounded-lg bg-[#1F2937] hover:bg-[#374151] text-white text-xs font-semibold border border-slate-700 hover:border-slate-500 transition-all"
                >
                  Explore AI Tools
                </a>
                <span className="text-xs text-slate-500">or</span>
                <a
                  href="#spaces"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  Browse Video Demos &rarr;
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Catalog Explorer */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0D1321] flex flex-col justify-between">
              
              <div>
                {/* Top Category Tabs */}
                <div className="flex items-center justify-between border-b border-[#1F2937] pb-3 mb-5">
                  <div className="flex items-center gap-2 overflow-x-auto text-xs font-medium">
                    {['Main', 'Tasks', 'Categories', 'Benchmarks', 'Reviews'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 rounded-md transition-colors ${
                          activeTab === tab 
                            ? 'bg-[#1F2937] text-white font-semibold' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
                    <span className="text-slate-500">Catalog:</span>
                    <span className="text-white font-semibold">50+ Reviews</span>
                  </div>
                </div>

                {/* Tasks Chips Pill Bar */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Filter by Task / Modality:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {HF_EXPLORER_TASKS.map((task) => (
                      <button
                        key={task}
                        onClick={() => setSelectedTask(task)}
                        className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                          selectedTask === task
                            ? 'bg-[#FFBF00]/15 text-[#FFBF00] border-[#FFBF00]/40 font-semibold'
                            : 'bg-[#111827] text-slate-400 border-[#1F2937] hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        {task}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter Scale Bar */}
                <div className="mb-5 p-3 rounded-xl bg-[#111827]/80 border border-[#1F2937]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3 h-3 text-slate-400" />
                      Scale & Architecture Target:
                    </span>
                    <span className="text-cyan-400 font-semibold">{paramFilter}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
                    {['< 7B', '14B', '70B', 'MoE Architecture', 'Agentic IDE'].map((scale) => (
                      <button
                        key={scale}
                        onClick={() => setParamFilter(scale)}
                        className={`px-2 py-0.5 rounded transition-colors ${
                          paramFilter === scale
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                            : 'hover:text-slate-200'
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Model / Tool Cards List */}
                <div className="space-y-2">
                  {(filteredModels.length > 0 ? filteredModels : HF_EXPLORER_MODELS).slice(0, 4).map((tool) => (
                    <a
                      key={tool.id}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-[#111827] hover:bg-[#161F33] border border-[#1F2937] hover:border-slate-700 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1F2937] flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                          {tool.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white group-hover:text-[#FFBF00] transition-colors font-mono">
                              {tool.name}
                            </span>
                            {tool.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400">
                            {tool.category} &bull; <span className="text-slate-500">{tool.updated}</span>
                          </p>
                        </div>
                      </div>

                      {/* Right Stats */}
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="hidden sm:flex items-center gap-1">
                          <Download className="w-3 h-3 text-slate-500" />
                          {tool.downloadsOrViews}
                        </span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <Star className="w-3 h-3 text-amber-400" />
                          {tool.likes}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

              </div>

              {/* Card Bottom Bar */}
              <div className="pt-4 mt-4 border-t border-[#1F2937] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span>Curated & benchmarked by <strong>{BRAND_INFO.creator}</strong></span>
                </span>
                <a 
                  href={BRAND_INFO.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  View on YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
