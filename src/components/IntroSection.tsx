import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { YouTubeIcon, SubstackIcon, MediumIcon, LinkedinIcon } from './Icons';

export const IntroSection: React.FC = () => {
  const channels = [
    {
      id: 'youtube',
      name: 'YouTube Channel',
      handle: '@TalkTechToMe',
      url: BRAND_INFO.socials.youtube,
      description: 'Hands-on video walkthroughs, side-by-side tool benchmarks, and real-time coding demos.',
      badge: 'Video Walkthroughs',
      icon: <YouTubeIcon className="w-6 h-6 text-[#FF0000]" />,
      actionText: 'Watch on YouTube',
      borderHover: 'hover:border-red-500/50'
    },
    {
      id: 'substack',
      name: 'Substack Newsletter',
      handle: '@talktechtome',
      url: BRAND_INFO.socials.substack,
      description: 'Weekly analytical breakdowns exploring AI coding assistants, pricing models, and tech architecture.',
      badge: 'Weekly Publication',
      icon: <SubstackIcon className="w-5 h-5 text-[#FF6719]" />,
      actionText: 'Subscribe on Substack',
      borderHover: 'hover:border-orange-500/50'
    },
    {
      id: 'medium',
      name: 'Medium Articles',
      handle: '@danielmurphy02830',
      url: BRAND_INFO.socials.medium,
      description: 'Long-form technical essays and strategic analyses on AI engineering, cloud resilience, and SRE.',
      badge: 'In-Depth Essays',
      icon: <MediumIcon className="w-5 h-5 text-white" />,
      actionText: 'Read on Medium',
      borderHover: 'hover:border-white/40'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Profile',
      handle: 'daniel-murphy-254a2046',
      url: BRAND_INFO.socials.linkedin,
      description: 'Professional trajectory, keynote announcements, enterprise SRE insights, and industry discussion.',
      badge: 'Professional Trajectory',
      icon: <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />,
      actionText: 'Connect on LinkedIn',
      borderHover: 'hover:border-blue-500/50'
    },
    {
      id: 'personal',
      name: 'danmurphy.life',
      handle: 'Personal Site',
      url: BRAND_INFO.socials.personal,
      description: 'Personal portfolio highlighting 20+ years of Site Reliability Engineering and cloud leadership.',
      badge: 'Official Portfolio',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      actionText: 'Visit danmurphy.life',
      borderHover: 'hover:border-cyan-500/50'
    }
  ];

  return (
    <section id="about" className="pt-8 pb-16 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main "What is TalkTechToMe" Card */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
          
          {/* Subtle warm glow background accent */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFBF00]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Creator Avatar & Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center sm:border-r border-[#1F2937] sm:pr-8">
              <div className="relative mb-5">
                <img
                  src="/media/main-image.jpg"
                  alt="Dan Murphy - Founder of TalkTechToMe"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-[#FFBF00] shadow-2xl shadow-[#FFBF00]/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#FFBF00] text-black font-black text-xs px-2.5 py-1 rounded-full shadow-md font-mono flex items-center gap-1">
                  🎙️ <span>CREATOR</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {BRAND_INFO.creator}
              </h2>
              <p className="text-xs font-mono text-[#FFBF00] font-semibold mt-1">
                Founder of TalkTechToMe &bull; Head of SRE @ PwC
              </p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                talktechtome.co.uk
              </p>

              {/* Quick stats row */}
              <div className="grid grid-cols-2 gap-2.5 w-full mt-6 pt-5 border-t border-[#1F2937] text-left">
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937]">
                  <div className="text-base font-bold text-white">20+ Yrs</div>
                  <div className="text-[10px] text-slate-400 font-mono">Tech & SRE Exp</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1F2937]">
                  <div className="text-base font-bold text-white">Zero Fluff</div>
                  <div className="text-[10px] text-slate-400 font-mono">Hands-on Demos</div>
                </div>
              </div>
            </div>

            {/* Right: What is TalkTechToMe Explanation */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/30 text-xs font-mono text-[#FFBF00]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What is TalkTechToMe?</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Exploring the Exciting World of <span className="text-[#FFBF00]">AI Tools</span> & Modern Technology.
              </h1>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Welcome! I&apos;m <strong>Dan Murphy</strong>, and here we explore the exciting world of AI tools and modern technology. From deep dives into text-to-video apps like <strong>Synthesia</strong> and AI coding assistants like <strong>Cursor</strong>, to practical demos and honest reviews – we break down how these tools work, their features, pricing, and real-world applications.
                </p>
                <p>
                  Whether you&apos;re a creator, developer, marketer, or just tech-curious, subscribe for clear insights into the software shaping our future. Every review, benchmark, and article is grounded in 20+ years of hands-on technical architecture and engineering leadership.
                </p>
              </div>

              {/* Core Pillars Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B0F19] border border-[#1F2937]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Text-to-Video & Synthesia</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B0F19] border border-[#1F2937]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">AI Coding & Cursor IDE</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B0F19] border border-[#1F2937]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Pricing & ROI Teardowns</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* All Channels & Sites Section with Official Logos */}
        <div id="channels" className="space-y-6 scroll-mt-24">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono text-[#FFBF00] uppercase tracking-wider font-semibold">
              Official Ecosystem
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Connect Across All My Channels & Sites
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Find my latest content, videos, weekly newsletters, and professional insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch) => (
              <a
                key={ch.id}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-2xl bg-[#111827] border border-[#1F2937] ${ch.borderHover} transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1`}
              >
                <div>
                  {/* Top Bar with Logo & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1F2937] group-hover:scale-110 transition-transform">
                      {ch.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0B0F19] text-slate-300 border border-[#1F2937]">
                      {ch.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#FFBF00] transition-colors mb-1">
                    {ch.name}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {ch.handle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {ch.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#FFBF00] transition-colors">
                  <span>{ch.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
