import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Clock, 
  Sparkles
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
  thumbnail?: string;
}

export const LATEST_CONTENT: ContentItem[] = [
  {
    id: 'vid-architect',
    title: 'How AI Is Changing the Role of an Architect',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/How%20AI%20Is%20changing%20the%20role%20of%20an%20architect.png',
    description: 'Exploring how LLMs, autonomous reasoning, and agentic workflows are transforming technical architecture, system design, and the architect\'s daily responsibilities.',
    url: BRAND_INFO.socials.youtube,
    date: 'Featured Video',
    readTimeOrDuration: '16 mins',
    tags: ['AI Architecture', 'System Design', 'Enterprise AI']
  },
  {
    id: 'vid-agentic-ai',
    title: 'Agentic AI in Action: Autonomous Workflows & Tool Use',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/Agentic%20AI%20Thumb.png',
    description: 'Hands-on breakdown of multi-agent loops, tool orchestration, and separating genuine enterprise ROI from marketing hype.',
    url: BRAND_INFO.socials.youtube,
    date: 'Latest Video',
    readTimeOrDuration: '18 mins',
    tags: ['Agentic AI', 'Autonomous Agents', 'Workflows']
  },
  {
    id: 'vid-mcp',
    title: 'Model Context Protocol (MCP) Explained: Universal AI Standard',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/MCP%20Youtube%20thumb.png',
    description: 'Deep dive into Anthropic\'s MCP: standardizing how LLMs connect securely to codebases, local tools, databases, and external APIs.',
    url: BRAND_INFO.socials.youtube,
    date: 'Architecture Deep Dive',
    readTimeOrDuration: '15 mins',
    tags: ['MCP', 'Anthropic', 'Standards']
  },
  {
    id: 'vid-ai-credits',
    title: 'AI Tool Subscriptions & Credits: What Brands Actually Pay',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/Ai%20Credits%20thumb.jpg',
    description: 'Deciphering seat tiers, compute credit burn, and API surcharges across today\'s leading generative AI platforms to calculate true ROI.',
    url: BRAND_INFO.socials.youtube,
    date: 'Pricing Teardown',
    readTimeOrDuration: '14 mins',
    tags: ['AI Pricing', 'Software Costs', 'ROI Analysis']
  },
  {
    id: 'vid-ai-security',
    title: 'AI Security & Guardrails: Defending Enterprise LLMs',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/thumb%20ai%20security%201.jpg',
    description: 'Preventing prompt injection attacks, sensitive data leakage, and untrusted execution in mission-critical applications.',
    url: BRAND_INFO.socials.youtube,
    date: 'Security Deep Dive',
    readTimeOrDuration: '17 mins',
    tags: ['AI Security', 'Guardrails', 'Enterprise']
  },
  {
    id: 'vid-ops',
    title: 'AI in SRE & DevOps: Automating Alert Fatigue & Incident Triage',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/Ops%20vid%201.jpg',
    description: 'How modern operations teams leverage intelligent anomaly detection and automated triage to eliminate operational toil.',
    url: BRAND_INFO.socials.youtube,
    date: 'SRE & Ops',
    readTimeOrDuration: '19 mins',
    tags: ['SRE Strategy', 'DevOps', 'Observability']
  },
  {
    id: 'vid-saas-20min',
    title: 'Build & Deploy a Full SaaS in 20 Minutes with AI Assistants',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/20%20min%20Saas.png',
    description: 'Speed run test: using Cursor AI, Claude, and modern scaffolding to generate, test, and ship a full-stack SaaS live from scratch.',
    url: BRAND_INFO.socials.youtube,
    date: 'Live Coding',
    readTimeOrDuration: '20 mins',
    tags: ['Cursor AI', 'Build SaaS', 'FullStack']
  },
  {
    id: 'vid-ai-myths',
    title: '5 Biggest AI Myths Debunked: What Actually Works in Production',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/thumb%20myths.jpg',
    description: 'Separating marketing hype from engineering reality: what enterprise LLMs can actually deliver today and where current limitations lie.',
    url: BRAND_INFO.socials.youtube,
    date: 'Industry Analysis',
    readTimeOrDuration: '13 mins',
    tags: ['AI Myths', 'Reality Check', 'Tech Review']
  },
  {
    id: 'vid-ontology',
    title: 'Ontologies & Knowledge Graphs for Generative AI',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/Ontology%20Youtube.jpg',
    description: 'Why structured semantic schemas and knowledge graphs are essential to eliminating hallucinations in enterprise RAG systems.',
    url: BRAND_INFO.socials.youtube,
    date: 'Knowledge Systems',
    readTimeOrDuration: '21 mins',
    tags: ['Ontology', 'Knowledge Graphs', 'RAG']
  },
  {
    id: 'vid-markov',
    title: 'From Markov Chains to Modern LLMs: Evolution of AI',
    type: 'youtube',
    thumbnail: '/media/youtube-thumbs/Markov%20Chains%20Thumb%20(1).png',
    description: 'Tracing generative language modeling from early statistical Markov transitions to multi-head self-attention transformers.',
    url: BRAND_INFO.socials.youtube,
    date: 'Foundations',
    readTimeOrDuration: '22 mins',
    tags: ['Markov Chains', 'LLM History', 'Deep Learning']
  },
  {
    id: 'blog-cursor-ides',
    title: 'Cursor vs. Traditional IDEs: The Future of Developer Velocity',
    type: 'substack',
    thumbnail: '/media/youtube-thumbs/Fabel%205%20.jpg',
    description: 'An analytical essay exploring the architectural shift behind agentic code editors and the changing role of software engineers.',
    url: BRAND_INFO.socials.substack,
    date: 'Substack Newsletter',
    readTimeOrDuration: '6 min read',
    tags: ['Developer Tools', 'Cursor AI', 'Substack']
  },
  {
    id: 'blog-prompting-arch',
    title: 'Prompting AI Coding Models for Complex Full-Stack Architecture',
    type: 'substack',
    thumbnail: '/media/youtube-thumbs/Treasure%20hunt%20thumb.png',
    description: 'Concrete techniques for steering large language models through database migrations, type safety, and resilient APIs.',
    url: BRAND_INFO.socials.substack,
    date: 'Substack Newsletter',
    readTimeOrDuration: '5 min read',
    tags: ['Prompting', 'Architecture', 'Substack']
  },
  {
    id: 'blog-enterprise-licensing',
    title: 'Deciphering Enterprise AI Licensing & Compute Burn',
    type: 'medium',
    thumbnail: '/media/youtube-thumbs/ProProfs%20New.jpg',
    description: 'A detailed guide breaking down hidden seat commitments, GPU compute surcharges, and negotiating enterprise contracts.',
    url: BRAND_INFO.socials.medium,
    date: 'Medium Article',
    readTimeOrDuration: '8 min read',
    tags: ['AI Pricing', 'Enterprise IT', 'FinOps']
  },
  {
    id: 'blog-sre-superpowers',
    title: 'SRE Superpowers: Building Resilient AI-Augmented Operations',
    type: 'medium',
    thumbnail: '/media/youtube-thumbs/2027%20Predictions%20(TikTok%20Photo%20Mode%20916).png',
    description: 'How engineering leaders combine ChatOps, automated root-cause diagnostics, and golden signals to empower SRE teams.',
    url: BRAND_INFO.socials.medium,
    date: 'Medium Publication',
    readTimeOrDuration: '7 min read',
    tags: ['SRE Strategy', 'DevOps', 'Observability']
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
              <span>YouTube ({LATEST_CONTENT.filter(c => c.type === 'youtube').length})</span>
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
              <span>Substack ({LATEST_CONTENT.filter(c => c.type === 'substack').length})</span>
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
              <span>Medium ({LATEST_CONTENT.filter(c => c.type === 'medium').length})</span>
            </button>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 rounded-2xl bg-[#111827] hover:bg-[#151D2E] border border-[#1F2937] hover:border-slate-600 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Preview Banner */}
                {item.thumbnail ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/60 mb-4 border border-[#1F2937] group-hover:border-slate-600 transition-colors">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* YouTube Play Icon overlay */}
                    {item.type === 'youtube' && (
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-200">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Top Left Source Tag */}
                    <div className="absolute top-2 left-2">
                      {getSourceBadge(item.type)}
                    </div>

                    {/* Bottom Right Duration / Read Time Badge */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-sm text-[11px] font-mono text-slate-200 border border-white/10 shadow-sm">
                      <Clock className="w-3 h-3 text-[#FFBF00]" />
                      <span>{item.readTimeOrDuration}</span>
                    </div>
                  </div>
                ) : (
                  /* Fallback if no thumbnail */
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {getSourceBadge(item.type)}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.readTimeOrDuration}</span>
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-[#FFBF00] transition-colors mb-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tags & Watch / Read CTA */}
              <div className="pt-3 border-t border-[#1F2937] flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F19] text-slate-400 border border-[#1F2937]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-white group-hover:text-[#FFBF00] flex items-center gap-1 shrink-0 ml-2">
                  {item.type === 'youtube' ? 'Watch' : 'Read'}
                  <ExternalLink className="w-3 h-3" />
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
