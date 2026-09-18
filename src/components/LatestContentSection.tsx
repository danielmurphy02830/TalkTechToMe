import React, { useState } from 'react';
import { 
  Play, 
  Tv, 
  BookOpen, 
  Bookmark, 
  ExternalLink, 
  Clock, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { YouTubeIcon, SubstackIcon, MediumIcon } from './Icons';

export interface ContentItem {
  id: string;
  title: string;
  type: 'youtube' | 'substack' | 'medium';
  description: string;
  url: string;
  date: string;
  readTimeOrDuration: string;
  tags: string[];
}

export const LATEST_CONTENT: ContentItem[] = [
  {
    id: 'vid-synthesia',
    title: 'Deep Dive into Synthesia: Is AI Video Generation Ready for Primetime?',
    type: 'youtube',
    description: 'Comprehensive walkthrough of custom studio avatars, voice cloning fidelity, and how teams produce training and marketing videos at scale.',
    url: BRAND_INFO.socials.youtube,
    date: 'Latest Video',
    readTimeOrDuration: '18 mins',
    tags: ['Synthesia', 'Text-to-Video', 'AI Avatars']
  },
  {
    id: 'vid-cursor',
    title: 'Cursor AI: 3.8x Refactoring Speedup with Composer & Claude 3.5',
    type: 'youtube',
    description: 'Real-world benchmark testing Cursor Composer against traditional IDEs on a complex multi-file full-stack codebase.',
    url: BRAND_INFO.socials.youtube,
    date: 'Featured Demo',
    readTimeOrDuration: '14 mins',
    tags: ['Cursor AI', 'Coding Assistant', 'Claude 3.5']
  },
  {
    id: 'blog-cursor-vs-ides',
    title: 'Cursor vs. Traditional IDEs: How AI Coding Redefines Full-Stack Development',
    type: 'substack',
    description: 'An analytical breakdown on Substack exploring the architectural shift behind agentic code editors and the changing role of software engineers.',
    url: BRAND_INFO.socials.substack,
    date: 'Substack Newsletter',
    readTimeOrDuration: '6 min read',
    tags: ['Developer Tools', 'Agentic AI', 'Substack']
  },
  {
    id: 'blog-pricing',
    title: 'The Real Cost of AI Tool Subscriptions: What Brands Actually Pay',
    type: 'medium',
    description: 'Deciphering hidden seat tiers, compute credit burn, and API surcharges across today\'s leading generative AI platforms.',
    url: BRAND_INFO.socials.medium,
    date: 'Medium Article',
    readTimeOrDuration: '8 min read',
    tags: ['AI Pricing', 'Software Costs', 'Reviews']
  },
  {
    id: 'vid-claude-code',
    title: 'Claude Code Terminal Agent: Full Architecture & Workflow Walkthrough',
    type: 'youtube',
    description: 'Testing Anthropic\'s autonomous terminal agent: how it reads codebases, manages git, runs tests, and automates developer toil.',
    url: BRAND_INFO.socials.youtube,
    date: 'Hands-on Demo',
    readTimeOrDuration: '16 mins',
    tags: ['Claude Code', 'Terminal Agent', 'CLI']
  },
  {
    id: 'blog-sre-ai',
    title: 'SRE Superpowers: From Firefighting to Force Multiplication with AI',
    type: 'medium',
    description: 'How modern engineering leaders use AI-driven ChatOps and intelligent anomaly detection to eliminate operational toil and alert fatigue.',
    url: BRAND_INFO.socials.medium,
    date: 'Medium Publication',
    readTimeOrDuration: '7 min read',
    tags: ['SRE Strategy', 'DevOps', 'Observability']
  },
  {
    id: 'vid-video-faceoff',
    title: 'Text-to-Video Model Faceoff: Synthesia vs. HeyGen vs. Runway Gen-3',
    type: 'youtube',
    description: 'Side-by-side render benchmarks on identical prompts testing avatar fidelity, natural lip-sync, and camera motion.',
    url: BRAND_INFO.socials.youtube,
    date: 'Comparison Video',
    readTimeOrDuration: '20 mins',
    tags: ['Video AI', 'Benchmarking', 'HeyGen']
  },
  {
    id: 'blog-prompting',
    title: 'Prompting AI Coding Models for Complex Full-Stack Architecture',
    type: 'substack',
    description: 'Concrete techniques for steering large language models through database migrations, type safety, and resilient APIs.',
    url: BRAND_INFO.socials.substack,
    date: 'Substack Newsletter',
    readTimeOrDuration: '5 min read',
    tags: ['Prompting', 'Architecture', 'Engineering']
  }
];

export const LatestContentSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'youtube' | 'substack' | 'medium'>('all');

  const filteredContent = activeFilter === 'all'
    ? LATEST_CONTENT
    : LATEST_CONTENT.filter(c => c.type === activeFilter);

  const getSourceBadge = (type: ContentItem['type']) => {
    switch (type) {
      case 'youtube':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-semibold">
            <YouTubeIcon className="w-3.5 h-3.5" />
            <span>YouTube Video</span>
          </span>
        );
      case 'substack':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-400 border border-orange-500/30 text-xs font-semibold">
            <SubstackIcon className="w-3.5 h-3.5" />
            <span>Substack Newsletter</span>
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
            <MediumIcon className="w-3.5 h-3.5" />
            <span>Medium Article</span>
          </span>
        );
    }
  };

  return (
    <section id="latest-content" className="py-20 bg-[#0B0F19] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-[#FFBF00] uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Watch & Read</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest YouTube Videos & Blogs
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Fresh walkthroughs, tool benchmarks, and technical newsletters published by Dan Murphy.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#111827] border border-[#1F2937]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#FFBF00] text-black font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({LATEST_CONTENT.length})
            </button>
            <button
              onClick={() => setActiveFilter('youtube')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'youtube'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
              <span>YouTube Videos</span>
            </button>
            <button
              onClick={() => setActiveFilter('substack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'substack'
                  ? 'bg-orange-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SubstackIcon className="w-3.5 h-3.5" />
              <span>Substack</span>
            </button>
            <button
              onClick={() => setActiveFilter('medium')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'medium'
                  ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MediumIcon className="w-3.5 h-3.5" />
              <span>Medium</span>
            </button>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredContent.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-2xl bg-[#111827] hover:bg-[#151D2E] border border-[#1F2937] hover:border-slate-600 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Card Top: Source badge + Duration */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  {getSourceBadge(item.type)}
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.readTimeOrDuration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFBF00] transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tags & Watch / Read CTA */}
              <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F19] text-slate-400 border border-[#1F2937]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-white group-hover:text-[#FFBF00] flex items-center gap-1">
                  {item.type === 'youtube' ? 'Watch Video' : 'Read Article'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Outbound Subscribe Hub */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white mb-1">
              Never Miss an AI Tool Teardown or Demo
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe on YouTube for video demos, or get weekly deep dives delivered to your inbox on Substack.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>
            <a
              href={BRAND_INFO.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-colors"
            >
              <SubstackIcon className="w-4 h-4" />
              <span>Subscribe on Substack</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
